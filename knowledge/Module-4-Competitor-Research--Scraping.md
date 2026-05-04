# Module 4: Competitor Research & Scraping

## Your Unfair Advantage in Competitive Intelligence

Every founder does competitor research. You visit their websites, compare prices, read their reviews, check their ads, screenshot their landing pages. It takes hours every week and you still feel like you're missing things.

Claude Code turns this into a 10-minute workflow. You describe what you want to know, it goes and finds out, and hands you a structured comparison you can actually act on.

This module is your complete playbook for using Claude Code as a competitive intelligence tool -- from quick one-off research to automated monthly monitoring.

---

## 1. Why Competitor Research Is the Highest-ROI Use of Claude Code

Most people start learning Claude Code by asking it to build things. That's great, but the fastest payoff comes from research.

Here's why:

**You're already doing this work manually.** Every week you're visiting competitor sites, comparing pricing, reading what customers say about them, checking what ads they're running. Claude Code doesn't create new work -- it replaces work you're already doing, but does it faster and more thoroughly.

**The output is directly actionable.** Unlike a fancy app that takes weeks to build, a competitor comparison gives you insights you can act on today:
- Adjust your pricing based on where you sit in the market
- Write ad copy that addresses your competitors' weaknesses
- Spot product gaps nobody is filling
- Stop guessing at positioning and see it mapped out visually

**The time savings are dramatic.** A thorough competitive analysis that would take you 4-6 hours manually takes Claude Code about 10 minutes. And it doesn't get bored, doesn't skip pages, and doesn't forget to check the third review site.

**You don't need any technical setup to start.** The first technique in this module works with Claude Code right out of the box. No servers, no databases, no configuration. Just a prompt.

---

## 2. The Competitor Research Stack

Before we dive into prompts and workflows, here's a quick overview of the tools involved. You don't need all of them -- we'll start simple and add layers as needed.

### Layer 1: Claude Code with Web Search (no setup needed)
Claude Code can search the web on its own. This is enough for quick research -- getting an overview of a competitor, finding reviews, understanding their positioning. You literally just ask it to research something.

### Layer 2: Playwright MCP (5 minutes to set up)
Playwright is a tool that lets Claude Code actually visit websites -- load the page, read the content, click around, take screenshots. This is what you need when you want to scrape specific data like product prices, feature lists, or page layouts.

Setting it up takes one command (covered in Section 4).

### Layer 3: Supabase for Historical Tracking (optional)
If you want to track how competitors change over time -- prices going up, products being added or removed, positioning shifts -- you store the data in a database. Supabase is a free hosted database that works well with Claude Code.

This is covered in Module 10. For now, we'll use simple file-based storage that works fine for monthly tracking.

### The Spec Approach
The most important "tool" isn't software -- it's knowing what you want before you start. Write down:
- Who are your competitors?
- What do you want to compare?
- What decisions will this research inform?

If you can't answer these, you'll end up with a pile of data and no clarity. We'll build your spec as we go through this module.

---

## 3. Quick Win: 5-Minute Competitor Overview

This is the fastest way to get value from Claude Code. No setup. No tools to install. Just open Claude Code and paste this prompt.

### The Prompt

```
Research [competitor name]. Tell me:

1. Their main products and price ranges
2. Their positioning -- who are they targeting?
3. Their strengths and weaknesses based on public reviews
4. What they're doing that I should steal
5. What they're doing wrong that I can exploit

Search the web for current information.
```

Replace `[competitor name]` with an actual competitor. If they have a distinctive name, just use that. If it's generic, include their URL.

### What You'll Get Back
Claude Code will search the web, read through multiple sources, and give you a structured breakdown. It typically pulls from:
- The competitor's own website
- Review sites (Trustpilot, G2, Google Reviews, Amazon)
- News articles and press releases
- Social media mentions
- Industry comparison sites

### Making It Better
The basic prompt works, but you get much better results when you give Claude Code context about YOUR business:

```
I run [your business description]. My website is [your-url.com].
I sell [product type] at [price range] targeting [audience].

Research [competitor name] ([competitor-url.com]).

Compare them to me specifically:
1. How does their product range compare to mine?
2. Where are they priced relative to me?
3. Who are they targeting vs. who I'm targeting?
4. What are they doing better than me?
5. What are they doing worse than me?
6. What opportunity exists that neither of us is capturing?

Search the web for current information.
```

