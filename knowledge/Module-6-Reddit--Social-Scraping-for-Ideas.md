# Module 6: Reddit & Social Scraping for Ideas

Your customers are already telling you what they want. They are just not telling you. They are telling Reddit.

---

## 1. Why Reddit Is a Gold Mine for Founders

Every day, millions of people go to Reddit and say things they would never say to a brand. They complain. They rave. They compare. They beg for alternatives. They describe their dream product in excruciating detail -- and nobody is listening.

That is your opportunity.

Here is what makes Reddit different from every other platform:

**No brand filter.** On Instagram, people perform. On LinkedIn, they posture. On Reddit, they vent. When someone writes "I switched from Shopify to WooCommerce because..." they are not trying to impress anyone. They are telling the truth.

**Pre-segmented audiences.** Subreddits are communities organized by interest. r/ecommerce, r/smallbusiness, r/skincare, r/homegym -- whatever your market is, there is a subreddit full of your exact target customers, talking about your exact product category.

**Upvotes are data.** When a complaint gets 500 upvotes, that is not one person with a problem. That is 500 people saying "same." Upvotes are a built-in survey mechanism. The most upvoted complaints are the most common problems.

**Every type of intelligence is there:**

- Every complaint is a potential product idea or marketing angle
- Every "I wish [product] would..." is a feature spec written by your customer
- Every "I switched from X to Y because..." is competitive intelligence you cannot buy
- Every "can anyone recommend a [product] that does [thing]?" is a demand signal

You do not need to guess what your market wants. You just need to listen where they are already talking.

---

## 2. The Research Framework

Before you search anything, know what you are looking for. Not "what are people saying about my industry" -- that is too vague. Pick a specific lens.

**Market validation:** "Do people actually have this problem?"
This is for when you have a product idea and need to know if real people care. You are looking for posts where people describe the exact problem you solve. If you cannot find them, that is a signal.

**Pain point mining:** "What do they complain about with existing solutions?"
This is for when you know the market exists but want to know what is broken. You are looking for frustration -- posts where people describe what is wrong with what they currently use.

**Language mining:** "What exact words do my customers use?"
This is gold for marketing copy. Your customers do not use your industry jargon. They say "my skin feels tight after washing" not "compromised moisture barrier." The phrases they use in their own words are better than anything a copywriter will come up with.

**Competitor intelligence:** "What do people say about my competitors?"
You are looking for what people love and hate about specific brands. Not reviews on the brand's website (those are filtered). Real opinions from real users who have nothing to gain from lying.

**Product ideas:** "What do people wish existed?"
These are posts that start with "why doesn't anyone make a..." or "someone should build a..." or "I would pay good money for a..." These are product specs written by your future customers.

**Objection research:** "Why do people NOT buy products like mine?"
This one is underrated. You are looking for posts where people explain why they chose NOT to buy. Price? Trust? Complexity? Shipping? The reasons people do not buy are often more valuable than the reasons people do buy.

Pick one. Do one well. Then do the next one.

---

## 3. Quick Win: 3-Minute Pain Point Report

No setup. No tools. No accounts. Just Claude Code with web search turned on.

Open Claude Code and paste this:

```
Search Reddit for posts about [your niche/product category].
Find 20 posts where people complain about existing products or
ask for recommendations.

For each post:
1. The core complaint or need
2. The exact words they used
3. How many upvotes (indicates how common the problem is)

Then cluster these into the top 5 pain points, ranked by frequency.

For each pain point, give me the exact language I should use
in my marketing.
```

Replace `[your niche/product category]` with your actual niche. Be specific. "Coffee equipment" is better than "food and beverage." "Standing desks for home offices" is better than "furniture."

**What you get back:** A ranked list of real problems, described in real customer language, with a built-in measure of how common each problem is. In three minutes.

That report would cost you 2,000 euros from a market research firm. It would take two weeks. You just did it during your morning coffee.

---

## 4. Subreddit Discovery

You need to know where your audience hangs out before you can listen to them. Most founders know one or two obvious subreddits. There are always more.

