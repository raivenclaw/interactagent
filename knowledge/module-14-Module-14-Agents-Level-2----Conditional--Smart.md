# Module 14: Agents Level 2 -- Conditional & Smart

Your Level 1 agent is a clock. It runs, it reports, it goes back to sleep. Useful, but dumb. It doesn't know the difference between a good day and a bad day. It sends you the same email whether you made EUR 50,000 or EUR 50.

Level 2 is where agents start thinking.

Not "artificial intelligence taking over the world" thinking. More like: a good assistant who knows when to bother you and when to stay quiet. An assistant who filters noise, sorts priorities, and only flags the stuff that actually matters.

By the end of this module, your agents will make decisions. They'll look at data, judge whether it's worth acting on, and route it to the right place. The key insight: "Is this worth acting on?" is a prompt you send to Claude, not an if-statement you write in code.

---

## 1. The Upgrade: From Reporter to Decision Maker

Here's the difference between Level 1 and Level 2:

**Level 1:** "Here are all your reviews from yesterday." (You get 47 reviews. You read all 47. Most are fine.)

**Level 2:** "You got 47 reviews. 45 were positive. 2 were negative -- here they are, here's what went wrong, and here's a draft response for each."

Same data. Completely different usefulness. The Level 2 agent did what you would have done -- scan for problems, ignore the noise, focus on what needs attention. It just did it before you woke up.

### The Three Superpowers of Level 2

**1. Filtering -- Ignore the noise.**
Not everything deserves your attention. A Level 2 agent decides what matters and what doesn't. A competitor changed their homepage banner? Probably not worth a notification. They dropped their prices by 20%? That's worth knowing about.

**2. Routing -- Send to the right place.**
Different things need different people. A customer complaint goes to support. A wholesale inquiry goes to you. A spam email goes nowhere. Instead of everything landing in one inbox, the agent sorts it for you.

**3. Scoring -- Rate importance.**
Not all leads are equal. Not all reviews are equal. Not all price changes are equal. A Level 2 agent assigns a score or priority so you deal with the important stuff first.

---

## 2. Using Claude as the Judge

Here's the part that changes everything for non-technical founders.

In traditional automation, decisions are if-statements. `If price dropped more than 10%, send alert.` That works for simple numeric thresholds. But what about "Is this email urgent?" or "Is this review something we should worry about?" or "Is this lead worth pursuing?"

Those aren't math problems. Those are judgment calls. And that's exactly what Claude is good at.

### How It Works

Your agent pulls in a piece of data -- a customer email, a review, a competitor page. Then it sends that data to Claude with a prompt:

```
Here's a customer email we received:

"Hi, I ordered the starter kit three weeks ago and it still hasn't arrived. 
This is my third time reaching out. I'm really frustrated."

Classify this email:
- URGENT: customer is angry, threatening to leave, or has a time-sensitive problem
- FOLLOW_UP: customer needs a response but it's not critical
- INFORMATIONAL: customer is sharing feedback, no response needed
- SPAM: not a real customer inquiry

Return ONLY the classification and a one-sentence reason.
```

Claude responds: `URGENT: Customer has been waiting three weeks and contacted support three times, indicating escalating frustration.`

Your agent now knows what to do. URGENT goes to you immediately. FOLLOW_UP goes into the morning queue. INFORMATIONAL gets logged. SPAM gets ignored.

No if-statements. No complex logic. Just a well-written prompt that asks Claude to make the judgment call.

### The Prompt Is the Logic

This is the key insight for non-technical founders: **the prompt IS the business logic.** You don't need to write code to express "Is this worth acting on?" You write a prompt. The same way you'd brief a human assistant.

"Read this review. Is it positive, negative, or neutral? If it's negative, tell me what went wrong and draft a response."

That's it. That's the code. Claude handles the judgment. The agent handles the routing.

---

## 3. Concepts You Need to Know

Two boring but critical concepts before we build anything.

### Idempotency: Don't Process the Same Thing Twice

Imagine your agent checks for new reviews every hour. At 9am it finds 5 new reviews and processes them. At 10am it runs again. If it doesn't remember what it already processed, it'll process those same 5 reviews again. And again at 11am. And at noon.

**Idempotency** means: running the same task twice produces the same result. In practice, this means tracking what you've already processed.

How to implement it:
- Store the ID of every review/email/order you've processed
- Before processing anything new, check: "Have I seen this before?"
- If yes, skip it. If no, process it and record the ID.

