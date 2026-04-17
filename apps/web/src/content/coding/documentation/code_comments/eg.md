# Examples: High-Context Code Comments

## 1. Complex TypeScript Service (Auth)

```text
Act as a Senior Engineer. Add JSDoc to this TypeScript auth service.

### Code:
async function validateToken(token: string, secret: string): Promise<User | null> {
  if (!token.startsWith('ey')) return null;
  // ... rest of the logic
}

### Strategy:
- Purpose: Verifies internal JWTs.
- Note: Mention that the 'ey' check is a fast-path optimization.
- Convention: JSDoc.

### Output Constraints:
- Concise tone.
- Include Example Usage.
```

## 2. Python Data Processor (Docstrings)

```text
Act as a Python Lead. Add PEP 257 docstrings to a data cleaning function.

### Requirement:
- Document the `raw_data` Panda Dataframe input.
- Explain that this function removes "NaN" values and resets the index.

### Output Constraints:
- Professional tone.
```
