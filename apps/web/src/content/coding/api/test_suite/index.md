# Template: Comprehensive Test Suite

Use this template to generate robust unit or integration tests for your existing backend code. This overrides the AI's tendency to write fragile "happy-path only" test cases.

## 📋 Prompt Template

```text
Act as an expert QA Automation Engineer. Write a comprehensive suite of [TEST_TYPE] tests for the following backend code.

### Test Requirements:
1. **Framework**: Use [TEST_FRAMEWORK] and use [ASSERTION_LIBRARY/MOCKING_LIBRARY] for assertions and mocks.
2. **Structure**: 
   - Use clear `describe` and `it` blocks (or equivalent). 
   - Adopt the "Arrange, Act, Assert" (AAA) pattern.
3. **Scenarios to Cover**:
   - ✅ The Happy Path (optimal inputs).
   - ❌ Expected Edge Cases (missing inputs, maximum limits hit).
   - 🚨 Error Handling (database timeout, invalid validation).
4. **Mocking Rules**: 
   - Completely mock out the database layer, external API calls, and the system clock where relevant.
   - Do NOT mock the internal core business logic.

### The Code to Test:
```[LANGUAGE]
[INSERT_YOUR_EXISTING_CODE_HERE]
```

### Constraints:
- Focus on asserting actual side-effects and returned data, not just testing whether a mock was called.
```

## 🧩 Variables to Fill Out

- `[TEST_TYPE]` - Choose `Unit`, `Integration`, or `E2E`.
- `[TEST_FRAMEWORK]` - e.g., Jest, PyTest, JUnit.
- `[ASSERTION_LIBRARY/MOCKING_LIBRARY]` - e.g., Sinon, unittest.mock, Mockito.
- `[INSERT_YOUR_EXISTING_CODE_HERE]` - Paste the controller or service method you just wrote.

## 💡 Pro-Tips
- **Specify what to mock:** The AI will often over-mock or under-mock. Explicitly stating "mock the database, test the logic" forces it to write useful assertions.
- **Force the AAA pattern:** The `Arrange, Act, Assert` structural requirement makes AI-generated tests far easier for humans to read and maintain.
