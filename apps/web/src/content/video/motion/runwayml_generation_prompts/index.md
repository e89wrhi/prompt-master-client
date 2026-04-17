---
id: runwayml_generation_prompts
topicId: video
subTopicId: motion
title: 'Gen-AI Video Generation (RunwayML, Pika, Kling)'
---
# Template: Gen-AI Video Generation (RunwayML, Pika, Kling)

Use this template to generate highly precise text-to-video (or image-to-video) prompts. It structures the camera variables, subject actions, and atmospheric elements required by diffusion video models like RunwayML Gen-2/Gen-3, Pika Labs, etc.

## 📋 Prompt Template

```text
Act as a Generative AI Video Director. Create a precise prompt for a text-to-video diffusion model using the following cinematography and action structures.

### The Scene:
1. **Camera Movement**: [CAMERA_MOVEMENT_AND_SPEED].
2. **Subject Action**: [SUBJECT_PRIMARY_ACTION]. Ensure the movement is physically grounded and continuous.
3. **Environment Details**: [ENVIRONMENT_SCENERY]. Include lighting conditions: [LIGHTING_SETUP].
4. **Camera & Lens Setup**: Shoot on a [LENS_MM] lens, mimicking [FILM_STOCK_OR_CAMERA].
5. **Aesthetic/Texture**: Apply a [TEXTURE_AESTHETIC] look.

### Prompt Construction:
Draft a single, comma-separated descriptive paragraph containing all the above elements. Put the most important subjects and camera motions at the absolute beginning of the prompt. Do not use conversational filler.
```

## 🧩 Variables to Fill Out

- `[CAMERA_MOVEMENT_AND_SPEED]` - Shot type & motion (e.g., FPV drone flying rapidly through, Slow tracking shot panning right).
- `[SUBJECT_PRIMARY_ACTION]` - What is happening (e.g., A cybernetic geisha pouring neon tea).
- `[ENVIRONMENT_SCENERY]` - The backdrop (e.g., A brutalist concrete apartment, lush rainforest floor).
- `[LIGHTING_SETUP]` - How it is lit (e.g., Chiaroscuro high-contrast, golden hour backlighting, volumetric fog).
- `[LENS_MM]` - Focal length (e.g., 24mm wide angle, 100mm macro).
- `[FILM_STOCK_OR_CAMERA]` - The medium (e.g., 16mm Kodak film, Arri Alexa 65).
- `[TEXTURE_AESTHETIC]` - The "vibe" (e.g., cinematic, photorealistic, halation, anamorphic lens flares).

## 💡 Pro-Tips
- **Front-Loading:** Gen-Video models heavily weight the first 10 words. Always put the subject and the camera motion first.
- **Negative Prompts:** If the model supports it, append `--neg text, watermark, bad anatomy, warping`.
- **Motion Scale:** For Runway text queries, specify the motion explicitly in the text (e.g., "fast pan right") if not using UI sliders.
