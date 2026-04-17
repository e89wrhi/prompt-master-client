---
id: database_migration
topicId: coding
subTopicId: api
title: Database Model & Migration
---
# Template: High-Integrity Database Migrations

Use this template to design mission-critical database schema changes. It is designed to act as a Database Architect—utilizing [UP/DOWN_SCRIPTS], ensuring [ZERO-DOWNTIME] transitions, maintaining data integrity during type changes, and implementing proper [INDEXING_STRATEGIES] to prevent performance degradation on high-traffic tables.

## 📋 Prompt Template

```text
Act as a Database Architect and Senior Data Engineer. Help me design a migration for the following [DATABASE_TYPE] schema change.

### Migration Context:
- **The Task**: [e.g., Adding a many-to-many relationship, splitting a 'Users' table into 'Users' and 'Profiles', changing a column from String to JSONB].
- **Current Stack**: [e.g., PostgreSQL with Prisma, MySQL with TypeORM, MongoDB].
- **Production Status**: [e.g., High-traffic table with 10M+ rows, internal tool with low traffic].

### Migration Requirements:
1. **The Step-by-Step Logic**: Provide the [UP] and [DOWN] (Rollback) logic.
2. **Data Integrity Guard**: How do we handle [EXISTING_DATA]? (e.g., "Script to migrate existing emails into the new table," "Handling null values in the new required column").
3. **Zero-Downtime Strategy**: If the table is large, describe how to avoid [LOCKING_ISSUES] (e.g., "Add column as nullable, backfill, then add constraint").
4. **Indexing & Performance**: Suggest which [COLUMNS] need new indexes and what type (B-tree, GIN, Hash) is most efficient for upcoming queries.
5. **Validation Query**: Provide a SQL query to [VERIFY_SUCCESS] after the migration is applied.

### Output Constraints:
- Use a Precise, Risk-Averse, and Technical tone.
- Conclude with "The Rollback Plan"—a clear set of instructions for when things go wrong.
- Provide all scripts in copy-pasteable blocks for the [MIGRATION_TOOL].
```

## 🧩 Variables to Fill Out

- `[DATABASE_TYPE]` - PostgreSQL, MySQL, NoSQL, etc.
- `[UP / DOWN]` - The forward and backward logic.
- `[LOCKING_ISSUES]` - Preventing production freezes.
- `[INDEXING_STRATEGIES]` - Performance is a feature.

## 💡 Pro-Tips

- **The "Three-Phase" Move:** For major changes on live data, use the [EXPAND_AND_CONTRACT] pattern: 1. Add the new structure. 2. Double-write to both old and new. 3. Remove the old. Ask the AI to: "Detail the 3-phase move for this specific migration."
- **Batching for Large Tables:** Never update 10M rows in a single transaction. Ask for: "A [BATCHED_MIGRATION_SCRIPT] that updates 1,000 rows at a time with a sleep interval."
- **Check the Query Plan:** A migration might fix the data but break the queries. Ask the AI to: "Anticipate the [EXPLAIN_ANALYZE] results for the most common query after this index is added."
---
