# Session 2: Your First Real Build

**A step-by-step guide for setting up Claude Code and building your first thing.**

This guide is designed for people who have never used Claude Code before. Follow every step in order. By the end, you'll have a properly set up workspace and a working tool built entirely by you — without writing a single line of code.

---

## What You Need Before Starting

- A laptop with Claude Code installed (terminal or browser at code.claude.com)
- About 90 minutes of uninterrupted time
- One thing about your business or work you'd like to improve

If you haven't installed Claude Code yet, follow the quickstart guide first.

---

## PART 1: SET UP YOUR WORKSHOP

Every builder needs a clean workshop before they start building. A carpenter doesn't just throw tools in a pile — they have a place for everything. Claude Code is the same. The better your workspace is organized, the better Claude understands what you're working on and what you need.

This takes about 20 minutes. You'll do it once and use it forever.

---

### Step 1: Create Your Project Folder

Open your terminal and run these commands:

```bash
mkdir my-workspace
cd my-workspace
mkdir company-context brand-assets builds
```

Your folder now looks like this:

```
my-workspace/
├── company-context/     ← Who you are, how you sound, who your customers are
├── brand-assets/        ← Logos, color codes, font names, reference images
├── builds/              ← Everything you build goes here
```

**Why this matters:** When you tell Claude "build me a landing page," it will read your company-context files and automatically use your brand voice, your colors, your customer language. Without these files, Claude just guesses — and guesses are generic.

---

### Step 2: Tell Claude Who You Are — COMPANY.md

Create your first context file. Open Claude Code in your project folder and type:

```
Create a file called company-context/COMPANY.md with the following template:

# [My Company Name]

## What We Do
(One sentence. What does your company do?)

## Our Products / Services
(List your main offerings)

## Who We Sell To
(Describe your typical customer in 2-3 sentences)

## What's Working Right Now
(What's going well in the business?)

## What's Not Working
(What's the biggest pain point or bottleneck?)

## Numbers That Matter
- Customers: 
- Monthly revenue: 
- Team size: 
- Main tools we use: (Shopify, HubSpot, Mailchimp, etc.)
```

Now **fill it in** with your real information. Open the file in your editor and replace every placeholder. This doesn't need to be perfect — a rough version is 10x better than nothing.

**Don't have a company?** Use a fictional one for practice. Or use your personal brand — freelancer, side project, whatever you're working on.

---

### Step 3: Tell Claude How You Sound — BRAND-VOICE.md

This is the file that stops Claude from sounding like a generic robot. Type:

```
Create a file called company-context/BRAND-VOICE.md with this template:

# Brand Voice

## We sound like...
(3-5 adjectives. Example: warm, direct, no-nonsense, slightly playful)

## We NEVER sound like...
(What to avoid. Example: corporate, salesy, desperate, overly casual)

## Words We Use
(Specific vocabulary, product names, phrases we love)

## Words We Avoid  
(Jargon, competitor terms, overused buzzwords)

## Example: This Is Us (good copy)
(Paste 2-3 sentences from your website or marketing that feel right)

## Example: This Is NOT Us (bad copy)
(Paste 2-3 sentences that feel wrong — too formal, too hype, too generic)
```

Fill this in honestly. The "good copy" and "bad copy" examples are the most valuable part — they teach Claude your taste better than any adjective can.

**Stuck?** Tell Claude: "Help me define my brand voice. Ask me 5 questions about how my company communicates." Answer the questions and Claude will draft the file for you.

---

### Step 4: Write Your CLAUDE.md

This is the master file. Claude reads it automatically at the start of every session. It's your "onboarding document for the contractor."

```
Create a CLAUDE.md file in the root of my project with this content:

# My Workspace

## About
(Company name) — (one sentence about what you do)

## How We Work
- I'm not a developer. Explain everything in plain language.
- Build the simplest version first. HTML files for prototypes.
- Always ask me before adding features I didn't request.
- One thing at a time. Finish before starting something new.

## Brand
- Read company-context/COMPANY.md for who we are
- Read company-context/BRAND-VOICE.md for how we sound
- Default colors: (your main background color, text color, accent color)
- Default font style: (clean/modern, editorial, playful — whatever fits you)

## Rules
- Never add login or user accounts unless I ask
- Never add a database unless I ask  
- Keep things as simple as possible
- When I say "build this," start with a single HTML file
- Always show me a plan before building anything complex

## Context Files
- company-context/COMPANY.md — who we are
- company-context/BRAND-VOICE.md — how we sound
```

