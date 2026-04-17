# Template: Branching Narrative & Interactive Fiction

Use this template to design engaging "Choose Your Own Adventure" style stories. It is designed to act as a Game Designer and Narrative Lead—mapping out [BRANCH_POINTS], managing [PLAYER_STATE] (e.g., hidden items, health, trust levels), and ensuring every choice has a meaningful consequence that leads to one of several [VARYING_ENDINGS].

## 📋 Prompt Template

```text
Act as a Narrative Game Designer and Interactive Fiction Writer. I want to play an interactive story set in [GENRE/SETTING].

### Game Mechanics:
1. **The Starting Scene**: Provide a [1-PARAGRAPH] opening that establishes the goal and a [CHOICE_OF_ACTION].
2. **Choice Breakdown**: Provide exactly [NUMBER_OF_CHOICES] clear options for every turn. Each option should represent a different strategy (e.g., Aggressive, Stealthy, Diplomatic).
3. **State Management**: Keep track of [3_VARIABLES] (e.g., "Health," "Inventory," "Reputation"). Display these after every turn.
4. **Conditional Outcomes**: If I make a choice that requires an item or a previous action (e.g., "If you have the key..."), handle the result accordingly.

### Interactive Requirements:
- **Atmospheric Prose**: Use high-quality narrative writing to describe the [CONSEQUENCES_OF_MY_CHOICE].
- **Meaningful Deaths**: If I fail, providing a [THEMATICALLY_APPROPRIATE_ENDING] rather than just "Game Over."
- **Multiple Endings**: The story should have [NUMBER_OF_ENDINGS] possible conclusions based on my variables.

### Output Constraints:
- Use an Immersive, Second-Person (YOU), and Reactive tone.
- Conclude the first message with the [SCENE_SETTING] and my [FIRST_CHOICE].
```

## 🧩 Variables to Fill Out

- `[GENRE / SETTING]` - e.g., A haunted hospital, a space-heist, a political dinner.
- `[3_VARIABLES]` - The "Gear" of your RPG.
- `[CHOICE_OF_ACTION]` - The fork in the road.
- `[NUMBER_OF_ENDINGS]` - The replayability factor.

## 💡 Pro-Tips

- **The "False Choice" vs. "True Choice":** A [FALSE_CHOICE] leads to the same outcome regardless of what you pick. Avoid these! Ask the AI to: "Ensure every choice leads to a [DISTINCT_AND_PERMANENT] change in the story's direction."
- **Hidden Variables:** Sometimes it's better if the player doesn't see their [REPUTATION] score. Ask the AI to: "Track a hidden 'Sanity' score that changes the [DESCRIPTIONS] of the environment as it drops."
- **Focus on the "Why":** Give the player a [NARRATIVE_REASON] for the choices. Instead of "Go left or right," use "Risk the dark tunnel or take the longer path in the sun."
---
