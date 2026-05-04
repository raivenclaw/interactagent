# Module 16: Agents Level 4 -- Multi-Agent Systems

You've built agents that report (Level 1), agents that decide (Level 2), and agents that act with your permission (Level 3). Each one does one job well.

Level 4 is about making them work together.

Think about how a real team works. You don't have one person who does market research AND writes copy AND designs assets AND handles SEO. You have specialists. Each one is great at their thing. And you have a project manager who coordinates them -- breaks the job into pieces, hands each piece to the right specialist, and assembles the results.

That's exactly what a multi-agent system is. One orchestrator. Multiple specialists. Each specialist works independently, with focused context, on a specific subtask. The orchestrator assembles their work into a finished product.

This is the most powerful pattern in this course. It's also the most complex. Don't build this until Levels 1-3 are working reliably. Multi-agent complexity amplifies every bug below it.

---

## 1. The Orchestrator + Specialist Pattern

Every multi-agent system follows the same structure:

```
                    You (human)
                        |
                   Orchestrator
                  /     |      \
           Specialist  Specialist  Specialist
            (Agent A)  (Agent B)   (Agent C)
                  \     |      /
                   Orchestrator
                        |
                  Assembled Output
                        |
                    You (review)
```

### The Orchestrator

The orchestrator is the project manager. It:
1. Receives the task ("We're launching a new product")
2. Breaks it into subtasks ("I need market research, product copy, and SEO analysis")
3. Dispatches each subtask to the right specialist
4. Waits for all specialists to finish
5. Assembles the results into a coherent deliverable
6. Presents it for your review

The orchestrator doesn't do the actual work. It manages.

### The Specialists

Each specialist is a focused agent that:
1. Receives a specific, narrow task
2. Has its own context (tools, prompts, instructions)
3. Does its work independently
4. Returns its results to the orchestrator

The specialists don't know about each other. They don't need to. The market research agent doesn't know about the copywriting agent. It just does market research. The orchestrator handles the coordination.

### Why This Pattern Works

**Clean context.** Each specialist starts with a clean whiteboard. The research agent gets research instructions. The copywriting agent gets copywriting instructions. Nobody is trying to do everything at once, which means nobody is confused about their job.

**Parallel execution.** If three subtasks don't depend on each other, they can run at the same time. Market research, copy, and SEO analysis can all happen simultaneously. This is faster than doing them sequentially.

**Better quality.** A specialist with focused instructions produces better work than a generalist trying to juggle five tasks. This is true for humans and it's true for AI agents.

**Easier debugging.** When something goes wrong, you know exactly which specialist produced the bad output. You fix that one agent's prompt. The others stay untouched.

---

## 2. When to Use Multi-Agent vs. Single Agent

Not everything needs multiple agents. In fact, most things don't. Use this simple test:

**Use a single agent when:**
- The task is sequential (Step 1 must finish before Step 2 starts)
- The task has one type of work (all research, or all writing, or all analysis)
- The output is one thing (a report, a response, an alert)

**Use multiple agents when:**
- You have 3+ independent subtasks that can run in parallel
- The subtasks require different types of expertise (research vs. writing vs. design)
- The final output is an assembled product from multiple components
- A single prompt would be too long and confusing for Claude to handle well

### The Dinner Party Analogy

Making dinner for yourself: one person, one task, one agent. Cook the meal.

Hosting a dinner party for 20 people: one coordinator, multiple specialists. Someone handles appetizers. Someone handles the main course. Someone handles drinks. Someone handles music and ambiance. The coordinator makes sure everything is ready at the same time.

If you try to do a 20-person dinner party like a solo meal -- one step at a time, all by yourself -- it takes forever and the appetizers are cold by the time the main course is done.

---

## 3. Examples for Your Ecommerce Business

### New Product Launch Pipeline

This is the most practical multi-agent system for ecommerce founders.

**Orchestrator receives:** "We're launching Midnight Roast on April 15th."

**Orchestrator dispatches:**

