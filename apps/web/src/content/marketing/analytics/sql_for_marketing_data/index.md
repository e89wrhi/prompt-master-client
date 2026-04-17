---
id: sql_for_marketing_data
topicId: marketing
subTopicId: analytics
title: Professional SQL for Marketing Analysis
---
# Template: Professional SQL for Marketing Analysis

Use this template to generate robust SQL queries for marketing data analysis. It is designed to bridge the gap between "Raw Data" and "Business Intelligence," allowing you to calculate complex metrics like LTV, Cohort Retention, and Attribution across multiple tables.

## 📋 Prompt Template

```text
Act as a Senior Data Engineer and Marketing Analyst. Write a PostgreSQL query to [ANALYTICS_GOAL] for the following database schema:

### Database Schema:
[INSERT_TABLE_NAMES_AND_COLUMNS]

### Query Requirements:
1. **The Core Join**: Explain which tables need to be joined (e.g., [USERS_TABLE] to [TRANSACTIONS_TABLE]) and why.
2. **Metric Calculation**: Calculate [PRIMARY_METRIC] (e.g., Customer Lifetime Value, MoM Growth, Conversion Rate).
3. **Filtering & Cleaning**: Exclude [NULL_VALUES/TEST_DATA] and focus only on [TIME_PERIOD].
4. **Grouping & Aggregation**: Group the data by [DIMENSION] (e.g., Marketing_Channel, Country, Signup_Month).
5. **Human-Readable Output**: Include comments in the SQL code explaining each logic block.

### Output Constraints:
- Provide the full SQL code in a syntax-highlighted block.
- Explain the logic behind any complex [INNER/LEFT_JOIN] or [WINDOW_FUNCTION] used.
- Ensure the query is optimized for large datasets (e.g., using indexes or limiting subqueries).
```

## 🧩 Variables to Fill Out

- `[ANALYTICS_GOAL]` - e.g., Calculate monthly revenue by traffic source, Identify churned users who haven't purchased in 60 days.
- `[INSERT_TABLE_NAMES_AND_COLUMNS]` - Describe your tables (e.g., table 'purchases' has columns 'user_id', 'amount', 'created_at').
- `[PRIMARY_METRIC]` - LTV (Lifetime Value), CAC (Customer Acquisition Cost), ARPU (Average Revenue Per User).
- `[DIMENSION]` - The category you want to slice the data by.
- `[WINDOW_FUNCTION]` - e.g., ROW_NUMBER(), LEAD(), RANK().

## 💡 Pro-Tips

- **Be Specific on Dialect:** If you use BigQuery, Snowflake, or MySQL, specify it. SQL syntax varies by platform.
- **The "Sandbox" Rule:** Always ask the AI to "Write the query using a Common Table Expression (CTE) for readability."
- **Handle Timezones:** Marketing data is often messy with UTC vs local time. Tell the AI: "Normalize all 'at' timestamps to [YOUR_TIMEZONE]."
---
