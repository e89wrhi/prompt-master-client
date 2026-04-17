# Examples: Decoupled Event-Driven Systems

## 1. E-Commerce Order Fulfillment (Kafka)

```text
Act as a Message Queue Expert. Design an event-driven flow for "Order Placement" using Kafka.

### Context:
- **Event**: `OrderCreated`.
- **Consumers**: Payment Service, Inventory Service, Email Notification Service.
- **Relatibility**: At-least-once delivery required.

### Requirements:
1. Provide the JSON schema for the `OrderCreated` event.
2. Outline the Idempotency logic for the Payment consumer.
3. Show the Mermaid sequence diagram for the message journey.

### Output Constraints:
- Resilient and Technical tone.
- DLQ strategy included.
```

## 2. Real-time Notifications (Redis Pub/Sub)

```text
Act as a Distributed Systems Engineer. Design a real-time notification system for a "Chat App."

### Requirement:
- Use Redis Pub/Sub to push notifications to active WebSocket clients.
- Provide pseudocode for the publisher and listener logic.

### Output Constraints:
- Scalable tone.
```
