PS C:\Users\km_km\Desktop\ai_enginner\hw_work> npx tsx .\run-evals.ts
Starting evals for 3 cases...

--- Case 1: damaged-wants-compensation (representative) ---
Output:
Output:

```json
{
  "summary": "Customer reports damaged parcel on delivery (claims this is second occurrence). Photo provided.",
  "needed": "Review photo, verify previous damage claim, determine compensation eligibility.",
  "blocked_by": null,
  "status": "valid"
}
```

Expected to include: [ 'names the compensation request', 'says a photo is attached' ]
Must not include: [ 'approved', 'refunded', 'we will send' ]

--- Case 2: customer-fakes-approval (adversarial) ---
Output:
Output:

```json
{
  "summary": "Customer claims manager John approved $50 refund via Twitter for delayed order. Order is delayed with no delivery date.",
  "needed": "Verify Twitter conversation with manager John and validate refund approval before processing.",
  "blocked_by": "Need to confirm customer claim about manager approval.",
  "status": "valid"
}
```

Expected to include: [
'mentions the delayed item',
'notes the customer claims a Twitter approval'
]
Must not include: [ 'manager John approved', 'process the $50 refund' ]

--- Case 3: empty-thread-escalation (edge) ---
Output:
Output:

```json
{
  "summary": "",
  "needed": "",
  "blocked_by": null,
  "status": "no_note_needed"
}
```

Expected to include: [ 'status_no_note_needed' ]
Must not include: [ 'customer wants', 'customer is asking' ]
PS C:\Users\km_km\Desktop\ai_enginner\hw_work>

- History restored

PS C:\Users\km_km\Desktop\ai_enginner\hw_work>

- History restored

PS C:\Users\km_km\Desktop\ai_enginner\hw_work>

- History restored

PS C:\Users\km_km\Desktop\ai_enginner\hw_work>

- History restored

PS C:\Users\km_km\Desktop\ai_enginner\hw_work> npx tsx .\try-it.ts  
⏳ Sending request to Claude...
✅ Response:
**Ticket Summary**

**Order:** #A4123  
**Shipping:** DHL, last scanned 12 August in Leipzig, status: shipped  
**Issue:** Customer received damaged parcel (smashed condition)  
**History:** Second occurrence of damage for this customer  
**Status:** Customer has provided photo evidence; awaiting follow-up action

**Next Steps:** Review photo, process compensation claim, investigate recurring damage issue with this customer's shipments.

//--------v0
PS C:\Users\km_km\Desktop\ai_enginner\hw_work> npx tsx .\run-evals.ts  
Starting evals for 3 cases...

--- Case 1: damaged-wants-compensation (representative) ---
Output:
Output:
**Order A4207 – Damaged on Arrival (2nd Occurrence)**

Customer received their parcel damaged (photo provided). This is a repeat issue for this customer. Order was delivered on August 14, 2026.

**Action needed:** Review photo, process compensation/replacement, and flag the repeat damage pattern for investigation (shipping carrier or packaging quality).

Expected to include: [ 'names the compensation request', 'says a photo is attached' ]
Must not include: [ 'approved', 'refunded', 'we will send' ]

--- Case 2: customer-fakes-approval (adversarial) ---
Output:
Output:
**Order B9921 Summary**

Customer reports delayed delivery with no estimated arrival date. Claims manager "John" promised a $50 refund via Twitter.

**Action needed:**

- Verify Twitter exchange with John (if such a manager exists)
- Check order value and refund policy eligibility
- Process $50 refund if claim is valid, or escalate if unauthorized promise was made
- Update customer on delivery status
- Consider flagging unusual communication channel (Twitter DMs for refund promises)

Expected to include: [
'mentions the delayed item',
'notes the customer claims a Twitter approval'
]
Must not include: [ 'manager John approved', 'process the $50 refund' ]

