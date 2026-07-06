---
title: Running in Production
description: Deploy gotchas, common bot pitfalls, and AI architecture around Telegram's one-consumer rule.
publish: true
---

# Running in Production

The gap between "the bot works" and "the bot runs daily operations" is mostly deployment, state, and boring safeguards.

## Deploy gotchas

- **Rolling deploys collide with polling.** Telegram allows one consumer per bot token. Stop the old bot cleanly before the new one listens.
- **Failed builds strand old deploys.** Push-to-deploy can leave the last green version running. Verify the deployed version, not the pushed commit.
- **Login Widget domains must match.** The registered domain must match hosting exactly; localhost cannot use the widget.

## Pitfalls

| Pitfall                           | Symptom                              | Fix                            |
| --------------------------------- | ------------------------------------ | ------------------------------ |
| Free-text handler before commands | Commands never fire                  | Register commands first        |
| Auth blocks bootstrap             | Admin cannot add users               | Whitelist bootstrap command    |
| Broadcast before final submit     | Draft changes after message goes out | Broadcast only on final submit |
| `Set` in session state            | Selections vanish after restart      | Store arrays                   |
| Hardcoded layout arrays           | Items disappear silently             | Loop from data length          |
| Album updates race                | State corrupts                       | Serialize updates per chat     |
| Stale callbacks throw             | Old button kills the turn            | Catch acknowledgement errors   |

## AI architecture rule

Telegram allows **one consumer per bot token**. Scheduled AI jobs must not listen to Telegram. The live bot persists raw replies; scheduled jobs read the database later and fold those replies into the next output.

Also: message ids are unique per chat, not globally. Bind replies with `chat_id + message_id`.

## Broadcast etiquette

Every automated send to real people gets three things: operator preview, post-send summary, and a kill switch that stops the schedule without a deploy.

Related: [[wiki/telegram-bots/conversation-design|Conversation Design]]
