---
title: "Store Visit App: Field Reports That Nobody Has to Chase"
description: A Telegram-native store visit tool that freed channel managers from admin — and an AI layer that reads every visit so nothing they notice slips away.
publish: false
---

# Store Visit App

**The one-liner:** channel managers log structured store visits from Telegram in minutes, and an AI intelligence layer reads every report overnight and briefs leadership each morning — across four markets.

## Problem

Two problems, actually.

**The tool problem.** Channel managers — the people who visit retail stores to check displays, train staff, and gather ground intel — were logging visits into an enterprise system that was slow, rigid, and buried the logging behind many clicks of bad UI. People follow the path of least resistance, and the path of least resistance was *not logging*. Reports were thin, late, or missing, and managers spent energy chasing instead of reading.

**The intelligence problem.** Even the reports that did get filed went somewhere no one could see across. Hundreds of store updates a quarter, each holding a fragment of ground truth — a competitor promotion here, a staffing gap there — and no human with the time to read all of them, let alone spot the patterns.

## Innovation

**A tool that gets out of the way.** The rebuild moved visit logging into Telegram — the app the team already lives in all day. A visit is a guided six-section flow with photos: what's on display, who was engaged, what training happened, what competitors are doing, follow-ups. No new app to install, no login to remember, no desk time required. The design goal was almost self-effacing: make the tool so frictionless that the channel manager's attention goes to *noticing things in the store*, not to operating software.

**An intelligence layer that never sleeps on a report.** Every morning, an AI routine reads the previous day's visits and produces a brief for leadership: statistics, signals worth acting on, and alerts. It maintains a memory of qualitative observations across weeks, so it can say "this issue is recurring at this store" or "this competitor move is spreading across the market" — patterns no single reader would catch. A weekly report thinks in longer arcs; monthly per-channel dossiers go deeper. Leadership reads the brief instead of asking people for updates.

The glue between the two: the tool frees the people to notice; the AI makes sure nothing they notice slips away.

## Results

- **Adopted across all four markets** (Singapore, Malaysia, Thailand, Hong Kong) — from a five-person pilot to the whole channel-manager team, with store coverage tracked by visit-cadence tier.
- **Leadership reads a daily AI brief** generated from the ground reports — signals, alerts, and wins surfaced automatically, each one linked back to the source visit for verification.
- **The reporting burden inverted.** Instead of chasing reports, the system now nudges, recaps, and summarises on its own schedule: daily recaps to each manager, a Monday weekly report, monthly channel dossiers.
- **Richer intel, not just more compliance.** Because capture is cheap, managers log qualitative observations they would previously have kept in their heads — staff feedback, competitor moves, customer patterns — which is exactly the material the AI layer mines.
- Selected as the internal reference architecture for the tools that came after it — [[projects/signal-log-bot|Signal Log Bot]] and [[projects/promotchi|Promotchi]] both reuse its bot + mini-app + intelligence shape.

## Under the hood

A Telegram bot (the capture surface), a Telegram Mini App (browsing, editing, personal stats), and a web dashboard (leadership analytics and reports) — all reading one database. The AI layer runs as scheduled routines with a structured memory: counts come from SQL, qualitative signal lives in tagged observation notes, and multi-week judgments are tracked as explicit hypotheses the system revisits. The engineering patterns are documented in our [[wiki/telegram-bots/index|Telegram bot wiki]].
