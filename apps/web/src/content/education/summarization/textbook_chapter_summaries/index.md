# Template: Comprehensive Textbook Chapter Summaries

Use this template to bridge the gap between "Reading" and "Reviewing" a complex textbook chapter. It is designed to extract the [CHAPTER_OBJECTIVES], define the [BOLDFACE_TERMS], summarize the [CORE_CASE_STUDIES/EXPERIMENTS], and provide a "Mental Map" of how the chapter's concepts connect to the broader course.

## 📋 Prompt Template

```text
Act as a Senior Textbook Editor and Instructional Designer. Summarize [CHAPTER_NUMBER] entitled "[CHAPTER_TITLE]" from the [SUBJECT] textbook "[BOOK_TITLE]."

### Chapter Framework:
1. **The "Big Idea"**: A 2-sentence summary of why this chapter is included in the book.
2. **The "Learning Objective" Audit**: List 3-5 things the student should be able to do after reading this, based on the [INTRO_BOXES].
3. **The "Skeleton" (Sub-Heading Outline)**: Organize the summary by the [BOOK'S_ACTUAL_SUBHEADINGS]. Briefly summarize each section in 3 bullet points.
4. **The "Boldface" Dictionary**: List every [BOLD_TERM] found in the chapter and provide the definition in the context of the book's glossary.
5. **The Case Study / Data extraction**: Summarize any [CHARTS_OR_STORIES] used as evidence for the main theories.

### Output Constraints:
- Present the summary in a "Knowledge Map" structure.
- Use a Formal, Educational, and Objective tone.
- Conclude with "3 Critical Thinking Questions"—the kind that usually appear at the end of the chapter for review.
```

## 🧩 Variables to Fill Out

- `[BOOK_TITLE]` - The name and edition of the textbook.
- `[CHAPTER_TITLE]` - The focus of the summary.
- `[BOLD_TERM]` - The essential vocabulary.
- `[CHARTS_OR_STORIES]` - The practical evidence provided.

## 💡 Pro-Tips

- **Match the Author's Structure:** A textbook is designed with a specific [PEDAGOGY]. Don't rearrange the ideas; follow the [SUBHEADINGS] to ensure you don't miss any "Learning Objectives."
- **Focus on the "Sidebars":** Often, the most interesting (and exam-friendly) content is in the "Did You Know?" or "Case Study" sideboxes. Ask the AI to "Specifically highlight the content in the sidebars."
- **The "Review Question" Hack:** Most textbooks list [REVIEW_QUESTIONS] at the end. Ask the AI to "Answer the 3 hardest review questions at the end of the chapter using only the provided summary."
---
