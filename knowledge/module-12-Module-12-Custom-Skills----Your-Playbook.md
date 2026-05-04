# Module 12: Custom Skills -- Your Playbook

Teach Claude your workflows once. Never repeat yourself again. By the end of this module, you'll have at least two working skills that save you time on every future build.

---

## 1. What Are Skills?

You've been using CLAUDE.md for a while now. It tells Claude who you are, what you're building, what rules to follow. Think of it as your employee handbook -- the general stuff every contractor needs to know on day one.

But here's the thing: handbooks don't tell people how to do specific jobs. They set the tone, the culture, the boundaries. When you actually need someone to execute a task -- "build a landing page," "write product descriptions," "research a competitor" -- you hand them a standard operating procedure. A step-by-step playbook for that specific job.

**That's what skills are.** SOPs for Claude Code.

A skill is a markdown file with instructions for a specific workflow. When you invoke it, Claude follows the recipe. Same process, same quality, same output format -- every single time.

Without skills, every new session starts with you re-explaining things:

> "Remember, when you build landing pages, I want mobile-first, no navigation menu, one CTA per section, use my brand colors, and structure it as hero, social proof, benefits, testimonial, FAQ, final CTA..."

That's exhausting. And you'll forget something every time. Then Claude builds it differently, and you spend 10 minutes correcting instead of building.

With skills, you type one command. Claude loads the playbook and executes. Done.

### The Cookbook Analogy

If CLAUDE.md is your employee handbook, your skills folder is your cookbook. Each skill is a recipe.

A recipe doesn't teach you what food is. It assumes you know the basics. It just tells you: these ingredients, this order, this technique, this result.

Same with skills. They assume Claude already knows your brand (from CLAUDE.md), your stack, your preferences. The skill just says: here's the specific workflow for this specific job. Go.

---

## 2. When to Build a Skill

### The 3x Rule

If you've explained the same thing to Claude three times, it's a skill.

That's it. That's the rule. Three times means it's a pattern, not a one-off.

### Common Triggers

Listen for these in your own workflow. Every time you catch yourself thinking one of these, you've found a skill:

- "Every time I build a landing page, I have to remind Claude about my conversion layout and which sections to include"
- "When I do competitor research, I always want the same output format -- SWOT, pricing, positioning, actionable recs"
- "For product descriptions, I always want three variants in my brand voice -- short, story-driven, and feature-focused"
- "When building an email, I always follow the same structure and I keep re-explaining it"
- "Every weekly report follows the same template but I describe it from scratch each time"
- "I always want Claude to check brand consistency after building something, but I forget to ask"

### When NOT to Build a Skill

Not everything needs to be a skill. Skip it when:

- You've only done it once or twice (it might not be a real pattern yet)
- The workflow changes every time (skills work best for consistent processes)
- It's a one-liner ("always use dark mode" -- that goes in CLAUDE.md, not a skill)

Rules and preferences go in CLAUDE.md. Workflows and processes go in skills. That's the dividing line.

---

## 3. Anatomy of a SKILL.md

A skill is just a markdown file with a header and instructions. No code. No config files. No special syntax. If you can write a bullet list, you can write a skill.

Here's the template:

```markdown
---
name: skill-name
description: "What this skill does -- one sentence"
argument-hint: "[optional args]"
---

# Skill Name

## When to Use
- Bullet points describing when this skill should activate

## Process
1. Step 1: What to do first
2. Step 2: What to do next
3. Step 3: etc.

## Rules
- Things to always do
- Things to never do

## Output Format
What the final result should look like
```

Let's break each part down.

### The Header (Front Matter)

The three dashes at the top and bottom wrap the metadata. Three fields:

- **name:** A short, lowercase, hyphenated name. This is what you type to invoke the skill. Keep it memorable: `landing-page`, `product-description`, `competitor-research`.
- **description:** One sentence explaining what it does. Claude shows this when listing available skills, so make it clear.
- **argument-hint:** What you can pass along when invoking. For example, `[product name]` or `[competitor URL]`. This is optional -- skip it if the skill doesn't need input.

