import { generateHandoverNote } from "./src/handover-note.js";

async function main() {
  const mockTicket = {
    id: "T-9330",
    orderId: "#A4123", 
    thread: [
      "My parcel arrived smashed. I want compensation.",
      "Sorry to hear that — could you send a photo?",
      "Photo attached. This is the second time."
    ]
  };

  console.log("⏳ Sending request to Claude...");
  try {
    const result = await generateHandoverNote(mockTicket);
    const firstBlock = result.response.content[0];

    if (firstBlock.type === "text") {
      console.log("✅ Response:\n", firstBlock.text);
    } else {
      console.log("⚠️ Unexpected response type:", firstBlock.type);
    }
     console.log("📊 Token Metrics:", result.metrics);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

main();