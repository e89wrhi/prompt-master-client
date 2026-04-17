# Examples: Secure API Authentication

## 1. Next.js + Clerk (Social login)

```text
Act as a Senior Security Engineer. Help me design an OAuth2 flow for a Next.js app using Clerk.

### Security Context:
- **Method**: Google & GitHub OAuth.
- **Tech Stack**: Next.js 14 (App Router).
- **Authorization**: RBAC (Admin, Editor, Viewer).

### Requirements:
1. **Sequence**: Describe how Clerk handles the callback and session creation.
2. **Middleware**: Provide a `middleware.ts` example for protecting routes based on roles.
3. **Hardening**: How to prevent CSRF during the callback phase.

### Output Constraints:
- Mermaid sequence diagram.
- Copy-pasteable middleware code.
```

## 2. Global API Key Auth (Node.js)

```text
Act as a Lead Backend Architect. Design a simple but secure API Key authentication for an external developer API.

### Context:
- Method: Bearer Token in Authorization Header.
- Strategy: API Keys stored as hashed values (bcrypt) in the DB.

### Output Constraints:
- Provide the logic for rate-limiting based on the API Key.
```
