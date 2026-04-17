# Examples: High-Integrity DB Migrations

## 1. Split "User" table (PostgreSQL / Prisma)

```text
Act as a Database Architect. Help me split a "User" table into "User" and "UserProfile" (1-to-1).

### Context:
- **Task**: Move `bio`, `profile_picture`, and `social_links` into a new `UserProfile` table.
- **Current Stack**: PostgreSQL + Prisma.
- **Production**: 500k rows.

### Requirements:
1. Provide the Prisma schema changes and the raw SQL for the data backfill.
2. Ensure no data is lost during the move.
3. Provide a Rollback plan.

### Output Constraints:
- Precise and Risk-Averse tone.
- Copy-pasteable SQL blocks.
```

## 2. Converting String to JSONB (Large Scale)

```text
Act as a Senior Data Engineer. Convert a `metadata` column from a Text string to a JSONB column in Postgres.

### Requirement:
- Provide a batched migration script to update 5M rows without locking the table for more than 1 second.

### Output Constraints:
- Include a validation query.
```
