---
id: graphql_schema
topicId: coding
subTopicId: api
title: GraphQL Schema & Resolvers
---
# Template: Type-Safe GraphQL Schema Design

Use this template to design scalable, self-documenting GraphQL APIs. It is designed to act as a GraphQL Architect—defining precise [TYPES], building [QUERIES_AND_MUTATIONS] that follow Best Practices, managing complex relationships with [DATA_LOADERS], and implementing [PAGINATION] (Relay-style) to ensure performance across deep nested data structures.

## 📋 Prompt Template

```text
Act as a GraphQL Architect and Senior Backend Engineer. Help me design a GraphQL schema for a [SYSTEM_DESCRIPTION].

### Schema Context:
- **Major Entities**: [e.g., User, Order, Product, Category, Review].
- **Core Relationships**: [e.g., A User has many Orders; an Order has many Products via 'OrderItems'].
- **Key Functionality**: [e.g., Searching products with filters, handling complex nested comments].

### Architectural Requirements:
1. **Type Definition (SDL)**: Provide the [SCHEMA_DEFINITION_LANGUAGE] for the core entities, including enums and custom scalars (e.g., DateTime).
2. **Query & Mutation Design**: Define the [CRUD_OPERATIONS] and any complex actions (e.g., `checkoutOrder`, `followUser`).
3. **Advanced Relationships**: Use [INTERFACES_OR_UNIONS] to handle polymorphic types (e.g., a 'SearchResult' that could be a User or a Blog post).
4. **Performance Strategy (Dataloader)**: Explain how to solve the [N+1_PROBLEM] for the [NESTED_RELATIONSHIP].
5. **Pagination & Filtering**: Design a [RELAY-STYLE_PAGINATION] (Edges/Nodes/PageInfo) for one of the main collections.

### Output Constraints:
- Use a Scalable, Formal, and Technical tone.
- Conclude with "The Resolver Blueprint"—a pseudocode example of one complex resolver logic.
- Present SDL in high-contrast code blocks.
```

## 🧩 Variables to Fill Out

- `[SYSTEM_DESCRIPTION]` - e.g., A social media platform, an e-commerce backend.
- `[RELAY-STYLE_PAGINATION]` - The industry standard for large lists.
- `[N+1_PROBLEM]` - The #1 cause of slow GQL APIs.
- `[SCHEMA_DEFINITION_LANGUAGE]` - The .graphql file format.

## 💡 Pro-Tips

- **Enums for State:** Never use strings for "Status" fields. Always use [ENUMS] (e.g., `OrderStatus: PENDING, PAID, SHIPPED`). Ask for: "Strict Enum definitions for all stateful fields."
- **Small Input Objects:** Instead of 10 arguments in a mutation, use a single [INPUT_OBJECT] (e.g., `createUserInput`). This makes it easier to evolve the API without breaking changes.
- **Nullability Strategy:** By default, everything is nullable in GQL. Be [EXPLICIT] about what must always exist (using `!`). Ask the AI to: "Audit the schema for [NON-NULLABLE_FIELDS]."
---
