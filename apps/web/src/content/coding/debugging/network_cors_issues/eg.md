# Examples: Network & CORS Issue Resolution

## 1. React to Express CORS Failure (Localhost)

```text
Act as a DevSecOps Specialist. I'm hitting a CORS error between my React frontend (port 3000) and Express backend (port 5000).

### Context:
- **Error**: "No 'Access-Control-Allow-Origin' header is present on the requested resource."
- **Stack**: Express.js with the `cors` package.

### Debugging:
- Provide the exact `app.use(cors())` configuration for development.
- Explain how to restrict this to only my frontend origin in production.

### Output Constraints:
- Solution-Oriented tone.
```

## 2. API Gateway 403 Forbidden (AWS)

```text
Act as a Network Engineer. My frontend is getting a 403 Forbidden when calling my AWS API Gateway.

### Context:
- I have enabled CORS in the AWS Console, but it still fails on "Preflight" OPTIONS requests.

### Requirement:
- Debug the API Gateway Response headers.
```
