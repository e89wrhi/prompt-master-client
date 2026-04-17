# Examples: Advanced Memory Profiling

## 1. Node.js Memory Leak (V8 Heap Dump)

```text
Act as a Performance Engineer. My Node.js API server reaches 2GB RAM and crashes every 4 hours.

### Context:
- **Major Need**: Identify the source of the leak.
- **Hypothesis**: Unclosed database connections or global event listeners.

### Requirements:
1. Provide the command to take a heap dump.
2. Tell me how to find "Retained Objects" in the Chrome DevTools Memory tab.
3. Suggest a fix for a common "Unhandled Promise" leak.

### Output Constraints:
- Precise and Low-Level tone.
- Memory Budget included.
```

## 2. Processing 10GB CSV in Python

```text
Act as a Systems Architect. My Python script crashes when trying to read a 10GB log file.

### Requirement:
- Refactor the code from `data = open('file.csv').read()` to a streaming generator approach.
- Explain "Backpressure" if the script needs to upload the processed data to an API.

### Output Constraints:
- Resource-Focused tone.
```
