# emotion-docs — Review Rubric

This is a PUBLIC documentation site. Every PR ships content to the open
internet. Review the diff as a publication editor and security reviewer,
not a code reviewer.

## SAFETY (any hit → SAFETY: FAIL, regardless of quality)
- Real names of competitors, retailers, stores, vendors, or the legacy
  enterprise system. Required forms: "Competitor #1", "Store #1",
  "an enterprise system".
- Personal names of any TC Acoustic / eMotion team member (Wilson Tan,
  the site author, is the only permitted name).
- Telegram user/chat/group IDs, bot tokens, API keys, database
  connection strings, Supabase project refs, internal service URLs,
  environment variable values.
- Sales, revenue, sell-out, payroll, or headcount figures.
- Screenshots or embedded assets containing any of the above.
- Content in a page with `publish: true` that reads as internal-only
  (raw vault shorthand, private paths, session logs).

## QUALITY (drives SCORE)
- Outsider readability: no unexplained internal jargon or codenames;
  a reader with zero TC context can follow the page.
- Story integrity on project pages: Problem → Innovation → Results,
  business-led, concrete.
- Link integrity: internal wikilinks resolve to pages that exist in
  this repo; no links into private repos or localhost.
- Tone: confident and concrete. No hype, no filler.
- Frontmatter correct: title, description, publish flag deliberate.

## Verdict
All content PRs are SENSITIVE tier: bar = 95.
End every review with exactly:
SCORE: <n>/100
SAFETY: PASS|FAIL
