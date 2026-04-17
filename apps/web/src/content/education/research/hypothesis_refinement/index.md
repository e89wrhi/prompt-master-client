---
id: hypothesis_refinement
topicId: education
subTopicId: research
title: Scientific Hypothesis Refinement
---
# Template: Scientific Hypothesis Refinement

Use this template to transform a broad research interest into a testable, peer-review-ready hypothesis. It is designed to utilize the "Scientific Method" framework to identify Independent and Dependent variables (IV/DV), establish a predicted relationship, and ensure the statement is both specific and falsifiable.

## 📋 Prompt Template

```text
Act as a Senior Research Scientist and Methodology Expert. Refine the following [RESEARCH_TOPIC] into three distinct, testable hypothesis variations.

### Research Context:
- **Broad Area of Interest**: [e.g., Sleep and Grades, Remote work and Burnout].
- **Current Observation**: [DESCRIBE_WHAT_YOU_HAVE_SEEN].
- **Population of Study**: [e.g., Undergraduate seniors, Nurses in New York, Remote software devs].

### Refinement Requirements:
1. **The "If-Then" Transformation**: For each variation, provide a clear [IF-THEN] statement.
2. **Variable Identification**: Clearly label the [INDEPENDENT_VARIABLE] (the cause) and the [DEPENDENT_VARIABLE] (the effect).
3. **Directionality**: Specify if the relationship is [POSITIVE_OR_NEGATIVE] (e.g., "Increased X leads to decreased Y").
4. **Falsifiability Check**: Explain exactly what data would be required to [DISPROVE] each hypothesis.
5. **Operationalization**: Suggest one way to [MEASURE] the variables (e.g., "Self-reported survey score," "Heart rate monitor data," "Lines of code per day").

### Output Constraints:
- Use a Precise, Logical, and Scientific tone.
- Conclude with "Methodological Advice"—3 tips on avoiding [CONFOUNDING_VARIABLES].
```

## 🧩 Variables to Fill Out

- `[RESEARCH_TOPIC]` - The core subject.
- `[INDEPENDENT_VARIABLE]` - The thing you change.
- `[DEPENDENT_VARIABLE]` - The thing you measure.
- `[CONFOUNDING_VARIABLES]` - Outside factors that might mess up the data.
- `[DISPROVE]` - How would we know if we were wrong?

## 💡 Pro-Tips

- **Correlation != Causation:** Be careful with your wording. Instead of "X makes Y happen," use "There is a significant positive correlation between X and Y" unless you are running a true experiment.
- **Narrow it Down:** "Technology makes people sad" is a bad hypothesis. "Daily usage of [SOCIAL_MEDIA_APP] for more than 3 hours correlates with a 20% increase in [SELF-REPORTED_ANXIETY_SCORE] among teens" is a great one.
- **The "Null" Hypothesis:** Always consider the opposite. Ask the AI to "Draft the corresponding [NULL_HYPOTHESIS] for each variation."
---
