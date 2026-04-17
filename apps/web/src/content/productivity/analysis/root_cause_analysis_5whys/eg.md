# Examples: Root Cause Analysis (5 Whys)

## 1. Production Database Outage

```text
Act as a Senior QA Lead and Systems Thinking Expert. Perform a deep-dive 5 Whys analysis for the following PROBLEM_STATEMENT: The production database went offline for 45 minutes during the Black Friday sale.

### Incident Context:
- Time: 12:05 PM Friday.
- Symptom: Connection Timeout errors on all user-facing APIs.
- Fix: The DB was manually restarted by the Ops team.
- Initial finding: The disk space on the DB server was 100% full.

### Analysis Requirements:
1. **The 5 Whys Chain**: Starting from the surface problem (Disk full), ask "Why?" five consecutive times, drilling down into Infrastructure and Process.
2. **Root Cause Identification**: Based on the 5-step chain, define the singular systemic failure that enabled the incident.
3. **Short-Term Mitigation**: Provide an immediate "Band-Aid" fix to restore service.
4. **Long-Term Prevention**: Propose a "Structural Fix" (e.g., Automated cleanup or alerting) that ensures this specific root cause can never reoccur.
5. **Contributing Factors**: Identify 2-3 secondary factors that worsened the outage.

### Output Constraints:
- Present the 5 Whys chain as a numbered list.
- Keep the tone Objective and Solution-Oriented.
```

## 2. High Employee Turnover in Marketing Team

```text
Act as a Senior QA Lead and Systems Thinking Expert. Perform a deep-dive 5 Whys analysis for the following PROBLEM_STATEMENT: 40% of the Marketing team has resigned in the last 4 months.

### Incident Context:
- Exit interviews cite "Burnout" and "Lack of Direction."
- The team has hit all KPIs but morale is at an all-time low.
- A new project management software was introduced last quarter.

### Analysis Requirements:
1. **The 5 Whys Chain**: Starting from "Employees are resigning," drill down into Management and Communication factors.
2. **Root Cause Identification**: Identify the systemic failure in leadership or process.
3. **Short-Term Mitigation**: Immediate action to stabilize the remaining team.
4. **Long-Term Prevention**: Structural changes to the feedback loop or workload management.
5. **Contributing Factors**: Identify secondary factors.

### Output Constraints:
- Present the 5 Whys chain as a numbered list.
```
