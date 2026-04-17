# Template: Stable Diffusion Technical Parameters

Use this template to generate high-fidelity, controllable imagery using the Stable Diffusion (XL/1.5) framework. It is designed to act as a Technical Artist—utilizing [WEIGHTED_TOKENS], structured [NEGATIVE_PROMPTS], and precise [SAMPLING_STEPS] to achieve professional results often impossible with simple natural language.

## 📋 Prompt Template

```text
### Positive Prompt:
(masterpiece:1.2), (high quality:1.4), [SUBJECT_DESCRIPTION], [STYLE_TAGS], [LIGHTING_TAGS], [TECHNICAL_TAGS:1.3]

### Negative Prompt:
(worst quality, low quality:1.4), (bad anatomy), (extra limbs), (blurry), [EXCLUSION_TAGS]

### Recommended Settings:
- **Model/Checkpoint**: [e.g., SDXL 1.0, DreamShaper, Realistic Vision].
- **Sampler**: [e.g., Euler a, DPM++ 2M SDE Karras].
- **Steps**: [20-40].
- **CFG Scale**: [7.0 - 9.0].
- **VAE**: [e.g., vae-ft-mse-840000-ema-pruned].
```

## 🧩 Variables to Fill Out

- `[WEIGHTED_TOKENS]` - Using `(word:1.2)` to increase importance or `[word:0.8]` to decrease it.
- `[STYLE_TAGS]` - e.g., hyperrealistic, unreal engine 5, octane render, trending on artstation.
- `[EXCLUSION_TAGS]` - What you absolutely do not want (e.g., text, watermark, signature).

## 💡 Pro-Tips

- **Token Order is Mathematical:** Stable Diffusion processes tokens from [LEFT_TO_RIGHT]. Your most important concept must be in the first 10 tokens.
- **The Power of 75:** SD has a limit of [75_TOKENS]. If your prompt is longer, it will wrap or lose weight on the tail end. Use "Break" commands if using advanced UIs (A1111/Forge).
- **CFG Scale sweet spot:** Too high (over 12) causes [COLOR_BURN]; too low (under 5) stops the AI from following the prompt accurately. Stick to 7-9 for most realistic models.
- **ControlNet is the Pro Secret:** Mentioning "ControlNet Canny" or "ControlNet Depth" in your workflow allows you to guide the image based on a specific [SKETCH_OR_MAP].
---
