# DevFlow 80-Task Full-Stack Build Plan

This chapter replaces the old GitHub Pages publishing capstone. Students build a serious full-stack project from scratch using Claude Code. Every task is one concrete subtopic with a deliverable.

## Stack

- React + Vite + TypeScript frontend
- Node + Express + TypeScript backend
- PostgreSQL + Prisma database layer
- Authentication, workspaces, projects, tasks, labels, comments, activity feed, tests, AI workflow assets, and CI


## Final Project Overview: Build DevFlow from Scratch

## Project Phase 1: Product Strategy and Scope

### 1. Define the product problem
**Steps:** Write the problem DevFlow solves, the target user, and the painful workflow it improves.

**Prompt:**
```text
Ask Claude to draft a product brief for a team project-management platform for small software teams. Include users, pain points, and success metrics.
```
**Deliverable:** product-brief.md

### 2. Define user roles
**Steps:** Create roles for owner, admin, member, and viewer. Clarify what each can and cannot do.

**Prompt:**
```text
Design the role model for DevFlow. Return a permission table and call out security risks.
```
**Deliverable:** roles-and-permissions.md

### 3. Write core user journeys
**Steps:** Describe journeys for creating a workspace, inviting users, creating a project, creating tasks, and reviewing progress.

**Prompt:**
```text
Write five end-to-end user journeys for DevFlow. Keep each journey testable.
```
**Deliverable:** user-journeys.md

### 4. Set MVP boundaries
**Steps:** Separate must-have features from nice-to-have features. Avoid building chat, billing, and integrations in version one.

**Prompt:**
```text
Create an MVP scope for DevFlow with included, excluded, and deferred features.
```
**Deliverable:** mvp-scope.md

### 5. Create acceptance criteria
**Steps:** For each MVP feature, define what must be true before it is considered done.

**Prompt:**
```text
Turn the MVP scope into acceptance criteria using Given/When/Then format.
```
**Deliverable:** acceptance-criteria.md

### 6. Create milestone plan
**Steps:** Break the project into backend foundation, auth, task system, frontend, testing, and automation milestones.

**Prompt:**
```text
Create a milestone plan for building DevFlow with Claude Code. Include risks and checkpoints.
```
**Deliverable:** milestone-plan.md

### 7. Define data entities
**Steps:** List the major nouns: user, workspace, membership, project, task, label, comment, activity log.

**Prompt:**
```text
Identify DevFlow’s core data entities and relationships before schema design.
```
**Deliverable:** entity-map.md

### 8. Write the first README
**Steps:** Create a README that explains what the project is, how to run it, and what is still planned.

**Prompt:**
```text
Draft a professional README for DevFlow before any code exists.
```
**Deliverable:** README.md

## Project Phase 2: Repository and Tooling Setup

### 9. Create monorepo structure
**Steps:** Create apps/web, apps/api, packages/shared, docs, and .claude folders.

**Prompt:**
```text
Plan and create a monorepo structure for a React frontend and Express backend. Explain every folder.
```
**Deliverable:** folder structure committed

### 10. Initialize frontend
**Steps:** Create a Vite React TypeScript app in apps/web.

**Prompt:**
```text
Initialize the frontend with Vite React TypeScript and remove boilerplate that does not belong.
```
**Deliverable:** apps/web working

### 11. Initialize backend
**Steps:** Create a TypeScript Express API in apps/api.

**Prompt:**
```text
Create a minimal Express TypeScript API with a health route and clean folder structure.
```
**Deliverable:** apps/api working

### 12. Add root scripts
**Steps:** Add scripts for dev, build, lint, test, api:dev, web:dev.

**Prompt:**
```text
Create package scripts that let a developer run frontend and backend from the repo root.
```
**Deliverable:** package scripts

### 13. Add environment templates
**Steps:** Create .env.example files for API and web.

**Prompt:**
```text
Create safe environment template files. Do not include secrets.
```
**Deliverable:** .env.example files