```
Find the top 10 subreddits where people discuss [your product
category/industry].

For each subreddit:
1. Name and subscriber count
2. What kind of posts are popular there
3. Whether the audience is mostly beginners, experts, or mixed
4. The rules about self-promotion (important for later)
5. An example of a highly upvoted post that's relevant to
   my business

Rank them by relevance to someone selling [your product/service].
```

**Why this matters beyond research.** Once you know which subreddits your audience uses, you can:

- Monitor them regularly for new complaints and trends
- Understand the community norms before you ever post
- Find adjacent communities you did not know existed (a standing desk company might discover r/battlestations, r/workfromhome, and r/posture)

The adjacent communities are often the biggest discovery. Your customers do not just hang out in the obvious subreddit. They are in five or six related ones, and each one gives you a different angle on their needs.

---

## 5. Deep Dive: Complaint Mining

This is where the real intelligence lives. You are going to systematically extract every complaint and desire about your market, your competitors, or your product category.

### Complaint mining prompt

```
Search Reddit for these phrases:
- "[competitor product] sucks"
- "[competitor] alternative"
- "tired of [competitor]"
- "[competitor] vs"
- "switched from [competitor]"
- "disappointed with [competitor]"
- "cancelled my [competitor]"

Collect 30 posts or comments.

For each one:
1. What specifically they don't like
2. What they wish was different
3. What they switched to (and why)

Then create a "Complaint Map": group all issues by category
(price, quality, customer service, features, user experience,
shipping/logistics) and rank each category by how often it
comes up.
```

Replace `[competitor]` with your actual competitor's name. Run this for each of your top 3 competitors. The patterns will be different -- one competitor might have price complaints, another might have quality complaints. That tells you exactly where to position yourself.

### Desire mining prompt

```
Search Reddit for:
- "I wish [product category] would"
- "why doesn't [product category]"
- "someone should make a [product category] that"
- "is there a [product category] that does [X]"
- "looking for a [product category] that"
- "does anyone know a [product category] with"

Collect 20 posts. Each one is a potential feature or product idea.

Rank them by upvotes. The most upvoted unfulfilled desires are
your biggest opportunities.

For each one, tell me:
1. What they want
2. How many upvotes (demand signal)
3. Whether any existing product already solves this
4. How hard it would be to address (easy, medium, hard)
```

**The output is a prioritized opportunity list.** High upvotes + no existing solution = wide open market opportunity. High upvotes + bad existing solutions = competitive opportunity. Low upvotes + niche request = probably not worth pursuing yet.

---

## 6. Language Mining for Marketing Copy

This is the section that pays for itself fastest.

Your customers describe their problems in specific language. That language is more persuasive than anything you or a copywriter will come up with -- because it is the exact words that resonate with people who have the same problem.

```
From the Reddit posts about [your product category], extract:

1. The 10 most common phrases people use to describe this problem
   (exact quotes, not paraphrased)

2. The emotions they express — frustrated, overwhelmed, confused,
   excited, relieved, angry. With example quotes for each.

3. Before/after language: how they describe life BEFORE finding
   a solution vs. AFTER. This is your testimonial structure.

4. Objections: reasons they give for NOT buying existing solutions.
   These are the objections your landing page needs to overcome.

5. Decision triggers: what finally made them buy. The moment they
   describe that pushed them over the edge. This is your CTA copy.

Format this as a "Language Cheat Sheet" I can reference when
writing ad copy, landing pages, and emails.
```

### How to use the language cheat sheet

**For headlines:** Take the most common phrase they use to describe the problem. That is your headline. If Reddit users keep saying "I'm tired of paying $50/month for software I barely use," your headline is: "Tired of paying for software you barely use?"

**For ad copy:** Use the emotion words. If they say "frustrated" and "overwhelmed," your ad says "Frustrated with [X]? Overwhelmed by [Y]? There's a simpler way."

**For landing page objections:** Every objection they listed becomes a section on your landing page. If they say "I don't trust subscription models," you add a section: "No subscription. Pay once, own it forever."

**For CTAs:** The decision triggers tell you what pushes people to act. If the trigger is "I finally tried it when they offered a free trial," your CTA is "Start your free trial."

You are not guessing anymore. You are using their words to sell to people like them.

---

## 7. Building a Reddit Research Dashboard

