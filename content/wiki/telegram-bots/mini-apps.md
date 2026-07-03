---
title: Mini Apps
description: Deep links, cross-surface sync, authenticated media, and the sharp edges of Telegram's in-app webview.
publish: false
---

# Mini Apps

A Telegram Mini App is a web app that opens *inside* Telegram with the user's identity already attached ([[wiki/telegram-bots/authentication-and-access|how the auth works]]). It's the natural home for anything that outgrows chat — browsing, editing, layouts — without losing the "no new app, no login" advantage.

## Deep links: the doorway from anywhere

You can link straight into a specific page of a Mini App from a group message, a DM, or anywhere a URL works:

```
https://t.me/<bot_username>/<app_name>?startapp=<param>
```

Encode the entity in the param (`visit_a1b2`), read it on mount, and route. This is how a one-line group notification ("✅ new report filed") becomes a button that opens the full report in-app. Two rules learned the hard way:

- **In groups, deep-link URL buttons are the only option** — native `web_app` buttons are DM-only and error in groups ([[wiki/telegram-bots/platform-limits|Platform Limits]]).
- **The link's host must be right.** If the bot username in the link is wrong — say, a config default that doesn't match the real bot — every button dies with "username not found," and nothing fails at build time. Confirm the username from the live bot API, not from what the code assumes. Prefer the main-app link form (`t.me/<bot>?startapp=…`) when you can: it needs no separately-registered app name, one less thing to rot.

## Cross-surface sync: when the app and the chat share a draft

A bot and its Mini App often act on the same object — the bot posts a confirm card in chat, but the user finishes inside the app. The moment the app submits, that chat card is stale, and the bot's waiting conversation can't be woken from outside. What works:

1. **Keep the conversation's scope minimal** — only the data you need before a draft can exist. Everything after (submit, cancel) becomes stateless button handlers that either surface can trigger.
2. **Register the card, reconcile on submit.** When the bot posts the card, remember its message id; when the app's endpoint flips the draft to submitted, edit the card to "✅ Logged via app." An in-memory registry is fine — it's ephemeral chat UI, and a restart just no-ops the edit.

## Authenticated images need a blob fetch

A Mini App authenticates every API call with a header — but an `<img src>` is a plain browser GET and *can't carry a header*. So private images (photos in a service-gated storage bucket) can't be embedded directly. Fetch the image yourself with the auth header, turn the response into an object URL, and set that as the image source. Don't fall back to putting the auth token in the query string — it leaks into logs and referrers. And revoke object URLs when the view closes; they leak memory otherwise.

## Respect the webview

The Mini App runs in Telegram's own webview, not Chrome — fragile CSS renders differently, assets are cached hard, and "works in my browser" is not verification. The full list of rendering cliffs is in [[wiki/telegram-bots/platform-limits|Platform Limits]].

*Related: [[wiki/telegram-bots/choosing-your-surface|Choosing Your Surface]] · [[wiki/telegram-bots/conversation-design|Conversation Design]]*
