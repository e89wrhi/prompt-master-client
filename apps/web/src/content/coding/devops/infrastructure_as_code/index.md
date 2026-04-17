---
id: infrastructure_as_code
topicId: coding
subTopicId: devops
title: Scalable Infrastructure as Code (IaC)
---
# Template: Scalable Infrastructure as Code (IaC)

Use this template to provision and manage cloud resources with code. It is designed to act as a Site Reliability Engineer (SRE)—utilizing [TERRAFORM], [PULUMI], or [CLOUDFORMATION] to build modular, [IDEMPOTENT] infrastructure, managing [STATE_FILES] securely, and ensuring that your cloud environment is reproducible, versioned, and easily scalable.

## 📋 Prompt Template

```text
Act as a Senior SRE and IaC Specialist. Help me provision a [CLOUDR_ENVIRONMENT] using [IAC_TOOL].

### Infrastructure Context:
- **Major Resources**: [e.g., A VPC with Public/Private subnets, an RDS Instance, an ECS Cluster, S3 Buckets].
- **Cloud Provider**: [e.g., AWS, GCP, Azure].
- **Scaling Needs**: [e.g., Auto-scaling based on CPU, multi-region support].

### Architectural Requirements:
1. **Module Design**: Provide a modular code structure (e.g., `networking`, `database`, `compute`).
2. **State & Backend Management**: Describe how to securely store the [STATE_FILE] (e.g., S3 backend with DynamoDB locking).
3. **Variable & Secret Injection**: Show how to handle [ENVIRONMENT-SPECIFIC_VARS] (Dev/Prod) and protect [SENSITIVE_DATA].
4. **Networking Isolation**: Ensure that only [SPECIFIC_SECURITY_GROUPS] have access to the internal resources.
5. **Provisioning Logic**: Provide the [IAC_CODE_SNIPPETS] for the primary resources.

### Output Constraints:
- Use a Precise, Modular, and Reprodicible tone.
- Conclude with "The Idempotency Check"—how to verify that running the code twice doesn't cause unintended changes.
- Provide all code in high-fidelity [HCL/YAML/TS] format.
```

## 🧩 Variables to Fill Out

- `[IAC_TOOL]` - Terraform, Pulumi, CloudFormation, CDA.
- `[IDEMPOTENT]` - The ability to run the same code multiple times with the same result.
- `[STATE_FILE]` - The "Memory" of what exists in the cloud.
- `[MODULE_DESIGN]` - Reusable infrastructure components.

## 💡 Pro-Tips

- **Lock your Versions:** Always specify the [PROVIDER_VERSIONS] to prevent breaking changes in your production infra. Ask the AI to: "Include a `required_providers` block."
- **Use Outputs for Tracing:** Always define [OUTPUTS] for important resource IDs (e.g., `vpc_id`, `db_endpoint`) to make the infrastructure easy to debug and integrate.
- **Drift Detection:** Ask the AI to: "Explain how to perform drift detection to ensure the [LIVE_CLOUD] still matches the code."
---
