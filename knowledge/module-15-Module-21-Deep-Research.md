# Module 21: Deep Research

## Turning Claude Code Into Your Research Department

Every knowledge worker runs into the same wall. You need to understand a market, a technology, a competitor, a regulatory landscape — and you need to understand it *properly*. Not a five-minute Google skim. A real, cited, structured briefing you can send to a client or take into a board meeting.

That work used to take days. A consultant would charge thousands for it. Now it takes one evening with Claude Code, the right MCPs, and a repeatable methodology.

This module is the playbook. It works for strategy consultants, VCs, product managers, founders, policy analysts, sales teams — anyone whose job is to turn scattered information into a decision.

Read it as a guide. Teach it as a module. Send it to a colleague. It stands alone.

---

## 1. Why Deep Research Is the Ultimate High-Leverage Workflow

Most people use Claude Code to *build* things. That's great. But the fastest, cheapest, most immediate payoff comes from using it to *find things out*.

Here's why deep research beats almost every other Claude Code use case for ROI:

**It replaces work you already pay for.** A research analyst in London costs £60,000 a year. A strategy consultant's deck costs £15,000. Even a solo freelancer charges £80 an hour to read the internet for you. Claude Code does the same work in an hour for a few euros of API costs.

**The output is a document, not a system.** No deploys, no databases, no authentication. You finish a research session and you have a markdown file. That's it. It either answered the question or it didn't.

**You can verify the work.** Unlike code, which either runs or doesn't, research quality is subjective — but it's also *inspectable*. Every claim has a source. Every source has a URL. If you don't trust a finding, you can click through. This makes Claude Code safer for research than almost anything else.

**The skill transfers everywhere.** Once you can run a deep research workflow, you can point it at anything: a market, a person, a technology, a legal question, a competitor, a country, a product. The methodology is universal.

The core insight: **deep research is not "search + summarize."** Anyone can do that. Deep research is *claim verification across multiple sources*, with reasoning, with sourcing, with structure. That's the thing Claude Code can now do at human-analyst quality. And almost nobody on your team knows how to set it up.

---

## 2. The Deep Research Stack

Before methodology, the tools. You don't need all of them. Start with the free stack, add paid MCPs when you hit their limits.

### Layer 1 — Claude Code with built-in WebSearch (free, zero setup)

Claude Code can search and fetch web pages on its own. Good enough for 70% of research tasks: general overviews, recent news, finding specific papers. You don't need anything beyond this to start.

**Limits:** results are shallow, no semantic search, no clean scraping, US-only for WebSearch.

### Layer 2 — A search MCP (paid but cheap)

Search MCPs give Claude richer, faster, agent-native search. Pick one based on what you do most:

| MCP | Best for | Pricing model | Why it matters |
|-----|----------|---------------|----------------|
| **Tavily** | All-in-one research (search + extract + crawl) | Free tier, then pay-per-query | The default. One server covers search, URL extraction, and site crawling. |
| **Exa** | Finding companies, papers, people by *concept* | Credits-based | Semantic/neural search. Finds results keyword search misses. |
| **Firecrawl** | Scraping specific URLs into clean markdown | Generous free tier | Best for "read this page and extract X." |
| **Brave Search** | Privacy-respecting, independent index | Free tier (2k/month) | The only major search MCP not backed by Google data. |
| **Perplexity Sonar** | One-shot cited answers | Per-query | Returns a synthesized answer with citations in a single call. Faster than running your own pipeline for simple questions. |

**Our default recommendation for most users:** Tavily + Firecrawl. Tavily for finding things, Firecrawl for extracting them. Add Exa if you do a lot of "find companies / papers / experts doing X" work.

Install pattern for any of them:
```
claude mcp add tavily -- npx -y @tavily/mcp-server --api-key YOUR_KEY
```

### Layer 3 — Playwright MCP (free, for direct site visits)

When the source is behind JavaScript, has weird layout, or you need to click around — Playwright lets Claude actually open a browser, load the page, read it, and screenshot it.

```
claude mcp add playwright -- npx -y @anthropic-ai/mcp-playwright
```

Use it sparingly. It's slow compared to search MCPs. But it's the only way to get inside interactive pages.

### Layer 4 — Context7 or similar doc-specific MCPs (for technical research)

If your research is technical (libraries, APIs, frameworks), add Context7. It pulls up-to-date documentation for almost any library and beats web search for anything version-sensitive.

