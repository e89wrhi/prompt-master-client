# 🌀 Motion & Generative: Detailed Guide

Motion design and generative video require a blend of mathematical precision (Expressions) and physical intuition (Diffusion models).

---

## 📈 Level-Based Motion Strategy

### 🐣 Level 1: Simple Movement
**Focus:** Static motion.
**Example Prompt:** *"Animate this layer moving from the left side of the screen to the right over 2 seconds."*

### 👟 Level 2: Eased Behavior
**Focus:** Bounce and weight.
**Example Prompt:** *"Apply a bounce expression to the scale property. Ensure it feels elastic and settles naturally after a fast scale-up."*

### 🏢 Level 3: Physics & Particles
**Focus:** Environmental logic.
**Example Prompt:** *"Generate a video of smoke rising through a keyhole. The smoke must swirl realistically around the edges of the metal. Lighting should be volumetric."*

### 🏛️ Level 4: Master Simulation
**Focus:** State changes and complex interactions.
**Example Prompt:** *"Create a Sora prompt where a glass of ice water falls. The glass must shatter, the ice must slide across the floor realistically, and the water must splash and puddle according to the floor's texture."*

---

## 🛠️ Advanced Techniques

| Technique | Description | AI Benefit |
| :--- | :--- | :--- |
| **Zero-Indexing Aware** | Remind AI that AE arrays starting at `[0]`. | Prevents "Expression Error" breaks in After Effects. |
| **Diffusion Motion Scale** | Use motion scale sliders or "fast/slow" keywords clearly. | Prevents "warping" or "hallucinations" in high-speed gen-video. |
| **Phase Transitions** | Explicitly describe material changes (e.g., "solid to liquid"). | Pushes the limits of Sora-class physical world models. |

---

## 📋 Templates & Blueprints
*Found in this directory:*

*   [**After Effects Expressions**](./after_effects_expressions/index.md): Reusable JS/ExtendScript for physics-based layers.
*   [**Kinetic Typography Rules**](./kinetic_typography_rules/index.md): Fast, high-retention subtitle and title logic.
*   [**RunwayML Generation**](./runwayml_generation_prompts/index.md): Camera motion and seed consistency prompts.
*   [**Sora Physics Prompts**](./sora_physics_prompts/index.md): Extreme realism and material interaction tests.

---

## 💡 Pro-Tip: The "Dimensionality Check"
When asking for After Effects math, always specify the dimensions:
> *"This is a 2D property, so ensure you return an array `[x, y]` even if you only want to wiggle the Y-axis."*

---
[← Back to Video Library](../README.md)