### 14. Add formatting and linting
**Steps:** Add Prettier/ESLint or a simple formatting baseline.

**Prompt:**
```text
Set up formatting and linting rules appropriate for this project. Keep them beginner-friendly.
```
**Deliverable:** format/lint configured

### 15. Add Git hygiene
**Steps:** Create .gitignore and branch naming recommendations.

**Prompt:**
```text
Review the repo for files that should never be committed and update .gitignore.
```
**Deliverable:** .gitignore updated

### 16. Commit initial scaffold
**Steps:** Review the diff and create the first commit.

**Prompt:**
```text
Review the initial scaffold diff and write a conventional commit message.
```
**Deliverable:** first commit

## Project Phase 3: CLAUDE.md and AI Workflow Assets

### 17. Create CLAUDE.md
**Steps:** Write the project memory file at the repo root.

**Prompt:**
```text
Create a CLAUDE.md that explains DevFlow, stack, commands, workflow, and safety rules.
```
**Deliverable:** CLAUDE.md

### 18. Add exploration rules
**Steps:** Tell Claude to explore before editing and to cite file paths.

**Prompt:**
```text
Improve CLAUDE.md with strict Explore → Plan → Code → Verify → Commit rules.
```
**Deliverable:** workflow rules

### 19. Add backend rules
**Steps:** Add rules for API routing, validation, errors, and Prisma usage.

**Prompt:**
```text
Add backend engineering rules to CLAUDE.md for Express, Prisma, validation, and auth.
```
**Deliverable:** backend rules

### 20. Add frontend rules
**Steps:** Add rules for React component structure, state, forms, and UI consistency.

**Prompt:**
```text
Add frontend engineering rules to CLAUDE.md for React, routes, API clients, and components.
```
**Deliverable:** frontend rules

### 21. Add security rules
**Steps:** Add rules for secrets, auth, permissions, and unsafe commands.

**Prompt:**
```text
Add security rules Claude must follow while working on DevFlow.
```
**Deliverable:** security rules

### 22. Create /review command
**Steps:** Create .claude/commands/review.md for reviewing diffs.

**Prompt:**
```text
Create a reusable review command that checks security, tests, scope creep, and maintainability.
```
**Deliverable:** /review command

### 23. Create /test-plan command
**Steps:** Create a command that asks Claude to design tests before writing them.

**Prompt:**
```text
Create .claude/commands/test-plan.md for generating test plans from acceptance criteria.
```
**Deliverable:** /test-plan command

### 24. Create /pr-desc command
**Steps:** Create a command that writes PR summaries from git diff.

**Prompt:**
```text
Create .claude/commands/pr-desc.md that outputs title, summary, test evidence, and risk notes.
```
**Deliverable:** /pr-desc command

## Project Phase 4: Database and Backend Foundation

### 25. Install Prisma
**Steps:** Add Prisma to the backend and initialize schema files.

**Prompt:**
```text
Set up Prisma for the API. Explain generated files and commands.
```
**Deliverable:** Prisma initialized

### 26. Design schema v1
**Steps:** Create User, Workspace, Membership, Project, Task, Label, Comment, ActivityLog models.

**Prompt:**
```text
Design the first Prisma schema for DevFlow. Explain relationships before writing.
```
**Deliverable:** schema.prisma draft

### 27. Review schema risks
**Steps:** Ask Claude to review cascade deletes, indexes, uniqueness, and multi-tenant safety.

**Prompt:**
```text
Review this schema for data integrity, tenant isolation, and query performance risks.
```
**Deliverable:** schema review

### 28. Create migration
**Steps:** Run the migration or create the migration files depending on the local DB setup.

**Prompt:**
```text
Run or prepare the first Prisma migration and explain how to reset safely in development.
```
**Deliverable:** migration

### 29. Create database client
**Steps:** Add a single Prisma client module.

