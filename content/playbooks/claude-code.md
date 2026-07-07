---
title: Claude Code Playbook
description: How eMotion uses Claude Code to plan, edit, test, and document digital systems.
publish: true
---

Claude Code is most useful when it is treated like a development partner, not a shortcut.

We use it to read existing systems, make focused changes, test the result, and capture lessons that can be reused.

## The workflow

| Step | What happens             | What good looks like                                                   |
| ---- | ------------------------ | ---------------------------------------------------------------------- |
| 1    | Define the task          | The goal, context, constraints, and done state are clear.              |
| 2    | Read the existing system | The change follows the codebase instead of inventing a new shape.      |
| 3    | Plan the edit            | The smallest useful surface is chosen.                                 |
| 4    | Make focused changes     | The diff solves the problem without unrelated cleanup.                 |
| 5    | Test the result          | The check matches the risk of the change.                              |
| 6    | Document what changed    | Future readers can understand the decision quickly.                    |
| 7    | Capture reusable lessons | The pattern feeds back into [[topics/ai-automation\|AI & Automation]]. |

## Better prompts

| Weak prompt          | Better prompt                                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------------------- |
| Make the bot better. | Review this Telegram bot flow and identify where users may get stuck.                                           |
| Build a dashboard.   | Read the existing reporting flow, then propose the smallest dashboard that answers the weekly review questions. |
| Fix the copy.        | Rewrite this page for a business reader: clearer first sentence, shorter sections, stronger internal links.     |

## What we ask Claude Code to do

- Read the project before editing.
- Match the existing architecture and naming.
- Keep changes small enough to review.
- Verify behavior with the right command or manual check.
- Explain trade-offs without turning the page into a build log.

## What still needs human judgement

| Area             | Why it stays human-led                                    |
| ---------------- | --------------------------------------------------------- |
| Product priority | The tool can suggest options, but not business value.     |
| Public content   | Redaction, tone, and positioning need editorial review.   |
| Workflow design  | The team must decide what should change in real life.     |
| Launch readiness | A passing test is not the same as operational confidence. |

## Used in

- [[projects/cultivaite|CultivAIte]]
- [[projects/signal-log-bot|Signal Log Bot]]
- [[projects/promotchi|Promotchi]]

## Related pages

- [[topics/ai-automation|AI & Automation]]
- [[playbooks/telegram-bots|Telegram Bot Playbook]]
- [[projects/index|Projects]]
- [[latest|Latest]]
