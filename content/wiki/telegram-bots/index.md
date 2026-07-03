---
title: Telegram Bot Engineering
description: Everything we've learned shipping production Telegram bots for business operations — surfaces, auth, platform limits, conversation design, and reliability.
publish: false
---

# Telegram Bot Engineering

Every operational tool we've built — [[projects/store-visit-app|field reporting]], [[projects/signal-log-bot|incident logging]], [[projects/cultivaite|culture campaigns]], [[projects/promotchi|workforce engagement]] — runs on Telegram bots. Not because bots are trendy, but because Telegram is where our teams already work, and a tool that lives where its users live wins by default.

Shipping seven-plus production bots taught us things the documentation doesn't. This wiki is that knowledge, organised:

## The pages

- [[wiki/telegram-bots/choosing-your-surface|Choosing Your Surface]] — bot chat vs Mini App vs web dashboard: match the surface to the cognitive mode of the task, not to what's easiest to build.
- [[wiki/telegram-bots/authentication-and-access|Authentication & Access]] — Telegram as your identity layer: no login forms, two verification flavours, and the access-control flows around them.
- [[wiki/telegram-bots/platform-limits|Platform Limits]] — the cliff edges: file caps, message lengths, markdown traps, and the restrictions that only fail at runtime.
- [[wiki/telegram-bots/conversation-design|Conversation Design]] — input controls, multi-step flows, and copy that works in one-second glances.
- [[wiki/telegram-bots/mini-apps|Mini Apps]] — deep links, cross-surface sync, authenticated media, and the webview's sharp edges.
- [[wiki/telegram-bots/running-in-production|Running in Production]] — deploy gotchas, the pitfalls that bite every new bot, and architecture for scheduled AI consumers.

## The one-paragraph philosophy

A business bot is a **capture device** first: its job is to make a recurring duty (log the visit, report the incident, submit the reflection) so cheap that people actually do it. Everything else — dashboards, intelligence, gamification — depends on the capture habit existing. So we optimise ruthlessly for the capture path, keep commands few, gate everything on Telegram identity, and treat every platform limit on this wiki as a production incident someone already had.
