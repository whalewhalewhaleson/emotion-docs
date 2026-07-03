---
title: Conversation Design
description: Input controls, multi-step flows, and bot copy that works in one-second glances.
publish: false
---

# Conversation Design

A business bot's capture flow is a form wearing a chat costume. The design questions are the same — which control, how many steps, what copy — but the answers are Telegram-specific.

## Pick the right input control

Telegram gives you four ways to take input. Each maps to a different job:

| Control | Renders as | Best for | Watch out |
|---|---|---|---|
| **Slash commands** | `/command` with autocomplete | Infrequent admin/setup actions | Typo-prone on mobile; cap the visible list at 3–5 |
| **Inline buttons** | Buttons attached to a message | One-time choices about a specific item | Scroll out of view in active chats |
| **Reply keyboard** | Persistent buttons at the bottom of chat | Frequent, time-sensitive actions (Log, Reflect, Clock In) | Fragile per-user state — see below |
| **Structured template** | A pre-filled block the user edits and resends | Multi-field *optional* metadata | Parse leniently: blank lines skip, unknown keys ignored |

For multi-step *required* fields, use a guided conversation. For multi-select from a list, an inline checkbox picker (tap to toggle, one confirm) beats N yes/no questions.

## Conversation patterns that survived seven bots

- **Auto-save on first input.** Users' mental model for photos and free text is "send everything, then I'm done" — don't make them hunt for a Done button. Save on first input, then branch into the next meaningful choice.
- **Morphing message.** For browse-and-act, edit one message between list view and detail view instead of spamming the chat with one message per item.
- **Stateless pagination.** Encode the page number in the button's callback data and re-fetch on every tap. No session state to go stale, robust across restarts.
- **Pre-fill from profile, offer override.** Read the user's known context (team, role) at flow start and show "Logging to **X**" with a rarely-tapped Change button. Cuts capture from four interactions to two.
- **Typing indicator before slow work.** A free perceived-latency fix before any call that takes over a second.
- **Context-aware `/skip` and `/cancel`.** Two generic verbs that branch on where the user is beat a dozen per-step commands nobody remembers.
- **Cancel-anywhere.** A user who types a new command mid-flow means "abandon this" — detect commands inside the wait loop and exit cleanly, or the flow swallows the command as an answer.
- **Two-cron send.** For scheduled broadcasts, one job previews the queue to an admin 15 minutes early, a second actually sends. An intervention window without building a cancellation UI.

## The persistent keyboard is state you must manage

A persistent reply keyboard only installs when the bot *sends a message carrying it* — so adding one in an update reaches nobody until you inject it into every outgoing private-chat message (an API-transformer hook does this cleanly). Hide it during guided conversations — its buttons send plain text, which your wait loop will happily capture as the user's answer — and re-attach it at every exit path. And expect the client to occasionally drop it after a Mini App opens; re-send to redraw ([[wiki/telegram-bots/platform-limits|Platform Limits]]).

## Copy: written for one-second glances

- **The cue carries the interpretation ask.** "What made it work?" beats "Describe the visit" — the first demands thinking, the second permits a shrug.
- **Bullets are leading questions, not example answers.** "A staff member who closed a sale" prompts recall; a literal example produces shallow copies of itself.
- **Fewer, better prompts.** Every added question taxes the habit you're trying to build. If the AI can infer a field later, don't ask a human at capture time — the lesson behind [[projects/signal-log-bot|Signal Log Bot]]'s one-message capture.

*Related: [[wiki/telegram-bots/choosing-your-surface|Choosing Your Surface]] · [[wiki/telegram-bots/mini-apps|Mini Apps]]*
