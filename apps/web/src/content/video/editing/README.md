# ✂️ Editing & Post-Production: Detailed Guide

Post-production is where the story is truly told. These prompts bridge the gap between technical software constraints and creative directorial intent.

---

## 📈 Level-Based Editing Strategy

### 🐣 Level 1: Simple Cut
**Focus:** Basic assembly.
**Example Prompt:** *"Edit this footage into a 1-minute highlight reel. Choose the best shots and add a cross-fade between them."*

### 👟 Level 2: Rhythmic Assembly
**Focus:** Pacing and flow.
**Example Prompt:** *"Edit these clips to the beat of the background music. Use J-cuts for all dialogue transitions to ensure a seamless flow."*

### 🏢 Level 3: Technical Polish
**Focus:** Color and Audio depth.
**Example Prompt:** *"Apply a teal and orange grade keeping skin tones protected. Balance the audio to -14 LUFS and implement sidechain ducking for the music bed."*

### 🏛️ Level 4: Senior Post-Production
**Focus:** Complex workflows and automation.
**Example Prompt:** *"Design a DaVinci Resolve node tree for a bleach-bypass look. Include a grain management node and high-quality halation. Write a Premiere Pro ExtendScript to automate the creation of horizontal whip-pan transitions."*

---

## 🛠️ Advanced Techniques

| Technique | Description | AI Benefit |
| :--- | :--- | :--- |
| **NLE Terminology** | Use software-specific terms (e.g., "Transform effect", "Shutter Angle"). | Generates instructions that actually map to your timeline properties. |
| **LUFS Targets** | Specify platform-specific loudness (e.g., -14 for YT, -23 for Broadcast). | Prevents compression artifacts and volume clipping. |
| **Secondary Qualification** | Isolate specific colors or zones (e.g., "HSL qualifier for skin"). | Professional-grade color results without "blanket" grading. |

---

## 📋 Templates & Blueprints
*Found in this directory:*

*   [**Audio Mixing Stems**](./audio_mixing_stems/index.md): EQ curves, compression, and ducking rules.
*   [**Color Grading LUTs**](./color_grading_luts/index.md): Professional grade node structures and film looks.
*   [**Pacing & Cut Guidelines**](./pacing_and_cut_guidelines/index.md): Rules for high-retention editing and emotional rhythm.
*   [**Premiere Pro Transitions**](./premiere_pro_transitions/index.md): Native effect keyframing for seamless motion.

---

## 💡 Pro-Tip: The "Velocity Match"
For seamless transitions, always ask for velocity matching:
> *"Ensure Shot A's exit velocity matches Shot B's entry velocity to create a physically accurate whip-pan momentum."*

---
[← Back to Video Library](../README.md)