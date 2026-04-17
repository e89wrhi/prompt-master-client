---
id: memory_leak_hunting
topicId: coding
subTopicId: debugging
title: Memory Leak & Performance Hunting
---
# Template: Advanced Memory Leak Hunting

Use this template to identify, isolate, and fix memory leaks in high-performance applications. It is designed to act as a Performance Engineer who analyzes [HEAP_DUMPS], identifies detached DOM nodes, uncleaned listeners, or stale closures, and provides the architectural code fixes required to ensure your app stays under its memory budget during long-running sessions.

## 📋 Prompt Template

```text
Act as a Senior Performance Engineer and System Architect. Help me hunt a memory leak in my [LANGUAGE/ENVIRONMENT] application.

### Leak Symptoms:
- **Observed Behavior**: [e.g., RAM usage grows steadily until a crash, slowing down over 2 hours].
- **Suspected Area**: [e.g., The React list component, the Node.js websocket server].
- **Tech Stack**: [e.g., Next.js, Go, Python/FastAPI].

### Debugging Protocol:
1. **The "Usual Suspects" Audit**: Check code for the 3 most common leak patterns in [LANGUAGE]:
   - [LEAK_PATTERN_1] (e.g., Uncleaned `setInterval` or `addEventListener`).
   - [LEAK_PATTERN_2] (e.g., Massive closures holding onto large objects).
   - [LEAK_PATTERN_3] (e.g., Global variables or long-lived caches).
2. **Heap Snapshot Analysis**: Tell me exactly which [INSTRUMENTATION_TOOL] to use (e.g., Chrome DevTools Memory Tab, Node.js `--inspect`, Python `tracemalloc`) and what to look for in the diff.
3. **Detached Node Identification**: In UI contexts, provide a script to check for [DETACHED_DOM_NODES] that are still in memory but not in the document.
4. **Code Refactor**: Provide a "Before & After" code example showing how to properly [CLEAN_UP_RESOURCES] (e.g., using `AbortingController`, `useEffect` cleanup return, or `WeakMap`).
5. **Load Testing**: Suggest a [STRESS_TEST_COMMAND] to reproduce the leak rapidly in a local environment.

### Output Constraints:
- Use a Precise, Analytical, and Performance-Focused tone.
- Conclude with "The Garbage Collector's Warning"—an explanation of why the [GC] didn't automatically fix this.
- Provide all code in copy-pasteable blocks.
```

## 🧩 Variables to Fill Out

- `[LANGUAGE / ENVIRONMENT]` - e.g., JavaScript (Browser), Node.js (Server), C++ (Embedded).
- `[LEAK_PATTERN]` - The language-specific common errors.
- `[INSTRUMENTATION_TOOL]` - The profiler of choice.
- `[DETACHED_DOM_NODES]` - Objects held in memory that can't be GC'd.

## 💡 Pro-Tips

- **Closures are the Silent Killers:** If a function inside another function holds a reference to a large [VARIABLE], that variable cannot be cleared until the outer function is gone. Ask the AI to "Audit my nested function scopes for massive variable capture."
- **Use WeakMaps for Caching:** If you need a cache but don't want to leak, use a [WEAKMAP] in JS or its equivalent. This allows keys to be GC'd if they are no longer used elsewhere. Ask the AI to "Convert this global object-based cache into a WeakMap-based one."
- **The "Three Snapshots" Rule:** Take a snapshot, do the action, take another, do it again, take a third. The [GROWTH] between 2 and 3 is your leak.
---
