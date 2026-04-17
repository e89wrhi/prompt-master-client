---
id: post_mortem_facilitation
topicId: productivity
subTopicId: meeting
title: Professional Post-Mortem Facilitation
---
# Template: Professional Post-Mortem Facilitation

Use this template to conduct blameless project debriefs that turn failures into institutional knowledge. It is designed to create a "Psychologically Safe" environment that focuses on system improvements rather than individual blame, using a "Start, Stop, Continue" framework.

## 📋 Prompt Template

```text
Act as an Agile Coach and Professional Facilitator. Guide a "Blameless Post-Mortem" for the following [PROJECT/INCIDENT]:

### Context:
[INSERT_WHAT_HAPPENED_AND_QUOTES_FROM_TEAM]

### Facilitation Requirements:
1. **The Timeline of Events**: Reconstruct an objective, minute-by-minute (or day-by-day) timeline of exactly what happened, based on the input.
2. **The "Start, Stop, Continue" Analysis**: Categorize team feedback into:
   - **Start**: New processes we should adopt to prevent this in the future.
   - **Stop**: Habits or processes that contributed to the [PROJECT/INCIDENT] and must be abandoned.
   - **Continue**: Things we did well during the crisis that should be standardized.
3. **The Five Whys Integration**: Perform a mini Root Cause Analysis on the most critical failure point identified.
4. **Actionable Action Items**: Derive 3 concrete tasks aimed at "Systemic Hardening" (e.g., automated checks, redundant communication).
5. **Sentiment & Safety Check**: Summarize the team's morale and suggest 2 ways for leadership to rebuild trust.

### Output Constraints:
- Use a Supportive, Professional, and Blameless tone.
- Avoid names in the "Stop" section; refer to "Process Roles" instead.
- Format the final takeaways as a "Lessons Learned" table.
```

## 🧩 Variables to Fill Out

- `[PROJECT/INCIDENT]` - e.g., The Q3 Website Launch, The Failed Marketing Campaign, The Server Outage.
- `[INSERT_WHAT_HAPPENED_AND_QUOTES_FROM_TEAM]` - Paste Slack messages, meeting notes, or a rough description of the failure.

## 💡 Pro-Tips

- **The Rule of Blamelessness:** If the AI names a person (e.g., "Kevin forgot to..."), prompt it to "Rephrase focusing on the process failure that allowed Kevin to forget."
- **Capture the "Bright Spots":** Every failure has something that went right (e.g., "We notified customers quickly"). Make sure the AI highlights these in the "Continue" section to maintain team morale.
- **Focus on Paradoxes:** Often, things fail because of conflicting goals (e.g., "Move fast vs. Be perfect"). Ask the AI to "Identify the underlying organizational tension that led to this decision."
---