### When to Use

Bullet points that tell Claude when this skill is relevant. This helps Claude understand the context. Keep it simple:

```markdown
## When to Use
- When building a landing page for a product, service, event, or lead magnet
- When the user says "build me a page" or "I need a landing page"
```

### Process

The numbered steps Claude follows. This is the core of your skill -- the actual recipe. Each step should be one clear instruction. Don't combine multiple actions into one step.

Good:
```markdown
1. Ask the user for the product name and target audience
2. Generate a headline under 10 words
3. Write the hero section with headline, subheadline, and CTA
```

Bad:
```markdown
1. Ask the user for all the details, then generate the headline, write the hero, and add social proof
```

One step, one action. Claude follows them in order.

### Rules

The guardrails. What Claude must always do and must never do. These catch the mistakes before they happen.

```markdown
## Rules
- Mobile-first design (test at 375px width)
- Maximum 2 fonts
- No stock photo placeholders -- use real content or skip images
- Never add a navigation menu on a landing page
- Always include at least 2 CTA buttons
```

Rules are your most powerful section. Every time you test a skill and Claude does something wrong, add a rule. Over time, your skills become bulletproof.

### Output Format

What the final deliverable should look like. Be specific:

```markdown
## Output
Single HTML file that opens in a browser. Clean, professional, conversion-focused.
Include a brief summary of the page structure as a comment at the top of the file.
```

Or for a research skill:

```markdown
## Output Format
Structured markdown report with these sections:
### Company Overview
### Products & Pricing
### Strengths
### Weaknesses
### 3 Actionable Recommendations
```

---

## 4. Where to Put Skills

Skills live in a `skills/` folder. You have two options:

### Project Skills (Start Here)

```
your-project/
  .claude/
    skills/
      landing-page/
        SKILL.md
      product-description/
        SKILL.md
```

Path: `.claude/skills/skill-name/SKILL.md`

These skills are available only inside this project. This is where you should start. Keep things scoped to where they're relevant.

### Global Skills

```
~/.claude/skills/
  landing-page/
    SKILL.md
  competitor-research/
    SKILL.md
```

Path: `~/.claude/skills/skill-name/SKILL.md`

These skills are available in every project, everywhere on your machine. Use this for workflows that aren't project-specific -- things like competitor research, brand checks, or report generation that you'd use across multiple projects.

### Which One Should I Pick?

**Start with project skills.** Always. Put them where you use them.

Move a skill to global only when you find yourself copying it between projects. That's the signal that it belongs everywhere.

---

## 5. Skill Examples -- Ready to Use

These are complete, tested skills you can copy right now. Each one solves a real workflow that ecommerce founders repeat constantly.

### Landing Page Builder

This is the skill you'll reach for most often. Every new product, every campaign, every lead magnet needs a page.

```markdown
---
name: landing-page
description: "Build a conversion-focused landing page from a product description"
argument-hint: "[product/offer description]"
---

# Landing Page Builder

## When to Use
- When building a landing page for a product, service, event, or lead magnet
- When the user says "I need a page" or "build me a landing page"

## Process
1. Ask the user for: product/service name, target audience, main offer, key benefits (3-5), CTA text, brand colors (or pull from CLAUDE.md)
2. Build as a single HTML file, mobile-first
3. Structure the page in this order:
   - Hero section: headline (under 10 words) + subheadline + CTA button
   - Social proof: logos, numbers, or testimonial
   - Benefits: 3-5 cards, each with icon/emoji + benefit title + one-sentence explanation
   - Testimonial: real quote with name and context
   - FAQ: 3-5 common objections, answered
   - Final CTA: repeat the main CTA with urgency
4. Write clear, benefit-driven copy throughout
5. Make the CTA button prominent and repeat it at least twice

## Rules
- Mobile-first design (test at 375px width)
- One CTA per section, all pointing to the same action
- No navigation menu -- it's a landing page, one focus only
- No stock photo placeholders -- use real content or skip images entirely
- Maximum 2 fonts
- Whitespace over clutter -- when in doubt, add more space
- No heavy libraries or frameworks -- keep it fast
- Every section must earn its place -- if it doesn't drive toward the CTA, cut it

## Output
Single HTML file that opens in a browser. Clean, professional, conversion-focused.
The user should be able to open it, review it, and iterate from there.
```

