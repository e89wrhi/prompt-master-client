# Template: Expert Stack Trace Analysis

Use this template to decipher cryptic error logs and find the "Needle in the Haystack" of complex runtime failures. It is designed to act as a Senior Debugger—reading traces from [BOTTOM_TO_TOP], isolating [USER_CODE] from [INTERNAL_LIBRARY_FRAMES], and mapping minified production errors back to their original source using [SOURCE_MAPS] and [LOGGING_CONTEXT].

## 📋 Prompt Template

```text
Act as a Senior Debugger and Runtime Expert. Analyze the following [STACK_TRACE] and help me find the root cause.

### Error Submission:
[PASTE_FULL_STACK_TRACE_HERE]

### Analysis Protocol:
1. **The Entry Point**: Identify exactly where the error entered my [USER_CODE] (ignore the internal node_modules/library frames).
2. **Variable State Reconstruction**: Based on the [METHOD_NAMES] in the trace, hypothesize what the state of [CORE_VARIABLES] was at the time of failure (e.g., "Was 'user' null at line 45?").
3. **Internal vs External**: Distinguish if the crash happened because of a [LOGIC_ERROR] in my code or an [UNHANDLED_REJECTION] from a 3rd party dependency.
4. **Source Map Correlation**: If the trace is minified (e.g., `main.js:1:4532`), explain how to map this back to the readable source.
5. **The Structural Fix**: Suggest a change to the [CODE_STRUCTURE] (e.g., "Add an error boundary," "Use optional chaining," "Implement a try/catch block") to prevent this specific crash.

### Output Constraints:
- Use an Analytical, Runtime-Focused, and Decisive tone.
- Conclude with "The Debugger's Verdict"—a 1-sentence summary of why the code died.
- Provide a "Proactive Guard" code snippet to catch this error before it hits the stack.
```

## 🧩 Variables to Fill Out

- `[STACK_TRACE]` - The raw logs from the crash.
- `[USER_CODE]` - The code you actually wrote.
- `[UNHANDLED_REJECTION]` - Asynchronous errors that weren't caught.
- `[OPTIONAL_CHAINING]` - The `?.` syntax that prevents many crashes.

## 💡 Pro-Tips

- **Read the Trace Backwards:** The top of the stack is where the error [THREW], but the middle of the stack is where the [LOGIC_DIED]. Look for the first line that references YOUR filename.
- **Trace the "Silent" Failures:** Sometimes an error is caught but [LOGGED_INCORRECTLY]. Ask the AI to: "Enhance my Global Error Handler to provide more context (Request ID, User ID)."
- **Identify Version Mismatch:** If an error happens in a library function that "should work," ask the AI to: "Check if my version of [LIBRARY_NAME] is compatible with the latest [ENGINE_VERSION]."
---
