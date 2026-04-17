# Template: High-Aesthetic UI Component Generation

Use this template to generate premium, accessible, and reusable UI components. It is designed to act as a Frontend Lead—utilizing [FRAMEWORK_STANDARDS], enforcing [STRICT_PROPS_INTERFACES], implementing [ACCESSIBILITY_ARIA] attributes, and applying [PREMIUM_STYLING] (e.g., Glassmorphism, tailored gradients) to ensure your components are production-ready.

## 📋 Prompt Template

```text
Act as a Senior Frontend Lead and UI Engineer. Forge a professional [COMPONENT_NAME] using [STYLING_LIBRARIES].

### Component Context:
- **Framework**: [e.g., React (Next.js), Vue 3, SvelteKit].
- **Styling Method**: [e.g., Tailwind CSS, CSS Modules, Styled Components].
- **Functional Requirements**: [e.g., This is a 'Multi-Select Dropdown', a 'Glassmorphic Pricing Card', a 'Data Table with Sorting'].

### Implementation Requirements:
1. **The Props Interface**: Define a strict [TYPESCRIPT_INTERFACE] for all inputs, including handlers (e.g., `onSelect`).
2. **Visual Excellence (Aesthetics)**: Apply [PREMIUM_DESIGN_TOKENS] (e.g., HSL colors, smooth transitions, subtle drop-shadows, glassmorphism).
3. **Internal State & Logic**: Handle [LOCAL_STATE_VARS] using hooks (e.g., `useState`, `useMemo`) for maximum performance.
4. **Accessibility (A11y)**: Include correct [ARIA_LABELS] and keyboard navigation support.
5. **Reusability Pattern**: If applicable, split the component into [SUB-COMPONENTS] (e.g., `Table.Header`, `Table.Row`) for composability.

### Output Constraints:
- Use a Precise, Aesthetic, and Code-Quality-Focused tone.
- Do NOT use generic browser colors; use custom HSL or Tailwind tokens.
- Conclude with "The Storybook Draft"—a code snippet for a Storybook story to test the component's edge cases.
```

## 🧩 Variables to Fill Out

- `[COMPONENT_NAME]` - e.g., Modal, Button, Navbar, PricingTable.
- `[PREMIUM_DESIGN_TOKENS]` - The "Wow" factor.
- `[TYPESCRIPT_INTERFACE]` - Ensuring type safety.
- `[ARIA_LABELS]` - Ensuring accessibility.

## 💡 Pro-Tips

- **The "Skeleton" Phase:** If the component fetches data, ask for a: "[SKELETON_LOADING_STATE] using a shimmer animation."
- **Compound Components:** For complex UI (like Modals or Tabs), use the [COMPOUND_COMPONENT_PATTERN] for maximum flexibility for the end-user. Ask the AI to: "Use `React.Context` or the framework equivalent to share state between the parent and children."
- **Responsive by Default:** Always specify [BREAKPOINT_BEHAVIOR] (e.g., "Full width on mobile, 300px on desktop").
---
