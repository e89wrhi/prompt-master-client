# Template: High-Retention Flashcard Generation

Use this template to generate digital flashcards optimized for "Active Recall" and software like Anki or Quizlet. It is designed to follow the "Minimum Information Principle"—ensuring each card is atomic, clear, and provides a "High-Contrast" learning signal to your brain.

## 📋 Prompt Template

```text
Act as a Learning Scientist and Memory Expert. Generate [AMOUNT] of flashcards based on the following [STUDY_MATERIAL].

### Material Scope:
[INSERT_TEXT_OR_NOTES]

### Flashcard Anatomy:
1. **Front (Question/Prompt)**: Craft a [SPECIFIC_QUESTION] or "Fill-in-the-blank" (Cloze deletion) that is impossible to answer without knowing the concept.
2. **Back (Answer)**: Provide the most [CONCISE_FACT] possible (3-7 words). Avoid long paragraphs.
3. **The "Why" Context**: If the answer is complex, add a 1-sentence "Note" on the back to reinforce the logic.
4. **Visual Cues**: Suggest a simple [MNEMONIC_OR_IMAGE_IDEA] (e.g., "Think of a battery for X").

### Technical Constraints:
- Format the output as a [CSV_OR_MARKDOWN_TABLE] for easy import into Anki.
- Ensure every card is "Atomic" (one concept per card).
- Use a Precise and Clinical tone.
```

## 🧩 Variables to Fill Out

- `[AMOUNT]` - e.g., 20 cards.
- `[STUDY_MATERIAL]` - The source text.
- `[SPECIFIC_QUESTION]` - e.g., "What is the function of X?", "Translate the word Y."
- `[CSV / MARKDOWN]` - The import format.

## 💡 Pro-Tips

- **Minimum Information Principle:** If a card has more than 10 words on the back, you will remember the *sentence structure* rather than the *fact*. Ask the AI to "Keep backs under 10 words."
- **Use Cloze Deletions:** Instead of "What is the capital of France?", use "The capital of France is {{Paris}}." Research shows this leads to faster recall during long study sessions.
- **Mix the Direction:** For language learning, ask for cards in both directions ([FRONT_TO_BACK] and [BACK_TO_FRONT]) to ensure deep neuro-connectivity.
---