**Prompt:**
```text
Create a database client module and explain why the app should import it from one place.
```
**Deliverable:** db client

### 30. Add API error shape
**Steps:** Standardize error responses.

**Prompt:**
```text
Create shared API error helpers and middleware for consistent JSON errors.
```
**Deliverable:** error helpers

### 31. Add validation pattern
**Steps:** Choose Zod or similar validation and create a pattern for request validation.

**Prompt:**
```text
Set up request validation for Express routes. Use a small reusable pattern.
```
**Deliverable:** validation utility

### 32. Add health and diagnostics
**Steps:** Create /health and a minimal diagnostic route if appropriate.

**Prompt:**
```text
Add a health-check endpoint and explain what it should and should not expose.
```
**Deliverable:** health endpoint

## Project Phase 5: Authentication and Workspace Security

### 33. Create auth routes plan
**Steps:** Plan register, login, current user, logout/token strategy.

**Prompt:**
```text
Plan authentication endpoints for DevFlow with exact files and security considerations.
```
**Deliverable:** auth plan

### 34. Implement registration
**Steps:** Create register endpoint with validation and password hashing.

**Prompt:**
```text
Implement user registration safely. Include validation, password hashing, and duplicate email handling.
```
**Deliverable:** register endpoint

### 35. Implement login
**Steps:** Create login endpoint with credential validation.

**Prompt:**
```text
Implement login safely. Return a token or session response without leaking sensitive info.
```
**Deliverable:** login endpoint

### 36. Create auth middleware
**Steps:** Decode and verify auth on protected routes.

**Prompt:**
```text
Create authentication middleware and explain how routes should use it.
```
**Deliverable:** auth middleware

### 37. Create current-user route
**Steps:** Return the authenticated user profile.

**Prompt:**
```text
Add a current-user endpoint that uses auth middleware and excludes sensitive fields.
```
**Deliverable:** me endpoint

### 38. Model workspace membership
**Steps:** Use Membership to connect users to workspaces with roles.

**Prompt:**
```text
Implement workspace membership checks. Explain owner/admin/member/viewer behavior.
```
**Deliverable:** membership rules

### 39. Add authorization helper
**Steps:** Create a reusable function for checking access to a workspace/project.

**Prompt:**
```text
Create authorization helpers for workspace and project access. Keep them testable.
```
**Deliverable:** authorization helper

### 40. Security review auth
**Steps:** Ask a security-reviewer subagent or Claude to review auth code.

**Prompt:**
```text
Review the auth and authorization code for common vulnerabilities and missing tests.
```
**Deliverable:** security review

## Project Phase 6: Projects, Tasks, Comments, and Activity

### 41. Workspace CRUD
**Steps:** Build endpoints for creating, listing, updating, and archiving workspaces.

**Prompt:**
```text
Implement workspace CRUD with permission checks and validation.
```
**Deliverable:** workspace API

### 42. Project CRUD
**Steps:** Build endpoints for projects inside a workspace.

**Prompt:**
```text
Implement project CRUD scoped to a workspace. Prevent cross-workspace access.
```
**Deliverable:** project API

### 43. Task CRUD
**Steps:** Build task create/read/update/delete endpoints.

**Prompt:**
```text
Implement task CRUD with status, priority, due date, and assignee fields.
```
**Deliverable:** task API

### 44. Task filtering
**Steps:** Add filters by status, priority, assignee, label, and search text.

**Prompt:**
```text
Add task filtering and explain query parameters and indexes.
```
**Deliverable:** task filters

### 45. Labels
**Steps:** Add labels per workspace or project.

**Prompt:**
```text
Implement labels with create/list/attach/remove behavior.
```
**Deliverable:** labels API

### 46. Comments
**Steps:** Add comments to tasks.

**Prompt:**
```text
Implement task comments with author tracking and validation.
```
**Deliverable:** comments API

### 47. Activity logging
**Steps:** Record task creation, status changes, comments, and assignment changes.

