---
title: "Store Visit App: Field Reports That Nobody Has to Chase"
description: A Telegram-native store visit tool that freed channel managers from admin, with an AI layer that reads every visit overnight.
publish: true
---

# Store Visit App

<div class="hero-panel">
  <p class="kicker">Field reports without desk work.</p>
  <p class="hero-copy">Channel managers log structured store visits from Telegram in minutes. An AI layer reads every report overnight and briefs leadership each morning.</p>
</div>

<div class="metric-strip">
  <div><strong>4</strong><span>markets adopted</span></div>
  <div><strong>Daily</strong><span>AI leadership brief</span></div>
  <div><strong>1</strong><span>reference architecture reused by later tools</span></div>
</div>

## Before

- Slow enterprise UI buried visit logging behind too many clicks.
- Reports arrived thin, late, or not at all.
- Ground truth stayed fragmented across hundreds of visits.

## The build

<div class="split-grid">
  <div>
    <h3>Telegram capture</h3>
    <p>A guided six-section visit flow with photos: display, engagement, training, competitor activity, follow-ups. No new app, no forgotten login, no desk time.</p>
  </div>
  <div>
    <h3>AI reading layer</h3>
    <p>Daily briefs, weekly patterns, monthly channel dossiers. Counts come from structured data; qualitative signals are tracked as observations the system revisits.</p>
  </div>
</div>

## After

- Leadership reads a daily brief instead of chasing updates.
- Managers log richer qualitative intel because capture is cheap.
- Nudges, recaps, and summaries now run on schedule.
- [[projects/signal-log-bot|Signal Log Bot]] and [[projects/promotchi|Promotchi]] reuse the same bot + mini-app + intelligence shape.

## Under the hood

Telegram bot for capture, Mini App for browsing and editing, web dashboard for analytics, one database underneath. The AI layer combines SQL counts with tagged observations and multi-week hypotheses. Related patterns live in the [[wiki/telegram-bots/index|Telegram bot wiki]].
