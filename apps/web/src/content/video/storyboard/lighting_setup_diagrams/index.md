# Template: Lighting Setup Directives

Use this template to design precise lighting ratios and setups (Rembrandt, High-Key, Low-Key) for 3D renders, video sets, or visual generation tools.

## 📋 Prompt Template

```text
Act as a Master Gaffer and Cinematographer. Describe a [LIGHTING_STYLE] lighting setup for a [SUBJECT] in a [ENVIRONMENT].

### Lighting Plot:
1. **Key Light**: Set a [KEY_LIGHT_QUALITY] at [KEY_POSITION_ANGLE].
2. **Fill Light**: Use a [FILL_LIGHT_QUALITY] to establish a contrast ratio of [CONTRAST_RATIO].
3. **Rim/Backlight**: Position a [RIM_LIGHT_COLOR] light over the [SUBJECT_PLACEMENT] to separate them from the background.
4. **Practical/Background**: Include [PRACTICAL_LIGHTS] in the background to establish depth.

### Deliverable:
Generate a textual lighting diagram and a brief explanation of how this setup emphasizes the [DESIRED_MOOD] mood.
```

## 🧩 Variables to Fill Out
- `[LIGHTING_STYLE]` - Cinematic style (e.g., Rembrandt, Chiaroscuro contouring, High-Key Commercial).
- `[SUBJECT]` / `[ENVIRONMENT]` - Focal point and location.
- `[KEY_LIGHT_QUALITY]` - Hard/Soft, wattage/source (e.g., Soft HMI through diffusion, harsh naked bulb).
- `[KEY_POSITION_ANGLE]` - Angle (e.g., 45 degrees high, dead-on ring light).
- `[FILL_LIGHT_QUALITY]` - Bounce board, negative fill, softbox.
- `[CONTRAST_RATIO]` - Dark/light variance (e.g., 8:1 moody, 2:1 flat beauty).
- `[RIM_LIGHT_COLOR]` - Separation light (e.g., cool blue backlight).
- `[SUBJECT_PLACEMENT]` - Where the light hits (e.g., subject's left shoulder and hair).
- `[PRACTICAL_LIGHTS]` - In-scene visible lights (e.g., warm desk lamp, streetlamp).
- `[DESIRED_MOOD]` - The emotional goal.

## 💡 Pro-Tips
- **Negative Fill:** Using terms like "Negative Fill on the shadow side" is a cheat code for getting cinematic depth from AI generators, preventing flat lighting.