**Prompt:**
```text
Implement activity logging for important events without logging secrets.
```
**Deliverable:** activity logs

### 48. Backend API tests
**Steps:** Add API tests for the most important happy paths and permission failures.

**Prompt:**
```text
Create a backend test plan and implement the highest-value tests first.
```
**Deliverable:** API tests

## Project Phase 7: Frontend Application Build

### 49. Create app shell
**Steps:** Build routes, layout, navigation, and protected route behavior.

**Prompt:**
```text
Create the React app shell for DevFlow with public and authenticated layouts.
```
**Deliverable:** app shell

### 50. Auth screens
**Steps:** Build login and registration pages with validation and error states.

**Prompt:**
```text
Implement login and registration UI connected to the API client.
```
**Deliverable:** auth UI

### 51. API client
**Steps:** Create a typed API client layer.

**Prompt:**
```text
Create a frontend API client and explain how errors and auth tokens are handled.
```
**Deliverable:** API client

### 52. Dashboard page
**Steps:** Show workspaces, recent activity, and project summary.

**Prompt:**
```text
Build the dashboard page with loading, empty, and error states.
```
**Deliverable:** dashboard

### 53. Workspace page
**Steps:** List projects, members, and workspace actions.

**Prompt:**
```text
Build the workspace page and connect it to backend data.
```
**Deliverable:** workspace UI

### 54. Project page
**Steps:** Show task list, filters, and project metadata.

**Prompt:**
```text
Build the project page with task list and filters.
```
**Deliverable:** project UI

### 55. Task detail page
**Steps:** Show task details, comments, status changes, and labels.

**Prompt:**
```text
Build the task detail page with editable fields and comments.
```
**Deliverable:** task detail UI

### 56. Kanban board
**Steps:** Add board columns for backlog, todo, in progress, and done.

**Prompt:**
```text
Build a Kanban board for tasks. Keep drag-and-drop optional; start with button-based status changes.
```
**Deliverable:** Kanban board

## Project Phase 8: Quality, Automation, and Final Handoff

### 57. Frontend tests
**Steps:** Add component or integration tests for auth, task list, and task detail.

**Prompt:**
```text
Create frontend tests for critical user flows. Avoid brittle snapshot-only tests.
```
**Deliverable:** frontend tests

### 58. Backend regression tests
**Steps:** Add tests for auth, permissions, and task filters.

**Prompt:**
```text
Add backend regression tests for security-sensitive behavior.
```
**Deliverable:** regression tests

### 59. Create subagents
**Steps:** Create security-reviewer, test-writer, and docs-writer subagents.

**Prompt:**
```text
Design three DevFlow subagents with limited tools and strict output formats.
```
**Deliverable:** subagents

### 60. Add safety hooks plan
**Steps:** Document hooks for blocking destructive commands and running formatting.

**Prompt:**
```text
Design safe Claude Code hooks for this repo. Explain which are mandatory and which are optional.
```
**Deliverable:** hooks plan

### 61. Create CI workflow
**Steps:** Add GitHub Actions for lint/test/build.

**Prompt:**
```text
Create a GitHub Actions workflow that runs install, lint, test, and build safely.
```
**Deliverable:** CI workflow

### 62. Final review pass
**Steps:** Ask Claude to review the entire project against the acceptance criteria.

**Prompt:**
```text
Review DevFlow against the original acceptance criteria. Return pass/fail and fix list.
```
**Deliverable:** final review

### 63. Write documentation
**Steps:** Generate architecture, API, and user documentation.

**Prompt:**
```text
Create final docs: architecture, API reference, setup guide, and user walkthrough.
```
**Deliverable:** project docs

### 64. Demo script and roadmap
**Steps:** Write a live demo script and next-feature roadmap.

**Prompt:**
```text
Write a 10-minute demo script and a prioritized roadmap for v2 features.
```
**Deliverable:** demo script