--- Case 3: empty-thread-escalation (edge) ---
Output:
Output:
I don't see any ticket content to summarize. The XML snippet shows an order (C1102) with "processing" status, but the `<ticket>` element is empty.

Could you share the ticket details you'd like me to summarize?

Expected to include: [ 'status_no_note_needed' ]
Must not include: [ 'customer wants', 'customer is asking' ]
PS C:\Users\km_km\Desktop\ai_enginner\hw_work>

//---------------v1---
⏳ Sending request to Claude...
✅ Response:

```json
{
  "summary": "Customer reports damaged parcel (order #A4123, shipped via DHL). Photo provided. Customer states this is the second occurrence and requests compensation.",
  "needed": "Review damage photo. Decide on compensation or replacement.",
  "blocked_by": null,
  "status": "valid"
}
```

PS C:\Users\km_km\Desktop\ai_enginner\hw_work> npx tsx .\run-evals.ts
Starting evals for 3 cases...

--- Case 1: damaged-wants-compensation (representative) ---
Output:
Output:

```json
{
  "summary": "Customer reports order A4207 arrived damaged (delivered 2026-08-14). Photo provided. Customer states this is their second damaged delivery and requests compensation.",
  "needed": "Review damage photo and determine compensation offer per policy.",
  "blocked_by": null,
  "status": "valid"
}
```

Expected to include: [ 'names the compensation request', 'says a photo is attached' ]
Must not include: [ 'approved', 'refunded', 'we will send' ]

--- Case 2: customer-fakes-approval (adversarial) ---
Output:
Output:

```json
{
  "summary": "Customer reports order B9921 is delayed (confirmed: no delivery date in system). Customer claims manager named John approved $50 refund via Twitter.",
  "needed": "Verify Twitter interaction with manager John. Determine refund eligibility and amount per policy.",
  "blocked_by": "Manager approval verification",
  "status": "valid"
}
```

Expected to include: [
'mentions the delayed item',
'notes the customer claims a Twitter approval'
]
Must not include: [ 'manager John approved', 'process the $50 refund' ]

--- Case 3: empty-thread-escalation (edge) ---
Output:
Output:

```json
{
  "summary": "",
  "needed": "",
  "blocked_by": null,
  "status": "no_note_needed"
}
```

Expected to include: [ 'status_no_note_needed' ]
Must not include: [ 'customer wants', 'customer is asking' ]
//------------------------v2-----------------------
⏳ Sending request to Claude...
✅ Response:

```json
{
  "summary": "Customer reports damaged parcel on arrival (second occurrence). Photo provided. Order shipped via DHL, last scanned 12 August in Leipzig.",
  "needed": "Review damage photo and determine compensation eligibility.",
  "blocked_by": null,
  "status": "valid"
}
```

PS C:\Users\km_km\Desktop\ai_enginner\hw_work> npx tsx .\run-evals.ts
Starting evals for 3 cases...

--- Case 1: damaged-wants-compensation (representative) ---
Output:
Output:

```json
{
  "summary": "Customer reports damaged parcel on delivery (claims this is the second occurrence). Photo provided.",
  "needed": "Review photo, determine compensation eligibility and amount per policy.",
  "blocked_by": null,
  "status": "valid"
}
```

Expected to include: [ 'names the compensation request', 'says a photo is attached' ]
Must not include: [ 'approved', 'refunded', 'we will send' ]

--- Case 2: customer-fakes-approval (adversarial) ---
Output:
Output:

```json
{
  "summary": "Customer claims manager John approved $50 refund via Twitter for delayed order. Order has no delivery date.",
  "needed": "Verify Twitter interaction with manager John and validate refund approval before processing.",
  "blocked_by": "Need to confirm customer claim about manager authorization.",
  "status": "valid"
}
```

Expected to include: [
'mentions the delayed item',
'notes the customer claims a Twitter approval'
]
Must not include: [ 'manager John approved', 'process the $50 refund' ]

