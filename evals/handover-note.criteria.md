1. facts_accurate (Checker: Human) - Threshold: 19/20
   - Cost of failure: The colleague acts on wrong information, causing incorrect refunds or damaging customer trust.
2. no_fake_decisions (Checker: Code / Regex for "approved", "promised", "will refund") - Threshold: 20/20
   - Cost of failure: Internal confusion and potential financial loss if a colleague honors a fake promise.
3. valid_schema (Checker: Code / Zod schema validation) - Threshold: 20/20
   - Cost of failure: The internal dashboard breaks and fails to render the note.
4. word_limit_respected (Checker: Code / Length check < 100 words) - Threshold: 18/20
   - Cost of failure: Wastes the colleague's time, defeating the purpose of a summary.