### Competitor Research

Stop doing competitor research from scratch every time. This skill gives you the same thorough analysis with the same structure, so you can compare competitors side by side.

```markdown
---
name: competitor-research
description: "Run a comprehensive competitor analysis and generate a structured report"
argument-hint: "[competitor name or URL]"
---

# Competitor Research

## When to Use
- When analyzing a competitor's positioning, pricing, strengths, and weaknesses
- When preparing for a pitch, strategy session, or product launch

## Process
1. Research the competitor using web search -- get current data
2. Visit their website to extract: product range, pricing tiers, positioning statement, target audience signals
3. Search for customer reviews and sentiment (Trustpilot, Reddit, social media)
4. Analyze their content strategy: what channels, what frequency, what tone
5. Identify their unique selling proposition vs. generic claims
6. Compare with the user's business (if context is available from CLAUDE.md)

## Output Format
Structure the report as:

### Company Overview
One paragraph: what they do, when founded, size/scale if known.

### Products & Pricing
Table format where possible. What they sell, at what price points, what's included.

### Target Audience & Positioning
Who they're talking to. What promise they make. How they differentiate.

### Strengths
What they do well. Specific evidence -- quotes, features, design choices.

### Weaknesses
What customers complain about. Gaps in their offering. Where they fall short.

### Marketing & Content Strategy
Channels they use. Content types. Posting frequency. Tone of voice.

### Opportunities
Gaps we can exploit. Things they're not doing that we could.

### Threats
Things they do better than us. Trends they're riding that we're not.

### 3 Actionable Recommendations
Numbered list. Specific. Things we can do this week.

## Rules
- Use current data only -- search the web, don't rely on training data
- Include specific evidence for every claim (quotes, prices, screenshots, examples)
- Be honest about both strengths and weaknesses -- this is intelligence, not cheerleading
- End with actionable recommendations, not vague observations
- If information is unavailable, say so -- don't fabricate
```

### Brand Consistency Checker

This one's a force multiplier. Run it after any build to catch brand inconsistencies before they go live.

```markdown
---
name: brand-check
description: "Check any output against brand guidelines and fix inconsistencies"
argument-hint: "[file or content to check]"
---

# Brand Consistency Checker

## When to Use
- After building any page, email, or content piece
- Before deploying anything customer-facing
- When something "feels off" but you can't pinpoint why

## Process
1. Read the brand guidelines from CLAUDE.md (colors, fonts, tone, layout rules)
2. Open and review the specified file or content
3. Check each of these:
   - Colors: do they match the brand palette exactly? (check hex codes)
   - Typography: correct fonts, sizes, weights?
   - Tone of voice: does the copy sound like the brand?
   - Layout: does the spacing, alignment, and structure match brand patterns?
   - Imagery: does the visual style match?
4. List every inconsistency found
5. Fix each one
6. Show what changed -- before and after for each fix

## Rules
- Every customer-facing output must match brand guidelines exactly
- If no brand guidelines exist in CLAUDE.md, ask the user to define them first -- don't guess
- Flag anything that might be intentionally different (ask before changing it)
- Check hex codes precisely -- #EAE6DF is not the same as #F5F5F5
- This skill is about consistency, not creativity -- match the guidelines, don't improve them
```

### Product Description Generator

Three variants every time, SEO-ready, in your brand voice. No more writing product descriptions from scratch.

