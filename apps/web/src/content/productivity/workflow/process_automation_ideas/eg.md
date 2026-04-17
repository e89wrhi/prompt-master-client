# Examples: Process Automation Strategy

## 1. Client Onboarding (Consulting)

```text
Act as a Solution Architect. Audit the following BUSINESS_PROCESS for automation opportunities: Client Onboarding.

### Process Description:
1. Client pays invoice on Stripe.
2. I manually create a Google Drive folder.
3. I manually create a Trello board.
4. I send a "Welcome" email with the links to the folder and board.
5. I schedule a kickoff call on Calendly.

### Analysis Requirements:
1. **The Repetition Audit**: Stripe-to-Drive-to-Trello sequence.
2. **Feasibility Scoring**: Use Zapier/Make.
3. **Projected ROI**: Volume = 10 clients/month. Time saved = 15 mins/client.
4. **Human-in-the-Loop**: The Kickoff call must remain manual.
5. **Implementation Roadmap**: 3-step pilot.

### Output Constraints:
- Markdown Table format.
- Efficiency-Focused tone.
```

## 2. Customer Support Ticket Routing

```text
Act as an Automation Expert. Audit the following: Routing Support Tickets for a SaaS tool.

### Process Description:
- Support email comes into a shared inbox.
- I read it and decide if it's "Technical," "Billing," or "Feature Request."
- I forward it to the specific team Slack channel.

### Analysis Requirements:
- Use an AI Agent (LLM) to categorize and forward.
- ROI: Volume = 500 tickets/month.
- Implementation sequence.

### Output Constraints:
- Sharp and Technical tone.
```
