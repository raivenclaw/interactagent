# Module 1: Foundations

**Claude Code Bookclub** -- Session 1 of 6

---

You don't need to code. You never will. But you do need to learn how to work with something that codes for you. That's what this session is about.

By the end of this module, you'll understand how Claude Code thinks, how to give it instructions it can actually follow, and how to get a working result in minutes instead of hours of back-and-forth.

Let's go.

---

## 1. The Mental Model

Claude Code is not Google. It's not ChatGPT. It's not a search bar you type questions into.

**Claude Code is a contractor.** You brief it. It builds.

That distinction changes everything about how you use it. With a search engine, you ask a question and get an answer. With a chatbot, you have a conversation. With Claude Code, you hand over a job and get back a deliverable -- a working file, a tool, an app.

But here's the thing about contractors: they don't read minds. They complete what you ask for. The quality of what you get back is directly proportional to the quality of your brief.

### The Freelancer Test

Imagine you hire a freelance designer. You say:

> "Make me a website."

What do you get? Garbage. A generic template with stock photos and Lorem Ipsum. Not because the designer is bad, but because you gave them nothing to work with.

Now imagine you say:

> "Build me a one-page site with a hero section, 3 feature blocks, a pricing table with two tiers, and a CTA at the bottom. Use my brand colors -- cream background, dark text, red accents. No animations. No login. No blog. Just the landing page."

Now you get something usable. Same designer. Different brief.

Claude Code works exactly the same way. Every time you open it, you're hiring a contractor. Brief it like one.

---

## 2. The Boat With Wings Problem

This is the most common way builds go wrong. It happens to everyone. Here's how it plays out:

You sit down and tell Claude to build you a car. A simple car. Four wheels, engine, drives forward. Great.

Ten minutes in, you're watching it work and you think: "What if it could also fly?" So you ask for wings. Claude adds wings. Now you're excited. "What if it could also float?" Claude adds a hull.

You end up with a boat with wings and wheels that doesn't drive, doesn't fly, and sinks.

Meanwhile, Claude spent the first 20 minutes building a login system, a user database, and an admin panel -- before it built the car.

**Two traps killed this build:**

**Trap 1: Scope creep mid-build.** You kept adding features before the first one worked. Every new idea felt small ("just add wings!") but each one made the whole thing more fragile.

**Trap 2: Claude builds infrastructure before workflow.** Left to its own devices, Claude loves to start with the plumbing -- authentication, databases, error handling. The stuff your user never sees. Meanwhile, the thing your user actually touches doesn't exist yet.

### The Rule

**Build the thing your user touches first. Everything else comes later.**

If you're building an email generator, the first thing that should work is: you type a topic, you get an email. Not a login screen. Not a database. Not a settings page.

If you're building a product page, the first thing that should work is: the page renders with real content. Not a CMS. Not an admin panel.

### When You Get a New Idea Mid-Build

You will. It's natural. When it happens, say this:

> "Good idea. Let's add that after this works."

Write the idea down somewhere. Come back to it after the core thing is done. Nine times out of ten, the idea is still good but the timing was wrong.

---

## 3. The Spec -- Your Most Powerful Tool

A spec sounds intimidating. It's not. A spec is just three things:

1. **What it does** -- the job it performs
2. **What it looks like** -- the format, the style, the layout
3. **What it must NOT do** -- the boundaries

That third one is the secret weapon. Constraints are more powerful than instructions.

### Why Constraints Beat Instructions

When you say:

> "Build something simple."

Claude doesn't know what "simple" means to you. It might skip things you wanted. It might add things you didn't.

When you say:

> "No auth unless I ask. No database. No deployment setup. Just the page."

Now Claude knows exactly where the walls are. It can move fast because it knows what's off-limits.

### Bad Spec vs. Good Spec

**The idea:** A tool that generates product descriptions for your ecommerce store.

**Bad spec:**

> "Build me a product description generator."

What Claude builds: A full Next.js app with a database, user accounts, a history of past generations, a settings page for tone of voice, and an API integration that costs money -- all before you've seen a single product description.

**Good spec:**

> "Build a single HTML page. It has one text input for the product name, one textarea for bullet points about the product, and a button that says 'Generate.' When I click Generate, it calls the Claude API and shows me a product description below the button. Style: clean, white background, one column, big readable text. No login. No database. No history. No settings."

What Claude builds: Exactly that. A working tool in under 5 minutes. You can iterate from there.

