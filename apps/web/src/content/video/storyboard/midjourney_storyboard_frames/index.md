---
id: midjourney_storyboard_frames
topicId: video
subTopicId: storyboard
title: Midjourney Storyboards
---
# Template: Midjourney Storyboards

Use this template to generate ultra-consistent cinematic storyboard frames inside of Midjourney by dictating aspect ratios, film stocks, and specific camera blocking.

## 📋 Prompt Template

```text
Create a Midjourney v6 prompt for a cinematic storyboard frame.

### The Scene:
A [SHOT_TYPE] of [CHARACTER_DESCRIPTION] doing [ACTION]. 
The setting is [ENVIRONMENT_DETAILS]. 

### Cinematic Parameters:
- **Lighting**: [LIGHTING_STYLE]. 
- **Lens & Camera**: Shot on [CAMERA_AND_LENS_COMBO], characterized by [FILM_LOOK]. 
- **Color Grading**: [COLOR_GRADE_VIBE]. 

### Midjourney Suffixes:
Output exactly and only the following string structure, do not explain the prompt:
`/imagine prompt: [Scene text], [Cinematic parameters] --ar [ASPECT_RATIO] --style raw --v 6.0`
```

## 🧩 Variables to Fill Out
- `[SHOT_TYPE]` - Extreme Wide Shot (EWS), Medium Close Up (MCU), Dutch Angle.
- `[CHARACTER_DESCRIPTION]` - Detailed avatar features.
- `[ACTION]` - What is presently occurring.
- `[ENVIRONMENT_DETAILS]` - The background world.
- `[LIGHTING_STYLE]` - Dramatic lighting cues (e.g., rim lighting, golden hour).
- `[CAMERA_AND_LENS_COMBO]` - Authentic gear (e.g., Arri Alexa Mini with 35mm Cooke anamorphic lens).
- `[FILM_LOOK]` - Film stock specifics (e.g., Kodak Portra 400, halation, heavy grain).
- `[COLOR_GRADE_VIBE]` - Overall color palette (e.g., Teal and orange blockbuster, desaturated bleak).
- `[ASPECT_RATIO]` - Aspect output (e.g., 16:9, 2.35:1 for cinema).

## 💡 Pro-Tips
- **Shot Types:** Pre-pending the prompt with strict shot types (e.g., "Over the shoulder shot") forces Midjourney to follow standard cinematic blocking rather than generic portraits.
- **Aspect Ratios:** `--ar 2.35:1` forces ultra-widescreen, giving your storyboards an instantly theatrical, premium feel.
