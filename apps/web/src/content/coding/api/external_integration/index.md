# Template: External API Integration

Use this template when your API needs to securely consume a third-party service (like Stripe, Twilio, or an external weather API). It ensures your implementation is highly resilient to external failure.

## 📋 Prompt Template

```text
Act as a Senior Backend Integration Engineer. I need to write an API client in [LANGUAGE/FRAMEWORK] to integrate with the [THIRD_PARTY_SERVICE] API.

### Requirements:
1. **Service Class**: Build a dedicated Service/Client class that wraps the external calls. Do not leak the HTTP client implementation details outside this class.
2. **Resilience**: 
   - Implement an exponential backoff retry mechanism.
   - Implement strict HTTP request timeouts (e.g., 5 seconds maximum).
3. **Error Handling**: 
   - Wrap all third-party API errors into custom internal domain errors. For example, if [THIRD_PARTY_SERVICE] returns a 503, throw an `IntegrationUnavailableError`.
4. **Logging**: Log all outgoing requests and responses securely, but redact sensitive information like API keys, tokens, or PII.
5. **Types**: Use [TypeScript interfaces / Pydantic models] for both the expected response and request payloads.

### Target Endpoints:
- Provide the integration for the following action: [Describe Action, e.g., "Create a customer profile and charge a credit card"].

### Constraints:
- Only use [SPECIFIC_HTTP_LIBRARY, e.g., axios, raw native fetch] for HTTP calls.
```

## 🧩 Variables to Fill Out

- `[LANGUAGE/FRAMEWORK]` - Your backend stack.
- `[THIRD_PARTY_SERVICE]` - The external API you are calling (e.g., OpenAI, Stripe, SendGrid).
- `[Describe Action]` - The specific workflow you need (e.g., Generate PDF invoice).
- `[SPECIFIC_HTTP_LIBRARY]` - Ensure it uses the library already in your `package.json`.

## 💡 Pro-Tips
- **Demand Resilience:** External APIs *will* fail. Telling the AI to include retries and timeouts right away guarantees your app won't hang or crash when OpenAI or SendGrid goes down.
- **Fail Gracefully:** Wrapping errors ensures your frontend doesn't accidentally receive confusing third-party HTML error pages.
