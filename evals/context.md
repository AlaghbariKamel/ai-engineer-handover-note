# Context Tokens & Costs

## Included

- Order ID & Status: 25 tokens
- Ticket Thread (Last 3 messages joined): ~300 tokens
- Reply Assist escalation flag: 15 tokens

## Excluded & Why

- The 60-page escalation handbook: Left out because it's too long, mostly irrelevant, and would cost too much per call.
- The 40-field order record: Dropped 38 fields (e.g., billing address, marketing opt-ins) because they do not affect the handover summary.
- Customer's past tickets: Left out because this summary is strictly for the current blocked issue.

## Shortening Decisions

We summarize the thread by taking only the exact text of the last 3 messages. A full summary of older messages might drop the specific tone or exact complaint the customer used.

## Daily Cost (claude-opus-5)

Input tokens per note: ~340 tokens
Output tokens per note: ~120 tokens
Cost per note: (340 _ $5 / 1,000,000) + (120 _ $25 / 1,000,000) = $0.0017 + $0.0030 = $0.0047
Daily cost (30 tickets): 30 \* $0.0047 = $0.14 per day
