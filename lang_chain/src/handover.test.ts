import { expect, it } from "vitest";
import { getOrderStatus } from "./order-tool.js";
import { HandoverNoteResult } from "./schema.js";

it("fetches valid order details via getOrderStatus tool", async () => {
  const rawResult = await getOrderStatus.invoke({ order_id: "A4207" });
  const parsed = JSON.parse(rawResult as string);
  expect(parsed.status).toBe("delivered");
  expect(parsed.carrier).toBe("FedEx");
});

it("validates structured output schema constraints", () => {
  const validNote = {
    summary: "Customer received damaged parcel and sent photo.",
    needed: "Review photo and apply damaged goods policy.",
    blocked_by: "",
    status: "valid",
  };
  expect(() => HandoverNoteResult.parse(validNote)).not.toThrow();
});