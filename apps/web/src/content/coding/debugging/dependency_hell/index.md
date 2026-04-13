# Template: Dependency, Build & Config Hell

Use this template when your app refuses to build, compile, or start due to dependency versions, webpack configurations, or environmental mismatches.

## 📋 Prompt Template

```text
Act as a Build Systems and DevOps Expert. I am trapped in a [TOOL_NAME] configuration issue and my project won't compile/start.

### Tooling Details:
- **Build Tool / Bundler**: [e.g., Webpack 5, Vite, Gradle, Maven]
- **Language/Environment**: [e.g., TypeScript/Node 18, Python 3.10]
- **OS**: [e.g., Ubuntu, Mac M2, Windows 11]

### What I ran:
```bash
[PASTE THE START/BUILD COMMAND]
```

### The Error Output:
```text
[PASTE THE ERROR LOG HERE - including any weird peer dependency warnings]
```

### Relevant Config Files:
```json
// [e.g., package.json, tsconfig.json, webpack.config.js]
[PASTE RELEVANT CONFIG HERE]
```

### Task:
1. Identify the exact configuration mismatch, missing peer dependency, or breaking update causing this.
2. Provide the exact terminal commands (e.g., `npm cache clean`, `pip install x==1.2`) to fix the environment.
3. Provide the corrected configuration file snippet.
```

## 🧩 Variables to Fill Out

- `[TOOL_NAME]` - The tool failing (e.g., Babel, TSC, Docker).
- `[Config Files]` - It's incredibly important to paste `package.json` or `requirements.txt` here so the AI sees your exact versions.

## 💡 Pro-Tips
- **Be thorough with config:** If it's a TS project, paste both `tsconfig.json` and `package.json`. The AI often spots conflicting version requirements between `types` and `libraries`.
