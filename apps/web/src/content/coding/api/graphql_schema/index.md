# Template: GraphQL Schema & Resolvers

Use this template when building out new GraphQL modules. It ensures the AI understands your types, inputs, mutations, and adheres to standard GraphQL naming conventions.

## 📋 Prompt Template

```text
Act as a Senior Backend Developer. Generate a clean GraphQL schema and resolver skeleton for the [SYSTEM_NAME] system.

### Components Needed:
1. **Types**: Define the core `[ENTITY_NAME]` type and any relevant nested relations.
2. **Inputs**: Create strict `Create[ENTITY_NAME]Input` and `Update[ENTITY_NAME]Input` types.
3. **Queries**:
   - `get[ENTITY_NAME]ById(id: ID!): [ENTITY_NAME]`
   - `search[ENTITY_NAME]s(filter: [ENTITY_NAME]Filter, limit: Int, offset: Int): [[ENTITY_NAME]!]!`
4. **Mutations**:
   - `create[ENTITY_NAME](input: Create[ENTITY_NAME]Input!): [ENTITY_NAME]!`
   - `update[ENTITY_NAME](id: ID!, input: Update[ENTITY_NAME]Input!): [ENTITY_NAME]!`
   - `delete[ENTITY_NAME](id: ID!): Boolean!`

### Specifications:
- **Language**: [LANGUAGE, e.g., TypeScript, Go, Python]
- **Library**: [LIBRARY, e.g., Apollo Server, Graphene, Nexus, gqlgen]
- **Directives**: Include `@[AUTH_DIRECTIVE]` directives where necessary to protect mutations.
- **Naming**: Use PascalCase for types and camelCase for fields/queries/mutations.

### Constraints:
- Separate schema definitions from resolver code.
- Provide a clear example of how to handle the `search[ENTITY_NAME]s` resolver's database fetching.

### Example Schema (Target Style - Optional):
[Paste a snippet of an existing standard schema/resolver from your codebase here]
```

## 🧩 Variables to Fill Out

- `[SYSTEM_NAME]` - The broader system or microservice context (e.g., Inventory Management).
- `[ENTITY_NAME]` - The specific core entity (e.g., Product, Invoice).
- `[LANGUAGE]` / `[LIBRARY]` - Your stack (e.g., TypeScript / Apollo Server).
- `[AUTH_DIRECTIVE]` - Your specific authentication directive if you use one (e.g., `@auth(requires: USER)`).

## 💡 Pro-Tips
- **Pagination by default:** Notice the prompt explicitly asks for `limit` and `offset` in the search query. This primes the AI to set up pagination immediately.
- **Input Types over arguments:** Forcing `Create[ENTITY]Input` prevents the AI from cluttering mutation signatures with dozens of inline arguments.