This contextual version gives you insights that are specific to your situation, not just a generic overview.

### Multi-Competitor Quick Comparison

```
I run [your business description].

Research these 3 competitors and create a comparison table:
1. [Competitor A] - [url]
2. [Competitor B] - [url]
3. [Competitor C] - [url]

Compare across: pricing, target audience, product range, 
key differentiator, biggest weakness, and overall threat level to my business.

Format as a clear table. Then write a 3-paragraph summary of 
the competitive landscape and where the biggest opportunity is for me.

Search the web for current information.
```

Try this right now. It takes less than 5 minutes and the output is genuinely useful.

---

## 4. Scraping Competitor Websites with Playwright

Web search gives you a good overview, but sometimes you need specific data from specific pages. That's where Playwright comes in. It lets Claude Code actually visit a website, read everything on the page, and extract exactly what you need.

### Setting Up Playwright MCP

Run this one command in your terminal:

```
claude mcp add playwright -- npx -y @anthropic-ai/mcp-playwright
```

That's it. Playwright is now available to Claude Code. You only need to do this once.

### What You Can Scrape

**Product pages** -- names, prices, descriptions, variants, images
```
Visit [competitor-url.com/collections/all] and extract every product 
on the page. For each product, get: name, price, and short description. 
Format as a table sorted by price.
```

**Pricing pages** -- tiers, features, pricing models
```
Visit [competitor-url.com/pricing] and extract their full pricing structure.
For each tier: name, price (monthly and annual if available), 
and the full feature list. Format as a comparison table.
```

**About/team pages** -- company size, positioning, mission
```
Visit [competitor-url.com/about] and extract:
- Their mission statement or tagline
- Team size (count the team members if there's a team page)
- Key positioning language -- what words do they use to describe themselves?
- Any notable partnerships, certifications, or social proof
```

**Blog/content** -- topics, frequency, strategy
```
Visit [competitor-url.com/blog] and analyze their last 20 blog posts.
For each: title, date published, and main topic.
Then tell me:
- How often do they publish?
- What topics do they focus on?
- What topics are they ignoring?
- What content should I create to compete with them?
```

### Side-by-Side Product Comparison

This is one of the most powerful prompts in this module:

```
Step 1: Visit [competitor-url.com/products] and extract all product 
names and prices into a table.

Step 2: Visit [my-site.com/products] and do the same.

Step 3: Create a side-by-side comparison showing:
- Products I offer that they don't
- Products they offer that I don't
- Where I'm more expensive
- Where I'm cheaper
- The average price difference across comparable products
```

This gives you immediate pricing intelligence. You'll see exactly where you're over- or under-priced relative to a specific competitor.

### Side-by-Side Pricing Page Comparison

```
Visit [competitor-url.com/pricing] and [my-site.com/pricing].

Create a comparison that shows:
- Their tiers vs. my tiers
- Price difference at each level
- Features they include that I don't
- Features I include that they don't
- Where I'm leaving money on the table
- Where I'm overcharging relative to what I offer
```

### Taking Screenshots for Visual Comparison

```
Visit [competitor-url.com] and take a screenshot of their homepage.

Then analyze:
- What's their hero message?
- What's the first call-to-action?
- How do they build trust (testimonials, logos, guarantees)?
- What's the overall design feel (premium, casual, technical, friendly)?

Now compare this to my site at [my-site.com] and tell me 
what they're doing better visually and what I'm doing better.
```

### Important: Be Respectful When Scraping

A few ground rules:
- **Don't scrape the same site more than once a week.** You're visiting their site like a customer would -- just don't do it every hour.
- **Don't try to bypass logins or paywalls.** Only scrape publicly available pages.
- **Don't scrape personal data.** Stick to product info, pricing, and public content.
- **Check their robots.txt if you're unsure.** Most product and pricing pages are fine to visit.

---

## 5. Building a Competitor Comparison Dashboard

Now let's put it all together. Instead of getting results in text, we'll build a visual HTML dashboard you can share with your team or reference during strategy meetings.

### Step 1: Define Your Competitors (the Spec)

Before you touch Claude Code, write this down:

