// cost-line.ts
// import type { AIMessage } from "@langchain/core/messages";
// import { costUsd } from "./pricing.js";
// import type { ChatGeneration, LLMResult } from "@langchain/core/outputs";
// export const costLine = {
//   handleLLMEnd(output: LLMResult) {
//         const generation = output.generations[0]?.[0] as
//             | ChatGeneration
//             | undefined;
//     const message = generation?.message as AIMessage | undefined;
//     const usage = message?.usage_metadata;
//     if (!usage) return;

//     console.log(
//       `📊 Tokens: ${usage.input_tokens} in, ${usage.output_tokens} out — ` +
//       `$${costUsd("gemini-1.5-flash", usage.input_tokens, usage.output_tokens).toFixed(6)}`
//     );
//   },
// };

import type { AIMessage } from "@langchain/core/messages";
import type { ChatGeneration, LLMResult } from "@langchain/core/outputs";
import { costUsd, MODEL_NAME } from "./pricing.js";

export const costLine = {
  handleLLMEnd(output: LLMResult) {
    const generation = output.generations[0]?.[0] as ChatGeneration | undefined;
    const usage = (generation?.message as AIMessage | undefined)?.usage_metadata;
    if (!usage) return;

    const cost = costUsd(MODEL_NAME, usage.input_tokens, usage.output_tokens);
    console.log(
      `📊 [Observability] tokens: ${usage.input_tokens} in, ${usage.output_tokens} out — $${cost.toFixed(6)}`,
    );
  },
};