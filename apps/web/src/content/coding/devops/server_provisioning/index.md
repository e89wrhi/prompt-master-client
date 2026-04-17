---
id: server_provisioning
topicId: coding
subTopicId: devops
title: Secure & Automated Server Provisioning
---
# Template: Secure & Automated Server Provisioning

Use this template to set up fresh Linux servers with speed and consistency. It is designed to act as a Linux System Administrator and Security Engineer—utilizing [ANSIBLE], [BASH_SCRIPTS], or [CLOUD-INIT] to automate [OS_HARDENING], package installation, [FIREWALL_CONFIGS], and [SYSTEMD_SERVICE] creation to ensure your bare-metal or VPS environments are secure from the first minute.

## 📋 Prompt Template

```text
Act as a Linux System Administrator and Security Specialist. Help me provision a [DISTRO] server for [USE_CASE].

### Server Context:
- **Environment**: [e.g., Fresh Ubuntu 22.04 VPS, Debian bare-metal].
- **Primary Goal**: [e.g., Running a high-performance Nginx reverse proxy, setting up a secure DB node].
- **Access Method**: SSH with public-key authentication.

### Provisioning Pipeline:
1. **Initial Hardening**: Provide a script to [LOCK_DOWN_THE_OS] (e.g., Disable root login, change SSH port, set up UFW firewall).
2. **Package & Dependency Setup**: Automate the installation of [CORE_PACKAGES] (e.g., Docker, Nginx, Certbot).
3. **User & Permission Management**: Create a [DEPLOY_USER] with sudo privileges but limited path access.
4. **Service Persistence (Systemd)**: Provide a [SYSTEMD_UNIT_FILE] to ensure the [APP_OR_SERVICE] restarts automatically on crash or reboot.
5. **SSL & Automation**: Set up [CERTBOT/LETSENCRYPT] for automated certificate renewal.

### Output Constraints:
- Use a Secure, Methodical, and Linux-Native tone.
- Conclude with "The Post-Provisioning Audit"—a list of 5 commands to verify the server’s security.
- Provide all scripts in [ANSIBLE_PLAYBOOK] or [BASH] format.
```

## 🧩 Variables to Fill Out

- `[DISTRO]` - Ubuntu, Debian, CentOS, RHEL.
- `[OS_HARDENING]` - Disabling unneeded services and ports.
- `[UFW / IPTABLES]` - The server's shield.
- `[SYSTEMD]` - The industry standard for process management.

## 💡 Pro-Tips

- **Infrastructure is Code:** Even if it's one server, use [ANSIBLE]. It makes it easy to [CLONE_THE_SETUP] if the server dies. Ask for: "An Ansible Playbook instead of a Bash script."
- **Fail2Ban is Mandatory:** For any server exposed to the public internet, ask for a: "[FAIL2BAN_CONFIGURATION] to prevent brute-force SSH attacks."
- **SSH Key Only:** Never use passwords for SSH. Ask the AI to: "Provide the [SSHD_CONFIG] that strictly enforces public-key authentication."
---
