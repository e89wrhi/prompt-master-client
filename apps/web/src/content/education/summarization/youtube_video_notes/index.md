# Template: Visual-Aware YouTube Video Notes

Use this template to convert educational YouTube videos into high-quality study guides. It is designed to go beyond the [TRANSCRIPT] by accounting for [VISUAL_ELEMENTS] (slides, charts, code demos), organizing the content by [TIME-STAMPED_SEGMENTS], and providing a "Should I Watch?" verdict based on the depth of the information provided.

## 📋 Prompt Template

```text
Act as a Content Curator and Academic Note-Taker. Generate a master-set of notes for the following YouTube video: [VIDEO_URL_OR_TITLE].

### Note-Taking Framework:
1. **The "Pre-Flight" Verdict**: A 2-sentence statement on who should watch this video and the [DIFFICULTY_LEVEL] (e.g., "Beginner: Perfect for those new to React," "Expert: Heavy focus on system architecture").
2. **The Time-Stamped Deep Dive**: Breakdown the video into [CHAPTERS]. For each chapter, include:
   - **Main Point**: The core message.
   - **Visual/Slide Summary**: Describe any [DIAGRAMS,_CODE_SNIPPETS,_OR_CHALLENGES] shown on-screen.
   - **Key Quote**: One powerful sentence from the speaker.
3. **The "Toolbox"**: List all [SOFTWARE,_LIBRARIES,_OR_BOOKS] mentioned in the video.
4. **The "What's Missing" Audit**: Identify one part of the topic that was [GLOSSED_OVER] or could have used more detail.
5. **The Final Cheat-Sheet**: Provide a 5-bullet summary for someone who only has 30 seconds.

### Output Constraints:
- Use an Energetic, Informative, and Evaluative tone.
- Conclude with "3 Recommended Follow-up Topics"—related areas the user should explore next.
- Use Markdown for bolding and list structure.
```

## 🧩 Variables to Fill Out

- `[VIDEO_URL / TITLE]` - The link or name of the video.
- `[CHAPTERS]` - Based on the YouTube progress bar or transcript segments.
- `[DIAGRAMS / CODE]` - The "Visual" component of the education.
- `[GLOSSED_OVER]` - Identifying the weak points in the explanation.

## 💡 Pro-Tips

- **The "Transcript is Just half":** A YouTube video is a visual medium. Ask the AI to "Identify the moments where the speaker points to something on screen" and [DESCRIBE_IT].
- **Link Verification:** If the speaker says "The link is in the description," ask the AI to "Search for the most likely [RESOURCE_URL] mentioned (GitHub repo, documentation page, etc.)."
- **Rate the "Signal-to-Noise":** Some creators talk a lot without saying much. Ask the AI to "Filter out the [SPONSOR_READS] and 'Like/Subscribe' requests" to focus only on the education.
---
