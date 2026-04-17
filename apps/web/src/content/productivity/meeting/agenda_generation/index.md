---
id: agenda_generation
topicId: productivity
subTopicId: meeting
title: Professional Meeting Agenda Generation
---
# Template: Professional Meeting Agenda Generation

Use this template to design high-impact meetings that respect everyone's time. It is designed to move beyond simple "lists of topics" by including timeboxing, clear objectives, and pre-reading requirements to ensure the team arrives prepared to make decisions.

## 📋 Prompt Template

```text
Act as a Professional Facilitator and Management Consultant. Generate a structured Meeting Agenda for the following [MEETING_TYPE]:

### Meeting Context:
[INSERT_TOPIC_PARTICIPANTS_AND_GOALS]

### Agenda Requirements:
1. **The Primary Objective**: State a single, measurable "Win Condition" for the meeting (e.g., "By the end of this hour, we will have selected a vendor").
2. **Timeboxed Segments**: Break the [TOTAL_DURATION] into specific slots. For each slot, provide:
   - **Topic**: The specific item to discuss.
   - **Method**: (e.g., Brainstorm, Vote, Presentation, Q&A).
   - **Lead**: The person responsible for that segment.
3. **Pre-Reading/Work**: List exactly what materials participants must review *before* joining.
4. **Decision Log Preparation**: Reserve a section for capturing final decisions on [SPECIFIC_KEY_DECISION].
5. **The "Hard Stop" Clause**: Define what happens if the time runs out (e.g., follow-up asynchronously).

### Output Constraints:
- Present the schedule in a Markdown Table.
- Use an Efficient and Goal-Oriented tone.
- Ensure at least 5 minutes is reserved for "Action Item Reconciliation" at the end.
```

## 🧩 Variables to Fill Out

- `[MEETING_TYPE]` - e.g., Monthly Strategy Sync, Product Kickoff, Emergency Post-Mortem.
- `[INSERT_TOPIC_PARTICIPANTS_AND_GOALS]` - Who is coming? What is the main problem we are solving?
- `[TOTAL_DURATION]` - e.g., 30 minutes, 90 minutes.
- `[TOTAL_DURATION]` - The total time available.
- `[SPECIFIC_KEY_DECISION]` - The most important choice the team needs to make.

## 💡 Pro-Tips

- **The 5-Minute Rule:** Always advocate for 5 minutes of "Silent Reading" at the start of a meeting if the pre-reading is long. It ensures everyone is on the same page.
- **Focus on the "Method":** A "Presentation" requires different energy than a "Vote." By specifying the method, participants know if they are listening or participating.
- **Limit the Topics:** A 30-minute meeting should never have more than 2 major agenda items. If the AI suggests 10, tell it: "Narrow this down to the top 2 priorities."
---
