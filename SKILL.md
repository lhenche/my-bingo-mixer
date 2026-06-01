---
name: dogfooding
description: Reusable dogfooding skill for this Bingo Mixer app. Run the app, play the main flow, and produce critical feedback on how fun and engaging it feels.
tools: ['execute/runInTerminal', 'read/getTaskOutput', 'vscode/openSimpleBrowser', 'read', 'search']
---

Your goal is to test the Bingo Mixer app like a critical dogfooder and deliver a concise report on the actual user experience.

## Process

1. Ensure the workspace is ready:
   - Verify `package.json` dependencies are installed.
   - If needed, run `npm install`.
2. Start the development server:
   - Use `npm run dev`.
   - Open the app in a browser at the local dev URL (usually `http://localhost:5173/`).
3. Explore the app flow:
   - Confirm the start screen loads with title, instructions, and start button.
   - Start a game and validate the 5x5 bingo board appears.
   - Interact with squares, including the free center square.
   - Mark several squares and complete at least one bingo line.
   - Confirm the bingo notification/modal appears and can be dismissed.
4. Evaluate the experience critically:
   - Is the game easy to understand?
   - Is the feedback satisfying and motivating?
   - Does the app feel like a game or a checklist?
   - Is there enough replay value and social energy in the flow?
5. Report clearly:
   - Strengths of the current experience.
   - Weaknesses and friction points.
   - Specific suggestions for improving fun, clarity, and replayability.
   - Any bugs, broken interactions, or missing feedback.

## Decision points

- If the app fails to start, inspect terminal errors and browser console logs before continuing.
- If the board or UI is missing expected elements, describe the exact failure and reproduce it.
- If bingo behavior seems incorrect, test multiple line combinations and confirm the winning state.
- If the experience ends abruptly after bingo, note whether it still supports continued play.

## Quality criteria

- [ ] Local dev server launches and app opens in a browser.
- [ ] Start screen and game screen are visible and interactive.
- [ ] Squares can be marked and at least one bingo line can be completed.
- [ ] Bingo feedback appears and can be dismissed.
- [ ] The report includes actionable feedback on fun, clarity, and replay value.
- [ ] The report suggests at least three concrete improvements.

## Example prompts

- "Dogfood the Bingo Mixer app and describe how fun it actually feels."
- "Test the game flow, find usability issues, and write a critical gameplay report."
- "Use this skill to evaluate whether this bingo app is engaging enough for social play."