### Layer 5 — The methodology

The most important "tool" isn't software. It's the 5-phase workflow you run every single time. Without it, Claude wanders. With it, you get a consistent briefing document every time.

We'll cover the methodology in Section 4.

---

## 3. Quick Win: Your First Deep Research Report in 15 Minutes

Before we get into methodology, taste the output. This prompt, copy-pasted into Claude Code, produces a real research briefing. No setup needed — just built-in WebSearch.

### The prompt

```
You are a senior research analyst. I need a briefing on:

[YOUR QUESTION HERE — be specific. Example: "the current state of the
European alt-protein market in 2026, specifically precision-fermentation
dairy companies with funding in the last 18 months"]

Follow this process:

1. SCOPE (internal, don't output yet)
   - Identify the 5-7 sub-questions I'd need answered to really understand this.
   - Rank them by importance to my stated question.

2. GATHER
   - Use WebSearch to find sources for each sub-question.
   - Prefer primary sources (company sites, filings, official releases)
     over secondary (blog posts, listicles).
   - Note the publication date of every source.

3. VERIFY
   - For every factual claim you'll include, require at least 2 independent
     sources. Flag single-source claims as [UNVERIFIED].
   - Flag anything older than 12 months as [AGING] unless it's structural.

4. SYNTHESIZE
   - Write the report in markdown.
   - Lead with a 3-bullet Executive Summary.
   - Then: Market overview, Key players, Recent activity, Open questions,
     Sources.
   - Every factual claim has an inline citation like [1] linking to the
     Sources section.

5. PRESENT
   - Save the full report as ./research/[topic-slug]-YYYY-MM-DD.md
   - Tell me in the chat: what you found, what surprised you, what you
     couldn't verify, and what I should dig into next.

Start with the SCOPE. Show me your sub-questions before you gather —
I want to confirm the scope is right before you spend time researching.
```

### What makes this prompt work

- **Role framing** — "senior research analyst" sets the quality bar.
- **Explicit phases** — Claude doesn't shortcut straight to writing. It plans first.
- **Verification requirement** — two-source rule kills the hallucination problem.
- **A confirm step** — you check the scope *before* Claude burns time researching.
- **A delivery format** — markdown file at a predictable path, with a chat summary.

Run this once on a topic you actually care about. The output will be better than whatever you're expecting.

---

## 4. The Five-Phase Methodology

This is the backbone of everything else in this module. Every deep research workflow — from a 15-minute competitor check to a 3-day market landscape report — follows these five phases.

### Phase 1 — Scope

Most research fails here. People ask an open question ("research the AI coding tools market") and get a 40-page pile of nothing.

Scoping is forcing the question into a *decision*. What will you do differently based on the answer?

The scoping template:

```
TOPIC: [one sentence]
DECISION THIS INFORMS: [what you'll do with the answer]
KEY QUESTIONS: [3-7 sub-questions, ranked by importance]
OUT OF SCOPE: [what this report will NOT cover — explicit]
QUALITY BAR: [what "done" looks like — specific]
AUDIENCE: [who reads this — their existing knowledge level]
```

Five minutes of scoping saves three hours of wandering. Always write this before you prompt.

### Phase 2 — Gather

Now you collect evidence. The principles:

- **Cast wide first, filter second.** It's easier to discard than to find.
- **Prefer primary over secondary.** Company websites, filings, papers, data portals > blog posts > opinion pieces.
- **Note the date of every source.** A 2022 article about "the current AI landscape" is archaeology in 2026.
- **Source tiers** (steal this from investigative journalism):
  - **L1** — Primary / official (company IR pages, filings, peer-reviewed papers, government data)
  - **L2** — Expert secondary (industry analysts, respected trade publications, specialist blogs with named authors)
  - **L3** — Mainstream media (news, general-interest publications)
  - **L4** — Community / UGC (Reddit, Twitter, forums — useful for sentiment, weak for facts)

If your final report leans heavily on L3/L4, the report is weak. Go back to Phase 2.

### Phase 3 — Verify (the phase everyone skips)

This is where amateur research ends and professional research begins.

**Claim decomposition.** Break every assertion into checkable sub-claims. "X is the market leader" becomes: (a) how is "market leader" being measured? (b) what's the metric? (c) what period?

**Source triangulation.** Every key claim needs **2+ independent sources**. Two blog posts citing the same press release = one source. You want *independent* confirmation.

