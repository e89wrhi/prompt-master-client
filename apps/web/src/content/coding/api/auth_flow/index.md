---
id: auth_flow
topicId: coding
subTopicId: api
title: Secure Authentication Flow
---
# Template: Secure Authentication Flow

Use this template when starting a new authentication or authorization system. It puts the AI in a security-first mindset, ensuring the generated code adheres to modern defense-in-depth principles.

## 📋 Prompt Template

```text
Act as a strict Cybersecurity Architect and Senior Backend Developer. Design and implement a secure [AUTH_TYPE] flow for a [APPLICATION_TYPE].

### Flow Requirements:
1. **Grant Type / Flow**: [e.g., Authorization Code with PKCE, Client Credentials, Standard JWT].
2. **Providers**: [e.g., Auth0, Firebase, Keycloak, or Custom JWT implementation].
3. **Session Management**: Explain exactly how access tokens and refresh tokens are handled, transmitted, and stored on the client.
4. **Security Hardening**:
   - Implement strict rate limiting on the login and token generation endpoints.
   - Use secure, httpOnly, SameSite cookies for all refresh token storage (No localStorage).
   - Include CSRF protection strategies (e.g., Double Submit Cookie).
   - Ensure generic error messages on login failures (e.g., "Invalid credentials" instead of "User not found").

### Code Implementation:
Generate the middleware and service logic in [LANGUAGE/FRAMEWORK] that implements this flow. 

### Constraints:
- Passwords (if applicable) must never be logged.
- All sensitive database errors must be masked in the API response.
- Use [CRYPTO_LIBRARY, e.g., bcrypt, argon2] for any hashing.
```

## 🧩 Variables to Fill Out

- `[AUTH_TYPE]` - Type of authentication (e.g., OAuth 2.0, SAML, basic JWT login).
- `[APPLICATION_TYPE]` - The client architecture (e.g., Single Page App (SPA), Mobile App, Server-to-Server).
- `[LANGUAGE/FRAMEWORK]` - Your backend stack (e.g., Node.js/Express, Go/Gin, .NET Core).
- `[CRYPTO_LIBRARY]` - Preferred cryptographic hash function if doing custom auth.

## 💡 Pro-Tips
- **Be explicit about storage:** The biggest mistake AI makes with auth code is putting JWTs in localStorage. Explicitly requesting `httpOnly` cookies forces it down the secure path.
- **Application Type matters:** An SPA requires a different OAuth flow (like PKCE) compared to a traditional server-rendered web app. Providing `[APPLICATION_TYPE]` ensures the correct logic is generated.
