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

The workflow builds the Vite app and deploys the `dist` folder to GitHub Pages. The Vite `base` path is calculated from `GITHUB_REPOSITORY`, so the app works at `https://USERNAME.github.io/REPO_NAME/`.

## Course size

- 8 modules
- 39 lessons
- 480 minutes / 8 hours
- Includes demos, labs, prompt packs, checklists, MCP, hooks, skills, subagents, SDK, and GitHub publishing
