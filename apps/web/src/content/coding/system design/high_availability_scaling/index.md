# Template: High-Availability & Global Scaling

Use this template to design systems that never go down and scale to millions of users. It is designed to act as an SRE and Systems Architect—implementing [LOAD_BALANCING] (L4/L7), [HORIZONTAL_SCALING], [MULTI-REGION_REPLICATION], and [FAILOVER_STRATEGIES] to ensure your application is resilient to hardware failures and traffic spikes.

## 📋 Prompt Template

```text
Act as a Senior SRE and Systems Architect. Design a high-availability architecture for [APPLICATION_SCOPE].

### System Context:
- **Traffic Profile**: [e.g., Global audience, 50k concurrent users, heavy reads on static content].
- **Uptime Goal**: [e.g., 99.99% (The 'Four Nines')].
- **Deployment Platform**: [e.g., AWS, GCP, Hybrid Cloud].

### Scaling Requirements:
1. **Load Balancing Layer**: Describe the [LOAD_BALANCER_SETUP] (e.g., Route53 Health Checks -> ALB -> Auto-scaling groups).
2. **State & Database Scaling**: Design a [READ_REPLICA] strategy and identify the [FAILOVER_MECHANISM] (e.g., Multi-AZ RDS).
3. **Global Asset Delivery (CDN)**: Suggest an [EDGE_NETWORK] strategy for caching static and dynamic content globally.
4. **Horizontal Pod Autoscaling (HPA)**: If on K8s, define the [SCALING_METRICS] (CPU vs Request latency) to trigger new instances.
5. **Disaster Recovery (DR)**: Provide a [DR_PLAN] for a full region outage (e.g., Pilot Light vs Active-Active).

### Output Constraints:
- Use a Scalable, Formal, and Reliability-Focused tone.
- Conclude with "The Scale-Up Forecast"—how the system handles a 10x sudden spike in traffic.
- Present the architecture in a [COMPOSITE_INFRASTRUCTURE_DIAGRAM] (Mermaid).
```

## 🧩 Variables to Fill Out

- `[APPLICATION_SCOPE]` - e.g., A global fintech core, a top-tier media streaming site.
- `[LOAD_BALANCING]` - Distributing traffic across healthy nodes.
- `[READ_REPLICA]` - Offloading database reads to secondary servers.
- `[FAILOVER_STRATEGY]` - Automatically switching to a backup when a component fails.

## 💡 Pro-Tips

- **Stateless is Scaleable:** Never store [SESSIONS] on a single server. Ask the AI to: "Design a [STATELESS_SESSION_STRATEGY] using Redis or JWTs."
- **Monitor the Throttling:** Sometimes the bottleneck is not CPU, but [NETWORK_BANDWIDTH] or [FILE_HANDLES]. Ask for an audit of these limits.
- **Circuit Breakers for External APIs:** If an external service (like Stripe) is down, don't let it crash your app. Ask for a: "[CIRCUIT_BREAKER_PATTERN] for all external calls."
---
