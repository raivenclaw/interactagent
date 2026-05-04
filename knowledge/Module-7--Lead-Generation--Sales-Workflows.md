# Module 7: Lead Generation & Sales Workflows

**Claude Code Bookclub** -- Session 7

---

You know exactly who your ideal customer is. You can picture them. You know their title, their company size, the problems they wake up thinking about.

The issue is not knowing who to sell to. The issue is finding them at scale without spending your entire week on LinkedIn and Google, manually copying names into spreadsheets, writing the same cold email 47 times with minor tweaks.

That part -- the find, enrich, score, and reach out pipeline -- is exactly the kind of work Claude Code was built to automate.

By the end of this module, you will have a working lead generation system: from defining who you are looking for, to finding them, to scoring them, to writing personalized outreach that actually sounds human. No sales tools subscription required. No coding knowledge needed.

---

## 1. The Lead Gen Problem

Here is what lead generation looks like for most founders:

1. Open LinkedIn. Search "Head of Marketing" + "DTC" + "Netherlands"
2. Click through 30 profiles. Open some company pages
3. Copy names, titles, and company info into a Google Sheet
4. Visit each company website. Try to figure out if they are actually a good fit
5. Write a cold email. Rewrite it. Rewrite it again
6. Send it. Repeat 29 more times
7. Realize you have spent 4 hours and contacted 12 people

This is not a strategy. This is data entry with extra steps.

The problem is not that you are bad at sales. The problem is that finding and qualifying leads is research work, and research work is exactly what Claude Code is good at. It can search, read websites, summarize, compare, and write -- all faster than you can open a new browser tab.

**What you are going to build in this module:**

```
FIND → ENRICH → SCORE → RESEARCH → OUTREACH → TRACK
```

Each step becomes a prompt or a tool. By the end, you have a pipeline -- not a to-do list.

---

## 2. Define Your Ideal Customer Profile (ICP)

Before you ask Claude to find leads, you need to be specific about who you are looking for. Vague inputs produce vague results. This is the spec principle from Module 1, applied to sales.

### The ICP Template

Copy this and fill it in before doing anything else:

```
My ideal customer is:
- Title/role: [e.g., Head of Marketing, Founder, Ecommerce Manager]
- Company size: [e.g., 10-50 employees, €1M-€10M revenue]
- Industry: [e.g., DTC ecommerce, SaaS, professional services]
- Geography: [e.g., Netherlands, DACH region, global]
- Trigger event: [e.g., just raised funding, just launched a new product, hiring for marketing]
- Pain point: [what problem do they have that you solve?]
```

### Why Trigger Events Matter

Most founders define their ICP by demographics: title, company size, industry. That is necessary but not sufficient. Two companies can match your ICP perfectly -- one is actively looking for a solution, the other is not.

Trigger events tell you who is ready to buy:

- **Just raised funding** -- they have budget and pressure to grow
- **Hiring for a specific role** -- they are investing in that area
- **Launched a new product** -- they need marketing, distribution, tooling
- **Switched platforms** -- they are in buying mode
- **Leadership change** -- new leaders make new decisions

When you add trigger events to your ICP, you stop targeting "companies that could buy" and start targeting "companies that are likely buying right now."

### Generate Search Queries

Once your ICP is filled in, turn it into search fuel:

**Prompt:**

```
Here is my Ideal Customer Profile:
- Title/role: Head of Marketing
- Company size: 10-50 employees
- Industry: DTC ecommerce (beauty, fashion, home goods)
- Geography: Netherlands and Germany
- Trigger event: Recently raised seed or Series A funding
- Pain point: They are spending too much on paid ads and need better
  organic and retention strategies

Generate 20 specific search queries I can use to find these people on
Google, LinkedIn, and industry directories. Mix English and Dutch
queries. Include queries for the trigger events (funding rounds, job
postings, new launches).
```

Claude will give you queries like:
- "DTC beauty brand Netherlands Series A 2024"
- "ecommerce startup Amsterdam hiring Head of Marketing"
- "Nederlandse DTC merken funding ronde"

These are your fishing lines. Now let Claude go fishing.

---

## 3. Quick Win: Find 20 Leads in 5 Minutes

No setup. No tools. No database. Just a prompt.

**Prompt:**

```
Search the web for DTC ecommerce brands in the Netherlands with 10-50
employees that sell beauty or skincare products.

Find 20 companies that match. For each company give me:
1. Company name
2. Website URL
3. What they sell (one sentence)
4. Estimated company size (employees)
5. One person who might be the Head of Marketing or a senior marketing
   role (name + title if you can find it)

Output as a clean table. If you cannot find a specific person, put
"Not found — check LinkedIn" in that column.
```

