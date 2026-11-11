export type Ticket = {
  id: string;
  thread: string[];
  orderId: string;
};

export type Context = {
  order: {
    id: string;
    status: string;
  };
  thread: string[]; 
};

// const orderStatus = new Map([
//   ["#A4123", "shipped, DHL, last scan 12 August in Leipzig"],
//   ["A4207", "delivered, 2026-08-14"], // Case 1
//   ["B9921", "delayed, no delivery date"], // Case 2
//   ["C1102", "processing"], // Case 3
// ]);

const orderStatus = new Map([
  ["#A4123", "shipped, DHL, last scan 12 August in Leipzig"],
  ["A4207", "delivered, 2026-08-14"],
  ["A4124", "delivered, 2026-08-10"],
  ["A4125", "delivered, 2026-08-11"],
  ["A4126", "processing"],
  ["A4127", "processing"],
  ["A4128", "shipped, FedEx"],
  ["A4129", "delivered, 2026-08-01"],
  ["A4130", "delivered, 2026-08-05"],
  ["A4131", "delivered, 2026-08-09"],
  ["C1102", "processing"],
  ["C1103", "delivered"],
  ["C1104", "delivered"],
  ["C1105", "delivered"],
  ["C1106", "delivered"],
  ["B9921", "delayed, no delivery date"],
  ["B9922", "delivered"],
  ["B9923", "delivered"],
  ["B9924", "processing"],
  ["B9925", "delivered"]
]);
export async function buildContext(ticket: Ticket): Promise<Context> {
  const status = orderStatus.get(ticket.orderId);
  if (!status) throw new Error(`order not found: ${ticket.orderId}`);

  return {
    order: { id: ticket.orderId, status },
    thread: ticket.thread,
  };
}

