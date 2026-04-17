# Examples: Race Condition & Concurrency Debugging

## 1. Node.js Singleton State Corruption

```text
Act as a Systems Engineer. I have a Node.js singleton that tracks "Current Active Users," but the count keeps getting out of sync.

### Context:
- Multiple async requests increment and decrement a `totalUsers` variable.
- Under high load, the number becomes negative or inconsistent.

### Strategy:
- Provide a thread-safe increment/decrement pattern using a queue or atomic-like logic.
- Explain why Node.js "Single Threaded" nature doesn't prevent this async race.

### Output Constraints:
- Before (Unsafe) vs After (Safe) blocks.
```

## 2. Go Goroutine Data Race

```text
Act as a Go Concurrency Expert. I'm hitting a "Data Race" warning in my Go tests.

### Requirement:
- Audit the use of a shared Map across multiple goroutines.
- Suggest using `sync.Map` or a Channel-based communication strategy.

### Output Constraints:
- Thread-Safe tone.
```