**What you get:** A table with 20 real companies, real websites, and in many cases real names. In five minutes. Compare that to four hours of manual searching.

**Important:** This is a starting point, not a finished list. Some entries may be outdated or slightly off. That is fine. The goal is a first filter -- a list worth investigating further.

### Expanding the Search

Once you have your first 20, go deeper:

```
Good list. Now find 20 MORE companies, but this time focus on:
1. Companies that have raised funding in the last 12 months
2. Companies that are currently hiring for marketing roles
3. Companies that launched a new product line recently

Prioritize companies showing growth signals. Same format as before.
```

Now you have 40 leads with the second batch pre-filtered for buying signals. You did not open LinkedIn once.

---

## 4. Lead Enrichment

A name and a website is not enough. You need to know enough about each company to (a) decide if they are worth contacting and (b) write something that does not sound like a mass email.

**Prompt:**

```
I have a list of 20 companies. For each one, I need you to:

1. Visit their website and summarize what they do in one sentence
2. Find their LinkedIn company page and note the employee count
3. Check if they have open job postings (indicates growth and where
   they are investing)
4. Find any recent news, press mentions, or blog posts from the last
   6 months
5. Identify the most likely decision maker for a marketing services
   pitch (name, title, LinkedIn URL if findable)
6. Note one specific thing I could reference in a cold email
   (a product launch, a campaign, a blog post, a hiring push)

Here is the list:
1. [Company A] — www.companya.com
2. [Company B] — www.companyb.com
3. [Company C] — www.companyc.com
[... continue for all 20]

Output as a detailed table or structured list. Flag any company that
looks like a poor fit (too small, too big, wrong industry, etc.).
```

**What this gives you:** Each lead goes from a name and URL to a mini-dossier. You now know what they do, how big they are, what they are focused on, and what you can reference to sound like you did your homework. Because you did -- you just did it in minutes instead of hours.

### The Enrichment Shortcut

If you already have a spreadsheet of leads (from an event, a directory, or your own network), skip the finding step and go straight to enrichment:

```
I have a CSV of 50 companies I collected at a trade show. I need you
to enrich each one. Here is the CSV:

[paste CSV content]

For each company, add:
- One-sentence description from their website
- Employee count (from LinkedIn or website)
- Recent news or updates
- Best contact person for a partnership pitch
- A personalization hook I can use in outreach

Output as an updated CSV I can paste back into my spreadsheet.
```

---

## 5. Lead Scoring

Not all leads are equal. A 50-person DTC brand that just raised funding and is hiring a marketing manager is a better lead than a 5-person startup with no budget. Lead scoring makes this obvious so you stop spending time on the wrong companies.

### Build Your Scoring Criteria

**Prompt:**

```
I sell marketing automation services to DTC ecommerce brands. My
ideal customer has 10-50 employees, sells consumer products, and is
growing fast.

Create a lead scoring system that rates each lead 1-10 based on:

1. COMPANY SIZE FIT (0-2 points)
   - 10-50 employees = 2 points
   - 5-10 or 50-100 = 1 point
   - Under 5 or over 100 = 0 points

2. INDUSTRY FIT (0-2 points)
   - DTC ecommerce (beauty, fashion, food, home) = 2 points
   - B2B ecommerce or marketplace seller = 1 point
   - Non-ecommerce = 0 points

3. GROWTH SIGNALS (0-2 points)
   - Recently raised funding = 1 point
   - Currently hiring for marketing/growth roles = 1 point

4. ENGAGEMENT SIGNALS (0-2 points)
   - Active on social media (posted in last 2 weeks) = 1 point
   - Recent blog post or press mention = 1 point

5. ACCESSIBILITY (0-2 points)
   - Found specific decision maker with contact info = 2 points
   - Found decision maker but no direct contact = 1 point
   - Cannot identify who to contact = 0 points

Now apply this scoring to my list of 20 leads and rank them highest
to lowest. Show the total score AND the breakdown for each lead.
```

**What you get:** A ranked list where the best opportunities float to the top. You now know exactly where to spend your outreach time.

### Build a Scoring Tool

For ongoing use, turn this into a reusable tool:

**Prompt:**

