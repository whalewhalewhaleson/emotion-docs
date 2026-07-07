---
title: Telegram Bot Playbook
description: How eMotion designs Telegram bots that are simple, useful, and maintainable.
publish: true
---

A good Telegram bot should feel faster than a form and lighter than an app.

We use bots when the work is recurring, the user is already in Telegram, and the next step can be made obvious.

## Use a Telegram bot when...

| Need                   | Telegram bot fit | Why                                                   |
| ---------------------- | ---------------- | ----------------------------------------------------- |
| Fast replies           | Strong           | The bot lives where the user already checks messages. |
| Simple guided flows    | Strong           | Buttons and short prompts reduce uncertainty.         |
| Lead or update capture | Strong           | The user can submit without opening a full system.    |
| Internal alerts        | Strong           | The action can arrive with the reminder.              |
| Complex dashboards     | Weak             | Use a web dashboard or Mini App instead.              |
| Heavy visual browsing  | Weak             | Chat is not good for dense comparison.                |
| Long account setup     | Weak             | The bot should not become a signup maze.              |

## The flow shape

| Stage           | Purpose                                 |
| --------------- | --------------------------------------- |
| Start           | Tell the user what the bot can do.      |
| Choose intent   | Make the next action visible.           |
| Collect details | Ask only for what the workflow needs.   |
| Confirm         | Let the user catch mistakes.            |
| Trigger action  | Save, route, notify, or summarize.      |
| Send next step  | End with a clear status or instruction. |

## Design rules

- Keep the path narrow.
- Put the action inside the reminder when possible.
- Use buttons when the answer set is known.
- Use free text when classification would slow the user down.
- Move dense review work into a Mini App or dashboard.
- Treat every message as interface copy.

## Project patterns

| Project                                     | Bot lesson                                                              |
| ------------------------------------------- | ----------------------------------------------------------------------- |
| [[projects/store-visit-app\|SVA]]           | A bot can make field reporting cheap enough to become a habit.          |
| [[projects/signal-log-bot\|Signal Log Bot]] | Free text can beat forms when the first goal is capture.                |
| [[projects/cultivaite\|CultivAIte]]         | Weekly reminders work better when recognition and progress are visible. |
| [[projects/promotchi\|Promotchi]]           | Game mechanics can turn compliance into a lighter loop.                 |

## Related pages

- [[wiki/telegram-bots/index|Telegram Bot Engineering]]
- [[topics/ai-automation|AI & Automation]]
- [[playbooks/claude-code|Claude Code Playbook]]
- [[projects/index|Projects]]
