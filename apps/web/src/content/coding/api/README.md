# 🔌 API Design & Integration: Detailed Guide

Building APIs with AI requires a shift from "write this function" to "describe this contract." This guide provides the tactical depth needed to generate industry-standard API logic.

---

## 📈 Level-Based Prompting Strategy
*Found in [`/01_prompt_levels/`](./01_prompt_levels/)*

### 🐣 Level 1: Simple (CRUD & Utility)
**Focus:** Syntactic correctness.
**Example Prompt:** *"Generate a POST endpoint for 'User' with fields: name, email, password. Use Express.js and Zod for validation."*

### 👟 Level 2: Intermediate (Logic & Security)
**Focus:** Business rules and middleware.
**Example Prompt:** *"Add middleware to the User endpoint that checks for an existing email. Implement bcrypt password hashing and return a JWT upon success."*

### 🏢 Level 3: Advanced (Patterns & Resilience)
**Focus:** Scalability and error handling.
**Example Prompt:** *"Refactor this API to use the Repository Pattern. Implement a global error handler that returns standardized RFC 7807 JSON responses and logs errors to Winston."*

### 🏛️ Level 4: Expert (Architecture & Infrastructure)
**Focus:** System-wide integration.
**Example Prompt:** *"Design a microservice architecture for this API. Include a Rate Limiter using Redis, a Circuit Breaker for downstream services, and a Swagger/OpenAPI 3.0 specification."*

---

## 🛠️ Advanced Techniques
*Found in [`/02_techniques/`](./02_techniques/)*

| Technique | Description | AI Benefit |
| :--- | :--- | :--- |
| **Schema First** | Provide the OpenAPI/JSON schema before code. | Near-zero logic errors in JSON parsing. |
| **Negative Constraints** | Specifically list what NOT to do (e.g., "Don't use `any` types"). | Higher code quality and type safety. |
| **Few-Shot Examples** | Provide 1-2 examples of "perfect" endpoints in your codebase. | Matches your local style and library versions exactly. |

---

## 📋 Templates & Blueprints
*Found in [`/03_templates/`](./03_templates/)*

*   **`rest_resource.md`**: Standardized Controller-Service-Repository structure.
*   **`graphql_schema.md`**: Type definitions, Input types, and Resolver skeletons.
*   **`auth_flow.md`**: OAuth2, OpenID Connect, and custom Header-based auth.

---

## 💡 Pro-Tip: The "Audit" Prompt
After generating an API, use the **Security Audit** prompt:
> *"Review the generated code for OWASP Top 10 vulnerabilities, specifically looking for injection points, insecure direct object references, and broken authentication. Provide a fix for each issue found."*

---
[← Back to Coding](../README.md)