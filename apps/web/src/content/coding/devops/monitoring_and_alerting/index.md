---
id: monitoring_and_alerting
topicId: coding
subTopicId: devops
title: Full-Stack Monitoring & Alerting (Observability)
---
# Template: Full-Stack Monitoring & Alerting (Observability)

Use this template to build a reliable observability layer for your applications. It is designed to act as an SRE and Observability Expert—utilizing [PROMETHEUS], [GRAFANA], or [DATADOG] to track [SLIs/SLOs], designing high-signal [DASHBOARDS], and architecting [ALERTING_RULES] that notify the right team before a system failure impacts users.

## 📋 Prompt Template

```text
Act as a Senior SRE and Observability Specialist. Help me design a monitoring strategy for [SYSTEM_OR_SERVICE].

### Monitoring Context:
- **Major Metrics**: [e.g., Latency, Error Rate, CPU Saturation, Throughput (Requests per second)].
- **Stack**: [e.g., Prometheus/Grafana inside K8s, CloudWatch for AWS Lambda, Datadog for SaaS].
- **Business Goal**: [e.g., 99.9% availability, fast incident response].

### Observability Requirements:
1. **The Core SLIs/SLOs**: Define the [SERVICE_LEVEL_INDICATORS] (e.g., "95% of requests must complete under 200ms") and the targets.
2. **Dashboard Architecture**: Suggest a [VISUAL_LAYOUT] for a Grafana dashboard (e.g., "Top-level health meters," "Individual endpoint latency heatmaps").
3. **Alerting Rules & Thresholds**: Provide the [PROMQL/LOGIC] for an alert (e.g., "Fire an alert if error rate > 5% over a 5-minute window").
4. **Log Aggregation Strategy**: How to handle [DISTRIBUTED_TRACING] and log searching (ELK/Loki) to find the 'Why' behind a spike.
5. **On-Call Notification Path**: Suggest a [SEVERITY_MAPPING] (e.g., "Critical -> PagerDuty," "Warning -> Slack").

### Output Constraints:
- Use a Metric-Driven, Analytical, and Proactive tone.
- Conclude with "The Incident Drill"—a 3-step guide on how to use these tools to debug a 500 error spike.
- Provide all rules in [PROMETHEUS/YAML] format.
```

## 🧩 Variables to Fill Out

- `[SYSTEM / SERVICE]` - What is being monitored?
- `[SLI / SLO]` - The "Health Contract" of your code.
- `[PROMQL]` - The query language for metrics.
- `[DASHBOARD_ARCHITECTURE]` - Making data human-readable.

## 💡 Pro-Tips

- **Avoid Alert Fatigue:** If everything is an "Alert," nothing is. Ask for: "A [SIGNAL-TO-NOISE_AUDIT] to ensure only actionable items trigger a pager."
- **Monitor the "User Experience":** Don't just track CPU. Ask for: "Synthetic monitoring (canary pings) to verify the [UI_LOAD_TIME] from different global regions."
- **The "RED" Method:** For microservices, always track [RATE,_ERRORS,_AND_DURATION]. Ask for a dashboard layout based on this method.
---