```
Build me an HTML lead scoring tool. Here is how it works:

INPUT SECTION:
- Company name (text field)
- Website URL (text field)
- Employee count (number field)
- Industry (dropdown: DTC Beauty, DTC Fashion, DTC Food, DTC Home,
  B2B Ecommerce, Marketplace Seller, Other)
- Has raised funding recently (yes/no toggle)
- Currently hiring marketing roles (yes/no toggle)
- Active on social media (yes/no toggle)
- Recent press or blog post (yes/no toggle)
- Decision maker identified (dropdown: Yes with contact, Yes without
  contact, No)

OUTPUT SECTION:
- A big score number (out of 10) with color coding:
  8-10 = green (hot lead)
  5-7 = orange (warm lead)
  1-4 = red (cold lead)
- A breakdown showing points for each category
- A recommendation: "Prioritize outreach" / "Worth a follow-up" /
  "Skip for now"

HISTORY:
- Each scored lead gets added to a table below the scorer
- The table is sortable by score
- Include an "Export CSV" button

Style: cream background (#EAE6DF), dark text (#2E2A26), red accent
(#8B1A10) for hot leads. Clean, professional, no clutter.
```

Now you have a tool you can use every week to score new leads as they come in. No SaaS subscription. No monthly fee. Just an HTML file that does the job.

---

## 6. Cold Outreach Sequences

This is where most lead gen efforts die. You find good leads, you score them, and then you send a generic email that sounds like every other cold email in their inbox. Delete.

The difference between a deleted email and a replied email is almost always personalization. Not "Hi {first_name}" personalization. Real personalization -- referencing something specific that shows you actually looked at their company.

### The Research-First Approach

**Prompt:**

```
For each of my top 10 leads, research the company and write a
personalized cold email. The email must:

1. Open with something specific about THEIR company -- a recent blog
   post, product launch, job posting, or social media post. Not a
   compliment. A reference that shows I paid attention.

2. Connect that specific thing to the problem I solve. "You just
   launched [product line]. That usually means you need [the thing I
   sell] because [reason]."

3. End with a concrete next step. Not "let me know if you are
   interested." Something specific: "I recorded a 2-minute video
   showing how this would work for [company name]" or "I wrote up
   3 ideas for your [specific situation] — want me to send them?"

4. Be under 100 words. Total. No padding. No corporate speak. Write
   like a human texting a business contact, not like a marketing
   department.

Here are my top 10 leads:
1. [Company] — [what they do] — [decision maker name] — [specific
   thing I found about them]
2. [repeat for all 10]

My product: [one sentence about what you sell]
```

### Email Sequence Builder

One email is not enough. Most deals happen on the follow-up. Build a full sequence:

**Prompt:**

```
Build me an email sequence generator as an HTML tool. Here is how it
works:

INPUT FIELDS:
- Company name
- Contact person name and title
- One specific thing I know about them (free text)
- My product pitch (one sentence)
- My name and company

WHEN I CLICK "GENERATE SEQUENCE" IT CREATES:

EMAIL 1 — PERSONALIZED INTRO (send day 1)
- Reference the specific thing I entered
- Connect it to my product
- Concrete next step
- Under 100 words

EMAIL 2 — VALUE-ADD FOLLOW-UP (send day 3)
- Do NOT say "just following up"
- Share a relevant insight, tip, or resource related to their
  situation
- Brief mention of how I help with this
- Under 80 words

EMAIL 3 — SOCIAL PROOF (send day 7)
- Share a result or case study from a similar company
- "We helped [similar company] achieve [result]"
- Ask a specific question: "Are you dealing with [problem]?"
- Under 80 words

EMAIL 4 — DIRECT ASK (send day 14)
- Acknowledge they are busy
- One clear ask: "15 minutes this Thursday or Friday?"
- Make it easy to say yes (suggest two specific times)
- Under 60 words

EMAIL 5 — BREAKUP EMAIL (send day 21)
- "Looks like the timing is not right"
- Leave the door open: "If this becomes relevant, here is how to
  reach me"
- No guilt. No passive aggression. Professional and warm.
- Under 50 words

DISPLAY:
- Show all 5 emails on one page, clearly labeled with send day
- Each email has a "Copy" button
- Include subject line suggestions for each email

Style: cream background, dark text, clean and readable.
```

**Why this works:** You now have a sequence generator you can use for every lead. Input the company details, get five emails, review and tweak, send. What used to take 30 minutes per lead now takes 3 minutes.

---

## 7. LinkedIn Outreach Workflows

LinkedIn is different from email. Messages are shorter. The first touchpoint is the connection request, not the pitch. And you have a hard character limit.