Tell Claude: "Track processed items by ID in a database table. Before processing any item, check if its ID already exists. If it does, skip it."

### Deduplication: Catch the Duplicates

Related but different. Sometimes the same information comes from multiple sources. A customer complains via email AND leaves a negative review AND posts on social media. That's three signals about one problem.

Deduplication means recognizing that these are connected and handling them as one issue, not three.

For Level 2, simple deduplication is enough: check by customer email, order number, or content similarity before creating a new alert.

---

## 4. Examples for Your Ecommerce Business

### Competitor Price Monitor (Smart Version)

**Level 1 version:** Check competitor prices daily, send you a list of all prices.
**Level 2 version:** Check competitor prices daily, only alert you if something meaningful changed.

```
Build me a Trigger.dev task that runs daily at noon.

What it does:
- Scrapes prices from 3 competitor product pages (URLs in a config file)
- Compares today's prices to yesterday's prices (stored in database)
- Uses Claude to analyze the changes

Decision logic (as a Claude prompt):
"Here are the price changes for our competitors today:
[list of changes]
Rate each change: SIGNIFICANT (price drop >10% or new product added), 
MINOR (small adjustment <10%), or NOISE (no real change, just cents).
For SIGNIFICANT changes, explain the business implication."

Output:
- SIGNIFICANT changes: send Slack alert immediately with Claude's analysis
- MINOR changes: include in the weekly summary email
- NOISE: log only, don't notify anyone

Store all prices in a database for historical tracking.
```

### Smart Email Router

```
Build me a Trigger.dev task that runs every 30 minutes.

What it does:
- Checks a shared inbox for new emails (via Gmail API or IMAP)
- For each new email, sends it to Claude with this prompt:

"Classify this customer email:
- COMPLAINT: customer is unhappy about an order, product, or experience
- QUESTION: customer is asking about products, shipping, sizing, etc.
- WHOLESALE: someone asking about bulk orders or B2B
- PARTNERSHIP: collaboration, influencer, or press inquiry
- SPAM: irrelevant, automated, or not a real inquiry

Also rate urgency: HIGH (needs response today), MEDIUM (needs response this week), LOW (can wait)

Return classification, urgency, and a one-line summary."

Routing:
- COMPLAINT + HIGH urgency: Slack DM to founder + add to urgent queue
- COMPLAINT + MEDIUM/LOW: add to support queue, notify support channel
- QUESTION: auto-draft a response using Claude, add to review queue
- WHOLESALE: forward to founder's email with Claude's summary
- PARTNERSHIP: forward to marketing team email
- SPAM: archive, don't notify anyone

Track every email by message ID so nothing gets processed twice.
```

### Review Sentiment Analyzer

```
Build me a Trigger.dev task that runs every evening at 8pm.

What it does:
- Pulls new product reviews from Shopify (since last run)
- For each review, sends to Claude:

"Analyze this product review:
Rating: [stars]
Product: [product name]
Review: [review text]

1. Sentiment: POSITIVE, NEGATIVE, or NEUTRAL
2. Key themes: what specifically did the customer like or dislike? (2-3 bullet points)
3. Quotable: is there a line in this review that would work well as a testimonial? If yes, extract it.
4. Action needed: does this review require a response? If yes, draft one in our brand voice (friendly, direct, appreciative)."

Output:
- POSITIVE reviews with quotable text: add to a "testimonials" database table
- NEGATIVE reviews: send Slack alert with full review + suggested response
- All reviews: log to database with sentiment score and themes
- Weekly: compile review themes into a "Voice of Customer" summary

Never process the same review twice (track by review ID).
```

### Lead Scoring Agent

```
Build me a Trigger.dev task that runs whenever a new lead comes in (webhook trigger).

What it does:
- Receives new signup/inquiry data via webhook
- Enriches the lead: check their company website, LinkedIn, any available data
- Sends to Claude:

"Score this lead for a premium ecommerce brand:

Name: [name]
Email: [email]
Company: [company]
Website: [website]
Message: [their inquiry message]
Source: [where they came from]

Score 1-10 based on:
- Company size and relevance (are they in our target market?)
- Inquiry quality (specific questions vs. generic)
- Budget signals (asking about pricing, mentioning quantities)
- Engagement (how did they find us?)

Return: score (1-10), reasoning (2-3 sentences), and recommended action:
- FOUNDER_CALL: score 8-10, route to founder for personal follow-up
- TEAM_FOLLOW_UP: score 5-7, route to sales team
- AUTO_RESPOND: score 1-4, send templated response
- IGNORE: spam or irrelevant"

Routing:
- FOUNDER_CALL: Slack DM to founder with full lead profile and Claude's analysis
- TEAM_FOLLOW_UP: add to CRM, notify sales channel
- AUTO_RESPOND: draft and queue email for review
- IGNORE: log and archive
```

