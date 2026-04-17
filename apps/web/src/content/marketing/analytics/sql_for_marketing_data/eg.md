# Examples: SQL for Marketing Analysis

## 1. Calculating LTV by Acquisition Channel

```text
Act as a Senior Data Engineer. Write a PostgreSQL query to Calculate Customer Lifetime Value (LTV) grouped by Marketing Channel.

### Database Schema:
- Table `users`: id, email, acquisition_channel, created_at.
- Table `orders`: id, user_id, amount, status, created_at.

### Query Requirements:
1. **The Core Join**: Join `users` to `orders` on id mapping.
2. **Metric Calculation**: Sum the amount per user, then average it by channel.
3. **Filtering**: Only include orders with status 'completed'.
4. **Grouping**: Group by acquisition_channel.

### Output Constraints:
- Use a CTE for readability.
- Syntax-highlighted block.
```

## 2. 30-Day Churn Identification

```text
Act as a Marketing Analyst. Write a PostgreSQL query to identify users who haven't logged in for 30 days but have spent > $500 total.

### Database Schema:
- Table `users`: id, email, last_login_at.
- Table `orders`: user_id, amount.

### Query Requirements:
- Filter users where `last_login_at` < NOW() - INTERVAL '30 days'.
- Filter summed `amount` > 500.

### Output Constraints:
- Explain the logic.
```
