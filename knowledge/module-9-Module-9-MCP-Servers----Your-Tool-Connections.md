# Module 9: MCP Servers -- Your Tool Connections

Claude Code is smart. But without MCP servers, it's smart with its hands tied behind its back.

Right now, Claude can read your files and search the web. That's it. It can't check your Shopify orders. It can't see your Stripe revenue. It can't browse a competitor's website. It can't read your Notion workspace. It's locked in a room with your code and nothing else.

MCP servers change that. They plug Claude into your actual business tools -- the ones you use every day. And once you see what that looks like, you won't go back.

---

## 1. What Are MCP Servers?

MCP stands for Model Context Protocol. Forget that name immediately. Here's what matters:

**MCP servers are plugins that give Claude Code access to your tools.**

That's it. Each one is a connection to one tool. Install the Shopify plugin, Claude can talk to your store. Install the Stripe plugin, Claude can see your revenue. Install the Playwright plugin, Claude can open a real browser and visit actual websites.

### The Office Analogy

Think of Claude Code as a brilliant employee you just hired. On their first day, they're sitting at a desk with a laptop. They can read documents you put in front of them. They can answer questions based on what they know.

But they can't log into Shopify. They can't check Stripe. They can't open your Notion workspace. Not because they're not capable -- because nobody gave them the passwords or access.

MCP servers are like handing that employee the login credentials to each of your business tools. One by one.

- Install the Shopify MCP = give them access to your store
- Install the Stripe MCP = give them access to your payment dashboard
- Install the Notion MCP = give them access to your knowledge base
- Install the Playwright MCP = give them a web browser

Each connection you add makes Claude more useful. And they compound. Claude with Shopify is helpful. Claude with Shopify + Stripe + a browser is a junior analyst.

### Without MCP vs. With MCP

**Without MCP:**
- "What were my sales yesterday?" -- "I don't have access to your sales data."
- "Visit my website and tell me if the homepage looks good." -- "I can't browse websites."
- "What's in my Notion content calendar?" -- "I can't access Notion."

**With MCP:**
- "What were my sales yesterday?" -- Claude pulls live data from Shopify and gives you the answer.
- "Visit my website and tell me if the homepage looks good." -- Claude opens a browser, navigates to your site, takes screenshots, and gives you feedback.
- "What's in my Notion content calendar?" -- Claude reads your Notion database and lists what's coming up.

---

## 2. How to Install an MCP Server

It's one command. Seriously.

```
claude mcp add [name] -- npx -y [package-name]
```

That's the whole thing. You give it a name (so you remember what it is), and the package name (which you copy from the docs). Claude Code restarts and now has access to that tool.

### The Three Commands You Need

**Install a new MCP server:**
```
claude mcp add shopify -- npx -y @shopify/dev-mcp@latest
```

**See what's installed:**
```
claude mcp list
```

**Remove one you don't need:**
```
claude mcp remove shopify
```

### Where Are MCP Servers Stored?

When you install an MCP server, it gets saved in a file called `.mcp.json` in your project folder. This means:

- **Different projects can have different tools.** Your ecommerce project might have Shopify and Stripe. Your content project might have Notion and Brave Search.
- **You can share your setup.** Copy the `.mcp.json` file to a new project and all your tool connections come with it.
- **Your team can use the same setup.** Commit the file to your project and everyone gets the same tools.

You don't need to edit this file by hand -- the `claude mcp add` command does it for you. But if you're curious, it looks like this:

```json
{
  "mcpServers": {
    "shopify": {
      "command": "npx",
      "args": ["-y", "@shopify/dev-mcp@latest"]
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-playwright"]
    },
    "stripe": {
      "type": "http",
      "url": "https://mcp.stripe.com"
    }
  }
}
```

Plain text. Nothing scary.

---

## 3. The Essential MCP Servers for Founders

Not all MCP servers are equally useful for non-technical founders. Here are the ones that matter most, ranked by immediate impact.

---

### Playwright MCP -- A Real Web Browser

**This is the most powerful MCP for non-developers.** Install this first.

Playwright gives Claude a real browser. It can visit websites, click buttons, fill out forms, take screenshots, and read page content. It's like having someone sit at a computer and browse the internet for you.

**Install:**
```
claude mcp add playwright -- npx -y @anthropic-ai/mcp-playwright
```

No API key needed. No account required. Just install and go.

**What you can do:**

