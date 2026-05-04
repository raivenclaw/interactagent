# Module 22: Specialized Research Channels

## Where the Good Information Actually Lives

Most research-grade information does not live on the open web. It lives in Amazon review sections, Reddit threads, YouTube interviews, earnings call PDFs, app store one-stars, and the 200-page report your competitor just filed with the SEC. Google doesn't surface most of it. ChatGPT doesn't see most of it. A generic web search barely scratches any of it.

Module 21 gave you the methodology — scope, gather, verify, synthesize, present. This module gives you the *channels*. Eight specific places where real insight lives, with the exact tools, setup, and prompts to extract it.

Each channel plugs into the Module 21 methodology. The methodology is the skeleton. These channels are the muscle.

---

## 1. How This Module Works

Every section follows the same structure, so you can skim to the channel you need and skip the rest:

1. **Why this channel matters** — what you actually get here that you can't get elsewhere
2. **The tools** — MCPs, APIs, or direct methods
3. **Setup** — exact commands, keys, accounts
4. **The core prompts** — copy-paste-ready
5. **Common mistakes** — the traps everyone falls into

The channels are independent. You don't need all of them. Pick the 2-3 that match your work and learn those deeply.

**The universal rule:** every specialized channel is a *gathering* tool. You still run the five phases. Scoping, verification, synthesis, and presentation still apply. This module just changes *where* you gather from.

---

## 2. Channel 1 — Amazon (Products, Reviews, Category Intelligence)

### Why this matters

Amazon is the world's largest public dataset of consumer opinion. Every review is a sales objection, a feature request, or a marketing headline in disguise. Every BSR (Best Seller Rank) movement is a real-time signal of demand. Every Q&A thread is a free focus group.

For ecommerce, CPG, consumer tech, books, anything physical — Amazon beats every other research channel for raw voice-of-customer data.

### The tools

Three approaches, in increasing depth:

| Tool | Best for | Cost |
|------|----------|------|
| **Playwright MCP** | Specific product pages, small samples | Free |
| **Apify Amazon actors** | Bulk scraping, thousands of products | ~$6.67 / 1K requests |
| **Bright Data Amazon API** | Production pipelines, 600+ fields per product | From $0.95 / 1K records |

For workshop-level research: Playwright is enough. For ongoing monitoring: upgrade to Apify or Bright Data.

### Setup — Playwright approach

```
claude mcp add playwright -- npx -y @anthropic-ai/mcp-playwright
```

No account needed. No keys. You're just browsing like a normal visitor.

### Setup — Apify approach

1. Sign up at apify.com (free tier: $5 free credit)
2. Go to Settings → Integrations → API tokens → create a token
3. Install the MCP: `claude mcp add apify -- npx -y @apify/mcp-server --api-token YOUR_TOKEN`

### Core prompts

**Product page deep-dive:**
```
Visit this Amazon product page: [URL]

Extract:
1. Title, brand, price, Prime eligibility, rating, number of reviews
2. The 5 top "positive" mentions in reviews (cluster the themes)
3. The 5 top "negative" mentions in reviews (cluster the themes)
4. The most common "unmet need" — what do reviewers wish existed?
5. The 3 most interesting Q&A threads — what are buyers confused about?
6. Three competitor products surfaced in "Customers also bought"

Save to ./research/amazon-[product-slug].md.
Note the date accessed. Flag any source-of-uncertainty.
```

**Category landscape:**
```
Using Playwright, visit [Amazon category URL] and scroll through the
top 50 bestsellers. For each, extract: name, brand, price, rating,
review count, BSR.

Save to ./research/amazon-category.json.

Then answer:
- Who are the top 5 brands by shelf presence?
- What's the price distribution (median, P25, P75)?
- Which products are outliers — very high rating + high review count?
- Which brands repeat across multiple sub-categories?
- Where is the price gap nobody is filling?
```

**Review mining for marketing copy:**
```
Read the reviews on these 3 competitor products:
1. [URL]
2. [URL]
3. [URL]

For each product, extract the top 3 negative review themes.

Then write — for each theme — a one-line ad hook that positions MY
product as the solution. Use the actual language of the complaints.

Example: reviewer says "shipping took forever"
→ ad hook: "Next-day delivery. Because waiting two weeks isn't a feature."
```

### Common mistakes

