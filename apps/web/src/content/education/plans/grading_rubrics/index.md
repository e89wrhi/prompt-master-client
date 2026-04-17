# Template: Professional Grading Rubrics

Use this template to create objective, clear, and fair evaluation frameworks for any student project or assignment. It is designed to move beyond "Pass/Fail" by defining 4-5 distinct levels of mastery across multiple criteria, ensuring that students know exactly what is expected of them to achieve an 'A'.

## 📋 Prompt Template

```text
Act as a Lead Educator and Quality Assurance Specialist. Develop a Grading Rubric for the [ASSIGNMENT_TYPE] entitled "[ASSIGNMENT_NAME]."

### Assignment Context:
- **Learning Goal**: [e.g., Critical thinking, Code efficiency, Persuasive writing].
- **Student Level**: [e.g., High School, Graduate, Professional Training].

### Rubric Requirements:
1. **The Evaluation Criteria**: Identify 4-5 pillars of success (e.g., [CRITERION_1], [CRITERION_2], [CRITERION_3], [CRITERION_4]).
2. **Mastery Levels**: For each criterion, provide detailed "Descriptors" for the following 4 levels:
   - **Excellent (A)**: Exceeds all expectations.
   - **Proficient (B)**: Meets all core expectations.
   - **Developing (C)**: Meets some expectations but lacks depth.
   - **Beginning (D/F)**: Fails to meet core expectations.
3. **The Weighted Point System**: Assign a [PERCENTAGE_WEIGHT] to each criterion (e.g., "Content: 40%, Format: 20%").
4. **The "Common Pitfalls" Section**: Describe 3 things that would automatically cause a student to lose points (e.g., [ERROR_X], [ERROR_Y]).
5. **Feedback Starters**: Provide 3 positive and 3 constructive "canned" comments to speed up the grading process.

### Output Constraints:
- Present the rubric in a visual Markdown Table.
- Use a Precise, Neutral, and Standardized tone.
- Ensure the language is clear enough for a student to self-assess their work before submission.
```

## 🧩 Variables to Fill Out

- `[ASSIGNMENT_TYPE]` - e.g., Analytical Essay, Full-Stack App, Oral Presentation, Lab Report.
- `[ASSIGNMENT_NAME]` - The title.
- `[CRITERION_1/2/3/4]` - e.g., Technical Correctness, Documentation, Originality, Clarity.
- `[PERCENTAGE_WEIGHT]` - How much each part counts.

## 💡 Pro-Tips

- **Avoid Subjective Words:** Instead of saying "Contains good code," say "Contains 0 console errors and follows the [STYLE_GUIDE] precisely."
- **The "B" is the Standard:** When drafting, define the "Proficient" level first. "Excellent" should be that + [EXTRA_STRETCH_GOAL].
- **Transparency is Key:** Tell the AI to "Write a 1-sentence explanation of why the rubric is weighted this way," which helps students understand where to focus their effort.
---
