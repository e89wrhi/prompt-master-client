# 💻 Coding Prompts: The Engineering Guide

This is not just a collection of snippets; it is a systematic framework for AI-assisted software engineering. By using these prompts, you transition from "guessing" to "architecting" with Large Language Models.

---

## 🛠️ The AI Developer's Workflow

To get the most out of these prompts, follow this four-stage pipeline:

1.  **Context Injection (Discovery):** Before asking for code, provide the LLM with your stack, constraints, and current architectural patterns.
2.  **Modular Construction (Implementation):** Use prompts from `/generation/` to build components in isolation to prevent context drift.
3.  **Refined Logic (Optimization):** Pass implemented code back with `/optimization/` prompts for Big-O analysis and refactoring.
4.  **Verification (Testing):** Use the implemented logic to generate unit and integration tests.

---

## 🧭 Comprehensive Knowledge Map

### 🔌 [API Design & Integration](./api/)
**Goal:** Build resilient interfaces that follow REST/GraphQL best practices.
*   **Key Techniques:** JSON Schema grounding, Auth middleware simulation.
*   **Templates:** CRUD definitions, Webhook handlers, API Documentation.

### 🐞 [Debugging](./debugging/)
**Goal:** Reduce "fixed one thing, broke ten" syndrome.
*   **Key Techniques:** Chain-of-Thought debugging, Rubber Ducking with AI.
*   **Patterns:** Stack trace analysis, logical isolation.

### ♾️ [DevOps & Infrastructure](./devops/)
**Goal:** Move from "it works on my machine" to "it works in production."
*   **Key Techniques:** Dockerfile hardening, YAML validation.
*   **Templates:** CI/CD Pipelines (Github Actions/GitLab), K8s Configs.

### ⚙️ [Generation & Boilerplate](./generation/)
**Goal:** Skip the boring parts.
*   **Key Techniques:** Zero-shot boilerplate, Skeleton-first generation.
*   **Templates:** React/Next.js components, Python FastAPI skeletons, Rust services.

---

## 💎 Core Principles for High-Performance Coding Prompts

### 1. The Role-Mission-Constraint (RMC) Framework
Every prompt in this library follows the RMC framework:
*   **Role:** "Act as a Lead Backend Engineer specialized in Go."
*   **Mission:** "Design a thread-safe connection pool."
*   **Constraints:** "No external dependencies, max 100 lines, must include unit tests."

### 2. Output Formatting Grounding
Always tell the AI how to format the code (e.g., "Provide only the code block," or "Include JSDoc comments for every function").

### 3. The "Chain-of-Architecting"
For complex tasks, use prompts that force the AI to explain its design decisions *before* writing the code.

---
[← Back to Root](../README.md)
