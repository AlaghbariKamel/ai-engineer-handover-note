// import { readFileSync } from "node:fs";
// import { generateHandoverNote } from "./handover-note.js";

// async function runLangChainEvals() {
//   const casesRaw = readFileSync("evals/handover-note.cases.json", "utf8");
//   const cases = JSON.parse(casesRaw);

//   console.log(`🚀 Running LangChain + Gemini Evals (${cases.length} cases)...\n`);

//   for (const [index, testCase] of cases.entries()) {
//     console.log(`\n--- Case ${index + 1}: ${testCase.id} (${testCase.kind}) ---`);

//     try {
//       const note = await generateHandoverNote({
//         id: testCase.id,
//         orderId: testCase.input.order.id,
//         thread: testCase.input.thread,
//       });

//       console.log("Structured Output:", JSON.stringify(note, null, 2));
//       console.log("Expected:", testCase.expect);
//       console.log("Must NOT include:", testCase.must_not);
//     } catch (error) {
//       console.error(`❌ Failed on ${testCase.id}:`, error);
//     }
//   }
// }

// runLangChainEvals();
import { readFileSync } from "node:fs";
import { generateHandoverNote } from "./handover-note.js";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function runLangChainEvals() {
  const casesRaw = readFileSync("evals/handover-note.cases.json", "utf8");
  const cases = JSON.parse(casesRaw);

  console.log(`🚀 Running LangChain + Gemini Evals (${cases.length} cases)...\n`);

  for (const [index, testCase] of cases.entries()) {
    console.log(`\n--- Case ${index + 1}: ${testCase.id} (${testCase.kind}) ---`);

    try {
      const note = await generateHandoverNote({
        id: testCase.id,
        orderId: testCase.input.order.id,
        thread: testCase.input.thread,
      });

      console.log("Structured Output:", JSON.stringify(note, null, 2));
      console.log("Expected:", testCase.expect);
      console.log("Must NOT include:", testCase.must_not);
    } catch (error) {
      console.error(`❌ Failed on ${testCase.id}:`, error);
    }

    // 8.5 ثوانٍ لضمان البقاء تحت حد 15 طلب/دقيقة (15 RPM)
    await sleep(8500);
  }
}

runLangChainEvals();