# Template: Production Kubernetes Manifests

Use this template to design scalable, self-healing, and production-ready Kubernetes environments. It is designed to act as a Kubernetes Operator—architecting [DEPLOYMENTS], managing [SERVICES], enforcing [RESOURCE_QUOTAS] (CPU/RAM), and implementing [INGRESS_CONFIGS] to ensure that your microservices stay healthy and accessible under any load.

## 📋 Prompt Template

```text
Act as a Senior Kubernetes Operator and Cloud Architect. Help me design the manifests for [SERVICE_NAME].

### Cluster Context:
- **Deployment Type**: [e.g., Stateless Web App, Stateful Database, Background Worker].
- **Scaling Expectations**: [e.g., 2 replicas min, Auto-scaling up to 10, high-traffic Ingress].
- **Tech Stack**: [e.g., Go microservice, Node.js API].

### Manifest Requirements:
1. **Deployment Architecture**: Provide the [DEPLOYMENT_YAML], including [REPLICA_COUNT], [STRATEGY] (RollingUpdate vs Recreate), and [POD_LOGIC].
2. **Resource Management**: Strictly define [REQUESTS_AND_LIMITS] for CPU and Memory to prevent cluster destabilization.
3. **Networking & Service**: Define a [SERVICE_YAML] (ClusterIP vs LoadBalancer) to expose the pods.
4. **Configuration & Secrets**: Describe how to inject [CONFIGMAPS] and [K8S-SECRETS] as environment variables.
5. **Ingress & External Access**: Provide the [INGRESS_YAML] for routing external traffic, including SSL/TLS (cert-manager) support.

### Output Constraints:
- Use a Scalable, Formal, and Infrastructure-Focused tone.
- Conclude with "The Readiness Audit"—detail the [LIVENESS_AND_READINESS_PROBES] required to ensure zero-downtime restarts.
- Present all YAML in standard, copy-pasteable blocks.
```

## 🧩 Variables to Fill Out

- `[SERVICE_NAME]` - The app in the pod.
- `[RESOURCE_QUOTAS]` - Preventing "Noisy Neighbors" in the cluster.
- `[LIVENESS_AND_READINESS]` - The "Health Checks" of K8s.
- `[INGRESS_CONFIG]` - The gateway to the cluster.

## 💡 Pro-Tips

- **Zero-Downtime with Probes:** Never deploy without [READINESS_PROBES]. It prevents the cluster from sending traffic to a pod before it's ready. Ask for: "Specific [HTTP_GET_PROBES] for this service."
- **Sidecar Containers:** If you need logging or proxying, ask for a [SIDECAR_PATTERN] in the pod spec.
- **HPA is Mandatory:** For high-traffic apps, ask the AI to: "Include a [HORIZONTAL_POD_AUTOSCALER] manifest based on 70% CPU utilization."
---