```
I sell [product type] at [your-site.com].
My target customer is [description].
My price range is [low] to [high].

My top 5 competitors are:
1. [Name] - [url] - [why they're a competitor]
2. [Name] - [url] - [why they're a competitor]
3. [Name] - [url] - [why they're a competitor]
4. [Name] - [url] - [why they're a competitor]
5. [Name] - [url] - [why they're a competitor]

I want to compare:
- Pricing (across comparable products)
- Product range (breadth and depth)
- Positioning (who they target and how they talk about it)
- Customer sentiment (what people love and hate about them)
```

This is your competitive research spec. Paste it into Claude Code as context for everything that follows.

### Step 2: Scrape the Data

```
Using Playwright, visit each competitor's product/pricing page and 
extract all product names, prices, and descriptions.

Competitors:
1. [url-1/products]
2. [url-2/products]
3. [url-3/products]
4. [url-4/products]
5. [url-5/products]

Also visit my site: [my-url/products]

Save all results as a single JSON file at ./competitor-data.json 
with this structure:
{
  "scraped_date": "2026-04-08",
  "companies": [
    {
      "name": "Company Name",
      "url": "url",
      "products": [
        { "name": "Product", "price": 29.99, "description": "..." }
      ]
    }
  ]
}
```

### Step 3: Build the Dashboard

```
Using the data in ./competitor-data.json, create an HTML dashboard 
at ./competitor-dashboard.html.

Include these sections:

1. PRICE COMPARISON TABLE
   - Rows: product categories
   - Columns: each competitor + my company
   - Color code: green where I'm cheapest, red where I'm most expensive

2. POSITIONING MAP
   - X-axis: price (budget to premium)
   - Y-axis: product range (specialist to generalist)
   - Plot each competitor as a labeled dot
   - Highlight my position
   - Show the "opportunity zone" -- where no one is positioned

3. COMPETITOR CARDS
   - One card per competitor
   - Key stats: number of products, price range, target audience
   - Strengths (2-3 bullets)
   - Weaknesses (2-3 bullets)

4. OPPORTUNITIES SECTION
   - Gaps in the market
   - Underserved customer segments
   - Pricing opportunities
   - Product ideas based on competitor weaknesses

Style it cleanly. Cream background (#EAE6DF), charcoal text (#2E2A26), 
crimson accents (#8B1A10) for highlights. Modern, editorial look.
```

### Step 4: Make It Reusable

```
Create a simple script I can run monthly to refresh the competitor data.

It should:
1. Scrape all 5 competitors + my site (same pages as before)
2. Save the data as competitor-data-YYYY-MM-DD.json (with today's date)
3. Rebuild the dashboard with the latest data
4. Show a "changes since last scrape" section at the top of the dashboard
   highlighting any price changes, new products, or removed products
```

Now you have a living competitive intelligence tool. Run it once a month and you'll always know where you stand.

---

## 6. Competitive Positioning Analysis

Price comparison is useful, but positioning is where the real strategic insight lives. Two companies can sell the same product at the same price and still be completely different competitors because of how they position themselves.

### The Positioning Analysis Prompt

```
Analyze these 5 competitors. For each one, research their website, 
reviews, and public presence, then identify:

1. Target customer -- who are they really selling to? 
   (Be specific: "budget-conscious millennial women" not just "women")
2. Price positioning -- budget, mid-range, premium, or luxury?
3. Key differentiator -- what's their ONE thing? 
   The reason someone picks them over alternatives.
4. Brand voice -- professional, casual, luxury, technical, 
   playful, authoritative?
5. Distribution -- where do they sell? 
   (own site, Amazon, retail, wholesale, marketplaces)
6. Content strategy -- what are they publishing and where?
7. Weaknesses -- based on reviews and public complaints, 
   what do they get wrong?

Competitors:
1. [Name] - [url]
2. [Name] - [url]
3. [Name] - [url]
4. [Name] - [url]
5. [Name] - [url]

My business: [your description]

After analyzing all 5, answer:
- Where is the market crowded?
- Where is the gap?
- What positioning would be hardest for any of them to copy?
- What should MY positioning be?

Search the web for current information.
```

### Building a Visual Positioning Map

A positioning map makes your competitive landscape instantly understandable. Here's how to create one:

