---
title: Platform Limits
description: "Telegram's cliff edges: file caps, message lengths, markdown traps, and restrictions that fail at runtime."
publish: true
---

# Platform Limits

These limits do not show up in code review. They show up at runtime.

| Limit                         | Breaks                                     | Use instead                                       |
| ----------------------------- | ------------------------------------------ | ------------------------------------------------- |
| **20 MB bot download cap**    | Bot cannot fetch large files               | Self-host Bot API, or upload through web/Mini App |
| **4096 chars/message**        | Long sends 400                             | Paginate around 3500 chars                        |
| **1024-char media caption**   | Album captions truncate or fail            | Send text separately, album uncaptioned           |
| **MarkdownV2 traps**          | Reserved characters 400 silently           | Prefer HTML parse mode; retry plain text          |
| **Group `web_app` buttons**   | `BUTTON_TYPE_INVALID`                      | URL deep link                                     |
| **`sendData` launch rules**   | Inline-button Mini App cannot wake the bot | Use reply-keyboard launch or server-side sweep    |
| **Persistent keyboard drops** | Buttons disappear after webview            | Re-send keyboard on confirmation                  |
| **~30 msg/sec**               | Bulk send throttles                        | Queue or batch                                    |

## Numbers to memorise

<div class="metric-strip">
  <div><strong>20 MB</strong><span>bot file download cap</span></div>
  <div><strong>4096</strong><span>message characters</span></div>
  <div><strong>1024</strong><span>media caption characters</span></div>
  <div><strong>64 bytes</strong><span>callback payload</span></div>
  <div><strong>3-5</strong><span>visible commands</span></div>
</div>

## Webview cliffs

Mini Apps run in Telegram's webview. We have seen desktop-perfect CSS fail there: background cropping, inherited image rendering, stale cached assets. If the browser looks right but Telegram does not, switch primitives before endlessly tuning fragile CSS.

Related: [[wiki/telegram-bots/running-in-production|Running in Production]]