**Flag what you can't verify.**
- `[UNVERIFIED]` — single source, couldn't triangulate
- `[CONFLICTING]` — sources disagree
- `[AGING]` — source older than 12 months on a fast-moving topic
- `[SPECULATIVE]` — author's opinion, not established fact

A report that honestly flags what it doesn't know is 10× more valuable than one that pretends to know everything.

### Phase 4 — Synthesize

Now you turn evidence into narrative. The structure:

1. **Executive summary** — 3-5 bullets, the whole thing in 30 seconds.
2. **Answer to the main question** — one paragraph.
3. **Evidence sections** — one per sub-question from the scope.
4. **Open questions / risks** — what you couldn't resolve.
5. **Recommended next actions** — tied to the original decision.
6. **Sources** — numbered list with URL, date accessed, and tier (L1-L4).

Every factual claim has an inline citation. No exceptions.

### Phase 5 — Present

The report isn't useful until someone reads it. Two outputs:

- **The full document** — markdown file, saved at a predictable path, easy to share.
- **The 90-second verbal summary** — what you'd say to your CEO in an elevator. Claude produces this as a final chat message.

If you can't explain the report in 90 seconds, the synthesis is off. Go back to Phase 4.

---

## 5. The Research CLAUDE.md

Claude Code reads `CLAUDE.md` at the start of every session. For research work, this file is where you encode your standards — quality bar, sourcing rules, output format, the tools available. Once it's written, every research session inherits it.

The canonical research CLAUDE.md template lives at `templates/CLAUDE-research.md`. Copy it into a new folder whenever you start a research project.

**Keep it lean.** Under 200 lines. Under 2,000 tokens. Every line of CLAUDE.md burns context on every turn. A bloated CLAUDE.md makes Claude dumber, not smarter.

**What belongs in it:**
- Your role and what you do
- The standards every research report must meet (source tiers, citation rules, verification rule)
- The default output structure
- The tools available and when to use which
- Hard constraints ("never fabricate a URL", "flag single-source claims")

**What does NOT belong in it:**
- The specific question you're researching today (that goes in `SCOPE.md`)
- Long lists of "good examples" (burns context for marginal gain)
- Tool documentation (Claude already knows its tools)

