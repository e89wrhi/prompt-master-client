# Examples: Automated Server Provisioning

## 1. Nginx Reverse Proxy (Ansible)

```text
Act as a Linux System Administrator. Provide an Ansible Playbook to set up Nginx on Ubuntu.

### Context:
- **Goal**: Nginx with SSL (Certbot) serving as a reverse proxy for a Node.js app on port 3000.
- **Security**: Enable UFW with only 80, 443, and 22 open.

### Requirements:
1. Provide the Playbook YAML.
2. Provide the Nginx site configuration template.
3. Include the Fail2Ban setup for SSH protection.

### Output Constraints:
- Ansible Playbook format.
- Secure and Linux-Native tone.
```

## 2. Hardened Ubuntu VPS (Bash Script)

```text
Act as a Security Specialist. Provide a one-click shell script to harden a fresh Ubuntu 22.04 VPS.

### Requirement:
- Create a 'deploy' user, disable root SSH login, and install Docker.

### Output Constraints:
- Methodical tone.
- Post-Provisioning Audit commands included.
```
