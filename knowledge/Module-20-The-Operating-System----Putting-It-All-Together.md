# Module 20: The Operating System -- Putting It All Together

You've spent 19 modules building individual pieces. A landing page here. A scraper there. Email sequences. Review dashboards. Price trackers. Skills. Hooks. Agents.

Now it's time to connect them all into a single, coherent system.

This is the capstone. By the end of this module, you'll have a documented, repeatable operating system for running your ecommerce business with Claude Code. Not a collection of tricks -- a system that compounds over time and gets better every week you use it.

---

## 1. The Full Stack of AI-Assisted Work

Let's name every piece you've built across this workshop and show how they connect.

**CLAUDE.md** -- your brain. This file contains everything Claude needs to know about your brand, your voice, your rules, and your preferences. Every session starts by reading this file. Without it, you're briefing Claude from scratch every time.

**Skills** -- your playbook. Repeatable workflows stored as instructions. Instead of explaining how you want a product description written every time, you built a skill. Run it. Done. Same quality every time.

**Hooks** -- your guardrails. Automatic safety checks that prevent destructive commands, catch leaked secrets, and track costs. They run silently in the background. You don't think about them until they save you.

**MCP servers** -- your tools. Connections to Shopify, Stripe, Playwright, Notion, and whatever else your business runs on. They give Claude access to real data from your real tools.

**Agents** -- your team. Autonomous Claude sessions that handle entire workflows: research, build, review, ship. They work while you focus on something else.

Here's the formula:

**CLAUDE.md + Skills + Hooks + MCP + Agents = Your Operating System**

Each piece is useful on its own. Together, they're a multiplier. Your CLAUDE.md informs your skills. Your skills feed your agents. Your hooks protect everything. Your MCP servers provide the data. It all fits together.

And the whole thing gets smarter over time. Not because the AI improves (though it does). But because YOU keep adding rules, skills, and workflows. Every mistake becomes a rule that prevents it next time. Every repeated task becomes a skill that runs in seconds. After three months, your operating system is 10x better than it was on day one.

---

## 2. The Meta-Skill

Here's the most important thing you learn in this entire workshop. It's not how to write a prompt. It's not how to build a landing page. It's not how to scrape competitors.

It's this: **every time Claude does something wrong, it becomes a rule. Every repeated workflow becomes a skill. Every safety concern becomes a hook.**

That's the meta-skill. The ability to turn experience into system.

### How It Works in Practice

**Monday:** Claude writes a product description that sounds too corporate. You fix it. Then you add to your CLAUDE.md: "Never use words like 'leverage', 'synergy', 'innovative', or 'cutting-edge'. Write like a human."

**Tuesday:** You ask Claude to build a landing page for the third time this month. Same structure every time. You realize: this should be a skill. You create `landing-page/SKILL.md` with your exact specifications. Now it's a one-line command.

**Wednesday:** Claude accidentally runs a command that deletes a git branch. Nothing is lost, but it scares you. You install the git safety hook. It never happens again.

**Thursday:** You notice your Claude Code bill is higher than expected. You install the cost tracker hook. Now you see exactly what each session costs. You start using `/clear` between tasks. Your bill drops 30%.

**Friday:** You realize you're doing the same competitor check every week. You build an agent that does it automatically and sends you a summary every Monday morning.

Each of these took 5-10 minutes. None of them required coding knowledge. But together, over weeks and months, they create a system that's uniquely yours. No one else has your exact rules, your exact skills, your exact workflows. That's your competitive advantage.

### The Self-Improving System

Here's an advanced technique that takes this even further. Add a `lessons.md` file to your project:

```markdown
# Lessons Learned

## 2026-04-08: Product descriptions
Claude kept using "innovative" and "cutting-edge." Added rule: no buzzwords.

## 2026-04-10: Landing page build
Claude built a navigation menu on a landing page. Added rule: landing pages never have nav menus.

## 2026-04-12: Competitor research
Claude used outdated pricing data from training. Added rule: always web search for current pricing.
```

Then add this to your CLAUDE.md:

```markdown
## Self-Improvement
Before starting any task, read lessons.md. After any correction from the user, add a new lesson to lessons.md with today's date and what went wrong.
```

Now Claude literally gets smarter every session. Every mistake becomes a permanent correction. After a month, your `lessons.md` has captured dozens of edge cases that your CLAUDE.md rules alone wouldn't cover.

This is the closest thing to training a custom AI model -- without any technical knowledge. You're just keeping a diary of mistakes and telling Claude to read it.