Ask Claude to visit any website and report back:
```
Visit https://mystore.com and screenshot every page.
Tell me what looks broken, what loads slowly,
and what could be improved.
```

Run a competitor audit:
```
Visit https://competitor.com and https://mystore.com.
Compare the homepage experience side by side.
What are they doing better? What are we doing better?
Screenshot both homepages.
```

Test your own checkout flow:
```
Go to my website. Click on "Products". Add the first item
to the cart. Go to checkout. Screenshot each step.
Tell me where a customer might get confused or drop off.
```

Extract competitor data:
```
Visit https://competitor.com/collections/all
List every product with its name and price.
Export as a spreadsheet.
```

Fill out a form to test it:
```
Go to https://mysite.com/contact
Fill out the contact form with test data.
Submit it. Screenshot the confirmation page.
Did it work correctly?
```

**Why this matters:** You're not just reading about your website. Claude is actually using it like a real visitor would. It catches things you miss because you're too close to your own site.

---

### Shopify MCP -- Talk to Your Store

If you run a Shopify store, this turns Claude into your store analyst.

**Install:**
```
claude mcp add shopify -- npx -y @shopify/dev-mcp@latest
```

Follow the prompts to connect your Shopify store. You'll need your store URL and admin access.

**Daily check-ins you can copy-paste:**

Morning briefing:
```
Give me a morning briefing on my Shopify store:
1. How many orders came in overnight?
2. Total revenue in the last 24 hours
3. Any products that are out of stock or below 5 units?
4. What was the top-selling product yesterday?
```

Weekly review:
```
Compare this week to last week:
- Total orders
- Total revenue
- Average order value
- Top 5 products by units sold
- Any products that sold zero units

Highlight anything surprising.
```

Inventory audit:
```
List all products with fewer than 10 units in stock.
Sort by sales velocity -- which ones will run out first?
Flag any bestsellers that are running low.
```

Find dead products:
```
Show me all products that haven't had a single sale
in the last 30 days. How many do I have?
What's the total inventory value sitting in those products?
```

Pricing review:
```
List my top 20 products by revenue. For each one,
show me the price, cost (if available), and margin.
Are any products priced significantly different from
their category average?
```

**Actions (use carefully -- these change your store):**

Update a price:
```
Change the price of "Classic Leather Wallet" to $59.99
```

Create a collection:
```
Create a new collection called "Summer Sale 2026"
and add all products tagged with "summer"
```

Update inventory:
```
Set the inventory for "Blue T-Shirt - Size M" to 50 units
```

**Important:** Claude can write to your store, not just read from it. If you ask it to change a price, it will change the price. On your live store. Be specific and double-check before confirming any write actions.

---

### Stripe MCP -- Your Revenue Dashboard

Stripe handles your payments. This MCP lets Claude pull live financial data.

**Install:**
```
claude mcp add --transport http stripe https://mcp.stripe.com
```

You'll be prompted to authenticate with your Stripe account.

**Revenue prompts you can copy-paste:**

Weekly revenue report:
```
Give me a revenue report for the last 7 days:
- Total revenue
- Number of transactions
- Average transaction value
- Refund amount and refund rate
- Compare to the previous 7 days
```

Monthly recurring revenue (for subscription businesses):
```
What's my current MRR?
How many active subscriptions do I have?
Break it down by plan if possible.
```

Failed payment audit:
```
List all failed payments from the last 7 days.
How much revenue am I losing to payment failures?
Group by failure reason -- expired cards, insufficient funds, etc.
```

Churn analysis:
```
Who cancelled their subscription this month?
For each one: when did they sign up, what plan were they on,
and how long were they a customer?
Do you see any pattern?
```

Customer value:
```
Who are my top 10 customers by total lifetime spend?
For each one, show total spent, number of orders,
and when their first and last order was.
```

Refund trends:
```
Show me refund data for the last 3 months, broken down
by month. Is the refund rate going up, down, or stable?
What products (if identifiable) are being refunded most?
```

---

### Brave Search MCP -- Live Web Search

Claude's built-in knowledge has a cutoff date. Brave Search gives it access to the live web -- current news, recent articles, up-to-date information.

**Install:**
```
claude mcp add brave-search -- npx -y @anthropic-ai/mcp-brave-search
```

You'll need a Brave Search API key. Get one free at https://brave.com/search/api/.

Set the key as an environment variable:
```
export BRAVE_API_KEY=your-key-here
```

