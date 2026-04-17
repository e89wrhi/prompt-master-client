---
id: root_cause_analysis_5whys
topicId: productivity
subTopicId: analysis
title: Root Cause Analysis (5 Whys)
---
# Template: Root Cause Analysis (5 Whys)

Use this template to move beyond surface-level symptoms and uncover the systemic failures causing a problem. It forces a recursive "Why?" line of questioning to identify the ultimate root cause and propose permanent fixes.

## 📋 Prompt Template

```text
Act as a Senior QA Lead and Systems Thinking Expert. Perform a deep-dive 5 Whys analysis for the following [PROBLEM_STATEMENT]:

### Incident Context:
[PASTE_INCIDENT_OR_ERROR_LOGS]

### Analysis Requirements:
1. **The 5 Whys Chain**: Starting from the surface problem, ask "Why?" five consecutive times, drilling down into [DOMAIN] (e.g., technical, process, or human factors).
2. **Root Cause Identification**: Based on the 5-step chain, define the singular systemic failure that enabled the incident.
3. **Short-Term Mitigation**: Provide an immediate "Band-Aid" fix to restore service or stop the bleed.
4. **Long-Term Prevention**: Propose a "Structural Fix" that ensures this specific root cause can never reoccur.
5. **Contributing Factors**: Identify 2-3 secondary factors that worsened the [PROBLEM_STATEMENT].

### Output Constraints:
- Present the 5 Whys chain as a numbered list.
- Keep the tone Objective, Analytical, and Solution-Oriented.
- Avoid blaming individuals; focus on process and system failures.
```

## 🧩 Variables to Fill Out

- `[PROBLEM_STATEMENT]` - A clear, concise description of what went wrong (e.g., "The production database crashed during the peak sales hour").
- `[PASTE_INCIDENT_OR_ERROR_LOGS]` - Any relevant logs, screenshots descriptions, or timelines.
- `[DOMAIN]` - e.g., Infrastructure, Recruitment process, Communication workflow, Code quality.

## 💡 Pro-Tips

- **Stop at the System:** A good RCA ends at a process or system failure, not a person. "Jerry forgot" is not a root cause. "We lacked an automated checklist to remind employees" is.
- **Paths may branch:** If there are multiple potential reasons for a "Why", ask the AI to "explore the two most likely branches".
- **The "So What?":** The goal of the 5 Whys isn't just to find the cause, but to find the *controllable* cause. If the cause is "The sun came up," that's not helpful.
---
