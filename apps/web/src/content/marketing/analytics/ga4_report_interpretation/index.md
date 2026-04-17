# Template: GA4 Report Interpretation & Insights

Use this template to translate complex Google Analytics 4 (GA4) data into actionable marketing insights. It is designed to navigate the shift from "Universal Analytics" to "Event-Based Tracking," helping you identify where your traffic is coming from and why users are dropping off in the funnel.

## 📋 Prompt Template

```text
Act as a Senior Digital Analyst and GA4 Expert. Review and interpret the following [REPORT_TYPE] data:

### Exported Data/Logs:
[INSERT_GA4_DATA_OR_TABLE]

### Interpretation Requirements:
1. **The Pulse Summary**: Provide a 3-sentence summary of the site's performance during this [TIME_PERIOD].
2. **Channel Attribution**: Identify which [TRAFFIC_SOURCE] is driving the highest-quality users (e.g., highest engagement rate vs. highest conversion rate).
3. **Engagement Analysis**: Look at "Key Events" (conversions). Identify the page or event with the highest [ABANDONMENT_RATE] and suggest a reason.
4. **The "Session vs. User" Shift**: Explain one finding in the data that highlights the difference between [NEW_USERS] and [RETURNING_USERS].
5. **Actionable Recommendations**: Provide 3 tactical changes to the marketing mix based on this data.

### Output Constraints:
- Use clear headings and bullet points.
- If the data is incomplete or has "Unassigned" traffic, flag it as a [TECHNICAL_TRACKING_ISSUE].
- Use a Precise and Professional tone.
```

## 🧩 Variables to Fill Out

- `[REPORT_TYPE]` - e.g., Traffic Acquisition, User Retention, Ecommerce Purchase, Event Report.
- `[INSERT_GA4_DATA_OR_TABLE]` - Paste your raw CSV export or a formatted table of metrics.
- `[TIME_PERIOD]` - e.g., Last 30 Days, Q1 vs Q2 comparison.
- `[TRAFFIC_SOURCE]` - e.g., Organic Search, Paid Social, Direct, Referral.
- `[TECHNICAL_TRACKING_ISSUE]` - e.g., Missing UTMs, Cookie consent blocking, Bot traffic.

## 💡 Pro-Tips

- **Thresholding Alert:** If you see "thresholding" mentioned in GA4, tell the AI: "Take into account that some data might be missing due to Google's privacy thresholding rules."
- **First Visit vs. Last Click:** GA4 uses data-driven attribution by default. Ask the AI to "Explain if this traffic source is better for 'Discovery' (Top of Funnel) or 'Conversion' (Bottom of Funnel)."
- **Event-Based Thinking:** Remember, GA4 is all about *events*. Instead of "Pageviews," ask the AI to "Analyze the sequence of events (e.g., scroll -> click -> purchase)."
---