Now let's build something you can use repeatedly. Instead of running prompts one by one, let's create a tool that does the entire research cycle and presents it cleanly.

```
Build me a Reddit research tool as a single HTML page.

I input:
- A topic or product category
- 3-5 related subreddits (optional — suggest some if I leave
  these blank)

When I click "Research", it shows a dashboard with:

1. A "Pain Points" section — cards showing the top complaints,
   each with:
   - The complaint theme
   - 2-3 real quotes from Reddit
   - An upvote count or frequency indicator
   - A severity tag (minor annoyance / real frustration /
     dealbreaker)

2. A "Desires" section — cards showing what people wish existed,
   each with:
   - What they want
   - Example quotes
   - Whether any existing product does this

3. A "Language" section — the exact phrases people use, grouped
   by emotion (frustrated, excited, confused, etc.)

4. A "Competitor Mentions" section — what people say about
   specific brands, positive and negative

Design: cream background (#EAE6DF), dark text (#2E2A26),
crimson (#8B1A10) for severity indicators. Cards with subtle
shadows. Clean, editorial layout.

Add a "Copy Report" button that copies the entire dashboard
as formatted text I can paste into a doc or Slack.

Add an "Export HTML" button that saves the current report as
a standalone HTML file I can share with my team.
```

This tool becomes your market research command center. Run it once a month for your own market. Run it for each new product idea. Run it before writing any major piece of marketing copy.

---

## 8. Social Listening Beyond Reddit

Reddit is the deepest source, but it is not the only one. The same research framework works on other platforms. Each platform has a different flavor of honesty.

### Twitter/X

Twitter is where people react in real time. Product launches, outages, price changes -- the immediate reaction shows up here first.

```
Search Twitter/X for people talking about [product category].

Find tweets where people:
- Complain about a product in this category
- Ask for recommendations
- Announce they switched from one product to another
- Express a wish or frustration

For each tweet, capture:
1. What they said (exact quote)
2. How many likes/retweets (engagement = resonance)
3. Whether they tagged a specific brand

Cluster into themes. What patterns do you see?
```

### Product Hunt

Product Hunt comments are from early adopters -- people who try new things and have strong opinions about what works and what does not.

```
Search Product Hunt for products in [your category].

For the top 5 products, read the comments. Extract:
1. What people praised (these are table-stakes features you
   must have)
2. What people criticized (these are opportunities)
3. What features people asked for (these are demand signals)
4. What alternatives people mentioned (these are your
   competitors)

Summarize: what does the ideal product in this category look
like, according to Product Hunt commenters?
```

### Amazon Reviews

Amazon reviews are the most structured source of customer intelligence. The star rating is a built-in filter.

```
Search for the top 5 products in [your category] on Amazon.

Read the 1-star and 5-star reviews. Ignore 2-4 stars (they
are noise).

From 1-star reviews, extract:
- The top 5 complaints (these are things to avoid or fix)
- Exact phrases people use when angry (these are objections
  to address)

From 5-star reviews, extract:
- The top 5 things people love (these are things to emphasize)
- Exact phrases people use when happy (these are testimonial
  templates)

Create a simple matrix: "What to avoid" vs. "What to emphasize"
```

**Why 1-star and 5-star only?** The extremes are where the signal is. 3-star reviews say "it's fine." That tells you nothing. 1-star reviews tell you exactly what to avoid. 5-star reviews tell you exactly what to promise.

### Quora

Quora is where people ask longer, more thoughtful questions. The questions themselves are content opportunities.

```
Search Quora for questions about [your topic].

Find 15 questions with the most answers/upvotes.

For each question:
1. The exact question asked
2. The most upvoted answer (what does the crowd think is
   the right answer?)
3. Whether your product/service could be the answer

The questions people ask on Quora are the blog posts you
should write, the FAQ items your landing page needs, and
the objections your sales team should be prepared for.
```

---

## 9. From Research to Action

Research without action is a hobby. Here is how to turn every insight into something concrete.

### For product development

```
Based on this Reddit research, what are the top 3 features my
competitors are missing that users actively want?

For the most-requested feature, write me a product spec:
1. What it does (user perspective)
2. Why it matters (the pain it solves)
3. How it should work (step by step)
4. What "done" looks like
5. How I would know if it's successful
```