### Connection Request Messages

**Prompt:**

```
Write me 5 LinkedIn connection request messages for Heads of
Marketing at DTC ecommerce brands in the Netherlands. Each one must:

1. Be under 300 characters (LinkedIn's limit for connection requests)
2. Reference something specific — not "I see we share interests" or
   "I came across your profile." Something real: their company, a
   post they wrote, a product they launched
3. Give a reason to connect that benefits THEM, not you
4. Sound human — no "I would love to leverage synergies"

Context: I run a marketing automation agency. I help DTC brands
reduce ad spend by improving email and retention marketing.

For each connection request, also write:
- A follow-up message for day 2 after they accept (thank them, share
  something valuable, no pitch yet)
- A follow-up message for day 5 (now introduce what I do, with a soft
  ask)
```

### The LinkedIn Content Play

Cold outreach works better when they have already seen your name. Build a content strategy that warms leads before you message them:

```
I want to post on LinkedIn 3 times per week to build visibility with
my ICP (marketing leaders at DTC brands). Generate a 2-week content
calendar with:

- 6 posts total
- Mix of: 1 insight post, 1 case study, 1 question/poll, 1 hot take,
  1 tactical tip, 1 personal story
- Each post should be relevant to DTC marketing challenges
- Include the full post text, ready to copy and paste
- Keep each post under 200 words
- No hashtag spam (3 max per post)
```

Now your cold outreach is not truly cold. They have seen your posts. Your name is familiar. The connection request feels natural instead of random.

---

## 8. Building a Simple CRM

You do not need HubSpot. Not yet. Not when you have 50 leads. You need something simple that lets you track who you contacted, what happened, and what to do next.

### Option 1: The HTML Tracker (5 minutes)

For founders just getting started:

**Prompt:**

```
Build me a lead tracker as a single HTML file. I need:

1. A form to add new leads:
   - Company name
   - Contact person
   - Email
   - Lead score (1-10)
   - Status (dropdown: New, Contacted, Responded, Meeting Booked,
     Won, Lost)
   - Notes (free text)
   - Date added (auto-filled)

2. A table showing all leads, sortable by score and status

3. Click on any lead to edit their status or add notes

4. Color coding by status:
   - New = grey
   - Contacted = blue
   - Responded = orange
   - Meeting Booked = green
   - Won = dark green
   - Lost = red

5. A simple stats bar at the top:
   - Total leads
   - Leads contacted
   - Response rate
   - Meetings booked

6. Export to CSV button

7. Data persists in localStorage (so it survives page refreshes)

Style: cream background, dark text, clean table layout.
No frameworks. No build tools. Just one HTML file I can open.
```

### Option 2: The Real CRM (when you are ready to scale)

When you outgrow the HTML tracker:

**Prompt:**

```
Build me a simple CRM as a Next.js app with Supabase for the
database. I need:

1. A pipeline view with columns:
   New → Contacted → Responded → Meeting → Won / Lost
   Leads appear as cards in each column

2. Drag and drop leads between columns

3. Click a lead card to see the full profile:
   - Company info (name, website, size, industry)
   - Contact info (name, title, email, LinkedIn)
   - Lead score with breakdown
   - Activity timeline (when I emailed, when they responded, notes)
   - Next action with a date

4. A form to add new leads (all fields from above)

5. A dashboard page showing:
   - Total leads in pipeline
   - Conversion rate (leads → meetings → won)
   - Average deal value
   - Pipeline value
   - Leads by source

6. A simple search and filter:
   - Search by company or contact name
   - Filter by status, score range, and industry

No auth for now. I am the only user. Keep it simple.
```

Start with Option 1. Move to Option 2 when you have more than 30 active leads or when you need to share the pipeline with a team member.

---

## 9. Automated Lead Monitoring

The best leads are the ones you find before your competitors do. Set up automated monitoring so new opportunities come to you instead of you hunting for them.

**Prompt:**

```
Build me a lead monitoring script that I can run daily. It should:

1. Search for companies in the DTC ecommerce space (Netherlands and
   Germany) that announced funding in the last 7 days

2. Search for companies posting job listings for "Head of Marketing,"
   "Marketing Manager," or "Growth Lead" — this signals they are
   investing in marketing and might need external help

3. Check industry news sites and blogs for new product launches or
   brand announcements in my niche

4. For each match, collect:
   - Company name
   - What the trigger event is (funding, hiring, launch)
   - Website URL
   - One relevant link (the job posting, the press article, etc.)

5. Output a clean summary I can review in 2 minutes

6. Send the summary to me via Slack (or save as a daily report file)

Focus on quality over quantity. I would rather get 3 great leads per
day than 30 mediocre ones.
```

