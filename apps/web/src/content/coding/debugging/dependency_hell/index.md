---
id: dependency_hell
topicId: coding
subTopicId: debugging
title: 'Dependency, Build & Config Hell'
---
# Template: Resolving Dependency Hell & Version Conflicts

Use this template to escape complex dependency conflicts and environment-breaking version mismatches. It is designed to act as a Senior DevOps and Reliability Engineer who systematically audits lockfiles, checks peer-dependency trees, and provides the safest command-sequence to restore a stable build without breaking unrelated packages.

## 📋 Prompt Template

```text
Act as a Senior DevOps Engineer and Full-Stack Reliability Expert. Help me resolve a dependency conflict in my [LANGUAGE/FRAMEWORK] project.

### Conflict Context:
- **Error Message**: [PASTE_THE_TERMINAL_ERROR_OR_LOG]
- **Target Package**: [THE_PACKAGE_YOU_ARE_TRYING_TO_INSTALL]
- **Environment**: [e.g., Vercel Production, Local Windows, Docker].

### Debugging Protocol:
1. **The Core Mismatch Identification**: Analyze the error and identify exactly which two [COMPETING_VERSIONS] are causing the freeze (e.g., "React 18 vs Clerk's Peer Dep of React 17").
2. **Lockfile Audit**: Suggest a command to [INSPECT_TREE] (e.g., `npm list`, `pip show`, `cargo tree`) to find where the conflicting package is being inherited from.
3. **The "Clean Slate" Procedure**: Provide the specific [CLEANUP_COMMANDS] for this environment (e.g., deleting node_modules, clearing cache, regenerating the lockfile).
4. **The Resolution Strategy**: Provide 3 prioritized options:
   - **Option A (Safe)**: The version-alignment fix (Updating or Downgrading).
   - **Option B (The Bridge)**: Using a [COMPATIBILITY_FLAG] (e.g., `--legacy-peer-deps`, `overrides` in package.json).
   - **Option C (Hard Reset)**: When and how to manually edit the lockfile (Use with caution).
5. **Verification**: List the [POST-FIX_CHECKS] to ensure the build is truly repaired (e.g., running `npm run build`, checking for runtime crashes).

### Output Constraints:
- Use a Technical, Authoritative, and Solution-Oriented tone.
- Format all commands in copy-pasteable code blocks.
- Conclude with "Prevention Tip"—how to avoid this conflict in the next update.
```

## 🧩 Variables to Fill Out

- `[LANGUAGE / FRAMEWORK]` - e.g., Node/React, Python/Django, Rust/Wasm.
- `[COMPETING_VERSIONS]` - Package A wants X, Package B wants Y.
- `[COMPATIBILITY_FLAG]` - e.g., `npm install --force`.
- `[CLEANUP_COMMANDS]` - e.g., `rm -rf node_modules && rm package-lock.json`.

## 💡 Pro-Tips

- **Manually Editing the Lockfile is Dangerous:** Only do this if [OPTION_A] and [OPTION_B] fail. Ask the AI: "Generate a `package.json` [OVERRIDES/RESOLUTIONS] block before I touch the lockfile."
- **Check the Peer Dependencies:** Most "Hell" comes from a package requiring a [PEER_DEP] that your project already has at a newer version. Ask the AI to "Check the peerDependency section of [PACKAGE_NAME]'s package.json."
- **The Docker Reset:** If you are in Docker, a conflict might be cached in a [LAYER]. Always try `docker system prune` and a build with `--no-cache`.
---
