# Template: Strategic Keyword Clustering & Hub-Spoke Modeling

Use this template to build "Topical Authority" by grouping related keywords into semantic clusters. It is designed to create a "Hub and Spoke" (Pillar/Cluster) model where one primary page ranks for a broad term, supported by multiple specific "Spoke" articles that answer niche questions and build internal link equity.

## 📋 Prompt Template

```text
Act as a Senior SEO Architect. Design a Keyword Cluster Strategy around the [PARENT_TOPIC] for [BRAND/COMPANY].

### Strategy Context:
[DESCRIBE_CORE_OFFERING_AND_CURRENT_KNOWLEDGE_GAP]

### Clustering Requirements:
1. **The Pillar Keyword**: Identify the high-volume, broad [PRIMARY_TERM] that will serve as the "Hub" page.
2. **The Semantic "Spoke" Clusters**: Provide a list of 10-15 related [SECONDARY_KEYWORDS] grouped into 3-4 sub-themes (e.g., [THEME_A], [THEME_B]).
3. **The "People Also Ask" (PAA) Integration**: List 5 specific questions users are asking related to [PARENT_TOPIC] that we should answer in the spoke content.
4. **Internal Linking Architecture**: Describe exactly how the "Spokes" should link to the "Hub" and how the "Hub" should link out to the "Spokes" to maximize crawlability.
5. **Content Format Mapping**: For each cluster, suggest the best content type (e.g., [LISTICLE], [ULTIMATE_GUIDE], [CASE_STUDY], [PRODUCT_COMPARISON]).

### Output Constraints:
- Present the keyword groupings in a Markdown Table.
- Use a Technical, Map-Based, and Strategic tone.
- Ensure all keywords are categorized by [SEARCH_INTENT] (Transactional, Informational, Commercial).
```

## 🧩 Variables to Fill Out

- `[PARENT_TOPIC]` - e.g., Project Management, Sustainable Gardening, Gluten-Free Baking.
- `[PRIMARY_TERM]` - The main "short-tail" keyword.
- `[THEME_A/B]` - Specific angles (e.g., "For Beginners," "Tools," "Cost").
- `[SEARCH_INTENT]` - The goal of the searcher.

## 💡 Pro-Tips

- **Avoid Cannibalization:** Ensure that no two "Spoke" pages are targeting the exact same keyword. If they are too similar, tell the AI to "Consolidate these into a single long-form guide."
- **Focus on the "Question" Long-Tails:** Long-tail keywords (e.g., "how to bake gluten-free bread without yeast") are easier to rank for and build trust. Ask the AI to "Prioritize low-competition, high-intent long-tails."
- **The Pillar Gap:** A pillar page shouldn't just be an index. It must provide enough value on its own to rank for the broad term. Ask the AI to "Draft the 3 most important sections for the Pillar page."
---
