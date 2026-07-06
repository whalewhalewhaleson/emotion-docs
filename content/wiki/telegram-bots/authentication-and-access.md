---
title: Authentication & Access
description: "Telegram as your identity layer: Login Widget, Mini App initData, allowlists, and revocation."
publish: true
---

# Authentication & Access

For internal tools whose users already use your bot, Telegram can be the identity layer. No password reset flow. No separate account system.

## Two doors

| Door                    | Use when                 | User sees                             |
| ----------------------- | ------------------------ | ------------------------------------- |
| **Login Widget**        | Normal browser dashboard | "Log in with Telegram" once           |
| **Mini App `initData`** | Webview inside Telegram  | Nothing; identity arrives with launch |

## Implementation notes

<div class="principle-list">
  <div><strong>Login Widget</strong><span>Verify the signed payload with SHA256(bot token), reject stale payloads, check the allowlist, issue a session cookie.</span></div>
  <div><strong>Mini App initData</strong><span>Verify every API request. The HMAC recipe is different: HMAC("WebAppData", bot token). Read once on mount; send as a header.</span></div>
  <div><strong>Compare safely</strong><span>Use timing-safe equality for hashes. Tiny detail, real security boundary.</span></div>
  <div><strong>Re-query access</strong><span>Revocation must hit the source-of-truth table on every authenticated request. A cookie does not know someone was removed.</span></div>
</div>

## Onboarding constraint

You cannot DM a username. `sendMessage` needs a numeric chat id, and you only get it after the user starts the bot.

Two flows solve it:

- **Handle linking:** on `/start`, match the username to a pre-approved row and attach the numeric id.
- **One-tap approve:** capture the id from an unauthorized `/start`, DM an admin approval button, then insert and notify.

## Where this stops

Telegram auth fits internal tools where the team already lives in Telegram. Public products, company SSO, or compliance-grade identity need a real identity provider.

Related: [[wiki/telegram-bots/mini-apps|Mini Apps]]
