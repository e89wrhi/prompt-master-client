# Template: Professional Risk Assessment Report

Use this template to identify, evaluate, and mitigate potential threats to a project or business. It is designed to provide a structured "Risk Register" that categorizes risks by impact and likelihood, ensuring that resources are allocated to the most critical vulnerabilities.

## 📋 Prompt Template

```text
Act as a Senior Risk Manager and Compliance Officer. Conduct a comprehensive Risk Assessment for [PROJECT_OR_BUSINESS].

### Context & Scope:
[INSERT_PROJECT_DETAILS_AND_GOALS]

### Analysis Requirements:
1. **The Risk Register**: Identify at least 5 risks across [RISK_DOMAINS] (e.g., Financial, Operational, Technical, Legal).
2. **Impact vs. Likelihood Matrix**: For each risk, assign a score of 1-5 for Impact and 1-5 for Likelihood.
3. **Primary Mitigation Plans**: For the top 3 highest-rated risks, provide a detailed step-by-step mitigation strategy.
4. **Contingency "Plan B"**: Provide a "Break Glass in Case of Emergency" protocol for the single highest-impact risk.
5. **Stakeholder Communication**: Draft a 1-paragraph summary to inform senior management of the current risk landscape.

### Output Constraints:
- Present the Risk Register in a Markdown Table.
- Categorize outcomes using a [RED/AMBER/GREEN] status for each domain.
- Use a Formal, Objective, and Cautious tone.
```

## 🧩 Variables to Fill Out

- `[PROJECT_OR_BUSINESS]` - The subject of the risk audit (e.g., Q4 Software Migration, Entering the Brazilian Market).
- `[INSERT_PROJECT_DETAILS_AND_GOALS]` - The specific objectives of the project and current state of play.
- `[RISK_DOMAINS]` - e.g., Cybersecurity, Data Privacy, Supply Chain, Human Talent, Brand Reputation.
- `[RED/AMBER/GREEN]` - Status indicators: Red (Critical/Action Needed), Amber (Monitor Closely), Green (Low Risk).

## 💡 Pro-Tips

- **Think "Secondary" Risks:** Often, the mitigation of one risk creates another. Ask the AI to "consider secondary risks created by the primary mitigation strategies."
- **Probability vs. Magnitude:** A 100% chance of a $100 error is less risky than a 1% chance of a $10M lawsuit. Ensure the AI is weighting "Impact" heavily in its "Plan B" recommendations.
- **The Human Element:** Don't just focus on technical risks. Include "Key Person Risk" (what if a lead dev leaves?) and "Communication Silos."
---
