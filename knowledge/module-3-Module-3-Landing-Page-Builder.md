# Module 3: Landing Page Builder

Build any landing page in 15 minutes. No code knowledge required. Just describe what you want, and Claude Code builds it.

---

## 1. Why Landing Pages Are the Perfect First Build

You need landing pages constantly. Product launches. Lead magnets. Waitlists. Event registrations. Workshop signups. Black Friday offers. Every new idea needs a page.

And here's the thing: landing pages are the ideal first project with Claude Code because they check every box.

**They're self-contained.** One page. One goal. One call to action. No databases, no login systems, no complex architecture. Just HTML, CSS, and maybe a form. That's it.

**You see results immediately.** You type a prompt, Claude builds the page, you open it in your browser. Done. No waiting for builds, no deployment pipelines. You see exactly what your customers will see, in seconds.

**You already know what good looks like.** You've seen hundreds of landing pages. You've bought from landing pages. You know when a hero section hits and when it doesn't. You know when copy feels off. That intuition is your superpower here — you're the creative director, Claude is the builder.

**They have real business value on day one.** This isn't a toy project. The page you build today can go live tonight and start collecting leads tomorrow morning.

---

## 2. The Anatomy of a High-Converting Landing Page

Every great landing page follows the same structure. Each section answers one question the visitor has, in the order they ask it.

### Hero Section
**Question it answers:** "What is this and why should I care?"

