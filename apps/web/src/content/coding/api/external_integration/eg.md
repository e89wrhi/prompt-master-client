# Examples: Robust External Integration

## 1. Stripe Checkout (Next.js 14)

```text
Act as an API Integration Specialist. Help me integrate Stripe Checkout into a Next.js App Router project.

### Context:
- **Goal**: Create a session and handle the `checkout.session.completed` webhook.
- **Stack**: Next.js, Stripe SDK, Prisma.

### Requirements:
1. Provide the code for the `checkout` API route.
2. Provide the Webhook handler with signature verification (`stripe-webhook` endpoint).
3. Implement Idempotency to ensure the order is only marked as "Paid" once.

### Output Constraints:
- Resilient and Strategic tone.
- Conclude with Integration Sandbox Guide.
```

## 2. Slack Notification Bot (Python)

```text
Act as a Backend Engineer. Build a resilient Slack integration to post "System Alerts."

### Context:
- **Service**: Slack Web APIs.
- **Logic**: Use an exponential backoff strategy for handling Slack's 429 rate limits.

### Output Constraints:
- Provide an Adapter to map internal "Alert" objects to Slack "Block Kit" JSON.
```
