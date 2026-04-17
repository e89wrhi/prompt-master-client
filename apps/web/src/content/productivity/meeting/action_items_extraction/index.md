# Template: Action Items Extraction

Use this template to transform messy meeting transcripts or notes into a high-utility task list. It is designed to ensure accountability by explicitly defining the "Who," "What," and "When" for every item, while filtering out the conversational noise.

## 📋 Prompt Template

```text
Act as a Senior Project Coordinator. Extract a structured Action Item List from the following [MEETING_TRANSCRIPT/NOTES]:

### Source Material:
[PASTE_NOTES_OR_TRANSCRIPT_HERE]

### Extraction Requirements:
1. **The Action Table**: Create a list of all commitments made during the meeting. For each item, specify:
   - **Task**: A concise, verb-led description of the work.
   - **Owner**: The specific person or department responsible.
   - **Deadline**: The target date mentioned (or "TBD" if not specified).
   - **Priority**: High/Medium/Low based on the context of the conversation.
2. **Contextual Notes**: Add a 1-sentence "Rationale" for each task to remind the owner why it's necessary.
3. **Decisions Made**: Separately list any final decisions that *don't* require a task but change the project's direction.
4. **Unresolved Questions**: Flag any topics that were brought up but not concluded, requiring a follow-up.

### Output Constraints:
- Use a Markdown Table for the Action Table.
- Use a Direct and Organized tone.
- If an owner is unclear, list them as "[UNASSIGNED - Needs Verification]".
```

## 🧩 Variables to Fill Out

- `[MEETING_TRANSCRIPT/NOTES]` - The raw text from your Zoom/Teams transcript or handwritten notes.
- `[PASTE_NOTES_OR_TRANSCRIPT_HERE]` - The actual content.
- `[UNASSIGNED]` - A placeholder for tasks that were mentioned but not explicitly "claimed" by anyone.

## 💡 Pro-Tips

- **Search for "Will" or "Should":** The AI is trained to look for commitment language. If the team said "Someone should probably look at the server," the AI will flag it as a task.
- **Ambiguity is a Risk:** If the meeting was vague, tell the AI: "If a task doesn't have a clear owner, suggest the most likely owner based on their earlier comments in the meeting."
- **Clean the Transcript:** If your transcript has "ums," "ahs," or timestamp noise, the AI will ignore it automatically—no need to clean it beforehand.
