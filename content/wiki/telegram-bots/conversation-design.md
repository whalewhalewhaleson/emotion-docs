---
title: Conversation Design
description: Input controls, multi-step flows, and bot copy that works in one-second glances.
publish: true
---

# Conversation Design

A business bot is usually a form wearing a chat costume. The controls matter.

| Control            | Best for                                     | Avoid when                             |
| ------------------ | -------------------------------------------- | -------------------------------------- |
| **Slash command**  | Infrequent setup/admin                       | The action is frequent or mobile-heavy |
| **Inline button**  | One decision about one item                  | The chat will scroll fast              |
| **Reply keyboard** | Frequent actions like Log, Reflect, Clock In | You are inside a guided free-text flow |
| **Template**       | Optional structured metadata                 | The fields are required                |

## Patterns that survived

<div class="principle-list">
  <div><strong>Auto-save early.</strong><span>Users send photos and text as if sending means done. Save first, ask the next meaningful question after.</span></div>
  <div><strong>Morph one message.</strong><span>For browse-and-act, edit a single card instead of filling the chat.</span></div>
  <div><strong>Keep pagination stateless.</strong><span>Encode the page in callback data; re-fetch on every tap.</span></div>
  <div><strong>Pre-fill context.</strong><span>Show "Logging to X" with a small Change button. Most users should not choose what you already know.</span></div>
  <div><strong>Cancel anywhere.</strong><span>A new command mid-flow means abandon. Detect it before the wait loop swallows it.</span></div>
  <div><strong>Preview broadcasts.</strong><span>One cron previews to an operator; another sends. Cheap intervention window.</span></div>
</div>

## Keyboard warning

A persistent reply keyboard is state. Re-attach it on every private-chat exit path, hide it during guided conversations, and expect Telegram clients to drop it after Mini App use.

## Copy rule

Ask for interpretation, not description. "What made it work?" gets better signal than "Describe the visit." If AI can infer a field later, do not ask a human at capture time.

Related: [[wiki/telegram-bots/platform-limits|Platform Limits]]
