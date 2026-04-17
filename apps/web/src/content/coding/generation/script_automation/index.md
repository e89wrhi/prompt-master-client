# Template: Intelligent Script & Task Automation

Use this template to create robust, modular scripts for automating repetitive tasks. It is designed to act as a Python/Bash Scripting Expert—implementing [CLI_ARGUMENTS], handling [FILE_SYSTEM_OPERATIONS], integrating [EXTERNAL_APIS], and providing [ERROR_RESILIENCY] to ensure your automations run reliably without manual intervention.

## 📋 Prompt Template

```text
Act as a Senior Automation Engineer and Expert Scripting Specialist. I need to automate the following task: [DESCRIBE_TASK].

### Automation Context:
- **Language**: [e.g., Python, Bash, Node.js, PowerShell].
- **Operating Environment**: [e.g., Linux Cloud Server, Local macOS, Windows CI/CD].
- **Data Source/Target**: [e.g., A folder of images, an external REST API, a local SQL database].

### Script Requirements:
1. **The Modular Logic**: Provide a [CLEAN_CODE_STRUCTURE] with clear functions for each step (e.g., `fetch_data()`, `process_file()`, `upload_results()`).
2. **CLI Argument Support**: Use a library like [ARGPARSE/CLAP/YARGS] to allow users to provide inputs (e.g., `--input-dir`, `--silent`).
3. **Error Management & Logging**: Implement robust [TRY-EXCEPT-LOG] blocks and provide meaningful console output (including a progress bar if the task is long-running).
4. **File System Safety**: If the script modifies files, include [SAFETY_CHECKS] (e.g., Checking if a folder exists, creating backups).
5. **Efficiency Optimization**: If processing large datasets, suggest a [PARALLELIZATION/STREAMING] strategy to avoid memory overflow.

### Output Constraints:
- Use a Practical, Industrial-Grade, and Resilient tone.
- Conclude with "The Automation Checklist"—identifying 3 things that could go wrong (e.g., Network timeout, file permissions) and how the script handles them.
- Provide all code in a single, well-documented file.
```

## 🧩 Variables to Fill Out

- `[DESCRIBE_TASK]` - e.g., Resizing 10,000 images, scraping 500 product pages.
- `[CLI_ARGUMENTS]` - Making the script reusable and dynamic.
- `[ERROR_RESILIENCY]` - Planning for failure.
- `[PARALLELIZATION]` - Using `multiprocessing` or `asyncio`.

## 💡 Pro-Tips

- **The "Dry Run" Mode:** For destructive scripts (like deleting files), always include a `--dry-run` flag that [SHOWS_WHAT_WOULD_HAPPEN] without doing it.
- **Use OS-Independent Paths:** In Python, always use `pathlib` or `os.path.join` to ensure the script runs on [BOTH_WINDOWS_AND_LINUX].
- **Environment Variables for Secrets:** Never hardcode API keys. Ask for: "Logic to load secrets from a [.env] file or system environment."
---
