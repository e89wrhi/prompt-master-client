# Examples: Type-Safe GraphQL Design

## 1. E-Commerce Backend (Product/Order)

```text
Act as a GraphQL Architect. Design a schema for a basic E-Commerce system.

### Context:
- **Entities**: User, Product, Order.
- **Relationship**: An Order belongs to a User and contains multiple Products.

### Requirements:
1. Provide the SDL for `User`, `Product`, and `Order`.
2. Implement Relay-style cursor pagination for a User's orders.
3. Solve the N+1 problem for fetching "OrderedProducts" inside an Order.

### Output Constraints:
- Formal and Technical tone.
- SDL format.
```

## 2. Social Search (Union Types)

```text
Act as a GraphQL Expert. Design a "Search" query that returns a mix of `User` and `Post` types.

### Requirement:
- Use a `Union` type called `SearchResult`.
- Provide the resolver logic (pseudocode) for filtering results by a "query" string.

### Output Constraints:
- Scalable tone.
```
