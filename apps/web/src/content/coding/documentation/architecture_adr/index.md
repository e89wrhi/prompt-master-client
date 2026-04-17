# Template: Strategic Architecture Decision Record (ADR)

Use this template to document critical architectural choices made during development. It is designed to act as a System Architect—capturing the [CONTEXT] of the problem, the [ALTERNATIVES] considered, the [DECISION] taken, and the [CONSEQUENCES] (both positive and negative), ensuring the "Why" behind the code is preserved for future engineers.

## 📋 Prompt Template

```text
Act as a Senior System Architect. Create an Architecture Decision Record (ADR) for [DECISION_SUMMARY].

### ADR Metadata:
- **Title**: [e.g., Use of PostgreSQL for Core Transactions, Choosing Vite over Webpack].
- **Status**: [Proposed / Accepted / Superseded].
- **Date**: [YYYY-MM-DD].

### Decision Context:
1. **Context & Problem Statement**: Describe the [TECHNICAL_CHALLENGE] or requirement that necessitated this decision.
2. **Considered Options**: Identify 2-3 [ALTERNATIVES] and their pros/cons (e.g., "Option A: MongoDB - Good for scale, bad for ACID transactions").
3. **Decision & Rationale**: State the [CHOSEN_SOLUTION] and explicitly explain WHY it was chosen over the alternatives.
4. **Consequences**:
   - **Positive**: [e.g., Improved data integrity, faster build times].
   - **Negative/Trade-offs**: [e.g., Increased setup complexity, higher hosting costs].

### Output Constraints:
- Use an Objective, Analytical, and Historical tone.
- Follow the standard [MADR/NYGARD] format.
- Conclude with "The Long-Term Impact"—how this decision will affect the system in 12-24 months.
```

## 🧩 Variables to Fill Out

- `[DECISION_SUMMARY]` - e.g., Choice of Database, Frontend Framework.
- `[MADR / NYGARD]` - Standard ADR formats.
- `[RATIONALE]` - The logic of the choice.
- `[CONSEQUENCES]` - No decision is perfect; document the cost.

## 💡 Pro-Tips

- **Be Honest about Trade-offs:** An ADR that only lists "Pros" is a sales pitch, not a record. Ask the AI to: "Identify the 2 biggest [TECHNICAL_RISKS] introduced by this decision."
- **Focus on the "Why Not":** Explaining why you *didn't* choose a popular tool is often more valuable. Ask for a: "Section on [REJECTED_ALTERNATIVES]."
- **Link to Implementation:** If the decision involves a specific pattern (e.g., Repository Pattern), ask for: "A 1-sentence note on how this impacts the [CODE_DIRECTORY_STRUCTURE]."
---
