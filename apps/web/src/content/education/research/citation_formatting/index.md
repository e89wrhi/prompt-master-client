# Template: Professional Citation & Bibliography Formatting

Use this template to generate precise, error-free citations and bibliographies. It is designed to strictly adhere to style-specific rules (APA, MLA, Chicago, BibTeX) while handling complex sources like YouTube videos, social media threads, and data repositories that generic tools often misformat.

## 📋 Prompt Template

```text
Act as an Academic Librarian and Citation Specialist. Format the following [SOURCE_MATERIAL] into [CITATION_STYLE].

### Source Details:
[INSERT_LINK_OR_RAW_METADATA_OR_PDF_TEXT]

### Formatting Requirements:
1. **Full Bibliography Entry**: Provide the complete reference for a "Works Cited" or "References" page.
2. **In-Text Citation**: Provide the correct parenthetical or footnote format (e.g., [AUTHOR_YEAR] or [SUPERSCRIPT]).
3. **Multi-Source Handling**: If the source has [MULTIPLE_AUTHORS], apply the specific rules for "et al." or listing all names.
4. **Style Consistency**: Ensure all [ITALICIZATION], [PUNCTUATION], and [CASING] rules for [CITATION_STYLE] are met exactly.
5. **DOI/URL Integrity**: Include a live link or DOI if available, formatted according to style guidelines.

### Output Constraints:
- Provide the final citation in a copy-pasteable code block.
- If any metadata is missing (e.g., Publication Date), flag it as "[MISSING_DATA]" and suggest where to find it.
- Use a Precise, Standardized, and Helpful tone.
```

## 🧩 Variables to Fill Out

- `[SOURCE_MATERIAL]` - The actual content or metadata.
- `[CITATION_STYLE]` - e.g., APA 7th Ed, MLA 9th Ed, Chicago (Author-Date), Harvard, BibTeX.
- `[MULTIPLE_AUTHORS]` - Rules differ greatly between styles for 3+ authors.
- `[MISSING_DATA]` - Helping the user complete the reference.

## 💡 Pro-Tips

- **Capitalization varies:** In APA, only the first word of a title is capitalized (Sentence Case). In MLA, every major word is capitalized (Title Case). Ask the AI to "Check the title casing against [STYLE] manual rules."
- **The BibTeX Advantage:** If you are using LaTeX, always ask for [BIBTEX_FORMAT]. It is the most robust way to manage large bibliographies without manual formatting errors.
- **YouTube/Social Media:** Online sources are tricky. Tell the AI: "Include the timestamp for YouTube videos" or "The handle and date for Tweets" to ensure maximum academic rigor.
---
