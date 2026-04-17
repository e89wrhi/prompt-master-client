# Template: Professional SOP Generation

Use this template to create clear, bulletproof Standard Operating Procedures (SOPs). It is designed to ensure that any team member, regardless of their seniority, can perform a complex task with zero errors by following high-fidelity instructions and troubleshooting guidelines.

## 📋 Prompt Template

```text
Act as a Senior Systems Manager and Process Quality Specialist. Generate a formal Standard Operating Procedure (SOP) for [TASK_NAME].

### Source Material/Raw Process:
[INSERT_UNSTRUCTURED_STEPS_OR_SCREENSHOT_DESCRIPTIONS]

### SOP Requirements:
1. **Objective & Scope**: A 1-sentence statement on what this SOP achieves and who it is for.
2. **Prerequisites**: List all [TOOLS], [PERMISSIONS], and [DATA] needed before starting.
3. **The Step-by-Step Procedure**: Break the task into [PHASE_1], [PHASE_2], and [PHASE_3]. Every step must be an action starting with a verb (e.g., "Click...", "Upload...").
4. **The "Definition of Success"**: Explicitly state how the user knows the task was completed correctly (e.g., "You see a green confirmation bar").
5. **Troubleshooting Guide**: Identify 3 common pitfalls (e.g., [ERROR_A], [ERROR_B]) and provide a 1-sentence fix for each.
6. **Maintenance & Review**: State when this SOP should be updated (e.g., "Every time the UI changes").

### Output Constraints:
- Use a Precise, Standardized, and Instructional tone.
- Use nested bullet points for sub-steps.
- Format using a professional SOP header (Author: AI Agent, Date: [TODAY], version 1.0).
```

## 🧩 Variables to Fill Out

- `[TASK_NAME]` - e.g., Deploying to Production, Refunding a Customer, Updating the Shopify Inventory.
- `[INSERT_UNSTRUCTURED_STEPS]` - Just dump your thoughts on how you do the task today.
- `[TOOLS/PERMISSIONS/DATA]` - e.g., Must have 'Admin' access to Stripe.
- `[PHASE_1/2/3]` - e.g., Preparation, Execution, Validation.
- `[ERROR_A/B]` - e.g., "Invalid Token Error," "404 Page Not Found."

## 💡 Pro-Tips

- **The "Intern Test":** A good SOP should be readable by an intern. After the AI generates the draft, ask it to "Simplify any technical jargon for a non-expert."
- **Focus on the "Why" (Occasionally):** While SOPs are about "How," knowing "Why" helps in edge cases. Include a "Rationale" note for complex steps.
- **Screenshots are Placeholders:** Since the AI can't see your screen, ask it to "Indicate where a screenshot should be placed" in the procedure (e.g., [INSERT SCREENSHOT OF HOME PAGE HERE]).
---