Same idea. Wildly different output. The only difference was the brief.

### Your Product Intuition Is the Technical Skill

Here's something nobody tells non-technical founders: you already have the most important skill.

You've used thousands of apps. You know what good feels like. You know when a checkout flow is annoying. You know when a dashboard is confusing. You know what "clean" means, what "fast" means, what "too much" means.

That intuition IS the spec.

When you say:

> "Add a like button like Instagram does it -- the heart animation, the count, the whole thing."

That's a complete spec. Claude has seen Instagram. It knows exactly what you mean. Your reference library of every app you've ever used is your technical vocabulary.

Use it:

- "Make the sidebar collapsible like Notion"
- "Add a search bar like Shopify's admin"
- "Make the cards draggable like Trello"
- "Style it like Apple's product pages -- lots of whitespace, big images, minimal text"

---

## 4. CLAUDE.md -- Giving Claude a Brain

### The Problem

Claude forgets everything between sessions. Every time you start a new conversation, it's day one. It doesn't know who you are, what you're building, how you like things done, or what mistakes it made last time.

It's like hiring a new contractor every single day and re-explaining everything from scratch.

### The Solution

`CLAUDE.md` is a file that lives in your project folder. Claude reads it automatically at the start of every session. Think of it as a briefing document -- the packet you hand a new contractor before they start work.

It tells Claude:

