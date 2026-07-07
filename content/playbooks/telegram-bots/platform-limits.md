---
title: Platform Limits
description: "Telegram's cliff edges: file caps, message lengths, markdown traps, and restrictions that fail at runtime."
publish: true
---

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

| Number       | Meaning                  |
| ------------ | ------------------------ |
| **20 MB**    | Bot file download cap    |
| **4096**     | Message characters       |
| **1024**     | Media caption characters |
| **64 bytes** | Callback payload         |
| **3-5**      | Visible commands         |

## Webview cliffs

Mini Apps run in Telegram's webview. We have seen desktop-perfect CSS fail there: background cropping, inherited image rendering, stale cached assets. If the browser looks right but Telegram does not, switch primitives before endlessly tuning fragile CSS.

Related: [[playbooks/telegram-bots/running-in-production|Running in Production]]
