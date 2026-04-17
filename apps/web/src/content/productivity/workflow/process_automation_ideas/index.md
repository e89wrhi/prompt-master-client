# Template: Process Automation Ideation & Strategy

Use this template to identify the repetitive, low-value tasks that are draining your team's time. It is designed to evaluate potential automations based on their ROI, technical feasibility, and impact on workflow speed, helping you decide whether to use a No-Code tool or a custom script.

## 📋 Prompt Template

```text
Act as a Solution Architect and Automation Expert. Audit the following [BUSINESS_PROCESS] for automation opportunities:

### Process Description:
[DESCRIBE_THE_STEPS_YOU_TAKE_MANUALLY]

### Analysis Requirements:
1. **The Repetition Audit**: Identify the top 3 "High-Friction" steps that are manual, repetitive, and error-prone.
2. **Feasibility Scoring**: For each step, provide an [AUTOMATION_FEASIBILITY] score (1-5) and suggest a tool (e.g., [ZAPIER/MAKE], [PYTHON_SCRIPT], [AI_AGENT]).
3. **Projected ROI**: Estimate the "Time Saved" per month if these steps were automated, based on a volume of [MONTHLY_OCCURRENCES].
4. **The "Human-in-the-Loop" Check**: Identify which steps *must* remain manual to ensure quality or personal touch.
5. **Implementation Roadmap**: Provide a 3-step sequence for piloting the most impactful automation.

### Output Constraints:
- Present the opportunities in a Markdown Table prioritized by "Impact vs. Effort."
- Use a Sharp, Technical, and Efficiency-Focused tone.
- Conclude with a "Risk Warning" regarding data security or API fragility.
```

## 🧩 Variables to Fill Out

- `[BUSINESS_PROCESS]` - e.g., Client Onboarding, Expense Reporting, Social Media Posting, Customer Support Ticket Routing.
- `[DESCRIBE_THE_STEPS_YOU_TAKE_MANUALLY]` - Be specific: "I download a CSV, I copy names into an email, I hit send."
- `[ZAPIER/MAKE/PYTHON_SCRIPT]` - Preferred tech stack for automation.
- `[MONTHLY_OCCURRENCES]` - How often do you do this? (e.g., 50 times a month).

## 💡 Pro-Tips

- **Don't Automate a Bad Process:** If your manual process is messy, automating it will only make it messier faster. Ask the AI to "Refine the manual process before suggesting automations."
- **The 80/20 Rule:** 80% of the benefit of automation usually comes from 20% of the work. Focus on the one step that takes the most time.
- **Error Handling is Priority #1:** Always ask the AI: "What happens if the automation fails? How will I be notified?"
---
