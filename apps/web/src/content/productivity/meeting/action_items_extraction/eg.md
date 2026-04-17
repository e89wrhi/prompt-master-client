# Examples: Action Items Extraction

## 1. Product Launch Sync (Zoom Transcript)

```text
Act as a Senior Project Coordinator. Extract a structured Action Item List from the following MEETING TRANSCRIPT:

[TRANSCRIPT START]
Sarah: "Okay, we're 2 weeks out. John, can you make sure the landing page is live by Thursday?"
John: "Sure, but I need the copy from Mike first."
Mike: "I'll have the final copy to John by tomorrow EOD."
Sarah: "Great. Also, I think we should probably email the waitlist on Friday. I'll take that. Does anyone know if the payment gateway is ready?"
John: "Still waiting on Stripe verification."
[TRANSCRIPT END]

### Extraction Requirements:
1. **The Action Table**: Describe the Task, Owner, Deadline, and Priority.
2. **Contextual Notes**: Add a 1-sentence Rationale for each.
3. **Decisions Made**: List final decisions.
4. **Unresolved Questions**: Flag topics requiring follow-up (e.g., Stripe status).

### Output Constraints:
- Use a Markdown Table.
- Direct and Organized tone.
```

## 2. Unstructured Brainstorming Notes

```text
Act as a Senior Project Coordinator. Extract a structured Action Item List from the following NOTES:

- Need to hire a new QA lead (Budget approved).
- The logo is too small on mobile. Fix it.
- Ask the lawyer about the new Terms of Service.
- We decided to skip the Android launch for now.

### Extraction Requirements:
1. **The Action Table**: (Task, Owner, Deadline, Priority). *Note: If owner is unclear, suggest a likely candidate (e.g., Designer for logo).*
2. **Decisions Made**: Separately list final decisions (e.g., Skipping Android).
3. **Unresolved Questions**: Any missing details.

### Output Constraints:
- Use a Markdown Table.
```