- **Scraping too fast.** Amazon blocks aggressive IPs. Space out requests. Use Apify or Bright Data for anything > 100 pages/day.
- **Trusting star ratings only.** A 4.5-star product with 3,000 reviews tells you less than *why* 400 of them were 1-star. Read the 1-stars.
- **Ignoring Q&A.** The Q&A section is the single highest-signal part of any Amazon page. It's literally customers saying "I'm thinking about buying, but…". Treat every Q&A as a conversion objection.
- **Copying reviews into marketing.** Don't lift customer reviews verbatim into your ads — that's plagiarism. Use them for themes and language patterns, not direct copy.

---

## 3. Channel 2 — Reddit, Quora, and Community Q&A

### Why this matters

Reddit and Quora are where people say what they actually think — in their own voice, before they've been marketed to. For understanding a niche audience, a problem space, or how real people describe your category, these channels are unmatched.

- **Reddit** — community-driven, subreddit-organized, anonymous. Best for: consumer sentiment, unmet needs, real-time reactions, insider language, contrarian views.
- **Quora** — Q&A-focused, named authors, long-form answers. Best for: specific how-to questions, opinions from domain experts (credentialed authors), niche professional topics that don't have a strong subreddit.
- **Stack Exchange, HN, Product Hunt, niche forums** — similar patterns, use the same playbook.

Founders use these channels to find product ideas. Marketers use them to find copy that converts. Product managers use them to find the complaints nobody is tracking.

### The tools

For Reddit — three working approaches in 2026:

| Tool | Best for | Notes |
|------|----------|-------|
| **Reddit JSON API** (`.json` suffix on any URL) | Quick scripts, small samples | Zero setup. `https://reddit.com/r/X.json` |
| **PRAW (Python Reddit API Wrapper)** | Serious work, streaming, pagination | 60 req/min authenticated |
| **Apify / Bright Data Reddit scrapers** | Scale, historical data, no rate limits | Paid |

Reddit's official API is free for developers but rate-limited. For workshop-level work, the JSON API via Claude's built-in fetch is enough.

For Quora — it's harder:

| Tool | Best for | Notes |
|------|----------|-------|
| **WebSearch + WebFetch** | Individual questions and top answers | Default approach. Quora surfaces well in Google. |
| **Apify Quora scrapers** | Bulk question/answer extraction | Paid. Quora blocks most scrapers; Apify actors work but break occasionally. |
| **Manual + Playwright** | Specific URLs, logged-in access | Only for personal research. Respect ToS. |

Quora has no official public API. Stick to search-indexed content for legal, reliable research.

### Setup — JSON API approach

No setup. Claude can fetch `https://reddit.com/r/[subreddit].json` and `https://reddit.com/r/[subreddit]/search.json?q=[query]` directly via WebFetch.

### Setup — PRAW approach (for deeper work)

1. Create a Reddit app at reddit.com/prefs/apps (script type)
2. Note client ID, client secret, username, password
3. Ask Claude to write a PRAW script, store creds in `.env.local`:
```
REDDIT_CLIENT_ID=...
REDDIT_CLIENT_SECRET=...
REDDIT_USERNAME=...
REDDIT_PASSWORD=...
```

### Core prompts

**Subreddit landscape scan:**
```
Research r/[subreddit] as a market signal.

Pull the top 50 posts from the last 30 days via the JSON API.
For each, capture: title, score, comment count, flair, author karma.

Then synthesize:
- What are the 5 most-discussed pain points?
- What products/tools are people asking for that don't exist?
- Which existing products/brands are mentioned positively?
- Which are mentioned negatively?
- What's the community's language — the specific words and phrases
  they use to describe their problems?

Save the full dataset to ./research/reddit-[subreddit]-[date].json
and the synthesis to ./research/reddit-[subreddit]-analysis.md.
```

**The "unmet need" mine:**
```
Search r/[subreddit] for posts matching these patterns:
- "does anyone know a [tool/product] that [X]"
- "I wish there was a way to [X]"
- "why isn't there a [X]"
- "what's the best [X] for [Y]"

Pull the top 30 such posts from the last 6 months.

For each: title, URL, score, summary of what they want,
summary of what solutions were suggested in the comments.

Output a ranked list of unmet needs, sorted by engagement (score + comments).
These are potential product ideas or positioning angles.
```

**Voice-of-customer language extraction:**
```
Read the top 100 comments from r/[subreddit] this month.

Extract:
- The 20 most-used phrases (exact wording)
- Common metaphors and analogies
- Insider slang / terminology specific to this community
- The tone (frustrated / hopeful / sarcastic / technical / casual)

I want this for marketing copy — I need to write like this community
talks. Give me a "do-say / don't-say" cheat sheet.
```

