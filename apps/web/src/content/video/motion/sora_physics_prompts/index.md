# Template: Sora & Complex Physics Prompts

Use this template for bleeding-edge AI models (like OpenAI's Sora) that understand full 3D physics, material intersections, and fluid dynamics over extended durations.

## 📋 Prompt Template

```text
Act as a Generative AI Physicist and Cinematographer. Write a highly detailed text-to-video prompt specifically designed to test complex 3D engine physics and fluid dynamics within a photorealistic video generation model.

### Physics & Continuity Rules:
1. **The Primary Subject**: [FOCAL_SUBJECT].
2. **Material Interaction & Physics**: Detail the [PHYSICS_ANOMALY]. Explain exactly how the elements collide, shatter, melt, or float.
3. **Environmental Collision**: Describe how the subject interacts with the ground or surroundings: [GROUND_INTERACTION].
4. **Camera Trajectory**: Program the camera path: [LONG_TAKE_CAMERA_PATH]. Ensure the camera respects physical space and depth.
5. **Lighting & Reflection**: [COMPLEX_LIGHTING_AND_REFLECTIONS] (e.g., ray-traced reflections on glass, subsurface scattering).

### Output Constraints:
Write this as a dense, descriptive 2-paragraph prompt, focusing heavily on the physical weight, gravity, and material realism of the scene.
```

## 🧩 Variables to Fill Out

- `[FOCAL_SUBJECT]` - The main entity (e.g., A glass sphere filled with liquid gold, A fluffy mammoth).
- `[PHYSICS_ANOMALY]` - The core physics test (e.g., The sphere shatters into a thousand pieces with liquid spilling realistically over uneven rocks).
- `[GROUND_INTERACTION]` - Environment interaction (e.g., Dust kicks up underfoot, creating muddy footprints).
- `[LONG_TAKE_CAMERA_PATH]` - Continuous camera motion (e.g., Handheld continuous tracking curving 360 degrees around the subject).
- `[COMPLEX_LIGHTING_AND_REFLECTIONS]` - Rendering difficulty (e.g., Caustic light splitting through the fractured glass, dynamic shadows projecting on the walls).

## 💡 Pro-Tips
- **State Changes:** Models like Sora excel at phase transitions (e.g., solid ice melting into water). Explicitly describe the "before" and "after" state of materials.
- **Reflection & Refraction:** To push realism, ask for things that require ray-tracing equivalent lighting—mirrors, standing water, and transparent glass.
