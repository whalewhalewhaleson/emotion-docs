---
title: Telegram Bot Engineering
description: Engineering notes from shipping production Telegram bots for business operations.
publish: true
---

Every operational tool here runs through Telegram because that is where the teams already work. This wiki captures the patterns that survived real usage.

For a higher-level planning guide, start with the [[playbooks/telegram-bots|Telegram Bot Playbook]]. For the broader automation lens, read [[topics/ai-automation|AI & Automation]].

## The pages

| Page                                                                      | Covers                                                        |
| ------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [[wiki/telegram-bots/choosing-your-surface\|Choosing Your Surface]]       | Bot, Mini App, dashboard: match the task to the user's mode.  |
| [[wiki/telegram-bots/authentication-and-access\|Authentication & Access]] | Telegram auth, allowlists, revocation, and onboarding.        |
| [[wiki/telegram-bots/platform-limits\|Platform Limits]]                   | File caps, message caps, markdown traps, and webview cliffs.  |
| [[wiki/telegram-bots/conversation-design\|Conversation Design]]           | Controls, multi-step capture, copy, and persistent keyboards. |
| [[wiki/telegram-bots/mini-apps\|Mini Apps]]                               | Deep links, auth headers, media, and cross-surface sync.      |
| [[wiki/telegram-bots/running-in-production\|Running in Production]]       | Deploys, polling conflicts, scheduled AI jobs, broadcasts.    |

## Philosophy

A business bot is a **capture device** first. Make the recurring duty cheap enough that people actually do it. Dashboards, intelligence, and gamification only work after the habit exists.

## Related projects

- [[projects/store-visit-app|Store Visit App]]
- [[projects/signal-log-bot|Signal Log Bot]]
- [[projects/cultivaite|CultivAIte]]
- [[projects/promotchi|Promotchi]]
