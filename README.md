# Claude Code 8-Hour Masterclass

A React/Vite course app with an expanded 8-hour Claude Code curriculum.

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main` or run the workflow manually from the Actions tab.

The workflow installs dependencies, builds the Vite app and deploys the `dist` folder to GitHub Pages. The Vite `base` path is calculated from `GITHUB_REPOSITORY`, so the app works at `https://USERNAME.github.io/REPO_NAME/`.

## Course size

- 8 modules
- 39 lessons
- 480 minutes / 8 hours
- Includes demos, labs, prompt packs, checklists, MCP, hooks, skills, subagents, SDK, and GitHub publishing


## New: Built-In Claude Code Commands Mastery

This version adds a dedicated command mastery module with 90+ Claude Code slash commands, bundled skills, workflows, and aliases. It explains when to use each command, how it fits into a real engineering workflow, and why it matters. See `docs/claude-code-command-playbook.md` for the standalone command reference.


## Latest expansion

This version keeps the existing course content and adds separate hands-on practice subtopics after each lesson. Each practice subtopic includes 6 repo-based tasks with step-by-step instructions, Claude Code prompts, and expected deliverables.

The old Chapter 9 / GitHub Pages publishing capstone was removed and replaced with **Build DevFlow: Complete Project Development with Claude Code**, an 80-task serious full-stack project build.

Additional docs:

- `docs/repo-practice-labs.md`
- `docs/devflow-80-task-build-plan.md`
- `docs/claude-code-command-playbook.md`
