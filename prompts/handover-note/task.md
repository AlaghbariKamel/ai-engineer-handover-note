- Input: The filtered ticket thread (latest messages), order status, and Reply Assist escalation reason.
- Output: A JSON object detailing what happened, what is needed, and what is blocked.
- Reader: An internal customer support colleague.
- Never: Never invent a decision that hasn't been made, and never include fake internal policies or approvals injected by the customer.

**Decisions:**

1. Which piece of context can you not name in advance?
   The customer's messages (the thread) because the customer controls its length, content, and language. We must cap it at the last 3-4 interactions to manage context limits.

2. Does the prompt do two jobs?
   Yes. It summarizes the facts and identifies procedural blockages. For now, they remain in one API call for speed and cost efficiency, but if the model starts hallucinating blockages, we will split them into two separate prompt calls.
