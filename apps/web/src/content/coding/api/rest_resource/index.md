---
id: rest_resource
topicId: coding
subTopicId: api
title: RESTful Resource Blueprint
---
# Template: RESTful Resource Blueprint

Use this template when you need a production-ready file structure and implementation for a new REST API resource. It enforces architectural constraints, input validation, and security out of the box.

## 📋 Prompt Template

```text
Act as a Lead Backend Architect. I need a production-grade [LANGUAGE] implementation for a [RESOURCE_NAME] resource.

### Requirements:
1. **Architecture**: Use a [Layered/Clean/Hexagonal] architecture (Controller, Service, Repository).
2. **Tech Stack**: Framework: [e.g., Spring Boot, NestJS, FastAPI]. Database: [e.g., PostgreSQL + TypeORM].
3. **Validation**: Use [e.g., JSR 303, Zod, Pydantic] for strict input validation.
4. **Data Model**:
   - [FIELD 1: type, constraint (e.g., id: UUID, primary key)]
   - [FIELD 2: type, constraint (e.g., email: string, unique, valid email)]
   - [FIELD 3: ...]
5. **Security**: Ensure all endpoints are protected by [JWT/OAuth2]. Specifically include an RBAC check for the [ROLE_NAME] role on the DELETE and UPDATE endpoints.
6. **Error Handling**: Standardize the JSON output for 400, 401, 403, 404, and 500 errors.

### Constraints:
- Do NOT use any external libraries besides the ones mentioned.
- Ensure all business logic remains in the Service layer, not the Controller.
- Include unit test skeletons (describe/it blocks) for the Service layer.

### Example Reference (Optional):
[Insert snippet of existing controller/service if you want it to match your exact style]
```

## 🧩 Variables to Fill Out

- `[LANGUAGE]` - The programming language (e.g., TypeScript, Python, Java).
- `[RESOURCE_NAME]` - The entity you are building (e.g., User, Product, Order).
- `[ROLE_NAME]` - The specific role allowed to do destructive actions (e.g., admin, superuser).

## 💡 Pro-Tips
- **Lock down the architecture:** Explicitly stating `Ensure all business logic remains in the Service layer` prevents the AI from lazily writing bloated controllers ("fat controllers").
- **Combine with Few-Shot:** Paste an existing Controller snippet under the "Example Reference" section to guarantee the AI adopts your team's exact coding style.
