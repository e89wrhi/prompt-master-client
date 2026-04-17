---
id: api_gateway_routing
topicId: coding
subTopicId: system design
title: Intelligent API Gateway & Routing Design
---
# Template: Intelligent API Gateway & Routing Design

Use this template to design a robust entry point for your distributed systems. It is designed to act as a Cloud Architect and Networking Expert—architecting [REQUEST_ROUTING], implementing [RATE_LIMITING] protection, offloading [AUTHENTICATION] from microservices, and utilizing [SERVICE_DISCOVERY] to ensure your traffic is distributed efficiently and securely.

## 📋 Prompt Template

```text
Act as a Senior Cloud Architect and Networking Expert. Design an "API Gateway" for the following [SYSTEM_OVERVIEW].

### Gateway Context:
- **Service Topology**: [e.g., 5 microservices (Users, Payments, Catalog, Search, Auth)].
- **Platform**: [e.g., AWS API Gateway, NGINX, Kong, Traefik].
- **Security Requirements**: [e.g., OAuth2 verification, IP Whitelisting, WAF protection].

### Architectural Requirements:
1. **The Routing Table**: Map the [URL_PATHS] to their respective backend services (e.g., `/api/v1/payments/*` -> `payment-service-cluster`).
2. **Security Offloading**: Describe how the gateway handles [JWT_VALIDATION] or API Key checks before traffic hits the internal network.
3. **Throttling & Resiliency**: Design a [RATE_LIMITING_POLICY] (e.g., 100 requests/sec per API Key) and include [CIRCUIT_BREAKER] logic for slow services.
4. **Header Transformation**: Suggest specific [REQUEST/RESPONSE_HEADERS] to inject (e.g., `X-User-Id`, `X-Correlation-Id`).
5. **SSL & Termination**: Describe the [CERTIFICATE_MANAGEMENT] strategy (e.g., AWS ACM, Let's Encrypt).

### Output Constraints:
- Use a Scalable, Authoritative, and Infrastructure-Focused tone.
- Present the logic in a [TOPOLOGY_DIAGRAM] (Mermaid) and configuration snippet (YAML/Conf).
- Conclude with "The Latency Audit"—identifying the 2 biggest costs of using a gateway and how to minimize them.
```

## 🧩 Variables to Fill Out

- `[SYSTEM_OVERVIEW]` - The collection of services behind the gate.
- `[REQUEST_ROUTING]` - The "Map" of the internet.
- `[AUTHENTICATION_OFFLOADING]` - Protecting the core without repeating code.
- `[SERVICE_DISCOVERY]` - Finding the right IP for a service name.

## 💡 Pro-Tips

- **The Correlation ID is King:** For debugging distributed systems, ensuring every request has a [X-CORRELATION-ID] is mandatory. Ask the AI to: "Include logic for generating and passing correlation IDs to downstream services."
- **Fail Fast with WAF:** Use a [WEB_APPLICATION_FIREWALL] at the gateway level to block SQL injection and cross-site scripting before it even enters your code.
- **Canary Routing:** Use the gateway to route [5%_OF_TRAFFIC] to a new version of a service. Ask for a: "Canary rollout configuration."
---
