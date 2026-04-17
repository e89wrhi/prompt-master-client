---
id: midjourney_prompts
topicId: creative
subTopicId: art
title: Advanced Midjourney (v6+) Prompting
---
# Template: Advanced Midjourney (v6+) Prompting

Use this template to master the distinct syntax and artistic logic of Midjourney v6. It is designed to navigate the [IMPORTANCE_OF_ORDER] (the first words carry the most weight), utilizing [ENVIRONMENTAL_STYLING], specific [CAMERA_SPECS], and [MJ_PARAMETERS] to create award-winning digital art and photography.

## 📋 Prompt Template

```text
[SUBJECT_DESCRIPTION], [ENVIRONMENTAL_SETTING], [LIGHTING_DETAILS], [COLOR_PALETTE], [ARTISTIC_STYLE_OR_ARTIST_REFERENCE], [CAMERA_OR_TECHNICAL_SPEC] --v 6.0 [OTHER_PARAMETERS]

### Prompt Component Breakdown:
1. **The Core Subject**: Describe [SUBJECT] in the first 1-5 words.
2. **Environmental Styling**: Describe the [ATMOSPHERE] (e.g., "Misty rainy street," "Bioluminescent dark cave").
3. **Lighting & Mood**: Use [SPECIFIC_LIGHTING] (e.g., "Volumetric rim lighting," "Soft morning golden hour").
4. **Artistic Intent**: Reference a [MEDIA_TYPE_OR_DIRECTOR] (e.g., "National Geographic photography," "Cinematography by Roger Deakins," "Concept art in the style of Moebius").
5. **Midjourney Parameters**:
   - `--ar [ASPECT_RATIO]` (e.g., `--ar 16:9`, `--ar 2:3`).
   - `--stylize [VALUE]` (0-1000: High values = more artistic freedom).
   - `--chaos [VALUE]` (0-100: Higher values = more variation between initial 4 images).
   - `--no [EXCLUSIONS]` (e.g., `--no text, blurry, red`).

### Output Constraints:
- Use a Concise, Visual, and Term-Heavy tone.
- Do NOT use filler words like "a photo of" (MJ v6 prefers direct descriptors).
- Present the final prompt in a copy-pasteable code block.
```

## 🧩 Variables to Fill Out

- `[SUBJECT]` - The main focus.
- `[MJ_PARAMETERS]` - The technical engine.
- `--stylize 250` - (Balanced)
- `--stylize 700` - (Highly Artistic)

## 💡 Pro-Tips

- **Token Order Matters:** In Midjourney, the [FIRST_WORDS] determine the outcome. Put "[A_CYBERNETIC_OWL]" first if the owl is the main focus, not "[A_DARK_FOREST_WITH_A_CYBERNETIC_OWL]."
- **The "--weird" Parameter:** Use `--weird 250` for truly unique, non-cliché interpretations. It forces the AI to move away from the most common training data.
- **Mix the Media:** Ask for "[OIL_PAINTING_ON_TOP_OF_POLAROID_TEXTURE]" to create stunning multi-media aesthetics that other models struggle with.
---
