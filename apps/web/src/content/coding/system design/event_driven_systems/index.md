# Template: Decoupled Event-Driven Architecture

Use this template to design resilient, distributed systems that communicate through messages. It is designed to act as a Message Queue Expert and Distributed Systems Engineer—utilizing [PRODUCER-CONSUMER] patterns, [PUB/SUB] messaging (Kafka/RabbitMQ), ensuring [IDEMPOTENCY] in every consumer, and architecting [DEAD_LETTER_QUEUES] to handle system failures gracefully.

## 📋 Prompt Template

```text
Act as a Senior Message Queue Expert and Distributed Systems Engineer. Design an "Event-Driven System" for [SYSTEM_PROCESS].

### System Context:
- **Major Event**: [e.g., A customer places an order, a user uploads a video, a sensor detects smoke].
- **Platform**: [e.g., Apache Kafka, RabbitMQ, AWS SQS/SNS, Redis Pub/Sub].
- **Reliability Needs**: [e.g., At-least-once delivery, exactly-once delivery, high-throughput].

### Architectural Requirements:
1. **The Core Event Loop**: Describe the [PRODUCER] (who starts the event) and the [CONSUMERS] (who react to it).
2. **Message Content (Schema)**: Define the [JSON_PAYLOAD] for the event (e.g., `OrderPlacedEvent` with `orderId` and `timestamp`).
3. **Idempotency Logic**: Explain how the consumer handles [DUPLICATE_MESSAGES] without side effects (e.g., only processing an order once).
4. **Error Handling (DLQ)**: Design a [DEAD_LETTER_QUEUE] strategy for when a consumer fails to process a message.
5. **Eventual Consistency**: Describe how the system handles [TEMPORARY_DESYNC] between services (e.g., The inventory service hasn't updated yet).

### Output Constraints:
- Use a Scalable, Resilient, and Technical tone.
- Conclude with "The Message Journey"—a Mermaid sequence diagram of a single event flow.
- Provide pseudocode for a [IDEMPOTENT_CONSUMER] logic.
```

## 🧩 Variables to Fill Out

- `[SYSTEM_PROCESS]` - e.g., Order fulfillment, Log analysis, Real-time chat.
- `[IDEMPOTENCY]` - Ensuring a message is processed exactly once logically.
- `[DEAD_LETTER_QUEUE]` - The "Infirmary" for failed messages.
- `[EVENTUAL_CONSISTENCY]` - Accepting that the world isn't always in sync.

## 💡 Pro-Tips

- **Keep Messages Small:** Only send the [ENTITY_ID] and the [CHANGE_TYPE]. Let the consumer fetch more data if needed. Ask the AI to: "Audit the [MATCH_SIZE] of the event payload."
- **Use At-Least-Once Delivery:** It is easier to build for [AT-LEAST-ONCE] with idempotency than it is to build for Exactly-Once. Ask for: "A [RETRY_BACKOFF_STRATEGY] for the consumer."
- **Monitor Queue Depth:** If your queue starts growing, your consumers are too slow. Ask for: "A [HORIZONTAL_AUTOSCALING] strategy for consumers based on queue depth."
---