Or add it to your `.env` file:
```
BRAVE_API_KEY=your-key-here
```

**What you can do:**

Industry trends:
```
Search for the latest trends in [your industry] in 2026.
What's new? What's growing? What's dying?
Summarize the top 5 trends with sources.
```

Competitor news:
```
Search for recent news about [competitor name].
Have they launched anything new? Raised funding?
Made any public announcements in the last 30 days?
```

Market research:
```
Search for "[your product category] market size 2026".
What are the latest estimates? Who are the major players?
What's the projected growth rate?
```

Content ideas:
```
Search for the most-discussed topics in [your niche]
this week. What are people talking about?
Give me 5 content ideas based on what's trending.
```

---

### Notion MCP -- Your Knowledge Base

If your team lives in Notion, this is a direct line between Claude and your workspace.

**Install:**
```
claude mcp add notion -- npx -y @notionhq/mcp-server
```

You need a Notion API key (called an "integration token"). Get one at https://www.notion.so/my-integrations -- create a new integration, give it access to the pages/databases you want Claude to read.

Set the key:
```
export NOTION_API_KEY=your-key-here
```

**What you can do:**

Project status check:
```
Check my Notion project board.
What's overdue? What's due this week?
What's blocked? Give me a summary I can share with the team.
```

Content calendar:
```
What's on my content calendar for the next 2 weeks?
Are there any gaps -- days with nothing scheduled?
What topics are covered vs. what's missing?
```

Meeting prep:
```
Search my Notion for everything related to [client/project].
Pull together key decisions, open questions,
and the last status update. I have a meeting in an hour.
```

Knowledge search:
```
Search my Notion workspace for anything about
[topic/decision/product]. Summarize what we've already
documented. What's been decided vs. what's still open?
```

Add a task:
```
Add a new task to my [board name] in Notion:
Title: "Review Q2 pricing strategy"
Status: "To Do"
Due date: Next Friday
Assigned to: [name]
```

---

### HubSpot MCP -- Your CRM

For teams using HubSpot to manage leads, deals, and customers.

**Install:**
```
claude mcp add --transport http hubspot https://mcp.hubspot.com/anthropic
```

You'll authenticate through HubSpot's OAuth flow.

**What you can do:**

Pipeline overview:
```
Show me my sales pipeline.
How many deals are in each stage?
What's the total value of deals in "Proposal Sent"?
What's the total value of deals we expect to close this month?
```

Lead review:
```
What new leads came in this week?
For each: name, company, source (how they found us),
and any notes. Rank by how promising they look.
```

Follow-up list:
```
Which deals haven't been updated in more than 7 days?
List them with the deal owner and last activity date.
These need follow-up today.
```

Customer lookup:
```
Find everything we know about [company/contact name].
Deal history, notes, emails, last interaction.
Give me a 30-second summary before my call with them.
```

---

### Figma MCP -- Your Designs

For when you have designs in Figma and want Claude to build them.

**Install:** Available through Figma Dev Mode settings.

**What you can do:**

Design to code:
```
Read the design for the homepage in my Figma file.
Build it as a single HTML file with CSS.
Match the fonts, colors, spacing, and layout exactly.
```

Extract brand assets:
```
Extract the color palette from my Figma file.
List every color used with its hex code
and where it appears (headings, backgrounds, buttons, etc.)
```

Component inventory:
```
What components are used in my Figma file?
List each one with a description of what it looks like
and where it's used.
```

**Best for:** Taking an existing design and turning it into a working page. Not for creating designs from scratch -- Figma is still the design tool, Claude is the builder.

---

### Zapier MCP -- Connect to Everything Else

If there's a tool you use that doesn't have its own MCP server, Zapier probably connects to it. Zapier bridges Claude to 8,000+ apps.

**What it covers:**
- Gmail and Google Drive
- Typeform and Google Forms
- Calendly
- Mailchimp and Klaviyo
- Airtable
- Asana and Monday.com
- QuickBooks and Xero
- And thousands more

This is your catch-all. If you need Claude to talk to a tool and there's no dedicated MCP server, check Zapier.

---

## 4. Combining MCP Servers -- Where the Real Power Lives

Each MCP server on its own is useful. Put two or three together and Claude becomes something much more powerful. It can pull data from one tool, analyze it with another, and take action in a third.

Here are real cross-platform workflows you can copy and use.

---

### Morning Dashboard (Shopify + Stripe + Notion)

