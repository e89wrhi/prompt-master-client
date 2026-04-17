# Template: Professional API Reference Documentation

Use this template to create comprehensive, developer-frieindly documentation for your APIs. It is designed to act as a Technical Writer and Developer Advocate—adhering to the [OPENAPI_STRUCTURE], providing clear [ENDPOINTS_OVERVIEW], detailing [REQUEST/RESPONSE_EXAMPLES], and explicitly documenting [HTTP_STATUS_CODES] and [AUTHENTICATION_METHODS].

## 📋 Prompt Template

```text
Act as a Technical Writer and Senior Developer Advocate. Help me draft the "API Reference" for [API_NAME/SERVICE].

### API Context:
- **Major Resource**: [e.g., /transactions, /user-profiles, /search].
- **Tech Stack**: [e.g., RESTful, GraphQL, JSON-RPC].
- **Target Audience**: [e.g., Internal frontend developers, external integration partners].

### Documentation Requirements:
1. **Endpoint Overview**: List the [URL_PATHS] and their [HTTP_VERBS] with a 1-sentence description of each.
2. **Parameters & Headers**: Detail the [REQUIRED_ARGUMENTS] (Body, Path, Query) including types and validation rules.
3. **Request/Response Examples**: Provide high-fidelity [JSON_BLOCKS] for a successful 200/201 response and at least one 4xx/5xx error.
4. **Authentication & Scopes**: Describe the [AUTH_HEADER] required and any specific permission scopes (e.g., `read:users`).
5. **Rate Limits & Constraints**: Mention any [THROTTLING_POLICIES] or size limits on payloads.

### Output Constraints:
- Use a Formal, Precise, and Industry-Standard tone.
- Conclude with "The Developer's Sandbox"—a [CURL_COMMAND] example for the most common request.
- Use GitHub Flavored Markdown for tables and code blocks.
```

## 🧩 Variables to Fill Out

- `[API_NAME / SERVICE]` - The name of the API.
- `[OPENAPI_STRUCTURE]` - The industry standard for documenting APIs.
- `[JSON_BLOCKS]` - Real-world data examples.
- `[CURL_COMMAND]` - For quick testing.

## 💡 Pro-Tips

- **Document the "Unexpected":** Mention specific [ERROR_CODES] (e.g., 402 Payment Required). Ask the AI to: "Include a table of [CUSTOM_ERROR_MAPPING] for this resource."
- **Versioning is Key:** Always state the [API_VERSION] (e.g., v1, v2). Ask for: "A 'Breaking Changes' warning section if this replaces an older endpoint."
- **Group by Resource:** For large APIs, [CATEGORY_GROUPING] is essential. Ask the AI to: "Structure the document into logical sections (e.g., Account Management, Billing, Data Export)."
---
