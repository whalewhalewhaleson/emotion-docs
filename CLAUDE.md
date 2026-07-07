# emotion-docs — Public Documentation Site

## Context + Goal

World-facing digital garden publishing the AI tools built for TC Acoustic
and the lessons learned building them. Purpose: build authority +
authenticity for eMotion (TC's custom-AI-solutions sister company) so
customers discover and trust us. This repo is PUBLIC — every merged page
ships to the open internet.

Content is a curated, redacted projection of the private knowledge vault
(claude-os-knowledge/) — never a second source of truth. To add or refresh
site content, run /document (the pipeline skill); don't hand-write pages
from scratch.

## Architecture

- Quartz static site → Vercel (build: `npx quartz build`, output: public/).
  Pinned to the v4 line (branched from v4.5.2) — v5 shipped 2026-07 with a
  remote community-plugin system and no ExplicitPublish; revisit when mature.
- ExplicitPublish filter: only `publish: true` frontmatter pages build.
- Theme (2026-07-07 redesign, PR #9): site is "eMotion Docs" — bottom control
  bar (BottomBar.tsx: search/graph/reader/darkmode, popups open upward; no
  transform/backdrop-filter on it — that clips the fixed overlays), CopyPage.tsx
  beside titles, RawMarkdown emitter serves each page's source at <slug>.md,
  SiteFooter.tsx (no Quartz attribution). Content pages carry NO h1 — the
  ArticleTitle component renders the title from frontmatter.
- Unlisted mode: vercel.json X-Robots-Tag noindex — removing it = going
  public = sensitive-tier PR + Wilson's explicit call.
- content/: index.md · about.md · projects/ (showcases) · wiki/ (clusters).
- Load /document before touching any content in content/ — it owns the
  rewrite, redaction, and provenance rules.

## Instructions

- PR-first, NO auto-push, Codex gate on every PR (AGENTS.md rubric).
  ALL content PRs are sensitive tier (bar 95) — they publish publicly.
- Nothing merges until Wilson has eyeballed the Vercel preview. No
  exceptions, including "trivial" copy fixes.
- Redaction is absolute: no competitor/retailer/store/vendor real names
  (use "Competitor #1", "Store #1", "an enterprise system"), no colleague
  names, no telegram/chat IDs, no keys/tokens/Supabase refs, no sales or
  payroll figures. The concrete banned-terms list lives PRIVATELY with the
  /document skill — never commit it, or any lint output quoting it, here.
- Visuals are used only where they carry meaning. Prefer smooth prose,
  bullets, simple tables, and standard callouts. Avoid custom visual blocks
  unless a mock-up or diagram is genuinely necessary.
- Framework updates: pull from `upstream` (jackyzha0/quartz, v4 branch) on
  a branch, through the same PR gate.