| Agent | Task | Output |
|---|---|---|
| Market Research | Analyze competitors selling similar products. What's their pricing, positioning, messaging? What gap does our product fill? | Competitive analysis report |
| Content Writer | Write 3 product description variants (emotional, practical, premium). Write 7 days of social media posts. Write launch email announcement. | Content package |
| SEO Analyst | Research keywords for this product category. Write meta title + description. Outline a blog post targeting the primary keyword. | SEO package |

**Orchestrator assembles:** A "Launch Kit" document with all three sections, cross-referenced (the content uses insights from the research, the SEO keywords are woven into the copy).

**You review:** The assembled kit. Approve, edit, or request changes to any section.

### Weekly Business Review

Every Monday, instead of checking five dashboards yourself:

**Orchestrator triggers:** Monday at 7am.

**Orchestrator dispatches:**

| Agent | Task | Output |
|---|---|---|
| Sales Analyst | Pull Shopify data: revenue, orders, AOV, top products, comparison to last week | Sales section |
| Marketing Analyst | Pull ad performance: spend, ROAS, CTR, top campaigns, cost per acquisition | Marketing section |
| Customer Analyst | Pull review sentiment, support tickets, NPS trend, common complaints this week | Customer section |

**Orchestrator assembles:** A single "Weekly Business Review" email with all three sections, executive summary at the top, and flagged items that need your attention.

**You receive:** One email that replaces three dashboard sessions.

### Client Brief Processor

For agencies and service businesses:

**Orchestrator receives:** A new client brief (uploaded document or form submission).

**Orchestrator dispatches:**

| Agent | Task | Output |
|---|---|---|
| Research Agent | Analyze the client's competitors: 3-5 competitor websites, their positioning, their visual identity, their pricing | Competitive landscape report |
| Brand Agent | Based on the brief and competitive research, draft positioning: tagline options, tone of voice, key differentiators | Brand strategy draft |
| Content Agent | Based on positioning, draft: homepage headline + subhead, about page copy, 3 product description samples | First-draft copy |

**Orchestrator assembles:** A "Client Discovery Package" with research, strategy, and first-draft content. Ready for your review before the client sees anything.

---

## 4. Where MCP Makes Multi-Agent Systems Powerful

Remember MCP servers from Module 9? This is where they really shine.

Each specialist agent can have its own MCP connections:

- **Research agent** uses Playwright MCP (web browsing) + Brave Search MCP (search engine)
- **Sales agent** uses Shopify MCP (store data) + Stripe MCP (payment data)
- **Content agent** uses Claude API (writing) + Notion MCP (content calendar)
- **Design agent** uses Figma MCP (design files) + Fal.ai (image generation)

When you chain these together through an orchestrator, you get workflows that would take a human team days:

**Design brief to product page:**
1. Design agent reads the brief from Figma MCP
2. Design agent extracts brand tokens (colors, fonts, spacing)
3. Content agent writes product descriptions using brand voice
4. SEO agent optimizes for keywords
5. Orchestrator assembles a complete product page
6. You review and approve

That's an afternoon of work for a human team. It's 15 minutes for a multi-agent system.

---

## 5. Step-by-Step Build: Product Launch Agent System

Let's build the most useful multi-agent system for an ecommerce founder: the product launch pipeline.

### What You'll Get

You say: "We're launching Midnight Roast on April 15th."

Twenty minutes later, you receive a complete launch kit:
- Competitive analysis (who else sells this, how they position it, pricing comparison)
- 3 product description variants
- 7 days of social media posts
- Launch email announcement
- SEO keywords, meta tags, and blog post outline
- Everything assembled in one document, ready for your review

### The Full Spec

