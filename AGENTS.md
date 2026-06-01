# AI Agent Instructions for `my-bingo-mixer`

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm test`

This is a small React + TypeScript + Vite frontend app with Tailwind CSS v4.
It is a static client-side game built to run locally and deploy to GitHub Pages.

## Key points for AI coding agents

- Use `npm install`, `npm run dev`, `npm run build`, `npm run lint`, and `npm test` for validation.
- The app is purely frontend; there is no backend API integration or server-side rendering.
- The app entrypoint is `src/App.tsx`.
- The main data and game logic lives in:
  - `src/hooks/useBingoGame.ts`
  - `src/utils/bingoLogic.ts`
  - `src/data/questions.ts`
- The UI is organized under `src/components/`:
  - `StartScreen.tsx`
  - `GameScreen.tsx`
  - `BingoBoard.tsx`
  - `BingoModal.tsx`
- Tests run with Vitest and use `jsdom` via `vite.config.ts`.
- Keep changes aligned with the workshop-style learning flow in `workshop/`.
- Do not duplicate existing documentation; link to workspace docs when relevant.

## Project-specific conventions

- The Vite config includes a dynamic `base` path using `VITE_REPO_NAME` for GitHub Pages.
- Code formatting and correctness should follow ESLint rules configured by `eslint.config.js`.
- Keep feature changes simple, with a focus on clear UI behavior and stable game state.

## Useful files

- `README.md` — setup and overview
- `.devcontainer/devcontainer.json` — dev container support
- `package.json` — scripts and dependencies
- `src/test/setup.ts` — Vitest setup
- `workshop/GUIDE.md` — lab guide