### The Weekly Pipeline Report

Track your progress automatically:

```
Build me a script that generates a weekly lead gen report. It should:

1. Read my lead tracker data (from the HTML file or CRM database)
2. Generate a report showing:
   - New leads added this week
   - Leads contacted this week
   - Responses received
   - Meetings booked
   - Conversion rates (contacted → responded → meeting → won)
   - Top 5 hottest leads (highest score, most recent activity)
   - Leads that need follow-up (contacted but no response in 5+ days)
3. Output as a clean, printable HTML page

This should take 10 seconds to generate and 2 minutes to review.
```

---

## 10. The Full Lead Gen Pipeline

Here is the complete system, step by step. Each step is a prompt or a tool you have already built:

```
STEP 1: FIND
├── Define your ICP (Section 2)
├── Generate search queries
├── Run the "find 20 leads" prompt (Section 3)
└── Output: Raw lead list

STEP 2: ENRICH
├── Run the enrichment prompt on your raw list (Section 4)
├── Add company details, news, decision makers
└── Output: Enriched lead list

STEP 3: SCORE
├── Apply your scoring system (Section 5)
├── Rank leads by score
├── Cut anyone below a 5
└── Output: Ranked, qualified lead list

STEP 4: RESEARCH
├── Deep dive on your top 10 leads
├── Find the personalization hook for each
└── Output: Personalization notes for outreach

STEP 5: OUTREACH
├── Generate personalized emails (Section 6)
├── Generate LinkedIn messages (Section 7)
├── Review and tweak before sending
└── Output: Ready-to-send messages

STEP 6: TRACK
├── Log every lead in your CRM (Section 8)
├── Record date contacted, channel, message sent
└── Output: Updated pipeline

STEP 7: FOLLOW-UP
├── Use your email sequence (emails 2-5)
├── Follow up on LinkedIn at the right intervals
├── Update CRM status after each interaction
└── Output: Ongoing conversations

STEP 8: MONITOR + REPORT
├── Run daily lead monitoring (Section 9)
├── Generate weekly pipeline reports
├── Feed new leads back into Step 1
└── Output: Continuous pipeline
```

**The key insight:** Each step feeds the next. New leads from monitoring go into enrichment. Enriched leads get scored. Top scores get outreach. Responses get tracked. The pipeline runs itself once you set it up.

---

## 11. Quick Wins

Copy-paste these. Swap in your own details. Get results in minutes.

**Find leads fast:**

```
Find 10 DTC skincare brands in Amsterdam that have fewer than 50
employees and have posted on LinkedIn in the last month. Give me
company name, website, what they sell, and the name of their most
senior marketing person.
```

**Write a personalized cold email:**

```
Write me a cold email for [company name]. They just published a blog
post about [topic]. I sell [your product/service]. The email should
reference their blog post, connect it to what I do, and propose a
specific next step. Under 100 words. No corporate speak.
```

**Build a lead tracker:**

```
Build me a simple lead tracker as an HTML page. A table with columns:
Company, Contact, Email, Score (1-10), Status (dropdown), Notes, Date.
Data saves in localStorage. Include an Export CSV button. Cream
background, dark text, clean layout.
```

**Generate LinkedIn messages:**

```
Generate 5 LinkedIn connection request messages for CMOs at DTC
brands. Under 300 characters each. Reference something specific about
DTC marketing challenges. Give a reason to connect that benefits them.
Sound human.
```

**Score a batch of leads:**

```
Score these 10 companies on my ICP criteria. My ICP: [describe].
Rate each 1-10 with a breakdown. Rank highest to lowest. Here are
the companies:
1. [Company A]
2. [Company B]
[... etc.]
```

**Research a specific company:**

```
Research [company name] for a cold outreach email. I need: what they
do (one sentence), recent news or updates, what they seem to be
focused on right now, who the decision maker is for [your category],
and one specific thing I can reference to show I did my homework.
```

---

## 12. Workshop Exercise: Build Your Lead Gen System

This is the hands-on exercise. Block 45 minutes. You will leave with a working lead generation pipeline.

### Step 1: Define Your ICP (5 minutes)

Fill in the template from Section 2. Be specific. If you sell to "everyone," you sell to no one.

```
My ideal customer is:
- Title/role: _______________
- Company size: _______________
- Industry: _______________
- Geography: _______________
- Trigger event: _______________
- Pain point: _______________
```