### For marketing copy

```
Using the exact language from the Reddit research, write me:

1. A landing page headline that addresses the #1 pain point
   — use their words, not marketing speak

2. Three Facebook/Instagram ad hooks (first line of the ad)
   that will stop someone scrolling because they recognize
   their own problem

3. An email subject line for cold outreach that references
   the specific frustration they have

4. Five blog post titles that answer their most common
   questions — each title should use the exact phrasing
   they used on Reddit

For each one, show me the Reddit quote that inspired it
so I can see the connection.
```

### For positioning

```
Based on what Reddit users complain about with [competitor],
write me a positioning statement that directly addresses
their top 3 frustrations.

Structure:
- For [target customer] who [has this specific problem],
- [My product] is the [category] that [key differentiator].
- Unlike [competitor], we [solve the thing they hate].

Make it clear we solve what [competitor] doesn't. Use the
language from the research, not generic marketing language.
```

### For sales conversations

```
Based on this research, create a "cheat sheet" for sales calls:

1. The 5 most common objections and how to respond to each
   (using language that mirrors how customers talk)
2. The 3 biggest pain points to ask about in discovery calls
3. The trigger events that make people start looking for a
   new solution (so you know WHEN to reach out)
4. Competitor weaknesses to subtly highlight (not by
   trash-talking, but by emphasizing what you do better)
```

---

## 10. Automated Research Workflow

You have done this manually. Now let's set it up so you can run it repeatedly with minimal effort.

```
Create a script that does the following research workflow:

1. Search these 5 subreddits for posts from the last 7 days
   mentioning these keywords: [your keywords]
   Subreddits: [list them]

2. Extract key quotes and themes from the results

3. Compare with last week's results to spot what's new
   or trending

4. Generate a weekly report with these sections:
   - "What changed in [your market] this week"
   - New complaints (things people started complaining about)
   - New desires (things people started asking for)
   - Trending discussions (posts with unusually high engagement)
   - Notable competitor mentions

5. Save the report as a clean HTML page I can share with
   my team. Include a date stamp and a summary at the top.

Use cream background (#EAE6DF), dark text (#2E2A26).
Make it look like a professional briefing document,
not a data dump.
```

**How to use this weekly:** Every Monday morning, run this script. In five minutes you have a briefing on what happened in your market last week. Share it in your team Slack. Over time, you build a library of market intelligence that shows you trends -- not just snapshots.

### Monthly deep dive

Once a month, go deeper:

```
Compare the last 4 weekly reports. What trends are emerging?

1. Are certain complaints getting more frequent?
2. Are people asking for new things they weren't asking
   for before?
3. Has sentiment about any competitor shifted?
4. Are there new competitors being mentioned?

Write me a "Monthly Market Brief" that summarizes the
trajectory, not just the current state. What is getting
better in the market? What is getting worse? Where is the
opportunity moving?
```

---

## 11. Quick Wins

Copy any of these prompts into Claude Code right now. Each one takes under 5 minutes and gives you something immediately useful.

### 1. This month's complaints

```
What are people complaining about in r/[your-niche-subreddit]
this month? Give me the top 10 complaints with example quotes
and upvote counts. Rank by frequency.
```

### 2. Alternative seekers

```
Find 10 Reddit posts where someone asks for an alternative to
[competitor]. What do they want instead? What is missing from
[competitor] that they are looking for? List the desired
features in order of how often they come up.
```

### 3. Decision criteria

```
Search Reddit for "[your product type] recommendations".
What criteria do people use when deciding which product to
buy? List them in order of importance based on how often
each criterion is mentioned. This tells me what to emphasize
on my product page.
```

### 4. Ad copy extraction

```
Find the exact phrases people use when describing [your
customer's problem]. I need them for ad copy. Give me
20 phrases, each one a direct quote from a Reddit post.
Next to each phrase, tell me how I could use it: headline,
body copy, CTA, or testimonial prompt.
```

### 5. Visual pain point report

