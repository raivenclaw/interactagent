# Module 13: Agents Level 1 -- Fixed Automations

You've been using Claude Code as a tool. You open it, you give it a job, it does the job, you close it. That's powerful. But it means nothing happens unless you're sitting there pressing buttons.

An agent is different. An agent works while you sleep.

This module is about the simplest kind of agent -- one that runs on a schedule, does one thing, and reports back. No decisions, no judgment calls, no surprises. Just a reliable worker that shows up at the same time every day and does the same job.

By the end of this module, you'll have a working agent that pulls data from your store every morning and sends you a summary before you've had coffee.

---

## 1. The Mental Model: Tools vs. Agents

A tool does something when you USE it. You click a button, you get a result.

An agent does something when something HAPPENS. A clock hits 7am. An order comes in. A review gets posted. The agent wakes up, does its job, and goes back to sleep.

Here's the difference:

**Tool:** You open Claude Code and say "How many orders did I get yesterday?" Claude checks and tells you.

**Agent:** Every morning at 7am, without you doing anything, a message appears in your inbox: "Yesterday: 14 orders, EUR 2,847 revenue, 2 products out of stock."

Same information. But one requires you to remember to ask. The other just shows up.

### The Alarm Clock Analogy

Think of a tool as checking the time on your phone. You pick it up, you look, you see the time. Useful, but you have to do it.

An agent is an alarm clock. You set it once. It goes off every day at the same time. You don't have to remember anything. It just works.

Level 1 agents are alarm clocks. Set them, forget them, they show up on time.

---

## 2. The Agent Loop

Every agent follows the same loop. It doesn't matter if it's simple or complex. The pattern is always this:

**Trigger --> Think --> Act --> Log --> (repeat)**

For a Level 1 agent, this loop is dead simple:

