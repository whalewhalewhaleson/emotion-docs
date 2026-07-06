---
title: "Signal Log Bot: Making Firefighting Visible"
description: One free-text Telegram message to log workflow friction; weekly AI clustering turns incidents into named problems.
publish: true
---

# Signal Log Bot

<div class="hero-panel">
  <p class="kicker">One message per firefight.</p>
  <p class="hero-copy">A person logs the disruption in plain text. The weekly AI pass turns the pile into named, recurring problems leadership can act on.</p>
</div>

## Before

The first signal-capture workflow was a multi-field form. It asked people to classify a five-minute annoyance before they could report it, so the habit died. No logs, no pattern, no case for fixing the work.

## The build

<div class="flow-row">
  <span>Tap</span>
  <span>Describe</span>
  <span>Review</span>
  <span>Submit</span>
  <span>AI clusters weekly</span>
</div>

No dropdowns at capture. No impact matrix. The bot wins the logging habit first; enrichment happens later.

## What the AI adds

<div class="split-grid">
  <div>
    <h3>Shape</h3>
    <p>A consistent taxonomy of disruption types, applied after the fact so users never argue with categories.</p>
  </div>
  <div>
    <h3>Substance</h3>
    <p>Specific recurring failures, with evidence linked back to the underlying signals and comment threads.</p>
  </div>
</div>

## After

- Company-wide rollout, with department digests landing before function meetings.
- Leadership reviews one weekly intelligence report instead of a dead spreadsheet.
- Cross-department spillover becomes visible when one team's issue burdens another.
- The taxonomy stays mutually exclusive because the AI is tuned to refuse vague catch-alls.

## Under the hood

Telegram bot for capture, Mini App and dashboard for reading, one database as source of truth, scheduled AI routine for the weekly report. Capture stays dumb and fast; interpretation is centralised. Related lessons: [[wiki/telegram-bots/index|Telegram Bot Engineering]].
