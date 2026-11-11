import { readFileSync } from "node:fs";
import { generateHandoverNote } from "./src/handover-note.js";

async function runEvals() {
    const casesRaw = readFileSync("evals/handover-note.cases.json", "utf8");
    const cases = JSON.parse(casesRaw);

    console.log(`Starting evals for ${cases.length} cases...\n`);

    for (const [index, testCase] of cases.entries()) {
        console.log(`\n--- Case ${index + 1}: ${testCase.id} (${testCase.kind}) ---`);
    
        const mockTicket = {
            id: testCase.id,
            orderId: testCase.input.order.id,
            thread: testCase.input.thread,
        };

        try {
            const result = await generateHandoverNote(mockTicket);
           
          
       
            const firstBlock = result.response.content[0];
            if (firstBlock.type === "text") {
                console.log("Output:");
                console.log(firstBlock.text);
            } else {
                console.log("Output was not text. Type:", firstBlock.type);
            }
             console.log("📊 Token Metrics:", result.metrics);
            console.log("\nExpected to include:", testCase.expect);
            console.log("Must not include:", testCase.must_not);
        } catch (error) {
            console.error("Error evaluating case:", error);
        }
    }
}

runEvals();