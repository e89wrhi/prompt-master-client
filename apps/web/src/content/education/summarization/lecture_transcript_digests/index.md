---
id: lecture_transcript_digests
topicId: education
subTopicId: summarization
title: Structured Lecture Transcript Digests
---
# Template: Structured Lecture Transcript Digests

Use this template to convert messy, verbatim lecture transcripts into clean, academic study notes. It is designed to strip away filler words (ums, ahs, tangents), organize the content into logical [HEADINGS], bold key technical definitions, and flag areas where the professor hinted at [EXAM_MATERIAL].

## 📋 Prompt Template

```text
Act as a Graduate Teaching Assistant and Expert Note-Taker. Digest the following raw [LECTURE_TRANSCRIPT].

### Digest Framework:
1. **The Executive Lecture Summary**: A 3-sentence overview of the main topic covered in today's class.
2. **The "Cleaned" Outline**: Organize the content into 3-5 logical chapters with [TIME_STAMPS] (if available).
3. **The "Glossary of the Day"**: List and bold all [TECHNICAL_TERMS] and [FORMULAS] mentioned. Provide the precise definition used by the professor.
4. **The "Hint" List**: Identify any moments where the professor said "This is important," "You'll see this again," or "Make sure you know this." Flag these as "[POTENTIAL_EXAM_QUESTION]".
5. **The Gap Analysis**: List 3 [QUESTIONS_FOR_CLARIFICATION] the user should ask in the next session to deeply understand the topic.

### Output Constraints:
- Use an Academic, Organized, and Student-Focused tone.
- Conclude with "The 2-Minute Summary"—a conversational version of the lecture to read before the next class.
- Format with significant white space and bolded headers for quick scanning.
```

## 🧩 Variables to Fill Out

- `[LECTURE_TRANSCRIPT]` - The verbatim text (from Zoom, Otter.ai, Rev, etc.).
- `[TECHNICAL_TERMS]` - The language of the subject.
- `[TIME_STAMPS]` - Aligning the notes with the video/audio.
- `[EXAM_MATERIAL]` - The most valuable part for a student.

## 💡 Pro-Tips

- **Tangent Removal:** Professors often tell stories about their cats or their weekend. Tell the AI to "Ignore any personal anecdotes or tangents that do not contribute to the [LEARNING_OBJECTIVE]."
- **Visual Description:** If the professor refers to a "Diagram on the board," ask the AI to "Describe what that diagram likely looked like based on the context."
- **Focus on the "Why":** A transcript is just a list of words. A digest shows the [LOGICAL_FLOW] (e.g., "The professor transitioned from X to Y because...").
---