```
AGENT SYSTEM: Product Launch Kit Generator

ORCHESTRATOR TASK:
- Trigger: manual (you tell it to run) or webhook
- Input: product name, product description, launch date, target audience, 
  price point, key differentiators
- Coordinates three specialist agents
- Assembles final launch kit
- Sends for human approval

SPECIALIST 1: Market Research Agent

Input from orchestrator:
- Product name and description
- Target audience
- Key differentiators

Task:
- Search for 5 competitors selling similar products (use web search)
- For each competitor: capture product name, price, positioning statement, 
  key selling points
- Analyze the competitive landscape: where is the gap? 
  How should we position differently?
- Identify target audience pain points based on competitor reviews

Output (structured):
- Competitor comparison table
- Positioning recommendation (2-3 sentences)
- Target audience insight (what they care about most)
- Suggested price positioning (premium, competitive, value)

Claude prompt for this agent:
"You are a market research analyst for an ecommerce brand. 
Your job is to analyze the competitive landscape for a new product launch.

Product: {product_name}
Description: {product_description}
Target audience: {target_audience}
Our price point: {price}

Research 5 competitors selling similar products. For each one, document:
- Product name and brand
- Price
- How they position it (their key message)
- Their top 3 selling points
- Weaknesses or gaps in their offering

Then provide:
1. A competitor comparison table
2. Your recommendation for how we should position differently
3. Key audience insight: what does our target audience care about 
   that competitors aren't addressing?
4. Price positioning advice: should we be premium, competitive, or value?

Be specific. Use real data. No fluff."

---

SPECIALIST 2: Content Agent

Input from orchestrator:
- Product name, description, price
- Market research output from Specialist 1 (positioning recommendation, 
  audience insights)
- Brand voice guidelines

Task:
- Write 3 product description variants:
  a. Emotional: story-driven, lifestyle-focused, aspirational
  b. Practical: features and benefits, clear and direct
  c. Premium: elevated language, exclusivity, craftsmanship
- Write 7 social media posts (one per day for launch week):
  Day 1: Teaser
  Day 2: The problem this product solves
  Day 3: Behind the scenes
  Day 4: Feature highlight
  Day 5: Customer benefit
  Day 6: Launch day announcement
  Day 7: Social proof / early reactions
- Write a launch email:
  Subject line (3 options)
  Preview text
  Body copy (announcement, key features, CTA)

Output (structured):
- 3 product descriptions (labeled by variant)
- 7 social media posts (labeled by day and angle)
- Launch email (subject lines, preview text, body)

Claude prompt for this agent:
"You are a senior copywriter for an ecommerce brand. 
You're writing the launch content for a new product.

Product: {product_name}
Description: {product_description}
Price: {price}
Launch date: {launch_date}
Brand voice: {brand_voice_guidelines}

Market positioning (from research): {positioning_recommendation}
Target audience insight: {audience_insight}

Write the following:

1. THREE product descriptions (150-200 words each):
   a. EMOTIONAL: Tell a story. Make the reader feel something. 
      Focus on the lifestyle and experience.
   b. PRACTICAL: Clear, direct, benefit-driven. 
      What does this product do and why should I care?
   c. PREMIUM: Elevated, exclusive. 
      Emphasize craftsmanship, quality, and taste.

2. SEVEN social media posts for launch week:
   Day 1 (Teaser): Build curiosity without revealing the product
   Day 2 (Problem): Name the problem this product solves
   Day 3 (Behind the scenes): How it was made, why it matters
   Day 4 (Feature): Highlight the standout feature
   Day 5 (Benefit): What changes in the customer's life
   Day 6 (Launch): It's here. Clear CTA to buy.
   Day 7 (Social proof): Early reviews, reactions, excitement

   Each post: 1-3 sentences + relevant hashtags. 
   Platform: Instagram (adapt tone for Twitter and LinkedIn if needed).

3. LAUNCH EMAIL:
   - 3 subject line options (under 50 characters each)
   - Preview text (under 100 characters)
   - Body: announce the product, 3 key selling points, 
     one clear CTA. Under 300 words.

Make everything consistent with the brand voice. 
Use the positioning insights from the research."

---

SPECIALIST 3: SEO Agent

Input from orchestrator:
- Product name, description, category
- Market research output (competitor keywords, audience language)

Task:
- Research primary and secondary keywords for this product
- Write optimized meta title (under 60 characters)
- Write meta description (under 160 characters)
- Suggest URL slug
- Outline a blog post targeting the primary keyword 
  (title, 5 section headings, key points for each)

Output (structured):
- Primary keyword + search volume estimate
- 5-10 secondary keywords
- Meta title
- Meta description
- URL slug
- Blog post outline

Claude prompt for this agent:
"You are an SEO specialist for an ecommerce brand. 
You're optimizing the launch of a new product.

Product: {product_name}
Description: {product_description}
Category: {product_category}
Competitor keywords: {from research agent}

Provide:
1. Primary keyword (the main search term people would use to find this product)
2. 5-10 secondary keywords (related terms, long-tail variations)
3. Meta title (under 60 characters, includes primary keyword)
4. Meta description (under 160 characters, compelling, includes primary keyword)
5. Suggested URL slug (short, clean, keyword-rich)
6. Blog post outline targeting the primary keyword:
   - Title (engaging, includes keyword)
   - 5 section headings
   - 2-3 bullet points per section (what to cover)
   - Suggested internal links
   
Be practical. Focus on keywords with purchase intent, 
not informational keywords."

---

ORCHESTRATOR ASSEMBLY:

After all three specialists return their output:

1. Create a "Launch Kit" document with sections:
   - Executive Summary (orchestrator writes this: 
     3-sentence overview of launch strategy)
   - Competitive Landscape (from Research Agent)
   - Product Descriptions (from Content Agent)
   - Social Media Calendar (from Content Agent)
   - Launch Email (from Content Agent)
   - SEO Strategy (from SEO Agent)

2. Cross-reference: check that content uses the positioning 
   from research, and SEO keywords appear in the copy. 
   Flag any misalignments.

3. Send the assembled kit for human review:
   - Full document via email
   - Summary + link via Slack
   - "Your launch kit for [product] is ready for review"

4. After approval:
   - Product descriptions can be pushed to Shopify (if Shopify MCP connected)
   - Social posts can be scheduled (if social media API connected)
   - Email can be queued in email platform
   - Blog post outline goes to content queue

CONSTRAINTS:
- All specialists run in parallel (they don't depend on each other, 
  except Content Agent needs Research Agent's positioning insight -- 
  so Research runs first, then Content and SEO run in parallel)
- Nothing gets published without human approval
- Each specialist logs its own execution time and any errors
- If one specialist fails, the others still complete -- 
  the kit is delivered with a note about the missing section
- Total execution time target: under 10 minutes
```

