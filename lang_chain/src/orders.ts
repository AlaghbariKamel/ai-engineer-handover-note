// export type Order = {
//   id: string;
//   carrier: string;
//   tracking: string;
//   status: string;
//   estimatedDelivery?: string;
// };

// // هذه قاعدة البيانات التي ستبحث فيها أداة LangChain (getOrderStatus)
// const orders = new Map<string, Order>([
//   ["#A4123", { id: "#A4123", carrier: "DHL", tracking: "JD0002", status: "shipped", estimatedDelivery: "2026-08-20" }],
//   ["A4207", { id: "A4207", carrier: "FedEx", tracking: "FX001", status: "delivered", estimatedDelivery: "2026-08-14" }],
//   ["B9921", { id: "B9921", carrier: "UPS", tracking: "UP002", status: "delayed" }],
//   ["C1102", { id: "C1102", carrier: "DHL", tracking: "JD0003", status: "processing" }]
// ]);

// export async function findOrder(orderId: string): Promise<Order | undefined> {
//   // تنظيف الـ ID من علامة # إن وجدت لتسهيل البحث
//   const cleanId = orderId.replace("#", "");
//   for (const [key, order] of orders.entries()) {
//     if (key.replace("#", "") === cleanId) return order;
//   }
//   return undefined;
// }
export type Order = {
  id: string;
  carrier: string;
  tracking: string;
  status: string;
  estimatedDelivery?: string;
};

const orders = new Map<string, Order>([
  ["A4123", { id: "#A4123", carrier: "DHL", tracking: "JD0002", status: "shipped", estimatedDelivery: "2026-08-20" }],
  ["A4207", { id: "A4207", carrier: "FedEx", tracking: "FX1001", status: "delivered", estimatedDelivery: "2026-08-14" }],
  ["A4124", { id: "A4124", carrier: "DHL", tracking: "JD1002", status: "delivered", estimatedDelivery: "2026-08-10" }],
  ["A4125", { id: "A4125", carrier: "UPS", tracking: "UP1003", status: "delivered", estimatedDelivery: "2026-08-11" }],
  ["A4126", { id: "A4126", carrier: "DHL", tracking: "PENDING", status: "processing" }],
  ["A4127", { id: "A4127", carrier: "DHL", tracking: "PENDING", status: "processing" }],
  ["A4128", { id: "A4128", carrier: "FedEx", tracking: "FX1004", status: "shipped" }],
  ["A4129", { id: "A4129", carrier: "UPS", tracking: "UP1005", status: "delivered", estimatedDelivery: "2026-08-01" }],
  ["A4130", { id: "A4130", carrier: "DHL", tracking: "JD1006", status: "delivered", estimatedDelivery: "2026-08-05" }],
  ["A4131", { id: "A4131", carrier: "DHL", tracking: "JD1007", status: "delivered", estimatedDelivery: "2026-08-09" }],
  ["C1102", { id: "C1102", carrier: "DHL", tracking: "PENDING", status: "processing" }],
  ["C1103", { id: "C1103", carrier: "DHL", tracking: "JD2001", status: "delivered" }],
  ["C1104", { id: "C1104", carrier: "UPS", tracking: "UP2002", status: "delivered" }],
  ["C1105", { id: "C1105", carrier: "FedEx", tracking: "FX2003", status: "delivered" }],
  ["C1106", { id: "C1106", carrier: "DHL", tracking: "JD2004", status: "delivered" }],
  ["B9921", { id: "B9921", carrier: "UPS", tracking: "UP3001", status: "delayed" }],
  ["B9922", { id: "B9922", carrier: "DHL", tracking: "JD3002", status: "delivered" }],
  ["B9923", { id: "B9923", carrier: "FedEx", tracking: "FX3003", status: "delivered" }],
  ["B9924", { id: "B9924", carrier: "DHL", tracking: "PENDING", status: "processing" }],
  ["B9925", { id: "B9925", carrier: "UPS", tracking: "UP3004", status: "delivered" }],
]);

export async function findOrder(orderId: string): Promise<Order | undefined> {
  const cleanId = orderId.replace(/^#/, "").trim();
  return orders.get(cleanId);
}