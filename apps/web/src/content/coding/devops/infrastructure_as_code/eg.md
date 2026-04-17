# Examples: Scalable Infrastructure as Code

## 1. AWS VPC & S3 (Terraform)

```text
Act as an IaC Specialist. Provide a Terraform configuration for a basic AWS environment.

### Context:
- **Major Resources**: A VPC with two public subnets and a single S3 bucket for assets.
- **Provider**: AWS.
- **Backend**: Configure a local backend for state.

### Requirements:
1. Provide the `main.tf`, `variables.tf`, and `outputs.tf`.
2. Ensure the S3 bucket is private by default.

### Output Constraints:
- HCL format.
- Precise and Modular tone.
```

## 2. Static Site on Azure (Pulumi)

```text
Act as a Senior SRE. Use Pulumi (TypeScript) to provision a static website on Azure Blob Storage.

### Requirement:
- Create the storage account, enable static website hosting, and output the primary endpoint.

### Output Constraints:
- Idempotency check included.
```
