---
id: database_query_tuning
topicId: coding
subTopicId: optimization
title: Expert Database Query Tuning
---
# Template: Expert Database Query Tuning

Use this template to identify and resolve slow database performance. It is designed to act as a Database Administrator (DBA) and Backend Lead—utilizing [EXPLAIN_ANALYZE] to find bottlenecks, identifying [SEQUENTIAL_SCANS], adding [STRATEGIC_INDEXES], and implementing [N+1_QUERY_ELIMINATION] to ensure your data access layer is running as fast as theoretically possible.

## 📋 Prompt Template

```text
Act as a Senior DBA and Performance Engineer. Help me optimize the following [SLOW_QUERY].

### Query Context:
[PASTE_SQL_OR_ORM_QUERY_HERE]

### Performance Requirements:
1. **Execution Plan Analysis**: Analyze the [EXPLAIN_ANALYZE] output. Where is the most time being spent (e.g., Seq Scan, Nested Loop, Hash Join)?
2. **Indexing Recommendation**: Identify which columns need [INDEXES] (B-tree, GIN, Partial) to convert scans into index seeks.
3. **ORM to SQL Audit**: If using an ORM (Prisma/Eloquent), identify if it's causing an [N+1_PROBLEM] and suggest the equivalent "Eager Loading" fix.
4. **Denormalization Strategy**: If the query is still slow, suggest a [CACHED_OR_DENORMALIZED_COLUMN] to store calculated values (e.g., `user_total_spent`).
5. **Rewrite Strategy**: Provide an [OPTIMIZED_QUERY_REWRITE] that uses more efficient joins or subqueries.

### Output Constraints:
- Use a Precise, Data-Driven, and Performance-Focused tone.
- Conclude with "The Query Handshake"—a comparison of the estimated [COST] before and after the fix.
- Present all SQL in high-contrast blocks.
```

## 🧩 Variables to Fill Out

- `[SLOW_QUERY]` - The SQL or ORM code that is timing out.
- `[EXPLAIN_ANALYZE]` - The roadmap of the database's thinking.
- `[N+1_PROBLEM]` - Many individual queries instead of one joined query.
- `[STRATEGIC_INDEXES]` - B-Trees, GINs, and Coverage.

## 💡 Pro-Tips

- **The "Over-Index" Warning:** Every index makes `INSERT` and `UPDATE` slightly slower. Ask the AI to: "Identify the [WRITE_PERFORMANCE_COST] of adding these new indexes."
- **Select only what you need:** Never use `SELECT *`. Ask the AI to: "Refactor the query to only pull the [SPECIFIC_5_COLUMNS] required for the UI."
- **Partial Indexes are Magic:** If you only care about "Active" users, use a [PARTIAL_INDEX] (`WHERE is_active = true`). Ask for: "A partial index definition to reduce index size by 90%."
---
