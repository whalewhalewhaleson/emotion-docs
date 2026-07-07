---
title: "Signal Log Bot: Making Firefighting Visible"
description: A lightweight Telegram logging system where weekly AI clustering turns workflow friction into named operational problems.
publish: true
---

A person logs a workflow disruption in plain text. A weekly AI pass turns the pile into named, recurring problems leadership can act on.

## Before

The first signal-capture workflow was a multi-field form. It asked people to classify a five-minute annoyance before they could report it, so the habit died. No logs, no pattern, no case for fixing the work.

## The build

The capture path became deliberately small:

1. Tap.
2. Describe.
3. Review.
4. Submit.

No dropdowns at capture. No impact matrix. The bot wins the logging habit first; enrichment happens later.

## What the AI adds

| Layer     | Purpose                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------- |
| Shape     | A consistent taxonomy of disruption types, applied after the fact so users never argue with categories. |
| Substance | Specific recurring failures, with evidence linked back to the underlying signals and comment threads.   |

## What this project teaches

| Lesson                    | Why it matters                                                               |
| ------------------------- | ---------------------------------------------------------------------------- |
| Win the habit first       | If capture is too heavy, the intelligence layer never gets enough signal.    |
| Classify after capture    | AI can structure the mess without slowing the person reporting it.           |
| Reports need named issues | Leadership can act on recurring problems, not a pile of isolated complaints. |

## After

- Company-wide rollout, with department digests landing before function meetings.
- Leadership reviews one weekly intelligence report instead of a dead spreadsheet.
- Cross-department spillover becomes visible when one team's issue burdens another.
- The taxonomy stays mutually exclusive because the AI is tuned to refuse vague catch-alls.

## Under the hood

Telegram bot for capture, Mini App and dashboard for reading, one database as source of truth, scheduled AI routine for the weekly report. Capture stays dumb and fast; interpretation is centralised. Related lessons: [[playbooks/telegram-bots|Telegram Bot Playbook]].

## Read next

- [[topics/ai-automation|AI & Automation]]
- [[playbooks/telegram-bots|Telegram Bot Playbook]]
- [[playbooks/claude-code|Claude Code Playbook]]
- [[projects/index|Projects]]
