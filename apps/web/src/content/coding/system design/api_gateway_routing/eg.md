# Examples: Intelligent API Gateway Design

## 1. Banking API Gateway (High Security)

```text
Act as a Senior Cloud Architect. Design an API Gateway for an Online Banking platform.

### Context:
- **Services**: Login, Balance, Transfers, Statements.
- **Goal**: Offload JWT validation and implement strict IP whitelisting for the "Transfers" service.

### Requirements:
1. Provide a Mermaid topology diagram showing the gateway.
2. Show the Nginx or AWS Gateway configuration for role-based routing (e.g., `/transfers` requires `scope:admin`).
3. Describe the Rate Limiting policy to prevent brute-force attacks on the `/login` endpoint.

### Output Constraints:
- Authoritative and Infrastructure-Focused tone.
- Latency Audit included.
```

## 2. Public Weather API (High Traffic)

```text
Act as a Networking Expert. Design a Traefik or Kong configuration for a public weather data API.

### Requirement:
- Route traffic to 50 individual weather stations (containers).
- Implement a 1000 requests/day "Freemium" rate limit per API Key.

### Output Constraints:
- Scalable tone.
```
