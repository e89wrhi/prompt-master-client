# Template: Professional Kanban Board Structuring

Use this template to design a visual workflow that maximizes throughput and minimizes bottlenecks. It is designed to move beyond a simple "To-Do" list by implementing WIP (Work In Progress) limits, clear "Definition of Done," and thematic swimlanes for complex projects.

## 📋 Prompt Template

```text
Act as a Senior Operations Architect and Lean Methodology Expert. Design a high-utility Kanban Board structure for [PROJECT/TEAM_DOMAIN].

### Project Context:
[INSERT_TEAM_SIZE_AND_WORKFLOW_GOALS]

### Board Requirements:
1. **The Column Architecture**: Define at least 5 columns that reflect the *actual* lifecycle of a task (e.g., [COLUMN_1], [COLUMN_2], [COLUMN_3], [COLUMN_4], [COLUMN_5]).
2. **Work-In-Progress (WIP) Limits**: Suggest a WIP limit for each column based on a team size of [TEAM_SIZE]. Explain why these limits are critical for flow.
3. **The "Definition of Done" (DoD)**: For each column, provide a 1-sentence checklist that must be met before a card can move to the next stage.
4. **Thematic Swimlanes**: Propose 2-3 swimlanes (horizontal rows) to categorize work by [SWIMLANE_CATEGORY] (e.g., Priority Level, Task Type, Client).
5. **Bottleneck Management**: Identify which column is most likely to become a "Clog" and suggest a specific strategy to handle it (e.g., "Review Phase").

### Output Constraints:
- Present the board layout in a visual Markdown Table.
- Use a Direct, Analytical, and Process-Oriented tone.
- Conclude with "The Golden Rule for Flow" for this specific team.
```

## 🧩 Variables to Fill Out

- `[PROJECT/TEAM_DOMAIN]` - e.g., Mobile App Development, Legal Department, Video Editing Pipeline.
- `[INSERT_TEAM_SIZE_AND_WORKFLOW_GOALS]` - How many people are working, and what is the biggest pain point (e.g., tasks getting stuck in QA)?
- `[COLUMN_1/2/3...]` - e.g., Backlog, In-Progress, Peer Review, Client Approval, Done.
- `[TEAM_SIZE]` - Number of full-time team members.
- `[SWIMLANE_CATEGORY]` - How you want to split the board horizontally.

## 💡 Pro-Tips

- **WIP Limits Save Lives:** The goal is to "Stop starting and start finishing." If a team of 3 has a WIP limit of 10 in "In-Progress," they are context-switching too much.
- **The "Waiting" Column:** If you rely on external feedback, include a "Waiting for Feedback" column with a high WIP limit, so it doesn't clutter your "In-Progress" queue.
- **Evolution is Mandatory:** A Kanban board shouldn't be static. Tell the AI to "Suggest a protocol for when the board should be audited and adjusted (e.g., bi-weekly retros)."
---
