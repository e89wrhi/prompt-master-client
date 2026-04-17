# Template: Resource Allocation Simulation

Use this template to model how different distributions of your budget, headcount, or time will impact your project's outcome. It is designed to move beyond "static planning" by simulating "What If" scenarios (e.g., Aggressive Growth vs. Conservative Maintenance) to find the optimal balance of resources.

## 📋 Prompt Template

```text
Act as a Senior Operations Lead and Resource Planner. Perform a Resource Allocation Simulation for the following [PROJECT/WORKSTREAM]:

### Input Parameters:
- **Total Budget/Resource**: [INSERT_TOTAL_HOURS_OR_DOLLARS]
- **Current Headcount**: [INSERT_FTE_COUNT]
- **Competing Priorities**: [PRIORITY_1], [PRIORITY_2], and [PRIORITY_3].

### Simulation Requirements:
1. **Scenario A: The Aggressive Growth Model**: Simulate allocating 70% of resources to [PRIORITY_1]. What are the projected gains, and what are the specific [RESOURCE_GAPS] created in the other priorities?
2. **Scenario B: The Balanced Hybrid Model**: Simulate a 40/30/30 split across all priorities. How does this impact the [TIME_TO_MARKET] compared to Scenario A?
3. **Scenario C: The Conservative Maintenance Model**: Simulate allocating 60% of resources to "Quality & Foundational Work." What is the long-term impact on [TECHNICAL_DEBT]?
4. **The "Efficiency Discovery"**: Based on these scenarios, identify the "Point of Diminishing Returns"—where adding one more person to a priority stops providing significant benefit.
5. **Final Recommendation**: Select the most "Resilient" model and justify the choice based on the [INSERT_OVERALL_GOAL].

### Output Constraints:
- Present the allocation splits in a Markdown Table for side-by-side comparison.
- Use a Precise, Analytical, and Data-Driven tone.
```

## 🧩 Variables to Fill Out

- `[PROJECT/WORKSTREAM]` - e.g., Scaling the Sales Team, The 2024 Product Roadmap.
- `[INSERT_TOTAL_HOURS_OR_DOLLARS]` - e.g., $500,000 or 2,000 labor hours per month.
- `[INSERT_FTE_COUNT]` - Number of Full-Time Equivalent employees.
- `[PRIORITY_1/2/3]` - e.g., New Feature Dev, Customer Support, Infrastructure.
- `[RESOURCE_GAPS]` - e.g., Increase in unresolved bugs, slower response times.
- `[TIME_TO_MARKET]` - How fast can we ship?
- `[TECHNICAL_DEBT]` - Long-term cost of short-term speed.
- `[INSERT_OVERALL_GOAL]` - e.g., Reach $10M ARR, Achieve 99.99% Uptime.

## 💡 Pro-Tips

- **The Mythical Man-Month:** Remember that adding more people to a late project often makes it later. Ask the AI to "Account for communication overhead and onboarding time in the simulation."
- **Scenario Stress-Testing:** Ask the AI to "Introduce a 20% budget cut to Scenario B" to see which priority would be the first to break.
- **Focus on Opportunity Cost:** Every hour spent on Feature A is an hour NOT spent on Feature B. Ensure the AI explicitly lists the "Lost Opportunities" for each scenario.
---