- **Trigger:** A schedule fires (every day at 7am, every Monday at 9am, every hour)
- **Think:** Fetch data from a source (Shopify, a spreadsheet, a website)
- **Act:** Format and send it somewhere (email, Slack, a file)
- **Log:** Record that it ran successfully (so you know it's working)

That's it. No branching. No decisions. No "if this, then that." Just: wake up, grab data, send it, go back to sleep.

### The 3am Question

Before you build any agent, ask yourself this:

**"If this runs at 3am while I'm asleep and something goes wrong -- what's the worst that happens?"**

For a Level 1 agent, the answer should always be: "Not much." Either it runs and I get my summary, or it fails and I don't get my summary. Nobody gets a wrong email. No customer sees an error. No money moves. Nothing breaks.

That's the safety of Level 1. The worst case is silence. You wake up, notice you didn't get your morning email, check the logs, fix the issue. No harm done.

This question becomes much more important in Levels 2, 3, and 4. For now, just plant it in your head.

---

## 3. What Is Trigger.dev?

Trigger.dev is the platform where your agents live. Think of it as the building where your agents have their offices. They clock in, do their work, clock out.

Here's what Trigger.dev does:

- **Runs your code on a schedule.** You say "run this every morning at 7am" and it does.
- **Runs your code when something happens.** You say "run this when a new order comes in" and it does.
- **Handles the infrastructure.** You don't need a server. You don't need to keep a computer running 24/7. Trigger.dev handles all of that.
- **Shows you logs.** Every time your agent runs, you can see what it did, whether it succeeded, and what went wrong if it didn't.

### Why Not Just Use a Cron Job or Zapier?

You could use Zapier. For truly simple stuff (when X happens, do Y), Zapier is fine. But the moment you need Claude to think -- to analyze data, summarize information, write something, make a judgment call -- you need code. And Trigger.dev is where that code runs.

Trigger.dev tasks are written in TypeScript. You don't need to learn TypeScript. Claude writes it for you. You just need to understand what you're asking for.

### The Office Building Analogy

Think of Trigger.dev as an office building:

- Each **task** is an employee with a specific job
- The **schedule** is their work hours ("show up every day at 7am")
- The **logs** are their timesheets ("I ran at 7:00:04am, took 3 seconds, completed successfully")
- The **dashboard** is your management view -- you can see all your agents, when they last ran, whether they succeeded

You're the boss. You don't do the work. You set up the employees, give them their instructions, and check in occasionally to make sure everything's running smoothly.

---

## 4. Anatomy of a Level 1 Agent

A Level 1 agent has exactly three parts:

1. **One trigger** -- what starts it (a schedule, a webhook, an event)
2. **One action** -- what it does (fetch data, format it, calculate something)
3. **One output** -- where the result goes (email, Slack, a file, a database)

No decisions. No branching. No "if this, then that." Just: trigger, action, output.

### Examples for Your Ecommerce Business

**Daily Morning Briefing**
- Trigger: Every morning at 7am
- Action: Check Shopify for overnight orders, total revenue, any stockouts
- Output: Send summary to your email

**Weekly Revenue Report**
- Trigger: Every Monday at 9am
- Action: Pull last week's sales data, calculate totals, find top products
- Output: Email a formatted report to the team

**Inventory Alert**
- Trigger: Every evening at 6pm
- Action: Check all product inventory levels
- Output: Send a Slack message listing anything below threshold

**Competitor Watch**
- Trigger: Every day at noon
- Action: Scrape 3 competitor homepages, note any changes (new products, price changes, banners)
- Output: Log changes to a file, send summary to Slack if anything changed

Every single one of these follows the same pattern. One trigger, one action, one output. That's Level 1.

---

## 5. Step-by-Step Build: Daily Shopify Morning Briefing

Let's build your first agent. This one checks your Shopify store every morning and emails you a summary of what happened overnight.

### What You'll Get

Every morning at 7am, an email lands in your inbox that looks like this:

```
Subject: Morning Briefing -- Tuesday, April 8

ORDERS
- 14 new orders overnight
- Total revenue: EUR 2,847.50
- Average order value: EUR 203.39

TOP PRODUCTS
- Signature Blend (6 units sold)
- Starter Kit (4 units sold)
- Gift Box (3 units sold)

STOCK ALERTS
- Signature Blend: 8 units remaining (below threshold of 10)
- Travel Kit: 3 units remaining (below threshold of 10)

All systems normal. Next briefing: tomorrow at 7:00 AM.
```

That's it. Every morning. Without you doing anything.

### The Full Spec

Before you build, write the spec. Here's the one for this agent:

```
AGENT: Daily Shopify Morning Briefing

TRIGGER:
- Runs every day at 7:00 AM CET
- Cron expression: "0 7 * * *"

DATA SOURCE:
- Shopify Admin API
- Pull orders from the last 24 hours
- Pull current inventory levels for all products

PROCESSING:
- Count total orders
- Sum total revenue
- Calculate average order value
- Rank products by units sold (top 5)
- Flag any product with inventory below 10 units

OUTPUT:
- Send formatted email to [your email]
- Subject line: "Morning Briefing -- [day], [date]"
- Clean text format, no HTML, easy to read on mobile

LOGGING:
- Log timestamp, order count, and total revenue to console
- If Shopify API fails: log the error, send a simple "Briefing failed -- check logs" email

CONSTRAINTS:
- No database needed
- No web dashboard
- No authentication system
- Read-only access to Shopify (never modify orders or inventory)
- If Shopify API is down, fail gracefully -- don't crash, don't retry endlessly
```

### Step 1: Set Up the Trigger.dev Project

If you already have a Trigger.dev project set up (from a previous module or your apps folder), skip to Step 2.

If not, tell Claude:

> "Set up a new Trigger.dev project in my apps folder. Use TypeScript. Follow the conventions in trigger-rules.md. Just the basic scaffold -- no tasks yet."

Claude will create the project structure, install dependencies, and configure the basics.

### Step 2: Create the Scheduled Task

Now tell Claude to build the agent. Give it the full spec above, plus this prompt:

> "Create a Trigger.dev scheduled task called 'daily-shopify-briefing'. Here's the spec: [paste the spec above]. Use cron schedule '0 7 * * *' which means every day at 7am. Connect to the Shopify Admin API using the store URL and access token from environment variables. Format the email as clean plain text. Send it using Resend (or whatever email service is set up). Log every run."

### Step 3: Set Up Environment Variables

Your agent needs credentials to talk to Shopify and send emails. These go in environment variables -- never hardcoded in the code.

You'll need:
- `SHOPIFY_STORE_URL` -- your store's .myshopify.com URL
- `SHOPIFY_ACCESS_TOKEN` -- from a Shopify custom app (read-only access)
- `RESEND_API_KEY` -- for sending emails (or use whatever email service you prefer)
- `BRIEFING_EMAIL` -- the email address to send the briefing to

Tell Claude:

> "Add these environment variables to the .env file: SHOPIFY_STORE_URL, SHOPIFY_ACCESS_TOKEN, RESEND_API_KEY, BRIEFING_EMAIL. Add them to .env.example too with placeholder values."

### Step 4: Connect to Shopify API

Claude will write the Shopify connection for you. The key things it needs to do:

1. Fetch orders from the last 24 hours using the Orders API
2. Fetch inventory levels using the Inventory API
3. Handle pagination (if you have more than 250 orders -- unlikely overnight, but good practice)
4. Handle errors gracefully (API down, rate limited, invalid token)

You don't need to know the API details. Claude does. Just make sure the spec says "read-only" so Claude doesn't create anything that could modify your store.

### Step 5: Format the Output

The email format matters. You're reading this on your phone at 7am. It needs to be scannable in 10 seconds.

The prompt for formatting:

> "Format the email as plain text. Use the exact template I showed you. Numbers first, details second. Bold the section headers (ORDERS, TOP PRODUCTS, STOCK ALERTS). Keep it under 30 lines. If there are no stock alerts, say 'All stock levels healthy' instead of showing an empty section."

### Step 6: Send the Email

Claude will set up the email sending. If you're using Resend (recommended -- simple, cheap, reliable):

> "Send the briefing email using Resend. From address: briefing@yourdomain.com. To address: from the BRIEFING_EMAIL env var. Subject line includes the day and date."

### Step 7: Add Logging

Every agent needs logs. Not for you to read every day -- for you to check when something stops working.

> "Log every run to the Trigger.dev console. Log: timestamp, number of orders found, total revenue, number of stock alerts, and whether the email sent successfully. If anything fails, log the full error."

### Step 8: Test It

Don't wait until 7am tomorrow. Test it now:

> "Add a way to trigger this task manually for testing. I want to run it once right now to see if it works."

Trigger.dev lets you trigger any task manually from the dashboard. Run it, check your email, verify the numbers match your Shopify admin.

### Step 9: Deploy

Once it works:

> "Deploy this task to Trigger.dev production. Make sure the cron schedule is active."

Tomorrow morning at 7am, your first agent delivers its first briefing.

---

## 6. Quick Wins -- Copy-Paste Prompts

These are complete prompts you can give Claude to build Level 1 agents. Each one follows the same pattern: one trigger, one action, one output.

### Quick Win 1: Overnight Orders Summary

```
Build me a Trigger.dev scheduled task that runs every morning at 7am.

What it does:
- Connects to my Shopify store (credentials in env vars)
- Pulls all orders from the last 24 hours
- Counts total orders and total revenue
- Checks inventory levels for all active products
- Flags anything with fewer than 10 units in stock

Output:
- Sends me an email with a clean summary
- Subject: "Morning Briefing -- [date]"
- Sections: Orders (count + revenue), Top Products (top 5 by units sold), Stock Alerts (anything below 10 units)

Rules:
- Read-only Shopify access, never modify anything
- If the API fails, send me a "briefing failed" email instead of crashing
- Log every run with timestamp and key metrics
- Plain text email, no HTML, readable on mobile
```

### Quick Win 2: Weekly Revenue Report

```
Build me a Trigger.dev scheduled task that runs every Monday at 9am.

What it does:
- Connects to my Shopify store
- Pulls all orders from the last 7 days (Monday to Sunday)
- Calculates: total revenue, total orders, average order value
- Finds the top 5 products by revenue
- Compares this week to the previous week (up or down, by how much)

Output:
- Sends an email to the whole team (list of emails in env var TEAM_EMAILS, comma-separated)
- Subject: "Weekly Revenue Report -- Week [number]"
- Sections: Revenue Summary, Top Products, Week-over-Week Comparison
- Include percentage changes with arrows (up or down)

Rules:
- Read-only Shopify access
- If there's no data for comparison (first week), just show this week's numbers
- Log the run with total revenue and order count
- Clean, scannable format -- the team reads this in 30 seconds
```

### Quick Win 3: Daily Inventory Alert

```
Build me a Trigger.dev scheduled task that runs every day at 6pm.

What it does:
- Connects to my Shopify store
- Checks inventory levels for all active products
- Identifies anything below 10 units

Output:
- If there are low-stock items: send a Slack message to #inventory channel listing each product, current stock level, and how many days of stock remain (based on last 7 days of sales velocity)
- If everything is healthy: send a brief "All stock levels healthy" message
- Use Slack webhook URL from env var SLACK_INVENTORY_WEBHOOK

Rules:
- Read-only Shopify access
- Calculate days of remaining stock using average daily sales from the past 7 days
- Sort by urgency (fewest days remaining first)
- Log every run
```

---

## 7. Understanding Cron Schedules

You'll see cron expressions in every agent. They look like gibberish but they're just a shorthand for "when should this run?"

A cron expression has 5 parts:

```
* * * * *
| | | | |
| | | | └── Day of week (0-6, Sunday = 0)
| | | └──── Month (1-12)
| | └────── Day of month (1-31)
| └──────── Hour (0-23)
└────────── Minute (0-59)
```

### The Ones You'll Actually Use

| Schedule | Cron | Plain English |
|---|---|---|
| Every day at 7am | `0 7 * * *` | Minute 0, hour 7, every day |
| Every Monday at 9am | `0 9 * * 1` | Minute 0, hour 9, Monday |
| Every hour | `0 * * * *` | Minute 0, every hour |
| Every 6 hours | `0 */6 * * *` | Minute 0, every 6th hour |
| Twice a day (9am and 6pm) | `0 9,18 * * *` | Minute 0, hours 9 and 18 |
| Weekdays at 8am | `0 8 * * 1-5` | Minute 0, hour 8, Mon-Fri |

You don't need to memorize these. When you tell Claude "run this every morning at 7am," it knows the cron expression. But it's helpful to recognize them when you see them in code.

---

## 8. What Can Go Wrong (and How to Handle It)

Level 1 agents are the safest kind. But things can still break. Here's the complete list of what goes wrong and how to handle each one:

### The API Is Down

Your agent tries to connect to Shopify and Shopify is having an outage. This happens a few times a year.

**Solution:** Your agent should catch the error, log it, and optionally send you a "briefing failed" notification. It should NOT retry endlessly -- that burns your API quota and can get you rate-limited.

Tell Claude: "If the Shopify API returns an error, log the error, send me a failure notification, and exit cleanly. Don't retry."

### Your Credentials Expired

API tokens expire or get revoked. One day your agent just stops working.

**Solution:** Check your logs. If you see authentication errors, generate a new token. This is the most common reason agents silently stop.

### The Data Format Changed

Shopify updates their API, or a field you relied on gets renamed. Your agent crashes because it can't find the data it expects.

**Solution:** Have Claude build your agent to handle missing fields gracefully. Instead of crashing on a missing field, log a warning and skip that section.

### The Agent Ran But Sent Nothing

The task completed successfully but the email or Slack message never arrived.

**Solution:** Check the email service (Resend, SendGrid) or Slack webhook. These services have their own dashboards where you can see if messages were sent or bounced.

### You Moved to a Different Timezone

Your cron runs at 7am UTC but you moved to a different timezone. Now your briefing arrives at the wrong time.

**Solution:** Trigger.dev lets you configure the timezone for your schedules. Tell Claude which timezone you want.

---

## 9. Workshop Exercise: Build Your First Agent

Time to build. Pick one of these or come up with your own:

### Option A: Daily Sales Digest
Build an agent that runs every morning and sends you:
- How many orders came in overnight
- Total revenue
- Any products that went out of stock

### Option B: Weekly Roundup
Build an agent that runs every Monday and sends your team:
- Last week's total revenue
- Top 5 selling products
- Average order value
- Comparison to the week before

### Option C: Competitor Price Watch
Build an agent that runs daily and:
- Visits 3 competitor product pages (using Playwright MCP or a scraping library)
- Records the current prices
- Logs everything to a spreadsheet or database
- Sends you a summary of any changes

### The Steps

1. Write your spec (use the template from Section 5)
2. Answer the 3am question: "If this breaks at 3am, what's the worst that happens?"
3. Give Claude the spec and ask it to build the Trigger.dev task
4. Set up your environment variables
5. Test it manually
6. Deploy it
7. Wait for your first automated briefing to arrive

### What Success Looks Like

You should have:
- A Trigger.dev task that runs on a schedule
- An output that arrives in your email or Slack without you doing anything
- Logs you can check if something goes wrong
- A calm answer to the 3am question

---

## 10. Key Takeaways

1. **A tool waits for you. An agent works for you.** The difference is the trigger -- something happens, and the agent responds, whether you're there or not.

2. **Level 1 agents are alarm clocks.** One trigger, one action, one output. No decisions, no branching, no surprises. That's not a limitation -- it's safety.

3. **The 3am question is your safety check.** Before building any agent, ask what happens if it breaks while you're asleep. For Level 1, the answer should be: "Nothing bad. I just don't get my report."

4. **Trigger.dev is where agents live.** It handles scheduling, execution, and logging. You set up the task, Claude writes the code, Trigger.dev runs it.

5. **Start with data you already check manually.** If you open Shopify every morning and look at the same numbers, that's your first agent. Automate the look, not the decision.

### Your Takeaway File

This module's `templates/cron-reference.md` is a one-page cheat sheet with every common schedule pre-written (daily, weekly, hourly, monthly) plus agent ideas for each -- what to automate and when.

Next up: Level 2 agents -- agents that don't just report, they make decisions.
