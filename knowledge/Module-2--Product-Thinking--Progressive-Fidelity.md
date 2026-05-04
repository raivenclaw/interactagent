# Module 2: Product Thinking & Progressive Fidelity

You already have the most important skill for building with Claude Code. You just don't know it yet.

---

## 1. Product Intuition Is Your Superpower

You have used thousands of apps. Thousands of websites. You have scrolled, tapped, swiped, and rage-quit your way through more digital products than most developers ever will.

That experience is not passive. It trained you. You know what good feels like. You know when a checkout is too slow, when a dashboard is confusing, when a button is in the wrong place. You have opinions about these things, and those opinions are sharp.

### You're the Product Manager. Claude Is the Engineer.

This reframe changes everything. When you hire a freelance developer, you don't write code for them. You tell them what to build, review what they deliver, and give feedback. That's the product manager role -- and it's exactly what you do with Claude Code.

The relationship works like this:

1. **You define what "done" looks like** -- the spec, the feel, the outcome
2. **Claude proposes an approach** -- how it would build it, in what order
3. **You approve or redirect** -- "yes, go" or "no, simpler"
4. **Claude builds** -- you watch, it ships a draft
5. **You review and give feedback** -- specific, visual, concrete
6. **Claude iterates** -- small changes, one at a time
7. **You say "ship it"** -- nothing goes live without your approval

You already know how to do this. You do it with agencies, freelancers, and designers every day. The only difference: Claude doesn't take 3 days to respond and doesn't charge you per revision.

Here is the thing most people miss: **when you work with Claude Code, those opinions become technical specs.**

Think about it:

- "Add a like button like Instagram does it" -- Claude has seen Instagram. It knows the heart animation, the double-tap, the counter. That sentence is a complete specification.
- "Google sign-in like every app does it" -- Claude knows the button, the popup, the redirect flow. Complete spec.
- "A dashboard like Shopify's analytics page" -- the cards, the graphs, the date picker. Complete spec.

You do not need to know HOW things are built. You need to know WHAT they should feel like. And you already do.

**Try this right now.** Think of 3 features from apps you use daily. Write them down like this:

1. _____ like [app] does it
2. _____ like [app] does it
3. _____ like [app] does it

Examples:

- "A product grid like ASOS does it"
- "A search bar like Amazon does it with autocomplete"
- "Email notifications like Stripe does them -- minimal, clean, one action button"

Each one of those lines is a prompt you can hand to Claude. Each one will produce something recognizable and functional. Your taste is your technical skill.

---

## 2. Progressive Fidelity -- The Right Build Order

Here is the number one mistake people make with Claude Code:

**They ask for the final thing immediately.**

"Build me a full Next.js app with authentication, a database, a dashboard, Stripe integration, and email notifications."

This is like walking into an architect's office and saying "build me a house" without ever drawing a floor plan. You will get a house. It will have walls and a roof. But the kitchen will be in the wrong place, the bathroom will be too small, and you will spend weeks fixing things that should have been caught on paper.

The right order has four steps. Each one is fast and cheap.

### Step 1: Write what it DOES (10 minutes)

Not what it looks like. Not what technology it uses. What the user actually does, step by step.

```
1. User opens the page
2. User types in their product cost, shipping cost, and ad spend
3. Page instantly shows profit margin, break-even point, and profit per unit
4. User clicks "Share" and gets a link to send to their team
5. Team member opens the link and sees the same results
```

That is it. Five bullets. You now have a workflow.

### Step 2: Build it as a quick HTML page (15 minutes)

This is the key move. Before you touch any real technology, you build a throwaway prototype.

**Prompt:**

```
Build me a single HTML file for a profit margin calculator. Show:
- Input fields for product cost, shipping cost, ad spend per unit, platform fee %
- A results section showing gross margin, net margin, and profit per unit
- Use fake/placeholder calculations for now
- Cream background (#EAE6DF), dark text (#2E2A26)
- Make it look clean and professional
```

In 15 minutes you have something you can open in your browser and click through.

### Step 3: Click through it and iterate (30 minutes)

Open the HTML file. Click every button. Fill in every field. Ask yourself:

- Does the flow make sense?
- Is anything missing?
- Is the order right?
- Would a customer understand this without instructions?

If something is off, tell Claude:

```
Move the results section above the inputs so users see the numbers update as they type.
Add a "Reset" button. The share button should be bigger.
```

