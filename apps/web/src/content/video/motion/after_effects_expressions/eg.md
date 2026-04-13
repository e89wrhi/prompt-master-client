# After Effects Expression Examples

## 1. Elastic Inertial Bounce (Scale)
**Prompt:**
> "Write an Adobe After Effects expression for the Scale property to achieve a realistic inertial bounce after the final keyframe.
> - **Core Logic:** Use an amplitude and decay formula based on velocity of the incoming keyframes.
> - **Variables:** Declare `amp = 0.05`, `freq = 3.0`, and `decay = 4.0`.
> - **Layer Integration:** Apply the math only after `numKeys > 0` and calculate based on `velocityAtTime(key(numKeys).time - thisComp.frameDuration/10)`. Ensure it outputs an array `[x, y]`."

## 2. 1D Wiggle on Y-Axis Only (Position)
**Prompt:**
> "Write an Adobe After Effects expression for the Position property to achieve a random wiggle that ONLY affects the Y-axis.
> - **Core Logic:** Use `wiggle()` but isolate the array indices.
> - **Variables:** Set `freq = 2` and `amp = 50`.
> - **Layer Integration:** Output the default `value[0]` for X, but apply the `wiggle(freq, amp)[1]` to Y. Leave Z untouched if it exists."
