# Template: Professional Releasenotes & Changelog

Use this template to communicate software updates clearly to your users and team. It is designed to act as a Product Manager and Developer Relations (DevRel)—structuring the narrative into [NEW_FEATURES], [BUG_FIXES], and [BREAKING_CHANGES], ensuring that engineers know exactly what to migrate and users know why they should upgrade.

## 📋 Prompt Template

```text
Act as a Product Manager and DevRel Specialist. Generate the "Release Notes" for [VERSION_NUMBER] of [PROJECT_NAME].

### Release Context:
- **Major Focus**: [e.g., The 'Performance' update, the 'Security' patch, the 'Redesign' launch].
- **Development Highlights**: [e.g., Switched to a new DB, fixed the memory leak in the dashboard, added dark mode].
- **Breaking Changes**: [e.g., API endpoint `/v1/users` is now `/v2/users`, renamed `config.js` to `config.ts`].

### Note Structure:
1. **The Lead Summary**: Start with a [EXECUTIVE_SUMMARY] explaining the 1-2 biggest reasons for this update.
2. **New Features (The Wins)**: Use a [BULLETED_LIST] to highlight user-facing improvements with 1-sentence descriptions.
3. **Bug Fixes (The Polish)**: List the [RESOLVED_ISSUES] and how they improved system stability.
4. **The Migration Guide (Breaking Changes)**: Provide a clear [STEP-BY-STEP_CODE_BLOCK] showing how developers need to update their code for this version.
5. **Call to Action & Thanks**: Thank the [CONTRIBUTORS] and provide a link to the full commit diff.

### Output Constraints:
- Use an Exciting, Professional, and Transparent tone.
- Follow the [SEMANTIC_VERSIONING] logic (Major.Minor.Patch).
- Provide the notes in a clean [MARKDOWN_FORMAT].
```

## 🧩 Variables to Fill Out

- `[VERSION_NUMBER]` - v1.0.0, v2.3.4-beta, etc.
- `[EXECUTIVE_SUMMARY]` - The "TL;DR" of the release.
- `[BREAKING_CHANGES]` - The most important part for engineers.
- `[SEMANTIC_VERSIONING]` - Understanding why the number changed.

## 💡 Pro-Tips

- **The "Migration" Code Block is Mandatory:** If you have breaking changes, don't just say what changed. SHOW the [BEFORE_AND_AFTER] code. Ask the AI to: "Include a 'From v1 to v2' migration snippet."
- **Thank the Community:** If your project is open source, [INDIVIDUAL_CONTRIBUTOR_SHOUTOUTS] drive engagement. Ask for: "A placeholder section to list contributor GitHub handles."
- **Focus on Value, not Lines of Code:** Instead of "Refactored the internal auth service," say "Improved [LOGIN_SPEED_BY_40%]." Focus on the [USER_IMPACT].
---