Change it five times. Change it ten times. **This is free.** You are editing one HTML file. There is no database to migrate, no deployment to update, no packages to reinstall. Every change takes seconds.

### Step 4: NOW build it for real

Once the HTML feels right -- once you have clicked through it and thought "yes, this is exactly the flow I want" -- then you build it properly.

But we will cover that in Step 3 below.

**Why this works:** You validate the workflow before you add complexity. Changing a line in an HTML file costs nothing. Changing a page in a Next.js app connected to a database can cost you hours of debugging. Get the thinking right first, then make it real.

The analogy is simple. **You would not build a house without floor plans.** The HTML prototype IS your floor plan.

### The difference in practice

**Direct-to-Next.js approach:**
1. Ask Claude to build the full app (20 minutes)
2. Open it. The layout is wrong. (5 minutes to explain, 10 minutes to rebuild)
3. The flow is backwards. (5 minutes to explain, 15 minutes to restructure)
4. You wanted a different calculation. (5 minutes to explain, 10 minutes to change... but now it broke the database)
5. Total: 70+ minutes. Frustrated.

**HTML-first approach:**
1. Ask Claude for an HTML prototype (2 minutes)
2. Open it. Fix the layout (1 minute)
3. Fix the flow (1 minute)
4. Fix the calculation (1 minute)
5. Happy with it. Build the real thing with a clear reference (15 minutes)
6. Total: 20 minutes. Smooth.

---

## 3. From HTML to Real App

Your HTML prototype is not a throwaway. It is the most valuable document in your project.

When you are ready to build the real version, you do not need to re-explain everything. The HTML file IS the explanation. Claude can read it and see exactly what you built.

**The magic prompt:**

```
Rebuild this HTML prototype as a Next.js app. Keep the exact same
workflow and layout. Use the tech stack in CLAUDE.md.
The prototype is at: [path to your HTML file]
```

That is it. Claude will:
- Read your HTML file
- Understand the layout, the flow, the inputs, the outputs
- Rebuild it with real technology -- proper components, real calculations, actual data storage

This eliminates the most painful part of working with any builder (human or AI): the "that's not what I meant" back-and-forth. Claude is not guessing what you want. It is looking at what you already approved.

**One rule:** keep the HTML file in your project folder. Do not delete it. If you ever need to explain what you intended, that file is your proof.

---

## 4. Building in Phases

Even after you move to a real app, never ask Claude to build everything at once.

Remember the flying boat from Module 1? That is what happens when you combine too many features in one request. Each feature is reasonable on its own. Together, they create a mess.

Build in phases. Test after each one. Here is the pattern:

### Phase 1: Layout + navigation + one working page

**Prompt:**

```
Set up the Next.js project with the layout from my HTML prototype.
Create the navigation. Make the home page work with real calculations.
Nothing else yet.
```

Test it. Does it load? Can you click around? Do the calculations work?

### Phase 2: Add ONE feature

```
Add the share button. When clicked, it copies a summary of the
results to the clipboard.
```

Test it. Does the share button work? Did it break the calculations? If something broke, fix it now before adding more.

### Phase 3: Add the next feature

```
Add a history section that saves the last 10 calculations
in the browser (localStorage). Show them below the calculator.
```

Test. Repeat.

### Phase 4: Styling and polish

```
Make the design match our brand. Cream background (#EAE6DF),
charcoal text (#2E2A26), crimson accent (#8B1A10) for buttons.
Clean spacing. Professional look.
```

### Phase 5: Edge cases and error handling

```
What happens if someone types a negative number? Or leaves a
field empty? Or types letters instead of numbers? Handle all
of these gracefully -- show helpful error messages, don't crash.
```

### The Screenshot-Feedback Loop

This is your core workflow for the rest of the workshop. It's the fastest way to communicate with Claude, and it's exactly how product managers work with engineering teams.

After each phase, if anything looks wrong:

1. **Screenshot it.** Cmd+Shift+4 on Mac. Select the area that's wrong.
2. **Paste it into Claude.** Cmd+V in the Claude Code terminal. Claude can see images.
3. **Point at the problem.** Be specific: "This button should be on the right, not the left" or "The spacing between these cards is too tight" or "This text is unreadable on mobile."
4. **Claude fixes it.** Usually in seconds.
5. **Refresh and check.** Did it work? If yes, move on. If no, screenshot again.

