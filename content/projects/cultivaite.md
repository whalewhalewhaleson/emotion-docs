---
title: "CultivAIte: A Culture Campaign That Runs Itself"
description: "A quarterly reflection campaign rebuilt as a Telegram bot: weekly reflections, peer recognition, and a shared garden."
publish: true
---

# CultivAIte

CultivAIte is a weekly reflection campaign run by a Telegram bot, with peer recognition automated end-to-end and participation made visible through a shared company garden.

## Before

- Manual chasing kept the campaign alive.
- "Good News" recognition meant collation, dedupe, approval, and announcements by hand.
- Participation felt like compliance because momentum was invisible.

## The build

| Part                 | What it does                                                                                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Weekly flow          | Three questions in Telegram: value lived out, role reflection, optional teammate recognition. Deadlines, reminders, late handling, and market-specific holidays are automated. |
| Recognition pipeline | Good News enters an approval queue. Approved shout-outs are announced, points credited, and history preserved without spreadsheet work.                                        |
| Shared garden        | Every person is a plant that grows with participation. Streaks, excusals, and team averages are handled fairly, not manually.                                                  |
| Personal journal     | Staff can see reflections, shout-outs, and where points came from in a Mini App.                                                                                               |

## After

Weekly participation reached the whole company. Peer recognition more than tripled over the campaign. The team running the campaign moved from manual production work to review-and-click operations.

## Under the hood

Telegram bot, staff Mini App, campaign dashboard, points ledger, custom week boundaries, per-person deadline offsets, and streak-preserving excusal rules. The bot engineering lessons sit in the [[wiki/telegram-bots/index|Telegram bot wiki]].
