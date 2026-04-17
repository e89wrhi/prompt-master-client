# Examples: Full-Stack Monitoring

## 1. Prometheus Alert for API Error Rate (K8s)

```text
Act as an SRE Specialist. Create a Prometheus alerting rule for a Node.js API.

### Context:
- **Rule**: Fire a CRITICAL alert if the HTTP 5xx error rate exceeds 5% for more than 2 minutes.
- **Notification**: PagerDuty for Critical, Slack for Warning.

### Requirements:
1. Provide the PromQL query.
2. Provide the AlertManager YAML configuration.
3. Suggest a 3-step incident drill for when this alert fires.

### Output Constraints:
- YAML format.
- Metric-Driven and Proactive tone.
```

## 2. Grafana Dashboard Layout (SaaS Metrics)

```text
Act as an Observability Expert. Suggest a dashboard layout for a fintech application.

### Requirement:
- Focus on the "RED" method (Rate, Errors, Duration).
- Include a specific panel for "Database Transaction Latency."

### Output Constraints:
- Analytical tone.
```