Pair `CLAUDE.md` (the constitution) with a per-project `SCOPE.md` (today's brief). Constitution = how I always work. Scope = what I'm working on right now.

---

## 6. The Research Spec: SCOPE.md

Every research project gets its own folder with a `SCOPE.md` at the root. This is the scoping document from Phase 1, written down so Claude reads it at the start of every session on this project.

Template at `templates/research-spec-template.md`. The structure:

```
# Research Scope: [Topic]

## Decision this informs
<!-- One paragraph. What will change based on the answer? -->

## Main question
<!-- One sentence. The headline question. -->

## Key sub-questions (ranked)
1. 
2. 
3. 

## Out of scope
<!-- Explicit. "This report does NOT cover X because Y." -->

## Quality bar
<!-- What does "good enough to ship" look like? -->
- Minimum N sources per major claim
- Source freshness window: last __ months
- Required source tiers: at least __ L1 sources

## Audience
<!-- Who reads this? What do they already know? What's their decision? -->

## Deliverable
<!-- File path, format, length, deadline. -->

## Working notes
<!-- Claude updates this as research progresses. Keeps state across sessions. -->
```

The scope document is *mutable*. As you research, you discover the real scope. Update the file. Add questions. Move things out of scope. The file evolves with the project — that's the point.

---

## 7. Running a Deep Research Project End-to-End

Here's the full flow for a multi-hour research project. Walk through this once and you'll have a template for every future project.

### Step 1 — Create the project folder

```
mkdir research-alt-protein-europe
cd research-alt-protein-europe
```

Copy in the research `CLAUDE.md` template.

### Step 2 — Write the SCOPE.md

Don't skip this. Ten minutes here saves three hours later.

Ask Claude to help if you're stuck:
```
Help me write a SCOPE.md for a research project on [topic].
I'm trying to decide [the decision]. My audience is [X].
Ask me questions until the scope is tight enough that a freelancer
could execute it without further clarification.
```

The "Freelancer Test" from Session 1 applies here too.

### Step 3 — Plan Mode

Before Claude does any actual research, enter **Plan Mode** (Shift+Tab). Claude reads the scope, thinks through the approach, and proposes a research plan — without taking any actions.

Review the plan. Is the approach right? Are the sources it plans to hit the right ones? Tighten if needed.

Plan Mode is the single biggest quality lever in research work. Use it every time.

### Step 4 — Execute the gather

Out of Plan Mode, let Claude execute. The prompt pattern:

```
Execute the plan. As you go:
- Save raw findings to ./research/raw-notes.md
- Flag anything surprising or anything that contradicts the scope assumption
- Don't synthesize yet — just collect
```

This keeps gathering and synthesizing in separate phases. You'll see the raw evidence before Claude spins it into a narrative.

### Step 5 — Verify

New prompt, same session (or `/clear` and reload with SCOPE.md and raw-notes.md):

```
Read ./research/raw-notes.md. For every factual claim:
- Is it sourced?
- Is it triangulated (2+ independent sources)?
- Is it fresh (<12 months)?
- Is the source tier appropriate?

Produce ./research/verification.md with every claim tagged:
VERIFIED / UNVERIFIED / CONFLICTING / AGING / SPECULATIVE

For UNVERIFIED and CONFLICTING claims, do a targeted re-search to
resolve them. Document what you find.
```

### Step 6 — Synthesize

```
Read SCOPE.md, raw-notes.md, and verification.md.
Produce the final report at ./research/report-YYYY-MM-DD.md
following the default report structure.

Every claim has an inline citation.
Do not include UNVERIFIED claims in the main report — put them in an
"Open questions" section instead.
```

### Step 7 — The 90-second summary

```
Give me the 90-second verbal version. What would you say if I had to
brief my board in the hallway before the meeting?
```

### Step 8 — Archive and reuse

Commit the folder to a Git repo. Every research project becomes a reusable asset:

- The scope is a starting point for similar research.
- The raw notes become training context for future projects in the same domain.
- The methodology stays identical — only the topic changes.

After 5 research projects, you have a personal research library that compounds.

---

## 8. Workflow Patterns

Different questions need different shapes of research. Here are the four patterns worth knowing.

### The Funnel (broad → narrow)

Use when: you don't know what you don't know.

```
Map the landscape of [topic]. Identify the 6-8 most important
sub-topics. For each, rate its relevance to [my goal] from 1-5.
Recommend which 2-3 deserve deep investigation.

Don't research deeply yet. I'll pick which branches to pursue.
```

Do the funnel first. Then run full deep research on the 2-3 branches you pick.

### Parallel sub-agents (breadth in parallel)

Use when: you have several independent questions and time pressure.

Claude can spawn sub-agents to research in parallel. The prompt:

```
I have four independent sub-questions:
1. [Q1]
2. [Q2]
3. [Q3]
4. [Q4]

Spawn a sub-agent for each, in parallel. Each sub-agent:
- Researches only its question
- Returns a 1-page briefing with sources
- Does not interact with the other sub-agents

Aggregate their outputs into a single report. Flag any contradictions
between the sub-reports.
```

Cuts wall-clock time roughly in quarters. Costs more tokens but you get the answer faster.

### The interrogation (one source, deep)

Use when: you have one crucial source (a long PDF, a competitor's full website, a 2-hour transcript).

```
Read [source]. Don't summarize. Answer these specific questions:
1. 
2. 
3. 

For each, quote the exact passage that supports your answer.
If the source doesn't contain the answer, say so explicitly.
```

The "quote the exact passage" rule is magic — it prevents hallucination on single-source work.

### The monitor (research over time)

Use when: the topic changes and you need to track it.

Store prior reports in `./research/history/`. Each run:

```
Read the latest report in ./research/history/ as baseline.
Run the research flow again.
In the new report, add a "CHANGES SINCE LAST REPORT" section at the top
highlighting what's new, what's gone, what contradicts earlier findings.
```

This is how you turn deep research into ongoing intelligence instead of one-off briefings.

---

## 9. Managing Context and Cost

Deep research burns tokens faster than any other Claude Code workflow. Long conversations, big pages, many MCP calls. You need to manage this actively or you'll hit context limits mid-project.

### The context budget

A research project typically needs:
- ~5,000 tokens for CLAUDE.md + SCOPE.md + scaffolding
- ~15,000-30,000 tokens for gathered raw content
- ~5,000 tokens for verification
- ~10,000 tokens for synthesis

That's 35,000-50,000 tokens per project. Easy on 200k context, tight on 100k.

### Context hygiene rules

1. **Keep CLAUDE.md under 200 lines.** Lean is better than thorough.
2. **Disconnect MCP servers you're not using.** Each MCP burns 2k-6k tokens just by being connected. Five unused MCPs = 25k tokens gone before you start.
3. **Use `/clear` between phases.** Gather, then `/clear`, reload scope + raw-notes, then verify. Each phase gets a clean context.
4. **Use `/compact` when going deep.** Summarizes the conversation so far to free up room.
5. **Save intermediate artifacts to files.** Raw notes → file. Verification → file. Reload them when needed. Don't keep everything in conversation.

### Cost expectations

A full deep research project (scope → gather → verify → synthesize → present) on a non-trivial topic runs **$0.50-$2.00** in API costs with Sonnet, 3-5× that with Opus.

A five-minute quick research (just the prompt in Section 3) is typically **$0.05-$0.20**.

Cheap. But add up 20 research projects a month and it matters. Track costs with the `cost-tracker.sh` hook (covered in Module 11).

### Latency expectations

A full research pipeline takes **30-90 seconds** per phase, sometimes longer. This feels slow. It isn't — it's doing 20-50 web fetches and reasoning over the results. Don't judge quality by speed. Judge it by the citations.

---

## 10. Common Mistakes (and How to Avoid Them)

### Mistake 1 — Starting without a scope

You type "research the European AI chip market" and Claude writes something. It'll be fine, it won't be *good*. Without a scope, "good" has no definition. Always write SCOPE.md first.

### Mistake 2 — Skipping verification

The synthesis phase *feels* like the output. The verification phase *is* the output. A beautifully written report based on unchecked claims is a confidently-wrong briefing. Always verify.

### Mistake 3 — Over-reliance on one MCP

Tavily is great. Exa is great. Using only one gives you one lens on the web. For important research, use two search MCPs and compare coverage. If they agree, you're solid. If they disagree, that's a signal to dig.

### Mistake 4 — Running deep research on topics Claude already knows

"Research the history of JavaScript." Claude doesn't need to search for this. You're burning money. Deep research is for things Claude doesn't already know — recent events, niche topics, specific companies, your private data, and anything post-knowledge-cutoff.

### Mistake 5 — Accepting the first draft

The first synthesis is almost always too hedged, too generic, too safe. Push back. "Sharper. What's the actual argument? What would you say if you had to defend this in front of a hostile audience?" Three rounds of pushback dramatically improves the output.

### Mistake 6 — Not separating gather from synthesize

If you let Claude gather and synthesize in the same prompt, it will start shaping the narrative before it has the evidence. Always run gather, then *stop*, then synthesize. Ideally separate phases with `/clear`.

### Mistake 7 — No human check

Deep research hallucinates less than raw Claude, but it still hallucinates. Spot-check 3 citations per report. Click through, confirm the claim actually matches the source. Five minutes. Non-negotiable.

### Mistake 8 — Treating the report as the end

The report is the intermediate. The *decision* is the end. If you finish a research project and don't change anything about what you'd do, you over-researched or under-scoped. Every report should end in an action.

---

## 11. Workshop Exercise: Your First Real Research Project

Set aside 60 minutes. Pick something you actually need to know.

### Step 1 — Pick a real question (5 min)

Not a practice question. Something you've been meaning to find out. Good candidates:
- "Who are the 5 most credible [type] competitors in [region]?"
- "What's the current state of [regulation] for [my industry]?"
- "Which [vendors] are being adopted by [peer companies]?"
- "What are the 3 biggest shifts in [my field] in the last 6 months?"

### Step 2 — Set up the project (5 min)

```
mkdir research-[short-slug]
cd research-[short-slug]
cp [path-to-template]/CLAUDE-research.md ./CLAUDE.md
cp [path-to-template]/research-spec-template.md ./SCOPE.md
```

### Step 3 — Fill in SCOPE.md (10 min)

Ten minutes. Push yourself to write the "out of scope" and "quality bar" sections properly. These are the bits that keep Claude focused.

### Step 4 — Plan Mode (5 min)

```
Read CLAUDE.md and SCOPE.md. Enter Plan Mode.
Propose a research plan. I want to see:
- Which sub-questions you'll attack and in what order
- Which sources you expect to be primary (L1)
- Which MCPs / tools you'll use for each sub-question
- What could go wrong
```

Review. Refine. Confirm.

### Step 5 — Execute (20 min)

```
Execute the plan. Save raw findings to ./research/raw-notes.md.
Don't synthesize — just gather.
```

Then verify, then synthesize — following Phase 3, 4, 5 from Section 4.

### Step 6 — Spot-check (5 min)

Open the final report. Pick 3 random claims with citations. Click through. Confirm they're real and accurate. If any fail, flag them and ask Claude to resolve.

### Step 7 — Extract the decision (10 min)

```
Based on this report, what are the 3 most important actions I should take
in the next two weeks? Be specific. Not "consider X" — "do X by [date]."
```

Write those actions down somewhere you'll see them. That's the point of the whole thing.

### What you should have at the end

- A folder with CLAUDE.md, SCOPE.md, raw-notes.md, verification.md, report-YYYY-MM-DD.md
- A 90-second verbal summary
- Three concrete actions
- Proof, to yourself, that this works

---

## 12. Sharing Deep Research With Clients and Colleagues

Three formats, depending on audience:

**The raw report** — markdown file, all citations, full structure. For peers who want to evaluate the evidence.

**The executive brief** — first two pages only (executive summary + main answer). For leadership who want the conclusion.

**The verbal version** — the 90-second summary. For hallway conversations and Slack threads.

Ask Claude to produce all three from the same source report:

```
From the report at ./research/report-2026-04-14.md, produce:
1. ./research/executive-brief.md — 1-2 pages, conclusion-first, for a CEO.
2. ./research/verbal-summary.md — 90-second spoken version, casual tone.
Keep the full report as the underlying source.
```

One research project, three audiences. Everyone gets the version they actually need.

---

## Summary — What You Now Know

1. **Why** deep research is the highest-ROI Claude Code workflow.
2. **The stack** — built-in WebSearch → Tavily/Exa/Firecrawl → Playwright → Context7.
3. **The 5-phase methodology** — Scope, Gather, Verify, Synthesize, Present.
4. **Two files** — a lean CLAUDE.md (the constitution) and a per-project SCOPE.md (today's brief).
5. **The end-to-end workflow** — mkdir, scope, plan mode, execute, verify, synthesize, spot-check.
6. **Four patterns** — funnel, parallel sub-agents, interrogation, monitor.
7. **Context and cost management** — keep CLAUDE.md lean, disconnect unused MCPs, `/clear` between phases.
8. **The common mistakes** — and how to avoid them.

The one action: set up `templates/CLAUDE-research.md` in a new folder tonight. Run the Quick Win prompt from Section 3 on something you've actually been meaning to research. If the output is as good as we think it will be, you'll understand why this module exists.

---

## Next Steps

- **Build a recurring research habit.** One real research project per week for a month. The methodology only clicks with reps.
- **Combine with Module 13 (Agents).** A scheduled agent that re-runs a research project monthly turns deep research into ongoing intelligence.
- **Combine with Module 12 (Skills).** Wrap your favorite research flow as a `/research` skill so it's one command away.

---

## Appendix A — Quick Reference Card

**Starting a new research project:**
```
mkdir research-[slug] && cd research-[slug]
cp ~/templates/CLAUDE-research.md ./CLAUDE.md
cp ~/templates/research-spec-template.md ./SCOPE.md
# Fill in SCOPE.md
# Open Claude Code. Shift+Tab for Plan Mode.
```

**The 5 phases:**
1. SCOPE — write SCOPE.md, nothing else
2. GATHER — raw-notes.md, evidence only, no synthesis
3. VERIFY — verification.md, tag every claim, re-search gaps
4. SYNTHESIZE — report-YYYY-MM-DD.md with citations
5. PRESENT — executive brief + 90-second summary

**Source tiers:**
- L1 — primary / official (filings, papers, company data)
- L2 — expert secondary (named analysts, trade pubs)
- L3 — mainstream media
- L4 — community / UGC

**Claim flags:**
- `[UNVERIFIED]` single source
- `[CONFLICTING]` sources disagree
- `[AGING]` older than 12 months
- `[SPECULATIVE]` opinion, not fact

**MCP choice:**
- Default: Tavily + Firecrawl
- Semantic search: Exa
- Privacy: Brave
- One-shot answers: Perplexity
- Interactive pages: Playwright
- Library docs: Context7

**Cost per project:** $0.50-$2.00 (Sonnet), 3-5× (Opus).
**Latency per phase:** 30-90 seconds. Don't panic.
