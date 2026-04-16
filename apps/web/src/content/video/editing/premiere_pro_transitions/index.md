---
id: premiere_pro_transitions
topicId: video
subTopicId: editing
title: Detailed NLE Transitions
---
# Template: Detailed NLE Transitions

Use this template when asking an AI to generate ExtendScript for Premiere Pro, or when creating step-by-step keyframe instructions for manual digital transitions (like whip pans, zooms, and speed ramps).

## 📋 Prompt Template

```text
Act as a Motion Graphics and Video Editor. Outline the exact keyframes, effects, and easing needed to build a [TRANSITION_TYPE] between two intersecting clips in [NLE_SOFTWARE].

### Transition Parameters:
1. **Shot A (Outro) Configuration**:
   - Apply the [EFFECT_NAME] effect.
   - Keyframe the [ANIMATED_PROPERTY] starting at [START_VALUE] and ending at [END_VALUE].
   - Set the interpolation/easing to [EASING_TYPE].
2. **Shot B (Intro) Configuration**:
   - Apply the [EFFECT_NAME] effect.
   - Keyframe the [ANIMATED_PROPERTY] starting at [START_VALUE] and easing into [END_VALUE].
   - Ensure the easing for the intro is [EASING_TYPE] to match the outgoing velocity.
3. **Motion Blur**: 
   - Set the Shutter Angle to [SHUTTER_ANGLE] to create accurate motion blur matching the velocity.
4. **Midpoint Blend**: 
   - At the splice point, apply a [BLEND_EFFECT] over exactly [BLEND_DURATION] frames to hide the cut.

### Output Constraints:
Provide the breakdown using the exact naming conventions for effects and properties found natively in [NLE_SOFTWARE]. Do not rely on third-party plugins.
```

## 🧩 Variables to Fill Out

- `[TRANSITION_TYPE]` - Type of transition (e.g., Horizontal Whip Pan, Speed Ramp, Luma Fade).
- `[NLE_SOFTWARE]` - Your editing software (e.g., Adobe Premiere Pro, DaVinci Resolve).
- `[EFFECT_NAME]` - Native effect to use (e.g., Transform, Time Remapping, Directional Blur).
- `[ANIMATED_PROPERTY]` - Property to animate (e.g., Position X, Scale, Opacity).
- `[START_VALUE]` / `[END_VALUE]` - Specific numerical boundaries (e.g., -1920 pixels to 0).
- `[EASING_TYPE]` - Interpolation curve (e.g., Ease-In, Bezier, Linear).
- `[SHUTTER_ANGLE]` - Motion blur amount (e.g., 360 degrees).
- `[BLEND_EFFECT]` / `[BLEND_DURATION]` - Cross dissolve or light leak blending (e.g., Cross Dissolve / 2 frames).

## 💡 Pro-Tips
- **Native vs. Plugins:** Forcing the use of native effects (like the Transform effect instead of Motion for Shutter Angle) ensures the instructions are universally executable.
- **Mathematical Continuity:** For transitions like Whip Pans, Shot A's ending velocity must match Shot B's starting velocity. Providing explicit easing types establishes this matching momentum.
