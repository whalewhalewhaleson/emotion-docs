---
title: "Promotchi: Kind Accountability for a Field Team"
description: "A gamified Telegram bot for field accountability: timely submissions, treats, virtual pets, and usable team intelligence."
publish: true
---

Retail promoters submit availabilities and post-shift updates through a Telegram bot. On-time, complete submissions earn treats that feed an evolving virtual pet.

## Before

Two duties had to be chased every week: availability for rostering, and store updates after shifts. Coordinators became nags; promoters felt watched; the field intel still went mostly unread.

## The build

| Design choice     | Why it mattered                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Reward the duty   | Complete submissions earn treats. Treats feed a custom pet. A shared yard makes participation visible.                                      |
| Engineer fairness | Scoring uses fulfilment rate against each person's actual roster, join date, and excused weeks. Team leaderboards avoid individual shaming. |
| Reduce friction   | Shift pings arrive with a one-tap button into the update form. The reminder is also the doorway.                                            |
| Read the field    | Updates become a daily department report: coverage, wins, signals, and alerts.                                                              |

## What this project teaches

| Lesson                          | Why it matters                                                        |
| ------------------------------- | --------------------------------------------------------------------- |
| Accountability can feel lighter | Rewards and team progress reduce the need for constant chasing.       |
| Fairness needs data rules       | Scoring must reflect real roster patterns, not raw submission counts. |
| The reminder is the interface   | The best next action should appear exactly when the user needs it.    |

## After

- Launched across three markets with availability, shift pings, store updates, treats, pets, and reporting live.
- Chasing became a product loop: reminder, incentive, submission, report.
- Store updates became daily intelligence instead of a compliance archive.
- Feedback from launch was logged, triaged, and shipped quickly, including signals caught through [[projects/signal-log-bot|Signal Log Bot]].

## Under the hood

Telegram bot, Mini App for pet and journal, dashboard for the department, one database with role separation, points ledger integrity rules, scheduled shift pings, and scheduled reports. Related patterns: [[wiki/telegram-bots/index|Telegram Bot Engineering]].

## Read next

- [[playbooks/telegram-bots|Telegram Bot Playbook]]
- [[topics/ai-automation|AI & Automation]]
- [[projects/cultivaite|CultivAIte]]
- [[projects/index|Projects]]
