# Examples: Detailed NLE Transitions

## 1. Seamless Horizontal Whip Pan
```text
Act as a Motion Graphics and Video Editor. Outline the exact keyframes, effects, and easing needed to build a Horizontal Whip Pan between two intersecting clips in Adobe Premiere Pro.

### Transition Parameters:
1. **Shot A (Outro) Configuration**:
   - Apply the Transform effect.
   - Keyframe the Position X starting at 960 and ending at -1920.
   - Set the interpolation/easing to Ease-In.
2. **Shot B (Intro) Configuration**:
   - Apply the Transform effect.
   - Keyframe the Position X starting at 3840 and easing into 960.
   - Ensure the easing for the intro is Ease-Out to match the outgoing velocity.
3. **Motion Blur**: 
   - Set the Shutter Angle to 360 degrees to create accurate motion blur matching the velocity.
4. **Midpoint Blend**: 
   - At the splice point, apply a Directional Blur over exactly 4 frames to hide the cut.

### Output Constraints:
Provide the breakdown using the exact naming conventions for effects and properties found natively in Adobe Premiere Pro. Do not rely on third-party plugins.
```
