---
title: "Signal Log Bot: Making Firefighting Visible"
description: One free-text Telegram message to log a workflow disruption; weekly AI intelligence clusters the patterns so recurring problems stop hiding.
publish: true
---

# Signal Log Bot

**The one-liner:** every unplanned firefight gets logged in one free-text message, and a weekly AI pass turns the pile into named, recurring problems leadership can actually fix.

## Problem

Every company runs on a layer of invisible firefighting — the order that needed manual rework, the handoff that stalled, the tool that broke at the worst moment. Individually, each incident is small enough that nobody escalates it. Collectively, they are where whole days go.

The first attempt to capture these "signals" was a multi-field spreadsheet form. It failed the way structured forms usually fail: filling seven fields to report a five-minute annoyance costs more than the annoyance, so people stopped logging. No logs, no data; no data, no case for fixing anything. The blind spot stayed blind.

## Innovation

**Capture collapsed to one message.** The rebuilt flow is: tap one button, describe everything in a single free-text message (screenshots optional), review, submit. That's it. No category dropdowns, no impact matrices — the AI infers that enrichment later. The design bet: win the logging habit first, enrich later. A signal you actually capture beats a perfectly categorised one you never got.

**AI does the analysis humans skipped.** Every Monday morning, an intelligence routine reads the week's signals — including the comment threads where colleagues add root-cause context — and produces a report with two distinct layers:

- **The shape of friction:** a clean breakdown of what *kind* of disruptions the week held, against a canonical taxonomy the AI applies consistently (humans never had to agree on categories).
- **The substance:** "The Biggest Problems" — specific, named, recurring failures clustered across signals, with the evidence linked. Not "23% process issues" but "*this* keeps breaking, in these three departments, four weeks running."

Each department gets its own digest in its own group chat; a dashboard gives leadership the full stream, filterable by team, with every insight traceable to the underlying signals.

**Quietly social by design.** When someone logs a signal, a silent message drops into their department's chat — no noise, but the team sees that logging is happening. The Monday digest lands right before function meetings, so the review has a natural home in a rhythm that already existed.

## Results

- **Rolled out company-wide**, presented to every function head, with departments onboarding their teams and a full switch away from the spreadsheet workflow targeted within weeks of launch.
- **Leadership reviews one weekly intelligence report** instead of nobody reviewing a spreadsheet. Recurring problems now arrive named, evidenced, and routed to the departments they touch.
- **The taxonomy stays honest.** Because the AI categorises, the classification stays mutually exclusive and consistent — including refusing catch-all labels that would flatten the signal (a lesson that took real tuning).
- **Cross-department spillover became visible.** The AI infers which other teams each problem affects, so an issue one department logs shows up in the digest of the department it silently burdens.

## Under the hood

A Telegram bot for capture, a Telegram Mini App and web dashboard for reading, one database as the source of truth, and a scheduled AI routine that writes the weekly report. Capture is deliberately dumb and fast; interpretation is deliberately centralised in the weekly pass. Patterns and pitfalls from building it live in the [[wiki/telegram-bots/index|Telegram bot wiki]].
