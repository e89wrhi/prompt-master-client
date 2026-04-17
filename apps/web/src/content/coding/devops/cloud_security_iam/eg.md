# Examples: Hardened Cloud Security

## 1. AWS S3 Private Bucket Policy

```text
Act as a Senior Cloud Security Architect. Design an IAM policy for a private S3 bucket.

### Context:
- **Target**: An EC2 instance running a web server.
- **Goal**: Allow the instance to read files and upload logs, but prevent it from deleting anything.

### Requirements:
1. Use the Principle of Least Privilege (No `*`).
2. Restrict to a specific bucket ARN.
3. Include the "Trust Relationship" allowing the EC2 service to assume the role.

### Output Constraints:
- JSON format.
- Technical and Risk-Averse tone.
```

## 2. Developer Access with MFA (IAM User)

```text
Act as an IAM Specialist. Design a policy for a Lead Developer in a production environment.

### Requirement:
- Allow full access to CloudWatch and Read-Only access to EC2.
- Condition: The user MUST have MFA enabled to use these permissions.

### Output Constraints:
- Identify the 2 biggest risks of misconfiguration.
```
