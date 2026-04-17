# Examples: Production K8s Manifests

## 1. Scalable Go Microservice (Deployment + Service)

```text
Act as a K8s Operator. Design a manifest for a Go-based API called "user-service."

### Context:
- Scale: 3 replicas.
- Resources: 100m CPU / 128Mi RAM requests.
- Service: ClusterIP.

### Requirements:
1. Provide the Deployment YAML.
2. Provide the Service YAML.
3. Include Liveness and Readiness probes checking `/health`.

### Output Constraints:
- YAML format.
- Formal and Infrastructure-Focused tone.
```

## 2. Ingress for Nginx (SSL/TLS)

```text
Act as a Cloud Architect. Provide an Ingress manifest for a domain `api.example.com`.

### Requirement:
- Route traffic to the `user-service`.
- Include annotations for Nginx ingress and cert-manager (Let's Encrypt SSL).

### Output Constraints:
- Readiness Audit included.
```