```
Give me my morning briefing:

FROM SHOPIFY:
- Orders received overnight
- Total revenue in the last 24 hours
- Any products out of stock or running low (under 10 units)
- Top-selling product yesterday

FROM STRIPE:
- Any failed payments in the last 24 hours
- New subscriptions (if applicable)
- Total refunds processed yesterday

FROM NOTION:
- What's on my calendar today
- What tasks are overdue on my project board
- Any deadlines coming up this week

Format this as a clean summary I can scan in 2 minutes.
```

Run this every morning. You get a full business snapshot without opening three different tabs.

---

### Customer Deep Dive (Shopify + Stripe + Playwright + Brave Search)

```
Find my top customer by total order value in Shopify.

Then:
1. Pull their full order history from Shopify
2. Check their payment history in Stripe -- any issues?
3. Search the web for their company name
4. Visit their company website and tell me:
   - What do they do?
   - How big are they?
   - What kind of content do they post?

This is a VIP customer. I want to understand who they are
and how to keep them happy. Give me a one-page profile.
```

---

### Competitor Price Check (Shopify + Playwright)

```
From my Shopify store, pull my top 20 products with their prices.

Then visit [competitor-url.com] and find matching or similar
products. Compare prices side by side.

Show me:
- Products where I'm more expensive (and by how much)
- Products where I'm cheaper
- Products they carry that I don't
- Products I carry that they don't

Format as a table.
```

---

### Content Planning (Notion + Shopify + Brave Search)

```
Check my Notion content calendar for the next blog post topic.

Then:
1. Research that topic using web search -- what's already
   been written? What angle hasn't been covered?
2. Check my Shopify store for products related to this topic
3. Draft a blog post outline that naturally features 2-3
   of my products without being salesy

Save the outline back to my Notion content calendar
as a sub-page under that blog post entry.
```

---

### Weekly Business Review (Shopify + Stripe + Notion)

```
Build me a weekly business review:

REVENUE (from Stripe):
- Total revenue this week vs last week
- Average transaction value
- Refund rate
- Failed payments and lost revenue

SALES (from Shopify):
- Total orders this week vs last week
- Top 5 products by units sold
- Products with zero sales
- Inventory alerts (anything below 10 units)

OPERATIONS (from Notion):
- Tasks completed this week
- Tasks overdue
- Key decisions made (from meeting notes)
- Open blockers

Format this as a report I can share with my co-founder.
Make it clear, concise, and data-first.
```

---

### Website Audit (Playwright + Brave Search)

```
I want a full website audit. Do these things:

1. Visit every page on https://mysite.com -- homepage,
   product pages, about, contact, cart, checkout
2. Screenshot each page
3. For each page, note:
   - Does it load fast or slow?
   - Is anything broken or misaligned?
   - Is the mobile version usable? (resize the browser)
   - Is the copy clear or confusing?

4. Then visit 3 competitor sites: [url1], [url2], [url3]
5. Compare their homepage experience to mine

Give me a prioritized list of improvements.
Top 3 things to fix this week, top 3 for next month.
```

---

## 5. Troubleshooting

Things will go wrong. Here's what to do when they do.

### "Tool not found" or "Server not connected"

**Fix:** Restart Claude Code. MCP servers sometimes need a fresh start to connect.

```
# Close Claude Code and reopen it
# Or run:
claude mcp list
```

If the server isn't showing in the list, reinstall it:
```
claude mcp remove [name]
claude mcp add [name] -- npx -y [package-name]
```

### Authentication Errors

This means Claude is connecting to the tool but doesn't have permission.

**For API key-based servers (Brave Search, Notion):** Check that your API key is set correctly in your environment:
```
echo $BRAVE_API_KEY
echo $NOTION_API_KEY
```

If nothing shows up, the key isn't set. Add it to your `.env` file or export it in your terminal:
```
export BRAVE_API_KEY=your-key-here
```

**For OAuth-based servers (Shopify, Stripe, HubSpot):** You may need to re-authenticate. Remove and re-add the server:
```
claude mcp remove shopify
claude mcp add shopify -- npx -y @shopify/dev-mcp@latest
```

### Slow Responses

Some MCP servers take time on their first call because they're loading up. Subsequent calls are usually faster.

If a server is consistently slow:
- Check your internet connection
- Make sure you're not rate-limited (this happens with free API tiers)
- Try a simpler query first to confirm the connection works

### "Too Many Tools" / Performance Issues

