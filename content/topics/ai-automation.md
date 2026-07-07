---
title: AI & Automation
description: "How eMotion thinks about useful AI automation: clear workflows first, tools second."
publish: true
---

AI works best when it is attached to a clear workflow.

The goal is not to add AI everywhere. The goal is to find where a business process can become faster, clearer, or easier to repeat.

## Where AI helps most

| Manual work            | Better with AI when...                                | Example from our work                       |
| ---------------------- | ----------------------------------------------------- | ------------------------------------------- |
| Field reporting        | Inputs are frequent and leadership needs summaries.   | [[projects/store-visit-app\|SVA]]           |
| Incident logging       | People can describe issues faster than classify them. | [[projects/signal-log-bot\|Signal Log Bot]] |
| Campaign participation | Reminders, deadlines, and recognition repeat weekly.  | [[projects/cultivaite\|CultivAIte]]         |
| Field accountability   | The next action is predictable and time-sensitive.    | [[projects/promotchi\|Promotchi]]           |

## Our rule

Good automation starts with the process, not the tool.

Before building, we ask:

- What happens now?
- What slows people down?
- What decision repeats?
- What needs human review?
- What should never be automated?

This keeps AI useful instead of messy.

## Automation fit check

| Question                              | Strong fit                                      | Weak fit                                  |
| ------------------------------------- | ----------------------------------------------- | ----------------------------------------- |
| Is the workflow repeated often?       | Daily or weekly tasks.                          | Rare, one-off judgement calls.            |
| Is the input predictable enough?      | Known fields, messages, files, or review steps. | Constantly changing instructions.         |
| Can the system show its work?         | Logs, summaries, drafts, and review queues.     | Hidden decisions with no audit trail.     |
| Is there a clear handoff to a person? | Human approval, escalation, or final review.    | Fully automated action with unclear risk. |

## Related pages

- See how we build with AI assistance in [[playbooks/claude-code|Claude Code]].
- See chat-based automation patterns in [[playbooks/telegram-bots|Telegram Bots]].
- Read the deeper engineering notes in [[wiki/telegram-bots/index|Telegram Bot Engineering]].
- Browse the proof layer in [[projects/index|Projects]].
