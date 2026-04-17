# Template: YouTube A/V Script Format

Use this template to generate a classic two-column Audio/Visual script layout, mapping narration text side-by-side with required visual events and motion graphics. 

## 📋 Prompt Template

```text
Act as a Top 1% YouTube Strategist and Scriptwriter. Generate an A/V format script for a video about [VIDEO_TOPIC].

### Format Guidelines:
Generate a markdown table with two columns: **Visuals** (Left) and **Audio/VO** (Right).

### Script Structure:
1. **The Hook (0-15s)**: In the Audio column, immediately introduce [PRIME_CONFLICT]. In the Visual column, specify a fast-paced A-roll setup with [VISUAL_HOOK_ELEMENT].
2. **The Context (15-60s)**: Provide the background information using a conversational, storytelling cadence. Describe the exact on-screen [GRAPHIC_STYLE] graphics needed to support the VO.
3. **The Transition**: Use a pattern interrupt: [PATTERN_INTERRUPT_SOUND/VISUAL] before moving into the main content block.
4. **Pacing Rules**: Do not let any single Audio row exceed [MAX_VO_SENTENCES] sentences before forcing a new visual directive in the left column.

### Output Constraints:
Produce a comprehensive 5-minute script framework. Ensure the Audio sounds raw and conversational, tailored to a [CREATOR_PERSONA] persona.
```

## 🧩 Variables to Fill Out

- `[VIDEO_TOPIC]` - Subject of the video (e.g., Why 99% of Startups Fail, The truth about mechanical keyboards).
- `[PRIME_CONFLICT]` - Core tension (e.g., the hidden cost of free software, a massive scandal).
- `[VISUAL_HOOK_ELEMENT]` - Hook imagery (e.g., extreme close-up of sweating face, chaotic news clippings).
- `[GRAPHIC_STYLE]` - Visuals (e.g., paper cutout animations, slick 3D charts, meme references).
- `[PATTERN_INTERRUPT_SOUND/VISUAL]` - Reset moment (e.g., VHS tape glitch, sudden silence).
- `[MAX_VO_SENTENCES]` - Constraint for pace (e.g., 2 sentences).
- `[CREATOR_PERSONA]` - Speaking style (e.g., enthusiastic tech reviewer, dry witty essayist).

## 💡 Pro-Tips
- **Tables are King:** Formatting as a markdown table forces the AI to perfectly align the visual prompt with the exact line of VO being spoken. This saves hours of layout work.
- **Forced Pacing:** Limiting the Audio column to 1-2 sentences per row prevents the AI from generating lazy blocks of text with no visual direction.
