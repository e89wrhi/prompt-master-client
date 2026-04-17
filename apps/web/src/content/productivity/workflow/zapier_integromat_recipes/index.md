---
id: zapier_integromat_recipes
topicId: productivity
subTopicId: workflow
title: Professional No-Code Logic & Recipes
---
# Template: Professional No-Code Logic & Recipes

Use this template to design complex automated workflows using tools like Zapier or Make (Integromat). It is designed to think through the "If-This-Then-That" (IFTTT) logic, including multi-step filters, data formatting, and error handling to ensure your automations are resilient and scalable.

## 📋 Prompt Template

```text
Act as a No-Code Engineer and Workflow Automation Specialist. Design a multi-step automation "Recipe" for [AUTOMATION_GOAL].

### Tools Involved:
- [TRIGGER_APP]
- [ACTION_APP_1]
- [ACTION_APP_2]

### Recipe Requirements:
1. **The Trigger**: Define the specific event in [TRIGGER_APP] that starts the workflow (e.g., "New Row in Google Sheets," "New Email in Gmail").
2. **Intermediate Logic**: 
   - **Filter**: Specify a condition (e.g., "Only continue if [COLUMN_P] contains '[KEYWORD]'").
   - **Formatter**: Describe any text or date formatting needed (e.g., "Capitalize all names," "Convert ISO date to MM/DD/YYYY").
3. **The Multi-Step Actions**:
   - **Step 1**: Describe the action in [ACTION_APP_1].
   - **Step 2**: Describe the action in [ACTION_APP_2].
4. **Data Mapping Table**: Create a table showing which data fields from the [TRIGGER_APP] map to which fields in the [ACTION_APPS].
5. **Resiliency Check**: Propose an "Error Handler" (e.g., "If Step 1 fails, send a Slack alert to the Admin instead of stopping").

### Output Constraints:
- Use a Technical, Clear, and Logic-First tone.
- Present the recipe as a numbered sequence of "Blocks."
- If the logic is too complex for a single Zap/Recipe, suggest splitting it into two.
```

## 🧩 Variables to Fill Out

- `[AUTOMATION_GOAL]` - e.g., Syncing Sales Leads to a CRM, Automating Invoice Generation.
- `[TRIGGER_APP]` - The starting point (e.g., Google Forms, Calendly, Typeform).
- `[ACTION_APP_1/2]` - The endpoints (e.g., Slack, HubSpot, QuickBooks, Mailchimp).
- `[COLUMN_P] / [KEYWORD]` - Specific data points to filter by.

## 💡 Pro-Tips

- **The "Dead End" Filter:** Always use a Filter early in your Zap to save tasks. If the data isn't ready, kill the automation immediately.
- **Paths are Your Friend:** If you need different things to happen based on different data (e.g., "If Category is High, notify CEO; if Low, notify Team"), tell the AI to "Design the logic using Paths/Branching."
- **Webhook vs. Polling:** If speed is critical, ask the AI to "Suggest a Webhook-based trigger instead of a polling-based trigger" to get near-instant execution.
---