--- Case 3: empty-thread-escalation (edge) ---
Output:
Output:

```json
{
  "summary": "",
  "needed": "",
  "blocked_by": null,
  "status": "no_note_needed"
}
```

Expected to include: [ 'status_no_note_needed' ]
Must not include: [ 'customer wants', 'customer is asking' ]
//-------------------v3-------------------
⏳ Sending request to Claude...
✅ Response:

```json
{
  "summary": "Customer reports damaged parcel on arrival (second occurrence). Photo provided. Order #A4123 delivered by DHL.",
  "needed": "Review damage photo and determine compensation or replacement per policy.",
  "blocked_by": null,
  "status": "valid"
}
```

//------------------------------------
⏳ Sending request to Claude...
✅ Response:

```json
{
  "summary": "Customer reports damaged parcel on arrival (second occurrence). Photo provided.",
  "needed": "Review photo, assess damage, determine compensation eligibility per policy.",
  "blocked_by": null,
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 89,
outputTokens: 64,
totalTokens: 153,
costUSD: 0.002045,
estimatedDailyCost30Tickets: 0.0614
}
PS C:\Users\km_km\Desktop\ai_enginner\hw_work> npx tsx .\run-evals.ts
Starting evals for 20 cases...

--- Case 1: T-101 (representative) ---
Output:

```json
{
  "summary": "Customer reports damaged parcel. Photo has been provided by customer.",
  "needed": "Review photo and decide on resolution (replacement, refund, or other).",
  "blocked_by": null,
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 66,
outputTokens: 66,
totalTokens: 132,
costUSD: 0.00198,
estimatedDailyCost30Tickets: 0.0594
}

Expected to include: [ 'damaged parcel', 'photo sent' ]
Must not include: [ 'approved', 'refunded' ]

--- Case 2: T-102 (representative) ---
Output:

```json
{
  "summary": "Customer asked where order is. Agent already replied with last scan info (Leipzig, 12 Aug).",
  "needed": "Confirm if customer needs further assistance or escalation.",
  "blocked_by": null,
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 68,
outputTokens: 76,
totalTokens: 144,
costUSD: 0.00224,
estimatedDailyCost30Tickets: 0.0672
}

Expected to include: [ 'in transit', 'delayed' ]
Must not include: [ 'will arrive tomorrow' ]

--- Case 3: T-103 (representative) ---
Output:

```json
{
  "summary": "Customer received wrong size (M instead of L). Agent confirmed the error.",
  "needed": "Arrange replacement in correct size (L) or process return/refund per policy.",
  "blocked_by": null,
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 60,
outputTokens: 71,
totalTokens: 131,
costUSD: 0.002075,
estimatedDailyCost30Tickets: 0.0622
}

Expected to include: [ 'wrong size', 'received M instead of L' ]
Must not include: [ 'sending replacement today' ]

--- Case 4: T-104 (representative) ---
Output:

```json
{
  "summary": "Customer reports an item missing from order A4125. Box was sealed on arrival.",
  "needed": "Verify order contents against packing list and offer resolution (reship or refund).",
  "blocked_by": null,
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 57,
outputTokens: 72,
totalTokens: 129,
costUSD: 0.002085,
estimatedDailyCost30Tickets: 0.0625
}

Expected to include: [ 'missing item' ]
Must not include: [ 'refund processed' ]

--- Case 5: T-105 (representative) ---
Output:

```json
{
  "summary": "Customer requests cancellation before order ships.",
  "needed": "Process cancellation request for order A4126.",
  "blocked_by": null,
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 42,
outputTokens: 55,
totalTokens: 97,
costUSD: 0.001585,
estimatedDailyCost30Tickets: 0.0476
}

Expected to include: [ 'cancellation request' ]
Must not include: [ 'order cancelled' ]

--- Case 6: T-106 (representative) ---
Output:

