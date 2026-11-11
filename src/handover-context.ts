export type Ticket = {
  id: string;
  thread: string[]; // تم التعديل لتصبح مصفوفة رسائل بدلاً من نص واحد
  orderId: string;
};

export type Context = {
  order: {
    id: string;
    status: string;
  };
  thread: string[]; 
};