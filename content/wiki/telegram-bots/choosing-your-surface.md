---
title: Choosing Your Surface
description: Bot chat, Mini App, or web dashboard — match the surface to the cognitive mode of the task.
publish: true
---

# Choosing Your Surface

A Telegram-based tool has three possible surfaces, and most design mistakes are surface mistakes — putting a browsing task in chat, or a two-second capture behind a web login. We pick by **cognitive mode**:

| Surface | Cognitive mode | Best for |
|---|---|---|
| **Bot** (chat) | Standing desk — walk past, jot, walk on | Repeatable ≤2-minute capture; status checks; broadcasts |
| **Mini App** (in-Telegram webview) | Kitchen counter — mobile, but two-handed | Browsing, editing, layouts that don't fit chat |
| **Dashboard** (web) | Office chair — settle in, compare, export | Cross-user analysis, leadership oversight, reports |

All three read the same database — the split is interface, not infrastructure, so you shouldn't pay for it twice on the backend.

## Build where the user already works

The deeper principle: reachability is not residency. A tool your users *can* open loses daily to the app they already have open. Our field teams live in Telegram all day; that fact did more for adoption than any feature. When we replaced an enterprise reporting system with a bot ([[projects/store-visit-app|case study]]), the biggest single win was deleting the "open the other app" step.

## When to graduate from bot to Mini App

A chat bot's command surface scales badly. The trigger: scope has crept past the 3–5 commands people can remember (Hick's Law puts the sweet spot for visible bot commands at 3–5). Browsing history, editing records, anything with a layout — those want a Mini App, which opens inside Telegram with the user's identity already attached (see [[wiki/telegram-bots/authentication-and-access|Authentication & Access]]).

## When you still need a dashboard

Leadership work — comparing people or periods, exporting, admin — wants a big screen and a session, not a phone. We ship a web dashboard alongside almost every bot, authenticated with the same Telegram identity so there is still no password to manage.

## Default your bot to write-only in groups

One standing policy across all our bots: in **group chats**, the bot only *sends* (broadcasts, digests, alerts) — it doesn't accept commands and doesn't read members' messages. All interactive commands live in DMs. This cuts the misuse surface (nobody fat-fingers an admin command in a group), keeps the bot's privacy footprint minimal, and gives users a clean mental model: *DMs are where you talk to the bot; groups are where the bot talks to you.* Exceptions are explicit, per-command opt-ins.
