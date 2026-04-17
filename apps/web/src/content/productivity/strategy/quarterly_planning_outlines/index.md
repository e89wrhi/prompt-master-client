# Template: Professional Quarterly Planning Outline

Use this template to translate high-level strategy into a concrete, executable roadmap for the next 90 days. It focuses on identifying "Big Rocks" (major initiatives), "Pebbles" (minor improvements), and the resource constraints that will dictate your team's velocity.

## 📋 Prompt Template

```text
Act as a Senior Strategy Consultant and Program Manager. Develop a Quarterly Planning Outline for [TEAM/COMPANY] for [QUARTER].

### Source Inputs:
[INSERT_STRATEGIC_OBJECTIVES_OR_OKRS]

### Planning Requirements:
1. **The Quarterly Theme**: Define a single word or phrase that captures the "Soul" of the next 90 days (e.g., "The Year of the Customer," "Foundational Hardening").
2. **The 3 "Big Rocks"**: Identify the 3 most significant projects. For each, describe the [DESIRED_OUTCOME] and the [CRITICAL_SUCCESS_FACTOR].
3. **Monthly Roadmap**: Break the quarter down into Month 1, Month 2, and Month 3. List the top 3 milestones for each.
4. **Resource & Capacity Check**: Based on a team size of [TEAM_SIZE], estimate the percentage of capacity allocated to "New Features," "Maintenance," and "Administrative/Overhead."
5. **Dependency Map**: Identify 2-3 crossovers where this team relies on [EXTERNAL_TEAM] to succeed.

### Output Constraints:
- Present the Monthly Roadmap in a Gantt-style Markdown Table.
- Use a Direct, Realistic, and High-Velocity tone.
- Conclude with a "Risk Warning" if the planned workload exceeds estimated capacity.
```

## 🧩 Variables to Fill Out

- `[TEAM/COMPANY]` - e.g., The Mobile Eng Team, The People Operations Dept.
- `[QUARTER]` - e.g., Q3 2024.
- `[INSERT_STRATEGIC_OBJECTIVES_OR_OKRS]` - What are the goals this quarter is trying to serve?
- `[DESIRED_OUTCOME]` - What does success look like for this specific rock?
- `[TEAM_SIZE]` - Number of full-time equivalent (FTE) employees.
- `[EXTERNAL_TEAM]` - e.g., Marketing, Legal, DevOps, Sales.

## 💡 Pro-Tips

- **The Big Rocks Rule:** You can only fit a few "Big Rocks" in a jar. If the AI suggests 10 major projects, tell it to "Select the 3 that will have the highest ROI."
- **Foundational vs. Feature:** A healthy quarter usually has a 60/40 or 70/30 split between new growth and maintaining the existing foundation. Ask the AI to "Check the balance of our roadmap."
- **Month 1 is for Doing:** Ensure Month 1 of your roadmap is focused on *launching* work, not just *planning* it. Tell the AI to "front-load the execution."
---