---

## 5. Step-by-Step Build: Smart Review Monitor

Let's build the most universally useful Level 2 agent for ecommerce: one that watches your reviews, understands them, and acts differently based on what it finds.

### What You'll Get

Instead of checking reviews manually, your agent:
- Pulls new reviews every evening
- Classifies each one (positive/negative/neutral)
- Extracts quotable text from positive reviews for your marketing
- Drafts responses to negative reviews and alerts you on Slack
- Tracks everything so nothing falls through the cracks

### The Full Spec

```
AGENT: Smart Review Monitor

TRIGGER:
- Runs daily at 8:00 PM CET
- Cron: "0 20 * * *"

DATA SOURCE:
- Shopify Product Reviews (via Shopify API or reviews app API)
- Pull all reviews created since last run

PROCESSING (for each review):
1. Send review to Claude for analysis:
   - Classify sentiment: POSITIVE (4-5 stars), NEGATIVE (1-2 stars), NEUTRAL (3 stars)
   - Extract key themes (what did the customer mention?)
   - Check if any line works as a testimonial quote
   - If NEGATIVE: draft an empathetic response in brand voice

2. Based on classification:
   - POSITIVE (4-5 stars):
     → Log to database with sentiment and themes
     → If quotable text found: add to "testimonials" table
     → Auto-generate a short thank-you response draft
   
   - NEGATIVE (1-2 stars):
     → Log to database
     → Send immediate Slack alert to #reviews channel
     → Include: full review text, product name, customer name, 
       Claude's analysis of what went wrong, draft response
   
   - NEUTRAL (3 stars):
     → Log to database
     → No notification

DEDUPLICATION:
- Track reviews by review ID in database
- Before processing, check if review ID exists
- If exists, skip entirely

OUTPUT:
- Slack alerts for negative reviews (immediate)
- Daily summary email: X new reviews, breakdown by sentiment, 
  any new testimonials extracted
- Database: all reviews with sentiment, themes, quotable text, 
  and response drafts

LOGGING:
- Log each run: timestamp, reviews processed, sentiment breakdown
- Log any API errors

CONSTRAINTS:
- Read-only access to reviews (never post responses automatically -- 
  that's Level 3)
- Don't process reviews older than 48 hours (catch-up window)
- If Claude's API fails, log the raw reviews without analysis 
  and flag for manual review
```

### Step 1: Set Up the Database

Your agent needs to remember what it's already processed. Tell Claude:

> "Create a simple database schema for the review monitor. I need two tables:
> 1. processed_reviews: review_id (unique), product_name, customer_name, rating, review_text, sentiment, themes (JSON), quotable_text (nullable), response_draft (nullable), processed_at
> 2. testimonials: id, review_id (foreign key), product_name, quote_text, created_at
> 
> Use Supabase (or SQLite if we want to keep it simple)."

### Step 2: Build the Review Fetcher

> "Create a function that connects to Shopify and fetches all product reviews created since a given timestamp. Use the Shopify API. Store the 'last fetched' timestamp so each run only pulls new reviews. Handle pagination and rate limiting."

### Step 3: Build the Claude Analysis Step

This is the brain of the agent. Tell Claude:

> "For each review, send it to the Claude API with this prompt:
> 
> 'Analyze this product review for an ecommerce brand:
> 
> Product: {product_name}
> Rating: {stars}/5
> Customer: {customer_name}
> Review: {review_text}
> 
> Return a JSON object with:
> - sentiment: "POSITIVE", "NEGATIVE", or "NEUTRAL"
> - themes: array of 2-3 key themes mentioned (e.g., "fast shipping", "poor packaging", "great taste")
> - quotable: the best sentence from the review for use as a testimonial, or null if nothing stands out
> - response_draft: if sentiment is NEGATIVE, write an empathetic response (2-3 sentences) that acknowledges the issue and offers to make it right. If POSITIVE, write a brief thank you (1-2 sentences). If NEUTRAL, null.
> - urgency: "HIGH" if the customer mentions a health/safety issue, a legal threat, or public shaming. "NORMAL" otherwise.'
> 
> Parse the JSON response and use it for routing."