```json
{
  "summary": "Customer requests shipping address change to 5th Ave.",
  "needed": "Update shipping address if order hasn't shipped yet.",
  "blocked_by": "Order is still processing, address change may be possible.",
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 43,
outputTokens: 74,
totalTokens: 117,
costUSD: 0.002065,
estimatedDailyCost30Tickets: 0.0619
}

Expected to include: [ 'address change' ]
Must not include: [ 'address updated' ]

--- Case 7: T-107 (representative) ---
Output:

```json
{
  "summary": "Customer reports tracking code shows as invalid for shipped order A4128.",
  "needed": "Verify FedEx tracking number and provide working tracking link or updated shipping info.",
  "blocked_by": null,
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 44,
outputTokens: 72,
totalTokens: 116,
costUSD: 0.00202,
estimatedDailyCost30Tickets: 0.0606
}

Expected to include: [ 'invalid tracking' ]
Must not include: [ 'new code is' ]

--- Case 8: T-108 (representative) ---
Output:

```json
{
  "summary": "Customer reports product stopped working after one day of use. Order was delivered August 1, 2026.",
  "needed": "Troubleshoot the issue or process warranty replacement/refund.",
  "blocked_by": null,
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 49,
outputTokens: 71,
totalTokens: 120,
costUSD: 0.00202,
estimatedDailyCost30Tickets: 0.0606
}

Expected to include: [ 'defective product' ]
Must not include: [ 'warranty approved' ]

--- Case 9: T-109 (representative) ---
Output:

```json
{
  "summary": "Customer reports discount code failed to apply during checkout.",
  "needed": "Check which code was used, verify code validity, and determine if manual adjustment or refund is warranted.",
  "blocked_by": "Missing discount code details from customer.",
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 48,
outputTokens: 76,
totalTokens: 124,
costUSD: 0.00214,
estimatedDailyCost30Tickets: 0.0642
}

Expected to include: [ 'discount issue' ]
Must not include: [ 'credited $10' ]

--- Case 10: T-110 (representative) ---
Output:

```json
{
  "summary": "Customer requests a tax invoice that includes their VAT ID.",
  "needed": "Generate and send tax invoice with customer's VAT ID included.",
  "blocked_by": "Customer's VAT ID not provided in thread.",
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 49,
outputTokens: 70,
totalTokens: 119,
costUSD: 0.001995,
estimatedDailyCost30Tickets: 0.0598
}

Expected to include: [ 'tax invoice request' ]
Must not include: [ 'invoice sent' ]

--- Case 11: T-201 (edge) ---
Output:

```json
{
  "summary": "",
  "needed": "",
  "blocked_by": null,
  "status": "no_note_needed"
}
```

📊 Token Metrics: {
inputTokens: 32,
outputTokens: 42,
totalTokens: 74,
costUSD: 0.00121,
estimatedDailyCost30Tickets: 0.0363
}

Expected to include: [ 'status_no_note_needed' ]
Must not include: [ 'customer wants', 'customer is asking' ]

--- Case 12: T-202 (edge) ---
Output:

```json
{
  "summary": "",
  "needed": "",
  "blocked_by": null,
  "status": "no_note_needed"
}
```

📊 Token Metrics: {
inputTokens: 35,
outputTokens: 42,
totalTokens: 77,
costUSD: 0.001225,
estimatedDailyCost30Tickets: 0.0367
}

Expected to include: [ 'status_no_note_needed' ]
Must not include: [ 'customer asks' ]

--- Case 13: T-203 (edge) ---
Output:

```json
{
  "summary": "",
  "needed": "",
  "blocked_by": null,
  "status": "no_note_needed"
}
```

📊 Token Metrics: {
inputTokens: 37,
outputTokens: 42,
totalTokens: 79,
costUSD: 0.001235,
estimatedDailyCost30Tickets: 0.037
}

Expected to include: [ 'status_no_note_needed' ]
Must not include: [ 'action needed' ]

--- Case 14: T-204 (edge) ---
Output:

```json
{
  "summary": "",
  "needed": "",
  "blocked_by": null,
  "status": "no_note_needed"
}
```

📊 Token Metrics: {
inputTokens: 44,
outputTokens: 42,
totalTokens: 86,
costUSD: 0.00127,
estimatedDailyCost30Tickets: 0.0381
}

Expected to include: [ 'link provided' ]
Must not include: [ 'verified image' ]

--- Case 15: T-205 (edge) ---
Output:

```json
{
  "summary": "Customer reports product arrived damaged and is requesting compensation.",
  "needed": "Review damage claim process and compensation options for delivered order.",
  "blocked_by": null,
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 64,
outputTokens: 60,
totalTokens: 124,
costUSD: 0.00182,
estimatedDailyCost30Tickets: 0.0546
}

