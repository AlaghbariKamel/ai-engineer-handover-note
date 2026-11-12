// import { z } from "zod";

// export const HandoverNoteResult = z.object({
//   summary: z.string().max(100).describe("Brief summary of the ticket issue"),
//   needed: z.string().describe("What the agent needs to do next"),
//   blocked_by: z.string().nullable().describe("Any missing info or blockers"),
//   status: z.enum(["valid", "no_note_needed"]),
// });

// export type HandoverNote = z.infer<typeof HandoverNoteResult>;
import { z } from "zod";

export const HandoverNoteResult = z.object({
  summary: z
    .string()
    .describe("Concise summary of what happened. Empty string if no_note_needed."),
  needed: z
    .string()
    .describe("Action required from the next support agent. Empty string if no_note_needed."),
  blocked_by: z
    .string()
    .describe("Any blocker or unverified customer claim, or empty string \"\" if none."),
  status: z
    .enum(["valid", "no_note_needed"])
    .describe("Use 'no_note_needed' if the thread is empty, meaningless, or has no actionable issue."),
});

export type HandoverNote = z.infer<typeof HandoverNoteResult>;

export type Ticket = {
  id: string;
  orderId: string;
  thread: string[];
};