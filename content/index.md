---
title: eMotion Docs
description: The AI tools we built for TC Acoustic, and the practical lessons from shipping them.
publish: true
---

We build custom AI tools for TC Acoustic: Telegram bots the field team already lives in, dashboards leadership actually reads, and AI layers that turn messy daily inputs into operational intelligence.

This site documents the work plainly: what each tool solves, how it was built, what changed after launch, and the engineering lessons that carried forward.

## The tools

| Tool                                          | What it does                                                                            |
| --------------------------------------------- | --------------------------------------------------------------------------------------- |
| [[projects/store-visit-app\|Store Visit App]] | Field reports in minutes, followed by a daily AI brief for leadership.                  |
| [[projects/signal-log-bot\|Signal Log Bot]]   | One free-text log for workflow friction; weekly AI clustering finds recurring problems. |
| [[projects/cultivaite\|CultivAIte]]           | Weekly reflection, peer recognition, and a shared garden for campaign participation.    |
| [[projects/promotchi\|Promotchi]]             | Retail promoter accountability through timely submissions, treats, and a virtual pet.   |

## The engineering

Start with [[wiki/telegram-bots/index|Telegram Bot Engineering]] for the reusable patterns: surfaces, authentication, platform limits, conversation design, Mini Apps, and production operations.

Because "we build custom AI tools" is easy to claim. The useful proof is the work: the choices, trade-offs, failures, and patterns that survived production.
