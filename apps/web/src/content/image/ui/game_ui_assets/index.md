---
id: game_ui_assets
topicId: image
subTopicId: ui
title: High-Detail Game UI Assets
---

# Template: High-Detail Game UI Assets

Use this template to generate theme-consistent HUD (Heads-Up Display) elements, menus, and inventory assets. It is designed to specify the [TACTILE_MATERIALS] (e.g., weathered stone, sci-fi metal, magical crystal), the [VARYING_UI_STATES] (e.g., active, hover, disabled), and the [COHESIVE_COLOR_SCHEMA] required to integrate into a specific game world.

## 📋 Prompt Template

```text
Act as a Senior Game UI Artist and Visual Designer. Generate a high-detail asset prompt for [ASSET_TYPE] in a [GAME_GENRE] setting.

### Game World & Theme:
- **World Vibe**: [e.g., Gritty dark fantasy, sleek futuristic sci-fi, hand-painted whimsical, retro 8-bit].
- **Core Materials**: [e.g., Ancient mossy stone, translucent holographic light, rusted iron, polished white plastic].

### Asset Requirements:
1. **The Primary Asset**: Describe the [SPECIFIC_UI_ELEMENT] (e.g., "A set of large action buttons," "A health and mana bar frame," "A 20-slot inventory grid," "A circular skill-tree map").
2. **Tactile & Visual Details**: Define the [PHYSICAL_PROPERTIES] (e.g., "Carved runes that glow whenever a button is pressed," "Floating digital noise along the edges," "Beveled copper edges with patina").
3. **The User States**: Describe how the element looks in different states (e.g., "Active state has a bright inner glow," "Disabled state is desaturated and cracked").
4. **Color Schema**: Specify 3 [THEMATIC_COLORS] (e.g., Blood Red, Obsidian, Gold).
5. **Technical Specifier**: Conclude with fidelity cues (e.g., "Unreal Engine 5 UI style, sharp edges, clean vector layout, high contrast, transparent-ready background, 8k textures").

### Output Constraints:
- Use a Precise, Imaginative, and System-Focused tone.
- Ensure the assets feel like they belong to a single, [COHESIVE_UI_KIT].
- Provide the final prompt in a copy-pasteable code block.
```

## 🧩 Variables to Fill Out

- `[ASSET_TYPE]` - e.g., Health Bars, Action Buttons, Inventory Panel, Dialogue Box.
- `[GAME_GENRE]` - e.g., RPG, FPS, RTS, Casual Mobile.
- `[SPECIFIC_UI_ELEMENT]` - The exact piece of the puzzle.
- `[COHESIVE_UI_KIT]` - Ensure all pieces match the same style.

## 💡 Pro-Tips

- **The "Material World" Rule:** Game UI should feel like it was [BUILT_FROM_THE_ENVIRONMENT]. If your game is set in a forge, the buttons should look like [METAL_PLATES]. If it's a magical forest, use [VINES_AND_WOOD].
- **State Changes are Key:** A button isn't just a button; it's an interaction. Tell the AI to "Design the 'Default,' 'Hover,' and 'Pressed' versions of the button side-by-side."
- **Focus on Legibility:** In high-speed games (FPS/RTS), UI must be readable in milliseconds. Ask the AI to "Use high-contrast outlines and simple silhouettes for maximum speed of recognition."
---
