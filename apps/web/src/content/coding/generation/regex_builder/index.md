# Template: High-Precision Regex Architect

Use this template to design, explain, and optimize complex regular expressions. It is designed to act as a String Pattern Expert—utilizing [CAPTURE_GROUPS], [LOOKAHEADS/LOOKBEHINDS], and [NON-BACKTRACKING_LOGIC] to ensure your patterns are accurate, high-performance, and resistant to "Regex Denial of Service" (ReDoS) attacks.

## 📋 Prompt Template

```text
Act as a Senior Developer and Regular Expression Expert. Create a regex pattern to [DESCRIBE_THE_TASK].

### Pattern Context:
- **Target String**: [e.g., A complex email with subdomains, a log file with specific timestamps, a nested HTML tag].
- **Language/Flavor**: [e.g., JavaScript (PCRE), Python (re), Go].
- **Edge Cases**: [e.g., Should not match trailing spaces, must be case-insensitive, must handle special characters].

### Architecture Requirements:
1. **The Pattern**: Provide the [RAW_REGEX] string.
2. **Step-by-Step Breakdown**: Explain exactly what [EVERY_SECTION] of the regex does (e.g., `^` matches the start of the line, `(\d{3})` is a capture group for digits).
3. **Capture Group Map**: Identify the [INDEXES] for specific data extraction (e.g., "Group 1 is the Area Code").
4. **Performance Check**: Identify any [POTENTIAL_BACKTRACKING] issues and provide an optimized version if necessary.
5. **Test Cases**: Provide 3 [MATCHING_STRINGS] and 3 [NON-MATCHING_STRINGS] to verify accuracy.

### Output Constraints:
- Use a Precise, Logical, and Technical tone.
- Present the regex in a high-contrast code block.
- Conclude with "The Regex Playground"—a link to regex101.com or similar with the pattern pre-loaded (if possible).
```

## 🧩 Variables to Fill Out

- `[DESCRIBE_THE_TASK]` - The core pattern matching goal.
- `[CAPTURE_GROUPS]` - Parts of the match you want to keep.
- `[PCRE / RE]` - The specific regex engine.
- `[REDOS_PREVENTION]` - Avoiding catastrophic backtracking.

## 💡 Pro-Tips

- **Be Specific with Anchors:** Always use `^` (Start) and `$` (End) if you want to match the [ENTIRE_STRING]. Without them, you might accidentally match partial substrings.
- **Non-Capturing Groups:** If you only need to group logic but don't need the data, use `(?:...)`. This [SAVES_MEMORY] and improves performance.
- **Verbose Mode (Python/Ruby):** For very long regex, ask for [VERBOSE_MODE] (`/x` or `#`) which allows for comments and whitespace inside the regex for readability.
---