```markdown
---
name: product-description
description: "Generate product descriptions in brand voice from specs"
argument-hint: "[product name and specs]"
---

# Product Description Generator

## When to Use
- When writing product descriptions for an ecommerce store
- When launching a new product and need copy fast
- When updating existing descriptions to match brand voice

## Process
1. Collect from the user: product name, key specs (material, size, features), target customer, price point
2. Read the brand voice guidelines from CLAUDE.md
3. Generate 3 description variants:
   - **Short & punchy** (2 sentences max -- for category pages and quick browsing)
   - **Story-driven** (problem the customer has → how this product solves it → the benefit they feel -- for product pages)
   - **Feature-focused** (each spec + why it matters to the customer -- for detail-oriented buyers)
4. Generate SEO metadata:
   - SEO title (under 60 characters)
   - Meta description (under 160 characters)
5. Generate 3 bullet points highlighting key features as benefits

## Rules
- Always use the brand voice from CLAUDE.md -- if it says "bold and direct," don't write "flowery and poetic"
- Never fabricate specs, materials, or claims -- if you don't know, ask
- Include sensory language for physical products (how it feels, looks, weighs)
- Lead with benefits, not features -- "keeps your coffee hot for 12 hours" beats "double-wall insulation"
- Each variant must be genuinely different in approach, not just reworded versions of the same copy
- Short variant must work as a standalone -- no "see below for details"
```

---

## 6. Building Your First Skill -- Step by Step

Enough reading examples. Time to build your own. Here's the process.

### Step 1: Identify the Workflow

Think about the last two weeks of working with Claude Code. What did you explain more than once? What instructions did you repeat? What output format did you keep correcting?

Write it down as a simple numbered list. Don't worry about formatting yet. Just capture the steps:

```
1. I tell Claude what product I'm describing
2. I give it the specs and features
3. I remind it about my brand voice
4. I ask for a short version and a long version
5. I ask for SEO tags
6. I usually have to tell it to focus on benefits, not features
7. I always want bullet points too
```

That's your workflow. You just wrote 80% of a skill without knowing it.

### Step 2: Write the Steps as a Process

Turn your list into clear, numbered instructions. Each step = one action:

```markdown
## Process
1. Collect product name, specs, and target customer from the user
2. Read brand voice from CLAUDE.md
3. Write a short description (2 sentences, benefit-focused)
4. Write a long description (story format: problem → solution → benefit)
5. Generate SEO title (under 60 chars) and meta description (under 160 chars)
6. Generate 3 feature bullet points, each leading with the benefit
```

### Step 3: Add the Rules

Think about every time Claude got it wrong. Every correction you made. Every "no, not like that" moment. Those are your rules:

```markdown
## Rules
- Use the brand voice from CLAUDE.md, not generic marketing speak
- Benefits first, features second
- Never make up specs or claims
- Short description must stand alone -- no "learn more below"
- Each variant must feel genuinely different
```

### Step 4: Define the Output

What does "done" look like? Be specific:

```markdown
## Output
Deliver all variants in a single markdown file with clear headings.
Include the SEO metadata at the bottom.
Ready to copy-paste into Shopify or any CMS.
```

### Step 5: Create the File

Create the folder and file:

```
.claude/skills/product-description/SKILL.md
```

Paste in the header, your process, your rules, and your output format. You can ask Claude to help:

> "I have these steps for a product description workflow. Turn them into a SKILL.md file using the standard skill template."

### Step 6: Test It

Open Claude Code and invoke the skill. Give it a real product. Watch what happens.

Does it follow the steps in order? Does it respect the rules? Does the output match what you defined?

### Step 7: Iterate

This is the most important step. Your first version will be 70% right. That's fine.

When Claude does something wrong, add a rule. When it misses a step, add it. When the output format isn't quite right, clarify it.

After 3-4 rounds of testing and tweaking, your skill will be dialed in. This is the same progressive disclosure approach you learned with CLAUDE.md -- start simple, refine through use.

---

## 7. Advanced Skill Techniques

Once you have a few basic skills working, these techniques make them more powerful.

### Referencing Other Files

Your skill doesn't need to contain everything. Point to reference files for detailed information:

```markdown
## References
- For brand guidelines, read `CLAUDE.md` in the project root
- For copywriting formulas, see `.claude/references/copywriting-formulas.md`
- For past examples of approved copy, see `content/approved-examples/`
```

