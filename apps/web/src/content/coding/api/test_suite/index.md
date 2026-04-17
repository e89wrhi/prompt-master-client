# Template: Comprehensive API Test Suite

Use this template to ensure the reliability and security of your API endpoints. It is designed to act as a Quality Assurance Engineer and Lead Developer—implementing [UNIT_TESTS] for business logic, [INTEGRATION_TESTS] for database and external service flows, and designing a [MOCKING_STRATEGY] that simulates real-world failure states to prevent production surprises.

## 📋 Prompt Template

```text
Act as a Senior QA Engineer and Lead Developer. Help me design a Test Suite for the following [API_ENDPOINT/SERVICE].

### Testing Context:
- **Major Functionality**: [e.g., User registration, processing a payment, generating a PDF report].
- **Tech Stack**: [e.g., Jest with Supertest, Pytest with FactoryBoy, Vitest].
- **Infrastructure**: [e.g., PostgreSQL DB, Redis Cache, Stripe External API].

### Test Strategy:
1. **The "Happy Path" (Success)**: Outline the 3 most important [SUCCESS_SCENARIOS] to verify.
2. **The "Edge Case" Audit**: Identify 3 [UNCOMMON_INPUTS] that could break the logic (e.g., "Empty strings," "Overlapping date ranges," "Negative amounts").
3. **The "Security & Permission" Check**: Design tests to ensure [UNAUTHORIZED_USERS] cannot access this resource.
4. **The Mocking Blueprint**: Provide a strategy for [MOCKING_EXTERNAL_DEPENDENCIES] (e.g., "Mocking the Stripe API call," "Faking the S3 bucket upload").
5. **CI/CD Integration**: Suggest a [TEST_REPORT_FORMAT] that clearly identifies where failures occurred during the build process.

### Output Constraints:
- Use a Methodical, Robust, and Coverage-Focused tone.
- Conclude with "The Coverage Map"—a table showing each test type and what it protects.
- Provide all code snippets in [TEST_RUNNER] compatible syntax.
```

## 🧩 Variables to Fill Out

- `[API_ENDPOINT / SERVICE]` - The target of the test.
- `[UNIT_TESTS]` - Testing a single function.
- `[INTEGRATION_TESTS]` - Testing how parts work together.
- `[MOCKING_STRATEGY]` - Isolating the code from the internet.

## 💡 Pro-Tips

- **Test the "Negative" First:** A good test suite tries to [BREAK_THE_CODE]. Ask the AI to: "Identify 5 ways this endpoint could [SILENTLY_FAIL] and write tests to catch them."
- **Data Factories for Clean DBs:** Don't rely on existing DB data. Ask for: "A [FACTORY_SETUP] that generates random, valid test data for every test run."
- **Mocking the Time:** If your code depends on `Date.now()`, it's hard to test. Ask the AI to: "Provide a strategy for [MOCKING_THE_SYSTEM_TIME] to test expiration logic."
---