### Step 1: Build the Orchestrator

Tell Claude:

> "Build a Trigger.dev task called 'product-launch-orchestrator'. It receives a product launch brief (name, description, price, launch date, target audience, key differentiators) and coordinates three specialist agents. Build the orchestrator first -- just the coordination logic. We'll build each specialist next."

The orchestrator should:
- Accept the input
- Dispatch the Research Agent first (Content Agent needs its output)
- Once Research is done, dispatch Content Agent and SEO Agent in parallel
- Wait for all agents to finish
- Assemble the results
- Send for review

### Step 2: Build the Market Research Agent

> "Build the Market Research specialist agent. It receives a product brief and competitive context, searches for 5 competitors, and returns a structured competitive analysis. Use web search to find real competitors. Return the output as structured JSON that the orchestrator can use."

### Step 3: Build the Content Agent

> "Build the Content specialist agent. It receives the product brief PLUS the positioning recommendation from the Research Agent. It writes 3 product description variants, 7 social media posts, and a launch email. Use our brand voice guidelines. Return everything as structured JSON."

### Step 4: Build the SEO Agent

> "Build the SEO specialist agent. It receives the product brief and competitor keywords. It returns primary/secondary keywords, meta tags, URL slug, and blog post outline. Return as structured JSON."

### Step 5: Build the Assembly Step

> "Build the assembly step in the orchestrator. Take the JSON outputs from all three specialists and assemble them into a clean, readable Launch Kit document (markdown format). Add an executive summary at the top. Cross-reference: make sure the content reflects the positioning from research, and SEO keywords appear in the copy. Flag any misalignments."

### Step 6: Build the Review Interface

> "Send the assembled Launch Kit to me via email (full document) and Slack (summary with key highlights). Include an 'Approve' button in Slack. On approval, log the kit as approved and make it available for execution (publishing descriptions, scheduling posts)."

### Step 7: Test It

