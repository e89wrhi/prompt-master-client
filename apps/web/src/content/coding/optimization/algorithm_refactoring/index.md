---
id: algorithm_refactoring
topicId: coding
subTopicId: optimization
title: Strategic Algorithm Refactoring
---
# Template: Strategic Algorithm Refactoring

Use this template to improve the performance and efficiency of your code's core logic. It is designed to act as a Computer Scientist and Algorithm Architect—analyzing [BIG_O_COMPLEXITY], identifying [NESTED_LOOP_BOTTLENECKS], selecting [SUPERIOR_DATA_STRUCTURES], and implementing [MEMOIZATION/CACHING] to ensure your code scales linearly with data growth.

## 📋 Prompt Template

```text
Act as a Computer Scientist and Algorithm Architect. Refactor the following [CODE_LOGIC] for maximum efficiency.

### Logic Context:
[PASTE_CODE_HERE]

### Optimization Requirements:
1. **Complexity Audit**: Identify the current [TIME_AND_SPACE_COMPLEXITY] (e.g., O(N^2) time) and explain the primary bottleneck.
2. **Data Structure Swap**: Suggest a better [DATA_STRUCTURE] to solve the problem (e.g., "Switch the Array search to a HashMap lookup for O(1) average time").
3. **The Optimized Pattern**: Rewrite the code using a [HIGH-PERFORMANCE_PATTERN] (e.g., Two-pointers, Sliding Window, Dynamic Programming).
4. **Memory Management**: If processing large data, describe how to reduce the [PEAK_MEMORY_USAGE] (e.g., "Use a generator instead of a list").
5. **Final Complexity Goal**: State the [TARGET_COMPLEXITY] of the new version.

### Output Constraints:
- Use an Analytical, Mathematically-Sound, and Performance-Centric tone.
- Provide a "Before & After" comparison for the core logic.
- Conclude with "The Scaling Benchmark"—a 1-sentence estimate of how much faster this will be for a dataset 1,000x larger.
```

## 🧩 Variables to Fill Out

- `[CODE_LOGIC]` - The function or snippet you want to optimize.
- `[BIG_O_COMPLEXITY]` - The mathematical notation of performance.
- `[MEMOIZATION]` - Storing results of expensive function calls.
- `[DATA_STRUCTURE]` - Set, Map, Heap, Tree, etc.

## 💡 Pro-Tips

- **The N^2 Alarm:** Whenever you see a [LOOP_INSIDE_A_LOOP], assume it can be optimized. Ask the AI to: "Eliminate the nested loop using a [FREQUENCY_MAP] or [SORTING]."
- **Trading Space for Time:** Sometimes you can make an algorithm faster by using [MORE_RAM] (e.g., an extra Cache). Ask the AI: "Give me the 'Speed-First' version and the 'Memory-First' version."
- **Benchmark First:** Premature optimization is the root of all evil. Ask the AI to: "Suggest a [MICRO-BENCHMARK_SCRIPT] to measure the actual performance gain."
---
