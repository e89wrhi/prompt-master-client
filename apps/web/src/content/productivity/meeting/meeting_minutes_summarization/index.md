---
id: meeting_minutes_summarization
topicId: productivity
subTopicId: meeting
title: Professional Meeting Minutes Summarization
---
# Template: Professional Meeting Minutes Summarization

Use this template to create a permanent, legally/professionally defensible record of a meeting. It is designed to capture not just "what was said," but the underlying "Why," the dissenting opinions, and the final binding decisions.

## 📋 Prompt Template

```text
Act as a Senior Executive Scribe and Corporate Secretary. Summarize the following [MEETING_TRANSCRIPT/NOTES] into a formal "Minutes of Meeting" (MoM) document.

### Source Content:
[PASTE_CONTENT_HERE]

### Summarization Requirements:
1. **The Executive Snapshot**: Provide a 3-sentence summary of the meeting's atmosphere and primary outcome.
2. **The Decision Log**: List all binding decisions in a clear, formatted section. For each decision, include the "Rationale" (Why we chose this).
3. **Key Discussion Points**: Group conversation by [THEME] (e.g., Budget, Tech stack, Hiring). Summarize the arguments made *for* and *against* each major proposal.
4. **Dissenting Opinions**: Explicitly note any major disagreements or concerns raised by participants, even if they didn't change the final outcome.
5. **Next Steps & Accountability**: Summarize the 3 most critical action items and their owners.

### Output Constraints:
- Use Formal, Precise, and Neutral language.
- Format using a professional document structure (Date, Attendees, Agenda Items, Decisions).
- Ensure the summary length is approximately [RATIO] of the original source length.
```

## 🧩 Variables to Fill Out

- `[PASTE_CONTENT_HERE]` - The raw text of your meeting.
- `[THEME]` - The categories you want to organize the conversation around.
- `[RATIO]` - e.g., 10% (very concise) or 25% (detailed).

## 💡 Pro-Tips

- **Neutrality is Key:** Avoid using words like "heatedly" or "happily." Instead, use "The team engaged in a detailed debate" or "Consensus was reached."
- **Capture the "Why":** Years from now, stakeholders won't care *who* said what, but they will care *why* a decision was made. Ensure the AI emphasizes the "Rationale."
- **The Attendee List:** If the transcript doesn't list everyone, ask the AI to "infer the attendee list from the speaker labels."
---