### The Compound Effect

Month 1: You're prompting Claude manually for everything. It's faster than doing things yourself, but you're still the bottleneck.

Month 3: You have 20 rules in your CLAUDE.md, 5 skills, 3 hooks, and 2 automated agents. Most of your repetitive work runs itself. You're spending your time on strategy, not execution.

Month 6: Your operating system has 50+ rules, a full skill library, and agents handling research, monitoring, and content. New team members get onboarded by reading your CLAUDE.md and running your skills. The quality is consistent no matter who's operating the system.

That's not learning to code. That's building a business infrastructure.

---

## 3. Your Operating System Document

Every good system has documentation. Here's a template for documenting yours. Fill this in as your capstone exercise.

```markdown
# My Claude Code Operating System

## CLAUDE.md
- Location: [path to your CLAUDE.md]
- Key rules:
  1. [Your most important brand voice rule]
  2. [Your most important formatting rule]
  3. [Your most important "never do this" rule]
  4. [Your most important technical preference]
  5. [Your most important workflow rule]
- Brand voice summary: [3 adjectives that describe your brand voice]
- Last updated: [date]

## Skills I Use
1. [Skill name] — [what it does] — [when I use it]
   Example trigger: "[the prompt that runs it]"
2. [Skill name] — [what it does] — [when I use it]
   Example trigger: "[the prompt that runs it]"
3. [Skill name] — [what it does] — [when I use it]
   Example trigger: "[the prompt that runs it]"

## Hooks Installed
- [ ] Git safety — blocks force pushes, hard resets, branch deletions
- [ ] Commit quality — catches secrets, debug code, console.logs
- [ ] Cost tracking — logs session costs to a CSV
- [ ] [Custom hook] — [what it does]

## MCP Servers Connected
- [ ] Shopify — store data, orders, products, customers
- [ ] Stripe — revenue, subscriptions, payment data
- [ ] Playwright — browser automation, scraping, screenshots
- [ ] Notion — knowledge base, content calendar
- [ ] [Other] — [what it provides]

## Active Agents
1. [Agent name] — runs [daily/weekly/manually] — [what it does]
   Trigger: "[how to run it]"
2. [Agent name] — runs [daily/weekly/manually] — [what it does]
   Trigger: "[how to run it]"

## My Workflows
1. **New product launch:**
   - Step 1: [what you do]
   - Step 2: [what you do]
   - Step 3: [what you do]

2. **Weekly competitor check:**
   - Step 1: [what you do]
   - Step 2: [what you do]

3. **Content creation:**
   - Step 1: [what you do]
   - Step 2: [what you do]
   - Step 3: [what you do]

## Cost Management
- Monthly budget: €[amount]
- Average session cost: €[amount]
- Cost-saving rules:
  1. [Rule 1]
  2. [Rule 2]
  3. [Rule 3]

## Things I've Learned
- [Insight 1 — something that didn't work and what you changed]
- [Insight 2 — a shortcut you discovered]
- [Insight 3 — a mistake you'll never make again]
```

Print this out. Or keep it in your project folder. Update it every time you add a skill, rule, or agent. This document IS your operating system -- not the software, but the map of how you use it.

---

## 4. Team Workflows

If you work alone, skip this section. If you have a team -- even one other person -- read this carefully.

### Sharing Your Operating System

Your CLAUDE.md, skills, and hooks are just files in a folder. They live in your project directory. That means they can be shared exactly like any other file: through git, Dropbox, Google Drive, or just copying the folder.

