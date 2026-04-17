---
id: csv_data_interpretation
topicId: productivity
subTopicId: analysis
title: Professional CSV Data Interpretation
---
# Template: Professional CSV Data Interpretation

Use this template to transform raw CSV data into meaningful business intelligence. It is designed to find trends, surface anomalies, and provide high-level summaries without requiring a separate data analysis tool.

## 📋 Prompt Template

```text
Act as a Senior Data Scientist and Business Intelligence Analyst. Review and interpret the following [FILE_TYPE] data:

[PASTE_CSV_DATA_HERE]

### Analysis Requirements:
1. **Executive Summary**: Provide a 3-sentence summary of the overall status of the data.
2. **Key Trends**: Identify at least 3 significant trends (e.g., [TREND_CATEGORY_1], [TREND_CATEGORY_2]).
3. **Anomalies & Outliers**: Flag any data points that deviate significantly from the norm (e.g., [OUTLIER_THRESHOLD] deviations).
4. **Calculated Insights**: Derive the [METRIC_NAME_A], [METRIC_NAME_B], and [METRIC_NAME_C] from the raw values.
5. **Correlation Discovery**: Identify potential relationships between [COLUMN_X] and [COLUMN_Y].

### Output Constraints:
- Use clear headings and bullet points.
- If data is missing or corrupted, explicitly state which rows or columns are affected.
- Avoid technical jargon unless specifically requested.
```

## 🧩 Variables to Fill Out

- `[FILE_TYPE]` - e.g., Sales Export, Traffic Logs, Inventory CSV.
- `[PASTE_CSV_DATA_HERE]` - The raw text of your CSV file.
- `[TREND_CATEGORY_1/2]` - e.g., Quarter-on-Quarter growth, seasonality, geographic shift.
- `[OUTLIER_THRESHOLD]` - e.g., top 5%, standard deviation > 2.
- `[METRIC_NAME_A/B/C]` - e.g., Average Order Value (AOV), Customer Acquisition Cost (CAC), Conversion Rate.
- `[COLUMN_X/Y]` - The headers of the columns you want to compare.

## 💡 Pro-Tips

- **Headers are Mandatory:** Ensure your CSV data includes the header row, or type out the column names manually before the data.
- **Sample the Data:** If your CSV is massive (10,000+ rows), paste only a representative sample (e.g., first 50 and last 50 rows) and explain the full dataset size.
- **Formatting counts:** If the AI is struggling, tell it: "The delimiter is a comma (,) and decimals use a period (.)".
