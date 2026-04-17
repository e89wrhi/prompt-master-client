# Examples: Professional REST Resource Design

## 1. "Invoice" Resource (Fintech)

```text
Act as a Lead API Designer. Design a REST API for "Invoices" inside a multitenant SaaS.

### Context:
- **Major Actions**: List, Create, Update, Delete, and "Approve" (State transition).
- **Hierarchy**: Invoices belong to an "Organization."

### Requirements:
1. Provide the Endpoint Map using `/orgs/:orgId/invoices`.
2. Define the Zod schema for invoice creation.
3. Design the pagination using `total_count`, `next_page`, and `limit`.

### Output Constraints:
- OpenAPI-style documentation.
- Standardized Error Response included.
```

## 2. "Batch Update" Strategy

```text
Act as a Backend Architect. Design a REST-compliant way to update the "status" of 100 individual "Tasks" at once.

### Requirement:
- Decide between `POST /tasks/batch-update` vs `PATCH /tasks`.
- Provide the JSON body structure for clear multi-item mapping.

### Output Constraints:
- Developer-Friendly tone.
```