This keeps your skill file focused on the workflow while giving Claude access to detailed context when it needs it.

### Conditional Behavior

Sometimes the right approach depends on the situation. Build decision trees into your skill:

```markdown
## Stack Decision
- If the user wants a quick prototype → build as a single HTML file
- If the user wants something deployable → build as Next.js
- If the user wants email copy → output as plain text with HTML version
- If unsure → ask the user before proceeding
```

This prevents Claude from making assumptions. Instead of guessing, it follows the decision tree or asks.

### Chaining Skills Together

One skill can suggest running another when it's done. This creates natural workflows:

```markdown
## After Completion
- Suggest running /brand-check to verify brand consistency
- If the user built a page, suggest running a mobile responsiveness check
- If content was generated, suggest running /product-description for variant copy
```

Claude won't automatically run the next skill -- it suggests it. The user stays in control.

### Including Examples

If you want Claude to match a specific style, include an example in the skill:

```markdown
## Example Output

Here's what a good short description looks like for our brand:

"Your morning ritual, redefined. Bold, smooth, zero compromise -- brewed for people who care about what they put in their body."

Match this tone, structure, and energy level.
```

Examples are worth a thousand rules. When Claude can see what "right" looks like, it gets there faster.

### Dynamic Input Collection

Instead of demanding all inputs upfront, let the skill adapt:

```markdown
## Input Collection
1. Start with whatever the user provides
2. If they gave a product name only → ask for specs and target audience
3. If they gave a full brief → skip straight to writing
4. If brand voice isn't in CLAUDE.md → ask the user to describe their brand in 2-3 adjectives
```

This makes the skill feel natural instead of like a form to fill out.

---

## 8. Sub-Agents as Your Advisory Board

Skills encode workflows. But there's another kind of reusable knowledge: **perspectives.**

Think about the people you consult before making a big decision. Your CFO sees risk and ROI. Your creative director sees brand impact. Your customer support lead knows what customers actually complain about. Each person looks at the same thing and sees something different.

You can build these perspectives as custom sub-agents. They're markdown files, just like skills, but instead of encoding a workflow, they encode a point of view.

### How It Works

Create agent files in `.claude/agents/`:

```markdown
# .claude/agents/brand-strategist.md

You are a senior brand strategist with 15 years at top agencies.
You evaluate everything through brand coherence and differentiation.
Your feedback: Is this on-brand? Is the positioning clear? Would a 
customer recognize this blindfolded?
```

```markdown
# .claude/agents/customer-voice.md

You are the voice of the customer. You've read every review, every DM,
every support ticket. You evaluate everything through what customers
actually experience. Quote real feedback when possible.
```

```markdown
# .claude/agents/data-analyst.md

You are a data analyst. You think in spreadsheets and cohorts.
Your feedback: What does the data say? Is the sample size big enough?
What's the ROI? What metric are we actually moving?
```

### Using Your Advisory Board

When you have a deliverable you want reviewed -- a landing page, a product launch plan, a new positioning statement -- you can ask Claude to run it past your advisors:

> "Have the brand strategist and customer voice agents review this landing page. What would each of them flag?"

Claude will review your work from each perspective. The brand strategist might say your tone is inconsistent. The customer voice might say you're not addressing the #1 complaint from reviews. The data analyst might ask what conversion rate you're targeting.

### Why This Is Powerful

- **Diverse perspectives without a team.** Solo founders get feedback from three angles in seconds.
- **Consistent standards.** Your brand strategist always checks the same things. No mood swings.
- **Catches blind spots.** You naturally gravitate toward one perspective. The agents cover the ones you miss.
- **Teaches the team.** When new people join, the agents model the kind of thinking you value.

For agency owners, the "Client Stakeholder" agent is especially useful -- it simulates the kind of pushback your client will give, so you can anticipate objections before presenting.

---

## 9. Sharing Skills With Your Team

Skills are just markdown files. That's the whole point. Sharing them is as simple as sharing any document.

### Why This Matters

