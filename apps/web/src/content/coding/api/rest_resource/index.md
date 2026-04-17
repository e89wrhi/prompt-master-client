---
id: rest_resource
topicId: coding
subTopicId: api
title: RESTful Resource Blueprint
---
# Template: Professional REST Resource Design

Use this template to design clean, predictable, and industry-standard RESTful APIs. It is designed to act as an API Designer—enforcing consistent [ENDPOINT_NAMING], proper use of [HTTP_VERBS], implementing strict [REQUEST_VALIDATION], and architecting standardized [RESPONSE_STRUCTURES] (including pagination and error handling).

## 📋 Prompt Template

```text
Act as a Lead API Designer and Backend Architect. Help me design the REST resource for [ENTITY_NAME].

### Resource Context:
- **Major Actions**: [e.g., CRUD, archiving, batching, state-transitions (e.g., 'Approving an Invoice')].
- **Relationship Context**: [e.g., This entity belongs to a 'Project'].
- **Key Constraints**: [e.g., Must handle 100k records, needs high-performance search].

### Design Requirements:
1. **Endpoint Map**: List the [REST_URLS] using plural nouns (e.g., `GET /v1/projects/:id/invoices`).
2. **Method Assignment**: Assign [HTTP_VERBS] (GET, POST, PUT, PATCH, DELETE) for every major action, justifying the choice between PUT and PATCH.
3. **Request Body Schema**: Define the [VALIDATION_MODEL] (e.g., Zod or TypeScript interface) for the `POST` and `PATCH` bodies.
4. **Filtering & Pagination Strategy**: Design the [QUERY_PARAMETERS] for searching (e.g., `?status=paid&limit=50&offset=0`).
5. **Success & Error Payloads**: Provide the [JSON_STRUCTURE] for a successful response and a standard [ERROR_RESPONSE] (including machine-readable error codes).

### Output Constraints:
- Use a Consistent, Standardized, and Developer-Friendly tone.
- Follow the [OPENAPI_SPECIFICATION] style.
- Conclude with "The API Contract Summary"—a quick table of all endpoints and their status codes.
```

## 🧩 Variables to Fill Out

- `[ENTITY_NAME]` - e.g., Users, Invoices, Tasks, Sessions.
- `[HTTP_VERBS]` - The "Grammar" of REST.
- `[VALIDATION_MODEL]` - The shield of your database.
- `[QUERY_PARAMETERS]` - How users find what they need.

## 💡 Pro-Tips

- **Plural Nouns only:** Never use `/getUsers`. Use `GET /users`. Ask the AI to: "Audit the [ENDPOINT_NAMING] for RESTful purity."
- **PATCH for Partial, PUT for Replacement:** If you only change the "Email," use PATCH. Ask for: "Specific [PATCH_LOGIC] to handle partial updates securely."
- **Standardized Error Codes:** Instead of just saying "Internal Error," use custom codes like `ERR_INVALID_AUTH` or `ERR_RESOURCE_NOT_FOUND`. Ask for: "A [MACHINE-READABLE_ERROR_MAP]."
---
