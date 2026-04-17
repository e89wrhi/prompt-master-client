---
id: bundle_size_reduction
topicId: coding
subTopicId: optimization
title: Intensive Bundle Size Optimization
---
# Template: Intensive Bundle Size Optimization

Use this template to reduce the payload of your web applications for faster load times and improved SEO. It is designed to act as a Performance Engineer and Frontend Architect—utilizing [TREE_SHAKING], [CODE_SPLITTING], and [DYNAMIC_IMPORTS], auditing [HEAVY_DEPENDENCIES], and optimizing [ASSET_DELIVERY] to ensure your application reaches the "First Contentful Paint" as quickly as possible.

## 📋 Prompt Template

```text
Act as a Senior Performance Engineer and Frontend Architect. Help me optimize the bundle size of my [FRAMEWORK] application.

### Optimization Context:
- **Current Stats**: [e.g., Main bundle is 1.5MB, Lighthouse performance score is 45].
- **Heaviest Libraries**: [e.g., lodash, moment.js, lottie-web].
- **Tech Stack**: [e.g., Next.js, Webpack, Vite].

### Audit & Optimization Requirements:
1. **Dependency Audit**: Identify 3 [LIGHTWEIGHT_ALTERNATIVES] for my current libraries (e.g., "Replace Moment.js with Day.js," "Use Lucide-React instead of FontAwesome").
2. **Code-Splitting Strategy**: Provide a snippet for [DYNAMIC_IMPORTS] (e.g., `React.lazy` or `next/dynamic`) for components that shouldn't be in the initial bundle.
3. **Tree Shaking Verification**: Suggest a way to ensure [DEAD_CODE_ELIMINATION] is working (e.g., "Check import patterns for Lodash").
4. **Asset Compression**: Suggest an [IMAGE_OR_FONT_OPTIMIZATION] strategy (e.g., WebP conversion, woff2 subsetting).
5. **Bundle Analysis**: Tell me which [VISUAL_TOOL] (e.g., Webpack Bundle Analyzer, Vite Visualize) I should use to find the hidden "bloat."

### Output Constraints:
- Use a Technical, Performance-Focused, and Decisive tone.
- Conclude with "The Payload Forecast"—estimated percentage reduction after these changes.
- Provide all code snippets in a "Before vs After" format.
```

## 🧩 Variables to Fill Out

- `[FRAMEWORK]` - Next.js, React, Vue, Svelte, etc.
- `[TREE_SHAKING]` - Removing unused code automatically.
- `[DYNAMIC_IMPORTS]` - Loading code only when needed.
- `[LIGHTWEIGHT_ALTERNATIVES]` - Small libraries over big ones.

## 💡 Pro-Tips

- **Modular Imports Matter:** Instead of `import { map } from 'lodash'`, use `import map from 'lodash/map'`. This prevents the [ENTIRE_LIBRARY] from being bundled.
- **Audit your Polyfills:** If you only support modern browsers, you are likely [OVER-BUNDLING] unnecessary polyfills. Ask the AI to: "Audit my `tsconfig.json` and `browserslist` for modern target targets."
- **Custom Font Subsetting:** Don't load the full font weights for [BOLD/ITALIC] if you only use Regular. Ask for a: "Google Fonts optimization strategy."
---
