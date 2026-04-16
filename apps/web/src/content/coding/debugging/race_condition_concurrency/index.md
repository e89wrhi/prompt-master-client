---
id: race_condition_concurrency
topicId: coding
subTopicId: debugging
title: Concurrency & Race Conditions
---
# Template: Concurrency & Race Conditions

Use this template when you are experiencing intermittent, difficult-to-reproduce bugs that usually indicate a data race, deadlock, or async timing issue.

## 📋 Prompt Template

```text
Act as a Senior Concurrency Expert. I am facing a difficult [RACE_CONDITION / DEADLOCK / ASYNC_TIMING] bug in my [LANGUAGE] code.

### The Weird Behavior:
- **Expected**: [e.g., "The balance should only decrease by $10"].
- **Actual**: [e.g., "Occasionally, it decreases by $20 or $30 during concurrent requests"].
- **Reproducibility**: [e.g., "Only happens under heavy load, about 1 in 100 times"].

### The Code:
```[LANGUAGE]
[PASTE THE CONCURRENT/ASYNC CODE HERE]
```

### Task:
1. Explain the order of execution that would cause this exact intermittent failure. Show a timeline of thread/async events if it helps visualize the race.
2. Refactor the code to eliminate the race condition. Use appropriate synchronization primitives for my language (e.g., Mutex, Locks, Atomic Operations, or Database Row-Level locking like `SELECT FOR UPDATE`).
3. Explain the trade-offs of your fix (e.g., "This fix introduces a mutex, which might lower throughput by 5%").
```

## 🧩 Variables to Fill Out

- `[LANGUAGE]` - Knowing the language allows the AI to suggest language-specific fixes (e.g., `async/await` queues in JS vs. `sync.Mutex` in Go).
- `[PASTE THE CONCURRENT/ASYNC CODE HERE]` - Be sure to include the database queries if this is a web backend!

## 💡 Pro-Tips
- **Database races:** Many race conditions aren't in memory—they're in the database. If this is a web app, explicitly mention you are using [Database Type] (e.g., Postgres) so the AI suggests database-level row locking.
