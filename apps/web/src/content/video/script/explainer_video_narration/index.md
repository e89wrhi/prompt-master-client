# Template: Explainer Video Narration

Use this template to distil highly complex products, enterprise software, or technical features into simple, approachable conversational narration scripts.

## 📋 Prompt Template

```text
Act as a B2B SaaS Copywriter and Explainer Video Producer. Simplify the following technical concept [COMPLEX_TOPIC] into a conversational explainer script for a [TARGET_AUDIENCE].

### Script Requirements:
1. **The Problem**: Open by agitating the pain point: [PAIN_POINT].
2. **The Analogy**: Break down the complexity using a simple, real-world analogy related to [ANALOGY_THEME].
3. **The Pitch**: Transition into introducing our solution: [PRODUCT_NAME].
4. **The Tone**: Ensure the language is [TONE_REQUIREMENT]. Strip out technical jargon like [JARGON_TO_AVOID].
5. **Call to Action**: End with a direct call to action to [CTA_GOAL].

### Output Constraints:
Write paragraphs measuring 2-3 sentences max. Aim for an exact reading time of [TARGET_DURATION] (approx [WORD_COUNT] words). Format entirely for a voiceover talent to read seamlessly.
```

## 🧩 Variables to Fill Out

- `[COMPLEX_TOPIC]` - What you are explaining (e.g., Zero-Trust Network Architecture, Kubernetes orchestration).
- `[TARGET_AUDIENCE]` - Who is watching (e.g., non-technical managers, 5th graders, potential investors).
- `[PAIN_POINT]` - The problem being solved (e.g., lost passwords, chaotic data silos).
- `[ANALOGY_THEME]` - Relatable parallel (e.g., a hotel keycard system, building with Lego).
- `[PRODUCT_NAME]` - Your tool or feature.
- `[TONE_REQUIREMENT]` - Desired voice (e.g., friendly and upbeat, professional and reassuring).
- `[JARGON_TO_AVOID]` - Specific banned words (e.g., Synergize, Blockchain, Endpoints).
- `[CTA_GOAL]` - End goal (e.g., visit our website, sign up for a demo).
- `[TARGET_DURATION] / [WORD_COUNT]` - Length (e.g., 60 seconds / ~150 words).

## 💡 Pro-Tips
- **Analogies:** A strong analogy completely transforms explainer scripts. Forcing the AI to use an analogy limits the chance of it drifting back into boring technical definitions.
- **Reading Speed:** Standard voiceover speed is about 130-150 words per minute. Enforce word limits to strictly control timeline lengths.