```
Based on your analysis of my competitors, create an HTML positioning 
map at ./positioning-map.html.

X-axis: Price (Budget to Premium)
Y-axis: [Choose one that matters for your market]:
  - Traditional to Modern
  - Niche/Specialist to Broad/Generalist  
  - Basic to Feature-Rich
  - Functional to Lifestyle/Emotional

Plot each competitor as a circle. Size of circle = rough estimate 
of their market presence. Color each one differently. Label clearly.

Plot MY position with a distinct marker.

Draw a dotted circle around the "opportunity zone" -- the area 
where no competitor is positioned but customers likely exist.

Include a legend and a short explanation below the map 
of what the opportunity zone means for my strategy.
```

This is the kind of thing you'd pay a strategy consultant thousands of euros to produce. Claude Code builds it in minutes.

### Differentiator Deep-Dive

Once you know the landscape, dig into what actually makes each competitor different:

```
For each of these competitors, visit their homepage and their 
"about" or "our story" page.

Extract their exact positioning language -- the actual words and 
phrases they use to describe themselves. Look for:
- Taglines and hero text
- How they describe their products
- The benefits they emphasize
- The emotions they try to evoke
- Claims they make (fastest, cheapest, most sustainable, etc.)

Put it all in a table so I can see the patterns.

Then tell me: what positioning language is NOBODY using 
that I could own?
```

---

## 7. Review Mining

Customer reviews are a goldmine. They tell you exactly what people love and hate about your competitors -- in their own words. This is free market research.

### Basic Review Mining

```
Search the web for reviews of [competitor name/product].

Check: Trustpilot, Google Reviews, Amazon reviews, G2 (for SaaS), 
Reddit discussions, and any other review sources you can find.

Collect the 30 most recent reviews. For each one, note:
- Rating (stars or sentiment)
- Key point (one sentence summary)
- Sentiment: positive, negative, or mixed

Then synthesize:
1. Top 3 things customers consistently love
2. Top 3 things customers consistently complain about
3. Features or improvements customers keep asking for
4. The emotional language they use (frustrated, delighted, 
   disappointed, impressed)
```

### Turning Reviews Into Marketing Ammunition

This is where review mining becomes directly profitable:

```
Based on the competitor review analysis above, help me write 
marketing copy that specifically addresses their customers' pain points.

For each of their top 3 complaints, write:
1. A headline for my website that addresses that exact frustration
2. A short paragraph (2-3 sentences) positioning my product as the solution
3. An ad hook (one line) I could use in a paid ad

Use the actual language customers used in their complaints -- 
mirror their words back to them.
```

**Example of what this produces:**

If competitor reviews say "Great product but customer service is terrible -- waited 3 days for a response," your ad copy becomes: "Same-day customer support. Because waiting 3 days for help shouldn't be part of the deal."

That's not generic marketing. That's targeted positioning based on real competitor weaknesses.

### Sentiment Tracking Over Time

```
Search for reviews of [competitor] from the last 6 months.

Break them down by month:
- Average rating per month
- Number of reviews per month
- Top complaint per month
- Overall trend: improving, declining, or stable?

If they're declining, identify what changed. 
New product? Price increase? Service issue?

This tells me: is this competitor getting stronger or weaker?
```

### Review Comparison Across Competitors

```
Search for reviews of each of these competitors:
1. [Competitor A]
2. [Competitor B]
3. [Competitor C]

For each one, find their average rating and top 3 complaints.

Create a table showing:
| Competitor | Avg Rating | #1 Complaint | #2 Complaint | #3 Complaint |

Then answer: which competitor has the most dissatisfied customers? 
Those are the customers most likely to switch to me.

What messaging would resonate with those dissatisfied customers?
```

---

## 8. Tracking Changes Over Time

