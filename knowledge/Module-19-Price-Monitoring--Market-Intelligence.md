# Module 19: Price Monitoring & Market Intelligence

Your competitors changed their prices last week. Do you know that? Do you know which products? Do you know if they're running a promotion right now? Do you know if they launched a new product yesterday?

If the answer is no, you're flying blind.

Pricing is the single most sensitive lever in ecommerce. A competitor drops their price by 15% on your best-selling category, and you don't notice for three weeks? That's three weeks of lost sales you'll never get back. A competitor launches a product that directly competes with yours, and you find out from a customer? That's embarrassing and expensive.

Manual price monitoring doesn't scale. You're not going to visit 5 competitor websites every morning and compare prices in a spreadsheet. Maybe you did it once. Maybe you did it for a week. But you stopped. Everyone stops. It's tedious, error-prone, and a terrible use of your time.

This module builds the system that does it for you. Automatically, daily, with alerts when something changes.

---

## 1. Why Price Monitoring Matters

Three scenarios where price intelligence saves you money:

**Scenario 1: The Silent Price War**
Your competitor drops their price on a product that directly competes with yours. They don't announce it. They don't run a sale. They just quietly lower the price. Your conversion rate starts declining. You blame your ads. You increase spend. Nothing helps. Two months later, you realize customers were choosing the cheaper option the whole time. If you'd known on day one, you could have matched, bundled, or repositioned.

**Scenario 2: The Missed Opportunity**
A competitor raises their prices by 20%. They might be having supply chain issues. They might be repositioning upmarket. Either way, you're suddenly the better value option -- but you don't know it. You could be running ads that say "Same quality, better price" but instead you're doing nothing because you have no idea.

**Scenario 3: The Launch Blindside**
A competitor launches a new product that's eerily similar to yours, at a lower price point. They start running aggressive ads. Your customers ask you about it. You have no answer because you didn't see it coming. If you'd had a monitoring system, you'd have spotted the product listing within 24 hours and had a response plan ready.

Price monitoring isn't paranoia. It's basic business intelligence that every serious ecommerce brand needs.

---

## 2. Quick Win: Price Check Right Now

No setup. No tools. Just Claude and 5 minutes.

**Prompt:**

> "Use Playwright to visit these competitor product pages:
> 1. [URL 1]
> 2. [URL 2]
> 3. [URL 3]
> 4. [URL 4]
> 5. [URL 5]
>
> For each page, extract: the product name, the current price, and whether there's a sale or discount visible.
>
> My products and prices for comparison:
> - [Your product 1]: $[price]
> - [Your product 2]: $[price]
> - [Your product 3]: $[price]
> - [Your product 4]: $[price]
> - [Your product 5]: $[price]
>
> Show me a comparison table. Color-code: GREEN where I'm cheaper, YELLOW where we're the same price (within 5%), RED where I'm more expensive. Add a column showing the price difference in both dollars and percentage."

That's it. Five minutes and you know exactly where you stand. Do this once a week manually, or keep reading to automate it.

**For a broader market scan:**

> "Use Playwright to search [Amazon / Google Shopping] for '[your product category]'. Extract the top 20 results with: product name, brand, price, rating, and number of reviews. Sort by price low to high. Highlight where my product would rank in this list if I were selling at $[your price]."

---

## 3. Building a Price Tracker

A one-time check is useful. A system that runs daily and alerts you to changes is powerful. Let's build it.

### Step 1: Define What to Track

Start with a product map. This is a simple list of your products matched to competitor equivalents.

**Prompt:**

> "I need to create a product map for price tracking. Here are my products:
>
> 1. [Your product name] - $[price] - [your product page URL]
> 2. [Your product name] - $[price] - [your product page URL]
> 3. [Your product name] - $[price] - [your product page URL]
>
> And here are my main competitors: [Competitor A URL], [Competitor B URL], [Competitor C URL]
>
> Use Playwright to visit each competitor's website. Find their product that most closely competes with each of mine. Create a mapping table with columns: My Product, My Price, Competitor, Competitor Product, Competitor Price, Competitor URL.
>
> Save this as a JSON file called product-map.json."

