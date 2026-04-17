# Examples: Strategic Architecture ADRs

## 1. Choosing PostgreSQL over MongoDB (SaaS App)

```text
Act as a Senior System Architect. Create an ADR for choosing PostgreSQL as the primary database.

### Context:
- **Challenge**: Need strict data integrity for financial transactions.
- **Alternatives**: MongoDB (Flexible but less ACID compliant), DynamoDB (Fast but complex querying).
- **Decision**: PostgreSQL.
- **Rationale**: Support for ACID, matured relational ecosystem, and JSONB for flexibility.

### Output Constraints:
- Use NYGARD format.
- Objective and Analytical tone.
```

## 2. Choosing Vite over Webpack (Frontend)

```text
Act as a Frontend Lead. Create an ADR for migrating to Vite.

### Requirement:
- Focus on Developer Experience (DX) and build speed.
- List the trade-offs (e.g., legacy browser support).

### Output Constraints:
- Conclude with "The Long-Term Impact."
```
