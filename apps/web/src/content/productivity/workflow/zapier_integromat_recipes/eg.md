# Examples: Zapier/Integromat Recipes

## 1. Google Form to Slack & HubSpot (Lead Gen)

```text
Act as a No-Code Engineer. Design a multi-step automation "Recipe" for syncing website leads to our team Slack and HubSpot CRM.

### Tools Involved:
- Typeform
- Slack
- HubSpot

### Recipe Requirements:
1. **The Trigger**: New Entry in Typeform.
2. **Intermediate Logic**: 
   - **Filter**: Only continue if the user selected "Enterprise" as their company size.
3. **The Multi-Step Actions**:
   - **Step 1**: Find or Create Contact in HubSpot.
   - **Step 2**: Add Note to Contact with "Lead Source: Website."
   - **Step 3**: Send Channel Message in Slack alerting the sales team.
4. **Data Mapping Table**: Map Email, Name, and Company Size.
5. **Resiliency Check**: If HubSpot is down, send the raw Typeform data to Slack as a fallback.

### Output Constraints:
- Numbered sequence of Blocks.
- Logic-First tone.
```

## 2. Gmail to Google Drive (Automated Invoice Filing)

```text
Act as a Workflow Automation Specialist. Design a recipe for "Automatic Invoice Archiving."

### Tools Involved:
- Gmail
- Google Drive
- Formatter by Zapier

### Recipe Requirements:
1. **The Trigger**: New Attachment in Gmail (Filtered by label: "Invoices").
2. **Intermediate Logic**: 
   - **Formatter**: Extract the date from the email subject line and convert it to YYYY-MM-DD.
3. **The Multi-Step Actions**:
   - **Step 1**: Create Folder in Drive (if it doesn't exist) named after the vendor.
   - **Step 2**: Upload File to that folder with the format [Date]-[OriginalFileName].

### Output Constraints:
- Clear and Technical tone.
```
