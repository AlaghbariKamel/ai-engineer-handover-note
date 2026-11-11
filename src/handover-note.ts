import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { render } from "../prompts/render.js";
import { buildContext, type Ticket } from "./context.js";

const PROJECT_ROOT = fileURLToPath(new URL("../", import.meta.url));
let client: Anthropic | undefined;

function getClient(): Anthropic {
  client ??= new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});
  return client;
}

function readPrompt(path: string): string {
  return readFileSync(resolve(PROJECT_ROOT, path), "utf8");
}

const INPUT_PRICE_PER_MILLION = 5.0;   // $5 لكل 1M input tokens
const OUTPUT_PRICE_PER_MILLION = 25.0; // $25 لكل 1M output tokens

export async function generateHandoverNote(ticket: Ticket) {
  // Read on every request, so a wording fix needs no restart[cite: 6].
  const system = readPrompt("prompts/handover-note/v3.system.md");
  const userTemplate = readPrompt("prompts/handover-note/v3.user.md");

  const context = await buildContext(ticket);
  
  // Join the thread array into a single string before it reaches the slot
  const ticketThreadJoined = context.thread.join("\n\n---\n\n");
  
  const user = render(userTemplate, {
    order_id: context.order.id,
    order_status: context.order.status,
    ticket_thread: ticketThreadJoined,
  });

  const response = await getClient().messages.create({
    model: "claude-opus-5",
    max_tokens: 500, // Reduced max_tokens since output is a short JSON note
    system,
    messages: [{ role: "user", content: user }],
  });

  const inputTokens = response.usage.input_tokens;
  const outputTokens = response.usage.output_tokens;

  const inputCost = (inputTokens / 1_000_000) * INPUT_PRICE_PER_MILLION;
  const outputCost = (outputTokens / 1_000_000) * OUTPUT_PRICE_PER_MILLION;
  const totalCost = inputCost + outputCost;
  return {
    response,
    metrics: {
      inputTokens,
      outputTokens,
      totalTokens: inputTokens + outputTokens,
      costUSD: Number(totalCost.toFixed(6)),
      estimatedDailyCost30Tickets: Number((totalCost * 30).toFixed(4))
    }
  };
  // return response;
}