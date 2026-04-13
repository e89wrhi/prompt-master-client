# Template: Network & CORS Debugging

Use this template when dealing with elusive network errors like Preflight failures, bad proxies, SSL cert issues, or weird HTTP 502s.

## 📋 Prompt Template

```text
Act as a Network and Infrastructure Engineer. I have a [CORS_ERROR / TIMEOUT / PROXY_ERROR] occurring between my frontend and backend.

### Architecture Overview:
- **Frontend App**: [e.g., React hosted on Vercel at https://app.example.com]
- **Backend App**: [e.g., Express API hosted on Heroku at https://api.example.com]
- **Intermediaries**: [e.g., Cloudflare, Nginx reverse proxy]

### The Exact Browser/Network Error:
```text
[PASTE BROWSER CONSOLE ERROR OR RAW HTTP HEADERS]
```

### Backend Configuration:
```[LANGUAGE]
[PASTE THE SERVERSIDE CORS CONFIG OR REVERSE PROXY CONFIG]
```

### Task:
1. Explain exactly why the browser or proxy is rejecting this request based on the headers provided.
2. Provide the exact piece of configuration (e.g., Express CORS middleware config, Nginx `location` block) that will explicitly allow this request to succeed safely.
3. Identify if any credentials (cookies, authorization headers) require special handling in this setup.
```

## 🧩 Variables to Fill Out

- `[CORS_ERROR ...]` - Define what type of network error it is.
- `[Architecture Overview]` - Include the distinct Origins (scheme, domain, port) for both parties. CORS requires exact matches!

## 💡 Pro-Tips
- **Origins matter:** Don't just say "My React app". Say "My React app running on `http://localhost:3000`". The AI needs the port and protocol to fix CORS.
- **Copy cURL:** If possible, copy the failing request as a cURL command from the Network tab and paste that into the prompt for maximum context.
