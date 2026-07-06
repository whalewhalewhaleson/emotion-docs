---
title: Mini Apps
description: Deep links, cross-surface sync, authenticated media, and Telegram webview sharp edges.
publish: true
---

# Mini Apps

A Mini App is a web app inside Telegram with identity attached. Use it when chat becomes too small for the job.

## Deep links

```text
https://t.me/<bot_username>/<app_name>?startapp=<param>
```

Use the param to open a specific object: report, visit, approval, journal entry.

Watch the two traps:

- In groups, native `web_app` buttons fail. Use URL deep links.
- The bot username must match the live bot, not a stale config default.

## Cross-surface sync

The bot and Mini App often touch the same draft. Keep the bot conversation small, then let stateless button handlers and API endpoints finish the work.

Pattern:

<div class="flow-row">
  <span>Create draft</span>
  <span>Post chat card</span>
  <span>Finish in app</span>
  <span>Edit card to done</span>
</div>

## Authenticated images

An `<img src>` cannot send your auth header. For private media, fetch the blob with the auth header, create an object URL, and revoke it when the view closes. Do not put auth tokens in query strings.

## Webview rule

Telegram's webview is not Chrome. Fragile CSS, hard asset caching, and rendering quirks are normal. Verify inside Telegram, and prefer robust primitives over clever styling.

Related: [[wiki/telegram-bots/platform-limits|Platform Limits]]