**Quora — question-level research:**
```
Search Google for "site:quora.com [specific question or topic]".
Pick the 10 most-answered questions.

For each question, fetch the page and extract:
- The exact question
- Top 3 answers (by upvote), with author name and credentials
- Summary of each answer's position
- Any linked sources

Save to ./research/quora-[topic]-findings.md.

Then synthesize:
- What consensus answer emerges across questions?
- Where do credentialed authors disagree?
- What common misconception do multiple answers correct?
- Which answers cite external research vs. pure opinion?
```

**Quora — expert tracking:**
```
Search for answers on Quora by [named expert, e.g. a specific
professional in your field].

Use: site:quora.com "[expert name]" [topic]

Pull their most-upvoted answers on topics relevant to [my research].

For each: the question, their answer summary, 2-3 direct quotes,
their stated credentials on the topic.

This builds a thought-leadership profile for the person using
their own words — useful before a meeting, pitch, or hire.
```

### Common mistakes

- **Trusting karma/upvotes as truth.** High-upvote content often reflects what *reads well*, not what's *true*. Cross-reference with external sources (Module 21 verification).
- **Mining dead subreddits.** Check the monthly active post count. < 50/month means it's a ghost town and the "insights" are stale. Same applies to inactive Quora topics.
- **Scraping personal data.** Don't build databases of Reddit usernames or Quora profiles. Use these channels for aggregate patterns, not individual profile lookups.
- **Taking the loud minority for the whole community.** A dozen vocal complainers can dominate the discussion. Weight by distinct authors, not raw comment count.
- **Trusting Quora credentials at face value.** "Former Google engineer" may or may not be true. High-confidence claims from Quora need cross-channel verification.
- **Missing niche forums.** For specific industries (woodworking, audiophiles, watch collectors, dev ops), a forum or Discord may beat both Reddit and Quora. Ask the community where the real conversation happens before picking the channel.

---

## 4. Channel 3 — NotebookLM (Long-Document Research Without Burning Context)

### Why this matters

NotebookLM is Google's tool for long-document Q&A. You upload PDFs, URLs, YouTube videos, Google Docs, raw text — up to massive context — and it indexes the content. Then you ask questions and get cited, source-grounded answers.

Why this matters for Claude Code: NotebookLM does the *indexing* so Claude can ask *short questions* and get *specific answers* without you pasting 200-page documents into Claude's context. You offload the heavy reading to Gemini, keep the reasoning in Claude, and burn far fewer tokens.

This is the single most powerful pattern for research over large private document sets: legal filings, client decks, transcripts, whitepapers, academic papers.

### The tools

| Tool | What it does | Setup |
|------|--------------|-------|
| **NotebookLM MCP server** | Lets Claude query your NotebookLM notebooks directly | GitHub: PleasePrompto/notebooklm-mcp |
| **NotebookLM Skill** | Browser-automation-based skill that Claude can invoke | GitHub: PleasePrompto/notebooklm-skill |
| **notebooklm-py (Python API)** | Programmatic access via Python/CLI | GitHub: teng-lin/notebooklm-py |

All three are unofficial. NotebookLM has no official public API as of 2026, so these use authenticated browser automation under the hood. They work, they're maintained, but expect occasional breakage when Google updates the UI.

### Setup

**Option A — MCP server (recommended):**
```
# Clone the repo
git clone https://github.com/PleasePrompto/notebooklm-mcp
cd notebooklm-mcp
# Follow repo README — typical steps:
# 1. Install dependencies
# 2. Authenticate once (browser flow)
# 3. Add to claude mcp config
```

**Option B — Skill:**
Follow the install instructions at github.com/PleasePrompto/notebooklm-skill — drops into your `~/.claude/skills/` folder.

Either way: you create notebooks in NotebookLM *first*, populate them with sources, then let Claude query them.

### Core prompts

**Research a notebook you've pre-loaded:**
```
Use NotebookLM to query my "alt-protein-market-2026" notebook.

Answer these questions — for each, cite the exact source passage
NotebookLM returns:
1. Who are the 5 largest players by funding in this market?
2. What is the average pre-revenue stage for Series A?
3. What regulatory framework applies in the EU vs. US?
4. What are the 3 most-cited technical challenges?
5. What are the most common exit paths?

Save answers to ./research/alt-protein-qa.md with citations.
```