This loop is fast. You are fixing small, contained problems instead of untangling a giant mess.

**Why screenshots beat descriptions:**

- "The layout is wrong" → Claude guesses what you mean → 50% chance it fixes the right thing
- [screenshot] + "Move this section above the fold" → Claude sees exactly what you see → fixes it correctly

The more specific your visual feedback, the fewer rounds of revision you need. Three screenshots with pointed feedback will get you further than ten paragraphs of description.

### Demo: building a profit margin calculator in phases

Here is the exact prompt sequence you would use:

**Phase 1:**
```
Create a Next.js page for a profit margin calculator. Inputs:
product cost, shipping cost per unit, ad spend per unit,
platform fee percentage. Outputs: gross margin %, net margin %,
break-even ROAS, profit per unit in euros. Update results
instantly when inputs change.
```

**Phase 2:**
```
Add a "Share Results" button that copies a text summary to
clipboard. Format it nicely -- include all inputs and outputs
in a readable format. Show a "Copied!" confirmation.
```

**Phase 3:**
```
Save the last 10 calculations in localStorage. Show them in a
"History" section below the calculator. Each entry shows the
product name (add a name field) and the net margin. Clicking
an entry loads those inputs back into the calculator.
```

**Phase 4:**
```
Apply our brand styling. Cream background (#EAE6DF), charcoal
text (#2E2A26), crimson (#8B1A10) for the primary button.
Bold headings. Clean spacing. Make it look like a premium tool.
```

**Phase 5:**
```
Add input validation. No negative numbers, no empty fields,
platform fee must be between 0 and 100. Show inline error
messages. Also handle the case where the result is a negative
margin -- show it in red with a warning.
```

---

## 5. The Spec File (SPEC.md)

You have a short memory. Claude has a shorter one.

Every time you start a new conversation with Claude, it starts fresh. It does not remember what you decided yesterday. If you told Claude "no authentication for now" last Tuesday, it does not know that on Wednesday.

The fix: **keep a spec file in your project.**

Create a file called `SPEC.md` in your project folder. Write down every decision. Claude reads this file at the start of each session, so it always knows the plan.

This prevents the boat-with-wings problem across sessions. On Monday, you tell Claude "build a calculator." On Tuesday, you say "add charts." On Wednesday, "add PDF export." Without a spec file, by Friday you have a bloated mess. With a spec file, every decision is written down and every session starts from the same page.

**The rule is simple: if it is not in the spec, it does not get built.**

### Template

A ready-to-use SPEC.md template is in this module's `templates/` folder. Copy it into your project, or use the version below:

```markdown
# [Project Name] -- Spec

## What this does
[2-3 sentences explaining the core thing. What problem does it solve?
Who is it for? What is the one-line pitch?]

## The workflow
1. User does X
2. App shows Y
3. User clicks Z
4. Result: [what happens]

## What "done" looks like
- [ ] Feature 1 works
- [ ] Feature 2 works
- [ ] Looks good on mobile
- [ ] Can be shared via link

## What this must NOT do
- No login/auth (unless specified later)
- No payment processing
- No email sending
- [other constraints]

## Future ideas (NOT building yet)
- Feature X
- Feature Y
```

### Why the "must NOT do" section matters

This is the most important part of the spec. Without it, Claude will be helpful -- too helpful. Ask it to build a calculator and it might add user accounts "just in case." Ask for a landing page and it might add a blog section.

The "must NOT do" section is your fence. It keeps the project small, focused, and buildable.

### Keeping it alive

Update the spec as you go. After each session where you make a decision, add it to the file. Finished a feature? Check the box. Changed your mind about something? Update the spec. Added a "future idea" to the current build? Move it from "future" to "workflow."

The spec is not a document you write once. It is a living agreement between you and Claude about what this project is.

---

## 6. When Things Break -- Debugging for Non-Developers

Things will break. This is normal. Even experienced developers spend half their time fixing things that broke. The difference is they know how to read the error messages. After this section, so will you.

### The debugging process

**Step 1:** Screenshot the error. Whatever you see -- red text, a blank white page, a popup, a page that looks wrong -- take a screenshot.

**Step 2:** Paste it to Claude with a simple question:

```
I see this error. What's wrong?
```

**Step 3:** Before Claude fixes anything, ask it to explain:

```
Explain what's wrong before you fix it. I want to understand.
```

