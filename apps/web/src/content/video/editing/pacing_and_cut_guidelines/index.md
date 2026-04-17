---
id: pacing_and_cut_guidelines
topicId: video
subTopicId: editing
title: Editing Pacing & Audience Retention
---
# Template: Editing Pacing & Audience Retention

Use this template to give specific editorial direction to an AI editing assistant (like AutoPod) or a human editor. It defines the emotional rhythm, pacing intervals, and overlapping cutting techniques needed prior to effects or color.

## 📋 Prompt Template

```text
Act as a Master Video Editor. Provide structural pacing rules and timeline instructions to edit a [CONTENT_TYPE] targeting [TARGET_AUDIENCE].

### Cutting Rules & Pacing:
1. **The Hook**: For the first [HOOK_DURATION], ensure cuts occur every [CUT_FREQUENCY] to maximize viewer retention. 
2. **A-Roll Rhythm**:
   - Trim all dead air and strictly overlap speaker dialogue using [CUT_STYLE] cuts.
   - When [SPEAKER_EVENT] occurs, let the shot linger for [PAUSE_DURATION] to emphasize [EMOTIONAL_IMPACT].
3. **B-Roll Integration**:
   - Cut to B-Roll precisely on the [SYNC_TRIGGER] (e.g., snare drum beats, specific buzzwords).
4. **Visual Dynamics**:
   - For static A-roll shots longer than [STATIC_DURATION], apply an imperceptible slow digital zoom (e.g., scale from 100% to [ZOOM_PERCENT]%).

### Output Constraints:
Detail these instructions as an editorial style guide that can be directly mapped to NLE timeline keyframes and audio tracks.
```

## 🧩 Variables to Fill Out

- `[CONTENT_TYPE]` - Type of video (e.g., High-Retention YouTube Essay, Emotional Documentary Interview).
- `[TARGET_AUDIENCE]` - The audience dictating the pace (e.g., Gen-Z TikTok users, Corporate B2B clients).
- `[HOOK_DURATION]` - Length of intro (e.g., 30 seconds).
- `[CUT_FREQUENCY]` - Max duration per shot in intro (e.g., 2.5 seconds).
- `[CUT_STYLE]` - J-Cuts or L-Cuts.
- `[SPEAKER_EVENT]` - What is happening in the footage (e.g., subject starts crying, punchline lands).
- `[PAUSE_DURATION]` - How long to hold the silence (e.g., 2 seconds).
- `[EMOTIONAL_IMPACT]` - Subtext to highlight (e.g., vulnerability, dramatic tension).
- `[SYNC_TRIGGER]` - Cutting motivator (e.g., down-beats of the music track).
- `[STATIC_DURATION]` / `[ZOOM_PERCENT]` - When to break static shots (e.g., 5 seconds / 105%).

## 💡 Pro-Tips
- **J-Cuts and L-Cuts:** Explicitly stating to use J and L cuts prevents the AI or editor from creating jarring, amateurish straight cuts.
- **Rhythm Over Rules:** Dictating a "cut frequency" gives AI editing tools strict limits matching high-retention formats.
