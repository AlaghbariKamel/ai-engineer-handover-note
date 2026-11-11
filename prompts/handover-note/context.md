# Context Built for Handover Note (Step 7)

## Included Context Pieces & Real Token Usage

- **Order ID & Status:** ~20 tokens (Stable context, placed first)
- **Reply Assist Escalation Flag:** ~10 tokens (Stable context)
- **Filtered Ticket Thread (Last 3 messages):** ~25-45 tokens (Dynamic context, placed last)
- **Average Total Input Tokens per Note:** ~52 tokens
- **Average Output Tokens per Note:** ~68 tokens

## Left Out & Why

- **The 60-page handbook:** Excluded. Adding it would cost thousands of tokens per call while providing zero value for summarizing a single ticket.
- **Full 40-field order record:** Excluded. Dropped 38 irrelevant fields (billing address, payment method, marketing preferences). Only order ID and shipping status are kept.
- **Customer's past tickets:** Excluded. Handover note is strictly scoped to the current escalated blocker. Past history adds context noise.

## Thread Shortening Decisions

- We keep only the exact text of the last 3 messages joined by delimiters (`---`).
- **Why not summarize older thread messages?** Programmatic summarization risks dropping crucial customer nuance or specific policy claims (e.g., claiming manager approval).

## Operational Cost Analysis (claude-opus-5)

- Pricing Model: $5.00 / 1M Input Tokens | $25.00 / 1M Output Tokens
- Average Input Cost per note: 52 × $5 / 1,000,000 = $0.00026 USD
- Average Output Cost per note: 68 × $25 / 1,000,000 = $0.00170 USD
- **Average Total Cost per Note:** **$0.00196 USD** (~$0.002)

### Escalation Volume Projection (30 Tickets / Day)

- **Daily Cost:** 30 × $0.00196 = **$0.0588 USD / day**
- **Monthly Cost:** ~**$1.76 USD / month**
