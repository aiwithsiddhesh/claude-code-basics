# Claude Code Built-In Commands Playbook
This guide accompanies the course module **Built-In Claude Code Commands Mastery**. It lists commands, aliases, when to use them, and why they matter. Availability may vary by Claude Code version, platform, plan, and environment.
## First command habits
- Type `/` in Claude Code to see available commands.
- Use `/help` when you are unsure.
- Use `/plan` before risky changes.
- Use `/diff`, `/code-review`, `/security-review`, and `/verify` before shipping.
- Use `/context` and `/compact` before long sessions degrade.
## 90+ commands and aliases
| Command | When to use | How / why |
|---|---|---|
| `/add-dir <path>` | You need Claude to work across multiple folders in one session. | Adds another working directory for file access; use for monorepos or shared packages. |
| `/agents` | You want to create, edit, or inspect subagent configurations. | Opens agent management; use before delegating specialized review, testing, or documentation tasks. |
| `/autofix-pr [prompt]` | A PR is already open and CI or review comments need fixes. | Starts a web Claude Code session that watches the PR and pushes fixes based on your instruction. |
| `/background [prompt]` | A task can continue while you free the terminal. | Detaches the current session as a background agent; useful for long investigations or migrations. |
| `/bg` | You want the short alias for /background. | Same intent as /background; teach aliases so students can read other developers’ workflows. |
| `/batch <instruction>` | A large change can be split into independent units. | Plans and fans work out into multiple worktrees/subagents; best for broad migrations, not tiny fixes. |
| `/branch [name]` | You want to fork the conversation path without losing the original. | Creates a conversation branch; use before trying an alternative approach. |
| `/fork` | You see older docs or teammates using the branch alias. | Alias for /branch unless fork-subagent behavior is configured; know it so old workflows make sense. |
| `/btw <question>` | You have a side question that should not pollute the main task. | Asks a quick aside without adding it to the main conversation history. |
| `/chrome` | You use Claude in Chrome and need to configure it. | Opens Chrome integration settings; useful for browser-assisted coding workflows. |
| `/claude-api` | You are writing code against the Anthropic Claude API. | Loads API reference material and patterns for SDK usage, streaming, tools, batches, and migrations. |
| `/claude-api migrate` | You need to upgrade existing Claude API code to a newer model. | Scans target files and adjusts model IDs or parameters that changed across API versions. |
| `/clear [name]` | You are starting an unrelated task and want empty context. | Starts a new conversation while preserving the old one in resume history. |
| `/reset` | You want the alias for /clear. | Useful when pair-programming because many people say reset instead of clear. |
| `/new` | You want another alias for /clear. | Starts fresh; use when the current context is actively harmful. |
| `/code-review` | You want a practical review of the current diff. | Checks for correctness bugs and cleanup opportunities; use before commit or PR. |
| `/code-review --fix` | You want Claude to apply review findings. | Lets Claude fix issues it finds; only use after inspecting the proposed findings. |
| `/code-review --comment` | You want review results posted to a GitHub PR. | Converts review findings into inline comments when GitHub context is available. |
| `/code-review ultra` | You need a deeper cloud review. | Runs a more intensive multi-agent/cloud review for high-risk changes. |
| `/color [color\|default]` | You run multiple sessions and need visual separation. | Changes prompt bar color; useful for avoiding confusion across terminals. |
| `/compact [instructions]` | The session is long but you want to keep working. | Summarizes old conversation into a smaller context footprint; add focus instructions to preserve key decisions. |
| `/config` | You need settings, theme, model, editor mode, or preferences. | Opens the settings UI; teach this early because many later issues are configuration problems. |
| `/settings` | You want the alias for /config. | Same behavior; students should recognize both names. |
| `/context` | You need to see why Claude is slow, forgetful, or overloaded. | Visualizes context usage and suggests what is consuming space. |
| `/context all` | You need the detailed context breakdown. | Expands the collapsed context view to inspect exact contributors. |
| `/copy [N]` | You want to reuse the last assistant answer or a code block. | Copies the latest or Nth-latest response; interactive picker appears for code blocks. |
| `/cost` | You want the alias for /usage. | Shows usage/cost information; useful in paid/team environments. |
| `/debug [description]` | Claude Code itself is behaving strangely. | Enables or inspects debug logs; include a description to focus troubleshooting. |
| `/deep-research <question>` | You need a cited research report from web sources. | Runs a workflow that fans out searches and cross-checks sources; not for local-only code questions. |
| `/desktop` | You want to continue the current session in the desktop app. | Moves the session to Claude Code Desktop where available. |
| `/app` | You want the alias for /desktop. | Same purpose; useful in cross-device workflows. |
| `/diff` | You need to inspect uncommitted changes and per-turn changes. | Opens an interactive diff viewer; use before asking for review or commit. |
| `/doctor` | Install, auth, or runtime setup seems broken. | Runs diagnostics and can offer fixes; use before manually debugging environment issues. |
| `/effort [level\|auto]` | A task needs more or less reasoning budget. | Sets reasoning effort such as low, medium, high, xhigh, max, or auto depending on model availability. |
| `/exit` | You want to leave the CLI. | Exits, or detaches from an attached background session while it keeps running. |
| `/quit` | You want the alias for /exit. | Know it because users type quit naturally. |
| `/export [filename]` | You want to save or share the conversation. | Exports the transcript as text; use for handoff, audit, or course evidence. |
| `/fast [on\|off]` | You need faster interaction and can trade off depth. | Toggles fast mode; good for simple edits or exploration, not architecture decisions. |
| `/feedback [report]` | You need to report a bug or send feedback. | Submits feedback with session context when appropriate. |
| `/bug` | You want the alias for /feedback. | Use when reporting unexpected Claude Code behavior. |
| `/share` | You want another alias for /feedback. | Useful when sharing a problematic or interesting session. |
| `/fewer-permission-prompts` | Permission prompts are interrupting safe read-only work. | Analyzes transcripts and suggests allowlist settings to reduce repeated prompts. |
| `/focus` | You want a cleaner terminal view. | Shows only the last prompt, compact tool summary, and final response in fullscreen mode. |
| `/goal [condition\|clear]` | You want Claude to keep working until a condition is met. | Sets a persistent goal; clear it when the condition is no longer appropriate. |
| `/heapdump` | Claude Code has high memory usage or suspected leak. | Writes a heap snapshot and memory breakdown for diagnostics. |
| `/help` | You forgot a command or need the available list. | Shows help and available commands; this is the safest discovery habit. |
| `/hooks` | You need deterministic automation around tool calls. | Views hook configurations; use when enforcing formatters, blockers, notifications, or audit logging. |
| `/ide` | You need IDE integration status or setup. | Manages IDE integrations such as VS Code/JetBrains support. |
| `/init` | You are opening a repo for the first time. | Generates starter CLAUDE.md project memory; use as the first setup command in most repositories. |
| `/insights` | You want to learn from your own Claude Code usage. | Generates a report about session patterns, friction points, and project areas. |
| `/install-github-app` | You want Claude GitHub Actions integration. | Walks through repository selection and GitHub app setup. |
| `/install-slack-app` | Your team wants Slack integration. | Starts OAuth flow for the Claude Slack app. |
| `/keybindings` | You want to customize keyboard shortcuts. | Opens or creates the keybindings config file. |
| `/login` | You need to sign in. | Starts authentication to your Anthropic account. |
| `/logout` | You need to sign out or switch accounts. | Ends the current authenticated session. |
| `/loop [interval] [prompt]` | A prompt should run repeatedly. | Runs recurring checks while the session stays open; useful for deploy monitoring or periodic test checks. |
| `/proactive` | You want the alias for /loop. | Good label for autonomous maintenance loops. |
| `/mcp` | You need to connect external tools or data sources. | Manages MCP servers and OAuth authentication. |
| `/memory` | You need to edit or inspect CLAUDE.md memory. | Opens project/user memory controls and auto-memory settings. |
| `/mobile` | You want the mobile app handoff. | Shows a QR code to download/open Claude mobile. |
| `/ios` | You want the iOS alias for /mobile. | Useful when onboarding Mac/iPhone users. |
| `/android` | You want the Android alias for /mobile. | Useful when onboarding Android users. |
| `/model [model]` | You need to switch model or default model. | Opens model picker or switches directly; use higher capability for risky architecture, lower for quick tasks. |
| `/passes` | You are eligible to share free Claude Code access. | Plan/account dependent; know it exists but do not build course workflows around it. |
| `/permissions` | You need to manage allow/ask/deny rules. | Opens permission rules by scope; essential for safe automation. |
| `/allowed-tools` | You want the alias for /permissions. | Older tutorials often say allowed tools; maps to the same concept. |
| `/plan [description]` | You want planning before execution. | Enters plan mode and optionally starts planning the described task; use before big or risky changes. |
| `/plugin` | You need to install or manage plugins. | Manages plugin-based extensions to Claude Code. |
| `/powerup` | You want interactive feature lessons. | Launches quick demos; useful for self-paced learners after installation. |
| `/privacy-settings` | You need to review privacy controls. | Available to some subscription users; important for enterprise/privacy-sensitive teams. |
| `/radio` | You want the Claude FM lo-fi stream. | Nonessential, but students may see it in the command menu. |
| `/recap` | You need a one-line summary of the current session. | Useful before pausing, handing off, or naming a session. |
| `/release-notes` | You need to know what changed in Claude Code. | Shows changelog/version picker; important because command behavior evolves. |
| `/reload-plugins` | You changed plugin files and need them active now. | Reloads active plugins without restarting Claude Code. |
| `/reload-skills` | You added or edited skills/commands during the session. | Re-scans skill and command directories without restarting. |
| `/remote-control` | You want this local session controllable from Claude.ai. | Makes the session available for remote control where supported. |
| `/rc` | You want the alias for /remote-control. | Shortcut for remote-control workflows. |
| `/remote-env` | You need defaults for remote web sessions. | Configures the environment used by remote sessions started with remote features. |
| `/rename [name]` | You want easier session navigation later. | Names the session; use before leaving important work. |
| `/resume [session]` | You want to continue a previous conversation. | Opens a picker or resumes a named/ID session. |
| `/continue` | You want the alias for /resume. | Natural term for returning to prior work. |
| `/review [PR]` | You want a local pull request review. | Reviews PR context locally; different from /code-review ultra cloud review. |
| `/rewind` | You need to go back to a previous point. | Rewinds conversation/code to a checkpoint or summarizes from a selected message. |
| `/checkpoint` | You want the alias for /rewind. | Useful because many students think in checkpoints. |
| `/undo` | You want another alias for /rewind. | Use carefully: inspect what will be reverted before accepting. |
| `/run` | You want Claude to launch and inspect the running app. | Bundled skill that validates behavior by running the app, not just tests. |
| `/run-skill-generator` | Your project needs a custom run recipe. | Creates a project skill teaching /run and /verify how to build and launch your app. |
| `/sandbox` | You want stronger execution isolation. | Toggles sandbox mode where supported; useful for untrusted or risky commands. |
| `/schedule [description]` | You want a recurring routine in managed infrastructure. | Creates, updates, lists, or runs routines conversationally. |
| `/routines` | You want the alias for /schedule. | Use when teaching recurring automations. |
| `/scroll-speed` | Mouse wheel scrolling feels wrong. | Adjusts terminal scroll speed in fullscreen mode. |
| `/security-review` | You want a security-focused diff review. | Analyzes pending branch changes for injection, auth, secrets, and data exposure risks. |
| `/setup-bedrock` | You use Amazon Bedrock. | Configures Bedrock authentication, region, and model pins. |
| `/setup-vertex` | You use Google Vertex AI. | Configures Vertex authentication, project, region, and model pins. |
| `/simplify [target]` | You want cleanup without a full bug hunt. | Runs cleanup-oriented review/fixes focused on reuse, simplification, efficiency, and abstraction. |
| `/skills` | You need to list, sort, or hide skills. | Shows available skills and lets you manage visibility. |
| `/stats` | You want the alias for /usage. | Opens usage stats; useful for team budget conversations. |
| `/status` | You need version, model, account, or connectivity information. | Opens the status tab and works even while Claude is responding. |
| `/statusline` | You want a custom prompt/status display. | Configures the status line, either by description or auto-detection. |
| `/stickers` | You want Claude Code stickers. | Not workflow-critical, but students may see it. |
| `/stop` | You need to stop an attached background session. | Stops work but keeps transcript and worktree. |
| `/tasks` | You need to inspect running background tasks. | Lists and manages background tasks. |
| `/bashes` | You want the alias for /tasks. | Useful when background bash commands are running. |
| `/team-onboarding` | You want an onboarding guide from real usage. | Generates a team guide from recent sessions, commands, and MCP usage. |
| `/teleport` | You want to bring a web session into terminal. | Fetches branch/conversation from Claude Code on the web. |
| `/tp` | You want the alias for /teleport. | Shortcut for cross-environment handoff. |
| `/terminal-setup` | Your terminal keybindings need configuration. | Fixes Shift+Enter and related terminal integration issues. |
| `/theme` | You want to change color theme or accessibility theme. | Selects light/dark/colorblind/ANSI/custom themes. |
| `/tui [default\|fullscreen]` | You want to change terminal rendering mode. | Switches renderer and relaunches into it with conversation intact. |
| `/ultraplan <prompt>` | You want a deep plan reviewed in browser before execution. | Drafts a plan in an ultraplan session, then execute remotely or send back to terminal. |
| `/ultrareview [PR]` | You need the older alias for deep review. | Preferred path is /code-review ultra, but this alias remains useful to recognize. |
| `/upgrade` | You need to change plan tier. | Opens upgrade page; plan-dependent. |
| `/usage` | You need plan limits, activity, and cost tracking. | Shows session cost/usage and, on some plans, breakdown by skills, subagents, plugins, and MCP. |
| `/usage-credits` | You want to configure credits when limits are hit. | Sets extra usage credit behavior where available. |
| `/verify` | You want behavioral validation after a code change. | Builds/runs the app and observes whether the change works, not just tests. |
| `/voice [hold\|tap\|off]` | You want voice dictation. | Toggles voice modes where available. |
| `/web-setup` | You need GitHub connected for Claude Code on the web. | Uses local gh credentials to connect GitHub for web/remote workflows. |
