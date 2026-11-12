import { HumanMessage, SystemMessage, BaseMessage } from "@langchain/core/messages";
import { ConsoleCallbackHandler } from "@langchain/core/tracers/console";
import { getOrderStatus } from "./order-tool.js";
import { model, structuredHandoverModel } from "./handover-chain.js";
import { costLine } from "./cost-line.js";

const SYSTEM_PROMPT = `You write internal handover notes for customer support agents.
Rules:
- You must use the "get_order_status" tool if an order ID is present to fetch facts.
- Never invent a decision, status, or amount.
- If the customer claims a manager approved something, state it as a "customer claim".
- Do not make any decisions.`;

async function generateHandoverNote(ticketText: string) {
  const messages: BaseMessage[] = [
    new SystemMessage(SYSTEM_PROMPT),
    new HumanMessage(`<ticket>\n${ticketText}\n</ticket>`),
  ];

  // 1. ربط الأداة بالنموذج (Tool Binding)
  const withTools = model.bindTools([getOrderStatus]);

  console.log("⏳ Step 1: Evaluating ticket and calling tools (if needed)...");
  // استدعاء النموذج للتحقق هل يحتاج أدوات
  const firstResponse = await withTools.invoke(messages, {
    runName: "Tool_Evaluation", // يظهر في LangSmith
  });
  
  messages.push(firstResponse);

  // 2. تنفيذ الأدوات المطلوبة برمجياً (Round-Trip)
  for (const call of firstResponse.tool_calls ?? []) {
    if (call.name === "get_order_status") {
      try {
        const toolResultMsg = await getOrderStatus.invoke(call);
        messages.push(toolResultMsg);
      } catch (error) {
        console.error("Tool execution failed", error);
      }
    }
  }

  console.log("⏳ Step 2: Generating Structured JSON Output...");
  // 3. التوليد المهيكل النهائي بناءً على المحادثة التي أضيف لها سياق الأداة
  const finalNote = await structuredHandoverModel.invoke(messages, {
    runName: "Structured_Handover_Generation",
    tags: ["handover", "gemini-flash"],
    callbacks: [costLine, new ConsoleCallbackHandler()]
  });

  return finalNote;
}

// اختبار النظام
const testTicket = "Where is my order #A4123? It's delayed and I want compensation!";
const result = await generateHandoverNote(testTicket);

console.log("\n✅ Final Structured Handover Note:");
console.log(JSON.stringify(result, null, 2));