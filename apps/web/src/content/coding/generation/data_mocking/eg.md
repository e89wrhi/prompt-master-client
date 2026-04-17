# Examples: Realistic Data Mocking

## 1. 50 "User Profiles" for HR App (JSON)

```text
Act as a QA Specialist. Generate a 50 records dataset of "EmployeeProfiles."

### Context:
- **Fields**: UUID, Full Name, Department (Sales, Tech, HR), Salary (50k-150k), HiredDate (ISO).
- **Distribution**: 60% Tech, 20% Sales, 20% HR.
- **Resiliency**: Include 5% null values for "Salary" to test data gaps.

### Output Constraints:
- JSON format.
- Diverse global names.
- Conclude with Resiliency Check.
```

## 2. "Stock Market Ticker" Data (CSV)

```text
Act as a Data Engineer. Generate 100 rows of stock ticker data.

### Requirement:
- Symbol (e.g., AAPL), Price (float), Open/Close (float), Date.
- Ensure the Close price is within 2% of the Open price.

### Output Constraints:
- CSV format.
```
