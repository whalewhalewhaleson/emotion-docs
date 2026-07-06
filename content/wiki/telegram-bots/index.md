---
title: Telegram Bot Engineering
description: Practical patterns from shipping production Telegram bots for business operations.
publish: true
---

# Telegram Bot Engineering

Every operational tool here runs through Telegram because that is where the teams already work. This wiki captures the patterns that survived real usage.

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
