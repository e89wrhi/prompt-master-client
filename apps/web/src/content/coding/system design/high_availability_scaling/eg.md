# Examples: High Availability & Scaling

## 1. Global Video Streaming Platform (Netflix-style)

```text
Act as a Senior SRE. Design a high-availability architecture for a video streaming site.

### Context:
- **Major Needs**: Ultra-low latency video delivery and 99.99% uptime.
- **Goal**: Handle 1M concurrent viewers during a live event.

### Requirements:
1. Provide a Mermaid diagram showing the Load Balancing and CDN layers.
2. Design a Multi-Region Failover plan for AWS.
3. Suggest an HPA strategy based on network throughput.

### Output Constraints:
- Reliability-Focused and Formal tone.
- Scale-Up Forecast included.
```

## 2. Fintech Core (Transactional Consistency)

```text
Act as a Systems Architect. Design an HA setup for a banking core.

### Requirement:
- Ensure 0% data loss (RPO = 0) during a database failover.
- Use Multi-AZ RDS with Synchronous Replication.

### Output Constraints:
- Scalable tone.
```
