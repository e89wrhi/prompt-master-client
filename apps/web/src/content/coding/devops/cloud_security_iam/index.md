# Template: Hardened Cloud Security & IAM Policies

Use this template to design secure, least-privilege access models for your cloud infrastructure. It is designed to act as a Cloud Security Architect—utilizing [IAM_ROLES], strict [POLICIES], and [IDENTITY_FEDERATION] to ensure that every user, service, and automation task has exactly the permissions they need and nothing more.

## 📋 Prompt Template

```text
Act as a Senior Cloud Security Architect and IAM Specialist. Help me design a security policy for [SERVICE/ENVIRONMENT].

### Security Context:
- **Cloud Provider**: [e.g., AWS, GCP, Azure].
- **Entity Identification**: [e.g., An EC2 instance, a Lambda function, a developer's IAM user, an external CI/CD runner].
- **Resource Target**: [e.g., An S3 bucket, a DynamoDB table, a production VPC].

### Policy Requirements:
1. **The Principle of Least Privilege**: List only the [SPECIFIC_ACTIONS] allowed (e.g., `s3:GetObject`, `dynamodb:PutItem`) and avoid the `*` wildcard.
2. **Conditional Access**: Define [CONDITIONS] for the policy (e.g., "Must be within the company IP range," "Must use MFA," "Only during business hours").
3. **Resource-Level Targeting**: Ensure the policy is restricted to specific [ARNs/RESOURCE_IDS] rather than all resources in the account.
4. **Trust Relationship**: If building an IAM Role, define the [TRUST_POLICY] (who is allowed to 'Assume' this role).
5. **Auditing & Logging**: Suggest a [CLOUDWATCH/CLOUDTRAIL] strategy to monitor for unauthorized access attempts.

### Output Constraints:
- Use a Secure, Risk-Averse, and Technical tone.
- Present the final policy in a valid [JSON_FORMAT] for the specific cloud provider.
- Conclude with "The Security Audit"—identify the 2 biggest risks if this policy is misconfigured.
```

## 🧩 Variables to Fill Out

- `[SERVICE / ENVIRONMENT]` - The scope of the security.
- `[SPECIFIC_ACTIONS]` - The "Verb" of the permission.
- `[LEAST_PRIVILEGE]` - The golden rule of cloud security.
- `[JSON_FORMAT]` - The standard for policy definitions.

## 💡 Pro-Tips

- **The Danger of "AdministratorAccess":** NEVER use the default Admin policy for a service. Ask the AI to: "Audit this policy for [PRIVILEGE_ESCALATION] risks."
- **Use Tags for Dynamic Access:** You can grant access to resources based on [TAGS] (e.g., "Allow access to all S3 buckets with tag 'Project: X'"). Ask for a [TAG-BASED_IAM_STRATEGY].
- **Rotate your Keys:** If you must use IAM User Access Keys (try to avoid it), ask for: "An automated [KEY_ROTATION_SCHEDULE] using AWS Lambda or similar."
---
