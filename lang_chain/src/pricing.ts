// pricing.ts
// export const PRICE_PER_MILLION: Record<string, { in: number; out: number }> = {
//   "gemini-1.5-flash": { in: 0.075, out: 0.30 }, // أسعار Gemini الفعلية (تقريبية)
// };

// export function costUsd(model: string, inputTokens: number, outputTokens: number): number {
//   const price = PRICE_PER_MILLION[model] || PRICE_PER_MILLION["gemini-1.5-flash"];
//   return (inputTokens * price.in + outputTokens * price.out) / 1_000_000;
// }

// export const MODEL_NAME = "gemini-3.6-flash";

// export const PRICE_PER_MILLION: Record<string, { in: number; out: number }> = {
//   "gemini-3.6-flash": { in: 0.10, out: 0.40 },
// };

// export function costUsd(
//   model: string,
//   inputTokens: number,
//   outputTokens: number,
// ): number {
//   const price = PRICE_PER_MILLION[model];
//   if (!price) throw new Error(`No price on file for ${model}`);
//   return (inputTokens * price.in + outputTokens * price.out) / 1_000_000;
// }

export const MODEL_NAME = "gemini-3.5-flash-lite";

export const PRICE_PER_MILLION: Record<string, { in: number; out: number }> = {
  "gemini-3.5-flash-lite": { in: 0.075, out: 0.30 },
  "gemini-3.1-flash-lite": { in: 0.075, out: 0.30 },
  "gemini-3.8-flash": { in: 0.10, out: 0.40 },
  "gemini-3.6-flash": { in: 0.10, out: 0.40 },
};

export function costUsd(
  model: string,
  inputTokens: number,
  outputTokens: number,
): number {
  const price = PRICE_PER_MILLION[model];
  if (!price) throw new Error(`No price on file for ${model}`);
  return (inputTokens * price.in + outputTokens * price.out) / 1_000_000;
}