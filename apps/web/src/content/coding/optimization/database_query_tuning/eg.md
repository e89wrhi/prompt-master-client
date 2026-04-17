# Examples: Expert DB Query Tuning

## 1. Slow JOIN on 1M Rows (PostgreSQL)

```text
Act as a Senior DBA. Help me optimize a slow query for "Recent Transaction History."

### Context:
- **Query**: JOIN between `Users`, `Orders`, and `OrderItems` filtered by `status = 'SHIPPED'`.
- **Slowness**: Takes 4 seconds for 1M user records.

### Requirements:
1. Identify missing indexes on Foreign Keys.
2. Suggest a Partial Index for the 'SHIPPED' status.
3. Provide the optimized SQL rewrite.

### Output Constraints:
- Data-Driven and Performance-Focused tone.
- Query Handshake included.
```

## 2. N+1 Problem in Prisma (TypeScript)

```text
Act as a Backend Lead. My GraphQL API is slow because Prisma is doing 50 individual queries for a list of Users' Posts.

### Requirement:
- Code for "Eager Loading" using the `include` or `select` pattern in Prisma.

### Output Constraints:
- Practical tone.
```
