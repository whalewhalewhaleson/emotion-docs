---
title: "SVA: Field Reports That Nobody Has to Chase"
description: A Telegram-native field reporting system with an AI layer that turns every visit into daily leadership intelligence.
publish: true
---

SVA is a Telegram-native store visit tool. Channel managers log structured visits in minutes, then an AI layer reads every report overnight and briefs leadership each morning.

## Before

- Slow enterprise UI buried visit logging behind too many clicks.
- Reports arrived thin, late, or not at all.
- Ground truth stayed fragmented across hundreds of visits.

## The build

| Layer            | What changed                                                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Telegram capture | A guided six-section visit flow with photos: display, engagement, training, competitor activity, and follow-ups. No new app, forgotten login, or desk time.         |
| AI reading layer | Daily briefs, weekly patterns, and monthly channel dossiers. Counts come from structured data; qualitative signals are tracked as observations the system revisits. |

## What this project teaches

| Lesson                      | Why it matters                                                                |
| --------------------------- | ----------------------------------------------------------------------------- |
| Capture must be cheaper     | People report more when the tool fits the moment of work.                     |
| AI needs structured context | Summaries are stronger when qualitative notes sit beside reliable fields.     |
| Reports need a reader       | A system is only useful when the output lands where decisions already happen. |

## After

- Adopted across four markets.
- Leadership reads a daily brief instead of chasing updates.
- Managers log richer qualitative intel because capture is cheap.
- Nudges, recaps, and summaries now run on schedule.
- [[projects/signal-log-bot|Signal Log Bot]] and [[projects/promotchi|Promotchi]] reuse the same bot + mini-app + intelligence shape.

## Under the hood

Telegram bot for capture, Mini App for browsing and editing, web dashboard for analytics, one database underneath. The AI layer combines SQL counts with tagged observations and multi-week hypotheses. Related patterns live in the [[playbooks/telegram-bots|Telegram Bot Playbook]].

## Read next

- [[playbooks/telegram-bots|Telegram Bot Playbook]]
- [[topics/ai-automation|AI & Automation]]
- [[projects/signal-log-bot|Signal Log Bot]]
- [[projects/index|Projects]]
