---
id: shot_list_generation
topicId: video
subTopicId: storyboard
title: Shot List Generation
---
# Template: Shot List Generation

Use this template to translate a raw script block or scene desc into a fully realized, actionable spreadsheet/table of shots required for production.

## 📋 Prompt Template

```text
Act as an experienced Assistant Director and Cinematographer. I will provide a brief scene description. Break this scene down into an actionable shot list.

### Requirements:
1. **Shot Variety**: Ensure a traditional edit structure (e.g., starting with an Establishing Shot, transitioning into Mediums, and punching in for Close Ups on key emotions).
2. **Efficiency**: Limit the total number of setups to [MAX_SETUPS] to optimize the shooting day.
3. **Format**: Present the shot list as a Markdown Table with the following columns:
   - **Shot #**
   - **Shot Size** (WS, MCU, CU, OTS, etc.)
   - **Angle/Movement** (Low angle, tracking, static panning)
   - **Subject/Action**
   - **Equipment Needed** (Steadicam, Tripod, Gimbal)

Here is the scene:
[SCENE_DESCRIPTION]
```

## 🧩 Variables to Fill Out
- `[MAX_SETUPS]` - The maximum number of camera repositions/lighting shifts allowed (e.g., 5 setups).
- `[SCENE_DESCRIPTION]` - The screenplay text or a rough paragraph of what happens.

## 💡 Pro-Tips
- **Constraint is Key:** Asking AI for a shot list usually results in 50+ shots for a 1-page scene. Constraining it by `[MAX_SETUPS]` acts like a real indie-film budget, forcing the AI to combine actions into efficient, realistic camera angles.