Every MCP server you install adds to Claude's mental load. Claude has to keep track of all available tools, which uses up its context window.

**Rule of thumb:** Only install MCP servers you actively use. If you installed something to try it and don't use it weekly, remove it.

Three to five active MCP servers is a sweet spot. You can always add more for specific tasks and remove them after.

### Node.js Errors

Most MCP servers run on Node.js. If you see errors about `npx` or `node` not found:

```
# Check if Node.js is installed
node --version

# If not installed, install it from https://nodejs.org
# Download the LTS version
```

---

## 6. Security and Best Practices

MCP servers give Claude access to real business data and real business tools. That's the point. But it also means you need to be thoughtful about it.

### API Keys Are Passwords

Your API keys give Claude (and anyone who has them) access to your tools. Treat them like passwords.

- **Store them in `.env` files.** Never paste them directly in code or in `.mcp.json`.
- **Add `.env` to your `.gitignore`.** This prevents your keys from being uploaded to GitHub or shared accidentally.
- **Never share your `.mcp.json` if it contains API keys.** The file itself is fine to share -- just make sure keys are stored separately in environment variables.

### Start Read-Only When Possible

Some MCP servers (especially Shopify) can both read and write. Claude can check your inventory (read) but also change your prices (write).

When you first install an MCP server:
- Start by only asking questions (read operations)
- Get comfortable with what it can access
- Only use write operations (changing data, creating records) when you're ready
- Always review what Claude proposes to change before confirming

### The Confirmation Habit

Before Claude takes any action that modifies your data -- changing a price, updating a record, posting a message -- it will usually ask for confirmation. **Read the confirmation carefully.** Don't just say "yes" automatically.

If Claude is about to change 50 prices on your live Shopify store, you want to know that before it happens.

### Review Context Window Usage

Every MCP server adds tools to Claude's context window. If you notice Claude getting confused or forgetting things mid-conversation, you might have too many MCP servers loaded.

Check what's installed:
```
claude mcp list
```

Remove anything you're not using right now:
```
claude mcp remove [name-you-dont-need]
```

You can always add it back in 5 seconds when you need it again.

---

## 7. Quick Wins -- Try These Right Now

These are ordered from easiest to most powerful. Each one takes less than 5 minutes to set up and shows you immediate results.

### Quick Win 1: Screenshot Your Website

Install Playwright and ask Claude to browse your site:

```
claude mcp add playwright -- npx -y @anthropic-ai/mcp-playwright
```

Then:
```
Visit https://your-website.com and screenshot the homepage.
Tell me: what's the first thing a visitor sees?
Is it clear what we sell? What would you improve?
```

### Quick Win 2: Check Your Store

If you have a Shopify store:

```
claude mcp add shopify -- npx -y @shopify/dev-mcp@latest
```

Then:
```
What's my most profitable product?
What product has the most units in stock but the fewest sales?
```

### Quick Win 3: Search the Live Web

```
claude mcp add brave-search -- npx -y @anthropic-ai/mcp-brave-search
```

Then:
```
What's trending in [your industry] today?
Find 3 recent articles and summarize the key takeaways.
```

### Quick Win 4: Competitor Comparison

With Playwright installed:
```
Visit [your-site.com] and [competitor.com].
Screenshot both homepages.
Compare the experience. What are they doing better?
What are we doing better? Be brutally honest.
```

### Quick Win 5: Dead Inventory Check

With Shopify installed:
```
Find all products with zero sales in the last 30 days.
For each one, tell me:
- Current inventory value
- When it was last updated
- Is it worth keeping or should I consider removing it?

Then visit 2 competitor sites and check if they sell
similar products. If they do, what are they doing
differently -- pricing, photos, descriptions?
```

This last one combines Shopify + Playwright. That's when you start to see the compounding effect.

---

## 8. Workshop Exercise: Connect and Build

Time to get your hands dirty. Pick the tier that matches your comfort level.

### Tier 1: Install and Query (15 minutes)

**Goal:** Get at least 2 MCP servers working and run basic queries.

1. Install Playwright (no API key needed -- easiest to start):
```
claude mcp add playwright -- npx -y @anthropic-ai/mcp-playwright
```

2. Install one more server relevant to your business:
   - Shopify store? Install Shopify MCP.
   - Subscriptions? Install Stripe MCP.
   - Team in Notion? Install Notion MCP.
   - Need live search? Install Brave Search MCP.

