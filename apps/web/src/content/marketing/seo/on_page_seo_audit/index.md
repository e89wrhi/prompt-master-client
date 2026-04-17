---
id: on_page_seo_audit
topicId: marketing
subTopicId: seo
title: Technical On-Page SEO Audit
---
# Template: Technical On-Page SEO Audit

Use this template to identify the "Low-Hanging Fruit" optimizations on a specific page. It is designed to evaluate content-to-keyword relevance, technical metadata, internal linking, and image optimization to ensure your page is technically perfect for search engine crawlers.

## 📋 Prompt Template

```text
Act as a Technical SEO Specialist. Performance an On-Page SEO Audit for the following [URL/TITLE].

### Audit Scope:
[INSERT_PAGE_TEXT_OR_HTML_SOURCE]

### Audit Requirements:
1. **Keyword-to-Content Relevance**: Audit if the [PRIMARY_KEYWORD] is used in the first 100 words, last 100 words, and at least 3 [H2/H3] headers.
2. **Title & Meta Review**: Evaluate the current Title Tag and Meta Description. Suggest 2 high-CTR alternatives for each.
3. **Internal Link Audit**: Identify [GAPS_IN_LINKING]. Suggest 2 internal links *to* this page and 2 internal links *from* this page.
4. **Image & Alt-Text Optimization**: Identify if images are missing [DESCRIPTION_TAGS] or if their filenames are non-descriptive. Suggest 3 specific Alt-Text drafts.
5. **Readability & UX**: Score the page's readability (e.g., [FLESCH_READING_SCORE]). Identify "Wall of Text" issues and suggest where to simplify.

### Output Constraints:
- Present the findings in a categorized "Audit Scorecard" format.
- Use a Technical, Precise, and No-Fluff tone.
- Conclude with a "Priority 1-2-3" action list.
```

## 🧩 Variables to Fill Out

- `[URL/TITLE]` - The page being audited.
- `[PRIMARY_KEYWORD]` - The term this page *should* be ranking for.
- `[GAPS_IN_LINKING]` - Are important pages not being linked to?
- `[DESCRIPTION_TAGS]` - e.g., <img alt="...">
- `[FLESCH_READING_SCORE]` - e.g., 60-70 (Easy for 13-15 year olds).

## 💡 Pro-Tips

- **The "Wall of Text" Kills Ranking:** Google favors content that is easy to read. If a paragraph is longer than 3 sentences, ask the AI to "Suggest where to break this into a bulleted list."
- **Focus on the "Above the Fold":** The most important SEO signals are in the top 20% of the page. Tell the AI to "Concentrate the audit on the Hero and First H2 sections."
- **Internal Anchor Text:** Don't just link to "Click Here." Ask the AI to "Suggest keyword-rich anchor text for our internal links (e.g., 'Learn more about [TOPIC]')."
---