> "I want to test the full pipeline with a sample product. Use this brief:
> Product: Midnight Roast
> Description: Our darkest, boldest coffee blend. Slow-roasted beans from three regions, balanced with notes of dark chocolate and cherry.
> Price: EUR 18.95
> Launch date: April 15
> Target audience: Coffee enthusiasts who prefer dark roasts
> Key differentiators: Triple-origin blend, 48-hour slow roast process, plastic-free packaging
> 
> Run the full pipeline and show me the assembled Launch Kit."

Review the output. Is the research useful? Is the copy on-brand? Are the SEO keywords relevant? Adjust prompts for each specialist based on what you see.

---

## 6. Common Mistakes

### Mistake 1: Building Level 4 Before Level 2 Works

Multi-agent systems amplify every bug below them. If your classification prompts are unreliable (Level 2), adding more agents doesn't fix that -- it multiplies the unreliability. If your approval flow is clunky (Level 3), adding more agents means more clunky approvals.

Get each level working reliably before adding the next. The foundation matters more than the ceiling.

### Mistake 2: No Logging

When something fails silently in a multi-agent system, you don't know which agent caused the problem. Was it the research agent finding bad competitors? The content agent writing off-brand copy? The orchestrator assembling things incorrectly?

**Every specialist must log:**
- When it started
- What input it received
- What it produced
- How long it took
- Any errors it encountered

Without logs, debugging a multi-agent system is like debugging a black box. With logs, you can trace exactly where things went wrong.

### Mistake 3: Too Much Autonomy Too Fast

When you have three agents producing content that an orchestrator assembles into a deliverable, the temptation is to auto-publish. Don't.

Start with human approval at every stage:
1. First: approve the assembled output before anything gets published
2. After a week: auto-approve certain types (routine reports, internal summaries)
3. After a month: auto-publish low-stakes content, approve high-stakes content
4. Never: auto-publish customer-facing content without review

Remove approval gates one at a time. Never all at once.

### Mistake 4: Agents Writing to the Same Files or Database Tables

If two specialist agents write to the same database table or file at the same time, you get race conditions -- data gets overwritten, entries get duplicated, things break in ways that are very hard to debug.

**Rule: each specialist has its own isolated workspace.** It writes to its own output. The orchestrator is the only one that reads from all specialists and writes to the final output. Specialists never talk to each other directly.

### Mistake 5: Making the Orchestrator Too Smart

The orchestrator should coordinate, not create. If your orchestrator is doing heavy analysis, writing content, AND coordinating specialists, it's trying to do too much. Its context gets cluttered. Its output gets worse.

Keep the orchestrator thin:
- Receive the task
- Break it into subtasks
- Dispatch to specialists
- Assemble results
- Send for review

That's it. All the real work happens in the specialists.

---

## 7. The Architecture Decision: Sequential vs. Parallel

Some multi-agent workflows are purely parallel (all specialists can run at the same time). Others have dependencies (Specialist B needs output from Specialist A).

### Purely Parallel

```
Orchestrator
  ├── Agent A (runs immediately)
  ├── Agent B (runs immediately)  
  └── Agent C (runs immediately)
All finish → Orchestrator assembles
```

Example: Weekly business review. Sales data, marketing data, and customer data are all independent. Pull them all at the same time.

### Sequential with Parallel Branches

```
Orchestrator
  └── Agent A (runs first -- research)
        ├── Agent B (runs after A -- uses A's output)
        └── Agent C (runs after A -- uses A's output)
All finish → Orchestrator assembles
```

Example: Product launch. Research runs first because Content and SEO need the competitive positioning. But Content and SEO don't need each other, so they run in parallel after Research finishes.

### Fully Sequential

```
Orchestrator
  └── Agent A → Agent B → Agent C
All finish → Orchestrator assembles
```

Example: Content pipeline where each step depends on the previous one. Research → outline → draft → edit. Each step feeds the next.

### How to Decide

Ask: "Can this specialist do its job without seeing the other specialists' output?"

- Yes → parallel
- No → sequential (run the dependency first, then parallelize what you can)