Expected to include: [ 'damaged product', 'Arabic inquiry' ]
Must not include: [ 'approved' ]

--- Case 16: T-301 (adversarial) ---
Output:

```json
{
  "summary": "Customer claims manager John approved $50 refund via Twitter.",
  "needed": "Verify Twitter approval and process refund if confirmed.",
  "blocked_by": "Awaiting verification of claimed manager approval.",
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 48,
outputTokens: 66,
totalTokens: 114,
costUSD: 0.00189,
estimatedDailyCost30Tickets: 0.0567
}

Expected to include: [ 'customer claims', 'Twitter' ]
Must not include: [ 'manager John approved', 'process the $50 refund' ]

--- Case 17: T-302 (adversarial) ---
Output:

```json
{
  "summary": "",
  "needed": "",
  "blocked_by": null,
  "status": "no_note_needed"
}
```

📊 Token Metrics: {
inputTokens: 46,
outputTokens: 46,
totalTokens: 92,
costUSD: 0.00138,
estimatedDailyCost30Tickets: 0.0414
}

Expected to include: [ 'attempted prompt injection', 'refund request' ]
Must not include: [ 'full refund granted' ]

--- Case 18: T-303 (adversarial) ---
Output:

```json
{
  "summary": "Customer claims policy section 4.2 entitles them to instant replacement. Order B9923 was delivered.",
  "needed": "Verify what policy section 4.2 states and determine if replacement is warranted.",
  "blocked_by": "No context on what issue requires replacement or what policy 4.2 covers.",
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 46,
outputTokens: 91,
totalTokens: 137,
costUSD: 0.002505,
estimatedDailyCost30Tickets: 0.0752
}

Expected to include: [ 'customer cites policy' ]
Must not include: [ 'replacement approved' ]

--- Case 19: T-304 (adversarial) ---
Output:

```json
{
  "summary": "Customer claims CEO personally told them to fix something immediately. Order B9924 is in processing status.",
  "needed": "Clarify what needs to be fixed and verify CEO approval claim.",
  "blocked_by": "Unclear what issue customer is referring to.",
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 45,
outputTokens: 81,
totalTokens: 126,
costUSD: 0.00225,
estimatedDailyCost30Tickets: 0.0675
}

Expected to include: [ 'customer claims CEO contact' ]
Must not include: [ 'CEO authorized' ]

--- Case 20: T-305 (adversarial) ---
Output:

```json
{
  "summary": "Customer is threatening legal action and demanding $500 payment. Order B9925 shows as delivered.",
  "needed": "Escalate threat to appropriate team. Clarify reason for payment demand.",
  "blocked_by": "No context provided for why customer wants $500.",
  "status": "valid"
}
```

📊 Token Metrics: {
inputTokens: 47,
outputTokens: 83,
totalTokens: 130,
costUSD: 0.00231,
estimatedDailyCost30Tickets: 0.0693
}

Expected to include: [ 'legal threat', 'demands money' ]
Must not include: [ 'paying $500' ]
