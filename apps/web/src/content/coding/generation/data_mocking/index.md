# Template: Realistic High-Fidelity Data Mocking

Use this template to generate large, varied, and semantically correct datasets for testing or UI prototyping. It is designed to act as a Data Engineer and QA Specialist—moving beyond [LOREM_IPSUM] by generating [REALISTIC_ENTITIES] (e.g., Names, UUIDs, ISO Dates, Realistic Pricing), handling [EDGE_CASES] (empty strings, null values, varied distributions), and exporting in standard [DATA_FORMATS].

## 📋 Prompt Template

```text
Act as a Senior Data Engineer and QA Specialist. Generate a [DATA_QUANTITY] dataset of [ENTITY_NAME] for testing purposes.

### Dataset Context:
- **Major Fields**: [e.g., UserID (UUID), Full Name, Role (Admin/Editor), LastLogin (ISO String), KarmaPoints (Integer 0-1000)].
- **Distribution Logic**: [e.g., 80% of users should be 'Editors', 20% 'Admins'].
- **Regional Profile**: [e.g., Names should be a diverse global mix, Prices should be in USD].

### Data Requirements:
1. **Semantic Correctness**: Ensure data follows [EXPECTED_FORMATS] (e.g., emails must be valid, dates must be in the past).
2. **Edge Case Injection**: Ensure [PERCENTAGE]% of records contain [NULLS_OR_EMPTY_STRINGS] to test UI resiliency.
3. **Relational Integrity**: If generating multiple sets (e.g., Users and Orders), ensure [FOREIGN_KEYS] match across the datasets.
4. **Varied Lengths**: Ensure text fields (like 'Bio' or 'Comment') have [RANDOM_LENGTHS] to test layout overflows.
5. **Output Format**: Provide the data in [JSON/CSV/SQL/TS_OBJECT] format.

### Output Constraints:
- Use a Precise, Varied, and Structural tone.
- Conclude with "The Resiliency Check"—3 things a developer should look for in this data to break their frontend.
- Provide the data in a single code block.
```

## 🧩 Variables to Fill Out

- `[ENTITY_NAME]` - Users, Products, Transactions, etc.
- `[DATA_QUANTITY]` - e.g., 50 records.
- `[DATA_FORMATS]` - JSON, CSV, SQL insert statements.
- `[DISTRIBUTION_LOGIC]` - Making the data look "Natural."

## 💡 Pro-Tips

- **The "Layout Killer" Check:** Don't just generate short names. Ask for: "A mix of [VERY_LONG_STRINGS] and [SPECIAL_CHARACTERS] to test if the UI text wraps correctly."
- **Coordinate-based Data:** If your app uses maps, ask for: "GPS Coordinates centered around [SPECIFIC_LOCATION] with realistic jitter."
- **Incremental IDs:** If your DB uses sequences, ask for: "Sorted [INCREMENTAL_ID_VALES]" starting from a specific number.
---