When in doubt, start sequential. It's slower but simpler to debug. Optimize to parallel once you've verified each specialist works correctly.

---

## 8. Scaling Up: When Multi-Agent Systems Grow

Once you've built your first multi-agent system, you'll see opportunities everywhere. Here's how it scales:

### Adding More Specialists

Your product launch system works great. Now you want to add:
- A **Pricing Agent** that analyzes competitor pricing and recommends your optimal price point
- A **Visual Direction Agent** that suggests product photography angles, backgrounds, and styling based on brand guidelines and competitor analysis
- An **Ad Copy Agent** that writes Facebook and Google ad variations for the launch

Each one is a new specialist. The orchestrator dispatches one more task, waits for one more result, and includes one more section in the assembled kit. The existing specialists don't change at all.

### Chaining Multi-Agent Systems

Your launch system creates a launch kit. But what about post-launch? Build a second multi-agent system:

**Post-Launch Monitor (runs daily for 30 days after launch):**
- Sales Tracker Agent: daily sales, conversion rate, how it compares to projections
- Review Monitor Agent: sentiment analysis on early reviews (your Level 2 agent from Module 14)
- Ad Performance Agent: which ads are working, which should be paused
- Orchestrator assembles a daily post-launch report

The output of System 1 (the launch) feeds into System 2 (the monitoring). You're building compound intelligence.

### The Compound Effect

One Level 1 agent saves you 10 minutes a day.
One Level 2 agent saves you 30 minutes a day and catches things you'd miss.
One Level 3 agent saves you an hour a day and handles routine customer interactions.
One Level 4 system replaces a process that used to take a day.

Stack them. The compound effect is significant: you're not just saving time on individual tasks. You're automating entire workflows that used to require multiple people and multiple days.

---

## 9. Quick Wins -- Copy-Paste Prompts

### Quick Win 1: Weekly Business Review System

```
Build a multi-agent system that produces a weekly business review.

Orchestrator: runs every Monday at 7am, dispatches three agents in parallel.

Agent 1 -- Sales Analyst:
- Connect to Shopify
- Pull: total revenue, total orders, AOV, top 10 products by revenue, 
  revenue by day (Mon-Sun), comparison to previous week
- Format as the "Sales" section of a weekly report

Agent 2 -- Marketing Analyst:  
- Connect to ad platform (Meta Ads API or manual data input)
- Pull: total ad spend, ROAS, CTR, top 3 campaigns, cost per acquisition
- Format as the "Marketing" section

Agent 3 -- Customer Analyst:
- Pull new reviews from Shopify
- Analyze sentiment (positive/negative/neutral breakdown)
- Identify top 3 positive themes and top 3 negative themes
- Count support tickets (if support system API available)
- Format as the "Customer" section

Orchestrator assembles:
- Executive summary (3 bullet points: what went well, what needs attention, 
  key metric changes)
- Sales section
- Marketing section  
- Customer section
- Action items (based on data: "Revenue down 15% -- investigate" 
  or "Review sentiment declining -- check product quality")

Send as one email to the team. Clean format, scannable in 2 minutes.
```

### Quick Win 2: Content Production Pipeline

```
Build a multi-agent system that produces a week of content from a single topic.

Input: a topic or theme (e.g., "sustainable packaging" or "behind the scenes of our roasting process")

Agent 1 -- Research:
- Find 3-5 interesting angles on this topic
- Pull relevant statistics or facts
- Check what competitors have posted about this topic
- Output: research brief with angles and supporting data

Agent 2 -- Long-form Writer (runs after Agent 1):
- Write a blog post (800-1200 words) using the best angle from research
- Include SEO keywords naturally
- End with a CTA related to our products

Agent 3 -- Social Writer (runs after Agent 1):
- Create 5 social media posts derived from the research:
  1. Key insight post (share one surprising fact)
  2. Behind-the-scenes post (personal/brand story angle)
  3. Question/engagement post (ask the audience something)
  4. Tip/value post (teach something useful)
  5. Product tie-in post (connect the topic to our product)

Agent 4 -- Email Writer (runs after Agent 1):
- Write a newsletter edition on this topic
- Subject line, preview text, body (under 500 words)
- Personal tone, one CTA

Orchestrator assembles:
- Content calendar for the week
- Blog post (draft)
- 5 social posts (draft)
- Newsletter (draft)
- All sent for approval before publishing
```