This is not busywork. Understanding the error means you will recognize it next time. After a few weeks, you will start fixing common errors yourself.

**Step 4:** If the fix does not work after 2-3 attempts, stop. Do not keep going in the same conversation. Claude can get stuck in loops, trying variations of the same broken approach.

Instead, type `/clear` and start a fresh conversation:

```
I'm building a profit margin calculator. Here's my CLAUDE.md.
I have this error: [paste screenshot]. Fix it.
```

Fresh context almost always works better than a long, tangled conversation.

### Common errors and what to say

**"Module not found" or "Cannot find module"**

Claude referenced a package it forgot to install. This happens. Say:

```
Install all missing packages and try again.
```

**White screen (nothing loads)**

There is a JavaScript error hiding in the background. Here is how to see it:

1. Open your browser (Chrome or Edge)
2. Press `Cmd + Option + J` (Mac) or `Ctrl + Shift + J` (Windows)
3. A panel opens at the bottom. You will see red error text.
4. Screenshot that red text
5. Paste to Claude: "I see this error in the browser console"

**"ECONNREFUSED" or "Connection refused"**

The server is not running. Ask Claude:

```
How do I start the dev server for this project?
```

Usually the answer is `npm run dev` in the terminal, but let Claude tell you the exact command.

**Styling looks wrong (layout broken, colors off, spacing weird)**

Take two screenshots:
1. What it looks like now
2. What you want it to look like (from your HTML prototype, a competitor, or a sketch)

```
Make it look like this instead. [paste both screenshots]
```

### The 3-attempt rule

If Claude cannot fix something in 3 tries, `/clear` and re-explain the problem from scratch.

Why? Claude builds context as a conversation goes on. If the first approach was wrong, every follow-up is building on a wrong foundation. Starting fresh lets Claude approach the problem from a new angle.

This is not a failure. It is a technique. Professional developers do the same thing -- they step away, come back, and look at the problem with fresh eyes.

---

## 7. Quick Wins

Here are three things you can build right now, each in under 30 minutes. These are real, useful tools -- not toy examples.

### Quick win 1: Turn a spreadsheet into a web tool

You have a spreadsheet you use every week. Maybe it calculates shipping costs, or tracks inventory, or compares supplier prices.

```
Build me a web version of this spreadsheet as a single HTML page
with a clean design. Here's what it does:

- I input [describe the inputs]
- It calculates [describe the calculations]
- It shows [describe the outputs]

Use a cream background (#EAE6DF) and dark charcoal text (#2E2A26).
Make it look professional, not like a spreadsheet.
```

### Quick win 2: Clone a competitor's landing page

You see a competitor's landing page and think "I want something like that." Screenshot it.

```
Build something like this but for [your product]. Use these brand
colors: cream background (#EAE6DF), dark text (#2E2A26), crimson
accent (#8B1A10). Replace all the copy with content about
[your product]. Keep the same layout structure.
```

### Quick win 3: Turn a manual process into a guided form

You have a process you do manually -- maybe onboarding a new client, processing a return, or creating a product listing. You follow the same steps every time.

```
Build me an HTML page that walks me through these steps with form
inputs. Here are the steps:

1. [Step 1 -- what info do you enter?]
2. [Step 2 -- what do you check?]
3. [Step 3 -- what do you decide?]
4. [Step 4 -- what do you produce?]

At the end, generate a summary I can copy and paste into [wherever
it goes -- email, Slack, a document].
```

---

## 8. Workshop Exercise: Profit Margin Calculator

Let's build something real, step by step. Follow along. Copy these prompts. See what happens.

### The spec

Write this down (or put it in a `SPEC.md` file):

```
Build me a profit margin calculator for ecommerce.

Inputs: product cost, shipping cost per unit, ad spend per unit,
and platform fee percentage.

Outputs: gross margin, net margin, break-even ROAS, and profit
per unit.

Show results in a clean dashboard with big numbers.
Use a cream background (#EAE6DF) and dark text (#2E2A26).
```

### Phase 1 -- HTML prototype

Open Claude Code. Type this:

```
Build this as a single HTML file. Use placeholder calculations.
I want to see the layout and flow before we make it real.

Profit margin calculator for ecommerce.
Inputs: product cost, shipping cost per unit, ad spend per unit,
platform fee percentage.
Outputs: gross margin %, net margin %, break-even ROAS, profit
per unit.
Clean dashboard with big numbers.
Cream background (#EAE6DF), dark text (#2E2A26).
```

