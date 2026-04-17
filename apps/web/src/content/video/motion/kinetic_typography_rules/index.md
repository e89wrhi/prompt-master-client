# Template: Kinetic Typography & Text Animation

Use this template to generate precise guidelines for animating on-screen text, subtitles, or title sequences. This is ideal when instructing an AI, an intern, or a scripting tool on how to present text dynamically.

## 📋 Prompt Template

```text
Act as a Lead Motion Grapher. Outline the keyframe animation rules to generate [TEXT_STYLE] kinetic typography.

### Animation Rules:
1. **Typography & Layout**:
   - Font family: [FONT_FAMILY]. Tracking: [TRACKING_AMOUNT].
   - Anchor Point: Ensure the anchor point is set to [ANCHOR_POSITION].
2. **In-Animation (The Build)**:
   - Animate the [ANIMATION_TARGET] property from [START_VALUE] to [END_VALUE].
   - Use an Animator property targeting [TEXT_ANIMATOR_MODE] (e.g., characters, words, lines).
   - Easing: Apply a [IN_EASING_PROFILE] velocity curve.
3. **Out-Animation (The Decay)**:
   - Transition text off-screen using [OUT_ANIMATION_TYPE].
4. **Motion Polish**: Include [MOTION_BLUR/ECHO] to add texture to fast movements.

### Output Constraints:
Format this as a step-by-step After Effects Text Animator setup guide.
```

## 🧩 Variables to Fill Out

- `[TEXT_STYLE]` - The vibe of the text (e.g., Aggressive TikTok Captions, Elegant Cinematic Titles, Glitch Tech).
- `[FONT_FAMILY]` / `[TRACKING_AMOUNT]` - Typography styling (e.g., Inter Black / -50 tracking).
- `[ANCHOR_POSITION]` - Anchor point locale (e.g., Bottom Center for pop-ups).
- `[ANIMATION_TARGET]` - What is moving (e.g., Position Y and Opacity).
- `[TEXT_ANIMATOR_MODE]` - Text grouping (e.g., By Word, By Character without spaces).
- `[IN_EASING_PROFILE]` - The interpolation (e.g., 80% Ease In, 20% Ease Out).
- `[OUT_ANIMATION_TYPE]` - How it leaves (e.g., fast scale-down, whip-pan exit).
- `[MOTION_BLUR/ECHO]` - FX applied to the layer (e.g., 360-degree Motion Blur).

## 💡 Pro-Tips
- **Anchor Points:** Setting the anchor point to the Bottom-Center is absolutely critical for pop-up subtitles so they grow *upward* rather than outward.
- **Word vs Character:** Text animated "by word" feels punchy and informative. Handled "by character", it feels cinematic or stylistic. Choose deliberately.
