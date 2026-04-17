# Template: AI Music Architecture (Suno & Udio)

Use this template to generate high-quality AI music with precise control over structure and style. It is designed to act as an AI Music Architect—utilizing [TAG-BASED_PROMPTING] for sections (Intro, Verse, Chorus), describing specific [INSTRUMENTAL_TEXTURES], and specifying the [ENERGY_CURVE] of the track to ensure the AI creates a professional-sounding composition.

## 📋 Prompt Template

```text
Act as an AI Music Architect. Generate a song description and prompt for [AI_PLATFORM] (Suno/Udio).

### Style Prompt (The Logic):
[GENRE], [SUB-GENRE], [MOOD], [BPM], [INSTRUMENTATION], [PRODUCTION_STYLE]

### Structural Arrangement:
1. **[Intro]**: Describe the [OPENING_INSTRUMENTS] (e.g., "Atmospheric ambient pads, distant acoustic guitar").
2. **[Verse 1]**: Describe the [VOCAL_STYLE] (e.g., "Breathys female vocals, intimate and close to the mic").
3. **[Chorus]**: Describe the [ENERGY_SPIKE] (e.g., "Full band, heavy distorted bass, anthemic drums").
4. **[Bridge]**: Describe the [BREAKDOWN] (e.g., "Strip back to just a piano and a soft cello").
5. **[Outro]**: Describe the [FADE-OUT] (e.g., "Echoing vocals, slow decay, ends on a single bass note").

### Instrumentation Detail:
- **Lead**: [e.g., 80s analog synth, fuzzy electric guitar].
- **Drums**: [e.g., Crispy 808s, garage rock kit with room reverb].
- **Bass**: [e.g., Deep sub-bass, slap bass with chorus].

### Output Constraints:
- Use a Technical, Descriptive, and High-Energy tone.
- Format the prompt in a way that can be [COPY-PASTED_DIRECTLY] into the "Style" and "Lyrics" boxes.
```

## 🧩 Variables to Fill Out

- `[AI_PLATFORM]` - Suno or Udio.
- `[TAG-BASED_PROMPTING]` - e.g., `[Chorus]`, `[Drop]`, `[Inst]`.
- `[INSTRUMENTAL_TEXTURES]` - e.g., Lo-fi, High-fidelity, Distorted.
- `[ENERGY_CURVE]` - How the track builds over time.

## 💡 Pro-Tips

- **The "Meta-Prompting" Secret:** Use tags like `[Inst]` to force a solo or `[Silent]` to create a dramatic pause.
- **Specify the Mix:** Don't just say "Bass." Say "Sub-bass with heavy side-chain compression to the kick." This tells the AI how to [GLUE] the track together.
- **Vocal Descriptors are Key:** Instead of "Singer," use "Soulful male tenor with a slight rasp" or "Ethereal female whisper vocals."
---
