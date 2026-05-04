# Module 5: Ad Scraping & Creative Analysis

**Claude Code Bookclub** -- Session 5 of 6

---

Your competitors are spending thousands per month on ads. They're testing headlines, hooks, offers, visuals, copy length, CTAs -- and the ones that keep running are the ones that work.

Here's the thing most people don't realize: all of that creative intelligence is public. Every Facebook ad, every Instagram promotion, every Google search ad -- visible to anyone who knows where to look.

This module turns you into someone who knows where to look. And more importantly, someone who knows what to do with what they find.

By the end, you'll have a complete ad intelligence workflow: find competitor ads, analyze what makes them work, build a swipe file, and generate your own ad concepts based on real data instead of guesswork.

---

## 1. Why Ad Intelligence Matters

Let's be blunt about what advertising really is.

Every ad a competitor runs is a bet. They're betting money that a specific combination of words, images, and offers will make someone stop scrolling and take action. When an ad runs for two weeks and disappears, the bet lost. When an ad runs for three months straight, the bet won.

You can see every single one of those bets. For free. In real time.

This is not a loophole. Ad transparency is a legal requirement. Meta, Google, TikTok, and LinkedIn all maintain public libraries of every ad running on their platforms. They're designed to be searched. They're designed to be analyzed.

Most founders ignore this entirely. They sit in a room brainstorming ad copy from scratch, guessing at what might work, burning budget on untested ideas. Meanwhile, the answers are sitting in a public database -- what hooks work, what offers convert, what copy length performs, what visual style gets clicks.

### What You Can Learn From Competitor Ads

- **What messaging resonates** -- the hooks and angles they keep using are the ones that work
- **What offers convert** -- discounts, bundles, free trials, limited-time pricing
- **What creative formats perform** -- video vs. image vs. carousel, long copy vs. short
- **What their funnel looks like** -- the ad promise tells you what their landing page delivers
- **What they've given up on** -- the angles that disappeared are the ones that failed
- **What gaps exist** -- the angles nobody is using are your opportunity

### The Duration Rule

This is the most important heuristic in ad intelligence:

**The longer an ad has been running, the more likely it's profitable.**

Nobody keeps spending money on ads that don't work. If a competitor has been running the same ad for 60 days, that ad is printing money for them. Study it. Understand why. Then build your own version.

---

## 2. Where to Find Competitor Ads

There are four major ad libraries, all free, all public. Each one shows you different things.

### Meta Ad Library (Facebook & Instagram)