### Step 4: Build the Routing Logic

> "Based on Claude's analysis:
> - NEGATIVE reviews: send a Slack message to the webhook in SLACK_REVIEWS_WEBHOOK env var. Include the full review, Claude's analysis, and the draft response. Format it clearly with emoji indicators.
> - POSITIVE reviews with quotable text: insert into the testimonials table.
> - All reviews: insert into processed_reviews table with all analysis fields.
> - HIGH urgency reviews: send an additional Slack DM to the founder (SLACK_FOUNDER_ID env var)."

### Step 5: Build the Daily Summary

> "After processing all reviews, compile a summary email:
> - Total reviews processed
> - Breakdown: X positive, Y negative, Z neutral
> - New testimonials extracted (list them)
> - Any negative reviews that need responses (brief list)
> Send to BRIEFING_EMAIL env var."

### Step 6: Add Deduplication

> "Before processing any review, check the processed_reviews table for the review_id. If it exists, skip it entirely. Log how many duplicates were skipped."

### Step 7: Test and Deploy

> "Add a manual trigger so I can test this with a few sample reviews. Also add a 'backfill' mode where I can process the last 7 days of reviews for the initial run."

Test it with your existing reviews. Check the Slack notifications. Check the database entries. Check the testimonials table. Once everything looks right, deploy.

---

## 6. Quick Wins -- Copy-Paste Prompts

### Quick Win 1: Smart Competitor Alert (Filter)

```
Build a Trigger.dev task that monitors competitor prices intelligently.

Schedule: daily at noon
Process:
1. Scrape prices from competitor URLs (list in config)
2. Compare to stored prices from yesterday
3. Send each change to Claude: "Is this price change significant for a 
   competing ecommerce brand? Rate as SIGNIFICANT (competitor undercut us 
   by 10%+, or launched a new product in our category), MINOR (small 
   adjustment), or NOISE (irrelevant fluctuation). Explain why in one sentence."
4. Only notify me about SIGNIFICANT changes
5. Log everything for historical analysis

Output:
- SIGNIFICANT: Slack alert with Claude's analysis
- MINOR + NOISE: silent, logged only
- Weekly digest every Friday: summary of all changes that week
```

### Quick Win 2: Social Media Sentiment Watch (Score)

```
Build a Trigger.dev task that monitors brand mentions on social media.

Schedule: every 4 hours
Process:
1. Search for brand mentions using social listening API (or scrape Twitter/Instagram)
2. For each mention, send to Claude:
   "Analyze this social media mention of our brand:
   Platform: [platform]
   Author: [username] (followers: [count])  
   Content: [post text]
   
   Rate sentiment: POSITIVE, NEGATIVE, NEUTRAL
   Rate reach: HIGH (>10k followers or post going viral), 
   MEDIUM (1k-10k followers), LOW (<1k followers)
   Rate action needed: RESPOND (positive, worth engaging), 
   FLAG (negative, needs attention), MONITOR (neutral, keep watching), 
   IGNORE (irrelevant or spam)"

Routing:
- NEGATIVE + HIGH reach: immediate Slack alert to founder
- NEGATIVE + any reach: add to response queue
- POSITIVE + HIGH reach: alert marketing team to engage
- POSITIVE + any reach: log as social proof
- NEUTRAL/IGNORE: log silently
```

### Quick Win 3: Order Anomaly Detector (Filter + Score)

```
Build a Trigger.dev task that spots unusual orders.

Schedule: every 2 hours
Process:
1. Pull recent orders from Shopify
2. For each new order, check against historical patterns
3. Send to Claude: 
   "Analyze this order for anomalies:
   Order value: [amount]
   Average order value (last 30 days): [average]
   Items: [list]
   Customer: [new/returning]
   Shipping: [domestic/international]
   
   Flag anything unusual:
   - Unusually large order (>3x average)
   - Suspicious pattern (multiple high-value orders from same IP/address)
   - First-time customer with very large order
   - Shipping to high-fraud country
   
   Rate risk: HIGH (likely fraud, hold order), MEDIUM (unusual, worth checking), 
   LOW (normal order), NONE (clearly legitimate)"

Routing:
- HIGH risk: Slack alert to founder + flag order in Shopify for manual review
- MEDIUM risk: add to daily review list
- LOW/NONE: process normally, log only
```

---

## 7. The Claude Prompt as Business Logic

Let's zoom out for a second. What you're doing with Level 2 agents is something genuinely new. You're encoding your business judgment into prompts.

