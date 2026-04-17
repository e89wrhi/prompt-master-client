# Template: Cinematic Color Grading & Node Trees

Use this template to generate precise instructions for color grading a project. This helps an AI generate DaVinci Resolve node trees, DCTL logic, or step-by-step instructions for achieving a specific visual aesthetic.

## 📋 Prompt Template

```text
Act as a Senior Colorist. Provide a step-by-step node tree structure and primary/secondary grading parameters to achieve a [AESTHETIC_LOOK] look.

### Grading Pipeline:
1. **Color Space Management**: Define the input transform from [CAMERA_LOG_FORMAT] to [TARGET_COLOR_SPACE].
2. **Primary Balance**: Establish the exposure curve and white balance (target [TARGET_KELVIN]).
3. **Look Development (The Grade)**:
   - Shadows: Push towards [SHADOW_TINT].
   - Midtones: Offset towards [MIDTONE_TINT].
   - Highlights: Set towards [HIGHLIGHT_TINT].
4. **Secondary Isolations**: 
   - Define a qualifier for [ISOLATION_TARGET] and explain how to clean up the matte to avoid noise.
5. **Texture & Polish**: 
   - Apply film halation or grain targeting [GRAIN_LEVEL_AND_TYPE].
   - Describe custom curves to ensure a soft rolloff in the highlights.

### Deliverable:
Provide this as a sequential, ordered list of nodes or layers matching standard post-production workflows.
```

## 🧩 Variables to Fill Out

- `[AESTHETIC_LOOK]` - The final goal (e.g., 90s VHS, Blockbuster Teal & Orange, Bleach Bypass).
- `[CAMERA_LOG_FORMAT]` - Starting footage format (e.g., Sony S-Log3, ARRI LogC, RED raw).
- `[TARGET_COLOR_SPACE]` - Timeline/delivery space (e.g., Rec.709 Gamma 2.4).
- `[TARGET_KELVIN]` - White balance target (e.g., 5600K for daylight).
- `[SHADOW_TINT]`, `[MIDTONE_TINT]`, `[HIGHLIGHT_TINT]` - specific color push vectors (e.g., cyan shadows, warm golden highlights).
- `[ISOLATION_TARGET]` - Elements to qualify and protect (e.g., skin tones, sky).
- `[GRAIN_LEVEL_AND_TYPE]` - Type of film grain or analog noise (e.g., 16mm Kodak Vision3 soft grain).

## 💡 Pro-Tips
- **Always Protect Skin Tones:** AI systems and junior colorists often blanket the midtones. Always explicitly request skin tone qualification.
- **Node Order Matters:** Specifying that the Color Space Transform should occur *after* or *before* the creative adjustments completely changes the look.
