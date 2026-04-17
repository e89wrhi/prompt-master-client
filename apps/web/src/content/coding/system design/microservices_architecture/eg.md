# Examples: Resilient Microservices Architecture

## 1. E-commerce Decoupling (Monolith to Microservices)

```text
Act as a Principal Architect. Design a microservices strategy for an e-commerce platform.

### Context:
- **Major Domains**: User Management, Orders, Inventory, Payments.
- **Communication**: REST for external, gRPC for internal speed.
- **Goal**: Allow the Inventory team to deploy independently of the Payments team.

### Requirements:
1. Provide a Mermaid Distributed System Map.
2. Define the service boundaries using Domain Driven Design.
3. Suggest a Saga pattern for handling a failed payment during an order.

### Output Constraints:
- Scalable and Formal tone.
- Monolith-to-Microservice Roadmap included.
```

## 2. Real-time Logistics Platform

```text
Act as a Principal Architect. Design a microservices architecture for a logistics fleet.

### Requirement:
- Use Jaeger for distributed tracing to track a "Package Delivery" request through 5 services.
- Define the `Order` and `Shipping` bounded contexts.

### Output Constraints:
- Architecturally-Sound tone.
```