When you share your CLAUDE.md with a team member, they get:
- Your brand voice rules (so their output matches yours)
- Your formatting preferences (so everything looks consistent)
- Your "never do this" rules (so they don't make mistakes you already caught)

When you share your skills, they get:
- The same repeatable workflows (same quality, every time, from anyone)
- No need to explain how to do things -- the skill IS the explanation

When you share your hooks, they get:
- The same safety nets (no one accidentally force-pushes or leaks secrets)
- Cost tracking from day one

### Onboarding New Team Members

Here's the fastest way to get a new person up to speed:

1. Give them access to your project folder
2. Point them to your CLAUDE.md -- "Read this first. These are our rules."
3. Show them the skills folder -- "These are our workflows. Run them, don't reinvent them."
4. Make sure hooks are installed -- "These protect you automatically."
5. Walk them through one workflow end-to-end -- "Here's how we do a product launch."

That's it. They're productive on day one. Not because they memorized a training manual, but because the system does the heavy lifting.

### Keeping Things Consistent

The problem with teams: everyone has their own way of doing things. One person writes product descriptions in a casual tone, another writes them formally. One person organizes files this way, another that way.

Your operating system solves this. When everyone runs the same skill for product descriptions, the output is consistent. When everyone follows the same CLAUDE.md rules, the voice is consistent. When everyone has the same hooks, the safety is consistent.

Consistency doesn't mean creativity dies. It means the baseline is locked. The creative work happens on top of that baseline.

### Version Control

Keep your operating system in git. Every change is tracked. You can see when a rule was added, who added it, and why. If something breaks, you can roll back.

> "Set up a git repository for my Claude Code operating system files. Include: CLAUDE.md, the skills/ folder, and the .claude/ folder (settings and hooks). Create an initial commit with everything as it is now. Write a .gitignore that excludes any files with API keys or secrets."

---

## 5. The Venture Studio Model

If you're running multiple projects, brands, or clients from one workspace, here's how to structure it.

### Separate CLAUDE.md Per Project

Each project gets its own CLAUDE.md with its own rules. When you're working in that project's folder, Claude automatically reads that project's rules -- not someone else's.

```
workspace/
├── CLAUDE.md                    # Global rules (apply everywhere)
├── clients/
│   ├── client-a/
│   │   ├── CLAUDE.md            # Client A's brand voice, rules, preferences
│   │   └── ...
│   ├── client-b/
│   │   ├── CLAUDE.md            # Client B's brand voice, rules, preferences
│   │   └── ...
├── brands/
│   ├── brand-one/
│   │   ├── CLAUDE.md            # Brand one's guidelines
│   │   └── ...
├── apps/
│   ├── tool-one/
│   │   ├── CLAUDE.md            # Tool-specific rules
│   │   └── ...
```

The global CLAUDE.md at the root holds rules that apply to everything: formatting preferences, safety rules, general writing style. Each project's CLAUDE.md overrides or extends those rules for that specific context.

### Shared Skills Library

Skills that work across projects live in a central skills folder. Project-specific skills live in the project folder.

```
workspace/
├── skills/                      # Shared across all projects
│   ├── landing-page/SKILL.md
│   ├── competitor-research/SKILL.md
│   └── product-description/SKILL.md
├── clients/
│   ├── client-a/
│   │   ├── skills/              # Client A-specific skills
│   │   │   └── brand-check/SKILL.md
```

### Client Isolation

This is the most important rule for multi-project work: **never mix client context.**

- Never reference Client A's data when working on Client B
- Never use Client A's brand voice for Client B's content
- Never share proprietary information across clients
- Each client folder is a walled garden

Put this rule in your global CLAUDE.md:

```markdown
## Client Isolation
Never reference or use content, data, or brand guidelines from one client folder when working in another. Each client is completely isolated. If you need information about a client, it must come from that client's folder.
```

### The Client Template

When you onboard a new client, don't start from scratch. Copy a template.

> "Create a client template folder at _client-template/ with this structure:
>
> ```
> _client-template/
> ├── CLAUDE.md          # Template with placeholders for brand name, voice, colors
> ├── brand/             # Brand guidelines and assets
> ├── website/           # Website deliverables
> ├── competitor-research/  # Competitor analysis and monitoring
> ├── automations/       # Trigger.dev tasks and workflows
> └── README.md          # 'Getting started with this client' checklist
> ```
>
> The CLAUDE.md template should include placeholders for: brand name, brand voice (3 adjectives), primary colors, typography, target audience, key competitors, and any specific rules."

When a new client comes in:

> "Copy _client-template/ to clients/[client-name]/. Replace all placeholders with: Brand name: [X], Voice: [X], Colors: [X], Audience: [X], Competitors: [X]."

Five minutes. The new client has a fully structured workspace.

---

## 6. Cost Management

Claude Code isn't free, and costs can add up if you're not paying attention. Here's how to keep them under control.

### Understanding Your Costs

If you installed the cost tracker hook (Module 11), you already have a CSV file logging every session. Let's analyze it.

> "Read my cost tracking log at [path to CSV]. Show me: (1) Total spend this month (2) Average cost per session (3) My most expensive sessions -- what was I working on? (4) Cost trend -- am I spending more or less over time? (5) Which days of the week do I spend the most?"

### Setting a Budget

Pick a monthly number you're comfortable with. For most solo ecommerce founders, $50-150/month covers heavy daily use.

Add this to your CLAUDE.md:

```markdown
## Cost Rules
- Monthly budget: €[X]
- Warn me if a single session exceeds €5
- For simple tasks (rewrites, short copy, quick questions), use the cheapest available model
- For complex tasks (building tools, multi-step research, analysis), use the best model
- Always /clear between unrelated tasks to reset context and save tokens
```

### The /clear Habit

This is the single easiest way to reduce costs. When you finish one task and start another, type `/clear`. It resets the conversation context.

Why this saves money: Claude Code charges based on tokens -- the amount of text in the conversation. If you built a landing page (thousands of lines of code in context) and then ask Claude to write an email subject line, it's processing all that landing page code for no reason. `/clear` drops the old context. The subject line prompt runs on a clean, cheap session.

**Rule of thumb:** `/clear` after every distinct task. Building a landing page? `/clear`. Now writing email copy? `/clear`. Now analyzing reviews? `/clear`. Three cheap sessions instead of one expensive one.

### Identifying Waste

Common patterns that waste money:

**Long, wandering sessions.** You start with one task, then another, then another, all in the same session. The context grows. Every response gets more expensive. Fix: `/clear` between tasks.

**Repeated tasks that should be skills.** Every time you write a product description, you explain your format, your voice, your structure. That's hundreds of tokens of instruction repeated every time. Fix: make it a skill. The skill contains the instructions once. You just trigger it.

**Over-building.** You ask Claude to build a complete app when you really just need a quick tool. Claude happily builds auth systems, databases, and admin panels you'll never use. Fix: be specific in your brief. "Build a single HTML file that does X" not "Build me an app."

**Not reading CLAUDE.md.** If your CLAUDE.md is missing or incomplete, you end up explaining things in conversation that should be in the file. Fix: keep your CLAUDE.md comprehensive.

### Model Selection

Not every task needs the most powerful model. Think of it like shipping -- you don't send everything overnight express.

**Use the fastest, cheapest model for:**
- Simple rewrites
- Short copy (subject lines, CTAs, taglines)
- Quick questions
- Formatting tasks

**Use the most capable model for:**
- Building tools and apps
- Multi-step research
- Complex analysis (review sentiment, competitive intelligence)
- Anything involving multiple files or long context

---

## 7. What's Next -- The Frontier

You've built a solid operating system. Here's what's coming next and how to prepare for it.

### Agent SDK

What it is: a way to build fully custom AI agents as standalone applications. Not just Claude Code sessions, but real software that runs Claude under the hood.

What it means for you: the tools you build in Claude Code today can become standalone apps tomorrow. Your email sequence generator, your review dashboard, your price tracker -- they could all become SaaS products that other people pay for.

How to prepare: keep building tools. Every tool you build teaches you what a good agent does. When the SDK matures, you'll know exactly what to build.

### Scheduled Triggers

What it is: agents that run on a cron schedule without Claude Code being open on your machine. Think of it as a background employee that shows up at the same time every day.

What it means for you: your weekly competitor check, your daily price monitor, your review scanner -- they'll run in the cloud on autopilot. You set them up once and get reports.

How to prepare: document your recurring workflows clearly. The cleaner your skill files and agent instructions, the easier they'll be to schedule.

### Remote Agents

What it is: agents that run in the cloud instead of on your laptop. No need to keep your machine on or Claude Code open.

What it means for you: longer-running tasks become practical. A full competitive analysis that takes 30 minutes to run? Fire it off and get the results later. A massive content generation job? Start it from your phone and review the output when you're back at your desk.

### Multi-Modal Input

What it is: using images, PDFs, screenshots, and visual input as first-class inputs.

What it means for you: take a screenshot of a competitor's ad and say "make something like this but for my brand." Upload a PDF of a supplier catalog and say "extract all products and prices." Photograph a physical product and say "write a product description based on this."

How to prepare: start thinking visually. Save screenshots of things you like, competitors' designs, and packaging you admire. These will become inputs.

### Team Collaboration

What it is: shared workspaces where multiple people can contribute to and use the same operating system.

What it means for you: your entire team operates from one source of truth. Skills get shared. Rules get enforced. Quality stays consistent whether you're doing the work or someone else is.

---

## 8. The Complete Starter Kit

This is your deliverable. A drop-in folder that gives anyone a working Claude Code setup for ecommerce in minutes.

### The Structure

```
starter-kit/
├── .claude/
│   ├── settings.json          # Hooks pre-configured
│   └── hooks/
│       ├── git-safety.sh      # Blocks force push, hard reset, branch deletion
│       ├── commit-quality.sh  # Catches secrets, debug code, console.logs
│       └── cost-tracker.sh    # Logs session costs to CSV
├── CLAUDE.md                  # Template with Phase 1 (brand) and Phase 2 (rules)
├── SPEC.md                    # Blank spec template for any project
├── skills/
│   ├── landing-page/
│   │   └── SKILL.md           # Landing page generator skill
│   ├── competitor-research/
│   │   └── SKILL.md           # Competitor research skill
│   ├── product-description/
│   │   └── SKILL.md           # Product description generator skill
│   └── brand-check/
│       └── SKILL.md           # Brand consistency checker skill
└── README.md                  # "Start here" guide
```

### Building It

> "Build me a Claude Code starter kit for ecommerce founders. Create the folder structure above at [path]/starter-kit/.
>
> **CLAUDE.md** should have two phases:
> - Phase 1: Brand identity (placeholders for brand name, voice, colors, typography, audience, values)
> - Phase 2: Operating rules (sensible defaults for formatting, file organization, communication style, and common 'never do this' items for ecommerce)
>
> **SPEC.md** should be a blank template with sections for: project goal, user, workflow, pages/screens, design rules, technical constraints, and 'what NOT to build'
>
> **settings.json** should configure the three hooks (git safety, commit quality, cost tracker) with the correct paths
>
> **Each hook script** should be the working versions from Module 11
>
> **Each skill SKILL.md** should be a complete, working skill with: description, trigger conditions, inputs, and step-by-step instructions for Claude to follow
>
> **README.md** should be a 'Start here' guide that walks someone through: (1) Copy this folder into your project (2) Fill in the CLAUDE.md placeholders (3) Verify hooks are working (4) Try your first skill (5) Next steps"

### Customizing the Kit

Once you have the starter kit, customize it for your specific brand:

> "I've copied the starter kit to my project. Now customize it for my brand: [brand name]. Here are my details:
> - Brand name: [X]
> - Brand voice: [3 adjectives]
> - Primary color: [hex]
> - Secondary color: [hex]
> - Accent color: [hex]
> - Typography: [headings font], [body font]
> - Target audience: [description]
> - Key competitors: [list]
> - Products: [brief description]
>
> Update the CLAUDE.md with all of this. Update the skills to reference my brand where appropriate. Make it mine."

---

## 9. Workshop Exercise: Build Your OS

This is your final exercise. Take everything from this workshop and lock it into a system.

### Step 1: Audit Your Current Setup

> "Look at my current Claude Code setup. Check: (1) Do I have a CLAUDE.md? How complete is it? (2) What skills do I have? Are any missing? (3) Are hooks installed? Which ones? (4) What MCP servers are connected? (5) Do I have any agents running? Give me a checklist of what I have and what's missing."

### Step 2: Fill In the Operating System Document

Use the template in this module's `templates/operating-system-template.md`. Fill in every section. Be specific. This document should be detailed enough that someone else could pick it up and operate your system.

Also grab `templates/lessons.md` -- the self-improving system file. Start logging mistakes from day one. After a month, Claude will have learned dozens of your preferences without you having to update CLAUDE.md constantly.

### Step 3: Install Any Missing Pieces

Use the checklist below. Everything referenced here has a ready-to-copy file in the module templates:

- No CLAUDE.md? → Module 01 `templates/build-with-focus.md`
- No company context files? → Module 01 `templates/company-context/`
- No SPEC template? → Module 02 `templates/SPEC.md`
- No cost tracker hook? → Module 11 `templates/cost-tracker.sh`
- No safety hooks? → Module 11 `templates/` (all 3 scripts + settings.json)
- No skills installed? → Module 12 `templates/` (4 ready-to-use skills)
- No MCP servers? → Module 09 `templates/mcp-quick-reference.md`
- No deployment checklist? → Module 10 `templates/deploy-checklist.md`
- No brand voice config? → Module 08 `templates/brand-voice-config.md`
- No ICP or outreach sequence? → Module 07 `templates/`
- No cron schedule reference? → Module 13 `templates/cron-reference.md`

Plus: check your track's `install-package.md` in the participant kit for the complete MCP + skills + hooks setup tailored to your role (ecom founder, agency owner, or sales pro).

### Step 4: Set Up Your First Automated Agent

Pick the task you do most often that could run by itself. Common choices:

- Weekly competitor price check
- Daily review monitoring
- Weekly content idea generation
- Monthly performance summary

Build it as an agent (Module 13-16 skills) or as a Trigger.dev task that runs on schedule.

### Step 5: Share Your OS Document With the Group

If you're doing this workshop in a cohort, share your operating system document. Not the files -- just the document. Seeing how others structure their system gives you ideas for your own. You'll discover skills you didn't think of, rules you should add, and workflows you hadn't considered.

---

## 10. Final Reflection

Let's zoom out.

Twenty modules ago, you opened Claude Code for the first time. Maybe you felt like an imposter. Maybe you thought "I'm not a developer, I shouldn't be here." Maybe you typed your first prompt and got something that didn't work and thought "this isn't for me."

Look at what you've built since then.

You've built landing pages that convert. You've scraped competitors and analyzed their strategies. You've generated ad copy, email sequences, and product descriptions that sound like you wrote them. You've built dashboards that visualize your business data. You've set up automated agents that work while you sleep. You've created a safety net of hooks that protects your code and your wallet.

And you did all of this without learning to code. Not a single line of JavaScript memorized. Not a single programming concept mastered. You didn't need to.

What you mastered is something different and, honestly, more valuable: the ability to describe what you want clearly enough that a machine can build it. The ability to spot when something isn't right and course-correct. The ability to turn mistakes into rules and repeated work into automated systems.

That's the meta-skill. And it works not just with Claude Code but with every AI tool that comes next. The landscape will change. The models will improve. New tools will appear. But the person who knows how to brief a machine, check its work, and build systems around it? That person will always be ahead.

### The Goal Was Never to Learn to Code

The goal was to build a system where your ideas become real -- reliably, repeatedly, affordably.

You now have that system.

Keep feeding it. Every time something goes wrong, add a rule. Every time you repeat yourself, build a skill. Every time you worry about safety, install a hook. Every time you waste time, automate it.

Your operating system compounds. Three months from now, it'll be 10x better than today. Not because you studied harder or learned more syntax. Because you kept paying attention and encoding what you learned into your environment.

The workshop is over. The system is just getting started.

---

## Quick Reference: Everything You Built

| Module | What You Built |
|--------|---------------|
| 1. Foundations | Your mental model for working with Claude Code |
| 2. Product Thinking | The spec -- your most powerful tool |
| 3. Landing Pages | Conversion-focused pages from a single prompt |
| 4. Competitor Research | Automated competitive analysis |
| 5. Ad Scraping | Ad library intelligence from Meta and TikTok |
| 6. Reddit Scraping | Customer voice mining from Reddit |
| 7. Lead Generation | Prospect lists and outreach automation |
| 8. Content Generator | Blog posts, social media, and content at scale |
| 9. MCP Servers | Tool connections to Shopify, Stripe, Playwright |
| 10. Database & Deploy | Supabase, auth, and deployment |
| 11. Hooks & Safety | Git safety, commit quality, cost tracking |
| 12. Custom Skills | Reusable workflow templates |
| 13-16. Agents | Autonomous task execution at 4 levels |
| 17. Email Automations | Complete email sequences and generator tools |
| 18. Review Analysis | Sentiment dashboards and marketing extraction |
| 19. Price Monitoring | Competitive price tracking and market intelligence |
| 20. Operating System | The complete system, documented and ready to grow |

That's 20 modules. Hundreds of prompts. Dozens of tools. One operating system.

---

## Post-Workshop Roadmap

What to do after the workshop: `templates/post-workshop-roadmap.md`

Week 1: Let agents run, review classifications, refine prompts.
Week 2: Add a second agent, build your first custom skill.
Month 1: 3-4 agents, 3-4 skills, saving 10+ hours/week.
Month 2+: Build your first orchestrator, increase agent autonomy.

## Session 4 Resources

- **Orchestrator Template:** `../16-agents-level-4/templates/orchestrator-template.md` — reusable multi-agent system spec
- **Track-Specific Multi-Agent Specs:**
  - Ecom: `participant-kit/tracks/ecom-founder/session-4-spec.md` — "Your Growth Team" (Launch Commander)
  - Agency: `participant-kit/tracks/agency-owner/session-4-spec.md` — "Your Client Service Team" (Client Review Commander)
  - Sales: `participant-kit/tracks/sales-pro/session-4-spec.md` — "Your Sales Development Team" (Deal Commander)
- **Quickstart Guide:** `participant-kit/quickstart.md` — first 10 minutes with Claude Code
- **Trigger.dev Setup:** `../13-agents-level-1/templates/trigger-dev-quickstart.md`

Now go build something.
