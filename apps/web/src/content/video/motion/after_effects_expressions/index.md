# Template: After Effects Expressions

Use this template to generate robust, error-free JavaScript/ExtendScript expressions for Adobe After Effects. This ensures the AI outputs code that correctly links properties, handles looping, or applies physics-based math to layers.

## 📋 Prompt Template

```text
Act as a Senior Motion Designer and ExtendScript Developer. Write an Adobe After Effects expression for the [LAYER_PROPERTY] property to achieve [ANIMATION_BEHAVIOR].

### Expression Requirements:
1. **Core Logic**: Use [EXPRESSION_TYPE] to build the foundation of the movement.
2. **Variables**: Declare clear variables at the top of the expression for easy tweaking (e.g., amplitude, frequency, decay).
3. **Layer Integration**: 
   - If referencing other layers, use safe syntax (e.g., `thisComp.layer("Control")`).
   - Ensure the expression handles different dimensions correctly (e.g., 2D vs 3D arrays).
4. **Failsafes**: Prevent mathematical division by zero and cap extreme values if using a time-based multiplier.

### Deliverable:
Provide only the raw expression script in a code block, followed by a brief 2-sentence explanation of how to attach it via the pick-whip or effect controls.
```

## 🧩 Variables to Fill Out

- `[LAYER_PROPERTY]` - The target property (e.g., Position, Scale, Rotation, Source Text).
- `[ANIMATION_BEHAVIOR]` - The desired movement (e.g., an elastic bounce on scale, a 1D vertical wiggle).
- `[EXPRESSION_TYPE]` - The mathematical approach (e.g., Math.sin math wave, loopOut('pingpong'), precise wiggle).

## 💡 Pro-Tips
- **Target Dimensions:** Always specify if a property is 1D (Opacity), 2D (Position standard), or 3D (3D Layer Position). AI easily forgets that After Effects arrays are zero-indexed (`[0], [1]`).
- **Sliders:** Instead of hardcoding numbers, you can tell the AI: *"Reference an Expression Control Slider named 'Speed' on a layer named 'Controls'"* for non-destructive editing.
