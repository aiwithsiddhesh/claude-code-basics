import { useEffect, useMemo, useState } from "react";

const M = [
  {
    "id": "m1",
    "title": "Foundations of Claude Code",
    "color": "#F59E0B",
    "bg": "#78350F",
    "minutes": 145,
    "sections": [
      {
        "id": "m1s1",
        "title": "Course Orientation: From Basic Tool Use to 8-Hour Workflow",
        "minutes": 10,
        "content": [
          {
            "t": "p",
            "v": "This course turns Claude Code from a novelty into a repeatable engineering workflow. By the end, learners should be able to onboard a real repository, explore safely, plan changes, implement with tests, review the diff, automate common tasks, and build a complete full-stack project with Claude Code."
          },
          {
            "t": "h",
            "v": "What this 8-hour version adds"
          },
          {
            "t": "ul",
            "v": [
              "Timed lessons so the course can be delivered live or self-paced",
              "Instructor talking points, live demos, labs, and checkpoints",
              "Prompt packs students can copy into Claude Code",
              "Troubleshooting branches for when Claude misunderstands the codebase",
              "A complete full-stack project where students build DevFlow with Claude Code"
            ]
          },
          {
            "t": "table",
            "h": [
              "Part",
              "Time",
              "Outcome"
            ],
            "r": [
              [
                "Foundations + setup",
                "105 min",
                "Students understand the agent loop, permissions, project prep, and first prompts"
              ],
              [
                "Daily engineering workflow",
                "200 min",
                "Students can use Explore → Plan → Code → Verify → Commit on real tasks"
              ],
              [
                "Automation + MCP + advanced features",
                "145 min",
                "Students can extend Claude Code with hooks, skills, subagents, MCP, SDK, and GitHub workflows"
              ],
              [
                "Full-stack project build",
                "360+ min",
                "Students build DevFlow from scratch using Claude Code across planning, backend, frontend, testing, automation, and documentation"
              ]
            ]
          },
          {
            "t": "note",
            "v": "Delivery tip: do not lecture for eight straight hours. Alternate 10–15 minutes of explanation with a demo or hands-on task. Claude Code is learned by watching the loop and then practicing it."
          }
        ]
      },
      {
        "id": "m1s1_practice",
        "title": "Hands-on Lab: Course Orientation: From Basic Tool Use to 8-Hour Workflow",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports core Claude Code workflow on a realistic backend project."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m1s1, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Course Orientation: From Basic Tool Use to 8-Hour Workflow. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Course Orientation: From Basic Tool Use to 8-Hour Workflow. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Course Orientation: From Basic Tool Use to 8-Hour Workflow. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Course Orientation: From Basic Tool Use to 8-Hour Workflow: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m1s2",
        "title": "The Agent Mental Model",
        "minutes": 12,
        "content": [
          {
            "t": "p",
            "v": "The most important shift is this: Claude Code is not an autocomplete engine and not just a chat box. It is an agentic coding environment that can inspect a codebase, choose tools, edit files, run commands, observe failures, and iterate. Your job changes from typing every line to supervising a capable junior engineer with terminal access."
          },
          {
            "t": "h",
            "v": "Three modes of AI help"
          },
          {
            "t": "table",
            "h": [
              "Mode",
              "What the AI does",
              "Your responsibility"
            ],
            "r": [
              [
                "Autocomplete",
                "Suggests the next line or block",
                "Accept, reject, or edit immediately"
              ],
              [
                "Chat assistant",
                "Answers questions and writes snippets",
                "Copy code manually, supply context manually"
              ],
              [
                "Coding agent",
                "Runs a loop across files, tools, tests, and fixes",
                "Define task boundaries, inspect actions, approve risky steps, review output"
              ]
            ]
          },
          {
            "t": "h",
            "v": "Agent loop vocabulary"
          },
          {
            "t": "ol",
            "v": [
              "Perceive: read files, errors, docs, tests, and previous conversation",
              "Reason: decide the next smallest useful action",
              "Act: call a tool such as Read, Write/Edit, Bash, search, MCP, or browser tools",
              "Observe: inspect command output, test failure, file diff, or tool result",
              "Iterate: continue until the goal is met or the task is blocked"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Good mental model prompt:\nYou are working as my coding agent, not just answering questions. First inspect the project, then explain what you learned, then propose the smallest safe next step. Do not edit files until I approve the plan."
          },
          {
            "t": "note",
            "v": "A good Claude Code user is not passive. You steer the loop, keep the scope small, and force verification before trusting the result."
          }
        ]
      },
      {
        "id": "m1s2_practice",
        "title": "Hands-on Lab: The Agent Mental Model",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports core Claude Code workflow on a realistic backend project."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m1s2, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: The Agent Mental Model. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to The Agent Mental Model. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice The Agent Mental Model. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for The Agent Mental Model: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m1s3",
        "title": "Claude Code Interface, Tools, and Visibility",
        "minutes": 12,
        "content": [
          {
            "t": "p",
            "v": "Claude Code works best when students understand what they are seeing in the terminal. Tool calls are not magic; they are visible steps. This transparency is what lets you trust, interrupt, correct, or constrain the agent."
          },
          {
            "t": "h",
            "v": "Core tool categories"
          },
          {
            "t": "table",
            "h": [
              "Tool category",
              "Typical use",
              "Risk level"
            ],
            "r": [
              [
                "File read/search",
                "Understand architecture, find symbols, inspect tests",
                "Low"
              ],
              [
                "File write/edit",
                "Implement changes, update docs, create tests",
                "Medium"
              ],
              [
                "Bash commands",
                "Install dependencies, run tests, inspect Git state",
                "Medium to high depending on command"
              ],
              [
                "MCP/browser/API tools",
                "Interact with external systems like GitHub, DBs, browsers",
                "Variable; depends on credentials and permissions"
              ]
            ]
          },
          {
            "t": "h",
            "v": "Instructor demo"
          },
          {
            "t": "ol",
            "v": [
              "Open a small repository with a failing test",
              "Ask Claude to inspect the failure without changing files",
              "Point out each read/search/bash action Claude proposes",
              "Interrupt once and redirect it to a narrower file",
              "Ask for a summary of evidence before any fix"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Demo prompt:\nThe tests are failing. Do not modify files yet. Inspect the test output and the relevant source files. Return: 1) suspected root cause, 2) exact files involved, 3) the smallest safe fix."
          },
          {
            "t": "note",
            "v": "Visibility is a teaching tool. Encourage learners to narrate what Claude is doing: reading, hypothesizing, editing, verifying, or recovering from a mistake."
          }
        ]
      },
      {
        "id": "m1s3_practice",
        "title": "Hands-on Lab: Claude Code Interface, Tools, and Visibility",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports core Claude Code workflow on a realistic backend project."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m1s3, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Claude Code Interface, Tools, and Visibility. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Claude Code Interface, Tools, and Visibility. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Claude Code Interface, Tools, and Visibility. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Claude Code Interface, Tools, and Visibility: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m1s4",
        "title": "Permissions and Safety Mindset",
        "minutes": 10,
        "content": [
          {
            "t": "p",
            "v": "Claude Code can be powerful enough to damage a project if given vague instructions and broad permissions. The solution is not fear; it is disciplined workflow. Keep Git clean, prefer planning before execution, review tool calls, and restrict dangerous operations."
          },
          {
            "t": "h",
            "v": "Safety layers"
          },
          {
            "t": "ul",
            "v": [
              "Start from a clean Git working tree so every AI change is visible",
              "Use planning-only mode for risky refactors or unfamiliar codebases",
              "Ask Claude to explain commands before running destructive shell operations",
              "Never allow blind edits in production config, secrets, migrations, or payment logic",
              "Use hooks to block risky patterns such as rm -rf, force push, or direct database drops"
            ]
          },
          {
            "t": "table",
            "h": [
              "Risky area",
              "Safer instruction"
            ],
            "r": [
              [
                "Database migrations",
                "Generate the migration and a rollback plan; do not run it yet"
              ],
              [
                "Secrets/config",
                "Inspect references only; never print secret values"
              ],
              [
                "Auth/payment code",
                "Create a plan and test matrix before editing"
              ],
              [
                "Large refactor",
                "Work in small commits and verify after each phase"
              ]
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Safety prompt:\nBefore making changes, identify the blast radius. List files that might be edited, tests that must pass, and any commands that could be destructive. Ask before running risky commands."
          }
        ]
      },
      {
        "id": "m1s4_practice",
        "title": "Hands-on Lab: Permissions and Safety Mindset",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports core Claude Code workflow on a realistic backend project."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m1s4, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Permissions and Safety Mindset. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Permissions and Safety Mindset. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Permissions and Safety Mindset. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Permissions and Safety Mindset: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m1s5",
        "title": "Lab: Inspect a Project Without Editing",
        "minutes": 11,
        "content": [
          {
            "t": "p",
            "v": "This first lab trains the habit that prevents most bad Claude Code sessions: explore before acting. Students should experience the difference between asking Claude to immediately fix something and asking it to build a trustworthy model first."
          },
          {
            "t": "h",
            "v": "Lab setup"
          },
          {
            "t": "ol",
            "v": [
              "Choose any small project or starter Vite/Node repo",
              "Open the repository root in terminal",
              "Confirm Git status is clean",
              "Launch Claude Code",
              "Ask Claude to inspect only, not edit"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Lab prompt:\nExplore this repository without changing files. Read the README, package.json, main entry points, and tests. Then return a concise architecture map: purpose, tech stack, folder responsibilities, build/test commands, and two areas that need more investigation."
          },
          {
            "t": "h",
            "v": "Checkpoint questions"
          },
          {
            "t": "ul",
            "v": [
              "Did Claude read the right files first?",
              "Did it infer anything unsupported by evidence?",
              "Can you explain the app architecture in your own words after Claude's summary?",
              "What would you ask next before allowing edits?"
            ]
          },
          {
            "t": "note",
            "v": "Assessment: students pass this lab when they can produce a repository map and a safe next prompt without any code changes."
          }
        ]
      },
      {
        "id": "m1s5_practice",
        "title": "Hands-on Lab: Lab: Inspect a Project Without Editing",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/claude-code-action because it supports GitHub issue/PR automation and workflow safety."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/claude-code-action",
                "Clone or open the repo, create a branch named lab/m1s5, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Lab: Inspect a Project Without Editing. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/claude-code-action",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Lab: Inspect a Project Without Editing. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/claude-code-action",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Lab: Inspect a Project Without Editing. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/claude-code-action",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/claude-code-action",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/claude-code-action",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Lab: Inspect a Project Without Editing: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      }
    ]
  },
  {
    "id": "m2",
    "title": "Installation, Setup, and Project Onboarding",
    "color": "#0284C7",
    "bg": "#0C4A6E",
    "minutes": 140,
    "sections": [
      {
        "id": "m2s1",
        "title": "Prerequisites and Installation",
        "minutes": 10,
        "content": [
          {
            "t": "p",
            "v": "A smooth first install matters because learners who fight tooling lose trust before they reach the workflow. Confirm Node, npm, Git, and shell access first. Then install Claude Code and authenticate using the account or API path appropriate for your environment."
          },
          {
            "t": "h",
            "v": "Pre-flight checklist"
          },
          {
            "t": "ul",
            "v": [
              "Node.js 18+ installed",
              "Git installed and configured with user.name and user.email",
              "A terminal learners are comfortable with",
              "A disposable practice repository or branch",
              "Access to Claude Code through a supported Claude plan or Anthropic API key"
            ]
          },
          {
            "t": "code",
            "lang": "bash",
            "v": "node --version\nnpm --version\ngit --version\nnpm install -g @anthropic-ai/claude-code\nclaude"
          },
          {
            "t": "h",
            "v": "Common install problems"
          },
          {
            "t": "table",
            "h": [
              "Symptom",
              "Likely cause",
              "Fix"
            ],
            "r": [
              [
                "claude: command not found",
                "Global npm bin not on PATH",
                "Find npm bin path and add it to shell profile"
              ],
              [
                "Permission denied during npm install",
                "Global npm permission issue",
                "Use a Node version manager or configure npm prefix"
              ],
              [
                "Authentication loop",
                "Browser/session mismatch",
                "Sign out/in or authenticate from the same profile"
              ]
            ]
          },
          {
            "t": "note",
            "v": "Do installation as a live demo only if the audience is small. For workshops, send the checklist before class and start with a verification command."
          }
        ]
      },
      {
        "id": "m2s1_practice",
        "title": "Hands-on Lab: Prerequisites and Installation",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/claude-code-action because it supports GitHub issue/PR automation and workflow safety."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/claude-code-action",
                "Clone or open the repo, create a branch named lab/m2s1, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Prerequisites and Installation. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/claude-code-action",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Prerequisites and Installation. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/claude-code-action",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Prerequisites and Installation. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/claude-code-action",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/claude-code-action",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/claude-code-action",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Prerequisites and Installation: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m2s2",
        "title": "Preparing a Repository for AI Work",
        "minutes": 10,
        "content": [
          {
            "t": "p",
            "v": "Claude Code performs best when the repository is in a known state. Your baseline should make it obvious what the agent changed and easy to revert if the work goes wrong."
          },
          {
            "t": "h",
            "v": "Repository readiness checklist"
          },
          {
            "t": "ol",
            "v": [
              "Pull latest main branch",
              "Create a new feature branch",
              "Run existing tests once manually",
              "Commit or stash all local changes",
              "Confirm package manager and lockfile are clear",
              "Open Claude Code from the repository root, not a random subfolder"
            ]
          },
          {
            "t": "code",
            "lang": "bash",
            "v": "git checkout main\ngit pull\ngit checkout -b ai-workflow-lab\ngit status\nnpm test # or the project test command"
          },
          {
            "t": "h",
            "v": "Why this matters"
          },
          {
            "t": "ul",
            "v": [
              "A clean baseline makes AI diffs reviewable",
              "A feature branch makes rollback safe",
              "A known test state prevents blaming Claude for pre-existing failures",
              "Running from the root helps Claude find README, package files, and config"
            ]
          }
        ]
      },
      {
        "id": "m2s2_practice",
        "title": "Hands-on Lab: Preparing a Repository for AI Work",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/claude-code-action because it supports GitHub issue/PR automation and workflow safety."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/claude-code-action",
                "Clone or open the repo, create a branch named lab/m2s2, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Preparing a Repository for AI Work. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/claude-code-action",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Preparing a Repository for AI Work. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/claude-code-action",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Preparing a Repository for AI Work. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/claude-code-action",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/claude-code-action",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/claude-code-action",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Preparing a Repository for AI Work: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m2s3",
        "title": "First Run, /init, and CLAUDE.md",
        "minutes": 12,
        "content": [
          {
            "t": "p",
            "v": "A strong project memory file turns repeated context-setting into a one-time investment. Claude Code can help initialize project memory, but you should treat the generated result as a draft that needs human editing."
          },
          {
            "t": "h",
            "v": "What CLAUDE.md should capture"
          },
          {
            "t": "ul",
            "v": [
              "Project purpose and business domain",
              "Tech stack, package manager, and versions",
              "Build, test, lint, and deploy commands",
              "Directory map and important entry points",
              "Coding conventions and patterns to follow",
              "Files or folders Claude should avoid",
              "Security and data-handling rules"
            ]
          },
          {
            "t": "code",
            "lang": "markdown",
            "v": "# Project Guide for Claude Code\n\n## Commands\n- Install: npm install\n- Dev: npm run dev\n- Test: npm test\n- Build: npm run build\n\n## Rules\n- Do not edit generated files in /dist or /build.\n- Add or update tests when behavior changes.\n- Before committing, run tests and summarize the diff."
          },
          {
            "t": "h",
            "v": "Exercise"
          },
          {
            "t": "ol",
            "v": [
              "Ask Claude to draft CLAUDE.md from the repository",
              "Edit the file manually to add rules Claude cannot infer",
              "Ask Claude to critique the file for missing instructions",
              "Commit the improved CLAUDE.md"
            ]
          }
        ]
      },
      {
        "id": "m2s3_practice",
        "title": "Hands-on Lab: First Run, /init, and CLAUDE.md",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/claude-code-action because it supports GitHub issue/PR automation and workflow safety."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/claude-code-action",
                "Clone or open the repo, create a branch named lab/m2s3, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: First Run, /init, and CLAUDE.md. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/claude-code-action",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to First Run, /init, and CLAUDE.md. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/claude-code-action",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice First Run, /init, and CLAUDE.md. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/claude-code-action",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/claude-code-action",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/claude-code-action",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for First Run, /init, and CLAUDE.md: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m2s4",
        "title": "Settings, Permissions, and Team Defaults",
        "minutes": 8,
        "content": [
          {
            "t": "p",
            "v": "Different projects need different levels of autonomy. A toy repo may be safe with auto-accept for reads and tests; a production repo needs stricter approval. Teach learners to choose a mode deliberately instead of copying a blanket setting."
          },
          {
            "t": "table",
            "h": [
              "Setting decision",
              "Conservative default",
              "When to loosen it"
            ],
            "r": [
              [
                "File edits",
                "Ask before edits",
                "After plan is approved and branch is clean"
              ],
              [
                "Bash commands",
                "Ask for risky commands",
                "Allow known safe commands like npm test"
              ],
              [
                "External tools",
                "Require explicit approval",
                "When scoped MCP tools are read-only or sandboxed"
              ],
              [
                "Commits",
                "Ask before git add/commit",
                "When commit message and diff are reviewed"
              ]
            ]
          },
          {
            "t": "h",
            "v": "Team policy prompt"
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Review our Claude Code usage policy for this repository. Suggest safe defaults for file edits, bash commands, tests, commits, and external tools. Format as a table with risk and recommendation."
          },
          {
            "t": "note",
            "v": "For teams, put defaults in documentation and enforce critical rules with hooks. Do not rely on every developer remembering the same safety habit."
          }
        ]
      },
      {
        "id": "m2s4_practice",
        "title": "Hands-on Lab: Settings, Permissions, and Team Defaults",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/claude-code-action because it supports GitHub issue/PR automation and workflow safety."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/claude-code-action",
                "Clone or open the repo, create a branch named lab/m2s4, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Settings, Permissions, and Team Defaults. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/claude-code-action",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Settings, Permissions, and Team Defaults. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/claude-code-action",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Settings, Permissions, and Team Defaults. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/claude-code-action",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/claude-code-action",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/claude-code-action",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Settings, Permissions, and Team Defaults: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m2s5",
        "title": "Lab: Create a Project Onboarding Prompt",
        "minutes": 10,
        "content": [
          {
            "t": "p",
            "v": "In this lab, students write a reusable first prompt they can use at the start of any Claude Code session. The goal is to make exploration predictable and evidence-based."
          },
          {
            "t": "h",
            "v": "Prompt template"
          },
          {
            "t": "code",
            "lang": "text",
            "v": "You are onboarding to this repository. Do not edit files.\n\n1. Read README, package files, config, and main entry points.\n2. Identify build, test, lint, and dev commands.\n3. Create an architecture map with folder responsibilities.\n4. Identify risky areas: auth, payments, database, secrets, migrations.\n5. Return open questions before proposing any code changes."
          },
          {
            "t": "h",
            "v": "Deliverable"
          },
          {
            "t": "ul",
            "v": [
              "A saved prompt in docs/ai/onboarding-prompt.md or .claude/commands/onboard.md",
              "A short explanation of when to use it",
              "A checklist for evaluating Claude's first response"
            ]
          }
        ]
      },
      {
        "id": "m2s5_practice",
        "title": "Hands-on Lab: Lab: Create a Project Onboarding Prompt",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/claude-code-action because it supports GitHub issue/PR automation and workflow safety."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/claude-code-action",
                "Clone or open the repo, create a branch named lab/m2s5, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Lab: Create a Project Onboarding Prompt. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/claude-code-action",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Lab: Create a Project Onboarding Prompt. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/claude-code-action",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Lab: Create a Project Onboarding Prompt. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/claude-code-action",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/claude-code-action",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/claude-code-action",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Lab: Create a Project Onboarding Prompt: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      }
    ]
  },
  {
    "id": "m3",
    "title": "Daily Development Workflow",
    "color": "#059669",
    "bg": "#064E3B",
    "minutes": 165,
    "sections": [
      {
        "id": "m3s1",
        "title": "Explore Phase: Evidence Before Edits",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "Explore phase is where Claude gathers evidence. You should ask it to read the code that proves how the system works, not just the files that sound relevant. A good explore prompt produces a map, assumptions, unknowns, and proposed next files to inspect."
          },
          {
            "t": "h",
            "v": "Explore outputs to demand"
          },
          {
            "t": "ul",
            "v": [
              "Architecture summary in plain English",
              "File list with why each file matters",
              "Data flow or request flow for the feature area",
              "Current tests and coverage gaps",
              "Unknowns that should be resolved before editing",
              "Risks and edge cases"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Explore how user authentication works. Do not change files. Trace the flow from request entry point to session/token validation and user lookup. Include file paths, key functions, tests, and any assumptions you cannot prove."
          },
          {
            "t": "h",
            "v": "Anti-patterns"
          },
          {
            "t": "table",
            "h": [
              "Bad behavior",
              "Correction"
            ],
            "r": [
              [
                "Claude reads only one obvious file",
                "Ask it to trace callers, tests, and config"
              ],
              [
                "Claude guesses architecture",
                "Ask for file-path evidence for each claim"
              ],
              [
                "Claude starts editing too early",
                "Stop and request a written understanding first"
              ]
            ]
          }
        ]
      },
      {
        "id": "m3s1_practice",
        "title": "Hands-on Lab: Explore Phase: Evidence Before Edits",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports core Claude Code workflow on a realistic backend project."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m3s1, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Explore Phase: Evidence Before Edits. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Explore Phase: Evidence Before Edits. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Explore Phase: Evidence Before Edits. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Explore Phase: Evidence Before Edits: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m3s2",
        "title": "Plan Phase: Convert Understanding into a Safe Change List",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "Plan phase is where you prevent wasted edits. A useful plan names files, explains changes, lists tests, calls out risks, and defines what will not be changed. The plan should be small enough to review before implementation."
          },
          {
            "t": "h",
            "v": "A high-quality plan contains"
          },
          {
            "t": "ol",
            "v": [
              "Goal restated in one sentence",
              "Files to edit and why",
              "Files to read but not edit",
              "Data model or API changes, if any",
              "Test plan with specific commands",
              "Rollback plan",
              "Open questions or assumptions"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Based on your exploration, create an implementation plan. Do not edit files. Include: files to modify, exact behavior changes, tests to add/update, commands to run, risks, and rollback steps. Keep the first implementation slice under 60 minutes."
          },
          {
            "t": "note",
            "v": "If the plan touches too many files, ask Claude to split it into phases. The first phase should usually prove the approach with one vertical slice."
          }
        ]
      },
      {
        "id": "m3s2_practice",
        "title": "Hands-on Lab: Plan Phase: Convert Understanding into a Safe Change List",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports core Claude Code workflow on a realistic backend project."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m3s2, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Plan Phase: Convert Understanding into a Safe Change List. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Plan Phase: Convert Understanding into a Safe Change List. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Plan Phase: Convert Understanding into a Safe Change List. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Plan Phase: Convert Understanding into a Safe Change List: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m3s3",
        "title": "Code Phase: Small Iterations, Not Big Bang Edits",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "When coding starts, resist the temptation to ask for everything at once. Small edits plus immediate verification make it easy to identify which change introduced a failure. Claude is good at iteration, so structure the task to exploit that strength."
          },
          {
            "t": "h",
            "v": "Implementation rules"
          },
          {
            "t": "ul",
            "v": [
              "Implement one logical slice at a time",
              "Run the narrowest relevant test first",
              "Do not change test expectations just to make failures disappear",
              "Ask Claude to explain each failed test before fixing it",
              "Review the diff after each meaningful step"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Implement phase 1 only. After editing, run the most relevant test file first. If tests fail, explain the failure before attempting a fix. Do not modify unrelated files."
          },
          {
            "t": "h",
            "v": "Troubleshooting branch"
          },
          {
            "t": "table",
            "h": [
              "If Claude...",
              "Say..."
            ],
            "r": [
              [
                "Edits unrelated files",
                "Revert unrelated changes and explain why they were touched"
              ],
              [
                "Changes tests incorrectly",
                "Restore original expectations and fix implementation"
              ],
              [
                "Runs broad commands too early",
                "Run the narrow test first, then broaden verification"
              ],
              [
                "Loops on the same error",
                "Stop, summarize attempts, and propose a new hypothesis"
              ]
            ]
          }
        ]
      },
      {
        "id": "m3s3_practice",
        "title": "Hands-on Lab: Code Phase: Small Iterations, Not Big Bang Edits",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports core Claude Code workflow on a realistic backend project."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m3s3, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Code Phase: Small Iterations, Not Big Bang Edits. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Code Phase: Small Iterations, Not Big Bang Edits. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Code Phase: Small Iterations, Not Big Bang Edits. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Code Phase: Small Iterations, Not Big Bang Edits: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m3s4",
        "title": "Verify Phase: Tests, Lint, Build, and Manual Checks",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "Verification is not optional. A Claude Code session is incomplete until the change is tested at the right levels and the final state is explainable. Teach students to combine automated checks with targeted manual inspection."
          },
          {
            "t": "h",
            "v": "Verification ladder"
          },
          {
            "t": "ol",
            "v": [
              "Run the narrow test connected to the change",
              "Run the broader package/module test suite",
              "Run lint/typecheck if available",
              "Run the build command",
              "Inspect Git diff manually",
              "For UI changes, run the app and compare screenshots"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Run the verification ladder for this change. Use the narrowest relevant tests first, then lint/typecheck/build. If any step fails, stop and explain the failure with file-path evidence before fixing."
          },
          {
            "t": "h",
            "v": "Final verification report format"
          },
          {
            "t": "code",
            "lang": "markdown",
            "v": "## Verification Report\n- Changed files:\n- Tests run:\n- Passing checks:\n- Failing or skipped checks:\n- Manual checks performed:\n- Remaining risks:"
          }
        ]
      },
      {
        "id": "m3s4_practice",
        "title": "Hands-on Lab: Verify Phase: Tests, Lint, Build, and Manual Checks",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is alan2207/bulletproof-react because it supports professional React architecture and UI workflow practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "alan2207/bulletproof-react",
                "Clone or open the repo, create a branch named lab/m3s4, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Verify Phase: Tests, Lint, Build, and Manual Checks. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "alan2207/bulletproof-react",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Verify Phase: Tests, Lint, Build, and Manual Checks. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "alan2207/bulletproof-react",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Verify Phase: Tests, Lint, Build, and Manual Checks. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "alan2207/bulletproof-react",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "alan2207/bulletproof-react",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "alan2207/bulletproof-react",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Verify Phase: Tests, Lint, Build, and Manual Checks: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m3s5",
        "title": "Commit and PR Handoff",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "The commit phase turns a successful session into maintainable team work. Claude can summarize diffs, draft commit messages, and generate PR descriptions, but you should verify the final diff and make sure the story is accurate."
          },
          {
            "t": "h",
            "v": "Commit checklist"
          },
          {
            "t": "ul",
            "v": [
              "Git diff reviewed by human",
              "No secrets or generated junk committed",
              "Tests and build status captured",
              "Commit message explains intent, not just file changes",
              "PR description includes validation and risks"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Review the final git diff and create a PR-ready summary. Include: problem, solution, changed files, screenshots if UI changed, tests run, risks, and follow-up work. Then propose a Conventional Commit message."
          },
          {
            "t": "table",
            "h": [
              "Commit type",
              "Use for"
            ],
            "r": [
              [
                "feat",
                "New user-visible behavior"
              ],
              [
                "fix",
                "Bug fix"
              ],
              [
                "refactor",
                "Internal change without behavior change"
              ],
              [
                "test",
                "Test-only changes"
              ],
              [
                "docs",
                "Documentation/course content changes"
              ],
              [
                "chore",
                "Tooling or maintenance"
              ]
            ]
          }
        ]
      },
      {
        "id": "m3s5_practice",
        "title": "Hands-on Lab: Commit and PR Handoff",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/claude-code-action because it supports GitHub issue/PR automation and workflow safety."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/claude-code-action",
                "Clone or open the repo, create a branch named lab/m3s5, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Commit and PR Handoff. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/claude-code-action",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Commit and PR Handoff. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/claude-code-action",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Commit and PR Handoff. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/claude-code-action",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/claude-code-action",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/claude-code-action",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Commit and PR Handoff: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      }
    ]
  },
  {
    "id": "m4",
    "title": "Context, Memory, Commands, and Course Assets",
    "color": "#7C3AED",
    "bg": "#3B0764",
    "minutes": 150,
    "sections": [
      {
        "id": "m4s1",
        "title": "Context Window: What Claude Can and Cannot Remember",
        "minutes": 12,
        "content": [
          {
            "t": "p",
            "v": "The context window is Claude's active working set. It includes messages, file contents, command outputs, and summaries. When it fills, older details may be compressed or dropped. Good users deliberately manage context like they manage RAM during a long-running process."
          },
          {
            "t": "h",
            "v": "Context pressure sources"
          },
          {
            "t": "ul",
            "v": [
              "Large files pasted or read unnecessarily",
              "Long command outputs and logs",
              "Repeated failed attempts without summarization",
              "Multiple unrelated tasks in one session",
              "Generated files, lockfiles, or minified bundles"
            ]
          },
          {
            "t": "h",
            "v": "Context hygiene rules"
          },
          {
            "t": "ol",
            "v": [
              "Start a fresh session for unrelated work",
              "Ask for compact summaries at task boundaries",
              "Avoid loading giant files unless needed",
              "Keep plans and decisions explicit",
              "Use persistent project memory for stable facts"
            ]
          },
          {
            "t": "note",
            "v": "The better your context hygiene, the more reliable Claude becomes late in the session. Many 'model got worse' moments are actually context-management failures."
          }
        ]
      },
      {
        "id": "m4s1_practice",
        "title": "Hands-on Lab: Context Window: What Claude Can and Cannot Remember",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports session-control commands while inspecting a real API codebase."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m4s1, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Context Window: What Claude Can and Cannot Remember. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Context Window: What Claude Can and Cannot Remember. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Context Window: What Claude Can and Cannot Remember. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Context Window: What Claude Can and Cannot Remember: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4s2",
        "title": "/compact, /clear, and /context Workflows",
        "minutes": 12,
        "content": [
          {
            "t": "p",
            "v": "Context commands are maintenance controls. Teach them before learners hit problems, not after. A proactive compact after a completed phase is much cleaner than trying to recover from a confused agent."
          },
          {
            "t": "table",
            "h": [
              "Command",
              "Use when",
              "Before running it"
            ],
            "r": [
              [
                "/context",
                "Claude seems confused or you want to inspect loaded context",
                "Ask what key files and decisions are currently in context"
              ],
              [
                "/compact",
                "The task is long but still related",
                "Ask Claude to produce a phase summary first"
              ],
              [
                "/clear",
                "You are starting unrelated work",
                "Save important decisions to CLAUDE.md or notes first"
              ]
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Before we compact, summarize the current task state: goal, decisions made, files changed, tests run, unresolved risks, and exact next step. Then I will run /compact."
          },
          {
            "t": "h",
            "v": "Mini-lab"
          },
          {
            "t": "ol",
            "v": [
              "Complete one small code change",
              "Ask Claude to summarize the session state",
              "Run /compact",
              "Ask Claude to continue from the summary",
              "Compare whether it preserved the right details"
            ]
          }
        ]
      },
      {
        "id": "m4s2_practice",
        "title": "Hands-on Lab: /compact, /clear, and /context Workflows",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports session-control commands while inspecting a real API codebase."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m4s2, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: /compact, /clear, and /context Workflows. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to /compact, /clear, and /context Workflows. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice /compact, /clear, and /context Workflows. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for /compact, /clear, and /context Workflows: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4s3",
        "title": "Writing a High-ROI CLAUDE.md",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "CLAUDE.md is the course's highest-leverage deliverable. It gives Claude durable project context and reduces repeated prompting. A weak CLAUDE.md is a vague README clone; a strong one is an operating manual for safe AI work in the repo."
          },
          {
            "t": "h",
            "v": "Recommended structure"
          },
          {
            "t": "code",
            "lang": "markdown",
            "v": "# Claude Code Operating Guide\n\n## Project Purpose\n[What this app does and who uses it]\n\n## Architecture\n[Main folders, entry points, important flows]\n\n## Commands\n- Dev:\n- Test:\n- Lint:\n- Typecheck:\n- Build:\n\n## Coding Standards\n[Patterns to follow and avoid]\n\n## Safety Rules\n[Never edit secrets/generated files/legacy areas]\n\n## Workflow Rules\nExplore before edits. Plan before risky changes. Verify before commit."
          },
          {
            "t": "h",
            "v": "Review prompt"
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Review this CLAUDE.md as if you are a senior engineer. Find missing commands, ambiguous rules, outdated assumptions, and instructions that could cause bad AI behavior. Suggest precise improvements."
          },
          {
            "t": "note",
            "v": "Keep CLAUDE.md short enough to stay useful. Put long examples in linked docs or skills so the always-loaded memory does not become noisy."
          }
        ]
      },
      {
        "id": "m4s3_practice",
        "title": "Hands-on Lab: Writing a High-ROI CLAUDE.md",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is alan2207/bulletproof-react because it supports project memory and scalable repository onboarding."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "alan2207/bulletproof-react",
                "Clone or open the repo, create a branch named lab/m4s3, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Writing a High-ROI CLAUDE.md. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "alan2207/bulletproof-react",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Writing a High-ROI CLAUDE.md. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "alan2207/bulletproof-react",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Writing a High-ROI CLAUDE.md. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "alan2207/bulletproof-react",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "alan2207/bulletproof-react",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "alan2207/bulletproof-react",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Writing a High-ROI CLAUDE.md: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4s4",
        "title": "Custom Slash Commands",
        "minutes": 10,
        "content": [
          {
            "t": "p",
            "v": "Custom commands turn high-quality prompts into reusable workflows. They are especially useful for repeated tasks like review, deploy checks, PR descriptions, onboarding, and test generation."
          },
          {
            "t": "h",
            "v": "Examples to build in class"
          },
          {
            "t": "table",
            "h": [
              "Command",
              "Purpose",
              "Suggested file"
            ],
            "r": [
              [
                "/onboard",
                "Explore repository and return architecture map",
                ".claude/commands/onboard.md"
              ],
              [
                "/review-diff",
                "Review current Git diff with severity labels",
                ".claude/commands/review-diff.md"
              ],
              [
                "/pr-desc",
                "Generate PR description from commits/diff",
                ".claude/commands/pr-desc.md"
              ],
              [
                "/verify",
                "Run verification ladder and report status",
                ".claude/commands/verify.md"
              ]
            ]
          },
          {
            "t": "code",
            "lang": "markdown",
            "v": "# .claude/commands/review-diff.md\nReview the current git diff. Focus on correctness, security, performance, test coverage, and maintainability. Return findings as:\n- [HIGH/MED/LOW] file:line — issue — recommended fix\nAlso list positives and missing tests."
          }
        ]
      },
      {
        "id": "m4s4_practice",
        "title": "Hands-on Lab: Custom Slash Commands",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports session-control commands while inspecting a real API codebase."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m4s4, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Custom Slash Commands. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Custom Slash Commands. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Custom Slash Commands. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Custom Slash Commands: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4s5",
        "title": "Lab: Build Your Team's AI Workflow Kit",
        "minutes": 11,
        "content": [
          {
            "t": "p",
            "v": "Students now create project assets they can commit to a real repo. This turns the course from notes into infrastructure."
          },
          {
            "t": "h",
            "v": "Deliverables"
          },
          {
            "t": "ol",
            "v": [
              "A CLAUDE.md file tailored to the repository",
              "At least two custom commands",
              "A docs/ai/workflow.md file explaining when to use Explore, Plan, Code, Verify, Commit",
              "A verification checklist copied into the repo",
              "A short README section telling teammates how to use the AI workflow"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Create a complete AI workflow kit for this repository. Draft CLAUDE.md, .claude/commands/onboard.md, .claude/commands/review-diff.md, and docs/ai/workflow.md. Do not commit yet. Show me the proposed file contents first."
          },
          {
            "t": "note",
            "v": "Assessment: the kit should be specific enough that another developer could start Claude Code in the repo and follow the same workflow."
          }
        ]
      },
      {
        "id": "m4s5_practice",
        "title": "Hands-on Lab: Lab: Build Your Team's AI Workflow Kit",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is alan2207/bulletproof-react because it supports professional React architecture and UI workflow practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "alan2207/bulletproof-react",
                "Clone or open the repo, create a branch named lab/m4s5, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Lab: Build Your Team's AI Workflow Kit. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "alan2207/bulletproof-react",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Lab: Build Your Team's AI Workflow Kit. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "alan2207/bulletproof-react",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Lab: Build Your Team's AI Workflow Kit. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "alan2207/bulletproof-react",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "alan2207/bulletproof-react",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "alan2207/bulletproof-react",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Lab: Build Your Team's AI Workflow Kit: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      }
    ]
  },
  {
    "id": "m4commands",
    "title": "Built-In Claude Code Commands Mastery",
    "color": "#A3E635",
    "bg": "#365314",
    "minutes": 292,
    "sections": [
      {
        "id": "m4cmds1",
        "title": "Why Built-In Commands Matter",
        "minutes": 12,
        "content": [
          {
            "t": "p",
            "v": "Claude Code commands are the control surface for the agent. Prompts tell Claude what you want; commands change how the session behaves, what context is kept, which model or effort level is used, what tools are allowed, how work is reviewed, and how sessions are resumed, branched, exported, or run in the background."
          },
          {
            "t": "p",
            "v": "A command is recognized when it appears at the start of a message. Anything after the command name becomes that command's argument. For example, /plan fix the auth bug enters plan mode and gives Claude the task description at the same time."
          },
          {
            "t": "h",
            "v": "The command mental model"
          },
          {
            "t": "table",
            "h": [
              "Layer",
              "Examples",
              "Why it matters"
            ],
            "r": [
              [
                "Session control",
                "/clear, /compact, /resume, /branch, /rename",
                "Prevents messy context and lets you return to important work."
              ],
              [
                "Execution control",
                "/plan, /effort, /model, /permissions, /sandbox",
                "Controls risk, reasoning depth, and what Claude can do."
              ],
              [
                "Inspection and recovery",
                "/context, /diff, /rewind, /doctor, /debug",
                "Lets you understand, fix, or roll back the agent's behavior."
              ],
              [
                "Engineering workflows",
                "/code-review, /security-review, /simplify, /run, /verify",
                "Turns Claude from a chat assistant into a repeatable development system."
              ],
              [
                "Automation and scale",
                "/batch, /loop, /schedule, /background, /tasks",
                "Handles work that is too long, repetitive, or parallel for one interactive session."
              ],
              [
                "Extension points",
                "/mcp, /hooks, /skills, /plugin, /agents",
                "Connects Claude Code to your team workflow, tools, and custom procedures."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Teaching rule: do not ask students to memorize every command first. Teach them to type /, search the menu, and understand the families. Memorization comes from repeated workflow use."
          }
        ]
      },
      {
        "id": "m4cmds1_practice",
        "title": "Hands-on Lab: Why Built-In Commands Matter",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is alan2207/bulletproof-react because it supports professional React architecture and UI workflow practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "alan2207/bulletproof-react",
                "Clone or open the repo, create a branch named lab/m4cmds1, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Why Built-In Commands Matter. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "alan2207/bulletproof-react",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Why Built-In Commands Matter. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "alan2207/bulletproof-react",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Why Built-In Commands Matter. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "alan2207/bulletproof-react",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "alan2207/bulletproof-react",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "alan2207/bulletproof-react",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Why Built-In Commands Matter: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4cmds2",
        "title": "The First 20 Commands Every Learner Should Practice",
        "minutes": 14,
        "content": [
          {
            "t": "p",
            "v": "These are the commands students should practice during the first week. They cover setup, context, safety, implementation, review, and handoff. If learners know only these, they can already run a disciplined Claude Code workflow."
          },
          {
            "t": "table",
            "h": [
              "Command",
              "When to use",
              "How / why"
            ],
            "r": [
              [
                "/add-dir <path>",
                "You need Claude to work across multiple folders in one session.",
                "Adds another working directory for file access; use for monorepos or shared packages."
              ],
              [
                "/agents",
                "You want to create, edit, or inspect subagent configurations.",
                "Opens agent management; use before delegating specialized review, testing, or documentation tasks."
              ],
              [
                "/autofix-pr [prompt]",
                "A PR is already open and CI or review comments need fixes.",
                "Starts a web Claude Code session that watches the PR and pushes fixes based on your instruction."
              ],
              [
                "/background [prompt]",
                "A task can continue while you free the terminal.",
                "Detaches the current session as a background agent; useful for long investigations or migrations."
              ],
              [
                "/bg",
                "You want the short alias for /background.",
                "Same intent as /background; teach aliases so students can read other developers’ workflows."
              ],
              [
                "/batch <instruction>",
                "A large change can be split into independent units.",
                "Plans and fans work out into multiple worktrees/subagents; best for broad migrations, not tiny fixes."
              ],
              [
                "/branch [name]",
                "You want to fork the conversation path without losing the original.",
                "Creates a conversation branch; use before trying an alternative approach."
              ],
              [
                "/fork",
                "You see older docs or teammates using the branch alias.",
                "Alias for /branch unless fork-subagent behavior is configured; know it so old workflows make sense."
              ],
              [
                "/btw <question>",
                "You have a side question that should not pollute the main task.",
                "Asks a quick aside without adding it to the main conversation history."
              ],
              [
                "/chrome",
                "You use Claude in Chrome and need to configure it.",
                "Opens Chrome integration settings; useful for browser-assisted coding workflows."
              ],
              [
                "/claude-api",
                "You are writing code against the Anthropic Claude API.",
                "Loads API reference material and patterns for SDK usage, streaming, tools, batches, and migrations."
              ],
              [
                "/claude-api migrate",
                "You need to upgrade existing Claude API code to a newer model.",
                "Scans target files and adjusts model IDs or parameters that changed across API versions."
              ],
              [
                "/clear [name]",
                "You are starting an unrelated task and want empty context.",
                "Starts a new conversation while preserving the old one in resume history."
              ],
              [
                "/reset",
                "You want the alias for /clear.",
                "Useful when pair-programming because many people say reset instead of clear."
              ],
              [
                "/new",
                "You want another alias for /clear.",
                "Starts fresh; use when the current context is actively harmful."
              ],
              [
                "/code-review",
                "You want a practical review of the current diff.",
                "Checks for correctness bugs and cleanup opportunities; use before commit or PR."
              ],
              [
                "/code-review --fix",
                "You want Claude to apply review findings.",
                "Lets Claude fix issues it finds; only use after inspecting the proposed findings."
              ],
              [
                "/code-review --comment",
                "You want review results posted to a GitHub PR.",
                "Converts review findings into inline comments when GitHub context is available."
              ],
              [
                "/code-review ultra",
                "You need a deeper cloud review.",
                "Runs a more intensive multi-agent/cloud review for high-risk changes."
              ],
              [
                "/color [color|default]",
                "You run multiple sessions and need visual separation.",
                "Changes prompt bar color; useful for avoiding confusion across terminals."
              ]
            ]
          },
          {
            "t": "h",
            "v": "Suggested live drill"
          },
          {
            "t": "ol",
            "v": [
              "Open a fresh repository and run /init.",
              "Ask Claude to inspect the repo, then run /context to show what was loaded.",
              "Enter /plan with a small feature request and discuss the plan before edits.",
              "After Claude edits files, run /diff and ask students to identify risk areas.",
              "Run /code-review and compare its findings with the students' manual review.",
              "Use /compact with instructions that preserve decisions, test results, and unresolved risks.",
              "Use /rename to give the session a searchable name, then /export the transcript."
            ]
          },
          {
            "t": "note",
            "v": "The goal is not speed. The goal is to teach learners how to stay in control while Claude does multi-step work."
          }
        ]
      },
      {
        "id": "m4cmds2_practice",
        "title": "Hands-on Lab: The First 20 Commands Every Learner Should Practice",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/claude-code-action because it supports GitHub issue/PR automation and workflow safety."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/claude-code-action",
                "Clone or open the repo, create a branch named lab/m4cmds2, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: The First 20 Commands Every Learner Should Practice. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/claude-code-action",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to The First 20 Commands Every Learner Should Practice. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/claude-code-action",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice The First 20 Commands Every Learner Should Practice. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/claude-code-action",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/claude-code-action",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/claude-code-action",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for The First 20 Commands Every Learner Should Practice: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4cmds3",
        "title": "Command Families: When, How, and Why",
        "minutes": 16,
        "content": [
          {
            "t": "p",
            "v": "A long command list is only useful if students know when to reach for each category. The course should teach commands as decisions: Am I setting up? Am I controlling risk? Am I recovering? Am I reviewing? Am I scaling work?"
          },
          {
            "t": "table",
            "h": [
              "Situation",
              "Use these commands",
              "Why"
            ],
            "r": [
              [
                "Starting a new repo",
                "/init, /memory, /permissions, /mcp, /agents",
                "Create project memory, set guardrails, and connect tools before serious work begins."
              ],
              [
                "Preparing a risky change",
                "/plan, /effort high, /model, /permissions, /sandbox",
                "Force thinking and restrict execution before edits happen."
              ],
              [
                "Session feels confused",
                "/context, /compact, /btw, /clear",
                "Inspect context, compress noise, ask side questions safely, or restart."
              ],
              [
                "Before committing",
                "/diff, /code-review, /security-review, /simplify, /verify",
                "Review what changed and prove behavior before shipping."
              ],
              [
                "Long-running work",
                "/background, /tasks, /stop, /resume, /logs from CLI",
                "Keep work running while freeing your terminal and monitoring progress."
              ],
              [
                "Large migration",
                "/batch, /ultraplan, /code-review ultra",
                "Plan and distribute independent units instead of overloading one context."
              ],
              [
                "Tooling problems",
                "/doctor, /debug, /status, /release-notes",
                "Separate project bugs from Claude Code environment issues."
              ],
              [
                "Team onboarding",
                "/team-onboarding, /export, /insights, /skills",
                "Turn repeated usage into documentation and shared command playbooks."
              ]
            ]
          },
          {
            "t": "h",
            "v": "Instructor explanation"
          },
          {
            "t": "p",
            "v": "Students often overuse natural language for things that should be commands. For example, typing 'please forget the previous context' is weaker than /clear; asking 'can you think first?' is weaker than /plan; asking 'what changed?' is weaker than /diff. Commands make the instruction explicit and reduce ambiguity."
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Bad: Can you maybe review the changes and tell me if anything looks risky?\nBetter: /diff\nThen: /code-review high --fix\nThen: /security-review\nThen: Summarize what you changed and what still needs manual review."
          }
        ]
      },
      {
        "id": "m4cmds3_practice",
        "title": "Hands-on Lab: Command Families: When, How, and Why",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is alan2207/bulletproof-react because it supports professional React architecture and UI workflow practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "alan2207/bulletproof-react",
                "Clone or open the repo, create a branch named lab/m4cmds3, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Command Families: When, How, and Why. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "alan2207/bulletproof-react",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Command Families: When, How, and Why. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "alan2207/bulletproof-react",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Command Families: When, How, and Why. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "alan2207/bulletproof-react",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "alan2207/bulletproof-react",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "alan2207/bulletproof-react",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Command Families: When, How, and Why: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4cmds4",
        "title": "Context and Memory Commands Deep Dive",
        "minutes": 14,
        "content": [
          {
            "t": "p",
            "v": "Context commands are the difference between a clean 90-minute session and a chaotic one. Learners should understand that Claude can only reason over what remains in the active context window. Long outputs, large files, repeated tool calls, and unfocused discussion all compete for space."
          },
          {
            "t": "table",
            "h": [
              "Command",
              "Use it when",
              "Avoid when"
            ],
            "r": [
              [
                "/context",
                "Claude seems confused, slow, repetitive, or missing earlier details",
                "You only need to start a new unrelated task; use /clear instead."
              ],
              [
                "/compact [instructions]",
                "You want to continue the same task while freeing context",
                "You need total reset or the conversation took a wrong direction."
              ],
              [
                "/clear [name]",
                "You are switching tasks completely",
                "You still need the prior plan, decisions, or test output."
              ],
              [
                "/btw <question>",
                "You need a side answer without bloating the main thread",
                "The side question is actually part of the task requirements."
              ],
              [
                "/memory",
                "Project instructions need to persist across sessions",
                "Temporary task details should stay in the current prompt, not memory."
              ],
              [
                "/export",
                "You need a transcript for handoff or review",
                "You only need the last response; use /copy instead."
              ],
              [
                "/rename",
                "A session should be easy to find later",
                "The session is disposable."
              ],
              [
                "/resume",
                "You need to continue real prior work",
                "The old context is messy and unrelated; use /clear."
              ]
            ]
          },
          {
            "t": "h",
            "v": "Compaction prompt patterns"
          },
          {
            "t": "code",
            "lang": "text",
            "v": "/compact Preserve: current goal, approved plan, files changed, tests run, failures, user constraints, unresolved risks, and exact next step. Remove: repeated discussion, failed approaches we abandoned, and irrelevant terminal noise."
          },
          {
            "t": "code",
            "lang": "text",
            "v": "/compact Create a handoff summary for a future session. Include architecture findings, decisions made, commands run, current git diff summary, and what to verify before commit."
          },
          {
            "t": "note",
            "v": "Teach students to compact before the session degrades. Waiting until Claude is confused is like saving a file after the editor crashes."
          }
        ]
      },
      {
        "id": "m4cmds4_practice",
        "title": "Hands-on Lab: Context and Memory Commands Deep Dive",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is alan2207/bulletproof-react because it supports professional React architecture and UI workflow practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "alan2207/bulletproof-react",
                "Clone or open the repo, create a branch named lab/m4cmds4, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Context and Memory Commands Deep Dive. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "alan2207/bulletproof-react",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Context and Memory Commands Deep Dive. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "alan2207/bulletproof-react",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Context and Memory Commands Deep Dive. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "alan2207/bulletproof-react",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "alan2207/bulletproof-react",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "alan2207/bulletproof-react",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Context and Memory Commands Deep Dive: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4cmds5",
        "title": "Safety, Permissions, and Execution Commands",
        "minutes": 14,
        "content": [
          {
            "t": "p",
            "v": "The most productive Claude Code users are not reckless. They combine plan mode, permission rules, sandboxing, and review commands so Claude can move quickly inside safe boundaries."
          },
          {
            "t": "table",
            "h": [
              "Command",
              "When",
              "Why"
            ],
            "r": [
              [
                "/plan [description]",
                "Before refactors, migrations, auth changes, schema changes, payment logic, or destructive scripts",
                "It prevents Claude from editing before it explains what it will do."
              ],
              [
                "/permissions",
                "Before enabling faster workflows or working in sensitive repos",
                "It defines what tools/actions can run automatically, ask first, or be denied."
              ],
              [
                "/allowed-tools",
                "When following older docs or team notes",
                "Alias for permission management; still important vocabulary."
              ],
              [
                "/sandbox",
                "When commands could touch files, network, or environment in risky ways",
                "Adds isolation where supported."
              ],
              [
                "/effort high",
                "When architecture, debugging, or security decisions matter",
                "Allocates more reasoning depth to hard decisions."
              ],
              [
                "/fast on",
                "When the task is simple and latency matters",
                "Speeds up simple iterations, but should be turned off for high-risk reasoning."
              ],
              [
                "/goal",
                "When you want continued progress until a clear stop condition",
                "Useful for 'keep fixing tests until all pass', but dangerous with vague goals."
              ],
              [
                "/rewind",
                "When edits or reasoning went wrong",
                "Restores a previous point instead of manually untangling every change."
              ],
              [
                "/doctor",
                "When Claude Code installation/configuration may be broken",
                "Prevents wasting time debugging a project when the toolchain is the issue."
              ],
              [
                "/debug",
                "When diagnostics require logs",
                "Captures evidence for bugs, MCP issues, or session behavior problems."
              ]
            ]
          },
          {
            "t": "h",
            "v": "Safety prompt to pair with commands"
          },
          {
            "t": "code",
            "lang": "text",
            "v": "/plan We need to modify authentication. Before editing, identify all security-sensitive files, list potential failure modes, and propose a minimal implementation plan. Do not run migration, delete files, or modify secrets without explicit approval."
          },
          {
            "t": "note",
            "v": "Do not teach auto-accept as a default beginner habit. Teach safe defaults first, then controlled automation once students can review diffs and understand tool risk."
          }
        ]
      },
      {
        "id": "m4cmds5_practice",
        "title": "Hands-on Lab: Safety, Permissions, and Execution Commands",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is alan2207/bulletproof-react because it supports professional React architecture and UI workflow practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "alan2207/bulletproof-react",
                "Clone or open the repo, create a branch named lab/m4cmds5, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Safety, Permissions, and Execution Commands. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "alan2207/bulletproof-react",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Safety, Permissions, and Execution Commands. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "alan2207/bulletproof-react",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Safety, Permissions, and Execution Commands. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "alan2207/bulletproof-react",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "alan2207/bulletproof-react",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "alan2207/bulletproof-react",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Safety, Permissions, and Execution Commands: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4cmds6",
        "title": "Review, Debugging, and Verification Commands",
        "minutes": 14,
        "content": [
          {
            "t": "p",
            "v": "Review commands turn Claude Code into a second engineering pass. This matters because agent-generated code can look plausible while missing edge cases, tests, security boundaries, or project conventions."
          },
          {
            "t": "table",
            "h": [
              "Command",
              "Best use",
              "Output expectation"
            ],
            "r": [
              [
                "/diff",
                "After every meaningful implementation step",
                "A concrete view of files changed, not a vague summary."
              ],
              [
                "/code-review",
                "Before commit or pull request",
                "Correctness bugs, cleanups, efficiency issues, and suggested fixes."
              ],
              [
                "/code-review --fix",
                "After you agree with findings",
                "Applied fixes plus another diff review."
              ],
              [
                "/security-review",
                "Auth, permissions, secrets, data flows, input handling",
                "Security-specific findings with severity and file references."
              ],
              [
                "/simplify",
                "When code works but feels overbuilt",
                "Cleanup pass focused on reuse, simpler abstractions, and efficiency."
              ],
              [
                "/review [PR]",
                "When reviewing an existing PR locally",
                "PR-level feedback, often with branch context."
              ],
              [
                "/run",
                "When UI or runtime behavior must be observed",
                "Launch app and inspect actual behavior."
              ],
              [
                "/verify",
                "After implementing a feature or bug fix",
                "Build/run/observe that the change works beyond static checks."
              ],
              [
                "/debug",
                "When Claude Code tooling or session behavior is faulty",
                "Debug-log-grounded troubleshooting."
              ],
              [
                "/doctor",
                "When setup is suspicious",
                "Installation/configuration diagnosis and possible fixes."
              ]
            ]
          },
          {
            "t": "h",
            "v": "Review chain for serious changes"
          },
          {
            "t": "code",
            "lang": "text",
            "v": "/diff\n/code-review high\n/security-review\n/simplify src/auth src/api\n/verify\nSummarize: remaining risks, tests run, manual checks required, and exact commit message."
          },
          {
            "t": "note",
            "v": "A strong review flow uses multiple lenses. Correctness review, security review, simplification review, and behavioral verification catch different classes of problems."
          }
        ]
      },
      {
        "id": "m4cmds6_practice",
        "title": "Hands-on Lab: Review, Debugging, and Verification Commands",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is alan2207/bulletproof-react because it supports professional React architecture and UI workflow practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "alan2207/bulletproof-react",
                "Clone or open the repo, create a branch named lab/m4cmds6, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Review, Debugging, and Verification Commands. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "alan2207/bulletproof-react",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Review, Debugging, and Verification Commands. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "alan2207/bulletproof-react",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Review, Debugging, and Verification Commands. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "alan2207/bulletproof-react",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "alan2207/bulletproof-react",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "alan2207/bulletproof-react",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Review, Debugging, and Verification Commands: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4cmds7",
        "title": "Automation, Background Work, and GitHub Commands",
        "minutes": 14,
        "content": [
          {
            "t": "p",
            "v": "Once learners can safely run one session, teach them to scale. Automation commands are for work that is long-running, repetitive, PR-driven, cloud-driven, or independent enough to delegate."
          },
          {
            "t": "table",
            "h": [
              "Workflow",
              "Commands",
              "Teaching explanation"
            ],
            "r": [
              [
                "Long investigation",
                "/background, /tasks, /stop, /resume",
                "Detach the agent, monitor it, and return when useful output exists."
              ],
              [
                "Parallel migration",
                "/batch, /workflows, /code-review ultra",
                "Decompose into independent units instead of forcing one context to carry everything."
              ],
              [
                "Repeated monitoring",
                "/loop, /schedule, /goal",
                "Use only when the stop condition is clear and safe."
              ],
              [
                "PR automation",
                "/install-github-app, /web-setup, /autofix-pr, /review",
                "Connect GitHub first, then let Claude inspect or fix PR feedback."
              ],
              [
                "Remote handoff",
                "/remote-control, /teleport, /desktop, /mobile",
                "Move work across devices or between web and terminal."
              ],
              [
                "Team enablement",
                "/team-onboarding, /export, /insights",
                "Turn usage history into documentation and shared habits."
              ]
            ]
          },
          {
            "t": "h",
            "v": "Lab: PR fix loop"
          },
          {
            "t": "ol",
            "v": [
              "Create a branch with a small failing test or lint error.",
              "Open a PR on GitHub.",
              "Run /review to inspect the PR locally.",
              "Run /autofix-pr with a narrow prompt such as 'only fix lint and type errors'.",
              "Inspect the pushed changes with /diff and /code-review before merging."
            ]
          },
          {
            "t": "note",
            "v": "Automation is not permission to stop reviewing. It is permission to spend review time on higher-level correctness instead of repetitive mechanics."
          }
        ]
      },
      {
        "id": "m4cmds7_practice",
        "title": "Hands-on Lab: Automation, Background Work, and GitHub Commands",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/claude-code-action because it supports GitHub issue/PR automation and workflow safety."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/claude-code-action",
                "Clone or open the repo, create a branch named lab/m4cmds7, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Automation, Background Work, and GitHub Commands. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/claude-code-action",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Automation, Background Work, and GitHub Commands. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/claude-code-action",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Automation, Background Work, and GitHub Commands. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/claude-code-action",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/claude-code-action",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/claude-code-action",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Automation, Background Work, and GitHub Commands: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4cmds8",
        "title": "90+ Command Cheat Sheet: What Everyone Should Recognize",
        "minutes": 22,
        "content": [
          {
            "t": "p",
            "v": "This reference intentionally includes built-in slash commands, bundled skills, workflows, and common aliases that appear in Claude Code. Some commands are plan-, platform-, version-, or environment-dependent, so learners should always type / inside Claude Code to see what is available in their own setup."
          },
          {
            "t": "table",
            "h": [
              "Command",
              "When to use",
              "How / why"
            ],
            "r": [
              [
                "/add-dir <path>",
                "You need Claude to work across multiple folders in one session.",
                "Adds another working directory for file access; use for monorepos or shared packages."
              ],
              [
                "/agents",
                "You want to create, edit, or inspect subagent configurations.",
                "Opens agent management; use before delegating specialized review, testing, or documentation tasks."
              ],
              [
                "/autofix-pr [prompt]",
                "A PR is already open and CI or review comments need fixes.",
                "Starts a web Claude Code session that watches the PR and pushes fixes based on your instruction."
              ],
              [
                "/background [prompt]",
                "A task can continue while you free the terminal.",
                "Detaches the current session as a background agent; useful for long investigations or migrations."
              ],
              [
                "/bg",
                "You want the short alias for /background.",
                "Same intent as /background; teach aliases so students can read other developers’ workflows."
              ],
              [
                "/batch <instruction>",
                "A large change can be split into independent units.",
                "Plans and fans work out into multiple worktrees/subagents; best for broad migrations, not tiny fixes."
              ],
              [
                "/branch [name]",
                "You want to fork the conversation path without losing the original.",
                "Creates a conversation branch; use before trying an alternative approach."
              ],
              [
                "/fork",
                "You see older docs or teammates using the branch alias.",
                "Alias for /branch unless fork-subagent behavior is configured; know it so old workflows make sense."
              ],
              [
                "/btw <question>",
                "You have a side question that should not pollute the main task.",
                "Asks a quick aside without adding it to the main conversation history."
              ],
              [
                "/chrome",
                "You use Claude in Chrome and need to configure it.",
                "Opens Chrome integration settings; useful for browser-assisted coding workflows."
              ],
              [
                "/claude-api",
                "You are writing code against the Anthropic Claude API.",
                "Loads API reference material and patterns for SDK usage, streaming, tools, batches, and migrations."
              ],
              [
                "/claude-api migrate",
                "You need to upgrade existing Claude API code to a newer model.",
                "Scans target files and adjusts model IDs or parameters that changed across API versions."
              ],
              [
                "/clear [name]",
                "You are starting an unrelated task and want empty context.",
                "Starts a new conversation while preserving the old one in resume history."
              ],
              [
                "/reset",
                "You want the alias for /clear.",
                "Useful when pair-programming because many people say reset instead of clear."
              ],
              [
                "/new",
                "You want another alias for /clear.",
                "Starts fresh; use when the current context is actively harmful."
              ],
              [
                "/code-review",
                "You want a practical review of the current diff.",
                "Checks for correctness bugs and cleanup opportunities; use before commit or PR."
              ],
              [
                "/code-review --fix",
                "You want Claude to apply review findings.",
                "Lets Claude fix issues it finds; only use after inspecting the proposed findings."
              ],
              [
                "/code-review --comment",
                "You want review results posted to a GitHub PR.",
                "Converts review findings into inline comments when GitHub context is available."
              ],
              [
                "/code-review ultra",
                "You need a deeper cloud review.",
                "Runs a more intensive multi-agent/cloud review for high-risk changes."
              ],
              [
                "/color [color|default]",
                "You run multiple sessions and need visual separation.",
                "Changes prompt bar color; useful for avoiding confusion across terminals."
              ],
              [
                "/compact [instructions]",
                "The session is long but you want to keep working.",
                "Summarizes old conversation into a smaller context footprint; add focus instructions to preserve key decisions."
              ],
              [
                "/config",
                "You need settings, theme, model, editor mode, or preferences.",
                "Opens the settings UI; teach this early because many later issues are configuration problems."
              ],
              [
                "/settings",
                "You want the alias for /config.",
                "Same behavior; students should recognize both names."
              ],
              [
                "/context",
                "You need to see why Claude is slow, forgetful, or overloaded.",
                "Visualizes context usage and suggests what is consuming space."
              ],
              [
                "/context all",
                "You need the detailed context breakdown.",
                "Expands the collapsed context view to inspect exact contributors."
              ],
              [
                "/copy [N]",
                "You want to reuse the last assistant answer or a code block.",
                "Copies the latest or Nth-latest response; interactive picker appears for code blocks."
              ],
              [
                "/cost",
                "You want the alias for /usage.",
                "Shows usage/cost information; useful in paid/team environments."
              ],
              [
                "/debug [description]",
                "Claude Code itself is behaving strangely.",
                "Enables or inspects debug logs; include a description to focus troubleshooting."
              ],
              [
                "/deep-research <question>",
                "You need a cited research report from web sources.",
                "Runs a workflow that fans out searches and cross-checks sources; not for local-only code questions."
              ],
              [
                "/desktop",
                "You want to continue the current session in the desktop app.",
                "Moves the session to Claude Code Desktop where available."
              ],
              [
                "/app",
                "You want the alias for /desktop.",
                "Same purpose; useful in cross-device workflows."
              ],
              [
                "/diff",
                "You need to inspect uncommitted changes and per-turn changes.",
                "Opens an interactive diff viewer; use before asking for review or commit."
              ],
              [
                "/doctor",
                "Install, auth, or runtime setup seems broken.",
                "Runs diagnostics and can offer fixes; use before manually debugging environment issues."
              ],
              [
                "/effort [level|auto]",
                "A task needs more or less reasoning budget.",
                "Sets reasoning effort such as low, medium, high, xhigh, max, or auto depending on model availability."
              ],
              [
                "/exit",
                "You want to leave the CLI.",
                "Exits, or detaches from an attached background session while it keeps running."
              ],
              [
                "/quit",
                "You want the alias for /exit.",
                "Know it because users type quit naturally."
              ],
              [
                "/export [filename]",
                "You want to save or share the conversation.",
                "Exports the transcript as text; use for handoff, audit, or course evidence."
              ],
              [
                "/fast [on|off]",
                "You need faster interaction and can trade off depth.",
                "Toggles fast mode; good for simple edits or exploration, not architecture decisions."
              ],
              [
                "/feedback [report]",
                "You need to report a bug or send feedback.",
                "Submits feedback with session context when appropriate."
              ],
              [
                "/bug",
                "You want the alias for /feedback.",
                "Use when reporting unexpected Claude Code behavior."
              ],
              [
                "/share",
                "You want another alias for /feedback.",
                "Useful when sharing a problematic or interesting session."
              ],
              [
                "/fewer-permission-prompts",
                "Permission prompts are interrupting safe read-only work.",
                "Analyzes transcripts and suggests allowlist settings to reduce repeated prompts."
              ],
              [
                "/focus",
                "You want a cleaner terminal view.",
                "Shows only the last prompt, compact tool summary, and final response in fullscreen mode."
              ],
              [
                "/goal [condition|clear]",
                "You want Claude to keep working until a condition is met.",
                "Sets a persistent goal; clear it when the condition is no longer appropriate."
              ],
              [
                "/heapdump",
                "Claude Code has high memory usage or suspected leak.",
                "Writes a heap snapshot and memory breakdown for diagnostics."
              ],
              [
                "/help",
                "You forgot a command or need the available list.",
                "Shows help and available commands; this is the safest discovery habit."
              ],
              [
                "/hooks",
                "You need deterministic automation around tool calls.",
                "Views hook configurations; use when enforcing formatters, blockers, notifications, or audit logging."
              ],
              [
                "/ide",
                "You need IDE integration status or setup.",
                "Manages IDE integrations such as VS Code/JetBrains support."
              ],
              [
                "/init",
                "You are opening a repo for the first time.",
                "Generates starter CLAUDE.md project memory; use as the first setup command in most repositories."
              ],
              [
                "/insights",
                "You want to learn from your own Claude Code usage.",
                "Generates a report about session patterns, friction points, and project areas."
              ],
              [
                "/install-github-app",
                "You want Claude GitHub Actions integration.",
                "Walks through repository selection and GitHub app setup."
              ],
              [
                "/install-slack-app",
                "Your team wants Slack integration.",
                "Starts OAuth flow for the Claude Slack app."
              ],
              [
                "/keybindings",
                "You want to customize keyboard shortcuts.",
                "Opens or creates the keybindings config file."
              ],
              [
                "/login",
                "You need to sign in.",
                "Starts authentication to your Anthropic account."
              ],
              [
                "/logout",
                "You need to sign out or switch accounts.",
                "Ends the current authenticated session."
              ],
              [
                "/loop [interval] [prompt]",
                "A prompt should run repeatedly.",
                "Runs recurring checks while the session stays open; useful for deploy monitoring or periodic test checks."
              ],
              [
                "/proactive",
                "You want the alias for /loop.",
                "Good label for autonomous maintenance loops."
              ],
              [
                "/mcp",
                "You need to connect external tools or data sources.",
                "Manages MCP servers and OAuth authentication."
              ],
              [
                "/memory",
                "You need to edit or inspect CLAUDE.md memory.",
                "Opens project/user memory controls and auto-memory settings."
              ],
              [
                "/mobile",
                "You want the mobile app handoff.",
                "Shows a QR code to download/open Claude mobile."
              ],
              [
                "/ios",
                "You want the iOS alias for /mobile.",
                "Useful when onboarding Mac/iPhone users."
              ],
              [
                "/android",
                "You want the Android alias for /mobile.",
                "Useful when onboarding Android users."
              ],
              [
                "/model [model]",
                "You need to switch model or default model.",
                "Opens model picker or switches directly; use higher capability for risky architecture, lower for quick tasks."
              ],
              [
                "/passes",
                "You are eligible to share free Claude Code access.",
                "Plan/account dependent; know it exists but do not build course workflows around it."
              ],
              [
                "/permissions",
                "You need to manage allow/ask/deny rules.",
                "Opens permission rules by scope; essential for safe automation."
              ],
              [
                "/allowed-tools",
                "You want the alias for /permissions.",
                "Older tutorials often say allowed tools; maps to the same concept."
              ],
              [
                "/plan [description]",
                "You want planning before execution.",
                "Enters plan mode and optionally starts planning the described task; use before big or risky changes."
              ],
              [
                "/plugin",
                "You need to install or manage plugins.",
                "Manages plugin-based extensions to Claude Code."
              ],
              [
                "/powerup",
                "You want interactive feature lessons.",
                "Launches quick demos; useful for self-paced learners after installation."
              ],
              [
                "/privacy-settings",
                "You need to review privacy controls.",
                "Available to some subscription users; important for enterprise/privacy-sensitive teams."
              ],
              [
                "/radio",
                "You want the Claude FM lo-fi stream.",
                "Nonessential, but students may see it in the command menu."
              ],
              [
                "/recap",
                "You need a one-line summary of the current session.",
                "Useful before pausing, handing off, or naming a session."
              ],
              [
                "/release-notes",
                "You need to know what changed in Claude Code.",
                "Shows changelog/version picker; important because command behavior evolves."
              ],
              [
                "/reload-plugins",
                "You changed plugin files and need them active now.",
                "Reloads active plugins without restarting Claude Code."
              ],
              [
                "/reload-skills",
                "You added or edited skills/commands during the session.",
                "Re-scans skill and command directories without restarting."
              ],
              [
                "/remote-control",
                "You want this local session controllable from Claude.ai.",
                "Makes the session available for remote control where supported."
              ],
              [
                "/rc",
                "You want the alias for /remote-control.",
                "Shortcut for remote-control workflows."
              ],
              [
                "/remote-env",
                "You need defaults for remote web sessions.",
                "Configures the environment used by remote sessions started with remote features."
              ],
              [
                "/rename [name]",
                "You want easier session navigation later.",
                "Names the session; use before leaving important work."
              ],
              [
                "/resume [session]",
                "You want to continue a previous conversation.",
                "Opens a picker or resumes a named/ID session."
              ],
              [
                "/continue",
                "You want the alias for /resume.",
                "Natural term for returning to prior work."
              ],
              [
                "/review [PR]",
                "You want a local pull request review.",
                "Reviews PR context locally; different from /code-review ultra cloud review."
              ],
              [
                "/rewind",
                "You need to go back to a previous point.",
                "Rewinds conversation/code to a checkpoint or summarizes from a selected message."
              ],
              [
                "/checkpoint",
                "You want the alias for /rewind.",
                "Useful because many students think in checkpoints."
              ],
              [
                "/undo",
                "You want another alias for /rewind.",
                "Use carefully: inspect what will be reverted before accepting."
              ],
              [
                "/run",
                "You want Claude to launch and inspect the running app.",
                "Bundled skill that validates behavior by running the app, not just tests."
              ],
              [
                "/run-skill-generator",
                "Your project needs a custom run recipe.",
                "Creates a project skill teaching /run and /verify how to build and launch your app."
              ],
              [
                "/sandbox",
                "You want stronger execution isolation.",
                "Toggles sandbox mode where supported; useful for untrusted or risky commands."
              ],
              [
                "/schedule [description]",
                "You want a recurring routine in managed infrastructure.",
                "Creates, updates, lists, or runs routines conversationally."
              ],
              [
                "/routines",
                "You want the alias for /schedule.",
                "Use when teaching recurring automations."
              ],
              [
                "/scroll-speed",
                "Mouse wheel scrolling feels wrong.",
                "Adjusts terminal scroll speed in fullscreen mode."
              ],
              [
                "/security-review",
                "You want a security-focused diff review.",
                "Analyzes pending branch changes for injection, auth, secrets, and data exposure risks."
              ],
              [
                "/setup-bedrock",
                "You use Amazon Bedrock.",
                "Configures Bedrock authentication, region, and model pins."
              ],
              [
                "/setup-vertex",
                "You use Google Vertex AI.",
                "Configures Vertex authentication, project, region, and model pins."
              ],
              [
                "/simplify [target]",
                "You want cleanup without a full bug hunt.",
                "Runs cleanup-oriented review/fixes focused on reuse, simplification, efficiency, and abstraction."
              ],
              [
                "/skills",
                "You need to list, sort, or hide skills.",
                "Shows available skills and lets you manage visibility."
              ],
              [
                "/stats",
                "You want the alias for /usage.",
                "Opens usage stats; useful for team budget conversations."
              ],
              [
                "/status",
                "You need version, model, account, or connectivity information.",
                "Opens the status tab and works even while Claude is responding."
              ],
              [
                "/statusline",
                "You want a custom prompt/status display.",
                "Configures the status line, either by description or auto-detection."
              ],
              [
                "/stickers",
                "You want Claude Code stickers.",
                "Not workflow-critical, but students may see it."
              ],
              [
                "/stop",
                "You need to stop an attached background session.",
                "Stops work but keeps transcript and worktree."
              ],
              [
                "/tasks",
                "You need to inspect running background tasks.",
                "Lists and manages background tasks."
              ],
              [
                "/bashes",
                "You want the alias for /tasks.",
                "Useful when background bash commands are running."
              ],
              [
                "/team-onboarding",
                "You want an onboarding guide from real usage.",
                "Generates a team guide from recent sessions, commands, and MCP usage."
              ],
              [
                "/teleport",
                "You want to bring a web session into terminal.",
                "Fetches branch/conversation from Claude Code on the web."
              ],
              [
                "/tp",
                "You want the alias for /teleport.",
                "Shortcut for cross-environment handoff."
              ],
              [
                "/terminal-setup",
                "Your terminal keybindings need configuration.",
                "Fixes Shift+Enter and related terminal integration issues."
              ],
              [
                "/theme",
                "You want to change color theme or accessibility theme.",
                "Selects light/dark/colorblind/ANSI/custom themes."
              ],
              [
                "/tui [default|fullscreen]",
                "You want to change terminal rendering mode.",
                "Switches renderer and relaunches into it with conversation intact."
              ],
              [
                "/ultraplan <prompt>",
                "You want a deep plan reviewed in browser before execution.",
                "Drafts a plan in an ultraplan session, then execute remotely or send back to terminal."
              ],
              [
                "/ultrareview [PR]",
                "You need the older alias for deep review.",
                "Preferred path is /code-review ultra, but this alias remains useful to recognize."
              ],
              [
                "/upgrade",
                "You need to change plan tier.",
                "Opens upgrade page; plan-dependent."
              ],
              [
                "/usage",
                "You need plan limits, activity, and cost tracking.",
                "Shows session cost/usage and, on some plans, breakdown by skills, subagents, plugins, and MCP."
              ],
              [
                "/usage-credits",
                "You want to configure credits when limits are hit.",
                "Sets extra usage credit behavior where available."
              ],
              [
                "/verify",
                "You want behavioral validation after a code change.",
                "Builds/runs the app and observes whether the change works, not just tests."
              ],
              [
                "/voice [hold|tap|off]",
                "You want voice dictation.",
                "Toggles voice modes where available."
              ],
              [
                "/web-setup",
                "You need GitHub connected for Claude Code on the web.",
                "Uses local gh credentials to connect GitHub for web/remote workflows."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Do not present aliases as separate concepts. Present them as real strings users may type, but explain that many point to the same underlying command."
          }
        ]
      },
      {
        "id": "m4cmds8_practice",
        "title": "Hands-on Lab: 90+ Command Cheat Sheet: What Everyone Should Recognize",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is alan2207/bulletproof-react because it supports professional React architecture and UI workflow practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "alan2207/bulletproof-react",
                "Clone or open the repo, create a branch named lab/m4cmds8, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: 90+ Command Cheat Sheet: What Everyone Should Recognize. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "alan2207/bulletproof-react",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to 90+ Command Cheat Sheet: What Everyone Should Recognize. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "alan2207/bulletproof-react",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice 90+ Command Cheat Sheet: What Everyone Should Recognize. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "alan2207/bulletproof-react",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "alan2207/bulletproof-react",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "alan2207/bulletproof-react",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for 90+ Command Cheat Sheet: What Everyone Should Recognize: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m4cmds9",
        "title": "Labs: Build a Team Command Playbook",
        "minutes": 10,
        "content": [
          {
            "t": "p",
            "v": "The final goal is not a memorized list. The goal is a team command playbook: a short, opinionated guide that tells developers which commands to use for common work in your repositories."
          },
          {
            "t": "h",
            "v": "Lab deliverables"
          },
          {
            "t": "ol",
            "v": [
              "Create a one-page 'First 10 minutes in any repo' command flow.",
              "Create a 'Before commit' flow using /diff, /code-review, /security-review, /verify, and /export.",
              "Create a 'When Claude is confused' recovery flow using /context, /compact, /btw, /clear, and /rewind.",
              "Create a 'Large change' flow using /plan, /effort high, /batch or /ultraplan, /permissions, and /code-review ultra.",
              "Create a 'Team automation' flow using /hooks, /skills, /agents, /mcp, and /plugin.",
              "Add these flows to CLAUDE.md or a project skill so future sessions can reuse them."
            ]
          },
          {
            "t": "h",
            "v": "Example team command playbook"
          },
          {
            "t": "code",
            "lang": "markdown",
            "v": "# Team Claude Code Command Playbook\n\n## Start of repo\n/init\n/memory\n/permissions\n/mcp\n\n## Before risky edits\n/plan <task>\n/effort high\n/diff\n\n## Before commit\n/code-review high\n/security-review\n/verify\n/export handoff.txt\n\n## Recovery\n/context all\n/compact Preserve decisions, files changed, test results, and next step\n/rewind if the diff is wrong"
          },
          {
            "t": "note",
            "v": "This is the difference between a basic course and a professional workflow course: students leave with operating procedures, not just feature awareness."
          }
        ]
      },
      {
        "id": "m4cmds9_practice",
        "title": "Hands-on Lab: Labs: Build a Team Command Playbook",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is alan2207/bulletproof-react because it supports professional React architecture and UI workflow practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "alan2207/bulletproof-react",
                "Clone or open the repo, create a branch named lab/m4cmds9, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Labs: Build a Team Command Playbook. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "alan2207/bulletproof-react",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Labs: Build a Team Command Playbook. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "alan2207/bulletproof-react",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Labs: Build a Team Command Playbook. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "alan2207/bulletproof-react",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "alan2207/bulletproof-react",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "alan2207/bulletproof-react",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Labs: Build a Team Command Playbook: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      }
    ]
  },
  {
    "id": "m5",
    "title": "Debugging, Testing, Review, and Refactoring",
    "color": "#BE185D",
    "bg": "#500724",
    "minutes": 155,
    "sections": [
      {
        "id": "m5s1",
        "title": "Debugging with Claude Code",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "Debugging is where Claude Code becomes visibly useful. The agent can read stack traces, trace call paths, inspect tests, add temporary diagnostics, run commands, and revise hypotheses. The key is forcing it to reason from evidence instead of guessing."
          },
          {
            "t": "h",
            "v": "Debugging loop"
          },
          {
            "t": "ol",
            "v": [
              "Capture the exact failure output",
              "Ask Claude to identify likely files and hypotheses",
              "Inspect the relevant code path",
              "Add the smallest diagnostic or test if needed",
              "Fix the root cause, not the symptom",
              "Remove diagnostics and verify"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Debug this failing test. Do not edit yet. Read the failure output, trace the code path, list three possible root causes ranked by evidence, and identify the next file or test to inspect."
          },
          {
            "t": "h",
            "v": "Evidence grading"
          },
          {
            "t": "table",
            "h": [
              "Claim type",
              "Accept only if"
            ],
            "r": [
              [
                "This function is wrong",
                "Claude cites the file and line/function behavior"
              ],
              [
                "This test is outdated",
                "Claude shows product behavior or docs proving it"
              ],
              [
                "Dependency issue",
                "Claude checks versions, lockfile, or changelog"
              ],
              [
                "Race condition",
                "Claude explains timing path and reproduction"
              ]
            ]
          }
        ]
      },
      {
        "id": "m5s1_practice",
        "title": "Hands-on Lab: Debugging with Claude Code",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports real debugging, validation, review, testing, and refactor practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m5s1, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Debugging with Claude Code. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Debugging with Claude Code. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Debugging with Claude Code. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Debugging with Claude Code: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m5s2",
        "title": "Test Generation Without Fake Confidence",
        "minutes": 12,
        "content": [
          {
            "t": "p",
            "v": "Claude can write many tests quickly, but quantity is not quality. Teach students to ask for a test strategy first, then targeted tests that protect behavior and edge cases. Avoid tests that merely mirror implementation details."
          },
          {
            "t": "h",
            "v": "Good test prompts"
          },
          {
            "t": "ul",
            "v": [
              "Ask for a test matrix before writing test code",
              "Prioritize behavior, edge cases, and regressions",
              "Use characterization tests before refactoring legacy code",
              "Ask Claude to run tests and explain failures",
              "Review generated tests for brittle mocks and low-value assertions"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Before writing tests, create a test matrix for this feature. Include happy path, edge cases, error states, permissions, and regression cases. Mark each as unit, integration, or manual. Then write only the top three highest-value automated tests."
          },
          {
            "t": "note",
            "v": "If Claude writes tests that only verify mocked implementation calls, push it toward user-visible behavior and contract-level expectations."
          }
        ]
      },
      {
        "id": "m5s2_practice",
        "title": "Hands-on Lab: Test Generation Without Fake Confidence",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports real debugging, validation, review, testing, and refactor practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m5s2, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Test Generation Without Fake Confidence. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Test Generation Without Fake Confidence. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Test Generation Without Fake Confidence. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Test Generation Without Fake Confidence: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m5s3",
        "title": "Code Review: Security, Performance, and Maintainability",
        "minutes": 14,
        "content": [
          {
            "t": "p",
            "v": "Claude Code is useful as a first-pass reviewer because it can trace across files and produce structured findings. It should not replace human review, but it can remove obvious issues before human reviewers spend attention."
          },
          {
            "t": "h",
            "v": "Review dimensions"
          },
          {
            "t": "table",
            "h": [
              "Dimension",
              "Questions to ask"
            ],
            "r": [
              [
                "Correctness",
                "Does the code implement the requested behavior? Are edge cases handled?"
              ],
              [
                "Security",
                "Could input reach a dangerous sink? Are auth/authorization checks complete?"
              ],
              [
                "Performance",
                "Any N+1 queries, expensive loops, repeated renders, unnecessary network calls?"
              ],
              [
                "Maintainability",
                "Is the change small, readable, idiomatic, and well-tested?"
              ],
              [
                "Operations",
                "Could this break deployment, logging, observability, or rollback?"
              ]
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Review the current git diff. Output only actionable findings in this format:\n- [HIGH/MED/LOW] file:line — issue — why it matters — recommended fix\nThen list missing tests and any parts of the diff you consider safe."
          },
          {
            "t": "h",
            "v": "Class exercise"
          },
          {
            "t": "ol",
            "v": [
              "Generate a review with Claude",
              "Have students independently inspect one finding",
              "Decide whether it is valid, false positive, or needs more evidence",
              "Rewrite the prompt to reduce false positives"
            ]
          }
        ]
      },
      {
        "id": "m5s3_practice",
        "title": "Hands-on Lab: Code Review: Security, Performance, and Maintainability",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports real debugging, validation, review, testing, and refactor practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m5s3, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Code Review: Security, Performance, and Maintainability. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Code Review: Security, Performance, and Maintainability. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Code Review: Security, Performance, and Maintainability. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Code Review: Security, Performance, and Maintainability: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m5s4",
        "title": "Refactoring Safely",
        "minutes": 12,
        "content": [
          {
            "t": "p",
            "v": "Refactoring is risky because many files can change while behavior should remain the same. Claude needs stronger boundaries here: no behavior changes unless explicitly requested, tests before and after, and small phases."
          },
          {
            "t": "h",
            "v": "Refactor safety recipe"
          },
          {
            "t": "ol",
            "v": [
              "Capture current behavior with tests or snapshots",
              "Ask Claude to identify seams and dependencies",
              "Plan small mechanical steps",
              "Run tests after each step",
              "Keep behavior-changing improvements separate from pure refactors",
              "Commit each phase separately if large"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Plan a behavior-preserving refactor of this module. Do not edit. Identify current public behavior, tests that protect it, exact mechanical steps, and how we will verify no behavior changed."
          },
          {
            "t": "note",
            "v": "Never combine a big refactor with a feature unless there is a compelling reason. Claude can do both, but reviewers will hate the diff."
          }
        ]
      },
      {
        "id": "m5s4_practice",
        "title": "Hands-on Lab: Refactoring Safely",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is gothinkster/node-express-realworld-example-app because it supports real debugging, validation, review, testing, and refactor practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "gothinkster/node-express-realworld-example-app",
                "Clone or open the repo, create a branch named lab/m5s4, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Refactoring Safely. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Refactoring Safely. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "gothinkster/node-express-realworld-example-app",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Refactoring Safely. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "gothinkster/node-express-realworld-example-app",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "gothinkster/node-express-realworld-example-app",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "gothinkster/node-express-realworld-example-app",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Refactoring Safely: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m5s5",
        "title": "UI Workflows with Screenshots and Visual Feedback",
        "minutes": 12,
        "content": [
          {
            "t": "p",
            "v": "For UI changes, screenshots reduce ambiguity. Claude can reason about layout from visual input, but you still need concrete acceptance criteria: spacing, responsive behavior, states, and before/after comparison."
          },
          {
            "t": "h",
            "v": "Visual workflow"
          },
          {
            "t": "ol",
            "v": [
              "Run the app locally",
              "Capture current UI screenshot",
              "Describe target change with exact acceptance criteria",
              "Ask Claude to identify likely components/styles before editing",
              "Apply change, rebuild, and inspect after screenshot",
              "Iterate with specific visual corrections"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Use this screenshot as the current UI. Make the course cards easier to scan on mobile. Before editing, identify the likely React components and CSS involved. After editing, run the app and tell me what to verify visually."
          },
          {
            "t": "h",
            "v": "Acceptance criteria examples"
          },
          {
            "t": "ul",
            "v": [
              "Sidebar collapses cleanly below 800px",
              "Lesson cards have at least 16px spacing",
              "Progress bar remains visible after search",
              "Code blocks wrap on small screens",
              "Keyboard navigation still works"
            ]
          }
        ]
      },
      {
        "id": "m5s5_practice",
        "title": "Hands-on Lab: UI Workflows with Screenshots and Visual Feedback",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is alan2207/bulletproof-react because it supports professional React architecture and UI workflow practice."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "alan2207/bulletproof-react",
                "Clone or open the repo, create a branch named lab/m5s5, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: UI Workflows with Screenshots and Visual Feedback. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "alan2207/bulletproof-react",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to UI Workflows with Screenshots and Visual Feedback. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "alan2207/bulletproof-react",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice UI Workflows with Screenshots and Visual Feedback. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "alan2207/bulletproof-react",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "alan2207/bulletproof-react",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "alan2207/bulletproof-react",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for UI Workflows with Screenshots and Visual Feedback: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      }
    ]
  },
  {
    "id": "m6",
    "title": "MCP Fundamentals and Building Servers",
    "color": "#DC2626",
    "bg": "#450A0A",
    "minutes": 160,
    "sections": [
      {
        "id": "m6s1",
        "title": "Why MCP Exists",
        "minutes": 12,
        "content": [
          {
            "t": "p",
            "v": "The Model Context Protocol solves the integration problem for AI apps. Instead of every AI client writing a custom integration for every tool, MCP provides a standard way for clients to discover and use external capabilities such as tools, resources, prompts, data stores, and services."
          },
          {
            "t": "h",
            "v": "Architecture in plain English"
          },
          {
            "t": "code",
            "lang": "text",
            "v": "User asks a task\n  ↓\nMCP-capable client such as Claude Code\n  ↓ JSON-RPC over stdio or Streamable HTTP\nMCP server exposing tools/resources/prompts\n  ↓\nExternal system: file system, database, GitHub, browser, internal API"
          },
          {
            "t": "h",
            "v": "When MCP is worth it"
          },
          {
            "t": "ul",
            "v": [
              "The tool will be reused across many projects or users",
              "The AI needs structured access to an external system",
              "You need safer, narrower access than full shell commands",
              "You want discoverable tool descriptions and schemas",
              "You want one integration usable by multiple MCP-compatible clients"
            ]
          },
          {
            "t": "note",
            "v": "Do not build an MCP server for every script. Start with a normal script or custom command; move to MCP when discoverability, permissions, reuse, or external integration matter."
          }
        ]
      },
      {
        "id": "m6s1_practice",
        "title": "Hands-on Lab: Why MCP Exists",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is modelcontextprotocol/example-remote-server because it supports MCP tools/resources/prompts and remote-server architecture."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "modelcontextprotocol/example-remote-server",
                "Clone or open the repo, create a branch named lab/m6s1, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Why MCP Exists. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "modelcontextprotocol/example-remote-server",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Why MCP Exists. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "modelcontextprotocol/example-remote-server",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Why MCP Exists. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "modelcontextprotocol/example-remote-server",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "modelcontextprotocol/example-remote-server",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "modelcontextprotocol/example-remote-server",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Why MCP Exists: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m6s2",
        "title": "Tools, Resources, and Prompts",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "MCP servers expose three main primitives. Understanding the difference prevents poor server design. A tool does work, a resource exposes read-only context, and a prompt provides a reusable user-invoked workflow."
          },
          {
            "t": "table",
            "h": [
              "Primitive",
              "Controlled by",
              "Good for",
              "Example"
            ],
            "r": [
              [
                "Tool",
                "Model decides when to call",
                "Actions, queries, computations, writes with permission",
                "search_issues(query), run_report(date)"
              ],
              [
                "Resource",
                "Client/app decides what to expose",
                "Read-only data or context",
                "repo://README, db-schema://public"
              ],
              [
                "Prompt",
                "User explicitly invokes",
                "Reusable instruction templates",
                "review-security, summarize-release"
              ]
            ]
          },
          {
            "t": "h",
            "v": "Design exercise"
          },
          {
            "t": "ol",
            "v": [
              "List a workflow your team repeats often",
              "Identify which parts are actions, context, or templates",
              "Decide which pieces should become tools, resources, or prompts",
              "Write names and descriptions that a model can understand"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "Classify these capabilities as tool, resource, or prompt:\n1. Read current sprint tickets\n2. Create a GitHub issue\n3. Review this diff using our security checklist\n4. Expose API schema\n5. Calculate deployment risk score"
          }
        ]
      },
      {
        "id": "m6s2_practice",
        "title": "Hands-on Lab: Tools, Resources, and Prompts",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is modelcontextprotocol/example-remote-server because it supports MCP tools/resources/prompts and remote-server architecture."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "modelcontextprotocol/example-remote-server",
                "Clone or open the repo, create a branch named lab/m6s2, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Tools, Resources, and Prompts. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "modelcontextprotocol/example-remote-server",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Tools, Resources, and Prompts. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "modelcontextprotocol/example-remote-server",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Tools, Resources, and Prompts. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "modelcontextprotocol/example-remote-server",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "modelcontextprotocol/example-remote-server",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "modelcontextprotocol/example-remote-server",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Tools, Resources, and Prompts: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m6s3",
        "title": "Build a Minimal Python MCP Server",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "A minimal server is enough to teach the protocol shape: define a server, expose a tool, run it over stdio, then inspect it. Keep the first server safe and local, such as reading a whitelisted docs directory or formatting a small text input."
          },
          {
            "t": "h",
            "v": "Example server"
          },
          {
            "t": "code",
            "lang": "python",
            "v": "from mcp.server.fastmcp import FastMCP\nfrom pathlib import Path\n\nmcp = FastMCP('course-tools')\nDOCS_ROOT = Path('docs').resolve()\n\n@mcp.tool()\ndef list_course_docs() -> list[str]:\n    '''List available course documents.'''\n    if not DOCS_ROOT.exists():\n        return []\n    return [p.name for p in DOCS_ROOT.glob('*.md')]\n\n@mcp.tool()\ndef read_course_doc(filename: str) -> str:\n    '''Read a markdown course document by filename.'''\n    path = (DOCS_ROOT / filename).resolve()\n    if not str(path).startswith(str(DOCS_ROOT)):\n        raise ValueError('Path outside docs directory')\n    return path.read_text()\n\nif __name__ == '__main__':\n    mcp.run()"
          },
          {
            "t": "h",
            "v": "Security discussion"
          },
          {
            "t": "ul",
            "v": [
              "Whitelist directories instead of accepting arbitrary paths",
              "Validate inputs even when the model is calling the tool",
              "Prefer read-only tools first",
              "Return concise structured results instead of huge raw files",
              "Log tool calls during development"
            ]
          },
          {
            "t": "note",
            "v": "The path check is intentionally included in the teaching example. MCP does not remove the need for normal application security."
          }
        ]
      },
      {
        "id": "m6s3_practice",
        "title": "Hands-on Lab: Build a Minimal Python MCP Server",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is modelcontextprotocol/example-remote-server because it supports MCP tools/resources/prompts and remote-server architecture."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "modelcontextprotocol/example-remote-server",
                "Clone or open the repo, create a branch named lab/m6s3, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Build a Minimal Python MCP Server. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "modelcontextprotocol/example-remote-server",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Build a Minimal Python MCP Server. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "modelcontextprotocol/example-remote-server",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Build a Minimal Python MCP Server. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "modelcontextprotocol/example-remote-server",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "modelcontextprotocol/example-remote-server",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "modelcontextprotocol/example-remote-server",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Build a Minimal Python MCP Server: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m6s4",
        "title": "Inspector and Debugging MCP Servers",
        "minutes": 10,
        "content": [
          {
            "t": "p",
            "v": "The MCP Inspector lets you test server capabilities before connecting them to Claude Code. This shortens debugging because you can isolate whether a problem is in the server, the transport, the schema, or the client prompt."
          },
          {
            "t": "h",
            "v": "Debug checklist"
          },
          {
            "t": "ol",
            "v": [
              "Run the server in inspector/dev mode",
              "Confirm tools/resources/prompts appear with clear descriptions",
              "Call each tool with valid and invalid inputs",
              "Check error messages are helpful but not leaking secrets",
              "Only then connect the server to Claude Code"
            ]
          },
          {
            "t": "code",
            "lang": "bash",
            "v": "mcp dev server.py\n# Open the inspector, call each tool, and inspect raw request/response"
          },
          {
            "t": "table",
            "h": [
              "Problem",
              "Likely cause"
            ],
            "r": [
              [
                "Tool not listed",
                "Decorator not registered or server not restarted"
              ],
              [
                "Bad parameter schema",
                "Missing type hints or invalid defaults"
              ],
              [
                "Server hangs",
                "Long operation without timeout/progress"
              ],
              [
                "Claude misuses tool",
                "Tool name/description too vague"
              ]
            ]
          }
        ]
      },
      {
        "id": "m6s4_practice",
        "title": "Hands-on Lab: Inspector and Debugging MCP Servers",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is modelcontextprotocol/example-remote-server because it supports MCP tools/resources/prompts and remote-server architecture."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "modelcontextprotocol/example-remote-server",
                "Clone or open the repo, create a branch named lab/m6s4, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Inspector and Debugging MCP Servers. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "modelcontextprotocol/example-remote-server",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Inspector and Debugging MCP Servers. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "modelcontextprotocol/example-remote-server",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Inspector and Debugging MCP Servers. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "modelcontextprotocol/example-remote-server",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "modelcontextprotocol/example-remote-server",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "modelcontextprotocol/example-remote-server",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Inspector and Debugging MCP Servers: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m6s5",
        "title": "Client Integration Flow",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "A client connects to the MCP server, discovers capabilities, passes tool definitions to the model, executes model-requested tool calls, and returns results. Students do not need to memorize the protocol immediately; they need to understand the flow so they can debug integrations."
          },
          {
            "t": "h",
            "v": "Integration pattern"
          },
          {
            "t": "ol",
            "v": [
              "Start server transport",
              "Initialize session",
              "List tools/resources/prompts",
              "Send user request plus available tools to model",
              "Model requests a tool call",
              "Client calls MCP server",
              "Client returns tool result to model",
              "Model continues or finalizes answer"
            ]
          },
          {
            "t": "code",
            "lang": "python",
            "v": "# Pseudocode for teaching the flow\nasync with connect_to_mcp_server() as session:\n    tools = await session.list_tools()\n    response = await model_call(user_message, tools=tools)\n    if response.requests_tool:\n        result = await session.call_tool(response.tool_name, response.args)\n        final = await model_call_with_tool_result(result)"
          },
          {
            "t": "note",
            "v": "In production, add auth, input validation, timeout handling, logging, and clear user approval boundaries for tools that mutate data."
          }
        ]
      },
      {
        "id": "m6s5_practice",
        "title": "Hands-on Lab: Client Integration Flow",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is modelcontextprotocol/example-remote-server because it supports MCP tools/resources/prompts and remote-server architecture."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "modelcontextprotocol/example-remote-server",
                "Clone or open the repo, create a branch named lab/m6s5, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Client Integration Flow. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "modelcontextprotocol/example-remote-server",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Client Integration Flow. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "modelcontextprotocol/example-remote-server",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Client Integration Flow. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "modelcontextprotocol/example-remote-server",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "modelcontextprotocol/example-remote-server",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "modelcontextprotocol/example-remote-server",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Client Integration Flow: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      }
    ]
  },
  {
    "id": "m7",
    "title": "Automation: Hooks, Skills, Subagents, SDK, and GitHub",
    "color": "#0891B2",
    "bg": "#164E63",
    "minutes": 165,
    "sections": [
      {
        "id": "m7s1",
        "title": "Hooks: Deterministic Guardrails Around the Agent",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "Hooks run at defined points in Claude Code's lifecycle. They are deterministic guardrails around probabilistic agent behavior. Use them for formatting, blocking dangerous commands, logging, notifications, and enforcing team standards."
          },
          {
            "t": "h",
            "v": "Hook design rules"
          },
          {
            "t": "ul",
            "v": [
              "Keep hooks fast; slow hooks make every tool call feel broken",
              "Make blocking hooks precise to avoid false positives",
              "Test hook scripts manually before wiring them to Claude Code",
              "Log enough context for audits without leaking secrets",
              "Use hooks for policy, not for complex reasoning"
            ]
          },
          {
            "t": "code",
            "lang": "json",
            "v": "{\n  \"hooks\": {\n    \"pre-tool-call\": [\n      {\n        \"matcher\": { \"tool\": \"Bash\", \"contains\": \"rm -rf\" },\n        \"command\": \"echo 'Blocked dangerous command' && exit 1\"\n      }\n    ],\n    \"post-tool-call\": [\n      {\n        \"matcher\": { \"tool\": \"Write\" },\n        \"command\": \"npm run format --if-present\"\n      }\n    ]\n  }\n}"
          },
          {
            "t": "note",
            "v": "Hooks are best for non-negotiable rules. If a rule needs judgment, make it a review command or subagent instead."
          }
        ]
      },
      {
        "id": "m7s1_practice",
        "title": "Hands-on Lab: Hooks: Deterministic Guardrails Around the Agent",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/skills because it supports real SKILL.md structure and reusable instruction packaging."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/skills",
                "Clone or open the repo, create a branch named lab/m7s1, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Hooks: Deterministic Guardrails Around the Agent. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/skills",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Hooks: Deterministic Guardrails Around the Agent. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/skills",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Hooks: Deterministic Guardrails Around the Agent. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/skills",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/skills",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/skills",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Hooks: Deterministic Guardrails Around the Agent: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m7s2",
        "title": "Skills: Reusable Task-Specific Instruction Packs",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "Skills are reusable instruction packages that load when relevant. They keep the always-loaded project memory small while giving Claude specialized workflows for tasks such as PDF handling, database migrations, PR review, release notes, or incident response."
          },
          {
            "t": "h",
            "v": "Skill anatomy"
          },
          {
            "t": "code",
            "lang": "markdown",
            "v": "---\nname: release-notes\ndescription: Use when creating release notes, changelogs, or summaries from commits and PRs.\nallowed-tools: Read, Bash\n---\n\n# Release Notes Skill\n\n1. Inspect commits and merged PRs.\n2. Group changes by user impact.\n3. Separate breaking changes, bug fixes, and internal changes.\n4. Mention verification status.\n5. Output in a format suitable for GitHub Releases."
          },
          {
            "t": "h",
            "v": "When to create a skill"
          },
          {
            "t": "ul",
            "v": [
              "The workflow repeats across projects",
              "The instructions are too long for CLAUDE.md",
              "The task needs specialized examples or helper scripts",
              "The task should trigger automatically from a good description",
              "The team wants a shared standard"
            ]
          },
          {
            "t": "note",
            "v": "Write skill descriptions like matching rules. Include synonyms and task verbs so Claude knows when the skill applies."
          }
        ]
      },
      {
        "id": "m7s2_practice",
        "title": "Hands-on Lab: Skills: Reusable Task-Specific Instruction Packs",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/skills because it supports real SKILL.md structure and reusable instruction packaging."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/skills",
                "Clone or open the repo, create a branch named lab/m7s2, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Skills: Reusable Task-Specific Instruction Packs. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/skills",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Skills: Reusable Task-Specific Instruction Packs. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/skills",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Skills: Reusable Task-Specific Instruction Packs. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/skills",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/skills",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/skills",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Skills: Reusable Task-Specific Instruction Packs: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m7s3",
        "title": "Subagents: Specialized Workers with Clean Context",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "Subagents are useful when a task is bounded, independent, and would otherwise pollute the main context. They can review, research, document, test, or inspect in isolation and return a structured result."
          },
          {
            "t": "h",
            "v": "Good subagent tasks"
          },
          {
            "t": "ul",
            "v": [
              "Review this diff for security issues",
              "Inspect this module and summarize architecture",
              "Generate documentation for this package",
              "Analyze flaky tests and report likely causes",
              "Compare two implementation options"
            ]
          },
          {
            "t": "code",
            "lang": "markdown",
            "v": "---\nname: security-reviewer\ndescription: Use to review code for security vulnerabilities, auth bypasses, injection, unsafe secrets handling, and access-control gaps.\ntools: Read, Bash\n---\n\nYou are a security-focused code reviewer. Return exactly:\n## Summary\n## Findings\n- [HIGH/MED/LOW] file:line — issue — exploit scenario — fix\n## Missing Tests\n## Confidence and Limits"
          },
          {
            "t": "h",
            "v": "Anti-patterns"
          },
          {
            "t": "table",
            "h": [
              "Anti-pattern",
              "Better approach"
            ],
            "r": [
              [
                "Subagent for tiny edits",
                "Use main session"
              ],
              [
                "Subagent needs lots of conversation history",
                "Keep task in main session"
              ],
              [
                "No output format",
                "Define strict report structure"
              ],
              [
                "Broad write permissions",
                "Grant only tools needed"
              ]
            ]
          }
        ]
      },
      {
        "id": "m7s3_practice",
        "title": "Hands-on Lab: Subagents: Specialized Workers with Clean Context",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/skills because it supports real SKILL.md structure and reusable instruction packaging."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/skills",
                "Clone or open the repo, create a branch named lab/m7s3, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Subagents: Specialized Workers with Clean Context. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/skills",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Subagents: Specialized Workers with Clean Context. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/skills",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Subagents: Specialized Workers with Clean Context. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/skills",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/skills",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/skills",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Subagents: Specialized Workers with Clean Context: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m7s4",
        "title": "Agent SDK and Scripted Workflows",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "The Agent SDK lets teams run agentic workflows programmatically instead of only through the interactive terminal. Use it for scripted maintenance, CI checks, batch transformations, or internal tools that need controlled AI-assisted coding behavior."
          },
          {
            "t": "h",
            "v": "Use cases"
          },
          {
            "t": "ul",
            "v": [
              "Nightly dependency update analysis",
              "Batch documentation refresh",
              "Automated codebase health reports",
              "CI-side review suggestions",
              "Internal web UI for non-terminal users"
            ]
          },
          {
            "t": "code",
            "lang": "typescript",
            "v": "// Conceptual example: stream an agent task\nimport { query } from '@anthropic-ai/claude-code';\n\nfor await (const message of query({\n  prompt: 'Review the current repository for missing tests. Return a prioritized report.',\n  options: { maxTurns: 10 }\n})) {\n  console.log(message);\n}"
          },
          {
            "t": "h",
            "v": "Production considerations"
          },
          {
            "t": "ul",
            "v": [
              "Run in isolated workspaces",
              "Limit credentials and file access",
              "Capture logs and diffs as artifacts",
              "Require human approval before writing to protected branches",
              "Set budgets, timeouts, and max turns"
            ]
          }
        ]
      },
      {
        "id": "m7s4_practice",
        "title": "Hands-on Lab: Agent SDK and Scripted Workflows",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/skills because it supports real SKILL.md structure and reusable instruction packaging."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/skills",
                "Clone or open the repo, create a branch named lab/m7s4, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: Agent SDK and Scripted Workflows. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/skills",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to Agent SDK and Scripted Workflows. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/skills",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice Agent SDK and Scripted Workflows. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/skills",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/skills",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/skills",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for Agent SDK and Scripted Workflows: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      },
      {
        "id": "m7s5",
        "title": "GitHub Automation with Claude Code",
        "minutes": 15,
        "content": [
          {
            "t": "p",
            "v": "GitHub integration is where Claude Code moves from local helper to team automation. You can use it to summarize issues, draft PR descriptions, review changes, or respond to mentions in issues and pull requests depending on your setup."
          },
          {
            "t": "h",
            "v": "Practical workflows"
          },
          {
            "t": "ul",
            "v": [
              "Ask Claude to generate a PR description from the current branch diff",
              "Use a review command before opening a PR",
              "Add a GitHub Action that runs a static site deployment on every push",
              "Use Claude Code GitHub workflows for issue/PR assistance where your organization allows it"
            ]
          },
          {
            "t": "code",
            "lang": "text",
            "v": "PR prompt:\nRead the current branch diff and generate a PR description with: context, implementation summary, screenshots needed, tests run, deployment risk, rollback plan, and reviewer checklist."
          },
          {
            "t": "h",
            "v": "Team guardrails"
          },
          {
            "t": "table",
            "h": [
              "Area",
              "Guardrail"
            ],
            "r": [
              [
                "Secrets",
                "Do not expose repository or environment secrets to generated logs"
              ],
              [
                "Permissions",
                "Use least-privilege GitHub tokens"
              ],
              [
                "Reviews",
                "Treat AI review as first-pass, not final approval"
              ],
              [
                "Deployment",
                "Use GitHub Pages/Actions with explicit build outputs"
              ]
            ]
          }
        ]
      },
      {
        "id": "m7s5_practice",
        "title": "Hands-on Lab: GitHub Automation with Claude Code",
        "minutes": 18,
        "content": [
          {
            "t": "p",
            "v": "This is a separate practice subtopic for the lesson above. The original explanation stays unchanged; this lab makes students apply it inside a public repository. The recommended repo is anthropics/skills because it supports real SKILL.md structure and reusable instruction packaging."
          },
          {
            "t": "h",
            "v": "How students should work"
          },
          {
            "t": "ol",
            "v": [
              "Fork the repo or work in a disposable local clone.",
              "Create a dedicated branch for this lab.",
              "Use Claude Code to explore first, then plan, then act.",
              "Keep the change small; the point is learning the concept, not rewriting the repo.",
              "End with verification, git diff review, and a written reflection."
            ]
          },
          {
            "t": "table",
            "h": [
              "Subtask",
              "Repo",
              "Step-by-step instruction",
              "Claude Code prompt",
              "Expected outcome"
            ],
            "r": [
              [
                "1. Repo orientation",
                "anthropics/skills",
                "Clone or open the repo, create a branch named lab/m7s5, and ask Claude to inspect only the files needed for this topic. Keep the original repo unchanged except for your lab branch.",
                "Explore this repo for the topic: GitHub Automation with Claude Code. Read the README, package scripts, and the smallest set of files needed. Do not edit anything. Explain what I need to understand first.",
                "A short map of relevant folders/files and a list of what Claude has evidence for."
              ],
              [
                "2. Trace the concept in real code",
                "anthropics/skills",
                "Ask Claude to find where this lesson concept appears in the repo. Require file names and a plain-English explanation before any implementation.",
                "Find concrete examples related to GitHub Automation with Claude Code. For each example, give file path, what the code does, and why it matters for this lesson. Do not modify files.",
                "At least 3 concrete file references with explanations tied to the lesson."
              ],
              [
                "3. Create a small plan",
                "anthropics/skills",
                "Choose one tiny improvement, documentation addition, test, or review task. Force Claude to write a plan with exact files and risk notes before it edits.",
                "Propose one small safe task that helps me practice GitHub Automation with Claude Code. List exact files to touch, commands to run, risks, and rollback steps. Do not edit yet.",
                "A scoped plan small enough to complete in one session."
              ],
              [
                "4. Execute with checkpoints",
                "anthropics/skills",
                "Let Claude perform the planned change or analysis. After every major action, require it to summarize what changed and why. Keep changes minimal.",
                "Implement only the approved plan. Pause after each file change and explain why the change belongs in scope. Do not add unrelated improvements.",
                "A focused change, generated note, review output, test, or workflow asset."
              ],
              [
                "5. Verify and inspect",
                "anthropics/skills",
                "Run the relevant command from package.json, README, or repo docs. If commands cannot run, ask Claude to explain why and provide manual verification steps.",
                "Run the smallest relevant verification command. If it fails, explain the failure before fixing. Then show git diff and summarize exactly what changed.",
                "Build/test/lint output or a clear manual verification checklist plus a reviewed diff."
              ],
              [
                "6. Reflect and document",
                "anthropics/skills",
                "Ask Claude to turn the exercise into a reusable note: when to use the concept, mistakes to avoid, and a reusable prompt for future projects.",
                "Write a reusable learning note for GitHub Automation with Claude Code: when to use it, why it matters, common mistakes, and one prompt I can reuse in another repo.",
                "A reusable mini-playbook students can keep in their course notes."
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: make students read Claude’s plan out loud before implementation. If the plan is vague, stop and force a narrower plan."
          }
        ]
      }
    ]
  },
  {
    "id": "m8",
    "title": "Build DevFlow: Complete Project Development with Claude Code",
    "color": "#22C55E",
    "bg": "#052E16",
    "minutes": 340,
    "sections": [
      {
        "id": "m8dev0",
        "title": "Final Project Overview: Build DevFlow from Scratch",
        "minutes": 20,
        "content": [
          {
            "t": "p",
            "v": "The old GitHub Pages publishing chapter has been removed. In its place, students build DevFlow: a serious full-stack project-management platform using Claude Code as the engineering agent. The project is intentionally larger than a demo page: it includes product planning, monorepo setup, database design, authentication, workspace permissions, project/task APIs, frontend screens, tests, AI workflow assets, CI, documentation, and a final demo script."
          },
          {
            "t": "h",
            "v": "What students will build"
          },
          {
            "t": "ul",
            "v": [
              "React + Vite + TypeScript frontend",
              "Node + Express + TypeScript backend",
              "PostgreSQL + Prisma data model",
              "Authentication and workspace membership",
              "Projects, tasks, labels, comments, activity feed, filters, and Kanban board",
              "Claude Code project memory, commands, subagents, hook plan, CI workflow, and final docs"
            ]
          },
          {
            "t": "h",
            "v": "Reference repos to use, not copy"
          },
          {
            "t": "table",
            "h": [
              "Reference repo",
              "How to use it in this project"
            ],
            "r": [
              [
                "gothinkster/node-express-realworld-example-app",
                "Study API structure, auth flow, CRUD patterns, and validation trade-offs."
              ],
              [
                "alan2207/bulletproof-react",
                "Study scalable frontend folder organization, routing, components, and API-layer separation."
              ],
              [
                "anthropics/claude-code-action",
                "Study GitHub automation patterns for issue/PR workflows and CI safety."
              ],
              [
                "anthropics/skills",
                "Study reusable instruction packaging and SKILL.md structure."
              ],
              [
                "modelcontextprotocol/example-remote-server",
                "Study MCP architecture if students want to add an optional integration later."
              ]
            ]
          },
          {
            "t": "note",
            "v": "By the end of the 80 tasks, students should have a working full-stack codebase plus the Claude Code workflows needed to maintain it."
          }
        ]
      },
      {
        "id": "m8dev1",
        "title": "Project Phase 1: Product Strategy and Scope",
        "minutes": 40,
        "content": [
          {
            "t": "p",
            "v": "This final chapter replaces the old publishing capstone. Students now build a serious full-stack product from scratch: DevFlow, an AI-assisted team project-management platform. This phase has eight concrete subtopics. Each task is designed to be executed with Claude Code, reviewed by the student, and committed as real project work."
          },
          {
            "t": "h",
            "v": "Project rule for this phase"
          },
          {
            "t": "ul",
            "v": [
              "Every task starts with exploration or planning before implementation.",
              "Claude must name exact files before editing them.",
              "Students must inspect git diff before committing.",
              "Every feature must have either automated verification or a manual test checklist.",
              "Do not copy from the reference repos; use them as architectural references only."
            ]
          },
          {
            "t": "table",
            "h": [
              "Task / subtopic",
              "Detailed student steps",
              "Claude Code prompt",
              "Deliverable"
            ],
            "r": [
              [
                "1. Define the product problem",
                "Write the problem DevFlow solves, the target user, and the painful workflow it improves.",
                "Ask Claude to draft a product brief for a team project-management platform for small software teams. Include users, pain points, and success metrics.",
                "product-brief.md"
              ],
              [
                "2. Define user roles",
                "Create roles for owner, admin, member, and viewer. Clarify what each can and cannot do.",
                "Design the role model for DevFlow. Return a permission table and call out security risks.",
                "roles-and-permissions.md"
              ],
              [
                "3. Write core user journeys",
                "Describe journeys for creating a workspace, inviting users, creating a project, creating tasks, and reviewing progress.",
                "Write five end-to-end user journeys for DevFlow. Keep each journey testable.",
                "user-journeys.md"
              ],
              [
                "4. Set MVP boundaries",
                "Separate must-have features from nice-to-have features. Avoid building chat, billing, and integrations in version one.",
                "Create an MVP scope for DevFlow with included, excluded, and deferred features.",
                "mvp-scope.md"
              ],
              [
                "5. Create acceptance criteria",
                "For each MVP feature, define what must be true before it is considered done.",
                "Turn the MVP scope into acceptance criteria using Given/When/Then format.",
                "acceptance-criteria.md"
              ],
              [
                "6. Create milestone plan",
                "Break the project into backend foundation, auth, task system, frontend, testing, and automation milestones.",
                "Create a milestone plan for building DevFlow with Claude Code. Include risks and checkpoints.",
                "milestone-plan.md"
              ],
              [
                "7. Define data entities",
                "List the major nouns: user, workspace, membership, project, task, label, comment, activity log.",
                "Identify DevFlow’s core data entities and relationships before schema design.",
                "entity-map.md"
              ],
              [
                "8. Write the first README",
                "Create a README that explains what the project is, how to run it, and what is still planned.",
                "Draft a professional README for DevFlow before any code exists.",
                "README.md"
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: this is not a toy publish task. The final outcome is a real monorepo with frontend, backend, database schema, auth, workspace security, task management, tests, automation assets, and documentation."
          }
        ]
      },
      {
        "id": "m8dev2",
        "title": "Project Phase 2: Repository and Tooling Setup",
        "minutes": 40,
        "content": [
          {
            "t": "p",
            "v": "This final chapter replaces the old publishing capstone. Students now build a serious full-stack product from scratch: DevFlow, an AI-assisted team project-management platform. This phase has eight concrete subtopics. Each task is designed to be executed with Claude Code, reviewed by the student, and committed as real project work."
          },
          {
            "t": "h",
            "v": "Project rule for this phase"
          },
          {
            "t": "ul",
            "v": [
              "Every task starts with exploration or planning before implementation.",
              "Claude must name exact files before editing them.",
              "Students must inspect git diff before committing.",
              "Every feature must have either automated verification or a manual test checklist.",
              "Do not copy from the reference repos; use them as architectural references only."
            ]
          },
          {
            "t": "table",
            "h": [
              "Task / subtopic",
              "Detailed student steps",
              "Claude Code prompt",
              "Deliverable"
            ],
            "r": [
              [
                "9. Create monorepo structure",
                "Create apps/web, apps/api, packages/shared, docs, and .claude folders.",
                "Plan and create a monorepo structure for a React frontend and Express backend. Explain every folder.",
                "folder structure committed"
              ],
              [
                "10. Initialize frontend",
                "Create a Vite React TypeScript app in apps/web.",
                "Initialize the frontend with Vite React TypeScript and remove boilerplate that does not belong.",
                "apps/web working"
              ],
              [
                "11. Initialize backend",
                "Create a TypeScript Express API in apps/api.",
                "Create a minimal Express TypeScript API with a health route and clean folder structure.",
                "apps/api working"
              ],
              [
                "12. Add root scripts",
                "Add scripts for dev, build, lint, test, api:dev, web:dev.",
                "Create package scripts that let a developer run frontend and backend from the repo root.",
                "package scripts"
              ],
              [
                "13. Add environment templates",
                "Create .env.example files for API and web.",
                "Create safe environment template files. Do not include secrets.",
                ".env.example files"
              ],
              [
                "14. Add formatting and linting",
                "Add Prettier/ESLint or a simple formatting baseline.",
                "Set up formatting and linting rules appropriate for this project. Keep them beginner-friendly.",
                "format/lint configured"
              ],
              [
                "15. Add Git hygiene",
                "Create .gitignore and branch naming recommendations.",
                "Review the repo for files that should never be committed and update .gitignore.",
                ".gitignore updated"
              ],
              [
                "16. Commit initial scaffold",
                "Review the diff and create the first commit.",
                "Review the initial scaffold diff and write a conventional commit message.",
                "first commit"
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: this is not a toy publish task. The final outcome is a real monorepo with frontend, backend, database schema, auth, workspace security, task management, tests, automation assets, and documentation."
          }
        ]
      },
      {
        "id": "m8dev3",
        "title": "Project Phase 3: CLAUDE.md and AI Workflow Assets",
        "minutes": 40,
        "content": [
          {
            "t": "p",
            "v": "This final chapter replaces the old publishing capstone. Students now build a serious full-stack product from scratch: DevFlow, an AI-assisted team project-management platform. This phase has eight concrete subtopics. Each task is designed to be executed with Claude Code, reviewed by the student, and committed as real project work."
          },
          {
            "t": "h",
            "v": "Project rule for this phase"
          },
          {
            "t": "ul",
            "v": [
              "Every task starts with exploration or planning before implementation.",
              "Claude must name exact files before editing them.",
              "Students must inspect git diff before committing.",
              "Every feature must have either automated verification or a manual test checklist.",
              "Do not copy from the reference repos; use them as architectural references only."
            ]
          },
          {
            "t": "table",
            "h": [
              "Task / subtopic",
              "Detailed student steps",
              "Claude Code prompt",
              "Deliverable"
            ],
            "r": [
              [
                "17. Create CLAUDE.md",
                "Write the project memory file at the repo root.",
                "Create a CLAUDE.md that explains DevFlow, stack, commands, workflow, and safety rules.",
                "CLAUDE.md"
              ],
              [
                "18. Add exploration rules",
                "Tell Claude to explore before editing and to cite file paths.",
                "Improve CLAUDE.md with strict Explore → Plan → Code → Verify → Commit rules.",
                "workflow rules"
              ],
              [
                "19. Add backend rules",
                "Add rules for API routing, validation, errors, and Prisma usage.",
                "Add backend engineering rules to CLAUDE.md for Express, Prisma, validation, and auth.",
                "backend rules"
              ],
              [
                "20. Add frontend rules",
                "Add rules for React component structure, state, forms, and UI consistency.",
                "Add frontend engineering rules to CLAUDE.md for React, routes, API clients, and components.",
                "frontend rules"
              ],
              [
                "21. Add security rules",
                "Add rules for secrets, auth, permissions, and unsafe commands.",
                "Add security rules Claude must follow while working on DevFlow.",
                "security rules"
              ],
              [
                "22. Create /review command",
                "Create .claude/commands/review.md for reviewing diffs.",
                "Create a reusable review command that checks security, tests, scope creep, and maintainability.",
                "/review command"
              ],
              [
                "23. Create /test-plan command",
                "Create a command that asks Claude to design tests before writing them.",
                "Create .claude/commands/test-plan.md for generating test plans from acceptance criteria.",
                "/test-plan command"
              ],
              [
                "24. Create /pr-desc command",
                "Create a command that writes PR summaries from git diff.",
                "Create .claude/commands/pr-desc.md that outputs title, summary, test evidence, and risk notes.",
                "/pr-desc command"
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: this is not a toy publish task. The final outcome is a real monorepo with frontend, backend, database schema, auth, workspace security, task management, tests, automation assets, and documentation."
          }
        ]
      },
      {
        "id": "m8dev4",
        "title": "Project Phase 4: Database and Backend Foundation",
        "minutes": 40,
        "content": [
          {
            "t": "p",
            "v": "This final chapter replaces the old publishing capstone. Students now build a serious full-stack product from scratch: DevFlow, an AI-assisted team project-management platform. This phase has eight concrete subtopics. Each task is designed to be executed with Claude Code, reviewed by the student, and committed as real project work."
          },
          {
            "t": "h",
            "v": "Project rule for this phase"
          },
          {
            "t": "ul",
            "v": [
              "Every task starts with exploration or planning before implementation.",
              "Claude must name exact files before editing them.",
              "Students must inspect git diff before committing.",
              "Every feature must have either automated verification or a manual test checklist.",
              "Do not copy from the reference repos; use them as architectural references only."
            ]
          },
          {
            "t": "table",
            "h": [
              "Task / subtopic",
              "Detailed student steps",
              "Claude Code prompt",
              "Deliverable"
            ],
            "r": [
              [
                "25. Install Prisma",
                "Add Prisma to the backend and initialize schema files.",
                "Set up Prisma for the API. Explain generated files and commands.",
                "Prisma initialized"
              ],
              [
                "26. Design schema v1",
                "Create User, Workspace, Membership, Project, Task, Label, Comment, ActivityLog models.",
                "Design the first Prisma schema for DevFlow. Explain relationships before writing.",
                "schema.prisma draft"
              ],
              [
                "27. Review schema risks",
                "Ask Claude to review cascade deletes, indexes, uniqueness, and multi-tenant safety.",
                "Review this schema for data integrity, tenant isolation, and query performance risks.",
                "schema review"
              ],
              [
                "28. Create migration",
                "Run the migration or create the migration files depending on the local DB setup.",
                "Run or prepare the first Prisma migration and explain how to reset safely in development.",
                "migration"
              ],
              [
                "29. Create database client",
                "Add a single Prisma client module.",
                "Create a database client module and explain why the app should import it from one place.",
                "db client"
              ],
              [
                "30. Add API error shape",
                "Standardize error responses.",
                "Create shared API error helpers and middleware for consistent JSON errors.",
                "error helpers"
              ],
              [
                "31. Add validation pattern",
                "Choose Zod or similar validation and create a pattern for request validation.",
                "Set up request validation for Express routes. Use a small reusable pattern.",
                "validation utility"
              ],
              [
                "32. Add health and diagnostics",
                "Create /health and a minimal diagnostic route if appropriate.",
                "Add a health-check endpoint and explain what it should and should not expose.",
                "health endpoint"
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: this is not a toy publish task. The final outcome is a real monorepo with frontend, backend, database schema, auth, workspace security, task management, tests, automation assets, and documentation."
          }
        ]
      },
      {
        "id": "m8dev5",
        "title": "Project Phase 5: Authentication and Workspace Security",
        "minutes": 40,
        "content": [
          {
            "t": "p",
            "v": "This final chapter replaces the old publishing capstone. Students now build a serious full-stack product from scratch: DevFlow, an AI-assisted team project-management platform. This phase has eight concrete subtopics. Each task is designed to be executed with Claude Code, reviewed by the student, and committed as real project work."
          },
          {
            "t": "h",
            "v": "Project rule for this phase"
          },
          {
            "t": "ul",
            "v": [
              "Every task starts with exploration or planning before implementation.",
              "Claude must name exact files before editing them.",
              "Students must inspect git diff before committing.",
              "Every feature must have either automated verification or a manual test checklist.",
              "Do not copy from the reference repos; use them as architectural references only."
            ]
          },
          {
            "t": "table",
            "h": [
              "Task / subtopic",
              "Detailed student steps",
              "Claude Code prompt",
              "Deliverable"
            ],
            "r": [
              [
                "33. Create auth routes plan",
                "Plan register, login, current user, logout/token strategy.",
                "Plan authentication endpoints for DevFlow with exact files and security considerations.",
                "auth plan"
              ],
              [
                "34. Implement registration",
                "Create register endpoint with validation and password hashing.",
                "Implement user registration safely. Include validation, password hashing, and duplicate email handling.",
                "register endpoint"
              ],
              [
                "35. Implement login",
                "Create login endpoint with credential validation.",
                "Implement login safely. Return a token or session response without leaking sensitive info.",
                "login endpoint"
              ],
              [
                "36. Create auth middleware",
                "Decode and verify auth on protected routes.",
                "Create authentication middleware and explain how routes should use it.",
                "auth middleware"
              ],
              [
                "37. Create current-user route",
                "Return the authenticated user profile.",
                "Add a current-user endpoint that uses auth middleware and excludes sensitive fields.",
                "me endpoint"
              ],
              [
                "38. Model workspace membership",
                "Use Membership to connect users to workspaces with roles.",
                "Implement workspace membership checks. Explain owner/admin/member/viewer behavior.",
                "membership rules"
              ],
              [
                "39. Add authorization helper",
                "Create a reusable function for checking access to a workspace/project.",
                "Create authorization helpers for workspace and project access. Keep them testable.",
                "authorization helper"
              ],
              [
                "40. Security review auth",
                "Ask a security-reviewer subagent or Claude to review auth code.",
                "Review the auth and authorization code for common vulnerabilities and missing tests.",
                "security review"
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: this is not a toy publish task. The final outcome is a real monorepo with frontend, backend, database schema, auth, workspace security, task management, tests, automation assets, and documentation."
          }
        ]
      },
      {
        "id": "m8dev6",
        "title": "Project Phase 6: Projects, Tasks, Comments, and Activity",
        "minutes": 40,
        "content": [
          {
            "t": "p",
            "v": "This final chapter replaces the old publishing capstone. Students now build a serious full-stack product from scratch: DevFlow, an AI-assisted team project-management platform. This phase has eight concrete subtopics. Each task is designed to be executed with Claude Code, reviewed by the student, and committed as real project work."
          },
          {
            "t": "h",
            "v": "Project rule for this phase"
          },
          {
            "t": "ul",
            "v": [
              "Every task starts with exploration or planning before implementation.",
              "Claude must name exact files before editing them.",
              "Students must inspect git diff before committing.",
              "Every feature must have either automated verification or a manual test checklist.",
              "Do not copy from the reference repos; use them as architectural references only."
            ]
          },
          {
            "t": "table",
            "h": [
              "Task / subtopic",
              "Detailed student steps",
              "Claude Code prompt",
              "Deliverable"
            ],
            "r": [
              [
                "41. Workspace CRUD",
                "Build endpoints for creating, listing, updating, and archiving workspaces.",
                "Implement workspace CRUD with permission checks and validation.",
                "workspace API"
              ],
              [
                "42. Project CRUD",
                "Build endpoints for projects inside a workspace.",
                "Implement project CRUD scoped to a workspace. Prevent cross-workspace access.",
                "project API"
              ],
              [
                "43. Task CRUD",
                "Build task create/read/update/delete endpoints.",
                "Implement task CRUD with status, priority, due date, and assignee fields.",
                "task API"
              ],
              [
                "44. Task filtering",
                "Add filters by status, priority, assignee, label, and search text.",
                "Add task filtering and explain query parameters and indexes.",
                "task filters"
              ],
              [
                "45. Labels",
                "Add labels per workspace or project.",
                "Implement labels with create/list/attach/remove behavior.",
                "labels API"
              ],
              [
                "46. Comments",
                "Add comments to tasks.",
                "Implement task comments with author tracking and validation.",
                "comments API"
              ],
              [
                "47. Activity logging",
                "Record task creation, status changes, comments, and assignment changes.",
                "Implement activity logging for important events without logging secrets.",
                "activity logs"
              ],
              [
                "48. Backend API tests",
                "Add API tests for the most important happy paths and permission failures.",
                "Create a backend test plan and implement the highest-value tests first.",
                "API tests"
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: this is not a toy publish task. The final outcome is a real monorepo with frontend, backend, database schema, auth, workspace security, task management, tests, automation assets, and documentation."
          }
        ]
      },
      {
        "id": "m8dev7",
        "title": "Project Phase 7: Frontend Application Build",
        "minutes": 40,
        "content": [
          {
            "t": "p",
            "v": "This final chapter replaces the old publishing capstone. Students now build a serious full-stack product from scratch: DevFlow, an AI-assisted team project-management platform. This phase has eight concrete subtopics. Each task is designed to be executed with Claude Code, reviewed by the student, and committed as real project work."
          },
          {
            "t": "h",
            "v": "Project rule for this phase"
          },
          {
            "t": "ul",
            "v": [
              "Every task starts with exploration or planning before implementation.",
              "Claude must name exact files before editing them.",
              "Students must inspect git diff before committing.",
              "Every feature must have either automated verification or a manual test checklist.",
              "Do not copy from the reference repos; use them as architectural references only."
            ]
          },
          {
            "t": "table",
            "h": [
              "Task / subtopic",
              "Detailed student steps",
              "Claude Code prompt",
              "Deliverable"
            ],
            "r": [
              [
                "49. Create app shell",
                "Build routes, layout, navigation, and protected route behavior.",
                "Create the React app shell for DevFlow with public and authenticated layouts.",
                "app shell"
              ],
              [
                "50. Auth screens",
                "Build login and registration pages with validation and error states.",
                "Implement login and registration UI connected to the API client.",
                "auth UI"
              ],
              [
                "51. API client",
                "Create a typed API client layer.",
                "Create a frontend API client and explain how errors and auth tokens are handled.",
                "API client"
              ],
              [
                "52. Dashboard page",
                "Show workspaces, recent activity, and project summary.",
                "Build the dashboard page with loading, empty, and error states.",
                "dashboard"
              ],
              [
                "53. Workspace page",
                "List projects, members, and workspace actions.",
                "Build the workspace page and connect it to backend data.",
                "workspace UI"
              ],
              [
                "54. Project page",
                "Show task list, filters, and project metadata.",
                "Build the project page with task list and filters.",
                "project UI"
              ],
              [
                "55. Task detail page",
                "Show task details, comments, status changes, and labels.",
                "Build the task detail page with editable fields and comments.",
                "task detail UI"
              ],
              [
                "56. Kanban board",
                "Add board columns for backlog, todo, in progress, and done.",
                "Build a Kanban board for tasks. Keep drag-and-drop optional; start with button-based status changes.",
                "Kanban board"
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: this is not a toy publish task. The final outcome is a real monorepo with frontend, backend, database schema, auth, workspace security, task management, tests, automation assets, and documentation."
          }
        ]
      },
      {
        "id": "m8dev8",
        "title": "Project Phase 8: Quality, Automation, and Final Handoff",
        "minutes": 40,
        "content": [
          {
            "t": "p",
            "v": "This final chapter replaces the old publishing capstone. Students now build a serious full-stack product from scratch: DevFlow, an AI-assisted team project-management platform. This phase has eight concrete subtopics. Each task is designed to be executed with Claude Code, reviewed by the student, and committed as real project work."
          },
          {
            "t": "h",
            "v": "Project rule for this phase"
          },
          {
            "t": "ul",
            "v": [
              "Every task starts with exploration or planning before implementation.",
              "Claude must name exact files before editing them.",
              "Students must inspect git diff before committing.",
              "Every feature must have either automated verification or a manual test checklist.",
              "Do not copy from the reference repos; use them as architectural references only."
            ]
          },
          {
            "t": "table",
            "h": [
              "Task / subtopic",
              "Detailed student steps",
              "Claude Code prompt",
              "Deliverable"
            ],
            "r": [
              [
                "57. Frontend tests",
                "Add component or integration tests for auth, task list, and task detail.",
                "Create frontend tests for critical user flows. Avoid brittle snapshot-only tests.",
                "frontend tests"
              ],
              [
                "58. Backend regression tests",
                "Add tests for auth, permissions, and task filters.",
                "Add backend regression tests for security-sensitive behavior.",
                "regression tests"
              ],
              [
                "59. Create subagents",
                "Create security-reviewer, test-writer, and docs-writer subagents.",
                "Design three DevFlow subagents with limited tools and strict output formats.",
                "subagents"
              ],
              [
                "60. Add safety hooks plan",
                "Document hooks for blocking destructive commands and running formatting.",
                "Design safe Claude Code hooks for this repo. Explain which are mandatory and which are optional.",
                "hooks plan"
              ],
              [
                "61. Create CI workflow",
                "Add GitHub Actions for lint/test/build.",
                "Create a GitHub Actions workflow that runs install, lint, test, and build safely.",
                "CI workflow"
              ],
              [
                "62. Final review pass",
                "Ask Claude to review the entire project against the acceptance criteria.",
                "Review DevFlow against the original acceptance criteria. Return pass/fail and fix list.",
                "final review"
              ],
              [
                "63. Write documentation",
                "Generate architecture, API, and user documentation.",
                "Create final docs: architecture, API reference, setup guide, and user walkthrough.",
                "project docs"
              ],
              [
                "64. Demo script and roadmap",
                "Write a live demo script and next-feature roadmap.",
                "Write a 10-minute demo script and a prioritized roadmap for v2 features.",
                "demo script"
              ]
            ]
          },
          {
            "t": "note",
            "v": "Instructor cue: this is not a toy publish task. The final outcome is a real monorepo with frontend, backend, database schema, auth, workspace security, task management, tests, automation assets, and documentation."
          }
        ]
      }
    ]
  }
];

function Block({ b, accent }) {
  const base = { fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif", lineHeight: 1.7 };
  if (b.t === "p") return <p style={{ ...base, fontSize: 14.5, color: "#b9b9d6", margin: "0 0 16px" }}>{b.v}</p>;
  if (b.t === "h") return <h3 style={{ ...base, fontSize: 12, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: accent, margin: "24px 0 10px" }}>{b.v}</h3>;
  if (b.t === "ul") return (
    <ul style={{ margin: "0 0 16px", paddingLeft: 0, listStyle: "none" }}>
      {b.v.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 10, marginBottom: 7, alignItems: "flex-start" }}>
          <span style={{ color: accent, marginTop: 6, flexShrink: 0, fontSize: 8 }}>◆</span>
          <span style={{ fontSize: 13.5, color: "#a9a9ca", lineHeight: 1.65 }}>{item}</span>
        </li>
      ))}
    </ul>
  );
  if (b.t === "ol") return (
    <ol style={{ margin: "0 0 16px", paddingLeft: 0, listStyle: "none" }}>
      {b.v.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 10, marginBottom: 7, alignItems: "flex-start" }}>
          <span style={{ color: accent, fontWeight: 800, fontSize: 12, minWidth: 24, flexShrink: 0, fontFamily: "JetBrains Mono, ui-monospace, monospace" }}>{i + 1}.</span>
          <span style={{ fontSize: 13.5, color: "#a9a9ca", lineHeight: 1.65 }}>{item}</span>
        </li>
      ))}
    </ol>
  );
  if (b.t === "code") return (
    <div style={{ margin: "0 0 16px", background: "#090912", border: "1px solid #28283c", borderRadius: 12, overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 14px", borderBottom: "1px solid #1c1c2c", background: "#0f0f1a" }}>
        <span style={{ fontSize: 10, color: "#6f6f91", fontFamily: "JetBrains Mono, ui-monospace, monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>{b.lang}</span>
      </div>
      <pre style={{ margin: 0, padding: "15px 16px", fontSize: 12.5, color: "#d2d2ef", fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace", overflowX: "auto", lineHeight: 1.65, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{b.v}</pre>
    </div>
  );
  if (b.t === "note") return (
    <div style={{ margin: "0 0 16px", background: "#141421", borderLeft: `4px solid ${accent}`, borderRadius: "0 12px 12px 0", padding: "13px 16px", fontSize: 13.5, color: "#a7a7c4", lineHeight: 1.65 }}>
      <span style={{ fontWeight: 800, color: accent }}>Instructor note: </span>{b.v}
    </div>
  );
  if (b.t === "table") return (
    <div style={{ margin: "0 0 16px", overflowX: "auto", borderRadius: 12, border: "1px solid #242438" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.8 }}>
        <thead>
          <tr style={{ background: "#11111d" }}>
            {b.h.map((h, i) => <th key={i} style={{ padding: "10px 14px", textAlign: "left", color: accent, fontWeight: 800, fontSize: 11, letterSpacing: "0.06em", borderBottom: "1px solid #242438", whiteSpace: "nowrap" }}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {b.r.map((row, ri) => (
            <tr key={ri} style={{ borderBottom: ri < b.r.length - 1 ? "1px solid #191927" : "none", background: ri % 2 === 0 ? "transparent" : "#0e0e18" }}>
              {row.map((cell, ci) => <td key={ci} style={{ padding: "10px 14px", color: "#a8a8c6", lineHeight: 1.55, verticalAlign: "top" }}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return null;
}

function formatTime(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h ? `${h}h ${m ? `${m}m` : ""}`.trim() : `${m}m`;
}

export default function App() {
  const [done, setDone] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem("cc8_done") || "[]")); }
    catch { return new Set(); }
  });
  const [active, setActive] = useState(M[0].sections[0].id);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(() => new Set(M.map(m => m.id)));

  const allSections = useMemo(() => M.flatMap(m => m.sections.map(s => ({ ...s, module: m }))), []);
  const totalMinutes = useMemo(() => M.reduce((sum, m) => sum + m.minutes, 0), []);
  const totalSections = allSections.length;
  const activeSection = allSections.find(s => s.id === active) || allSections[0];
  const activeIndex = allSections.findIndex(s => s.id === activeSection.id);
  const completedMinutes = allSections.filter(s => done.has(s.id)).reduce((sum, s) => sum + s.minutes, 0);
  const progress = Math.round((done.size / totalSections) * 100);
  const timeProgress = Math.round((completedMinutes / totalMinutes) * 100);

  useEffect(() => {
    try { localStorage.setItem("cc8_done", JSON.stringify([...done])); } catch {}
  }, [done]);

  const filteredModules = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return M;
    return M.map(module => ({
      ...module,
      sections: module.sections.filter(section =>
        section.title.toLowerCase().includes(q) ||
        section.content.some(block => JSON.stringify(block).toLowerCase().includes(q))
      )
    })).filter(module => module.sections.length > 0 || module.title.toLowerCase().includes(q));
  }, [search]);

  const toggleDone = (id) => {
    setDone(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleModule = (id) => {
    setOpen(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const goToSection = (id) => {
    setActive(id);
    const el = document.getElementById("top");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="top" style={{ minHeight: "100vh", background: "radial-gradient(circle at top left, #202040 0, #07070d 38%, #050508 100%)", color: "#f4f4ff", fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" }}>
      <style>{`* { box-sizing: border-box; } body { margin: 0; } button, input { font: inherit; } @media (max-width: 900px) { .layout { flex-direction: column; } .sidebar { position: relative !important; width: 100% !important; height: auto !important; } .main { padding: 24px 18px 60px !important; } .heroTitle { font-size: 34px !important; } }`}</style>
      <div className="layout" style={{ display: "flex", minHeight: "100vh" }}>
        <aside className="sidebar" style={{ width: 360, flexShrink: 0, borderRight: "1px solid #24243b", background: "rgba(7,7,13,0.92)", backdropFilter: "blur(16px)", position: "sticky", top: 0, height: "100vh", overflowY: "auto", padding: 22 }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#79799b", fontWeight: 800, marginBottom: 8 }}>8+ Hour Course</div>
            <h1 style={{ margin: "0 0 8px", fontSize: 25, letterSpacing: "-0.04em", lineHeight: 1.05 }}>Claude Code Masterclass</h1>
            <p style={{ margin: 0, color: "#9292b1", fontSize: 13, lineHeight: 1.55 }}>Deep course notes with repo-based labs, command mastery, MCP, hooks, skills, subagents, GitHub automation, and a full-stack DevFlow build.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            <div style={{ padding: 12, borderRadius: 14, background: "#10101a", border: "1px solid #25253a" }}>
              <div style={{ color: "#77779a", fontSize: 11, marginBottom: 5 }}>Content</div>
              <strong>{formatTime(totalMinutes)}</strong>
            </div>
            <div style={{ padding: 12, borderRadius: 14, background: "#10101a", border: "1px solid #25253a" }}>
              <div style={{ color: "#77779a", fontSize: 11, marginBottom: 5 }}>Lessons</div>
              <strong>{totalSections}</strong>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#aaaacc", marginBottom: 7 }}>
              <span>{progress}% complete</span><span>{formatTime(completedMinutes)} / {formatTime(totalMinutes)}</span>
            </div>
            <div style={{ height: 9, background: "#151525", borderRadius: 999, overflow: "hidden", border: "1px solid #26263b" }}>
              <div style={{ width: `${timeProgress}%`, height: "100%", background: "linear-gradient(90deg, #22d3ee, #a3e635)", borderRadius: 999 }} />
            </div>
          </div>

          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search lessons, labs, prompts..."
            style={{ width: "100%", marginBottom: 16, padding: "12px 13px", borderRadius: 13, border: "1px solid #2b2b42", background: "#0e0e18", color: "#f4f4ff", outline: "none" }}
          />

          <nav>
            {filteredModules.map((module, mi) => (
              <div key={module.id} style={{ marginBottom: 12 }}>
                <button onClick={() => toggleModule(module.id)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, border: "1px solid #25253a", background: module.bg, color: "#fff", borderRadius: 14, padding: "12px 13px", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontWeight: 800, fontSize: 13 }}>{mi + 1}. {module.title}</span>
                  <span style={{ fontSize: 12, color: module.color, fontWeight: 900 }}>{formatTime(module.minutes)}</span>
                </button>
                {open.has(module.id) && (
                  <div style={{ padding: "8px 0 0 9px" }}>
                    {module.sections.map(section => {
                      const isActive = section.id === activeSection.id;
                      const isDone = done.has(section.id);
                      return (
                        <button key={section.id} onClick={() => goToSection(section.id)} style={{ width: "100%", display: "flex", gap: 9, alignItems: "flex-start", border: "none", borderLeft: `2px solid ${isActive ? module.color : "#25253a"}`, background: isActive ? "#141424" : "transparent", color: isActive ? "#ffffff" : "#aaaac8", padding: "9px 10px", cursor: "pointer", textAlign: "left", borderRadius: "0 10px 10px 0" }}>
                          <span style={{ width: 17, height: 17, borderRadius: 999, border: `1px solid ${isDone ? module.color : "#3a3a52"}`, color: module.color, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, marginTop: 1 }}>{isDone ? "✓" : ""}</span>
                          <span style={{ flex: 1 }}>{section.title} <span style={{ color: "#666685", fontSize: 11 }}>({section.minutes}m)</span></span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        <main className="main" style={{ flex: 1, minWidth: 0, padding: "42px clamp(26px, 5vw, 74px) 90px" }}>
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", padding: "8px 12px", borderRadius: 999, background: activeSection.module.bg, color: activeSection.module.color, fontSize: 12, fontWeight: 900, marginBottom: 18 }}>
              <span>Module {M.findIndex(m => m.id === activeSection.module.id) + 1}</span>
              <span style={{ opacity: 0.6 }}>•</span>
              <span>Lesson {activeIndex + 1} of {totalSections}</span>
              <span style={{ opacity: 0.6 }}>•</span>
              <span>{activeSection.minutes} min</span>
            </div>

            <header style={{ marginBottom: 24 }}>
              <h2 className="heroTitle" style={{ fontSize: 46, lineHeight: 1.02, letterSpacing: "-0.06em", margin: "0 0 12px" }}>{activeSection.title}</h2>
              <p style={{ margin: 0, color: "#9696b4", fontSize: 15.5 }}>{activeSection.module.title} · {formatTime(activeSection.module.minutes)} module</p>
            </header>

            <div style={{ background: "rgba(12,12,23,0.86)", border: "1px solid #292943", borderRadius: 24, padding: "28px clamp(18px, 4vw, 40px)", boxShadow: "0 24px 80px rgba(0,0,0,0.34)" }}>
              {activeSection.content.map((block, index) => (
                <Block key={`${activeSection.id}-${index}`} b={block} accent={activeSection.module.color} />
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: 14, marginTop: 20, alignItems: "center", flexWrap: "wrap" }}>
              <button onClick={() => toggleDone(activeSection.id)} style={{ border: "1px solid #30304c", background: done.has(activeSection.id) ? activeSection.module.bg : "#10101a", color: done.has(activeSection.id) ? activeSection.module.color : "#e5e5f7", borderRadius: 14, padding: "12px 16px", fontWeight: 900, cursor: "pointer" }}>
                {done.has(activeSection.id) ? "Marked complete" : "Mark complete"}
              </button>

              <div style={{ display: "flex", gap: 10 }}>
                <button disabled={activeIndex <= 0} onClick={() => goToSection(allSections[Math.max(0, activeIndex - 1)].id)} style={{ border: "1px solid #30304c", background: "#10101a", color: activeIndex <= 0 ? "#55556f" : "#e5e5f7", borderRadius: 14, padding: "12px 16px", fontWeight: 900, cursor: activeIndex <= 0 ? "not-allowed" : "pointer" }}>Previous</button>
                <button disabled={activeIndex >= allSections.length - 1} onClick={() => goToSection(allSections[Math.min(allSections.length - 1, activeIndex + 1)].id)} style={{ border: "1px solid #30304c", background: activeSection.module.color, color: "#07070d", borderRadius: 14, padding: "12px 18px", fontWeight: 950, cursor: activeIndex >= allSections.length - 1 ? "not-allowed" : "pointer", opacity: activeIndex >= allSections.length - 1 ? 0.45 : 1 }}>Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
