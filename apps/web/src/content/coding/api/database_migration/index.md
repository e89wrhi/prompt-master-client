# Template: Database Model & Migration

Use this template when you need to design a robust database schema, generate ORM models, or write raw SQL migrations. It enforces database optimization best practices like indexing and foreign constraints.

## 📋 Prompt Template

```text
Act as a Senior Database Administrator and Backend Developer. I need to implement a new database schema for a [FEATURE_NAME] feature.

### Requirements:
1. **ORM / Technology**: [e.g., Prisma, TypeORM, SQLAlchemy, Raw PostgreSQL].
2. **Entities**: 
   - We need to model the following core entities: [List 1-3 core entities].
   - Provide the exact mapping between these entities (e.g., One-to-Many, Many-to-Many).
3. **Fields & Constraints**:
   - Give me strict data types and constraints (e.g., non-null, unique, default values).
   - Add audit fields (createdAt, updatedAt) to every table.
4. **Performance**:
   - Explicitly define the necessary database indexes (B-tree, Hash) needed to optimize a query that fetches [Explain common query, e.g., "all active orders by user ID"].
   - Include cascading rules for deletions where appropriate.

### Code Implementation:
Generate the schema definition file and the corresponding SQL migration script.

### Constraints:
- Use standard naming conventions: lowercase plural for table names, camelCase for column names in the ORM, and snake_case for column names in the database.
```

## 🧩 Variables to Fill Out

- `[FEATURE_NAME]` - The core system you're building (e.g., Subscription Billing).
- `[ORM / Technology]` - Your exact tools (e.g., Prisma with PostgreSQL).
- `[List 1-3 core entities]` - Just give high-level names (e.g., Subscriber, Plan, Invoice).
- `[Explain common query]` - State your most expensive or common lookup so the AI adds the right indexes.

## 💡 Pro-Tips
- **Index upfront:** Making the AI provide indexes *during* the design phase prevents N+1 and slow query problems down the line. It's much harder for an AI to refactor missing indexes later.