3. Run 3 queries against each server. Use the prompts from this guide -- copy and paste them, replace the placeholders with your real data.

4. Write down the one query that gave you the most useful answer. That's your starting point.

---

### Tier 2: Cross-Platform Workflow (30 minutes)

**Goal:** Build a workflow that pulls data from multiple MCP servers in one prompt.

1. Complete Tier 1 first.

2. Write a "morning dashboard" prompt that combines data from your installed servers. Use the examples from Section 4 as a template, but customize it for your business.

3. Run it. Refine it. Does it give you what you actually need to start your day?

4. Save the prompt somewhere you'll find it tomorrow. A note on your phone. A Notion page. A text file in your project.

The goal is to have one prompt you run every morning that replaces 15 minutes of tab-hopping.

---

### Tier 3: Build an HTML Report (45 minutes)

**Goal:** Turn multi-source data into a visual report you can share.

1. Complete Tier 2 first.

2. Ask Claude to take your morning dashboard data and build it as an HTML page:

```
Take all the data you just pulled and build me
a single HTML dashboard page.

Layout:
- Clean, cream background, charcoal text
- Three columns: Revenue, Inventory, Tasks
- Each column shows the key metrics from that category
- Use green/red arrows for trends (up vs down from last week)
- Responsive -- looks good on mobile too

No framework. No React. Just HTML + CSS in one file.
```

3. Open the HTML file in your browser. Iterate on the design.

4. Bonus: Set this up so you can run it fresh every morning:
```
Re-pull all data from Shopify, Stripe, and Notion.
Update the dashboard HTML with today's numbers.
```

---

## 9. What to Install First

If you're overwhelmed by options, here's the priority order. Install one at a time. Get comfortable with it before adding the next.

| Priority | MCP Server | Why |
|---|---|---|
| 1 | Playwright | No API key needed. Instant results. Browse any website. |
| 2 | Shopify (if you have a store) | Direct access to your sales data. |
| 3 | Brave Search | Live web research. Free API key. |
| 4 | Stripe (if you use it) | Revenue and payment data. |
| 5 | Notion (if your team uses it) | Connect your knowledge base. |
| 6 | HubSpot (if you use it) | CRM data. |
| 7 | Everything else | Add as needed. |

Start with Playwright. You'll be hooked in 5 minutes.

---

## Recap

What you learned today:

1. **MCP servers are plugins.** Each one connects Claude to one of your business tools. No MCP = Claude can only read files. With MCP = Claude can talk to Shopify, Stripe, Notion, browse websites, and more.

2. **Installation is one command.** `claude mcp add [name] -- npx -y [package]`. That's it.

3. **Playwright is the most powerful starting point.** No API key, no account. Claude gets a real browser and can visit, screenshot, and interact with any website.

4. **The magic is in combining servers.** One MCP server is useful. Two or three together give you cross-platform workflows that replace 15 minutes of manual tab-hopping.

5. **Start read-only.** Let Claude check your data before you let it change your data. Especially on Shopify.

6. **Only install what you use.** Three to five active servers is ideal. Too many slow things down.

7. **API keys are passwords.** Keep them in `.env` files. Never commit them to your code.

Go install Playwright. Visit your own website. See what Claude says. Then come back and add the tools that matter most to your business.

---

## Your MCP Starter Package

Depending on your role, different MCP servers matter most. We've put together curated packages with install commands, API key setup, and "what you can do now" prompts for each track.

**Ecom founders:** Shopify + Stripe + Klaviyo + Meta Ads + GA4 + Playwright + Brave Search. Your entire store, email, ads, and analytics stack connected to Claude. See your track's `install-package.md` for the full setup.

**Agency owners:** Figma + GA4 + Google Search Console + Meta Ads + Notion + Playwright + Brave Search. Client design handoff, reporting data, SEO, and project management all in one place. See your track's `install-package.md`.

**Sales pros:** HubSpot + Notion + Brave Search + Playwright + GA4 + Stripe. CRM data, prospect research, meeting notes, and revenue tracking. See your track's `install-package.md`.

There's also a full quick-reference card in this module's `templates/mcp-quick-reference.md` with every server, install command, and what it gives you -- all on one page.

Beyond what we cover here, there are hundreds more MCP servers for almost every tool you can think of. The curated list at [awesome-mcp-servers](https://github.com/wong2/awesome-mcp-servers) is the best starting point for discovery.

See you in Module 10.