One-time research is useful. Ongoing monitoring is powerful. When you track competitors over time, you catch things like:
- Price increases before they become the new normal
- New products launching (signals where the market is heading)
- Products being discontinued (signals what's not working)
- Messaging changes (signals a strategic pivot)

### Simple File-Based Tracking (No Database Needed)

```
I want to track competitor data over time using simple JSON files.

Each time I run this, save the scrape results to:
./competitor-data/scrape-YYYY-MM-DD.json

The file should contain:
{
  "date": "2026-04-08",
  "competitors": [
    {
      "name": "Competitor A",
      "url": "...",
      "products": [
        { "name": "...", "price": 29.99, "category": "..." }
      ],
      "pricing_tiers": [...],
      "hero_message": "Their current homepage headline",
      "product_count": 42
    }
  ]
}

Then compare today's scrape with the most recent previous scrape 
(if one exists) and show me:
- Products added (new)
- Products removed
- Price changes (up or down, by how much)
- Messaging changes
- Any other notable differences
```

### Building a Changes Dashboard

```
Read all JSON files in ./competitor-data/ and build a changes 
dashboard at ./competitor-changes.html.

Show a timeline of changes:
- Price changes plotted on a line chart (one line per competitor)
- A table of all product additions and removals, sorted by date
- Messaging changes shown as before/after comparisons

Highlight anything that changed in the last 30 days in crimson (#8B1A10).
```

### Database Tracking with Supabase (For Ongoing Monitoring)

If you want more structured tracking, especially if you plan to monitor competitors for months or years, a database makes it easier. This requires Supabase (covered in Module 10), but here's the concept:

```
Create a Supabase table called 'competitor_snapshots' with columns:
- id (auto-generated)
- competitor_name (text)
- product_name (text)
- price (numeric)
- category (text)
- scraped_at (timestamp, auto-set to now)

Every time I run the scraper, insert new rows for every product.
Don't update old rows -- always insert new ones so I have a full history.

Then build a dashboard that queries this table and shows:
- Current prices for all competitors in a comparison table
- A line chart of price changes over time for each competitor
- Alerts: any price that changed by more than 10% since last scrape
```

---

## 9. Workflows for Different Business Types

Competitor research looks different depending on what you sell. Here are specific workflows tailored to different business types.

### Ecommerce / DTC Brands

You sell physical products directly to consumers. Your competitors are other brands in your category.

**Weekly (15 minutes):**
```
Check the current prices of my top 10 best-selling products 
against these 3 competitors:
1. [competitor-1.com/products]
2. [competitor-2.com/products]
3. [competitor-3.com/products]

Flag any price that changed since last week. 
Show me where I'm now the most expensive option.
```

**Monthly (30 minutes):**
```
Visit each competitor's full product catalog and compare to mine.

Tell me:
- New products they launched this month
- Products they discontinued
- Any new collections or categories they added
- Changes to their shipping or return policies
- New promotions or bundles

Also search for recent reviews and social media mentions 
to gauge customer sentiment.
```

**Quarterly (1 hour):**
```
Do a full competitive positioning review.

For each competitor, analyze:
- How has their positioning shifted in the last 3 months?
- Any new marketing campaigns or brand refreshes?
- How has their product range changed?
- Are they moving upmarket or downmarket?
- What's their content strategy (blog, social, email)?

Create an updated positioning map and a summary of 
the 3 biggest competitive threats and opportunities.
```

### SaaS / Digital Products

You sell software or digital tools. Your competitors are other tools solving the same problem.

**Monthly (20 minutes):**
```
Visit each competitor's pricing page and feature list:
1. [competitor-1.com/pricing]
2. [competitor-2.com/pricing]
3. [competitor-3.com/pricing]

Create an updated feature comparison matrix:
- Rows: features
- Columns: each competitor + my product
- Cells: checkmark, X, or "partial"

Highlight features they all have that I don't (table stakes I'm missing)
and features I have that none of them do (my unique advantages).

Also check: did anyone change their pricing this month?
```

**Monthly content/SEO check:**
```
Visit each competitor's blog and compare to mine.

For each competitor:
- How many posts did they publish this month?
- What topics did they cover?
- Which posts appear to have the most engagement (comments, shares)?
- What keywords are they clearly targeting?

Then tell me: what topics should I write about to 
compete with their content strategy?
```

### Service Businesses / Agencies

You sell expertise and deliverables. Your competitors are other agencies or freelancers.

**Monthly (20 minutes):**
```
Research these competitor agencies:
1. [agency-1.com]
2. [agency-2.com]
3. [agency-3.com]

For each one, analyze:
- Their service offerings (what they sell, at what level of detail)
- Their portfolio/case studies (what kind of work, what kind of clients)
- Their team page (how big, what expertise do they highlight)
- Their pricing (if public) or pricing signals (words like "starting at" or "custom")
- Testimonials and social proof (how many, from whom)

Create a comparison showing:
- Where do they overlap with my services?
- What do they offer that I don't?
- What do I offer that they don't?
- Where is the positioning gap I can own?
```

---

## 10. Quick Wins to Try Right Now

You don't need to build a full dashboard to get value. Here are standalone prompts you can run right now, each one delivers useful output in under 5 minutes.

### Quick Win 1: The Instant Comparison Table

```
Research my top 3 competitors:
1. [Competitor A]
2. [Competitor B]
3. [Competitor C]

Create a comparison table with these columns:
- Pricing (cheapest to most expensive)
- Target audience
- Key differentiator
- Biggest weakness
- Threat level to my business (low/medium/high)

My business: [your description]

Search the web for current information.
```

### Quick Win 2: Steal Their Best Ideas

```
Visit [competitor-url.com] and take a screenshot of their homepage.

Tell me:
- What's the best thing about this page?
- What conversion tactic are they using that I should copy?
- What social proof do they show?
- What's their call-to-action strategy?
- What would make their page better?

Then give me specific, actionable suggestions for improving 
MY homepage at [my-url.com] based on what they're doing well.
```

### Quick Win 3: Marketing Opportunities from Complaints

```
Search for "[competitor name] review" and "[competitor name] complaints" 
and "[competitor name] alternative" on the web.

Summarize:
- What do people consistently complain about?
- What alternatives do people recommend and why?
- What are people searching for that this competitor doesn't deliver?

These are my marketing opportunities. For each complaint, 
write a one-line ad hook I could use.
```

### Quick Win 4: Pricing Intelligence

```
Compare [competitor]'s pricing with mine.

Visit [competitor-url.com/pricing] and [my-url.com/pricing].

Tell me:
- Where am I underpriced (leaving money on the table)?
- Where am I overpriced (losing customers on price)?
- What's included in their cheapest tier that I don't offer?
- What's included in my cheapest tier that they charge more for?
- If I had to raise one price, which one and why?
```

### Quick Win 5: The "Why They Win" Analysis

```
Research [competitor name] -- the biggest player in my market.

I want to understand why they're winning. Analyze:
- Their customer acquisition strategy (ads, content, SEO, partnerships?)
- Their retention strategy (loyalty programs, subscriptions, community?)
- Their brand strength (recognition, trust signals, media coverage?)
- Their operational advantages (faster shipping, better support, wider selection?)

Then tell me: what's the ONE thing they do that contributes most 
to their success? And can I realistically compete with that, 
or do I need to win on a different dimension?
```

---

## 11. Workshop Exercise: Build Your Competitor Dashboard

This is the hands-on exercise for this module. Set aside 30-45 minutes and build a real competitor intelligence dashboard for your actual business.

### Instructions

**Step 1: Choose Your Competitors (5 minutes)**

Write down 3-5 competitors. They should be:
- Companies your customers actually consider instead of you
- A mix: one bigger than you, one your size, one smaller or newer
- Real URLs you can visit

Write your spec:
```
My business: [what you sell, who you sell to, your price range]
My website: [your URL]

Competitors:
1. [Name] - [URL] - [Why they're a competitor]
2. [Name] - [URL] - [Why they're a competitor]
3. [Name] - [URL] - [Why they're a competitor]
```

**Step 2: Run the Quick Overview (5 minutes)**

Paste your spec into Claude Code with this addition:
```
Research each competitor. For each one, tell me:
- What they sell and at what price range
- Who they're targeting
- Their key differentiator
- Their biggest weakness
- How they compare to me

Search the web for current information.
```

Read the output. Anything surprising? Write down one insight you didn't have before.

**Step 3: Scrape Their Data (10 minutes)**

Now set up Playwright (if you haven't already):
```
claude mcp add playwright -- npx -y @anthropic-ai/mcp-playwright
```

Then scrape:
```
Using Playwright, visit each competitor's product/pricing page 
and extract their offerings:

1. [competitor-1-url/products-or-pricing]
2. [competitor-2-url/products-or-pricing]
3. [competitor-3-url/products-or-pricing]

Also visit my site: [my-url/products-or-pricing]

Save everything as ./competitor-data.json.
```

**Step 4: Build the Dashboard (10 minutes)**

```
Using the data in ./competitor-data.json, create a competitor 
dashboard at ./competitor-dashboard.html.

Include:
1. Price comparison table (color-coded: green = I'm cheapest, red = I'm most expensive)
2. Positioning map (X: price, Y: [choose your dimension])
3. Competitor profile cards (strengths, weaknesses, threat level)
4. Opportunities section (gaps I can exploit)

Make it clean and professional. I want to be able to share 
this with my co-founder or team.
```

**Step 5: Extract One Actionable Insight (5 minutes)**

```
Based on everything you've analyzed about my competitors, 
give me the single most important action I should take 
in the next 7 days to improve my competitive position.

Be specific. Not "improve your marketing" -- something like 
"Lower the price of [product] by 15% to match [competitor]" 
or "Add a free tier to capture the segment [competitor] is ignoring."
```

### What You Should Have at the End

- A JSON file with structured competitor data
- An HTML dashboard you can open in your browser
- A clear picture of where you stand competitively
- One specific action to take this week

---

## 12. Common Mistakes (and How to Avoid Them)

### Mistake 1: Scraping Too Frequently
Once a week is plenty for price checks. Once a month is fine for positioning analysis. Scraping a site every hour is unnecessary, rude, and might get your IP blocked. Think of it like visiting a store to check prices -- normal to do weekly, weird to do hourly.

### Mistake 2: Focusing Only on Price
Price is the easiest thing to compare, so people over-index on it. But customers don't always buy the cheapest option. They buy the option that feels right -- the one with the best brand, the most trust signals, the right positioning. Compare everything: brand, experience, content, community, support, not just price.

### Mistake 3: Copying Instead of Differentiating
The goal of competitor research is NOT to become a copy of your best competitor. It's to find the gaps. If everyone in your market is doing the same thing, the opportunity is to be different, not to be a slightly better version of the same.

When you see a competitor doing something well, ask: "Should I copy this, or should I deliberately do the opposite?" Sometimes the best strategy is to zig when everyone else zags.

### Mistake 4: Collecting Data Without Acting
A beautiful dashboard that nobody looks at is a waste of time. Every time you run a competitive analysis, commit to one action based on what you found. Change a price. Update a headline. Launch a product. Write an ad. The analysis is only valuable if it changes what you do.

### Mistake 5: Ignoring Non-Obvious Competitors
Your real competition might not be who you think. A DTC skincare brand's biggest competitor might not be another skincare brand -- it might be a dermatologist's office or a Reddit community giving free advice. Ask Claude Code to identify indirect competitors too:

```
I sell [your product/service]. 

Beyond direct competitors (other companies selling the same thing), 
who else are my customers choosing instead of me? Think broadly:
- DIY alternatives
- Substitute products
- Free resources
- Completely different solutions to the same problem

Search the web for how people currently solve the problem 
my product addresses.
```

### Mistake 6: Not Sharing the Insights
Competitor intelligence is most valuable when your whole team sees it. Share the dashboard. Present the findings. Make it part of your monthly routine. If it lives in a folder nobody opens, it's not doing its job.

---

## Summary

Here's what you now know how to do:

1. **Quick research** -- Get a competitor overview in 5 minutes with zero setup
2. **Website scraping** -- Extract specific data from competitor sites using Playwright
3. **Dashboard building** -- Create visual comparisons you can share with your team
4. **Positioning analysis** -- Map the competitive landscape and find gaps
5. **Review mining** -- Turn competitor weaknesses into your marketing copy
6. **Change tracking** -- Monitor competitors over time to catch shifts early
7. **Business-specific workflows** -- Tailored routines for ecommerce, SaaS, and services

The most important thing: start with the Quick Win in Section 3. It takes 5 minutes and requires no setup. Once you see how useful it is, you'll naturally want to build out the more advanced workflows.

### Your Takeaway File

This module's `templates/competitor-report-template.md` gives you a structured format for every competitor analysis: company overview, pricing table, strengths, weaknesses, customer sentiment, opportunities, threats, and 3 actionable recommendations. Same structure every time, so you can compare competitors side by side.

---

## Next Module

**Module 5: Ad Scraping & Analysis** -- Find out what ads your competitors are running, what's working for them, and how to write better ads based on competitive intelligence.
