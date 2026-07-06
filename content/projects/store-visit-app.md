---
title: "Store Visit App: Field Reports That Nobody Has to Chase"
description: A Telegram-native store visit tool that freed channel managers from admin, with an AI layer that reads every visit overnight.
publish: true
---

# Store Visit App

Channel managers log structured store visits from Telegram in minutes. An AI layer reads every report overnight and briefs leadership each morning.

## Before

- Slow enterprise UI buried visit logging behind too many clicks.
- Reports arrived thin, late, or not at all.
- Ground truth stayed fragmented across hundreds of visits.

## The build

| Layer            | What changed                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Telegram capture | A guided six-section visit flow with photos: display, engagement, training, competitor activity, and follow-ups. No new app, forgotten login, or desk time.         |
| AI reading layer | Daily briefs, weekly patterns, and monthly channel dossiers. Counts come from structured data; qualitative signals are tracked as observations the system revisits. |

## After

- Adopted across four markets.
- Leadership reads a daily brief instead of chasing updates.
- Managers log richer qualitative intel because capture is cheap.
- Nudges, recaps, and summaries now run on schedule.
- [[projects/signal-log-bot|Signal Log Bot]] and [[projects/promotchi|Promotchi]] reuse the same bot + mini-app + intelligence shape.

## Under the hood

Telegram bot for capture, Mini App for browsing and editing, web dashboard for analytics, one database underneath. The AI layer combines SQL counts with tagged observations and multi-week hypotheses. Related patterns live in the [[wiki/telegram-bots/index|Telegram bot wiki]].
