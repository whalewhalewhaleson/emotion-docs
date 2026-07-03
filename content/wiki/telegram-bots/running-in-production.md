---
title: Running in Production
description: Deploy gotchas, the pitfalls that bite every new bot, and how to architect scheduled AI consumers around Telegram's one-consumer rule.
publish: false
---

# Running in Production

The gap between "the bot works" and "the bot runs a team's daily operations" is a specific list of things. This is ours.

## Deploy gotchas

- **Rolling deploys collide with polling.** During a deploy, the old and new containers briefly overlap — and Telegram allows exactly one consumer per bot token, so the overlap throws conflict errors. Handle shutdown signals and stop the bot gracefully so the old container releases before the new one starts.
- **A failed build strands the old deploy.** On push-to-deploy hosting, a red build doesn't roll anything back — it silently leaves the service running the last green commit. Your fix can be "shipped" and not live for days. Verify the *deployed* version, not the pushed one.
- **Login Widget domains must match exactly.** The domain registered with the bot platform must match your hosting URL character-for-character, and localhost can't use the widget at all (it requires real HTTPS) — build a dev-only login path for local work.

## Pitfalls that bite every new bot

| Pitfall | Symptom | Fix |
|---|---|---|
| Free-text handler registered before command handlers | Commands silently never fire | Register commands first, or early-return command-shaped text |
| Auth middleware blocks its own bootstrap | The command that *adds* users is blocked by the gate it enables | Whitelist bootstrap commands before the gate |
| Group broadcast fired before final submit | The user edits their draft, but the irreversible group message already went out | Collect every tweak in-conversation; create the record and broadcast only on final submit |
| A `Set` in session state | Selections vanish after every restart | Sessions serialize to JSON — a `Set` becomes `{}`. Store arrays |
| Hardcoded layout arrays | The garden renders 50 of 90 plants, no error | Loop bounds come from data length, never from a literal array |
| Silent fallback on a redundant second fetch | A broadcast sends header-only when an internal re-fetch quietly fails | Build the message from the row you already fetched; one query gates the whole send |
| Media albums race your flow | A photo album arrives as N near-simultaneous updates that race each other's state | Serialize updates per chat *before* any session/conversation middleware |
| Stale button taps kill the turn | Answering a callback from an old message throws; unguarded, the throw eats the user's tap | Guard every callback acknowledgement with a catch |

## The one-consumer rule shapes your AI architecture

Telegram allows **one consumer per bot token**. That's a deploy concern (above), but it's also an architecture constraint for AI features: a scheduled analysis job — the overnight routine that reads the day's data and writes the brief — *cannot* also listen to Telegram for replies, because the live bot already owns the update stream.

The pattern that works: **the live bot is a dumb pipe; the scheduled job reads from the database.** When a human replies to the AI's question in chat, the bot's only job is to persist the raw reply; the next scheduled run picks it up, interprets it, and folds it into future output. Every "let the AI react to a chat reply" feature routes through the database, never through a second Telegram connection.

One corollary worth engraving: Telegram message ids are unique *per chat*, not globally. Binding a reply to its question by message id alone will eventually clobber the wrong row — bind by chat id + message id together.

## Broadcast etiquette

Outbound automation to real humans earns three safeguards, every time: a **preview** to an operator before the send, a **post-send summary** of what actually went out, and a **kill switch** that stops the schedule without a deploy. The two-cron pattern in [[wiki/telegram-bots/conversation-design|Conversation Design]] is the cheapest preview implementation. And loop broadcast sends inside a try/catch — one user who blocked the bot shouldn't break the other forty-nine.

*Related: [[wiki/telegram-bots/platform-limits|Platform Limits]] · [[wiki/telegram-bots/authentication-and-access|Authentication & Access]]*
