---
title: Authentication & Access
description: Telegram as your identity layer — Login Widget for browsers, initData for Mini Apps — and the access-control flows around it.
publish: true
---

# Authentication & Access

For internal tools whose users are already in your Telegram bot, you can skip the entire login-form/forgot-password apparatus: **Telegram is the identity layer.** Same bot token as the shared secret, two doorways depending on where the user opens the tool.

## Two flavours of Telegram auth

| Flavour | When | What the user sees |
|---|---|---|
| **Login Widget** | Opening a dashboard in a normal browser | A "Log in with Telegram" popup, once |
| **Mini App `initData`** | Opening a webview from inside Telegram | Nothing — identity is injected automatically |

**Login Widget:** Telegram POSTs back a signed payload (`id`, `name`, `hash`, `auth_date`). Verify with `secret_key = SHA256(bot_token)` and check the HMAC. Reject payloads older than ~1 hour or you're open to replay. Then check the user against your allowlist and issue a session cookie.

**Mini App `initData`:** Telegram launches the webview with a signed payload identifying the user. The client sends it as a header on every API call; the server verifies per request. Three gotchas that bite everyone:

- The HMAC recipe is **different** from the Login Widget: `secret_key = HMAC("WebAppData", bot_token)` — not `SHA256(bot_token)`. Easy to copy-paste the wrong one and stare at invalid hashes.
- `initData` is only injected on **initial launch** — client-side navigations don't carry it. Read it once on mount and attach it as a header on every API call.
- Compare hashes with a **timing-safe equality**, not `!==`.

For Mini Apps, stateless per-request validation beats a cookie exchange: Telegram re-injects fresh initData on every launch, so you get one validator function and no cookie machinery. (Cookie exchange earns its place only when you're bolting a Mini App onto an existing cookie-authenticated API and don't want to touch every route.)

## The constraint that shapes onboarding: you can't DM a username

`sendMessage` needs a numeric chat id, which you only learn when the user messages the bot first. So any flow that adds a user by handle *before* they've started the bot can't notify them — and a `/start` handler that looks up users by id will dump a pre-added user into the "not on the list" path forever. Two flows fix this:

- **Handle → id linking on `/start`:** when an unknown user starts the bot, check their username against handle-only rows and auto-link the id.
- **One-tap approve:** when an unauthorized user starts the bot, you have their id *at that moment* — capture it, DM the admin an approval button carrying it, and on tap insert the user fully linked and notify them. One tap replaces a two-step add-then-wait dance.

## Revoke must re-query, not trust the session

A signed session cookie doesn't know you removed someone. If a table is your source of truth for access, **re-check it on every authenticated request** — otherwise a revoked user (or a leaked cookie) keeps working until expiry. At internal-tool scale the extra query is noise.

## Where this pattern stops

Telegram auth is for internal tools where the team is already on Telegram. Public-facing products, company-SSO requirements, or compliance-grade identity all want a real identity provider.

*Related: [[wiki/telegram-bots/choosing-your-surface|Choosing Your Surface]] · [[wiki/telegram-bots/mini-apps|Mini Apps]]*