**URL:** [facebook.com/ads/library](https://www.facebook.com/ads/library)

This is the big one. Every active Facebook and Instagram ad, from any advertiser, anywhere in the world. You can search by advertiser name, keyword, or category.

What you can see:
- The full ad creative (image, video, or carousel)
- The primary text (the copy above the image)
- The headline (below the image)
- The CTA button text
- The start date (so you know how long it's been running)
- Whether it's running on Facebook, Instagram, Messenger, or Audience Network
- Multiple variants if they're A/B testing

What you can't see:
- How much they're spending
- The exact targeting (age, location, interests)
- Click-through rates or conversion rates

But you don't need any of that. The duration tells you everything about performance.

### Google Ads Transparency Center

**URL:** [adstransparency.google.com](https://adstransparency.google.com)

Shows all Google search ads, display ads, and YouTube ads. Search by advertiser name or domain.

What you can see:
- Search ad headlines and descriptions
- Display ad creative
- YouTube video ads
- Date ranges of when ads ran
- Regions where ads are shown

### TikTok Creative Center

**URL:** [ads.tiktok.com/business/creativecenter](https://ads.tiktok.com/business/creativecenter)

This one is different -- instead of searching by advertiser, you browse top-performing ads by category. TikTok actually curates the best-performing creative and shows you what's working.

What you can see:
- Top ads by industry/category
- Trending ad formats
- Popular hooks and CTAs
- Creative patterns that drive engagement

### LinkedIn Ad Library

**URL:** [linkedin.com/ad-library](https://www.linkedin.com/ad-library/)

B2B focused. Shows all active LinkedIn ads by any advertiser.

What you can see:
- Sponsored content (feed ads)
- Ad creative and copy
- Advertiser name and industry

### Using Playwright MCP for Systematic Scraping

For one-off searches, just go to these sites manually. But if you want to do this systematically -- monitoring 10 competitors weekly, tracking which ads appear and disappear -- you can use Claude Code with the Playwright MCP server to automate it.

More on this in Section 8. For now, start with the manual approach. It takes 5 minutes and gives you immediate insight.

---

## 3. Quick Win: Pull Competitor Ads in 2 Minutes

This requires zero setup. Just open Claude Code and paste this prompt. Claude will use web search to find the ads for you.

### The Prompt

```
Search the Meta Ad Library for ads by [COMPETITOR BRAND NAME].

Find their 10 most recent active ads. For each ad, tell me:

1. The primary text/copy (the text above the image)
2. The headline (below the image)
3. The CTA button text (Shop Now, Learn More, Sign Up, etc.)
4. Whether it's image, video, or carousel
5. How long it's been running (start date to today)

Then analyze the patterns:
- What hooks do they use in the first line?
- What emotions are they targeting? (fear, aspiration, urgency, belonging, status)
- What offers appear? (discounts, free shipping, bundles, limited time)
- What's their average copy length — short and punchy or long and story-driven?
- Which ad has been running the longest? That's their best performer — break down WHY it works.
```

Replace `[COMPETITOR BRAND NAME]` with an actual competitor. Do it right now. Pick someone you compete with directly and run this prompt.

You'll get back a structured breakdown of everything they're running. In two minutes. For free.

### Going Deeper

Once you have the initial pull, follow up with:

```
Now compare these 10 ads. Which ones seem like they're from the same campaign 
(similar visual style, same offer, different angles)? 

Group them into campaigns and tell me:
1. How many distinct campaigns are they running?
2. What's the strategy behind each campaign?
3. Which campaign seems to be their primary push right now?
```

This gives you their entire advertising strategy laid out on a plate.

---

## 4. Building an Ad Swipe File

A swipe file is the single most valuable asset in advertising. It's a curated collection of ads organized by what makes them work -- not just "ads I liked" but "ads that work, categorized by why."

Professional copywriters have been keeping swipe files for decades. You're going to build one in 20 minutes with Claude Code.

### Step 1: Collect Ads From Multiple Competitors

```
Search the Meta Ad Library for ads in the [YOUR INDUSTRY] category. 
Pull 30 ads from 5 different brands:

- [Competitor 1]
- [Competitor 2]
- [Competitor 3]
- [Competitor 4]
- [Competitor 5]

For each ad, extract:
1. Brand name
2. Full ad copy (primary text)
3. Headline
4. CTA button text
5. Format: image, video, or carousel
6. Start date and days running
7. The first sentence (this is the hook — the most important part)

Present all 30 in a table.
```

### Step 2: Categorize by Hook Type

This is where it gets powerful. Every ad opens with a hook -- the first line that stops someone mid-scroll. Hooks fall into predictable categories.

```
Take the 30 ads from the table and categorize each one by hook type:

1. **Pain point hooks** — "Tired of X?", "Sick of dealing with...", "If you've ever struggled with..."
2. **Social proof hooks** — "Join 10,000+ customers", "Rated #1 by...", "Everyone is switching to..."
3. **Curiosity hooks** — "This one trick...", "What nobody tells you about...", "The secret to..."
4. **Offer hooks** — "50% off today only", "Free shipping this week", "Buy 2 get 1 free"
5. **Story hooks** — "I used to struggle with...", "When I started my business...", "Last year I was..."
6. **Question hooks** — "What if you could...?", "Have you ever noticed...?", "Why do most people fail at...?"
7. **Bold claim hooks** — "The best X you'll ever use", "We guarantee...", "This will change how you..."

Which category has the most ads? That's probably what works best in your industry.
Which category has zero ads? That might be your opportunity to stand out.

Show the breakdown as a count: 
- Pain point: X ads
- Social proof: X ads
- etc.
```

### Step 3: Build the Visual Swipe File

Now turn it into something you can actually use day-to-day.

```
Build me an HTML page that displays all 30 ads as a visual swipe file.

Layout:
- Tabs or filter buttons across the top for each hook category
- Each ad displayed as a card showing: brand name, hook type label, 
  full ad copy, headline, CTA, format (image/video/carousel), and days running
- Cards sorted within each category by days running (longest first — best performers at top)
- A search bar that filters cards by any text
- Color-code the hook type labels (each category gets its own color)

Style: Clean, minimal, white background. Cards with subtle borders.
Good typography — the ad copy should be easily readable.

Add a summary section at the top showing:
- Total ads analyzed: 30
- Most common hook type: [X]
- Average days running: [X]
- Top performing ad (longest running): [show it]

This is my ad swipe file. I'll use it every time I write new ad copy.
```

Open this HTML file in your browser. Bookmark it. This is your competitive intelligence dashboard for advertising.

---

## 5. Creative Pattern Analysis

Collecting ads is step one. Analyzing the patterns -- the recurring formulas, the shared strategies, the unspoken rules of your industry's advertising -- that's where the real insight lives.

### The Full Analysis Prompt

```
Analyze the 30 competitor ads from my swipe file. Give me a complete creative 
pattern analysis:

**Headline Formulas:**
List the 3 most common headline structures. Show the formula and 3 examples of each.
(e.g., "[Number] + [Benefit] + [Timeframe]" → "5 Ways to Sleep Better Tonight")

**CTA Patterns:**
List all CTAs used and rank by frequency. What's the most common? 
What's the most unique?

**Copy Length:**
- Average word count of primary text
- Shortest ad (word count and which brand)
- Longest ad (word count and which brand)
- Do longer ads or shorter ads tend to run longer? (correlation between 
  copy length and days running)

**Offer Patterns:**
- What percentage of ads include a specific offer (discount, free trial, etc.)?
- What's the most common discount percentage?
- Do offer ads run longer than non-offer ads?

**Emotional Triggers:**
Categorize each ad by its primary emotional trigger:
- Fear/pain avoidance: "Don't miss out", "Stop wasting money"
- Aspiration: "Imagine if...", "The life you deserve"
- Urgency: "Limited time", "Ends tonight", "Only X left"
- Belonging: "Join the community", "Thousands of people like you"
- Status: "Premium", "Exclusive", "For those who demand the best"
- Curiosity: "The surprising reason why...", "What nobody tells you"

Which emotion dominates your industry? Which is underused?

**The Gap Analysis:**
Based on everything above, what angles is NOBODY using? What messaging territory 
is wide open? Give me 3 specific opportunities where a new ad could stand out 
by being different from everything else in this space.
```

This analysis gives you something most agencies charge thousands for: a data-driven creative strategy based on what actually works in your market.

### Visual Format Analysis

If you're doing image or video ads, the visual patterns matter just as much as the copy.

```
Based on the competitor ads, analyze the visual patterns:

1. **Format split:** What percentage are image vs. video vs. carousel?
2. **Image patterns:** Do winning ads (longest running) use product photos, 
   lifestyle shots, text overlays, before/after, or user-generated content?
3. **Color patterns:** Do the top-performing ads use bright colors, 
   muted/neutral tones, brand-specific colors, or high contrast?
4. **Text on image:** Do winning ads have text overlaid on the image? 
   If so, how much? Just a headline? A full paragraph?
5. **People vs. product:** Do top ads show people using the product, 
   or the product alone?
6. **Video length:** For video ads, what's the average length? 
   Do shorter or longer videos run longer?

Present this as a visual creative brief I can hand to a designer or 
use as direction for AI image generation.
```

---

## 6. Generating Your Own Ad Briefs

Now the payoff. You've collected 30 ads, categorized them, analyzed the patterns, and identified the gaps. Time to create your own ad concepts -- not from guesswork, but from competitive intelligence.

### The Ad Concept Generator

```
Based on the competitor ad analysis, generate 5 ad concepts for my product.

My product: [DESCRIBE YOUR PRODUCT IN 2-3 SENTENCES]
My target audience: [WHO BUYS THIS]
My key differentiator: [WHAT MAKES YOU DIFFERENT]
My brand voice: [DESCRIBE YOUR TONE — casual, premium, playful, authoritative, etc.]
My price point: [PRICE OR PRICE RANGE]

For each of the 5 concepts, give me:

1. **Hook** — the first line that stops the scroll (specify which hook type 
   from the analysis: pain point, social proof, curiosity, offer, story, question, or bold claim)
2. **Body copy** — 2-4 sentences that build on the hook
3. **Headline** — the text below the image
4. **CTA** — the button text
5. **Visual direction** — what the image or video should show
6. **Why this should work** — which competitor pattern it's based on and 
   how ours is different/better

Rules:
- Use 5 different hook types (one of each) so I can test which works best
- At least one concept should use the GAP I identified — the angle nobody else is using
- Copy length should match what works in my industry (based on the analysis)
- Don't be generic. Every line should be specific to MY product. 
  No "Transform your routine" filler.
```

### Testing Multiple Angles

Professional advertisers don't run one ad. They run five versions testing different angles and let the data decide. Here's how to generate proper A/B test variants:

```
Take Ad Concept #[X] from above (the one I like best) and generate 
5 variants for A/B testing.

Each variant changes ONE thing:
1. **Original** — the concept as-is (control)
2. **Different hook** — same body, different opening line
3. **Different offer** — same hook and body, different CTA/incentive
4. **Different emotion** — same structure, different emotional trigger 
   (e.g., switch from aspiration to urgency)
5. **Different length** — same message, but dramatically shorter OR longer

Label each variant clearly so I know what's being tested.
I'll run all 5 and see which one wins.
```

### Platform-Specific Adaptation

One message, adapted for every platform:

```
Take my best ad concept and adapt it for each platform:

**Facebook Feed Ad:**
- Primary text (up to 125 characters visible before "See More")
- Headline (under the image, 40 characters max for best display)
- Description (optional, 30 characters)
- CTA button: [Shop Now / Learn More / Sign Up / Get Offer]
- Image specs: 1080x1080 or 1200x628

**Instagram Feed Ad:**
- Caption (front-load the hook — first 2 lines must grab)
- 30 relevant hashtags
- CTA in caption (since Instagram doesn't have CTA buttons in organic)
- Image specs: 1080x1080

**Instagram Story Ad:**
- 3 story frames (what shows on each frame)
- Keep text minimal — this is a visual format
- Swipe-up CTA
- Specs: 1080x1920

**Google Search Ad:**
- Headline 1 (30 characters)
- Headline 2 (30 characters)
- Headline 3 (30 characters)
- Description 1 (90 characters)
- Description 2 (90 characters)
- Display URL path

**TikTok Ad:**
- Script for a 15-second video (scene by scene)
- Hook in first 2 seconds
- Native/casual tone (not polished — TikTok users skip "ads that look like ads")
- Text overlay suggestions
- Sound/music direction

Show all platforms on one page so I can see them side by side.
```

---

## 7. Ad Copy Generator Tool

If you write ad copy regularly, build a reusable tool. This is a one-time build that you'll use every time you need new creative.

### The Build Spec

```
Build me an ad copy generator as a single HTML page.

**Inputs (left side of the page):**
- Product name (text field)
- Product description (textarea, 2-3 sentences)
- Key benefit (text field — the ONE thing that matters most)
- Target audience (text field — who is this for)
- Brand voice (dropdown: Professional, Casual, Playful, Premium/Luxury, 
  Bold/Confident, Warm/Friendly)
- Hook type (dropdown: Pain Point, Social Proof, Curiosity, Offer, Story, 
  Question, Bold Claim, or "Generate All")
- Platform (checkboxes: Facebook, Instagram, Google Search, TikTok, LinkedIn)

**Output (right side of the page):**
When I click "Generate," call the Claude API and display:
- For each selected platform, show 3 ad copy variants
- Each variant uses a different hook type (or the selected one if specific)
- Format each ad in a card that matches how it would look on the actual platform
- Add a "Copy" button next to each variant that copies the text to clipboard
- Add a "Favorite" button (star icon) that highlights the card — 
  so I can mark the ones I like

**Style:**
- Two-column layout, inputs on left, output on right
- Clean, professional look
- Cards should be easy to scan
- Good typography — this is a copywriting tool, the text matters

**Requirements:**
- Claude API key stored in .env
- No database — this is a generate-and-copy tool
- No login
- No history (generate fresh each time)
- Responsive — should work on tablet too

When "Generate All" is selected for hook type, generate one variant per 
hook type so I can compare them all at once.
```

This tool will save you hours every time you need new ad copy. Instead of staring at a blank page, you input your product details and get 15-20 variants in seconds.

### Enhancing the Tool Later

Once the basic version works, you can iterate:

```
Add a "Competitor Reference" section to the ad copy generator. 

New input: a textarea where I can paste a competitor's ad copy.

When I paste a competitor ad, the generator should:
1. Identify the hook type, emotional trigger, and formula used
2. Generate my variants that use the SAME formula but with MY product and brand voice
3. Label each variant: "Inspired by [competitor hook type] — adapted for your brand"

This way I can spot a good competitor ad, paste it in, and immediately get 
my own version.
```

---

## 8. Tracking Ad Performance Over Time

One-time analysis is useful. Ongoing tracking is where the real strategic advantage lives.

When you check competitor ads monthly, you can see:
- **What stays** -- these ads are profitable and core to their strategy
- **What appears** -- these are new campaigns, new products, or new angles they're testing
- **What disappears** -- these ads either failed or were seasonal
- **What changes** -- same product, different angle means they're iterating

### Building a Simple Ad Tracker

```
Build me a simple ad tracker as a single HTML page with local storage.

**How it works:**
1. I enter a competitor name
2. I enter their current ad headlines (one per line)
3. I click "Save Snapshot" — it stores the competitor name, headlines, 
   and today's date in local storage
4. Each month I come back, enter the same competitor, and save a new snapshot

**The comparison view:**
When I select a competitor, show all their snapshots side by side in columns 
(one column per month).

Color code the headlines:
- GREEN: headline exists in current month AND previous month (still running = working)
- RED: headline existed last month but NOT this month (dropped = probably failed)
- BLUE: headline is new this month (new test or new campaign)

**Summary stats:**
- Total active ads this month vs. last month (growing or shrinking their spend?)
- Number of persistent ads (running 2+ months)
- Number of new ads this month
- Number of dropped ads this month

**Requirements:**
- Uses localStorage — no database, no backend
- Works offline
- Clean, minimal design
- Can track up to 10 competitors
- Export data as CSV button
```

This gives you a month-over-month competitive intelligence tracker that takes 5 minutes to update and gives you massive strategic insight.

### Automating With Playwright MCP

If you want to get serious, you can automate the scraping entirely:

```
I have Playwright MCP set up. Build me a script that:

1. Goes to the Meta Ad Library (facebook.com/ads/library)
2. Searches for a competitor name I specify
3. Scrapes all active ads: primary text, headline, CTA, format, and start date
4. Saves the results as a JSON file with today's date in the filename
5. I can run this monthly for each competitor

Output the results as a clean JSON file:
{
  "competitor": "Brand Name",
  "scraped_date": "2025-01-15",
  "ads": [
    {
      "primary_text": "...",
      "headline": "...",
      "cta": "...",
      "format": "image/video/carousel",
      "start_date": "...",
      "days_running": 45
    }
  ]
}

Then build a second script that reads all JSON files for a competitor 
and generates the comparison view (green/red/blue color coding) as an HTML report.
```

---

## 9. Platform-Specific Ad Strategies

Different platforms, different rules. What works on Facebook will bomb on TikTok. What converts on Google won't even make sense on Instagram.

### Facebook & Instagram Ads

Facebook and Instagram share the same ad platform (Meta Ads Manager) but have different user behaviors.

**Facebook:**
- Users are browsing a feed of friends, news, and groups
- Slightly older demographic (25-55 is the sweet spot)
- Longer copy tends to work -- people will read if the hook is strong
- Carousel ads work well for showing multiple products or telling a sequential story
- Video ads can be longer (30-60 seconds)
- Link clicks are the primary goal -- send people to your site

**Instagram:**
- Visual-first platform -- the image matters more than the copy
- Younger demographic (18-40)
- Shorter copy -- get to the point fast
- Story ads feel native and perform well for urgency/limited offers
- Reels format increasingly important
- Collection ads work well for ecommerce (browse products without leaving Instagram)

```
Generate a Facebook ad strategy for [PRODUCT] based on the competitor analysis.

Give me:
1. A carousel ad concept (4-5 cards, what goes on each card, the story it tells)
2. A single image ad concept (what the image shows, the copy, the hook)
3. A video ad concept (15-30 seconds, scene-by-scene script)
4. A retargeting ad concept (for people who visited the site but didn't buy — 
   what angle brings them back?)

For each, include the full copy: primary text, headline, description, and CTA.
```

### Google Search Ads

Google is intent-based. People are actively searching for something. Your ad needs to match their intent and convince them you're the best answer.

```
Generate Google Search ad copy for [PRODUCT/SERVICE].

Target keywords: [LIST 5-10 KEYWORDS YOUR CUSTOMERS SEARCH FOR]

For each keyword, create:
1. 3 headline options (max 30 characters each)
2. 2 description options (max 90 characters each)
3. Display URL path suggestions
4. Recommended extensions (sitelinks, callouts, structured snippets)

Rules for Google Search ads:
- Include the keyword in at least one headline
- Lead with the benefit, not the feature
- Include a number when possible (prices, percentages, quantities)
- Create urgency without being spammy
- Match the searcher's intent — someone searching "buy [product]" 
  wants a different ad than someone searching "best [product] reviews"
```

### TikTok Ads

TikTok is a completely different animal. The best TikTok ads don't look like ads at all. They look like content.

```
Generate 3 TikTok ad concepts for [PRODUCT].

The rules of TikTok advertising:
- The hook must land in the first 2 seconds or people swipe away
- It should look like native content, not a polished commercial
- UGC (user-generated content) style outperforms studio production
- Trending formats and sounds increase reach
- Keep it under 30 seconds (15 seconds is ideal)
- Text overlays help since many people watch without sound

For each concept, give me:
1. **The hook** (first 2 seconds — what stops the scroll)
2. **The script** (scene by scene, what happens and what's said)
3. **Text overlays** (what text appears on screen and when)
4. **Sound/music direction** (trending sound, voiceover, original audio?)
5. **CTA** (what action do you want — click link in bio, comment, visit site?)
6. **Format** (talking head, product demo, before/after, story time, POV, tutorial)

One concept should be a "talking head" style.
One should be a product demo or unboxing style.
One should use a trending format (day-in-my-life, get ready with me, 
things I wish I knew, etc.)
```

### LinkedIn Ads (B2B)

If you sell to businesses, LinkedIn is where your buyers are in "work mode."

```
Generate 3 LinkedIn ad concepts for [B2B PRODUCT/SERVICE].

Target audience: [JOB TITLES AND INDUSTRIES]

LinkedIn ad rules:
- Professional tone but not corporate jargon
- Lead with a business outcome (save time, increase revenue, reduce risk)
- Social proof from recognizable companies works extremely well
- Thought leadership content (not hard sells) gets more engagement
- Longer form content works — LinkedIn users read more than any other platform
- Document/carousel ads (PDF slides) get very high engagement

For each concept:
1. **Format** (single image, carousel/document, video, text-only)
2. **Hook** (the first line visible in the feed)
3. **Full copy** (the complete post/ad text)
4. **CTA** (what are you offering — demo, whitepaper, free trial, consultation?)
5. **Visual direction** (what the image or document slides show)
```

---

## 10. Quick Wins

These are copy-paste prompts you can run right now. Each takes less than 5 minutes.

### Quick Win 1: Competitor Ad Audit

```
Go to the Meta Ad Library and find all active ads by [COMPETITOR NAME]. 
What's their most-used hook type? How many ads are they running right now? 
Which ad has been running the longest and what makes it work?
```

### Quick Win 2: PAS Headlines

```
Generate 10 Facebook ad headlines for [YOUR PRODUCT] using the PAS formula:
- Problem: State the problem your audience faces
- Agitate: Make it feel urgent or painful
- Solve: Present your product as the solution

Each headline should be under 40 characters. Make them specific to my product, 
not generic.
```

### Quick Win 3: Video Ad Hooks

```
Write me 10 different opening hooks for a video ad about [PRODUCT]. 
Each hook must be deliverable in under 3 seconds. 
Each must stop someone mid-scroll — pattern interrupt, bold claim, 
surprising fact, or direct question.

Rate each hook 1-10 on "scroll-stopping power" and explain why.
```

### Quick Win 4: Ad Concept Comparison Page

```
Build me a simple HTML page that displays my top 5 ad concepts side by side.

For each concept, show:
- Hook type (as a colored label)
- Full ad copy
- Headline
- CTA
- Visual direction notes

Layout: 5 cards in a row, equal width. Clean design. 
Add a "Winner" button on each card that highlights it in green 
when I click it — so I can mark my favorites during a team review.
```

### Quick Win 5: Ad-to-Landing-Page Consistency Check

```
Analyze [COMPETITOR]'s Facebook ads AND their landing page at [URL].

Are they consistent? Specifically:
1. Does the ad promise match the landing page headline?
2. Does the offer in the ad (discount, free trial, etc.) appear prominently 
   on the landing page?
3. Is the visual style consistent (colors, imagery, tone)?
4. What disconnect exists between the ad promise and the landing page delivery?
5. What would YOU fix if this were your funnel?

This tells me if they're running a tight funnel or a leaky one.
```

---

## 11. Workshop Exercise: Ad Swipe File Generator

This is your hands-on build for the session. By the end, you'll have a complete ad intelligence system: a visual swipe file with competitive analysis, pattern breakdowns, and your own ad concepts.

### Step 1: Pick Your Competitors (2 minutes)

Choose 5 brands that compete with you directly. These should be brands whose customers could also be your customers.

Write them down:
1. ___
2. ___
3. ___
4. ___
5. ___

### Step 2: Pull Their Ads (5 minutes)

```
Search the Meta Ad Library for all active ads from these 5 brands:
1. [Brand 1]
2. [Brand 2]
3. [Brand 3]
4. [Brand 4]
5. [Brand 5]

For each brand, pull their 6 most recent active ads (30 ads total).

For each ad, extract:
- Brand name
- Primary text (full copy)
- Headline
- CTA button
- Format (image/video/carousel)
- Start date
- Days running
- First sentence (the hook)

Present as a structured table sorted by days running (longest first).
```

### Step 3: Categorize and Analyze (5 minutes)

```
Take the 30 ads and do a complete analysis:

1. Categorize each by hook type (pain point, social proof, curiosity, 
   offer, story, question, bold claim)
2. Count how many ads use each hook type
3. Identify the 3 most common headline formulas
4. Calculate average copy length
5. List all offers mentioned (discounts, free shipping, bundles, etc.)
6. Identify the primary emotional trigger for each ad
7. Find the TOP 3 ads (longest running) and explain WHY they work
8. Find the GAP — what angles or hook types is NOBODY using?
```

### Step 4: Generate Your Own Concepts (5 minutes)

```
Based on the competitor analysis, generate 5 ad concepts for my business.

My product: [DESCRIBE IT]
My audience: [WHO BUYS IT]
My differentiator: [WHAT MAKES YOU DIFFERENT]
My brand voice: [YOUR TONE]

Requirements:
- Each concept uses a different hook type
- At least one concept exploits the GAP we identified
- Copy length should match what works in my industry (from the analysis)
- Include: hook, body copy (2-4 sentences), headline, CTA, and visual direction
- Each concept should be clearly different — I want to test 5 distinct angles
```

### Step 5: Build the Visual Swipe File (5 minutes)

```
Build me a complete ad swipe file as an HTML page.

**Section 1: Dashboard**
- Total ads analyzed: 30
- Ads by brand (bar chart or visual count)
- Most common hook type
- Average days running
- Top 3 longest-running ads (the proven winners)

**Section 2: Competitor Ads (filterable)**
- Filter buttons: All, [Brand 1], [Brand 2], [Brand 3], [Brand 4], [Brand 5]
- Filter buttons: All hook types, Pain Point, Social Proof, Curiosity, etc.
- Each ad as a card: brand, hook label (color-coded), full copy, 
  headline, CTA, format, days running
- Sort options: by days running, by brand, by hook type
- Search bar to find specific text

**Section 3: My Ad Concepts**
- 5 cards showing my generated ad concepts
- Each card: hook type label, full copy, headline, CTA, visual direction
- "Favorite" star button on each card

**Section 4: Pattern Analysis**
- Hook type distribution (visual chart)
- Top headline formulas (with examples)
- Emotional trigger breakdown
- Gap analysis — underused angles highlighted

Style: Clean, professional, good typography. 
This is a tool I'll reference weekly.
```

### Tiers

**Tier 1: Get the swipe file built and populated.**
30 competitor ads categorized and displayed. Your 5 ad concepts included. This is the goal for everyone.

**Tier 2: Add the ad tracker.**
Build the monthly tracking tool from Section 8. Connect it to your swipe file so you can see what changes over time.

**Tier 3: Build the ad copy generator tool.**
Build the reusable tool from Section 7. Now you have a system: research in the swipe file, generate in the tool, track in the tracker.

---

## 12. Ethics and Best Practices

Let's be clear about what's fair game and what crosses the line.

### What's Completely Fine

- **Using public ad libraries.** They exist for transparency. That's their purpose. You're not hacking anything -- you're using a public tool that Meta, Google, TikTok, and LinkedIn built intentionally.
- **Analyzing patterns and formulas.** "This competitor uses pain-point hooks with short copy and urgency CTAs" is an observation, not theft.
- **Drawing inspiration from what works.** "Their hook structure works -- let me write my own version for my product" is how all advertising has worked since the beginning of advertising.
- **Tracking what competitors do over time.** Public information, recorded over time. This is competitive intelligence, not espionage.

### What Crosses the Line

- **Copying ad copy verbatim.** Don't take their exact words. Write your own copy inspired by their approach.
- **Stealing creative assets.** Don't download their images or videos and use them as your own.
- **Misrepresenting yourself.** Don't pretend to be a competitor to get non-public information.
- **Scraping beyond public tools.** Stick to official ad libraries. Don't try to hack ad accounts or access private analytics.

### Best Practices for Your Own Ads

**Test, don't guess.** The whole point of competitive analysis is to start from an informed position. But what works for them might not work for you -- different brand, different audience, different price point. Always test.

**Change one variable at a time.** When A/B testing, change the hook OR the offer OR the image. Not all three. Otherwise you won't know what made the difference.

**Run tests long enough.** An ad needs at least 3-5 days and a meaningful number of impressions before you can judge performance. Don't kill an ad after 24 hours.

**Document what works.** When you find a winning ad, add it to your swipe file. Your own swipe file should grow over time with YOUR winners, not just competitor ads.

**Revisit monthly.** The ad landscape changes constantly. New competitors enter, trends shift, platforms change their algorithms. Make competitive analysis a monthly habit, not a one-time project.

---

## Recap

What you built in this module:

1. **A systematic way to find competitor ads** across Meta, Google, TikTok, and LinkedIn -- all free, all public.
2. **A categorized swipe file** with 30+ ads organized by hook type, emotional trigger, and performance.
3. **A creative pattern analysis** showing exactly what works in your industry and where the gaps are.
4. **Your own ad concepts** based on competitive data, not guesswork.
5. **A reusable ad copy generator** that produces platform-specific variants on demand.
6. **A monthly tracking system** that shows what competitors add, drop, and keep running.

You went from "I need to brainstorm ad copy" to "I have a data-driven system that tells me exactly what works, what doesn't, and what nobody else is doing yet."

That's not a marketing hack. That's a competitive advantage.

See you in Module 6.
