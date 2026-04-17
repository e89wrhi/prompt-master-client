# Template: High-Context Code Comments (JSDoc/Docstrings)

Use this template to add meaningful documentation directly into your source code. It is designed to act as a Senior Developer—stripping away "Obvious" comments that explain *how* the code works (e.g., `// Add one to i`) and replacing them with [WHY_COMMENTS] that explain [BUSINESS_LOGIC], handled [EDGE_CASES], and [PARAMETER_EXPECTATIONS].

## 📋 Prompt Template

```text
Act as a Senior Software Engineer. Add professional [JSDOC/DOCSTRINGS] to the following [CODE_BLOCK].

### Documentation Strategy:
1. **The "Why" Mission**: Summarize the [PURPOSE] of the function in 1-2 sentences. What business problem does it solve?
2. **Parameters & Returns**: Use [TYPE_ANNOTATIONS] to document every argument (including optional ones) and the expected return value.
3. **The "Gotcha" Section**: Identify and document any [NON-OBVIOUS_LOGIC] or side effects (e.g., "This function updates the global store").
4. **Example Usage**: Provide a 2-line [CODE_EXAMPLE] showing how to call this function correctly.
5. **Standard Formatting**: Use the specific [LANGUAGE_CONVENTION] (e.g., JSDoc for JS/TS, Python PEP 257 for Python, XML for C#).

### Output Constraints:
- Use a Professional, Concise, and Helpful tone.
- Do NOT comment on self-explanatory lines.
- Conclude with "Documentation Health Check"—a quick tip on how to keep these comments from going stale.
```

## 🧩 Variables to Fill Out

- `[CODE_BLOCK]` - The raw source code.
- `[JSDOC / DOCSTRINGS]` - The format for the comments.
- `[TYPE_ANNOTATIONS]` - e.g., `@param {string} email`.
- `[BUSINESS_LOGIC]` - The non-technical reason the code exists.

## 💡 Pro-Tips

- **Document the "Debt":** If you are using a [HACK_OR_WORKAROUND], document it with `// TODO:` or `// FIXME:` and explain why the proper fix isn't implemented yet.
- **Avoid Content duplication:** If the types are already in [TYPESCRIPT], don't repeat them in the comments unless adding description. Focus on [CONSTRAINTS] (e.g., "Must be a positive integer").
- **Visual Clarity:** For complex logic (e.g., a regex or a math formula), ask for a: "[STEP-BY-STEP_BREAKDOWN] inside the comment block."
---