Without shared skills, everyone on your team works differently. One person's landing pages look different from another's. Competitor research comes back in a different format every time. Product descriptions vary wildly in tone.

With shared skills, you get consistency:

- Same process for the same task
- Same quality standards
- Same output format
- Same rules and guardrails

It's like giving every team member the same playbook. New hires get up to speed faster. Freelancers match your standards. Nobody has to guess "how we do things here."

### How to Share

**Git (recommended):** Commit your `.claude/skills/` folder to your repo. Everyone who clones the project gets the skills automatically. When someone improves a skill, they push the update and everyone benefits.

**Dropbox / Google Drive / Email:** Copy the SKILL.md files. Low-tech, works fine for small teams. The downside is version control -- you'll need to manually keep everyone updated.

**Skills Library:** Create a shared folder with all your team's skills. Organize by category:

```
team-skills/
  content/
    product-description/SKILL.md
    blog-post/SKILL.md
    email-campaign/SKILL.md
  research/
    competitor-research/SKILL.md
    market-analysis/SKILL.md
  build/
    landing-page/SKILL.md
    brand-check/SKILL.md
```

When someone joins the team, point them to the library. When someone finds a better way to do something, update the skill. Everyone benefits.

### The Compound Effect

Here's the thing about skills that makes them genuinely powerful over time: they get better.

Every time someone uses a skill and finds an edge case, they add a rule. Every time the output isn't quite right, the skill gets refined. After a month, your skills have absorbed dozens of corrections and improvements.

You're not just saving time. You're building institutional knowledge into reusable documents. That's something most companies never manage to do.

---

## 9. Quick Wins

Do these now. Each one takes less than 10 minutes. By the end, you'll have real, working skills.

### Quick Win 1: Landing Page Skill

Copy the Landing Page Builder skill from Section 5 into your project:

1. Create the folder: `.claude/skills/landing-page/`
2. Create the file: `SKILL.md`
3. Paste the skill from Section 5
4. Adjust the brand colors and any rules to match your brand
5. Test it: open Claude Code and invoke the skill with a real product

### Quick Win 2: Product Description Skill

Copy the Product Description Generator skill from Section 5:

1. Create: `.claude/skills/product-description/SKILL.md`
2. Paste and customize -- update the brand voice references to match your CLAUDE.md
3. Test with a real product from your store
4. Check: did it generate all three variants? Are they genuinely different? Does the tone match your brand?

### Quick Win 3: Find Your Hidden Skills

Ask Claude Code to help you find your patterns:

> "Look at our conversation history and CLAUDE.md. What are the 3 workflows I repeat most often? For each one, draft a SKILL.md using the standard template."

Claude will analyze your patterns and draft skills for you. Review them, tweak them, save them.

### Quick Win 4: Weekly Report Skill

If you send a weekly report -- to your team, investors, or yourself -- that's a skill:

> "Help me create a skill that generates my weekly business report. It should include: revenue summary, key wins, blockers, next week's priorities. Output as a clean markdown document."

---

## 10. Workshop Exercise

Time to build. This is the hands-on portion. By the end, you'll have at least two working skills.

### Part 1: Identify Your Top Workflow (5 minutes)

Think about the task you do most often with Claude Code. The one where you keep re-explaining the same things. Write it down:

- **What's the task?** (e.g., "build a landing page," "write product descriptions," "analyze a competitor")
- **What steps do you always follow?** (numbered list, 4-8 steps)
- **What does Claude always get wrong?** (these become your rules)
- **What should the output look like?** (format, structure, length)

### Part 2: Write Your First SKILL.md (10 minutes)

Using the template from Section 3 and the notes from Part 1, write your skill.

Don't overthink it. Your first version doesn't need to be perfect. It needs to be testable.

```markdown
---
name: your-skill-name
description: "One sentence"
argument-hint: "[what input it needs]"
---

# Your Skill Name

## When to Use
- When...

## Process
1. First...
2. Then...
3. Then...

## Rules
- Always...
- Never...

## Output
What done looks like.
```

### Part 3: Test It (5 minutes)

