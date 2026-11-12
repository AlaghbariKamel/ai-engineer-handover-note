// import { tool } from "@langchain/core/tools";
// import { z } from "zod";
// import { findOrder } from "./orders.js"; // ملف قاعدة البيانات الوهمية[cite: 9]

// export const getOrderStatus = tool(
//   async ({ order_id }) => {
//     console.log(`[Tool Executed] Fetching order: ${order_id}`);
//     const order = await findOrder(order_id);
//     if (!order) {
//       return "No order with that ID. Ask the customer to check it.";
//     }
//     return JSON.stringify(order);
//   },
//   {
//     name: "get_order_status",
//     description:
//       "Look up order details by ID. Returns the carrier, tracking, and delivery status. Use it when the ticket mentions an order ID.",
//     schema: z.object({
//       order_id: z
//         .string()
//         .regex(/^(#)?[A-Z0-9]+$/)
//         .describe("The order ID from the ticket, e.g., #A4123"),
//     }),
//   },
// );

import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { findOrder } from "./orders.js";

export const getOrderStatus = tool(
  async ({ order_id }) => {
    const order = await findOrder(order_id);
    if (!order) {
      return "Order not found in database. Do not guess its status.";
    }
    return JSON.stringify(order);
  },
  {
    name: "get_order_status",
    description:
      "Look up an order by its ID to get carrier, tracking number, and delivery status. " +
      "Call this whenever a valid ticket has an order ID and needs context.",
    schema: z.object({
      order_id: z
        .string()
        .regex(/^#?[A-Z]\d{4}$/)
        .describe("The order ID, for example #A4123 or A4207"),
    }),
  },
);