**Fill in the blanks.** Replace the placeholders with your actual company info. If you're not sure about colors, just write "clean and modern" or "dark and minimal" — Claude will interpret that.

**Add your brand colors if you know them.** Look at your website, logo, or social media. Pick the background color, the text color, and one accent color. Write them as hex codes (#FFFFFF) or just describe them ("warm cream background, dark charcoal text, deep red accents").

---

### Step 5: Add Brand Assets

Put anything visual in the `brand-assets/` folder:

- Your logo (PNG or SVG)
- Screenshots of your website or app (for reference)
- Screenshots of competitors or designs you admire
- Any brand guidelines PDF you already have

You can drag files into VS Code or copy them via terminal. These files aren't read automatically — but when you tell Claude "use my logo" or "match the style of my website," you can point it to these files.

---

### Step 6: Check Your Setup

Start a fresh Claude Code session in your workspace folder. Type:

```
Read my CLAUDE.md and company-context files. Summarize what you know about my business, my brand voice, and my rules — in your own words.
```

Claude should be able to tell you:
- What your company does
- How you sound (and what you avoid)
- What the rules are for building things

If it gets something wrong, update the relevant file and try again.

**Your workspace is now set up.** Every time you start Claude Code in this folder, it automatically knows who you are, how you sound, and what rules to follow.

---

## PART 2: INSTALL YOUR FIRST SKILL

Skills are saved, reusable instructions for Claude. Instead of explaining "how to write a product description in our brand voice" every time, you install a skill called `/product-description` and it just works.

Think of it like a recipe card pinned to the kitchen wall. The chef doesn't need you to re-explain the carbonara — they follow the recipe.

---

### What Skills Are Available

For this workshop, we recommend starting with these:

**For everyone:**
- **`/landing-page`** — Generates a full landing page from a product or service description
- **`/competitor-research`** — Analyzes a competitor's website and gives you a structured breakdown

**For ecom / product businesses:**
- **`/product-description`** — Writes product copy in your brand voice

**For agencies / services:**
- **`/brand-check`** — Reviews content against your brand guidelines

**For sales:**
- **`/competitor-research`** — Research a prospect's company before outreach

### How to Install a Skill

Skills live in a `.claude/commands/` folder inside your project. To install one:

```
Create a folder called .claude/commands/landing-page/ and inside it create a file called SKILL.md with instructions for building a landing page. The skill should:

1. Ask me what the page is for (product, service, event)
2. Read my CLAUDE.md and company-context files for brand info
3. Build a single HTML landing page with: hero section, 3 key benefits, social proof section, and a call-to-action
4. Use my brand colors and voice
5. Keep it to one page, no navigation, no login
```

Claude creates the skill file. Now whenever you type `/landing-page` in Claude Code, it runs this workflow automatically.

**Try it now:**

```
/landing-page
```

Claude will ask you what the page is for, read your brand files, and generate a complete landing page in your brand style.

---

## PART 3: CHOOSE YOUR BUILD

Now you're set up. Time to build something real. Pick the track that matches what you'd actually use:

---

### Track A: My Week Dashboard

**What it is:** A personal command center — one HTML page that shows your week at a glance. Your priorities, your key numbers, your quick links, and what you need to focus on today.

**Who it's for:** Anyone who wants a better start to their day than opening 5 tabs.

**What it includes:**
- A "This Week" section with your top 3-5 priorities
- A "Key Numbers" section with the metrics you check every day (revenue, leads, orders — whatever matters to you)
- A "Quick Links" bar with your most-used tools (Shopify, HubSpot, Gmail, Notion, etc.)
- A "Today's Focus" area with one thing you're working on
- Styled to your brand — your colors, your vibe

**The spec to paste into Claude:**

```
Build me a personal dashboard as a single HTML file. This is a command center for my work week.

Layout:
- Full-width header with my company name and today's date
- Left column (60%): "This Week's Priorities" — a numbered list of 5 items I can edit
- Right column (40%): "Key Numbers" — 4 cards showing metrics with labels (I'll fill in the real numbers)
- Below: "Quick Links" bar — 6 clickable buttons that open my tools in new tabs
- Bottom: "Today's Focus" — one large text area for my main task today

Style:
- Use my brand colors from CLAUDE.md
- Clean, minimal, lots of whitespace
- The numbers should feel big and bold
- Mobile-friendly

What it must NOT do:
- No login
- No database  
- No JavaScript frameworks
- No animations
- Just clean, static HTML I can open in my browser every morning
```

---

### Track B: Sales Outreach Planner

**What it is:** A single-page tool where you organize your top prospects and plan your outreach. Think of it as your sales cockpit — everyone you're targeting, their status, and what to say next.

**Who it's for:** Anyone who does outreach — sales, partnerships, BD, freelancers finding clients.

**What it includes:**
- A prospect table with name, company, status, and last action
- A "This Week's Outreach Plan" section with who to contact and what to say
- A pipeline visualization showing how many prospects are in each stage
- A "My Talking Points" section with key value props and objection handlers

**The spec to paste into Claude:**

```
Build me a sales outreach planner as a single HTML file. This is my daily sales cockpit.

Layout:
- Header with "Sales Command Center" and this week's date range
- Top section: Pipeline overview — show 5 stages (New, Researched, Contacted, Replied, Meeting) with a count in each
- Main section: Prospect table with columns: Name, Company, Stage, Score (1-10), Last Action, Next Step
- Pre-fill with 5 example prospects so I can see how it looks
- Below the table: "This Week's Plan" — a checklist of 5 outreach actions for the week
- Sidebar or bottom: "My Talking Points" — 3 key value props and 3 objection responses

Style:
- Use my brand colors from CLAUDE.md
- Professional, data-forward, clean
- The pipeline numbers should feel bold and clear
- Table should be easy to scan

What it must NOT do:
- No login or auth
- No database — this is a visual planner, not a CRM
- No API calls
- No complex JavaScript
- Just clean HTML I can open and reference throughout my week
```

---

### Track C: Brand Content Studio

**What it is:** A showcase page that demonstrates your brand in action. Product descriptions, social media posts, email subject lines — all generated by Claude in your voice. Think of it as a mini brand book that also serves as a content library.

**Who it's for:** Anyone who creates content — marketers, ecom owners, agencies, freelancers.

**What it includes:**
- A brand overview section (your voice, your colors, your vibe)
- 3 product descriptions in your brand voice
- 5 social media post examples (LinkedIn, Instagram, or whatever you use)
- 3 email subject line options for a campaign
- A "Do / Don't" section showing on-brand vs off-brand examples

**The spec to paste into Claude:**

```
Build me a brand content studio as a single HTML file. This is a showcase of my brand voice in action.

Read my company-context/BRAND-VOICE.md and company-context/COMPANY.md first. Then build:

Layout:
- Header with my company name and "Content Studio" 
- Section 1: "Our Voice" — a visual summary of our brand voice (adjectives, do/don't)
- Section 2: "Product Descriptions" — 3 example descriptions for our products/services, written in our voice
- Section 3: "Social Posts" — 5 example posts for [pick: LinkedIn / Instagram / Twitter]
- Section 4: "Email Subject Lines" — 3 options for a [pick: product launch / newsletter / promotion]
- Section 5: "On-Brand vs Off-Brand" — 2 side-by-side examples showing the difference

Style:
- Use my brand colors from CLAUDE.md
- Editorial, magazine-style layout
- Each section should feel like a card or panel
- Generous whitespace, clean typography

What it must NOT do:
- No login
- No database
- No AI generation on the page (all content is pre-generated by you)
- No complex interactions
- Just a beautiful HTML showcase I can share with my team
```

---

## PART 4: BUILD IT

### Step 1: Make Claude Read Your Context

Before you paste your spec, start with this:

```
Read my CLAUDE.md and all files in company-context/. Confirm you understand my business and brand voice before we start building.
```

Wait for Claude to confirm. It should be able to describe your business in its own words.

### Step 2: Paste Your Spec

Copy the spec from your chosen track above (or write your own) and paste it into Claude. Claude will build the HTML file.

### Step 3: Open It in Your Browser

Claude will create an HTML file. Open it:
- In VS Code: right-click the file → "Open with Live Server" or "Open in Browser"
- Or find the file in Finder/Explorer and double-click it

### Step 4: Iterate With Screenshots

This is where the real magic happens. Look at what Claude built. Something will be off — the spacing, the colors, the layout, something.

**Take a screenshot** of what's wrong and paste it into Claude:

```
[paste screenshot]
The header is too small. Make the company name bigger and add more space below it.
```

Or just describe it:

```
Move the quick links section above the key numbers. And make the numbers bigger — they should be the first thing I see.
```

Do this 5-10 times. Each iteration takes seconds. This is the "screenshot feedback loop" — it's how real products get built. Nobody gets it right on the first try.

### Step 5: Reference Apps You Love

Stuck on how something should look? Reference apps you already use:

```
Make the metrics cards look like Shopify's dashboard — big number on top, label below, subtle border.
```

```
Style the prospect table like a clean Notion database — minimal borders, good spacing, status tags with color.
```

```
Make the whole page feel like an Apple product page — lots of whitespace, big typography, minimal.
```

Claude has seen all of these. Your taste in apps is your technical vocabulary.

---

## PART 5: WHAT YOU BUILT TODAY

Take a step back. Look at what you have:

**A workspace that works:**
```
my-workspace/
├── CLAUDE.md                    ← Claude knows your rules
├── company-context/
│   ├── COMPANY.md               ← Claude knows your business
│   └── BRAND-VOICE.md           ← Claude knows your voice
├── brand-assets/                ← Your visual references
├── builds/                      ← Your projects go here
└── .claude/commands/            ← Your installed skills
```

**A skill you can reuse:**
Type `/landing-page` anytime and get a branded landing page in minutes.

**A real tool you built:**
A dashboard, a planner, or a content studio — styled to your brand, built to your spec, without writing code.

**And the most important thing:** A workflow you can repeat. Every new project starts the same way: write a spec, tell Claude to read your context, build, iterate with screenshots, done.

---

## WHAT'S NEXT

**Before Session 3:**

1. **Use your build for a real day.** Open your dashboard Monday morning. Use your outreach planner. Share your content studio with a colleague. See what's missing.

2. **Add to your CLAUDE.md.** Every time Claude does something you don't like — wrong colors, wrong tone, added something you didn't ask for — add a rule. "Never use blue." "Always use sentence case." "Don't add icons unless I ask." After a week, your CLAUDE.md will be perfectly calibrated.

3. **Install another skill.** Try `/competitor-research` or `/product-description`. See how skills give you consistent output without re-explaining everything.

4. **Think about this question:** What's the one thing you do manually, the same way, every single week? A report. A content batch. A prospect list update. Write it down. That becomes an automation in Session 3.

---

## TROUBLESHOOTING

**Claude doesn't seem to know my brand:**
Did you fill in company-context/BRAND-VOICE.md? The "good copy" and "bad copy" examples are the most important part.

**The HTML file doesn't open:**
Make sure the file ends in `.html`. Find it in Finder (Mac) or File Explorer (Windows) and open it with Chrome or Safari.

**Claude keeps adding features I didn't ask for:**
Add to your CLAUDE.md: "Never add features I didn't explicitly request. When in doubt, ask first."

**The styling looks wrong:**
Take a screenshot and paste it into Claude with: "This doesn't match my brand. Fix the colors to match my CLAUDE.md brand section."

**Claude's responses are getting weird or confused:**
Type `/clear` and start fresh. Your CLAUDE.md reloads automatically. This fixes 90% of problems.
