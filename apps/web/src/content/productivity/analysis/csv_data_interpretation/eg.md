# Examples: CSV Data Interpretation

## 1. Quarterly Sales Performance Analysis

```text
Act as a Senior Data Scientist and Business Intelligence Analyst. Review and interpret the following Sales Export data:

[PASTE_CSV_DATA_HERE]
Date,Product,Units_Sold,Price_Per_Unit,Region,Lead_Source
2023-01-01,Widget A,120,15,North,Social
2023-01-05,Widget B,80,25,South,Search
2023-01-10,Widget A,150,15,North,Social
...
2023-03-30,Widget C,200,45,West,Direct

### Analysis Requirements:
1. **Executive Summary**: Provide a 3-sentence summary of the overall status of the data.
2. **Key Trends**: Identify at least 3 significant trends (e.g., Seasonality, Region performance, Product popularity).
3. **Anomalies & Outliers**: Flag any data points that deviate significantly from the norm (e.g., unusually large single orders).
4. **Calculated Insights**: Derive the Total Revenue, Average Order Value (AOV), and Best Performing Region from the raw values.
5. **Correlation Discovery**: Identify potential relationships between Lead_Source and Units_Sold.

### Output Constraints:
- Use clear headings and bullet points.
- If data is missing or corrupted, explicitly state which rows or columns are affected.
- Avoid technical jargon unless specifically requested.
```

## 2. Website Traffic & Engagement Audit

```text
Act as a Senior Data Scientist and Business Intelligence Analyst. Review and interpret the following Traffic Logs data:

[PASTE_CSV_DATA_HERE]
Page_URL,Load_Time_ms,Bounce_Rate_%,Total_Visits,Mobile_%,Desktop_%
/home,250,45.2,5000,60,40
/product-cat,1200,78.1,1200,85,15
/checkout,450,12.5,450,55,45

### Analysis Requirements:
1. **Executive Summary**: Provide a 3-sentence summary of the overall status of the data.
2. **Key Trends**: Identify at least 3 significant trends (e.g., Mobile vs Desktop performance).
3. **Anomalies & Outliers**: Flag any data points that deviate significantly from the norm (e.g., high bounce rates on specific URLs).
4. **Calculated Insights**: Derive the Average Load Time and Overall Bounce Rate weighted by visits.
5. **Correlation Discovery**: Identify potential relationships between Load_Time_ms and Bounce_Rate_%.

### Output Constraints:
- Use clear headings and bullet points.
```