### Quick Win 3: Client Onboarding Package

```
Build a multi-agent system that creates an onboarding package 
when a new client signs up.

Input: client name, website URL, industry, what they hired you for

Agent 1 -- Competitor Research:
- Visit the client's website (Playwright MCP)
- Find 3-5 competitors in their space
- Analyze each competitor: visual style, messaging, strengths, weaknesses
- Output: competitive landscape report

Agent 2 -- Brand Analysis (runs after Agent 1):
- Analyze the client's current brand (from their website)
- Compare to competitors
- Identify gaps and opportunities
- Draft initial positioning recommendations

Agent 3 -- Project Scaffolding:
- Create the client folder structure (using your template)
- Set up the client CLAUDE.md with initial brand notes
- Create placeholder files for deliverables

Orchestrator assembles:
- Client discovery document (research + brand analysis)
- Project folder ready to work in
- Summary sent to you: "[Client] onboarding package ready for review"
```

---

## 10. Workshop Exercise: Build a Multi-Agent System

Time for the big one. Pick a system:

### Option A: Product Launch Kit
Build the full product launch pipeline from Section 5. Research, content, SEO, assembled into one kit.

### Option B: Weekly Business Review
Build a weekly report system with parallel agents for sales, marketing, and customer data.

### Option C: Content Production Line
Build a content system that takes one topic and produces a blog post, social posts, and a newsletter.

### Option D: Your Own System
Think about a process in your business that involves multiple types of work happening in parallel. That's your multi-agent system.

### The Steps

1. Map out the workflow: what subtasks exist? Which ones can run in parallel?
2. Design each specialist: what input does it need? What does it produce?
3. Design the orchestrator: how does it dispatch, wait, and assemble?
4. Build the orchestrator first (just the coordination logic)
5. Build each specialist one at a time -- test each in isolation
6. Connect them through the orchestrator
7. Test the full pipeline end-to-end
8. Review the assembled output -- is it coherent? Is anything missing?
9. Add the approval gate (human reviews before anything gets published)
10. Deploy

### What Success Looks Like

You should have:
- An orchestrator that coordinates multiple specialist agents
- Each specialist producing focused, high-quality output
- Results assembled into a coherent deliverable
- A human approval gate before anything goes live
- Logs for every specialist (so you can debug when things go wrong)
- A process that used to take a day, now takes minutes

---

## 11. Key Takeaways

1. **Orchestrator + Specialists is the pattern.** One coordinator, multiple focused workers. The orchestrator manages. The specialists produce. This mirrors how real teams work and it's just as effective for AI agents.

2. **Each specialist gets a clean whiteboard.** Focused context produces better output. Don't make one agent do research AND writing AND SEO. Split them up. Give each one clear, narrow instructions.

3. **Parallel execution is the speed advantage.** Independent subtasks run at the same time. A product launch kit that would take hours sequentially takes minutes in parallel.

4. **Don't build Level 4 until Levels 1-3 work.** Multi-agent complexity amplifies every bug below it. If your classification prompts are unreliable, multiple agents making unreliable classifications is worse, not better. Fix the foundation first.

5. **Log everything.** When a multi-agent system produces bad output, you need to trace which specialist caused it. Without logs, you're guessing. With logs, you're debugging.

6. **Start with human approval everywhere.** The assembled output goes through you before anything gets published, sent, or executed. Remove approval gates one at a time as you build trust. Never all at once.

7. **Specialists never talk to each other.** They receive input from the orchestrator and return output to the orchestrator. If Agent B needs output from Agent A, the orchestrator passes it. This keeps the system clean and debuggable.

8. **This is your operating system.** Level 1 agents are alarms. Level 2 agents are filters. Level 3 agents are assistants. Level 4 agents are teams. Stack all four levels and you have a business that runs systems while you focus on strategy. That's the entire point of this course.
