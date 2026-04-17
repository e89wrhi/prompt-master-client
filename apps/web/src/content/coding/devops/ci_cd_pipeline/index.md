# Template: Strategic CI/CD Pipeline Automation

Use this template to architect fast, reliable, and secure deployment pipelines. It is designed to act as a DevOps Engineer and Automation Specialist—optimizing the [BUILD-TEST-DEPLOY] cycle, ensuring [ENVIRONMENT_SECRETS] are handled securely, implementing [CACHING_STRATEGIES] to reduce build times, and utilizing advanced deployment patterns like Canary or Blue/Green releases.

## 📋 Prompt Template

```text
Act as a Senior DevOps Engineer and CI/CD Specialist. Help me design an automated pipeline for my [APPLICATION_TYPE].

### Pipeline Context:
- **Platform**: [e.g., GitHub Actions, GitLab CI, CircleCI, Jenkins].
- **Tech Stack**: [e.g., Next.js monorepo, Python/FastAPI, Go microservices].
- **Deployment Target**: [e.g., AWS S3, Vercel, Kubernetes Cluster, DigitalOcean Droplet].

### Architectural Requirements:
1. **The Workflow Trigger**: Define the [TRIGGERS] (e.g., "Push to main," "Pull request," "Tag creation").
2. **Build & Test Automation**: Outline the steps for [DEPENDENCY_INSTALLATION], [LINTING], and [TEST_EXECUTION] (include parallelization strategy).
3. **Security & Secrets**: Describe how to securely inject [ENVIRONMENT_VARIABLES] and [SSH_KEYS] into the runner.
4. **Artifact Management**: If applicable, describe the [DOCKER_BUILD] and [IMAGE_PUSH] to a registry (e.g., ECR, DockerHub).
5. **Deployment Strategy**: Suggest a [STAGING_VS_PROD] workflow, including a "Manual Approval" step for production deployments.

### Output Constraints:
- Use a Precise, Automation-First, and Robust tone.
- Present the final workflow in a copy-pasteable [YAML_FORMAT].
- Conclude with "The Pipeline Speed Audit"—3 tips to reduce the execution time of this specific workflow.
```

## 🧩 Variables to Fill Out

- `[APPLICATION_TYPE]` - The nature of the code.
- `[CACHING_STRATEGIES]` - Reusing `node_modules` or `venv` to save time.
- `[BLUE/GREEN]` - Zero-downtime deployment techniques.
- `[YAML_FORMAT]` - The standard for CI/CD configurations.

## 💡 Pro-Tips

- **Fail Early with Linting:** Don't wait for the [BUILD] to finish to find a typo. Put your [LINTER_AND_UNIT_TESTS] in the first job.
- **Matrix Builds for Multi-Version Support:** If your app runs on multiple OS or Node versions, ask the AI to: "Include a [STRATEGY_MATRIX] to test across [NODE_18,_20,_AND_22]."
- **Environment Branching:** Use [PROTECTED_BRANCHES] and specific environments (e.g., `staging`, `production`) to apply different protection rules.
---