### Step 2: Build the Scraper

> "Build a price scraping script using Playwright. It should:
>
> 1. Read the product-map.json file
> 2. Visit each competitor URL in the map
> 3. Extract the current price from each page
> 4. Compare it to the previous price (stored in a price-history.json file)
> 5. Flag any prices that changed since the last check
> 6. Append the new prices to price-history.json with today's date
> 7. Output a summary: which prices changed, by how much, and whether I'm now cheaper or more expensive
>
> Handle common scraping issues: cookie consent popups, lazy loading, prices in different formats (with/without currency symbols, comma vs. dot separators). Add error handling so one failed page doesn't break the whole run.
>
> Write this as a Node.js script I can run with 'node price-check.js'."

### Step 3: Build the Dashboard

> "Build an HTML price monitoring dashboard that reads from price-history.json. Include these sections:
>
> **Section 1: Current Price Comparison**
> A table showing each product with: my price, each competitor's price, and color-coded cells (green = I'm cheaper, yellow = within 5%, red = I'm more expensive). Include the price difference as a percentage.
>
> **Section 2: Price History Charts**
> One line chart per product. Each chart shows my price as a horizontal line and each competitor's price as a line over time. Use different colors per competitor. Show the last 90 days. Use Chart.js.
>
> **Section 3: Recent Changes**
> A feed showing the 20 most recent price changes. Each entry shows: date, competitor, product, old price, new price, change percentage, and an arrow icon (up = they raised price, down = they dropped price).
>
> **Section 4: Alert Summary**
> Show any products where a competitor is now undercutting me. These should have a red warning icon.
>
> Design: cream background (#EAE6DF), charcoal text (#2E2A26), crimson accent (#8B1A10) for alerts. Clean, minimal layout. Single HTML file with embedded CSS and JavaScript."

### Step 4: Set Up Alerts

> "Add an alert system to the price-check.js script. After checking prices:
>
> 1. If any competitor drops below my price on any product: create an 'urgent' alert
> 2. If any competitor changes price by more than 10%: create a 'notable' alert
> 3. If a new product appears on a competitor's page that wasn't there before: create a 'new product' alert
>
> Save alerts to an alerts.json file. Update the dashboard to show unread alerts at the top with a badge count. Optionally, send alerts via email (generate a mailto link with the alert summary pre-filled in the body)."

### Step 5: Automate It

The manual approach: run `node price-check.js` once a day. Set a reminder on your phone. It takes 2 minutes.

The automated approach:

> "Set up a cron job on my Mac that runs the price-check.js script every day at 8 AM. Show me the exact crontab entry and how to install it. Include error logging so I can see if a run fails."

Or if you want it cloud-based:

> "Write a Trigger.dev task that runs the price check daily at 8 AM UTC. It should: run the scraper, save results to Supabase, and send me an email summary with any alerts. Use the Trigger.dev conventions from trigger-rules.md."

---

## 4. Market Intelligence Beyond Pricing

Pricing is just one dimension. Your competitors are doing a lot more than changing prices. Here's how to track the rest.

### Product Range Monitoring

What products do your competitors carry? When do they add or remove items?

> "Use Playwright to visit [competitor URL] and navigate to their full product catalog. Extract every product: name, price, category, and URL. Save as competitor-catalog-[date].json.
>
> If I have a previous catalog file (competitor-catalog-[previous date].json), compare the two and show me: (1) New products they added (2) Products they removed (3) Products where the description or price changed."

**Run this monthly.** Over time, you'll see patterns -- what categories they're investing in, what they're cutting.

### Promotion Tracking

> "Use Playwright to visit [competitor URL]. Check: (1) Is there a sale banner? What does it say? (2) Are any products marked as on sale? List them with original and sale prices. (3) Are there any pop-ups with discount offers? (4) Check their homepage, collection pages, and checkout for any promotion codes.
>
> Save the results with today's date. I want to build a log of all competitor promotions over time."

> "From my competitor promotion logs over the past 3 months, show me: (1) How often do they run sales? (2) What discounts do they typically offer? (3) Do they follow a pattern? (e.g., end-of-month sales, holiday promotions) (4) What's their average discount percentage? (5) Predict when their next sale is likely to happen."

### New Product Detection

> "Compare today's product catalog for [competitor] with last month's. What's new? For each new product: (1) Name and price (2) What category it's in (3) Does it compete with anything I sell? (4) Is the price above or below my similar product? (5) Any initial customer reviews or ratings?"

### Content and SEO Monitoring

> "Use Playwright to visit [competitor URL]/blog (or their blog section). Extract the titles and dates of their last 10 blog posts. What topics are they writing about? What keywords are they targeting?
>
> Then check: do any of these topics overlap with my content strategy? Are there topics they're covering that I'm not? Should I be writing about any of these?"

---

## 5. The Intelligence Dashboard

Let's put everything together in one place. This is your war room.

**Prompt:**

> "Build me a comprehensive market intelligence dashboard as a single HTML file. It should have 5 tabs:
>
> **Tab 1: Price Comparison Matrix**
> Table with my products as rows and competitors as columns. Each cell shows the current price and a color indicator (green/yellow/red). Include a 'last checked' timestamp. Sortable by product or by biggest price gap.
>
> **Tab 2: Price History**
> Line charts per product showing price trends over time. My price as a dashed horizontal line. Competitor prices as solid lines. Dropdown to select which product to view. Show last 90 days. Use Chart.js.
>
> **Tab 3: Product Range Comparison**
> Three-column view: (1) Products only I sell (2) Products we both sell (3) Products only they sell. Show this for each competitor via a dropdown. Include product count per category.
>
> **Tab 4: Promotion Calendar**
> A timeline/calendar view showing when each competitor ran promotions. Each promotion shows: dates, discount offered, which products were included. Filterable by competitor.
>
> **Tab 5: Alert Log**
> Chronological list of all alerts: price changes, new products, new promotions. Filter by type and competitor. Mark alerts as 'read' or 'action taken'.
>
> Design specs:
> - Cream background (#EAE6DF)
> - Charcoal text (#2E2A26)
> - Crimson accent (#8B1A10) for alerts and important numbers
> - Tab navigation at the top
> - Clean, data-dense but not cluttered
> - Responsive -- works on desktop and tablet
>
> Load data from JSON files (price-history.json, competitor-catalogs.json, promotions.json, alerts.json). Include sample data so I can see how it looks immediately."

---

## 6. Competitive Analysis Prompts

Beyond automated monitoring, use these prompts for deeper one-time analyses.

**Full competitive breakdown:**

> "I sell [product type] at [price range]. My main competitors are: [list 3-5 with URLs]. Visit each website and give me a comprehensive competitive analysis:
>
> For each competitor:
> 1. Price range (cheapest and most expensive product)
> 2. Number of products in catalog
> 3. Unique selling proposition (what do they emphasize?)
> 4. Shipping: free threshold, delivery time, international?
> 5. Return policy summary
> 6. Brand positioning (premium, value, eco, etc.)
> 7. Content strategy (blog, social, email popup?)
> 8. Trust signals (reviews count, certifications, press mentions)
>
> Then give me:
> - A positioning map: plot each competitor on a 2x2 grid (price vs. quality perception)
> - Where I fit on that grid
> - Gaps in the market nobody is filling
> - My single biggest competitive advantage"

**Pricing strategy recommendation:**

> "Based on this competitive analysis [paste or reference the analysis above], recommend a pricing strategy for my brand. Consider: (1) Am I positioned correctly for my target customer? (2) Should I raise or lower any prices? By how much? (3) Should I introduce a lower-priced entry product? (4) Should I bundle anything? (5) What price anchoring could I use? Give me specific numbers, not just direction."

**SWOT analysis:**

> "Based on everything you know about my brand ([brand details]) and my competitors ([competitor analysis]), create a SWOT analysis. Be specific and actionable -- not generic strengths like 'quality product'. I want: 3 specific strengths with evidence, 3 specific weaknesses I need to fix, 3 opportunities I should act on in the next 90 days, 3 threats I need to watch."

---

## 7. The Weekly Intelligence Routine

Don't just build the system -- use it. Here's a 15-minute weekly routine:

**Every Monday morning:**

1. Run your price check script (or check the dashboard if it's automated)
2. Scan the alert log for anything flagged
3. Check one competitor's website manually for anything the scraper might miss (new homepage design, new messaging, etc.)

**Prompt for a weekly briefing:**

> "Generate my weekly competitive intelligence briefing. Pull data from: price-history.json, alerts.json, and promotions.json.
>
> Format it as a short report:
> - **Price changes this week**: who changed what, by how much
> - **New products spotted**: any additions to competitor catalogs
> - **Active promotions**: what competitors are running right now
> - **Action items**: anything I should respond to this week
> - **Market trend**: any pattern worth noting (e.g., 'three competitors raised prices -- possible supply chain issue')
>
> Keep it under 300 words. I want to read this with my morning coffee."

---

## 8. Quick Wins

No setup needed. Just paste and go.

**Instant competitor price check:**

> "Use Playwright to visit [competitor URL]. Find the product most similar to my [product name] at $[price]. What's their price? Am I cheaper or more expensive? By how much?"

**Sale detection:**

> "Use Playwright to visit these 3 competitor websites: [URLs]. Is anyone running a sale right now? If yes: what's the discount, what products are included, and when does it end?"

**Price positioning:**

> "Here are my products and prices: [list]. Here are my competitors' equivalent products and prices: [list]. Where should I raise prices? Where should I lower them? Where am I leaving money on the table? Where am I losing sales on price?"

**Shipping comparison:**

> "Use Playwright to check the shipping policies on these competitor websites: [URLs]. For each: free shipping threshold, standard delivery time, express option and cost, international shipping availability. Compare to my policy: [your shipping details]. Where am I better? Where am I worse?"

**Value perception audit:**

> "Visit my website [URL] and my top competitor's website [URL]. As a customer, which one looks more premium? Which one feels like a better value? Be honest and specific. What visual or messaging changes would make my site feel more [premium/trustworthy/modern]?"

---

## 9. Workshop Exercise: Build Your Price Intelligence System

### Step 1: Identify Your Competitive Set

List your top 5 competitors and their websites. For each, identify 3-5 products that directly compete with yours.

### Step 2: Run a Baseline Price Check

Use the quick win prompt from section 2. Get a snapshot of where prices stand today. Save this -- it's your baseline.

### Step 3: Build the Product Map

Use the prompt from section 3, step 1. Create your product-map.json with all the products you want to track.

### Step 4: Build the Scraper

Use the prompt from section 3, step 2. Test it against your product map. Make sure it extracts prices correctly from each competitor's site.

### Step 5: Build the Dashboard

Use the prompt from section 3, step 3. Load your baseline data. Make sure the charts render correctly.

### Step 6: Run Your First Full Analysis

Use the competitive breakdown prompt from section 6. Get the full picture: pricing, positioning, shipping, content strategy. Save this analysis -- it's your competitive bible.

### Step 7: Set Up the Routine

Decide: daily manual check, or automated? If automated, set up the cron job or Trigger.dev task. If manual, block 5 minutes every morning in your calendar.

---

## 10. What You Built

By the end of this module, you have:

- **A live price comparison** showing exactly where you stand against every competitor
- **A price tracking system** that logs changes over time and alerts you to important shifts
- **Product range monitoring** so you know when competitors add or remove products
- **Promotion tracking** so you never get blindsided by a competitor's sale
- **A market intelligence dashboard** that puts everything in one view
- **A weekly briefing routine** that keeps you informed in 15 minutes

You went from checking competitor prices "when you remember" to having a system that watches the market for you 24/7. That's the difference between reacting to market changes and anticipating them.

Next up: Module 20 -- putting it all together into your personal operating system.
