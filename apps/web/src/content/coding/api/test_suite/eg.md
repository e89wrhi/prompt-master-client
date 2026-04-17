# Examples: Comprehensive API Testing

## 1. Testing a Stripe Webhook (Node.js/Jest)

```text
Act as a Senior QA Engineer. Help me write an integration test for a Stripe Webhook.

### Context:
- **Function**: `POST /webhooks/stripe` handles `payment_intent.succeeded`.
- **Stack**: Jest, Supertest, Prisma.

### Requirements:
1. Provide a "Happy Path" test that sends a signed payload to the endpoint.
2. Outline how to mock the `stripe.webhooks.constructEvent` function.
3. Add an Edge Case test for an invalid signature.

### Output Constraints:
- Robust and Coverage-Focused tone.
- Coverage Map included.
```

## 2. Business Logic Unit Test (Python)

```text
Act as a Lead Developer. Write unit tests for a "Tax Calculation" service.

### Context:
- **Logic**: Calculates VAT based on the user's country.
- **Goal**: 100% path coverage for different EU regions.

### Output Constraints:
- Methodical tone.
- Include a "Factory" setup for Mock Users.
```
