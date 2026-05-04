# Project Context for Claude

This file is the "constitution" of this project. Read it at the start of every session. It tells you who this business is, how this workspace is organized, and how to work inside it.

When you learn new information about this business (from scraping the website, doing research, or being told by the user), update the relevant section below by replacing the placeholder text. Keep this file current — it is the source of truth.

---

## About this business

- **Company name:** [TO BE FILLED — ask the user or scrape from their website]
- **Website:** [TO BE FILLED]
- **What they do (one sentence):** [TO BE FILLED]
- **Who they serve:** [TO BE FILLED — target customer / ICP]
- **Products or services:** [TO BE FILLED]
- **Stage:** [TO BE FILLED — e.g. pre-launch, early revenue, scaling]
- **What's working right now:** [TO BE FILLED]
- **Biggest bottleneck:** [TO BE FILLED]
- **Tools they use:** [TO BE FILLED — e.g. Shopify, Mailchimp, HubSpot, Google Sheets]
- **Primary goal of this workspace:** [TO BE FILLED — e.g. build a landing page, create marketing content, set up a dashboard]

---

## Folder structure

This project uses the following folders. If a folder does not yet exist when you need it, create it.

```
/company-info         → everything about this business: positioning, products, team, history
/brand-assets         → logos, colors, fonts, imagery references
/style-guide          → the written brand & content style guide (how we sound, how we look)
/competitor-research  → research on competitors, market landscape, differentiation notes
/output               → finished deliverables (landing pages, copy drafts, dashboards, etc.)
```

**Rules for using folders:**

- Always save research, analysis, and reference material to the appropriate folder — never just answer in chat and let the work disappear.
- Use clear, descriptive filenames (`competitor-analysis-acme-corp.md`, not `notes.md`).
- Prefer Markdown (`.md`) for text documents unless the user asks for another format.
- When you finish a deliverable, put it in `/output` and tell the user where to find it.

---

## How to work in this project

- **Read before you write.** Before producing any deliverable, check the relevant folders. If you're writing copy, read `/style-guide` and `/company-info` first. If you're doing competitive positioning, read `/competitor-research`. Don't reinvent context that already exists.
- **Write things down.** When the user shares a fact about the business, a preference, a customer quote, or anything reusable — capture it in the right folder. Future sessions will thank you.
- **Ask before assuming.** If a placeholder in this file is still empty and you need that information to do the task well, ask the user — don't guess.
- **Show your sources.** When you do research (web scraping, competitor lookups), note where the information came from at the bottom of the document you create.
- **One topic, one file.** Don't pile unrelated information into the same document. If competitor research turns up an interesting market trend, that goes in its own file.
- **One thing at a time.** Finish the current task before starting the next one. Don't add features, pages, or complexity that wasn't requested.

---

## The user

- **Experience level:** Not a developer. Explain everything in plain language. No jargon without explanation.
- **How they work:** They describe what they want. You build. They give feedback via screenshots and plain language. You iterate.
- **What they care about:** Getting things done, not understanding how the plumbing works. Results over process.

---

## Tone and voice

Until the style guide is written, default to: **clear, direct, no marketing fluff, no hype words** ("revolutionary," "game-changing," "synergy"). Write like a smart friend, not a press release.

Once `/style-guide/voice.md` exists, follow it instead of this default.

---

## Brand

- **Colors:** [TO BE FILLED — e.g. "cream background #EAE6DF, dark text #2E2A26, red accent #8B1A10"]
- **Font style:** [TO BE FILLED — e.g. "clean and modern," "editorial and warm," "bold and minimal"]
- **Overall vibe:** [TO BE FILLED — e.g. "Apple-minimal," "Notion-clean," "warm and artisan"]

When building anything visual, use the brand colors and style above. If they're not filled in yet, ask.

---

## Output preferences

- **Documents:** Markdown (`.md`)
- **Landing pages / web deliverables:** HTML (single file, inline CSS), unless the user specifies otherwise
- **Prototypes and tools:** Single HTML file first. No frameworks, no databases, no login — unless explicitly asked.
- **File naming:** Save deliverables to `/output/` with descriptive names (`landing-page-spring-sale.html`, `dashboard-weekly-overview.html`)

---

## What you must never do

- Add features that weren't requested
- Build login, user accounts, or a database unless explicitly asked
- Use JavaScript frameworks (React, Next.js) unless explicitly asked — start with plain HTML
- Deploy anything without explicit permission
- Assume business information that hasn't been confirmed — ask instead
- Let work disappear in chat — always save to the right folder

---

## What you should always do

- Read this file and `/company-info` + `/style-guide` before any branded work
- Show a plan before building anything complex
- When the user shows a screenshot, fix what they point out — nothing more
- Update this file when you learn new facts about the business
- Tell the user what was created and where to find it

---

## Skills (installed during sessions)

Skills are saved workflows triggered with one command. They live in `.claude/commands/`. Log installed skills here:

- _(none yet)_

---

## Notes for this session

[This section is for temporary context — what you're working on today, deadlines, things to keep in mind. Clear it between sessions.]