Save the file to `.claude/skills/your-skill-name/SKILL.md`.

Open Claude Code. Invoke the skill with a real use case -- not a test, a real one. Something you'd actually need.

Watch what happens. Take notes on what worked and what didn't.

### Part 4: Fix It (5 minutes)

Based on your test:

- Did Claude miss a step? Add it to the Process.
- Did Claude do something wrong? Add a rule.
- Was the output format off? Clarify the Output section.
- Did it ask for information it shouldn't need? Adjust the Input Collection.

Save and test again. You should see immediate improvement.

### Part 5: Build Your Second Skill (10 minutes)

Repeat Parts 1-4 with a different workflow. Pick something that complements your first skill.

Good combinations:
- Landing page + brand check (build it, then verify it)
- Product description + competitor research (know the market, then write the copy)
- Email campaign + brand check (write it, then verify consistency)

### Part 6: Share (5 minutes)

Show your skills to the group. Two things to share:

1. What workflow you turned into a skill
2. What rule you added after the first test that made the biggest difference

The best skills from the group go into our shared skills library. Everyone benefits.

---

## Recap

What you learned today:

1. **Skills are SOPs for Claude Code.** Reusable instruction sets that make Claude follow the same workflow every time. No code required -- just markdown.
2. **The 3x rule.** If you've explained it three times, it's a skill. Rules and preferences go in CLAUDE.md. Workflows and processes go in skills.
3. **A skill has four parts.** Process (the steps), Rules (the guardrails), Output (what done looks like), and a header (the metadata).
4. **Start with project skills.** Put them in `.claude/skills/skill-name/SKILL.md`. Go global only when you're copying them between projects.
5. **Skills improve over time.** Every test reveals an edge case. Every edge case becomes a rule. After a few rounds, your skills are dialed in.
6. **Share them.** A team with shared skills gets consistent results. One person's improvement benefits everyone.

You don't need to build every skill today. You need to build the habit of recognizing when a workflow should become a skill. Once you see the pattern, you'll never go back to re-explaining things from scratch.

---

## Ready-to-Use Skills & Libraries

### Included in This Module

Four production-ready skills are in this module's `templates/` folder. Copy them straight into your `.claude/skills/` directory:

- **landing-page/** -- conversion-focused page builder
- **competitor-research/** -- structured competitive analysis
- **brand-check/** -- brand consistency checker
- **product-description/** -- 3-variant product description generator with SEO

### External Skill Libraries

Other people have already built hundreds of skills you can browse, adapt, and install:

**For ecommerce founders:**
- [Storefront Skills](https://www.storefrontskills.com/) -- 14 ecommerce-specific skills (margin analysis, product launch, brand guide builder)
- [ai-marketing-claude](https://github.com/zubair-trabzada/ai-marketing-claude) -- 15 marketing skills with PDF output (website audits, copywriting, email, ads, competitive intel)
- [marketingskills](https://github.com/coreyhaines31/marketingskills) -- CRO, SEO, analytics, growth

**For agency owners:**
- [ai-marketing-skills](https://github.com/superamped/ai-marketing-skills) -- SEO, copywriting, competitor research, ad campaigns
- [ai-marketing-claude](https://github.com/zubair-trabzada/ai-marketing-claude) -- client-ready PDF reports, parallel subagent research

**For sales pros:**
- [Claude-Command-Suite](https://github.com/qdhenry/Claude-Command-Suite) -- 216+ slash commands including sales and outreach workflows
- [claude-skills (alirezarezvani)](https://github.com/alirezarezvani/claude-skills) -- 233 skills across 9 domains, including 34 C-level skills

**For discovery:**
- [anthropics/skills](https://github.com/anthropics/skills) -- the official reference implementation from Anthropic
- [awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) -- curated list with quality filtering
- [SkillsMP.com](https://skillsmp.com/) -- browsable marketplace with search

Don't install 50 skills at once. Browse the libraries, find one that matches a workflow you actually do, install it, test it, adjust it. One good skill beats twenty untested ones.

See you in the next module.