```
Build me a simple HTML page that shows the top 10 pain points
in [my market] with real Reddit quotes for each one.

Design it as a clean report I can share with my team.
Each pain point gets a card with: the theme, 3 supporting
quotes, and a frequency indicator (how often this comes up).

Cream background (#EAE6DF), dark text (#2E2A26).
Make it look professional — I want to share this in a
team meeting.
```

---

## 12. Workshop Exercise: Build a Complete Pain Point Report

This is your hands-on exercise. Follow these steps in order. By the end, you will have a shareable market intelligence report.

### Step 1: Identify your subreddits (3 minutes)

```
Find the 5 best subreddits for someone selling [your product
or service]. I need communities where my target customers
actively discuss products like mine.
```

Write down the top 3-5 subreddits from the results.

### Step 2: Mine complaints (5 minutes)

```
Search these subreddits for complaints about [your product
category]: [list subreddits]

Find 25 posts or comments where people express frustration,
disappointment, or unmet needs.

For each one, give me:
1. The complaint (one sentence)
2. The exact quote
3. The subreddit it came from
4. Upvotes or engagement level
```

### Step 3: Mine desires (5 minutes)

```
Now search the same subreddits for desires — posts where
people wish something existed, ask for recommendations,
or describe their ideal product.

Find 15 posts. Same format as above.
```

### Step 4: Cluster into themes (3 minutes)

```
Take all 40 complaints and desires from the previous
two searches. Cluster them into 5-7 themes.

For each theme:
1. Theme name (3-4 words)
2. How many posts mention it
3. The strongest quote that represents this theme
4. Whether this is primarily a complaint or a desire
5. How we could address this in our product or marketing
```

### Step 5: Generate marketing copy (5 minutes)

```
Using the themes and language from this research, write me:

1. Three headline options for my landing page
2. Three Facebook ad hooks (the first line that stops
   the scroll)
3. Five "pain point" bullets for a sales page — each one
   using language directly from the Reddit posts
4. A positioning statement that differentiates us from
   what people are complaining about

For each piece of copy, note which Reddit quote inspired it.
```

### Step 6: Build the report (5 minutes)

```
Build me a shareable HTML report that contains everything
from this research:

Page 1 (top): Executive summary — the 3 biggest takeaways
in bold.

Section 1: Pain Points — cards for each theme, with quotes
and frequency.

Section 2: Desires — what customers want that doesn't
exist yet.

Section 3: Language Cheat Sheet — exact phrases to use in
marketing.

Section 4: Recommended Actions — what to do with these
insights (product changes, marketing copy, positioning).

Design: cream background (#EAE6DF), dark text (#2E2A26),
crimson accent (#8B1A10) for key highlights. Clean layout,
printable. Add a date and a title.

Add a "Copy to Clipboard" button for the executive summary.
```

**Total time: about 25 minutes.** You now have a professional market intelligence report that you can share with your team, your co-founder, or your investors. It is based on real customer language, not assumptions.

---

## 13. Ethics and Best Practices

Reddit is public. Everything we just did uses publicly available information. But "you can" and "you should" are different things.

**Do not astroturf.** Astroturfing is creating fake posts or comments to promote your product. Reddit communities are extremely good at detecting this, and getting caught will damage your brand far more than any post could help it.

**Do not shill in subreddits.** If someone asks for a recommendation and your product genuinely fits, it is fine to mention it -- but disclose that you work for the company. Most subreddits require this. Many will ban you if you do not.

**Use insights for genuine improvement.** The point of this research is to make your product better and your marketing more honest. If you find out people hate a feature of your competitor, the move is to build that feature well -- not to run attack ads.

**Give credit where it makes sense.** If a Reddit comment inspired a product feature, that is a great story. "We built this because a user on Reddit said..." is authentic marketing. People love knowing they were heard.

**Do not scrape personal information.** Usernames, post history, personal details -- leave those alone. You want the insights, not the identities.

**Respect community rules.** Every subreddit has rules posted in the sidebar. Read them before you ever post. Many subreddits have strict rules about self-promotion, surveys, and market research. Follow them.

**The golden rule:** Use this research to build things people actually want and describe them in language people actually use. That is not manipulation. That is listening.

---

**Next up: Module 7 -- Lead Generation.** You know what your market wants. Now let's find the specific people who want it and build tools to reach them.
