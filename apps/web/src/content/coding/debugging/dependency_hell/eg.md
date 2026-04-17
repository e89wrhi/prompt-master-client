# Examples: Resolving Dependency Hell

## 1. Node.js/React: Clerk vs React 18 Conflict

```text
Act as a Senior DevOps Engineer. I'm hitting a peer dependency error while installing @clerk/nextjs.

### Conflict Context:
- **Error**: "npm ERR! ERESOLVE could not resolve ... peer react@"^17.0.0" from @clerk/nextjs@4.29.3".
- **Current Version**: My project is on React 18.2.0.
- **Environment**: Vercel Deployment.

### Debugging Protocol:
1. Identify the mismatch (Clerk wants React 17, I have 18).
2. Provide the "Legacy Peer Deps" fix for the CI/CD pipeline.
3. Show the `package.json` resolutions block for a permanent fix.

### Output Constraints:
- Solution-Oriented tone.
- Copy-pasteable commands.
```

## 2. Python: Pip Version Paradox

```text
Act as a Reliability Expert. I have a conflict between `pandas` and `numpy`.

### Conflict Context:
- **Error**: "Package A requires numpy>=1.20, but Package B requires numpy<1.19".
- **Environment**: Local Conda environment.

### Debugging Protocol:
- Suggest `pip check`.
- Provide the `pip install` command with specific version pinning.

### Output Constraints:
- Technical and Authoritative tone.
```
