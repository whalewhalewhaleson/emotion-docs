---
title: "CultivAIte: A Culture Campaign That Runs Itself"
description: A quarterly reflection campaign rebuilt as a Telegram bot — weekly reflections, automated peer recognition, and a company garden that grows with participation.
publish: true
---

# CultivAIte

**The one-liner:** a company-wide weekly reflection habit, run entirely by a Telegram bot — with peer recognition automated end-to-end and participation gamified into a shared garden.

## Problem

The company runs quarterly culture themes, and one quarter's theme was **reflection** — pausing to think and decide well, especially as the business leaned harder into AI. The first attempt ran on manual coordination, and it struggled exactly where manual campaigns struggle:

- **Friction:** getting the whole company to engage every week required constant chasing.
- **Ops load:** the team running it spent hours collating submissions by hand — especially "Good News," the peer-recognition segment, which meant manually gathering, deduplicating, approving, and announcing shout-outs.
- **No buzz:** without visible momentum, participation felt like compliance, not culture.

## Innovation

**The whole campaign became a bot.** Every week, each staff member runs a three-question reflection flow in Telegram — what value they lived out, how they did in their role, and (optionally) good news about a teammate. Two taps on a persistent keyboard, a couple of minutes, done. Deadlines, reminders, and late-submission handling are all automated, including per-person deadline adjustments for different markets and off-day schedules — the bot knows a public holiday in one market shifts that market's deadline, and no human has to remember.

**Recognition became a pipeline.** "Good News" submissions flow into an approval queue; approved shout-outs are automatically announced, points are credited to both the sharer and the people recognised, and nothing gets lost in a spreadsheet. What used to be the heaviest manual job in the campaign became a review-and-click.

**Participation became visible.** Points, streaks, and a **company garden** — a shared scene where every person is a plant that grows with their participation — plus a Journal mini-app where each person sees their reflections, their shout-outs, and where their points came from. Excused absences (leave, public holidays, serving commitments) preserve streaks and are excluded from team averages, so the scoreboard stays fair rather than punishing circumstance.

## Results

- **100% company participation** — the headline the previous quarter never reached.
- **Peer recognition volume more than tripled** over the campaign: from roughly 50 Good News submissions a week at the start to about 170 a week.
- **The ops burden collapsed** from manual collation to an approval queue — the running team reviews and clicks instead of gathering and formatting.
- Weekly theme sessions drew steadily growing attendance, and the reflections themselves went beyond box-ticking — some staff used the weekly prompt for genuinely deep self-review.

## Under the hood

A Telegram bot with a web dashboard for the campaign team (submissions, excusals, Good News approvals, week-by-week stats) and a mini-app for staff. The gnarliest engineering lived in the details a user never sees: custom week boundaries, per-person deadline offsets, streak-preserving excusal rules, and keeping a points ledger honest when the same event can be credited from multiple paths. Lessons from those trenches are in the [[wiki/telegram-bots/index|Telegram bot wiki]].
