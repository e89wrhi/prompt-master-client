# Template: Camera Movement & Blocking

Use this template to generate robust scene directions, dictating precisely how the camera should interact with the subjects. Useful for human DPs or video-gen models.

## 📋 Prompt Template

```text
Act as a Director of Photography. Describe the camera movement and blocking for a [SCENE_TYPE] scene.

### Camera Instructions:
1. **Starting Frame**: Open on a [STARTING_SHOT_SIZE] of [SUBJECT].
2. **The Movement**: Perform a [CAMERA_MOVEMENT] at a [SPEED] pace.
3. **The Reveal/Ending Frame**: The movement must stop framing a [ENDING_SHOT_SIZE] revealing [REVEAL_ELEMENT].
4. **Motivation**: The movement must feel motivated by [CHARACTER_ACTION/EMOTION].

### Deliverable:
Provide this as a clear 2-sentence visual directive using strictly standard cinematic terminology.
```

## 🧩 Variables to Fill Out
- `[SCENE_TYPE]` - Type of scene (Action, Emotional dialogue, Intro).
- `[STARTING_SHOT_SIZE]` - Wide Shot (WS), Extreme Close Up (ECU), etc.
- `[SUBJECT]` - Who/What is on screen.
- `[CAMERA_MOVEMENT]` - Dolly in, Whip Pan, Crane up, Zolly (Dolly Zoom).
- `[SPEED]` - Frantic, excruciatingly slow, rhythmic.
- `[ENDING_SHOT_SIZE]` - Where the shot lands.
- `[REVEAL_ELEMENT]` - What changes in the composition.
- `[CHARACTER_ACTION/EMOTION]` - Why the camera is moving (e.g., subject realization, fleeing danger).

## 💡 Pro-Tips
- **Motivated Camera:** A camera should rarely move just to move. Tying the movement to `[CHARACTER_ACTION/EMOTION]` ensures the AI doesn't create arbitrary floating camera moves.
