---
title: "Promotchi: Kind Accountability for a Field Team"
description: A gamified Telegram bot for retail promoters — submit availabilities and store updates on time, earn treats, grow a pet. Accountability without surveillance.
publish: true
---

# Promotchi

**The one-liner:** retail promoters submit weekly availabilities and post-shift store updates through a Telegram bot; on-time, complete submissions earn treats that feed an evolving virtual pet — and the store updates feed real intelligence to the department.

## Problem

A distributed retail promoter team runs on two recurring submissions: weekly availability (so shifts can be rostered) and post-shift store updates (what happened on the floor). Both were chased manually — messages, reminders, cross-checking submissions against rosters in a legacy enterprise workflow. Chasing is corrosive in both directions: coordinators become nags, and the team experiences the process as surveillance rather than support.

And the store updates themselves — the ground-level view of how products actually sell — mostly went unread. Field intel was being collected as compliance, not used as intelligence.

## Innovation

**Make the submission the rewarding act.** Promotchi wraps the two duties in a game: complete, on-time submissions earn **treats**; treats feed a **pet** that each promoter customises through a branching catalogue of creatures, scenes, and accessories; consistent submission grows the whole thing. A shared yard shows everyone's pets. The posture is deliberate — *kind accountability*: celebrate the bar, soft-touch below it, never surveillance.

**Fairness engineered in.** Leaderboards compare teams, not individuals, and scoring uses a **fulfillment rate** — points earned against the maximum achievable given each person's actual roster, join date, and excused weeks — so a part-timer or a late joiner isn't structurally bottom of the table. Getting a scoreboard to feel fair to the people on it took as much design as the pet.

**Duties get easier, not just gamified.** The bot pings each promoter when their shift starts (with a one-tap button into the update form), posts a live team feed of store activity, and turns the completed updates into a daily department report — patterns, wins, competitor moves — so the intel finally gets read.

## Results

- **Launched to the promoter team across three markets** after a pilot with the full loop live: availabilities, shift pings, store updates, treats, pets, and the department intelligence report.
- **Chasing replaced by the loop itself** — the reminder is a shift ping with a button, the incentive is the pet, and the coordinator reads a report instead of cross-checking rosters by hand.
- **Store updates became a read daily report** for the department — coverage, good news, signals, and alerts — instead of an unread compliance archive.
- **The launch survived contact with real users**, and the fixes shipped fast: within days of launch, promoter feedback (confusing labels, missing options, a mis-firing points rule) was triaged from logged signals and shipped — several caught *through* [[projects/signal-log-bot|Signal Log Bot]], one tool feeding another.

## Under the hood

A Telegram bot, a Telegram Mini App (the pet, wardrobe, journal, and leaderboard), and a web dashboard for the department (availabilities, updates, admin). One database with strict role separation, a points ledger with database-enforced integrity rules, and scheduled routines for shift pings and reports. The pixel-art pipeline for pets and accessories is its own story; the bot engineering lessons are in the [[wiki/telegram-bots/index|Telegram bot wiki]].
