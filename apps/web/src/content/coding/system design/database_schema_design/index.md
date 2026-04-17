---
id: database_schema_design
topicId: coding
subTopicId: system design
title: Strategic Database Schema Architecture
---
# Template: Strategic Database Schema Architecture

Use this template to design high-integrity, scalable, and query-optimized database structures. It is designed to act as a Data Architect and Senior Backend Engineer—navigating the [SQL_VS_NOSQL] trade-offs, enforcing proper [NORMALIZATION], defining complex [RELATIONSHIPS], and architecting [INDEXING_AND_SHARDING] strategies that support billions of rows with millisecond latency.

## 📋 Prompt Template

```text
Act as a Master Data Architect and Senior Backend Engineer. Design the database schema for [SYSTEM_NAME].

### Data Context:
- **Core Entities**: [e.g., Users, Transactions, Products, Comments, Likes].
- **Scaling Goal**: [e.g., Support 10M active users, high-frequency writes (1k/sec)].
- **Access Patterns**: [e.g., Users primarily read their own feed; heavy filtering on product prices].

### Architectural Requirements:
1. **Engine Selection**: Decide between [RELATIONAL_VS_DOCUMENT] based on the data structure (Justify why PostgreSQL vs MongoDB).
2. **Entity Relationship Diagram (ERD)**: Provide the [TABLE_DEFINITIONS] with types, primary keys, and [FOREIGN_KEY_RELATIONSHIPS].
3. **Normalization Strategy**: Explain the level of [NORMALIZATION] used (1NF-3NF) and identify if/where you chose [DENORMALIZATION] for performance.
4. **Indexing Plan**: Suggest [CORE_INDEXES] for the most frequent queries (include B-Tree vs GIN considerations).
5. **Sharding/Partitioning Key**: If scaling is needed, suggest a [PARTITION_KEY] (e.g., `user_id`, `created_at`) to distribute the data.

### Output Constraints:
- Use a Scalable, Formal, and Data-Driven tone.
- Present the ERD in a [MERMAID_DIAGRAM] or clear Markdown table.
- Conclude with "The Performance Prediction"—the most likely bottleneck of this schema as it grows to 100M rows.
```

## 🧩 Variables to Fill Out

- `[SYSTEM_NAME]` - e.g., A global ride-sharing app, a nested comment system.
- `[RELATIONAL_VS_DOCUMENT]` - Choosing the right tool for the shape of the data.
- `[PARTITION_KEY]` - The foundation of horizontal scaling.
- `[MERMAID_DIAGRAM]` - Visually mapping relationships.

## 💡 Pro-Tips

- **The "JSONB" Middle Ground:** In modern SQL (Postgres), you can have [SCHEMALESS_COLUMNS] inside a relational table. Ask the AI to: "Identify parts of the schema that change too often for a rigid structure."
- **Avoid Cross-Database JOINS:** If you are using microservices, [DO_NOT_JOIN] across service databases. Ask for: "A decentralized data strategy using [API_COMPOSITION] or [DATA_REPLICATION]."
- **Timestamps are Mandatory:** Every table must have `created_at` and `updated_at`. Ask the AI to: "Include [AUDIT_COLUMNS] for all tables."
---
