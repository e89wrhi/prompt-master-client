# Template: Network & CORS Issue Resolution

Use this template to identify and fix cross-origin resource sharing (CORS) errors and complex network failures. It is designed to act as a Network Engineer and DevSecOps Specialist—analyzing [OPTIONS_REQUESTS], identifying misconfigured [ALOWED_ORIGINS], and providing the precise server-side headers or proxy configurations needed to restore secure communication between your frontend and backend.

## 📋 Prompt Template

```text
Act as a Senior Network Engineer and DevSecOps Specialist. I am hitting a [NETWORK/CORS] error in my application.

### Error Context:
- **Observed Error**: [e.g., "Access to fetch at 'API_URL' from origin 'UI_URL' has been blocked by CORS policy"].
- **Environment**: [e.g., Localhost, Production on Vercel, AWS CloudFront].
- **Tech Stack**: [e.g., Next.js frontend, Python/FastAPI backend].

### Debugging Strategy:
1. **The Request Audit**: Analyze the [NETWORK_TAB] details. Is it a preflight (OPTIONS) request failure or the actual GET/POST?
2. **Origin Analysis**: Verify if the [ORIGIN] is correctly listed in the `Access-Control-Allow-Origin` header and if [CREDENTIALS] (cookies/auth) are being passed.
3. **Server-Side Fix**: Provide a code snippet for the [BACKEND_FRAMEWORK] to allow the specific origin, methods (GET, POST, etc.), and headers (Content-Type, Authorization).
4. **Proxy/Bypass Recommendation**: If a direct fix isn't possible, suggest a [REVERSE_PROXY] (e.g., Nginx config) or a [NEXT_AUTH] proxy solution to bypass the overhead.
5. **Security Check**: Ensure that allowing this origin doesn't create a [CSRF_VULNERABILITY].

### Output Constraints:
- Use a Technical, Precise, and Solution-Oriented tone.
- Present the solution in a "Quick Fix" (Development) vs "Secure Fix" (Production) format.
- Conclude with "The Network Handshake"—an explanation of why the browser blocked this specific request.
```

## 🧩 Variables to Fill Out

- `[BACKEND_FRAMEWORK]` - e.g., Express.js, Django, Go-fiber.
- `[NETWORK_TAB]` - Chrome DevTools, Firefox Network Monitor.
- `[ALLOWED_ORIGINS]` - The list of safe URLs.
- `[OPTIONS_REQUEST]` - The pre-flight check.

## 💡 Pro-Tips

- **Wildcards are for Dev only:** Never use `Access-Control-Allow-Origin: *` in production. Ask the AI to: "Design a [DYNAMIC_ORIGIN_VALIDATOR] for my Production environment."
- **Check the SSL Certificate:** Sometimes a CORS error is actually an [SSL_MISMATCH] (connecting from HTTPS to HTTP). Ask the AI to: "Verify the protocol consistency across my environments."
- **Vary Header for Caching:** If your API serves multiple origins, remember the [Vary:_Origin] header to prevent cache poisoning. Ask why this matters for your specific setup.
---
