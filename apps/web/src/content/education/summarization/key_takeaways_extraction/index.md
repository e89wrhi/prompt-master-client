# Template: High-Impact Key Takeaways Extraction

Use this template to distil long-form content (podcasts, long articles, meeting notes) into a concentrated list of valuable insights. It is designed to strip away the "fluff" and identify the core arguments, actionable advice, and unique perspectives that actually matter, providing a "So What?" for every entry.

## 📋 Prompt Template

```text
Act as an Intellectual Editorial Director and Information Curator. Extract the key takeaways from the following [SOURCE_MATERIAL].

### Extraction Framework:
1. **The "North Star" Summary**: Provide a 1-sentence summary of the core thesis of the content.
2. **The High-Impact Takeaways**: Provide a bulleted list of the 5-7 most important [INSIGHTS]. For each takeaway, follow this format:
   - **The Insight**: A bold 1-sentence statement (e.g., "**The 80/20 rule applies to learning code.**").
   - **The Evidence**: A brief explanation or quote from the source that supports it.
   - **The Action**: One practical thing a reader can do tomorrow because of this insight.
3. **The "Contrarian" View**: Highlight [ONE_SURPRISING_OR_DEBATED_POINT] that goes against common wisdom.
4. **Key Terminology**: Define 3 specific [TERMS_OR_FRAMEWORKS] mentioned in the text.

### Output Constraints:
- Use a Sharp, Direct, and Insightful tone.
- Avoid generic bullets like "The speaker discussed X." Use active voice: "The speaker [PROVES] that X is [Y]."
- Conclude with a "Final Verdict"—Rate the [UTILITY_SCORE] of this material from 1-10.
```

## 🧩 Variables to Fill Out

- `[SOURCE_MATERIAL]` - The text, transcript, or link.
- `[INSIGHTS]` - The "Aha!" moments.
- `[PROVES / ARGUES]` - Strong verbs for extraction.
- `[UTILITY_SCORE]` - How useful is this to the user's specific goals?

## 💡 Pro-Tips

- **Priorize the "Uncommon":** If a speaker says "Hard work is good," ignore it. If they say "Hard work in the morning is 5x more effective than at night," that's a [TAKEAWAY].
- **The "So What?" Filter:** For every bullet, ask the AI to "Check if this changes my behavior." If it doesn't, it's a [FACT], not a [TAKEAWAY].
- **Group by Theme:** If the list is longer than 5 items, tell the AI to "Categorize takeaways by theme (e.g., Strategy, Health, Finance)."
---
