# Template: B-Roll Selection & Callouts

Use this template to generate robust visual directions mapping directly to voiceover scripts, ensuring an AI or an editor knows exactly what to show on-screen.

## 📋 Prompt Template

```text
Act as a Lead Visual Researcher and Video Editor. I will provide a narration script about [TOPIC]. Identify strong anchor points in the text and generate specific B-Roll callouts.

### Constraints:
1. **Pacing**: Suggest a new B-Roll shot roughly every [SHOT_FREQUENCY] seconds, matching the spoken cadence.
2. **Visual Style**: Recommend [VISUAL_STYLE] footage that feels [MOOD].
3. **Format**: Please format the output by citing the spoken sentence in bold, followed by a bracketed visual directive. For example:
   **"The market crashed unexpectedly."** -> `[B-ROLL: Wide-shot, slow pan across a chaotic trading floor in black and white.]`
4. **Keyword Triggers**: Prioritize [KEYWORD_FOCUS] over literal interpretations of the text.

Here is the script to process:
[SCRIPT_TEXT]
```

## 🧩 Variables to Fill Out

- `[TOPIC]` - The subject matter of your script (e.g., The Roman Empire, Crypto Crash).
- `[SHOT_FREQUENCY]` - Desired pace of visuals (e.g., 3-5 seconds, every 10 seconds).
- `[VISUAL_STYLE]` - Source type (e.g., Archival Getty Footage, Abstract 3D Renders, Kinetic Typography).
- `[MOOD]` - Emotional tone (e.g., tense, optimistic, nostalgic).
- `[KEYWORD_FOCUS]` - Conceptual focus (e.g., emotional reactions, abstract metaphors, literal product shots).
- `[SCRIPT_TEXT]` - Paste the raw narration text.

## 💡 Pro-Tips
- **Literal vs. Abstract:** If the script says "our servers are fast," AI will suggest literal servers unless you specify an abstract visual style (e.g., "glowing fiber optics rushing forward").
- **Motion Guidelines:** Ask the AI to include implied camera movements in the callouts (e.g., "slow push-in" or "whip-pan") to make the edit feel cohesive.