Think about it. Every business has unwritten rules:

- "If a customer is really upset, I handle it personally"
- "If a competitor drops their price, I want to know about it, but only if it's a big drop"
- "If someone reaches out about wholesale, that's always a priority"
- "Five-star reviews with great quotes go on the homepage"

These rules live in your head. Your employees learn them over time. New hires get them wrong for the first few months.

With a Level 2 agent, you write these rules once -- as Claude prompts -- and they run consistently, every time, forever. Not perfectly (Claude makes judgment errors too), but consistently. And you can improve the prompts over time as you see where it gets things wrong.

### Improving Your Prompts Over Time

After your agent has been running for a week, check its work:

- Did it classify any reviews wrong? Add an example to the prompt: "For context, this is a NEGATIVE review even though the customer didn't use angry language: [example]"
- Did it flag something as urgent that wasn't? Tighten the criteria: "Only rate as HIGH urgency if the customer explicitly mentions [specific things]"
- Did it miss something important? Loosen the criteria or add a new category

Your prompts are living documents. They get better as you learn what your agent gets right and wrong.

---

## 8. Workshop Exercise: Build a Conditional Agent

Time to build. Pick one that matters to your business:

### Option A: Smart Review Monitor
Build the full review monitor from Section 5. Classify reviews, extract testimonials, alert on negatives.

### Option B: Email Classifier
Build an agent that reads incoming emails, classifies them (complaint, question, wholesale inquiry, spam), rates urgency, and routes each type to the right place.

### Option C: Price Drop Alert
Build an agent that monitors competitor prices and only alerts you when something significant happens. Everything minor gets logged silently.

### Option D: Your Own Idea
Think about what you check manually every day. What judgment calls do you make while scanning that data? Those judgment calls are your Claude prompts. That scanning is your agent.

### The Steps

1. Write your spec (trigger, data source, Claude prompt for classification, routing rules, output destinations)
2. Answer the 3am question: "If this makes a wrong classification at 3am, what happens?" For Level 2, the answer should be: "The worst case is a misrouted notification. Nothing gets sent to customers. Nothing gets published. I just review and correct."
3. Build it with Claude
4. Test with real data
5. Check Claude's classifications -- do they match your judgment?
6. Adjust the prompt based on what it got wrong
7. Deploy

### What Success Looks Like

You should have:
- An agent that makes decisions based on data, not just reports it
- A Claude prompt that encodes your business judgment
- A clear routing system (what goes where based on classification)
- Deduplication so nothing gets processed twice
- Logs so you can review and improve the agent's judgment over time

---

## 9. Key Takeaways

1. **Level 2 agents think. Level 1 agents just report.** The upgrade is judgment -- filtering noise, routing to the right place, scoring importance.

2. **The prompt IS the business logic.** You don't need code to express "Is this worth acting on?" You need a well-written prompt. Your business intuition translates directly into Claude prompts.

3. **Idempotency keeps you sane.** Track what you've processed by ID. Check before processing. Skip duplicates. This is boring but critical -- without it, your agents create chaos.

4. **Start with classification, then add routing.** First: can the agent correctly identify "positive review" vs. "negative review"? Test that. Once classification is reliable, add the routing (negative goes to Slack, positive goes to testimonials).

5. **Your prompts get better over time.** Check the agent's work for the first week. Note where it gets things wrong. Add examples and edge cases to the prompt. The agent improves because the prompt improves.

6. **The 3am question evolves.** For Level 2, the worst case is a misclassification -- a negative review gets logged as positive, or a spam email gets flagged as urgent. Annoying, but not dangerous. Nobody receives a wrong response. Nobody gets charged incorrectly. That safety net is intentional, and it stays until Level 3.

## Templates

- **Agent Level 2 Spec Template:** `templates/agent-level-2-spec.md` — reusable classification + routing template with SIGNIFICANT/MINOR/NOISE pattern and examples per track
- **Track-Specific Session 3 Agent Specs** (each builds a Level 1 → 2 → 3 agent):
  - Ecom: `participant-kit/tracks/ecom-founder/session-3-spec.md` — Competitor Price + Review Monitor
  - Agency: `participant-kit/tracks/agency-owner/session-3-spec.md` — Client Performance Monitor
  - Sales: `participant-kit/tracks/sales-pro/session-3-spec.md` — Lead Enrichment + Outreach Agent

---

Next up: Level 3 agents -- agents that act on your behalf, but only with your permission.