- Who you are and what you're building
- What tech to use (and what not to use)
- Your brand guidelines
- Your rules and preferences
- What it got wrong before (so it doesn't repeat mistakes)

### The Constitution Metaphor

Think of it this way. CLAUDE.md is the constitution. Your prompts are legislation.

The constitution sets the permanent rules -- your brand voice, your tech stack, your "never do this" list. It doesn't change session to session. Legislation is what you ask Claude to do right now -- build this page, write this copy, fix this bug.

When there's a conflict between your prompt and your CLAUDE.md, CLAUDE.md wins. That's the point. It protects you from yourself. When you're tired at 11pm and you type "just make it work, add whatever you need" -- your CLAUDE.md will still block Claude from adding a database or deploying without permission.

### Company Context Files

Here's a pattern that makes your CLAUDE.md even more powerful. Instead of cramming everything into one file, split your business context into separate files:

```
your-project/
├── CLAUDE.md              # Rules and preferences
├── company-context/
│   ├── COMPANY.md         # Who you are, what you do, your numbers
│   ├── BRAND-VOICE.md     # How you sound, examples of good and bad copy
│   ├── PERSONAS.md        # Your 3 main customer types
│   └── COMPETITIVE.md     # Who you compete with, where you win and lose
```

Claude reads all of these at the start of every session. Now when you say "write a product description," Claude knows your brand voice, your target customer, and how you differ from competitors -- without you explaining any of it.

This is one of the highest-leverage things you can set up. Ten minutes of writing these files saves you hours of re-explaining context across every future session.

### What Goes In It

- **Project description** -- one paragraph about what this project is
- **Tech stack** -- what tools and frameworks the project uses
- **Brand guidelines** -- colors, fonts, tone of voice
- **Rules** -- the things Claude must always or never do
- **Constraints** -- what to avoid, what to skip, what to ask before doing

### What Does NOT Go In It

- Entire codebooks or documentation dumps (too much noise)
- Reference material that changes every day (it'll go stale)
- Step-by-step instructions for the current task (that goes in the prompt)

### The Progressive Disclosure Trick

Don't try to write the perfect CLAUDE.md on day one. Start with 10 lines. The basics.

Then, every time Claude does something you don't like -- builds a login when you didn't ask, uses the wrong colors, deploys without permission -- add a rule.

> "Never add authentication unless I explicitly ask for it."

> "Always use cream (#EAE6DF) as the background color, never white."

> "Don't deploy anything. Ever. I'll tell you when."

After two weeks of building, your CLAUDE.md will be perfectly calibrated to how you work. It will have caught every bad habit Claude has and corrected it. This is the file that makes Claude feel like it "knows you."

### Your Starter CLAUDE.md: "Build With Focus"

Every participant in this workshop gets this CLAUDE.md to start with. Copy it into any project folder. It's designed to keep Claude focused, prevent scope creep, and make sure it builds the thing you actually want.

```markdown
# Build With Focus

## Role
You're building with someone who has ideas, not code skills. They don't need to understand the code — they need the thing to work. Your job is to keep the build focused and get to a working result fast.
You are not here to impress anyone with architecture. You are here to solve one problem.

## Phase 1: Discover First
**Do NOT write any code, create any files, or suggest a stack until this phase is complete.**
Every project solves ONE problem. Before anything else, figure out what it is — together.

### How discovery works:
When the user describes what they want, don't ask a list of questions. Instead:
1. Interpret their request. Explain in plain language what you think they're trying to build.
2. Offer 2–3 options for what "done" could look like — from simplest to most ambitious.
3. Let the user pick, adjust, or redirect.

If the request is too vague, ask one clarifying question first:
"What's the thing you're doing today manually that you wish happened automatically?"

### Then confirm:
"So the core thing is: [X]. Everything else comes after that works. Correct?"
Only proceed to Phase 2 after the user confirms.

## Phase 2: Build

### Scope Discipline
When the user says "oh and it should also..." mid-build:
1. Acknowledge it — "Good idea."
2. Park it — "Let's add that after the core thing works."
3. Stay on track.

### Stack
| Situation | Use this |
|---|---|
| Showing an idea, a layout, or a workflow | Single HTML file |
| Automating something, processing data | Node.js / TypeScript script |
| Building something people visit in a browser | Next.js with Tailwind |
| Needs a database | Supabase — only after workflow works without one |
| Runs on a schedule or without human triggering | Trigger.dev task |
| Needs AI | Claude API via @anthropic-ai/sdk |

### What NOT to build unless asked
- Login or authentication
- A database (until the workflow works without one)
- Paid API integrations (without discussing cost)
- Multiple features at once
- Deployment setup (until it works locally)
- Error handling for edge cases (before happy path works)
- A "nice UI" (functionality first)

### Secrets
- API keys go in .env — never in the code
- Always validate: `const key = process.env.KEY; if (!key) throw new Error("KEY not set");`
- Verify .gitignore includes .env before any commit

### Shipping
Nothing gets deployed without the user saying "put it online." Ever.

## Remember
A car that drives is better than a flying boat that sinks.
```

Read through this. Every line is there because of a real mistake someone made. The "What NOT to build unless asked" section alone will save you hours.

---

## 5. Context Management -- The Invisible Skill

This is the thing that separates people who love Claude Code from people who think it's broken. And almost nobody talks about it.

### The Whiteboard Mental Model

Imagine Claude's brain is a whiteboard. Every message you send, every response Claude gives, every file it reads, every error it encounters -- all of it gets written on the whiteboard.

At the start of a session, the whiteboard is clean. Claude is sharp, focused, precise.

As you keep working, the whiteboard fills up. Claude is juggling your first request, your third revision, that error from 20 minutes ago, the file it read, the code it wrote, your latest instruction that contradicts something you said earlier.

Eventually the whiteboard is so full that Claude starts making mistakes. It forgets constraints. It contradicts itself. It builds things you already told it not to build.

**This is the #1 reason sessions go bad.** Not because Claude got dumber. Because the whiteboard is full.

### The Fix: `/clear`

The `/clear` command erases the whiteboard. Completely. Fresh start.

This is the single highest-ROI habit you can build. When you feel a session degrading -- when Claude starts making weird choices, forgetting your rules, or going in circles -- type `/clear` and start fresh.

Your CLAUDE.md gets reloaded automatically. So Claude still knows your project, your rules, your preferences. It just loses the clutter from the current session.

**Default rule: one task per conversation.**

Building a product page? That's one conversation. Need to fix a bug? `/clear`, new conversation. Want to add a feature? `/clear`, new conversation.

### "Continue Where We Left Off" Is a Trap

It feels efficient. It's not. When you say "continue where we left off," Claude has to reconstruct context from a messy whiteboard. A fresh start with a good CLAUDE.md is almost always faster and produces better results.

### `/compact` -- The Middle Ground

Sometimes you're in the middle of something and can't afford a full reset. `/compact` squeezes the whiteboard -- it keeps the important context but removes the noise.

Use `/compact` when:
- You're deep in a build and switching tasks would lose momentum
- The session is getting long but still productive
- You need to keep going but want Claude to refocus

Use `/clear` when:
- You're starting a new task
- Claude is making mistakes
- You're frustrated (seriously -- `/clear` and a calm re-prompt fixes most problems)

### The 60% Rule

If a session feels like it's degrading, it probably is. Don't push through. Don't add more instructions trying to correct course. That just fills the whiteboard faster.

`/clear`. Restart. Move on.

---

## 6. Essential Commands

You don't need to memorize a lot. These are the only commands that matter right now:

### `/clear` -- Fresh start

The most important command. Use it between tasks. Use it when things feel off. Use it liberally.

```
/clear
```

### `/compact` -- Compress without clearing

For long sessions that are still going well but getting heavy.

```
/compact
```

### `/init` -- Generate a starter CLAUDE.md

Run this in any project folder and Claude will create a CLAUDE.md based on what it finds. Good starting point that you can edit.

```
/init
```

### Giving Claude a Screenshot

This is 80% of debugging. When something looks wrong, don't try to describe it. Show it.

- **Drag and drop** an image file into the Claude Code terminal
- **Paste** a screenshot directly (Cmd+V on Mac after taking a screenshot)

Then say:

> "This is what it looks like. The button should be on the right side, not the left. Fix it."

Claude can see the screenshot and understand what's wrong visually. This is faster and more accurate than any written description.

### Making Claude Plan First

When you're starting something complex, don't let Claude just dive in. Tell it to think first:

> "Plan how you would build this. Don't write any code yet."

Claude will lay out the approach -- what files, what structure, what order. You review, adjust, then say "go." This prevents the boat-with-wings problem because you can catch bad decisions before any code is written.

---

## 7. The Stack Decision

"What technology should I use?" is a question you'll never need to answer in detail. But you do need a rough sense of which tool fits which job. Here's the cheat sheet:

| What you need | What to use | Example |
|---|---|---|
| Show an idea, a mockup, a prototype | HTML file | A character card, a landing page draft, a visual concept |
| Build a tool people use in a browser | Next.js | A calculator, a dashboard, a content generator |
| Save data between sessions | Supabase | User accounts, product lists, order logs |
| Run something without you pressing a button | Trigger.dev | Daily reports, automated emails, price monitors |
| Make something smart | Claude API | Content generation, analysis, scoring, summarization |

You don't need to memorize this. When you start a build, Claude will pick the right tool if your CLAUDE.md has the stack table (and the "Build With Focus" one does).

The only rule to remember: **start with the simplest option.** If an HTML file can do the job, don't build a Next.js app. If a script can do the job, don't set up a database.

You can always upgrade later. You can't easily downgrade.

---

## 8. Quick Wins to Try Right Now

These take less than 5 minutes each. Do them during the session or right after.

### Quick Win 1: The Business Card

Open Claude Code and type:

```
Create an HTML file that shows my name as a stylish business card with the title "Founder" at "My Company". Use a dark theme with elegant typography.
```

Open the HTML file in your browser. You just built something. In 30 seconds.

### Quick Win 2: Iterative Building

Now, in the same session, type:

```
Now add a QR code that links to https://linkedin.com/in/myprofile
```

Watch Claude modify the existing file. This is how real building works -- small, iterative steps. Not one giant prompt.

### Quick Win 3: The Power of `/clear`

Type `/clear`. Then type:

```
Create a business card HTML file for the same person, but this time use a minimal cream and charcoal design with lots of whitespace and a serif font.
```

Compare the two files. Same idea, completely different output. The fresh context let Claude approach it with no baggage from the previous design.

---

## 9. Workshop Exercise: Character Card

This is your hands-on build for the session. By the end, you'll have a personal character card -- a stylish HTML page that represents you.

### Step 1: Write Your Spec

Before you touch Claude Code, write 3 lines:

1. **What it shows:** Your name, title, company, and a one-liner about what you do
2. **What style:** Pick a vibe -- dark and moody, light and editorial, bold and colorful, minimal and clean
3. **What it must NOT have:** No animations, no scroll, no external images (or the opposite -- your call)

Example spec:

> "A character card that shows my name (Alex Rivera), title (CEO), and company (Meridian Studios). One-liner: 'Building brands that people remember.' Style: dark background, cream text, editorial feel, big serif font for my name. Must NOT have: animations, multiple pages, or any interactive elements."

### Step 2: Give It to Claude Code

Open Claude Code and paste your spec. Let it build.

### Step 3: Open and Review

Open the HTML file in your browser. Look at it. Does it match what you imagined?

### Step 4: Iterate

This is where the real skill is. Give feedback like you would to a designer:

- "Change the font to something more editorial"
- "Add my photo" (drag and drop an image file)
- "Make the background darker"
- "Add more whitespace around my name"
- "Make it responsive so it looks good on mobile too"

Each change should be one prompt. Small steps. Check the result after each one.

### Tiers -- Go as Far as You Want

**Tier 1: Get it working and looking good.**
A clean, static character card you're proud of. This is the goal for everyone.

**Tier 2: Add an interactive element.**
Try one of these:
- A hover effect on your name
- A flip animation (front: your info, back: your contact details)
- A dark/light mode toggle

Prompt example:

```
Add a dark/light mode toggle in the top right corner. Default to dark mode. Make the transition smooth.
```

**Tier 3: Make it shareable.**
Turn it into something you can actually send people:
- Add meta tags so it previews nicely when shared on Slack or LinkedIn
- Add an OG image (Claude can generate the meta tag, you provide the image)
- Deploy it to Vercel so it has a real URL

Prompt example:

```
Add Open Graph meta tags so this page previews nicely when shared. Title: "Alex Rivera — Meridian Studios". Description: "Building brands that people remember." Set the OG image to og.png.
```

---

## 10. Homework

Before Session 2, do this one thing:

**Pick one thing you want to build for real.** Something for your business. Not a toy, not a test -- something you'd actually use.

Maybe it's a landing page for a new product. A calculator your sales team needs. A dashboard that tracks your KPIs. A tool that generates something you currently do by hand.

Then write the spec. Three sections:

### What does it do?
5-10 bullet points. Be specific.

```
Example:
- Takes a product name and 5 bullet points as input
- Generates a product description in our brand voice
- Shows the result on screen
- Has a "copy to clipboard" button
- Has a dropdown to pick tone: Professional, Casual, Luxury
```

### What does "done" look like?
Describe the moment you'd say "this works."

```
Example:
- I can type in a product name, add bullet points, pick a tone, and get back a description I'd actually use on our Shopify store
- The whole thing takes less than 30 seconds
- It looks clean enough to show my team
```

### What must it NOT do?
The constraints. The guardrails.

```
Example:
- No login or user accounts
- No saving past generations (just generate fresh each time)
- No Shopify integration (I'll copy-paste manually for now)
- No settings page
- Don't use GPT — use Claude API only
```

Bring this spec to Session 2. We'll build it live.

### Bonus: Set Up Your Company Context

If you want to get ahead, fill in the company context templates from this module's `templates/company-context/` folder. There are four files:

- **COMPANY.md** -- who you are, your numbers, your team
- **BRAND-VOICE.md** -- how you sound (good examples and bad examples)
- **PERSONAS.md** -- your 3 main customer types
- **COMPETITIVE.md** -- your top competitors, where you win and lose

Put them in a `company-context/` folder in your project. Claude reads them automatically. Next session, when we build things, Claude will already know your brand.

---

## The Time Math

Here's the thing nobody tells you about Claude Code. It's not that it's faster. It's that the things it's faster at are the things you do the most.

Let's look at real numbers:

| Task | Manual | With Claude Code | You save |
|---|---|---|---|
| Write 5 product descriptions | 2 hours | 8 minutes | 1h 52m |
| Analyze 50 customer reviews | 3 hours | 5 minutes | 2h 55m |
| Research 3 competitors | 4 hours | 12 minutes | 3h 48m |
| Build a landing page from scratch | 2 days (with freelancer) | 30 minutes | 2 days |
| Create a weekly report from data | 45 minutes | 3 minutes | 42 minutes |

These are conservative. Once you have your CLAUDE.md, skills, and company context files set up, the recurring tasks get even faster because you stop re-explaining things.

The compound effect is what matters. Saving 30 minutes a day is 10 hours a month. Ten hours of your time, as a founder, is worth more than the subscription.

---

## Recap

What you learned today:

1. **Claude Code is a contractor.** Brief it like one.
2. **Build the thing your user touches first.** No login, no database, no infrastructure until the core works.
3. **A spec is three things:** what it does, what it looks like, what it must NOT do. Constraints beat instructions.
4. **CLAUDE.md is your constitution.** It beats your prompts when they conflict. Start small, add rules when it does something wrong. It calibrates over time.
5. **Company context files are force multipliers.** Ten minutes of setup saves hours of re-explaining your brand, customers, and competitors.
6. **Context is a whiteboard.** When it's full, Claude gets worse. `/clear` is your best friend.
7. **Start simple.** HTML file first. Upgrade only when you need to.

You don't need to code. You need to brief. And now you know how.

See you in Session 2.
