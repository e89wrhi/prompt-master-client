---
id: microservices_architecture
topicId: coding
subTopicId: system design
title: Resilient Microservices Architecture
---
# Template: Resilient Microservices Architecture

Use this template to decouple your monolith and build a modular, high-performance distributed system. It is designed to act as a Principal Architect—utilizing [DOMAIN_DRIVEN_DESIGN] to find service boundaries, implementing [INTER-SERVICE_COMMUNICATION] (REST/gRPC), and architecting [CENTRALIZED_OBSERVABILITY] to ensure your microservices are easy to maintain, scale, and debug.

## 📋 Prompt Template

```text
Act as a Principal Software Architect. Design a "Microservices Architecture" for [SYSTEM_TO_DECOUPLE].

### Architecture Context:
- **Major Domains**: [e.g., Billing, Inventory, User Profile, Shipping].
- **Communication Protocol**: [e.g., gRPC for internal, REST for external, Async for notifications].
- **Tech Stack diversity**: [e.g., Go for performance-critical services, Python for ML, Node.js for UI-heavy services].

### Architectural Requirements:
1. **Service Boundary Definition**: Use [DOMAIN_DRIVEN_DESIGN] to identify the "Bounded Contexts" for each service.
2. **Communication & Discovery**: Design the [SERVICE_MESH_OR_DISCOVERY] strategy (e.g., Istio, Consul, or simple K8s Service names).
3. **Data Decentralization**: Explian how each service maintains its [OWN_DATABASE] and the strategy for sharing data (e.g., API calls vs Event Sourcing).
4. **Resiliency Patterns**: Implement [CIRCUIT_BREAKERS] and [RETRIES_WITH_BACKOFF] to prevent a single service failure from cascading.
5. **Centralized Observability**: Design a [LOGGING_AND_TRACING_FRAMEWORK] (e.g., OpenTelemetry, Jaeger) to track requests across services.

### Output Constraints:
- Use a Scalable, Formal, and Architecturally-Sound tone.
- Conclude with "The Monolith-to-Microservice Roadmap"—3 steps to start the decoupling process.
- Present the architecture in a [DISTRIBUTED_SYSTEM_MAP] (Mermaid).
```

## 🧩 Variables to Fill Out

- `[SYSTEM_TO_DECOUPLE]` - e.g., An enterprise ERP system, a legacy e-commerce monolith.
- `[DOMAIN_DRIVEN_DESIGN]` - Aligning software with business functions.
- `[CIRCUIT_BREAKERS]` - Stopping the flow to a broken service.
- `[DATA_DECENTRALIZATION]` - The key to microservice independence.

## 💡 Pro-Tips

- **Don't Over-Partition:** Start with [MACROSERVICES]. Only split a service if it has different [SCALING_NEEDS] or a different [DEPLOY_CYCLE]. Ask the AI to: "Justify the split for each proposed service."
- **Use gRPC for Internal Speed:** If performance is key, [GRPC] is 5-10x faster than REST. Ask for a: "[PROTO_FILE_DEFINITION] for inter-service communication."
- **Handle Transactions with Sagas:** Since you can't use ACID across services, use the [SAGA_PATTERN] for long-running transactions (e.g., Order -> Payment -> Inventory). Ask the AI to: "Detail the [COMPENSATING_TRANSACTIONS] for an 'Order Failure' event."
---