- Headline (10 words or fewer — the promise)
- Subheadline (one sentence — who it's for and what they get)
- CTA button (the one action you want them to take)
- Hero image or visual (product shot, lifestyle image, or illustration)

This is the most important section. If the hero doesn't hook them, nothing below matters.

### Social Proof
**Question it answers:** "Can I trust this?"

- Customer logos ("Trusted by...")
- Testimonials with names and photos
- Numbers ("10,000+ customers", "4.9 star rating", "$2M saved")

Put this right after the hero. Once they're interested, they need to know it's legit.

### Features / Benefits
**Question it answers:** "What exactly do I get?"

Three to five benefit cards. Each one follows this pattern:
- What it is (feature)
- Why it matters (benefit)
- Keep it short — two lines max per card

Don't list features. Sell outcomes. Not "AI-powered analytics" but "Know exactly which products to restock before they sell out."

### Objection Handling
**Question it answers:** "What if it doesn't work for me?"

- FAQ section (5-7 questions, address the real objections)
- Guarantees ("30-day money back, no questions asked")
- Risk reversal ("Cancel anytime", "No credit card required")

This section does the heavy lifting for anyone who's interested but hesitant.

### Final CTA
**Question it answers:** "OK, what do I do now?"

- Repeat the offer
- Add urgency if you have it ("Limited spots", "Price goes up Monday")
- Big, obvious button
- One last line of reassurance below the button

Never end a landing page with an FAQ. Always end with a clear call to action.

---

## 3. The Landing Page Spec

Before you open Claude Code, spend 5 minutes filling out this spec. This is your brief. The better your spec, the better your first result.

Copy this template and fill in the blanks:

```
Build me a landing page for [product/service].

Target audience: [who is this for — be specific]
Main offer: [what they get when they click the CTA]
Headline: [your best attempt — Claude can improve it]
Subheadline: [one sentence expanding on the headline]
Key benefits:
- [benefit 1]
- [benefit 2]
- [benefit 3]
Social proof: [testimonials, logos, numbers — whatever you have]
CTA button text: [what the button says]
CTA destination: [where the button goes — URL, email, form]
Brand: [colors, fonts, vibe — or "like [competitor] but [difference]"]

Do NOT include:
- Navigation menu (it's a landing page, one focus)
- Multiple CTAs competing with each other
- Stock photography placeholders
- Cookie banners or footer links
```

### Why the "Do NOT include" section matters

Navigation menus are the number one conversion killer on landing pages. Every link is an exit. Claude will add a navbar by default because that's what "normal" websites have. You need to explicitly tell it not to.

Same with competing CTAs. If there are two buttons — "Buy Now" and "Learn More" — the visitor has to make a decision. Decisions create friction. Friction kills conversions. One page, one button, one action.

---

## 4. Building the Landing Page

Here's the step-by-step process. Four steps, 15 minutes total.

### Step 1 — The Skeleton (2 minutes)

This gets the structure right. Don't worry about perfect copy or visuals yet. Just get the bones in place.

**Prompt:**

```
Build a landing page for [your product/service].

Target audience: [who].
Headline: "[your headline]"
Subheadline: "[your subheadline]"
CTA button: "[button text]"

Sections in order:
1. Full-screen hero with headline, subheadline, and CTA button
2. Social proof bar with 4 company logos (use placeholder text for now)
3. 3 benefit cards with icons
4. Testimonial section with 3 quotes
5. FAQ with 5 questions
6. Final CTA section repeating the main offer

Single HTML file with inline CSS. Mobile responsive.
No navigation menu. No footer links. No competing CTAs.

Colors: background #EAE6DF, text #2E2A26, accent #8B1A10.
Font: clean sans-serif for body, bold condensed uppercase for headings.
Style: editorial, generous whitespace, premium feel.
```

Open the file in your browser. You'll have a full landing page in under a minute. It won't be perfect, but the structure will be there.

### Step 2 — Content Polish (5 minutes)

Now make it say the right things. This is where your product knowledge matters.

**Upgrade the headline:**

```
Rewrite the headline using PAS framework (Problem, Agitation, Solution). Keep it under 10 words. The target customer is [describe them] and their biggest pain point is [what keeps them up at night].
```

**Add real testimonials:**

```
Replace the placeholder testimonials with these real ones:

1. "[Quote]" — [Name], [Title] at [Company]
2. "[Quote]" — [Name], [Title] at [Company]
3. "[Quote]" — [Name], [Title] at [Company]

Add a small circular photo placeholder next to each name.
```

Don't have testimonials yet? Ask Claude to write realistic ones:

```
Write 3 realistic testimonials for [product]. The customers are [describe your typical customer]. Focus on specific results they'd get, not generic praise. Include realistic names and job titles.
```

**Add social proof numbers:**

```
Add a stats bar between the hero and benefits sections. Three stats:
- "[number]+ customers"
- "[number] [units] saved"  
- "[rating] average rating"
Large numbers, small labels beneath. Center aligned.
```

**Fix the FAQ:**

```
Rewrite the FAQ section. Here are the real questions customers ask:

1. [question]
2. [question]
3. [question]
4. [question]
5. [question]

Write clear, confident answers. Keep each answer to 2-3 sentences max. Address the concern directly — don't be vague.
```

### Step 3 — Visual Refinement (5 minutes)

The content is right. Now make it look right.

**Spacing and layout:**

```
Make these visual adjustments:
- Hero section should be full viewport height (100vh)
- Add more vertical padding between sections (at least 80px)
- Make the CTA button larger (bigger padding, bigger font)
- Add a subtle hover effect on the CTA button (slightly darker shade, smooth transition)
- Increase line height on body text to 1.7
```

**Typography improvements:**

```
Improve the typography:
- Headline: larger, bolder, more impactful
- Subheadline: lighter weight, slightly muted color
- Benefit card titles: bold, slightly larger
- Testimonial quotes: italic, larger font size
- Overall: more contrast between headings and body text
```

**Add visual touches:**

```
Add these visual details:
- Subtle background color variation between sections (alternate between #EAE6DF and #F5F2ED)
- Thin top border on each section divider
- Smooth scroll behavior when clicking anchor links
- Fade-in animation on sections as you scroll down
```

### Step 4 — Conversion Optimization (3 minutes)

The page looks good. Now make it convert.

**Add urgency:**

```
Add urgency elements:
- Above the CTA button, add a line: "Limited spots available — [X] remaining"
- Style it with the accent color, slightly smaller font
```

**Add a sticky CTA:**

```
Add a sticky CTA bar that appears at the top of the page when the user scrolls past the hero section. Include the headline and CTA button. Subtle shadow underneath. Should hide when user scrolls back to the top.
```

**Add an email capture form:**

```
Replace the CTA button with an inline email capture form. Input field for email on the left, submit button on the right, on the same line. Placeholder text: "Enter your email". Button text: "[your CTA text]". On mobile, stack them vertically.
```

**Add exit-intent popup (advanced):**

```
Add an exit-intent popup that shows when the user moves their mouse toward the browser's close button. Overlay with a centered card. Headline: "Wait — don't miss this." Brief copy about the offer. Email capture form. Close button in top right. Only show once per session.
```

---

## 5. A/B Variant Generator

This is one of the most powerful things you can do with Claude Code that would take hours with traditional tools.

**Prompt:**

```
Create 3 variants of this landing page and save each as a separate HTML file:

Variant A (variant-a.html): The current version as-is.

Variant B (variant-b.html): Video-first hero. Replace the text hero with a large video embed area (use a placeholder), shorter headline above it, CTA below the video.

Variant C (variant-c.html): Long-form story approach. Replace the hero with a longer narrative section — start with the customer's problem, build tension, introduce the solution. More text, fewer visual blocks. Single column, editorial style.

Keep all three files using the same brand styling.
```

Now open all three in your browser. Compare them side by side. Show them to your team. Ask your customers which one resonates.

This is A/B testing without Optimizely, without VWO, without any tools. Just three HTML files and your judgment.

**Go further:**

```
Create 5 different headline variants for this landing page. Show them as a simple comparison page — all 5 headlines displayed with the same hero layout so I can compare them visually. Save as headline-test.html.
```

You can test headlines, hero layouts, color schemes, copy length, testimonial placement — anything. Each test takes 30 seconds to generate.

---

## 6. Landing Page Types for Founders

Different goals need different pages. Here are five templates you'll use constantly, with ready-to-use prompts for each.

### Product Launch Page

For: new product drops, feature announcements, seasonal launches.

```
Build a product launch landing page.

Product: [name and one-sentence description]
Launch date: [date]
Price: [price or "starting at $X"]

Sections:
1. Hero with product name, one-line description, and "Pre-order Now" button
2. Countdown timer showing days/hours/minutes until launch (set to [date])
3. Product preview section — 3 large product images side by side (use placeholder boxes with labels)
4. 3 key features with icons
5. "Early access" benefits — what pre-order customers get that others don't
6. Testimonials or early reviews
7. Final CTA with countdown timer repeated

Single HTML file. Mobile responsive.
Colors: background #EAE6DF, text #2E2A26, accent #8B1A10.
No navbar. No footer. No distractions.
```

### Lead Magnet / Freebie Page

For: ebook downloads, free guides, templates, checklists.

```
Build a lead magnet landing page.

Free resource: [name of your free thing]
Format: [PDF guide / template / checklist / video series]
Target audience: [who wants this]

Sections:
1. Hero focused on the free resource. Headline: "[what they'll learn/get]". Subheadline: "Free [format] — download instantly." Email capture form (email input + "Get Free Access" button).
2. "What's inside" section — 5-6 bullet points showing what the resource covers
3. Preview section — mockup of the resource (use a styled placeholder showing a document/book cover)
4. About the author — short bio, credibility markers
5. Final email capture form repeated

Keep it short. This page should be scannable in 10 seconds.
Single HTML file. Mobile responsive.
Colors: background #EAE6DF, text #2E2A26, accent #8B1A10.
```

### Waitlist Page

For: pre-launch products, testing demand, building an audience before you build.

```
Build a minimal waitlist page.

Product: [name]
One-liner: [what it does, in one sentence]

This page should be ultra-minimal. Just:
1. Product name (large, bold)
2. One line of copy explaining what it is
3. Email input field + "Join the Waitlist" button
4. Below the form: "Join [X]+ others on the waitlist" with a subtle counter
5. Small "We'll notify you when we launch. No spam." disclaimer below

Centered on the page. Lots of whitespace. Premium, understated feel.
Full viewport height — everything visible without scrolling.
Single HTML file. Mobile responsive.
Colors: background #EAE6DF, text #2E2A26, accent #8B1A10.
```

### Event / Workshop Page

For: webinars, live workshops, masterclasses, meetups.

```
Build an event registration landing page.

Event: [name]
Type: [workshop / webinar / masterclass / meetup]
Date: [date and time with timezone]
Duration: [how long]
Host: [name and one-line bio]

Sections:
1. Hero with event name, date/time badge, and "Register Now — It's Free" button
2. "What you'll learn" — 4-5 bullet points
3. "Who this is for" — 3 audience descriptions
4. Speaker/host bio with photo placeholder and credibility markers
5. Event details card — date, time, duration, format (live/recorded), replay available?
6. "Seats remaining: [X]" urgency bar
7. Final CTA: registration form (name + email + "Save My Spot" button)

Single HTML file. Mobile responsive.
Colors: background #EAE6DF, text #2E2A26, accent #8B1A10.
```

### Coming Soon / Teaser Page

For: brand launches, mysterious product drops, building anticipation.

```
Build a coming soon teaser page.

Brand/product: [name]
Vibe: [mysterious / premium / playful / bold]
Launch date: [date or "Coming Soon"]

This should be ultra-minimal and intriguing:
1. Brand name or logo (large, centered)
2. One cryptic or intriguing line of copy — hint at what's coming without revealing it
3. Countdown timer to launch date
4. Email capture: "Be the first to know." + email input + submit button
5. Nothing else. No features. No details. Mystery is the strategy.

Dark background variation: background #2E2A26, text #EAE6DF, accent #8B1A10.
Full viewport height. Centered. Dramatic whitespace.
Single HTML file. Mobile responsive.
```

---

## 7. Deploying Your Landing Page

You've built the page. Now put it on the internet.

### Option 1: Just Open It Locally (Right Now)

Don't overthink deployment. Double-click the HTML file. It opens in your browser. You can share your screen with it. You can screenshot it for feedback. You can test it on your phone by sending yourself the file.

For many use cases — internal reviews, quick tests, pitch decks — this is enough.

### Option 2: Netlify Drop (60 Seconds, Free)

The fastest way to get a public URL.

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your HTML file onto the page
3. Done. You have a live URL like `random-name-123.netlify.app`
4. Share that link with anyone

No account needed for the first deploy. Create a free account to keep it and add a custom domain.

### Option 3: Vercel (Free, Professional)

Better for pages you want to keep and update.

1. Create a free account at [vercel.com](https://vercel.com)
2. Install the Vercel CLI: ask Claude to help you with this
3. From your project folder, run `vercel` and follow the prompts
4. You get a URL like `your-project.vercel.app`
5. Every time you update the file and run `vercel` again, it redeploys

### Adding a Custom Domain

Once your page is deployed on Netlify or Vercel:

```
I've deployed my landing page to [Netlify/Vercel]. My domain is [yourdomain.com] and it's registered at [registrar — e.g., Namecheap, GoDaddy, Cloudflare]. Walk me through connecting my domain to this deployment, step by step.
```

Claude will give you the exact DNS records to add. Takes 5 minutes plus DNS propagation time.

### Adding Analytics

You want to know if anyone actually visits your page. Ask Claude:

```
Add a simple analytics tracking snippet to this landing page. Use [Google Analytics / Plausible / Fathom]. My tracking ID is [your ID]. Add it to the HTML file.
```

If you don't have an analytics account yet:

```
I want to add analytics to my landing page. I don't have an account yet. What's the simplest, free option? Walk me through setup.
```

Plausible and Fathom are privacy-friendly and simple. Google Analytics is free and powerful. For a landing page, any of them work. It's one line of code.

---

## 8. Quick Wins

Copy-paste these prompts. Each one gives you a useful result in under 5 minutes.

### Quick Win 1: Waitlist Page for a New Idea

```
Build me a waitlist page.

Product name: [your idea name]
One-liner: [what it does]
Headline: "[something compelling]"

Collect email addresses. Below the form, show "Join [X]+ others" as social proof.

Cream background (#EAE6DF), dark text (#2E2A26), one accent color (#8B1A10).
Minimal. Centered. Full viewport height. Single HTML file. Mobile responsive.
```

Time: 2 minutes. You now have a page to test if anyone cares about your idea before you build it.

### Quick Win 2: Rebuild a Competitor's Page

Take a screenshot of a competitor's landing page. Then:

```
Here's a screenshot of a competitor's landing page. [attach screenshot or describe it]

Build something similar in structure and layout, but:
- For my product: [your product]
- With my copy: headline "[your headline]", subheadline "[your subheadline]"
- With my brand: background #EAE6DF, text #2E2A26, accent #8B1A10
- Improve what they got wrong: [what you'd change]

Single HTML file. Mobile responsive.
```

Time: 5 minutes. You've reverse-engineered their layout and made it yours.

### Quick Win 3: Hero Section Comparison

```
Build me a comparison page showing 3 different hero sections for my product:

Product: [name and description]
Target audience: [who]

Hero A: Classic — large headline, subheadline, CTA button, image on the right
Hero B: Centered — everything centered, headline stacked over subheadline over button
Hero C: Split screen — left side text, right side full-bleed image

Same copy for all three. Same colors (#EAE6DF background, #2E2A26 text, #8B1A10 accent).
Show them stacked on one page so I can scroll through and compare.
Single HTML file.
```

Time: 3 minutes. You just ran your first design test.

### Quick Win 4: Add Embeds

Already have a landing page? Add functionality with one prompt:

**Calendly booking:**
```
Add a Calendly embed to this landing page. My Calendly link is [your-link.calendly.com/meeting-type]. Place it in a new section after the benefits, with the heading "Book a Free Call". Full-width embed.
```

**Stripe payment button:**
```
Add a Stripe payment button to this landing page. Use a Stripe payment link: [your Stripe payment link URL]. Style the button to match the page's CTA style. Place it in the hero section.
```

**Typeform survey:**
```
Add a Typeform embed to this landing page. My Typeform URL is [your-typeform-url]. Place it as a full-width section replacing the email capture form. Set the height to 500px.
```

Each embed takes 30 seconds to add.

---

## 9. Workshop Exercise: Build Your Product's Landing Page

Time to build for real. You'll leave this workshop with a landing page for your actual product or service.

### The Exercise

Pick a product, service, or idea you're working on right now. Not a hypothetical — the real thing.

### Step 1: Write Your Spec (5 minutes)

Fill in the template from Section 3. Don't overthink it. Your first draft doesn't need to be perfect — that's what iteration is for.

```
Build me a landing page for [your real product/service].

Target audience: [be specific — job title, company size, pain point]
Main offer: [what they get when they click the CTA]
Headline: [your best attempt]
Subheadline: [one sentence]
Key benefits:
- [benefit 1 — outcome, not feature]
- [benefit 2]
- [benefit 3]
Social proof: [what you have — even if it's just "50 beta users"]
CTA button text: [what the button says]
CTA destination: [URL, form, email — whatever makes sense]
Brand: [your colors, or use #EAE6DF / #2E2A26 / #8B1A10]

Do NOT include:
- Navigation menu
- Multiple competing CTAs
- Stock photography placeholders
- Cookie banners or footer links
```

### Step 2: Build (5 minutes)

Paste your spec into Claude Code. Open the result. Review it.

### Step 3: Iterate (10-15 minutes)

This is where it gets good. Look at the page and ask yourself:

- Does the headline stop me from scrolling?
- Would I know what this product does within 5 seconds?
- Is the CTA clear and compelling?
- Would I trust this page enough to give my email?

Then fix what's wrong. Use the prompts from Section 4.

### Tier System

**Tier 1 — The Foundation (everyone should hit this):**
- Working landing page with hero, benefits, and CTA
- Headline that clearly communicates the offer
- Opens and looks good in your browser

**Tier 2 — The Polished Version:**
- Add testimonials (real or realistic)
- Add FAQ section addressing real objections
- Add social proof bar (logos, numbers, ratings)
- Test on mobile (resize your browser to phone width)
- Visual polish: spacing, typography, hover effects

**Tier 3 — The Live Version:**
- Add email capture form that stores submissions
- Add analytics tracking snippet
- Deploy to Netlify or Vercel
- Get a public URL you can share
- Send it to one real person and ask for feedback

Tier 3 is where this stops being an exercise and starts being your actual landing page.

---

## 10. Common Mistakes

These are the mistakes that kill conversion rates. Watch out for every one of them.

### Making the page too long

If your landing page scrolls for 10 screens, you've lost people. A landing page isn't a website. It's a sales pitch. Cut everything that doesn't directly support the CTA.

Rule of thumb: if you removed a section and no one would notice, remove it.

### Multiple competing CTAs

"Buy Now" and "Learn More" and "Watch Demo" and "Read Blog" — pick one. Every additional option reduces the chance they pick any of them.

One page. One button. One action.

### Writing for yourself instead of your customer

You know your product inside out. Your customer doesn't. They don't care about your tech stack, your team size, or your mission statement. They care about one thing: "What does this do for me?"

Every line of copy should pass this test: would the customer care?

### Forgetting mobile

More than half your traffic will be on a phone. If your page looks broken on mobile, you're losing half your potential customers before they even read the headline.

Always test by resizing your browser to phone width. Ask Claude to make it mobile responsive if it isn't:

```
This landing page doesn't look right on mobile. Fix the responsive design:
- Stack all columns vertically on screens under 768px
- Make the CTA button full-width on mobile
- Increase font size for readability on small screens
- Make sure no content overflows horizontally
```

### Not testing the form

You added an email form. Does it actually work? Where do the submissions go? If your form doesn't submit anywhere, you're collecting nothing.

For a quick working form, use a service like Formspree or Tally:

```
Make the email capture form submit to Formspree. My Formspree endpoint is [your endpoint URL]. Show a "Thank you" message after submission without leaving the page.
```

### Generic, forgettable copy

"The best solution for your business" could describe literally anything. If you swapped in any competitor's name and the copy still works, it's too generic.

Be specific. Name the pain. Name the outcome. Use numbers. Use your customer's language, not marketing jargon.

```
Rewrite all the copy on this landing page. Make it specific to [your customer type]. Replace any generic phrases with concrete outcomes. Use the language my customers actually use — they say things like "[real phrases your customers use]".
```

---

## What You Should Have Now

After this module, you have:

1. A working landing page for your product or idea
2. The ability to build any landing page in 15 minutes
3. A spec template you can reuse for every future page
4. Ready-to-use prompts for product launches, waitlists, lead magnets, events, and teasers
5. A playbook for A/B testing without tools
6. A deployment path to get your page live today

The page you built in this module is real. Ship it. Send the link to someone. Start collecting leads. The fastest way to learn what works is to put it in front of real people.

### Your Takeaway File

This module's `templates/landing-page-spec.md` is a fillable spec template for any landing page. It includes all required fields, the page structure, design rules, and a checkbox for page type (product launch, lead magnet, waitlist, event, coming soon). Use it every time you build a new page -- same process, consistent quality.

Next module: competitor research. Because before you write better landing pages, you should know exactly what your competitors are doing.
