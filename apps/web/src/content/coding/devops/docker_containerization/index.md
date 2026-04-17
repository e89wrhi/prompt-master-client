---
id: docker_containerization
topicId: coding
subTopicId: devops
title: Optimized Docker Containerization
---
# Template: Optimized Docker Containerization

Use this template to build production-ready, ultra-small, and secure Docker images. It is designed to act as a Containerization Expert—implementing [MULTI-STAGE_BUILDS], minimizing [LAYER_COUNT], utilizing [DISTROLESS/ALPINE] base images, and ensuring proper [SECURITY_POLICIES] (e.g., non-root users) for your applications.

## 📋 Prompt Template

```text
Act as a Senior Containerization Expert and Systems Architect. Help me dockerize my [APPLICATION_TYPE].

### Container Context:
- **Base Tech**: [e.g., Node.js 20, Python 3.11, Rust, Go].
- **Production Needs**: [e.g., Minimal image size, fast cold starts, CPU-heavy processing].
- **Environment**: [e.g., Development with hot-reload, Production on AWS Fargate].

### Architectural Requirements:
1. **Multi-Stage Dockerfile**: Provide a Dockerfile that uses [STAGES] (Build vs Run) to keep the final image as small as possible.
2. **Layer Optimization**: Group [RUN_COMMANDS] effectively to leverage the Docker cache.
3. **The .dockerignore Strategy**: Provide a `.dockerignore` file to exclude [UNTACKED_FILES] (e.g., node_modules, .git, .env).
4. **Security Hardening**: Ensure the container runs as a [NON-ROOT_USER] and describe how to handle [SECURE_ENV_VARS].
5. **Local Development (Docker Compose)**: Provide a `docker-compose.yml` for a [MULTI-SERVICE_ENVIRONMENT] (e.g., App + Postgres + Redis).

### Output Constraints:
- Use a Technical, Efficient, and Performance-Focused tone.
- Conclude with "The Layer Audit"—calculate the approximate [IMAGE_SIZE] reduction from these optimizations.
- Provide all code in copy-pasteable blocks.
```

## 🧩 Variables to Fill Out

- `[APPLICATION_TYPE]` - The app being containerized.
- `[MULTI-STAGE_BUILDS]` - Separating the build environment from the runtime.
- `[NON-ROOT_USER]` - Critical for production security.
- `[ALPINE / DISTROLESS]` - Lightweight base images.

## 💡 Pro-Tips

- **The "Context" size matters:** If your build is slow, check your [BUILD_CONTEXT]. A large `node_modules` folder being sent to the Docker daemon every time is the #1 killer of speed.
- **Pin your Versions:** Never use `node:latest`. Always use specific [CONTENT_HASHES] or version numbers (e.g., `node:20.11-alpine`) for reproducibility.
- **Leverage BuildKit:** Use modern Docker features like `mount=type=cache` for [PACKAGE_MANAGERS] (npm/pip) to speed up sequential builds.
---
