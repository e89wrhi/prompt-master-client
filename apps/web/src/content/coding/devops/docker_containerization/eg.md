# Examples: Optimized Dockerization

## 1. Multi-Stage React App (Vite + Nginx)

```text
Act as a Containerization Expert. Dockerize a React app for production.

### Context:
- **Major Need**: Tiny image size and high performance.
- **Stages**:
  - Stage 1: Build the app using Node 20.
  - Stage 2: Serve the static files using Nginx Alpine.

### Requirements:
1. Provide the optimized Dockerfile.
2. Provide a .dockerignore.
3. Ensure Nginx configuration handles client-side routing.

### Output Constraints:
- Performance-Focused tone.
- Layer Audit included.
```

## 2. Multi-Service Compose (MERN Stack)

```text
Act as a Systems Architect. Provide a `docker-compose.yml` for a development environment.

### Context:
- Services: Node.js API (Express), Frontend (React), MongoDB.
- Requirement: Hot-reloading for both local Node and React services.

### Output Constraints:
- Use a commented YAML block.
```
