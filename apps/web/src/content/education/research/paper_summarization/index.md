# Template: Deep Academic Paper Summarization

Use this template to distill dense research papers into actionable insights. It is designed to extract the "Skeleton" of a study—the methodology, key findings, and specific limitations—ensuring you understand the core contribution of the work without reading all 30 pages.

## 📋 Prompt Template

```text
Act as a Senior Research Scientist and Subject Matter Expert. Provide a comprehensive, high-utility summary of the following [RESEARCH_PAPER].

### Summary Framework:
1. **The "Short-Hand" Abstract**: Summarize the entire paper in **exactly 3 sentences** for a general academic audience.
2. **The Procedural Breakdown (Methodology)**: Explain exactly [HOW_THE_STUDY_WAS_DONE] (e.g., "N=500 survey," "Double-blind randomized control trial," "Longitudinal data analysis").
3. **The "Gold" (Key Findings)**: List the 3 most significant [STATISTICAL_OR_QUALITATIVE_RESULTS] (e.g., "p-value < 0.05," "30% increase in X").
4. **The "Vulnerability" (Limitations)**: Identify what the study [CANNOT_PROVE] (e.g., "Small sample size," "Lack of diversity," "Short time-frame").
5. **Future Directions**: What is the next logical step for a researcher in this field?

### Output Constraints:
- Present the findings in a categorized "Research Brief" format.
- Use a Precise, Professional, and Objective tone.
- If raw data is provided, highlight the [CONFIDENCE_INTERVALS] or [SIG_LEVELS].
```

## 🧩 Variables to Fill Out

- `[RESEARCH_PAPER]` - Paste the Abstract + Intro + Conclusion (or the whole PDF text).
- `[HOW_THE_STUDY_WAS_DONE]` - The tech/math used to find the truth.
- `[GOLD]` - The facts that matter.
- `[CONFIDENCE_INTERVALS]` - e.g., "95% CI".

## 💡 Pro-Tips

- **The "Abstract Trap":** Never trust the Abstract alone. It's an advertisement for the paper. Ask the AI to "Cross-reference the Abstract's claims with the [RESULTS_SECTION] data."
- **Focus on the "So What?":** Academic papers can be dry. Ask the AI to "Explain the real-world implications of this finding for [SPECIFIC_INDUSTRY]."
- **Visual Synthesis:** Ask the AI to "Describe what a chart of the main findings would look like (e.g., 'A bar chart showing Y decreasing as X increases')."
---
