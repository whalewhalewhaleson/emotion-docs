---
title: Platform Limits
description: Telegram's cliff edges — file caps, message lengths, markdown traps, and restrictions that only fail at runtime, often silently.
publish: true
---

# Platform Limits

Telegram's limits don't show up in code review — they show up at runtime, often silently. Every row in this table is a production incident we've had or narrowly dodged.

| Limit | What breaks | Workaround |
|---|---|---|
| **20 MB bot download cap** | The bot can't fetch any file bigger than 20 MB — it receives a file reference it literally cannot download. Design files and raw videos blow past this. | Self-hosted Bot API server (raises the ceiling to 2 GB), or punt uploads to a Mini App / web surface that bypasses Telegram entirely. |
| **4096 chars per message** | Long admin summaries silently fail with a 400 — visible only in server logs. | Paginate to ~3500-char pages (leaves room for markdown overhead) and send sequentially. |
| **1024-char caption on media** | Album captions truncate; markdown escape characters count toward the cap. | Send the text as its own message first, then the album uncaptioned. |
| **MarkdownV2 reserved characters** | Static labels containing `(` `)` `_` `*` silently 400. Legacy Markdown mode 400s on URLs containing underscores — every send with that link dies. | Prefer HTML parse mode when URLs appear in the body; escape user input properly; and wrap sends in a `safeReply` that catches the 400 and retries as plain text — ugly, but the message arrives. |
| **`web_app` buttons are DM-only** | Sending a Mini App button to a group errors with `BUTTON_TYPE_INVALID`. | In groups, use a URL deep link (`t.me/<bot>/<app>?startapp=…`) instead — see [[wiki/telegram-bots/mini-apps|Mini Apps]]. |
| **`sendData` only works from reply-keyboard launches** | A Mini App opened from an *inline* button can't signal the bot back when the user finishes — so it can't auto-advance a waiting conversation. | Either make the step blocking (user taps "Next" in chat), or launch the app from a reply-keyboard button — you can't have both "button on the message" and auto-advance. And because `sendData` closes the app and can fail to arrive, back any must-happen follow-up with a server-side sweep. |
| **Persistent keyboards drop after Mini App use** | The client occasionally fails to redraw a persistent reply keyboard after a webview opens and closes. | Re-send the keyboard on the confirmation message that follows. |
| **~30 messages/second rate limit** | Bulk sends throttle. | Fine for per-item admin previews up to ~50 items; batch or queue beyond that. |

## The webview is not Chrome

Mini Apps run in Telegram's own webview, and CSS that renders perfectly in a desktop browser can render wrong there — we've had `aspect-ratio` + `background-size: cover` produce zoomed, cropped tiles that were pixel-perfect in Chrome, and an inherited `image-rendering: pixelated` (set for crisp pixel-art sprites) mush every smooth illustration below it in the cascade.

The lessons: prefer robust primitives (a real `<img>` with an intrinsic ratio over CSS background tricks), pin special rendering modes on the exact elements that need them, and when the browser looks right but the app doesn't, *switch primitives* rather than tuning the fragile CSS. Also: Telegram caches Mini App assets aggressively — "my change isn't showing" is a cache symptom before it's a code bug.

## The numbers to memorise

- **20 MB** — bot file-download cap (2 GB if you self-host the Bot API server)
- **4096** — characters per message; **~3500** is the safe pagination target
- **1024** — characters per media caption
- **64 bytes** — callback-data payload cap (bites when you encode context into buttons)
- **3–5** — visible bot commands before people stop remembering them

*Related: [[wiki/telegram-bots/running-in-production|Running in Production]] · [[wiki/telegram-bots/conversation-design|Conversation Design]]*
