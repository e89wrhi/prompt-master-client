---
id: race_condition_concurrency
topicId: coding
subTopicId: debugging
title: Concurrency & Race Conditions
---
# Template: Race Condition & Concurrency Debugging

Use this template to isolate and resolve non-deterministic bugs in multithreaded or asynchronous applications. It is designed to act as a Systems Engineer and Parallel Computing Expert—detecting [DATA_RACES], identifying dangerous [SHARED_STATE] interactions, and providing the thread-safe patterns (Mutexes, Atomic Ops, Channels) required to ensure data consistency under heavy load.

## 📋 Prompt Template

```text
Act as a Systems Engineer and Expert in Multithreading. I have a suspected [RACE_CONDITION/CONCURRENCY_BUG] in my application.

### Bug Context:
- **Observed Behavior**: [e.g., Occasional incorrect totals in the database, "ghost" records, deadlocks under high load].
- **Concurrency Model**: [e.g., Async/Await in Node.js, Goroutines in Go, Threading in C++, WebWorkers].
- **Tech Stack**: [e.g., Rust, Python/Asyncio, Java/Spring].

### Debugging Strategy:
1. **Thread-Safety Audit**: Analyze the provided code for [UNPROTECTED_SNARED_RESOURCES]. Are two processes writing to the same variable at once?
2. **Reproduction Strategy**: Suggest a script or [STRESS_TEST_COMMAND] to reliably trigger the race condition in a local environment.
3. **Synchronization Fix**: Provide the correct [SYNC_PRIMITIVE] to fix the issue (e.g., "Implement a Mutex lock," "Use Atomic integers," "Switch to a message-passing channel").
4. **Deadlock Prevention**: Ensure that adding locks doesn't create a [DEADLOCK] where processes wait for each other infinitely.
5. **Architectural Alternative**: Suggest a [STATELESS_REDESIGN] that removes the need for shared state altogether.

### Output Constraints:
- Use an Authoritative, Technical, and Thread-Safe tone.
- Conclude with "The Concurrency Axiom"—a fundamental rule the developer should follow to avoid this in the future.
- Provide "Before (Unsafe)" and "After (Safe)" code blocks.
```

## 🧩 Variables to Fill Out

- `[SYNC_PRIMITIVE]` - Mutex, Semaphore, Atomic, Channel, Future.
- `[SHARED_STATE]` - Global variables, DB records, Shared memory.
- `[DEADLOCK]` - The "Deadly Embrace" of multiple locks.
- `[STATELESS_REDESIGN]` - The cleanest fix for concurrency problems.

## 💡 Pro-Tips

- **Immutable by Default:** The easiest way to avoid race conditions is to make your data [IMMUTABLE]. Ask the AI to: "Refactor this logic to use [INSTEAD-OF-MUTATING] to create new copies of the state."
- **Check the Database Isolation:** Sometimes the race condition isn't in your code, but in your [DB_TRANSACTION_LEVEL]. Ask for an audit of your "Serializable" vs "Read Committed" settings.
- **The "Check-Then-Act" Trap:** Avoid patterns where you check a condition and then act on it. In concurrent systems, the condition can change between the two steps. Ask for [ATOMIC_COMPARE_AND_SWAP] logic.
---
