# Template: Memory Leak & Performance Hunting

Use this template when your application is consuming too much RAM/CPU over time, and you need the AI to identify potential leak vectors or O(N^2) bottlenecks.

## 📋 Prompt Template

```text
Act as a Performance and Systems Engineer. I suspect a [MEMORY_LEAK / CPU_BOTTLENECK] in my [LANGUAGE] system.

### Symptoms:
- **Observation**: [e.g., "Memory usage grows by 10MB every minute during load"].
- **Trigger**: [e.g., "It only happens when the batch-processing job runs"].
- **Tooling Used**: [e.g., "Chrome DevTools Heap Snapshot", "Datadog Profiler"].

### The Suspect Code (Module/Function):
```[LANGUAGE]
[PASTE SUSPECT CODE HERE]
```

### Task:
1. Analyze the provided code for common leak patterns (e.g., unclosed connections, global array append, event listener accumulation, closures retaining scope).
2. Point out the exact variables or references that are likely failing to be garbage collected (or causing CPU spikes).
3. Rewrite the code using memory-safe or highly-optimized patterns.
4. Tell me exactly how I would write a test or use a profiler to prove your fix worked.
```

## 🧩 Variables to Fill Out

- `[MEMORY_LEAK / CPU_BOTTLENECK]` - Specify whether it's RAM or CPU bound.
- `[LANGUAGE]` - The language (e.g., Go, C#, Node.js).
- `[PASTE SUSPECT CODE HERE]` - Paste the loop, worker, or interval handling the heavy load.

## 💡 Pro-Tips
- **Event Listeners & Closures:** In JavaScript, explicitly ask the AI to check for detached DOM nodes and uncleared event listeners.
- **Connection Pools:** In backend languages (Java, Go, DB), ask it to verify you aren't leaving DB connections or Streams open.