**Synthesize across sources in a notebook:**
```
In my "competitor-earnings-q1-2026" notebook, I've loaded the latest
earnings call transcripts for 5 competitors.

Use NotebookLM to extract, for each competitor:
- Top 3 strategic priorities mentioned
- Top 3 risks or challenges acknowledged
- Revenue growth guidance
- Any M&A or partnership signals
- Shift in positioning vs. previous quarter

Then cross-compare: where are they converging? Where are they diverging?
What's the one theme every one of them mentioned?
```

### The NotebookLM workflow pattern

The power is in the separation of concerns:

1. **NotebookLM** — your document index. Load 20 PDFs once, index them once.
2. **Claude Code** — your reasoning engine. Ask specific questions, receive cited chunks.
3. **You** — the decision-maker. Review, approve, synthesize.

A research project using this pattern looks like:

```
Week 1: Upload 20 earnings calls, 15 analyst reports, 10 company
decks to a NotebookLM notebook. One-time indexing.

Week 2+: Every time you need an answer, Claude queries NotebookLM,
gets back cited chunks, synthesizes. No re-reading needed.

Month 6: The notebook becomes your institutional memory.
```

### Common mistakes

- **Uploading junk.** NotebookLM is only as good as its sources. Curate. Twenty great sources beats 200 mediocre ones.
- **Asking generic questions.** "Summarize this notebook" wastes the tool. Specific questions → specific answers.
- **Ignoring the citations.** NotebookLM gives you the exact passages. Click through. Verify.
- **Treating it as a substitute for Claude's reasoning.** NotebookLM retrieves. Claude reasons. Use both.

---

## 5. Channel 4 — YouTube & Podcasts (Interview Analysis, Expert Capture)

### Why this matters

The best analysts on any topic have been interviewed. Founders give podcast interviews before they give press releases. Domain experts explain things on YouTube they'd charge $500/hour to explain in person. Panel discussions surface disagreements between experts that written content sanitizes.

YouTube transcript extraction turns this enormous corpus into searchable, analyzable text. For competitive intelligence on a person or company, it's often higher-signal than anything they've written.

### The tools

| Tool | Best for | Notes |
|------|----------|-------|
| **youtube-transcript-mcp** (hancengiz) | Direct MCP integration | Active, well-maintained |
| **mcp-server-youtube-transcript** (kimtaeyoon83) | Alternative implementation | Works too |
| **Video Insight skill** | Multi-agent workflow for full video analysis | Claude Code skill |
| **Algrow MCP** | Channel-level research, viral video discovery | Broader YouTube analytics |

For podcast audio (non-YouTube), you transcribe first with Whisper or an equivalent, then treat it as text. Many podcasts have transcripts on their websites — try that before transcribing yourself.

### Setup

```
claude mcp add youtube-transcript -- npx -y @hancengiz/youtube-transcript-mcp
```

That's it. No account, no key. Works on any public video with captions (auto-generated or manual).

### Core prompts

**Single interview analysis:**
```
Extract the transcript from this YouTube URL: [URL]

Save the raw transcript to ./research/transcripts/[video-slug].txt.

Then analyze:
1. Who is the speaker? (inferred from context)
2. What are the 3 core claims they make?
3. What are 5 specific, quotable statements (with rough timestamps)?
4. What do they agree with consensus on? What do they push back on?
5. What did they NOT say that you'd expect them to say on this topic?

Save analysis to ./research/[video-slug]-analysis.md.
```

**Founder research across 10+ interviews:**
```
I'm researching [person name]. Here are 12 YouTube videos where
they've been interviewed: [list of URLs]

Do this in sub-agents (one per video) in parallel:
- Extract transcript
- Pull the 5 most substantive quotes
- Note the interviewer/context
- Flag any contradictions with their other public statements

Aggregate into a profile doc at ./research/profile-[person-slug].md:
- Their 5 most-repeated ideas across interviews
- Where their thinking has evolved
- Topics they avoid
- Topics they get animated about
- Three quotes that would work in a briefing for a meeting with them
```

**Category conversation map:**
```
Find the 20 most-viewed YouTube videos from the last 12 months
on the topic "[topic]". Use search + view count.

For each, extract the transcript and pull:
- Speaker's position (pro / neutral / skeptic on the topic)
- 3 key claims
- Notable data points or sources they cite

Synthesize: what are the 5 camps in this conversation? Who are the
most-cited sources across videos? What's the conventional wisdom?
What's the contrarian position?
```

### Common mistakes

