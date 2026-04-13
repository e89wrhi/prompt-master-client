# Template: Professional Audio Mixing & Processing

Use this template when requesting an AI tool (like an AI copilot) or a human editor to apply precise audio processing, equalization, and dynamic range compression for video content.

## 📋 Prompt Template

```text
Act as a Senior Audio Engineer. Format and apply a complete audio vocal chain and mixing workflow for a [CONTENT_TYPE].

### Audio Processing Requirements:
1. **Noise Reduction**: Apply noise reduction targeting [NOISE_PROFILE], lowering the noise floor by [DB_REDUCTION] without artifacting.
2. **Equalization (EQ)**: 
   - Apply a High-Pass filter at [HPF_FREQ].
   - Cut at [CUT_FREQ] to remove [MUDDINESS/HARSHNESS].
   - Boost at [BOOST_FREQ] by [BOOST_DB] for presence.
3. **Compression**: 
   - Target overall loudness of [LUFS_TARGET].
   - Set attack to [ATTACK_SPEED] and release to [RELEASE_SPEED].
   - Keep True Peak below [TRUE_PEAK_TARGET].
4. **Ducking & Routing**: Ensure the music bed ducks underneath the primary vocal bus with a fast attack and [DUCK_RELEASE] release, targeting exactly [DUCK_REDUCTION] reduction floor.

### Output Constraints:
Ensure the mixing breakdown is step-by-step and explicitly provides the exact numerical values or plugin settings needed.
```

## 🧩 Variables to Fill Out

- `[CONTENT_TYPE]` - Type of video (e.g., Cinematic Documentary, Close-Mic Podcast, High-Energy YouTube Video).
- `[NOISE_PROFILE]` - Specific noise to target (e.g., room reverb, AC hum, steady-state rumble).
- `[DB_REDUCTION]` - Decibel reduction for noise floor (e.g., -10dB).
- `[HPF_FREQ]` - High Pass Filter cutoff (e.g., 80Hz).
- `[CUT_FREQ]` & `[BOOST_FREQ]` - Problematic and target frequencies (e.g., 300Hz, 8kHz).
- `[LUFS_TARGET]`, `[TRUE_PEAK_TARGET]` - Loudness standards (e.g., -14 LUFS, -1dB TP).
- `[ATTACK_SPEED]`, `[RELEASE_SPEED]`, `[DUCK_RELEASE]`, `[DUCK_REDUCTION]` - Dynamic control parameters.

## 💡 Pro-Tips
- **LUFS matter:** YouTube and Spotify target -14 LUFS. Broadcast usually targets -23 LUFS. Always specify your platform when asking for compression.
- **Ducking speed:** Background music needs to pull down instantly (fast attack ~10ms) but usually sounds more natural with a longer release (e.g., 500ms).