Open the HTML file in your browser. Look at it. Is the layout right? Are the inputs in a logical order? Do the output cards make sense?

If something is off:

```
Move the output cards into a 2x2 grid instead of a single row.
Make the input labels clearer -- use "Cost per Unit (EUR)" instead
of just "Cost". Add a product name field at the top.
```

Iterate until you like it.

### Phase 2 -- Make it work

```
Now make all the calculations real. When I change an input, the
results should update instantly. Here are the formulas:

- Gross margin = (selling price - product cost) / selling price
- Net margin = (selling price - product cost - shipping - ad spend
  - (selling price * platform fee %)) / selling price
- Break-even ROAS = selling price / (selling price - product cost
  - shipping - (selling price * platform fee %))
- Profit per unit = selling price - all costs
```

Test it. Put in real numbers from one of your products. Do the results make sense? Compare with your spreadsheet if you have one.

### Phase 3 -- Polish

```
Add a "Share Results" button that copies a summary to clipboard.
Format it like:

Product: [name]
Selling Price: EUR [x]
Total Costs: EUR [x]
Net Margin: [x]%
Profit per Unit: EUR [x]
Break-even ROAS: [x]

Make the page responsive so it works on mobile.
```

### You just built a tool

That is a real, working business tool. You built it in under an hour. No developer needed.

### The "Ship It" Moment

Here's the thing that makes this real: deploy it. Put it on the internet. Get a URL you can send to someone.

> "Deploy this to Vercel. I want a live URL I can share."

When you text that link to your co-founder or paste it in your team Slack and people actually use it -- that's the moment this stops being "playing with AI" and starts being "building tools for your business."

Every build should end with this question: **can I share this with someone right now?** If yes, you built something real. If no, ask yourself if you're overcomplicating it.

### Alternative exercise: Product Description Generator

If the calculator does not match your work, try this instead:

**Spec:**

```
I paste product specs (material, size, features). I select a brand
voice (luxury, casual, technical). Claude generates 3 description
variants. I can copy any of them.
```

**Phase 1 -- HTML prototype:**
```
Build a single HTML page for a product description generator.
A text area to paste product specs. Three buttons for brand voice:
Luxury, Casual, Technical. A results area showing 3 description
variants with copy buttons. Clean design, cream background.
```

**Phase 2 -- Make it work:**
```
Connect this to the Claude API. When I paste specs and select a
voice, generate 3 real product descriptions. Each variant should
be 2-3 sentences. Show a loading state while generating.
```

**Phase 3 -- Polish:**
```
Add a character count under each description. Add a "Regenerate"
button for each variant. Save the last 5 generations in the
sidebar so I can go back to them.
```

---

## 9. Homework

Take the spec you wrote after Module 1.

1. Open Claude Code
2. Ask Claude to build your spec as a single HTML file
3. Open it in your browser
4. Click through everything
5. Fix what feels wrong -- layout, flow, wording, order of things
6. Iterate until the flow feels right

Do not worry about making it "real" yet. Do not add a database. Do not add login. Just get the flow right.

**Bring the working HTML file to Module 3.** We will turn it into a real app.

If you get stuck, remember:
- Screenshot the problem
- Paste it to Claude
- If Claude cannot fix it in 3 tries, `/clear` and start fresh
- The HTML prototype does not need to be perfect. It needs to feel right.

---

## Session 2 Resources

When you're ready to convert your HTML prototype into a real app:

- **Bridge Prompt:** `templates/bridge-prompt.md` — the prompt that tells Claude to convert HTML → Next.js + Supabase
- **Build Your First App:** `../10-database-auth-deploy/templates/build-first-app-cheatsheet.md` — 15-step guide from prototype to deployed app
- **Track-Specific App Specs:** Each track has a ready-made spec for Session 2:
  - Ecom: `participant-kit/tracks/ecom-founder/session-2-spec.md` — Product Launch Dashboard
  - Agency: `participant-kit/tracks/agency-owner/session-2-spec.md` — Client Onboarding Portal
  - Sales: `participant-kit/tracks/sales-pro/session-2-spec.md` — Lead Scoring Dashboard

---

**Next up: Module 3 -- Landing Pages That Convert.** You will take your prototype and turn it into something you can actually ship.