### Step 2: Find 10 Leads (5 minutes)

Use the prompt from Section 3. Paste your ICP into the prompt. Get a table of 10 real companies.

### Step 3: Enrich Your Top 5 (10 minutes)

Take the 5 most promising-looking leads and run the enrichment prompt from Section 4. Get company details, decision makers, and personalization hooks.

### Step 4: Score Them (5 minutes)

Apply the scoring system from Section 5. Rank your 5 leads. Identify your top 3.

### Step 5: Generate Outreach for Your Top 3 (10 minutes)

Use the cold email prompt from Section 6. Generate a personalized email for each of your top 3 leads. Read each one. Tweak anything that sounds off.

### Step 6: Build Your Tracker (10 minutes)

Use the HTML tracker prompt from Section 8, Option 1. Build a simple lead tracker. Add your 5 leads to it. Set their statuses.

### What You Leave With

- A defined ICP you can reuse
- 10 leads you did not have before
- 5 enriched profiles with personalization hooks
- 3 ready-to-send personalized emails
- A lead tracker you can keep using

That is more pipeline work than most founders do in a month. You did it in 45 minutes.

---

## 13. Ethics and Best Practices

Lead generation is powerful. With Claude Code, it is fast. Speed makes it even more important to do this right.

### GDPR Compliance (You Are in the EU)

- **Do not scrape personal email addresses from websites.** If someone's email is not publicly listed on their company website or LinkedIn, do not use automated tools to guess or find it.
- **Business emails found on company websites are generally fair game for B2B outreach** under legitimate interest, but you must still provide an easy way to opt out.
- **Keep records of where you found each contact's information.** If someone asks "how did you get my email?", you need a real answer.
- **Honor opt-outs immediately.** When someone says "do not contact me," that means forever. Not "try again in 6 months."

### Personalization vs. Stalking

There is a line. Here is where it is:

**Fine:**
- Referencing a blog post they published
- Mentioning a product launch that was in the press
- Noting a job posting on their careers page
- Commenting on something they posted on LinkedIn

**Not fine:**
- Referencing personal social media posts
- Mentioning details from private profiles
- Using information that is clearly not meant for sales outreach
- Combining data points to seem like you know more than you should

The rule: **could you explain how you found this information without it being weird?** If yes, use it. If no, do not.

### Quality Over Quantity

The whole point of this module is to make lead gen faster. Do not use that speed to spam. Use it to be more thoughtful at scale.

- 10 personalized emails beat 100 generic ones. Every time.
- A 20% response rate on 10 emails (2 responses) is better than a 1% response rate on 200 emails (2 responses). Same outcome. One of them gets you blocklisted.
- Follow up, but know when to stop. The breakup email (email 5) is real. After that, stop. If they want to work with you, they know how to find you.

### The Human Review Rule

Claude Code generates the outreach. You review it before sending. Every time.

Read each email out loud. If it sounds like a robot wrote it, fix it. If it references something incorrectly, fix it. If it makes a claim you cannot back up, remove it.

Automation handles the research and drafting. You handle the judgment and the send button. That split is what makes this work without making you look bad.

---

## Recap

What you built in this module:

1. **ICP Definition** -- a clear, specific profile of who you are looking for
2. **Lead Finding** -- prompts that generate qualified lead lists in minutes
3. **Lead Enrichment** -- turning a name and URL into a mini-dossier
4. **Lead Scoring** -- a system that ranks leads so you focus on the best ones
5. **Cold Outreach** -- personalized emails and sequences that sound human
6. **LinkedIn Workflows** -- connection requests and follow-up messages
7. **CRM Tracking** -- from a simple HTML file to a full pipeline tool
8. **Automated Monitoring** -- daily alerts for new opportunities
9. **The Full Pipeline** -- all steps connected into a repeatable system

The goal is not to replace your sales judgment. The goal is to eliminate the hours of manual research and writing that sit between "I know who I want to sell to" and "I just sent them a great email."

Claude Code handles the grind. You handle the relationships.

### Your Takeaway Files

This module's `templates/` folder has two files you'll use over and over:

- **icp-template.md** -- your Ideal Customer Profile with company characteristics, champion/decision maker profiles, trigger events, pain points, disqualifiers, and a hot/warm/cold lead temperature guide
- **cold-outreach-sequence.md** -- a 5-email sequence template (opening, value add, social proof, breakup tease, goodbye) with structure, length rules, and the psychology behind each email