- **Trusting auto-generated captions on accented speech.** YouTube's auto-captions are poor on non-US English and technical terms. Spot-check critical quotes against the video.
- **Ignoring video context.** A quote means different things in a conference keynote vs. a 3-hour podcast vs. a heated debate. Capture the setting.
- **Transcribing without compressing.** A 90-minute podcast is ~12,000 words. Don't load the full transcript every time. Use sub-agents — let the sub-agent read the full transcript, return only the extract you need.
- **Pulling quotes without timestamps.** If you can't point to the exact moment in the video, it's not a verifiable quote.

---

## 6. Channel 5 — PDFs & Reports (Filings, Whitepapers, Analyst Reports)

### Why this matters

The highest-tier sources (L1 in Module 21's hierarchy) are almost all PDFs. SEC filings (10-K, 10-Q, S-1). EU regulatory documents. Central bank reports. Academic papers. Analyst whitepapers. Industry association data.

These are the sources strategy consultants charge thousands to synthesize. They're free or cheap to access. The bottleneck is reading time — and that's what Claude Code removes.

### The tools

| Approach | Best for | Notes |
|----------|----------|-------|
| **Built-in Read tool** | Individual PDFs already on disk | Works for most |
| **WebFetch** | Public PDF URLs | Claude downloads and reads |
| **NotebookLM** | Libraries of 20+ PDFs | See Section 4 |
| **Firecrawl / Tavily extract** | Convert PDFs to clean markdown | For further processing |

For single-document work: just hand Claude the PDF. For multi-document work: load into NotebookLM.

### Core prompts

**10-K analysis (or any corporate filing):**
```
Read [path/to/10-K.pdf]. This is [Company]'s most recent annual filing.

Extract:
1. Revenue by segment, YoY and 2-year trend
2. The top 5 risk factors (paraphrased, with page numbers)
3. Notable changes in "Management Discussion and Analysis" from last year
   (read in comparison to [prior-year 10-K.pdf])
4. Any new segments, discontinued operations, or impairments
5. Leadership changes mentioned
6. Capital allocation signals — buybacks, dividends, M&A spend

For every finding, cite the page number.

Save to ./research/[company]-10K-analysis.md.
```

**Academic paper triage:**
```
Read [path/to/paper.pdf].

Produce a 1-page briefing:
- Research question
- Methodology (briefly)
- Key findings (3-5 bullets with quoted numbers)
- Limitations the authors acknowledge
- Limitations they DON'T acknowledge that matter
- What would need to be true for this to NOT replicate
- How does this fit into [my broader research question]?

Keep it to 1 page. I'm triaging a stack of 15 papers.
```

**Analyst report synthesis:**
```
Read these 3 analyst reports:
1. [path/to/report-A.pdf]
2. [path/to/report-B.pdf]
3. [path/to/report-C.pdf]

All three cover [market/topic]. For each:
- What's their market size estimate (cite page)
- Their top 3 predictions for next 12 months
- Which companies they identify as winners

Then cross-compare:
- Where do all three agree?
- Where do they disagree? On what basis?
- Which analyst has been most accurate historically (if you can tell)?

Save to ./research/analyst-comparison-[date].md.
```

### Common mistakes

- **Reading the whole PDF every time.** A 200-page 10-K has 15 pages you actually need. Tell Claude to index the table of contents first, then target specific sections.
- **Trusting analyst reports as neutral.** Most analyst reports are paid by someone. Read the disclosure section. Weight accordingly.
- **Not preserving page numbers.** Any claim from a PDF needs a page reference. "The report says X" is not a citation. "Report X, page 47" is.
- **Ignoring footnotes.** The footnotes in financial filings are where the real risks live. Read them.

---

## 7. Channel 6 — App Stores (iOS, Android, Chrome Extensions)

### Why this matters

If the thing you're researching is a consumer or SMB app, App Store and Play Store reviews are richer than any other channel. Higher signal than Reddit (users are verified buyers), higher volume than Amazon (apps get orders of magnitude more reviews), more recent than most blog commentary.

### The tools

| Tool | Best for | Notes |
|------|----------|-------|
| **Playwright** | Direct scraping of store pages | Works on both iOS and Play Store pages |
| **AppFigures / Sensor Tower APIs** | Historical, aggregated data | Paid, enterprise-level |
| **AppRadar MCP** (if available) | Direct integration | Check availability |

For most research: Playwright is fine. Scrape the review section of the target app, work with the sample.

### Core prompts

**App review mining:**
```
Using Playwright, visit [App Store URL] for [app name].

Scrape the most recent 200 reviews (paginating as needed).
For each: rating, date, title, body, version reviewed.

Save to ./research/app-reviews-[app-slug].json.

Then analyze:
- Trend in star ratings over the last 6 months (improving or declining?)
- Top 5 complaints (clustered themes)
- Top 5 praises (clustered themes)
- Feature requests that appear in 3+ reviews
- Recent version-specific bugs mentioned
- The "switch trigger" — what made a 5-star become a 1-star?
```

**Competitor app comparison:**
```
Research these 3 competitor apps on the App Store:
1. [App A URL]
2. [App B URL]
3. [App C URL]

For each, pull:
- Current rating, review count
- Recent download trend (if visible)
- Top 3 complaint themes from the last 30 days
- What they charge and how (free / freemium / subscription)
- Their most-hyped feature (inferred from what they emphasize)

Create a comparison table.

Then answer: if someone is unhappy with App A, which competitor are
they most likely to switch to, and why?
```

### Common mistakes

- **Only looking at the overall average.** A 4.7-star app can have a scathing recent trend buried in the last month. Weight recent reviews heavier.
- **Ignoring the "most helpful" filter.** Apple and Google both surface reviews by helpfulness. Those are higher-signal than chronological.
- **Skipping paid app reviews.** Even if you don't pay for the app, the reviews are public. Don't limit yourself to free apps.
- **Not cross-checking with the app itself.** If reviews say "the sync is broken", install the app and verify. Claims age fast.

---

## 8. Channel 7 — News Aggregation (Google News, Press Releases, RSS)

### Why this matters

For "what's happened recently" — funding rounds, product launches, regulatory actions, executive changes — news aggregation beats everything else. But generic "search the news" via a search engine is noisy. Targeted news research with date ranges and source filters is clean.

### The tools

| Tool | Best for | Notes |
|------|----------|-------|
| **Tavily search with date filter** | Recent news on any topic | Best-in-class |
| **Perplexity Sonar** | Synthesized cited answer with recent context | One-shot |
| **Google News RSS feeds** | Ongoing monitoring, zero cost | Via WebFetch |
| **Press release wires** (PR Newswire, Business Wire RSS) | Official announcements | Trustworthy tier |

### Core prompts

**Company news scan — last 90 days:**
```
Research all public news about [Company] from the last 90 days.

Use Tavily with a date filter.

Categorize findings:
- Funding / financial
- Product / feature launches
- People / leadership changes
- Partnerships / customers
- Regulatory / legal
- Press / media coverage

For each: headline, source, date, one-sentence summary, link.

Flag anything that seems like a strategic inflection point — major
pivot, acquisition, executive departure.

Save to ./research/[company]-news-scan-[date].md.
```

**Topic monitoring setup:**
```
Set up ongoing monitoring for the topic "[topic]".

Identify the 5 best sources for this topic — a mix of:
- Trade publications
- Specialist newsletters
- Company blogs
- Regulatory body announcements

For each, find the RSS feed URL (or sitemap).

Create a monitoring spec at ./research/[topic]-monitor.md that a
scheduled agent (Module 13) could run weekly to pull new items.
```

### Common mistakes

- **Generic news search.** "News about AI" returns 10,000 low-quality articles. Scope tightly — "AI chip export restrictions, last 30 days, US policy sources."
- **Ignoring date filters.** Never run a news search without a date range. You'll get 2020 articles treated as current.
- **Trusting press releases as facts.** A press release is what the company *wants you to believe*. It's a primary source for what they *claim*, not for what's *true*.
- **No deduplication.** The same story appears in 50 outlets. Cluster by event before you synthesize.

---

## 9. Channel 8 — LinkedIn and People Intelligence (Where Legal)

### Why this matters

When your research is about a *person* — a potential hire, a competitor's new CEO, a founder you're pitching to — LinkedIn has signal nowhere else does. Job history, mutual connections, posts, recommendations.

**Strong caveat:** LinkedIn's terms prohibit automated scraping. Claude Code visiting a LinkedIn profile is no different from you visiting it, but building databases of LinkedIn data via automation violates ToS and can trigger legal consequences. Stay on the right side of this.

### The tools

| Approach | Legal status | Notes |
|----------|--------------|-------|
| **Manual / Claude via Playwright, logged into your own account** | Grey area. OK for personal research, not OK for scale | Use sparingly |
| **LinkedIn's official Sales Navigator API** | Fully legal, expensive | For sales teams |
| **Published profile URLs + WebSearch** | Fully legal | Most profile data is indexed by Google |
| **Apollo.io / Clearbit / similar** | Depends on data source | B2B data, legal if sourced legally |

For workshop and personal use: stick to publicly indexed information and what you can see while signed into your own LinkedIn account. Don't scrape.

### Core prompts

**Person research (ethical approach):**
```
Research [person's name], [role], at [company].

Use public web search only (not scraping).

Build a profile:
- Current role and tenure
- Career history (roles and companies, years)
- Published writing (articles, blog posts, interviews)
- Public talks or podcasts (use Channel 4 methods if transcripts exist)
- Notable public opinions on topics relevant to [my context]
- Their network / common associations

Save to ./research/profile-[person-slug].md.

Cite every fact. Do NOT fabricate employment dates, degrees,
or quotes.
```

**Company leadership scan:**
```
For [company], identify the current leadership team (CEO, CFO, CTO,
CPO, etc.) as of [date].

For each, use public sources:
- LinkedIn public profile (URL only, no scraping beyond what search surfaces)
- Company "About" / "Team" page
- Press interviews and board bios

Output:
- Tenure in current role
- Prior role
- Previous companies (last 2)
- Any public thought leadership on record
- Flag if recent join (< 6 months) — signals strategic shift
```

### Common mistakes

- **Automated scraping at scale.** Don't. Use the official API or stay within manual/research-scale usage.
- **Trusting LinkedIn self-reporting as fact.** People embellish. Cross-check claims against other sources.
- **Fabricating plausible details.** If Claude doesn't know when someone joined a company, it should say so. Push back if it invents dates.
- **Forgetting the ethics layer.** Just because data is accessible doesn't mean compiling it is appropriate. Think about what you'd want if you were the subject.

---

## 10. Combining Channels — The Multi-Channel Research Flow

One research project often hits multiple channels. The pattern:

```
SCOPE.md → which channels are relevant?

For each channel, a focused sub-research:
  - Channel 1 (e.g., Amazon): saved to ./research/amazon-findings.md
  - Channel 2 (e.g., Reddit): saved to ./research/reddit-findings.md
  - Channel 3 (e.g., News): saved to ./research/news-findings.md

Then a cross-channel synthesis:
  - Where do channels agree?
  - Where do they contradict? (Usually: quantitative channels like
    Amazon/App stores disagree with qualitative channels like Reddit —
    both are real, you need both.)
  - What's the picture that emerges only when you stack them?
```

**Example — launching a consumer product:**

| Channel | What it tells you |
|---------|-------------------|
| Amazon | What competing products exist, what they cost, what reviewers complain about |
| Reddit | What problems people are trying to solve (before they even know about these products) |
| App stores | What digital alternatives exist |
| YouTube | Who the influencers are, what they recommend |
| News | What's been funded recently, who's getting coverage |
| PDFs (analyst reports) | Market size, growth rate, projections |

Six channels, one product decision. Each is weak on its own. Together they're a complete picture.

### The multi-channel CLAUDE.md addition

When using multiple channels, add this to your research CLAUDE.md:

```
## Channel strategy
- Every research project identifies 2-4 relevant channels up front.
- Each channel gets its own file: ./research/[channel]-findings.md.
- Cross-channel synthesis happens LAST, after all channels are gathered.
- In the final report, tag every claim with its channel source.
```

---

## 11. Common Mistakes Across All Channels

### Mistake 1 — Picking the channel that's easiest, not best

Amazon is easy. LinkedIn is hard. But if your research is about an enterprise buyer, LinkedIn might be the only signal that matters. Pick channels based on where your answer lives, not where it's easy to look.

### Mistake 2 — Treating channels as interchangeable

Reddit tells you *what people say*. Amazon tells you *what people buy*. YouTube tells you *who people listen to*. They're not the same signal. Don't substitute one for another just because one is easier to access.

### Mistake 3 — Skipping the methodology

Specialized channels don't replace Module 21's five-phase method. They *feed into* it. A Reddit scrape with no scoping, no verification, no synthesis is just a pile of text. Run the phases.

### Mistake 4 — Violating terms of service

Every platform has rules. Read them. When in doubt, stay at the scale of "one researcher, manual rate". Build pipelines only on platforms with official APIs or explicit scraping permission.

### Mistake 5 — Not budgeting for channel costs

Apify, Bright Data, Exa, Tavily, Perplexity — specialized tools have real costs. A heavy-use month on Bright Data can be $500+. Budget before you run. Track with the cost-tracker hook from Module 11.

### Mistake 6 — Loading raw data into Claude's context

A full Amazon scrape or Reddit pull is enormous. Don't paste it all into Claude. Save to disk. Load selectively. Let sub-agents handle the volume and return synthesized slices.

### Mistake 7 — Ignoring source date

Every channel has a time-decay problem. A Reddit thread from 2023 about "the current state of X" is history, not news. Amazon reviews from before a product redesign are noise. YouTube interviews from 2 pivots ago mislead. Always capture and filter by date.

---

## 12. Workshop Exercise: The Multi-Channel Research

Set aside 90 minutes. Pick one question that actually needs multi-channel research.

### Step 1 — Define the question and map channels (10 min)

Write a `SCOPE.md` (Module 21 template). Then add:

```
## Channel strategy for this project

Relevant channels (ranked by expected value):
1. [Channel] — because [what I expect to learn]
2. [Channel] — because [what I expect to learn]
3. [Channel] — because [what I expect to learn]

Channels explicitly NOT used:
- [Channel] — because [reason]
```

### Step 2 — Execute each channel in parallel (40 min)

For each channel, run the core prompt from its section. Save output to `./research/[channel]-findings.md`.

Do them in parallel if you can (Module 21, Pattern: parallel sub-agents).

### Step 3 — Cross-channel synthesis (20 min)

```
Read all files in ./research/. Write a cross-channel synthesis:

1. What's the SHARED picture — what does every channel confirm?
2. What's the CONTRADICTION — where do channels disagree?
3. What's the HIDDEN — what only shows up in one channel but matters?
4. What's the NEXT QUESTION — what did this research reveal that we
   now need to go research?

Save as ./research/synthesis-[date].md.
```

### Step 4 — Produce the final deliverable (15 min)

Follow Module 21 Phase 5 — full report + executive brief + 90-second verbal.

### Step 5 — Retrospective (5 min)

Which channel delivered the most unique signal? Which was weakest? Next time, which would you drop? Which would you add? Note for next project.

### What you should have at the end

- A multi-channel research folder with per-channel findings and a synthesis
- A final briefing document
- A personal ranking of channels by signal-strength for *your* kind of research
- Confidence that you can tackle any research question now, because you know where the information lives

---

## Summary — What You Now Know

1. **The channels** — Amazon, Reddit/Quora (community Q&A), NotebookLM, YouTube/podcasts, PDFs, app stores, news, people.
2. **The tools for each** — MCPs, APIs, Playwright, NotebookLM integrations.
3. **The setup** — exact commands to get each channel running.
4. **The prompts** — copy-paste for each channel, tuned for the methodology from Module 21.
5. **The combination pattern** — how to stack channels for a single research project.
6. **The pitfalls** — legal, ethical, methodological, and cost-related.

Channels change the *where*. Methodology (Module 21) defines the *how*. Put them together and you have a research capability most organizations don't have even with a full research team.

---

## Next Module

**Module 23 (upcoming): Research Agents** — turn a multi-channel research project into a scheduled agent that re-runs weekly, monitors for changes, and alerts on inflection points. This is where Module 13 (Agents) meets Module 21 (Methodology) meets Module 22 (Channels).

---

## Appendix — Quick Reference

**Channel → primary tool → typical prompt starts:**

| Channel | Tool | Prompt pattern |
|---------|------|----------------|
| Amazon | Playwright / Apify | "Visit [URL] and extract…" |
| Reddit | JSON API / PRAW | "Pull top 50 posts from r/[X]…" |
| Quora | WebSearch + WebFetch | "site:quora.com [topic] — pull top 10 Q&A…" |
| NotebookLM | NotebookLM MCP | "Query my [notebook] for…" |
| YouTube | youtube-transcript-mcp | "Transcript and analyze [URL]…" |
| PDFs | Read tool | "Read [path] and extract…" |
| App Stores | Playwright | "Scrape recent 200 reviews from…" |
| News | Tavily with date filter | "News about [X] in last 90 days…" |
| People | WebSearch (public only) | "Research [person] using public sources…" |

**When to combine:**

| Question type | Minimum channels |
|---------------|------------------|
| "Should we launch product X?" | Amazon + Reddit + App stores |
| "What's happening at Company Y?" | News + PDFs + YouTube |
| "Who is Person Z?" | YouTube + People + News |
| "State of Market M?" | PDFs + News + Reddit (+ NotebookLM for depth) |

**Cost calibration (per research project, typical):**

- Single-channel, light use: $0.50-$2 in API costs
- Multi-channel, medium use: $3-$10
- Multi-channel, heavy (Apify/Bright Data scale): $20-$100+

Always budget before you start. Track with `cost-tracker.sh`.
