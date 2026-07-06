---
title: "Promotchi: Kind Accountability for a Field Team"
description: A gamified Telegram bot for retail promoters: submit on time, earn treats, feed a pet, and turn store updates into usable intelligence.
publish: true
---

# Promotchi

<div class="hero-panel">
  <p class="kicker">Accountability without surveillance.</p>
  <p class="hero-copy">Retail promoters submit availabilities and post-shift updates through a Telegram bot. On-time, complete submissions earn treats that feed an evolving virtual pet.</p>
</div>

## Before

Two duties had to be chased every week: availability for rostering, and store updates after shifts. Coordinators became nags; promoters felt watched; the field intel still went mostly unread.

## The build

<div class="split-grid">
  <div>
    <h3>Make the duty rewarding</h3>
    <p>Complete submissions earn treats. Treats feed a custom pet. A shared yard turns participation into something visible.</p>
  </div>
  <div>
    <h3>Engineer fairness</h3>
    <p>Scoring uses fulfilment rate against each person's actual roster, join date, and excused weeks. Team leaderboards avoid individual shaming.</p>
  </div>
  <div>
    <h3>Reduce friction</h3>
    <p>Shift pings arrive with a one-tap button into the update form. The reminder is also the doorway.</p>
  </div>
  <div>
    <h3>Read the field</h3>
    <p>Updates become a daily department report: coverage, wins, signals, and alerts.</p>
  </div>
</div>

## After

- Launched across three markets with availability, shift pings, store updates, treats, pets, and reporting live.
- Chasing became a product loop: reminder, incentive, submission, report.
- Store updates became daily intelligence instead of a compliance archive.
- Feedback from launch was logged, triaged, and shipped quickly, including signals caught through [[projects/signal-log-bot|Signal Log Bot]].

## Under the hood

Telegram bot, Mini App for pet and journal, dashboard for the department, one database with role separation, points ledger integrity rules, scheduled shift pings, and scheduled reports. Related patterns: [[wiki/telegram-bots/index|Telegram Bot Engineering]].
