---
id: stack_trace_analysis
topicId: coding
subTopicId: debugging
title: Stack Trace & Error Analysis
---
# Template: Stack Trace & Error Analysis

Use this template when you're faced with a massive, cryptic stack trace and need the AI to isolate the root cause without hallucinating.

## 📋 Prompt Template

```text
Act as a Senior Debugging Expert. I have encountered a fatal error in my [LANGUAGE/FRAMEWORK] application. 

### Context:
- **What I was trying to do**: [Explain the action, e.g., "Uploading a 5MB image to S3"].
- **What actually happened**: [Explain the failure, e.g., "The app crashed after 30 seconds"].
- **Recent Changes**: [Mention any recent commits or library updates, or say "None"].

### The Error & Stack Trace:
```[LANGUAGE]
[PASTE ENTIRE STACK TRACE HERE]
```

### The Suspect Code:
```[LANGUAGE]
[PASTE THE FILE CONTENT WHERE IT FAILED]
```

### Task:
1. Identify the exact line or block of code triggering the failure.
2. Explain *why* it failed in 1-2 sentences.
3. Provide the corrected code.
4. Suggest a preventative measure (e.g., adding validation, increasing timeout) so this doesn't happen again.
```

## 🧩 Variables to Fill Out

- `[LANGUAGE/FRAMEWORK]` - e.g., Node.js, Python/Django.
- `[Explain the action / failure]` - The user's intent vs. reality.
- `[PASTE ENTIRE STACK TRACE HERE]` - Do not truncate the stack trace unless it's thousands of lines.

## 💡 Pro-Tips
- **Paste the surrounding code:** AI is decent at guessing based on a trace, but giving it the exact suspect file guarantees it writes a drop-in fix.
- **Always ask for preventative measures:** Don't just fix the bug; use the AI to bulletproof the area around the bug.
