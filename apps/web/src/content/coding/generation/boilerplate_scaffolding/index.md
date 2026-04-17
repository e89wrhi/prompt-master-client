---
id: boilerplate_scaffolding
topicId: coding
subTopicId: generation
title: Professional Boilerplate & Scaffolding
---
# Template: Professional Boilerplate & Scaffolding

Use this template to architect the skeleton of a new software project. It is designed to act as a Full-Stack Architect—defining the [PROJECT_STRUCTURE], selecting [CORE_DEPENDENCIES], configuring [LINTING/PRETTIER] standards, and establishing a modular [DIRECTORY_STRATEGY] that ensures long-term maintainability and scalability.

## 📋 Prompt Template

```text
Act as a Senior Full-Stack Architect and Project Lead. I want to scaffold a new project for [APPLICATION_PURPOSE].

### Project Context:
- **Tech Stack**: [e.g., Next.js, TypeScript, Tailwind, Prisma, Zod].
- **Folder Convention**: [e.g., Feature-based modules, Atomic Design, Flat structure].
- **Quality Standards**: [e.g., Strict TypeScript, Prettier/ESLint, Jest for testing].

### Scaffolding Requirements:
1. **The Root Directory**: Provide the [TOP-LEVEL_FOLDER_MAP] excluding `node_modules`.
2. **Core Dependency List**: Provide a `package.json` (or equivalent) with [ESSENTIAL_PACKAGES] (Dependencies and DevDependencies).
3. **Environment Setup**: Define the [ENV_TEMPLATE] variables required for local development.
4. **The Entry Point**: Provide the [MAIN_CONFIG_FILE] (e.g., `next.config.js`, `tailwind.config.ts`, or the main `App.tsx`).
5. **Project README skeleton**: A brief 1-paragraph [PROJECT_VISION] and installation instructions.

### Output Constraints:
- Use a Scalable, Formal, and Architecturally-Sound tone.
- Conclude with "The Maintainer's Rulebook"—3 rules for how and where to add new code in this specific structure.
- Present all file structures and config files in clear code blocks.
```

## 🧩 Variables to Fill Out

- `[APPLICATION_PURPOSE]` - e.g., A multi-tenant SaaS dashboard, a high-performance Go API.
- `[PROJECT_STRUCTURE]` - The map of folders and files.
- `[CORE_DEPENDENCIES]` - The libraries that power the app.
- `[ENV_TEMPLATE]` - `.env.example` content.

## 💡 Pro-Tips

- **Monorepo vs Polyrepo:** If you are building multiple apps (e.g., Web, Mobile, Admin), ask the AI to: "Design a [TURBOREPO_OR_NX_MONOREPO] structure to share types and components."
- **Feature-Based Folders:** Instead of putting all "Components" in one folder, ask the AI to: "Organize the directory by [BUSINESS_FEATURES] (e.g., `src/modules/auth`, `src/modules/billing`)."
- **The "Rule of 7":** A folder with more than 7 sub-items is hard to scan. Ask the AI to: "Ensure the [DIRECTORY_DEPTH] is balanced and no folder is overcrowded."
---
