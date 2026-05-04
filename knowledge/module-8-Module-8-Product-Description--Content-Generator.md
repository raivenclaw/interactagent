# Module 8: Product Description & Content Generator

Turn Claude Code into your brand's content engine. Product descriptions, social posts, blog articles, email sequences, ad copy — all in your voice, at speed.

---

## 1. Why Content Generation Is a Founder's Superpower

Every ecommerce brand runs on content. Product descriptions. Social media posts. Blog articles. Email campaigns. Ad copy. Landing page headlines. Category page intros. Packaging copy. It never ends.

And here's the math that kills most founders: if you have 50 SKUs, and each one needs a product title, a short description, a long description, five bullet points, and three social captions — that's 500 pieces of content. For one product line. Before you've written a single email or blog post.

Writing it all yourself takes days. Hiring a copywriter costs thousands. Neither scales when you add 20 new products next quarter.

Claude Code changes the equation. You bring your brand knowledge — the voice, the positioning, the customer insight that only you have. Claude brings the writing speed. Together, you produce content that sounds like you wrote it, at a pace that would take a team of writers to match.

But here's the catch: generic AI content is terrible. You've seen it. The bland, lifeless, "elevate your everyday" nonsense that reads like it was written by a robot pretending to be a human pretending to be a marketer. Nobody buys from that.

The difference between bad AI content and great AI content is one thing: configuration. You need to teach Claude your brand voice before you generate a single word. That's where we start.

---

## 2. Brand Voice Configuration

This is the most important step in this entire module. Skip it and everything you generate will sound generic. Do it well and Claude writes content that sounds like you — not like a machine.

### The Brand Voice Template

Put this in your project's CLAUDE.md file. Claude reads it before every task, so your voice is always loaded.

```
## Brand Voice

- Tone: [e.g., confident but not arrogant, friendly but not casual, expert but not jargon-heavy]
- We say: [list 5 phrases/words your brand uses]
- We never say: [list 5 phrases/words your brand avoids]
- Our customer is: [one sentence describing who you're talking to]
- When in doubt: [e.g., "sound like a knowledgeable friend, not a salesperson"]

## Content Rules

- Sentence length: [e.g., short and punchy, max 20 words per sentence]
- Paragraph length: [e.g., 2-3 sentences max]
- Formatting: [e.g., use bullet points for features, avoid walls of text]
- Words we overuse (avoid): [e.g., "elevate", "leverage", "unlock", "seamless"]
- Capitalization: [e.g., sentence case for headlines, never ALL CAPS]

## Examples of Our Voice

Good: "[paste a real example of copy you love from your brand or a brand you admire]"

Bad: "[paste a real example of the kind of writing you hate]"
```

### A Real Example

Here's what this looks like filled in for a fictional skincare brand:

```
## Brand Voice

- Tone: warm and honest, like a smart friend who happens to know a lot about skin
- We say: "your skin", "real results", "we tested this", "here's the truth", "no BS"
- We never say: "revolutionary", "game-changing", "unlock your potential", "luxury experience", "pamper yourself"
- Our customer is: a 28-40 year old woman who's tired of marketing hype and just wants products that actually work
- When in doubt: sound like a dermatologist who also happens to be fun at dinner parties

## Content Rules

- Sentence length: short. Max 15 words. If it needs a comma, it's probably two sentences.
- Paragraph length: 2 sentences max for product descriptions. 3 max for blog posts.
- Formatting: bullet points for ingredients and specs. Short paragraphs for storytelling.
- Words we overuse (avoid): "luxurious", "indulge", "transform", "journey", "elevate", "curated"
- Capitalization: sentence case everywhere. Never shout.

## Examples of Our Voice

Good: "This moisturizer does one thing really well: it hydrates without making you greasy. We tested 14 formulations before we landed on this one. Your skin will notice."

Bad: "Indulge in our luxurious moisturizing experience, carefully curated to transform your skincare journey and unlock your skin's true radiant potential."
```

See the difference? The "good" example is specific, direct, and sounds like a human. The "bad" example could describe any product from any brand. It says nothing.

### Activating Your Voice

After you've added the voice guide to CLAUDE.md, tell Claude to use it:

```
Read my brand voice guide in CLAUDE.md. From now on, write all content in this
voice. If I ask for something that doesn't specify a tone, default to this. If
you catch yourself writing anything that sounds like the "Bad" example, rewrite it.
```

Now every piece of content you generate in this project will follow your voice. You don't need to repeat the instructions each time. Claude reads CLAUDE.md automatically.

### Finding Your Voice If You Don't Have One Yet

Not sure what your brand sounds like? Use this prompt:

```
I'm building a brand voice for my [type of business]. My product is [what you sell].
My target customer is [who they are].

Brands I admire the tone of: [list 2-3 brands whose copy you like].
Brands whose tone I want to avoid: [list 2-3 brands whose copy feels wrong for you].

Write me 5 different voice options. For each one, write the same product description
in that voice so I can compare them side by side. The product is:
[name, key features, price point].
```

Pick the one that feels most like you. Then use it to fill in the template above.

---

## 3. Product Description Generator

This is the killer app for ecommerce founders. If you only use one thing from this module, make it this.

### Quick Win: Single Product Description

Start with one product. Get the voice right. Then scale.

```
Write 3 product description variants for:

Product: [product name]
Specs: [material, size, weight, key features]
Price point: [€X]
Target customer: [who buys this and why]

Variant 1: Short and punchy (2 sentences max). For category pages and quick browsing.
Variant 2: Story-driven (problem → solution → benefit). For product pages where
  customers need convincing.
Variant 3: Feature-focused (specs + why each spec matters to the customer). For
  customers who compare before buying.

Use my brand voice from CLAUDE.md.
```

This gives you three angles for the same product. Use the short one on your collection page, the story one on the product page, and the feature one in comparison emails or ads.

### Why Three Variants Matter

Most founders write one description and paste it everywhere. That's a missed opportunity.

A customer browsing your category page has different needs than a customer reading a product page. The browser wants speed — what is this, should I click? The reader wants depth — why should I buy this, what makes it special?

Three variants give you content for three different moments in the buying journey, from one prompt.

### Batch Generation: 20 Products at Once

This is where the real time savings hit. Instead of describing one product at a time, do your entire catalog.

```
I have 20 products to describe. Here are their specs:

1. [Product name] — [material], [size], [key feature], [price]
2. [Product name] — [material], [size], [key feature], [price]
3. [Product name] — [material], [size], [key feature], [price]
...
20. [Product name] — [material], [size], [key feature], [price]

For each product, generate:
1. Product title (SEO-optimized, under 60 characters)
2. Short description (2 sentences, for category pages)
3. Long description (3-4 paragraphs, for product pages)
4. 5 bullet points highlighting key features (benefit-first, not spec-first)
5. Meta description (under 155 characters, includes target keyword naturally)

Use my brand voice throughout.
Output as a structured table I can copy into Shopify.
```

If you have a spreadsheet with your products, you can paste the CSV directly:

```
Here's my product catalog as CSV:

[paste CSV data]

Generate descriptions for every product using the format above.
Use my brand voice from CLAUDE.md.
```

Twenty products, fully described, in the time it takes to drink a coffee.

### Building a Reusable Description Generator

If you generate descriptions regularly — new products, seasonal updates, collection refreshes — build a tool you can reuse:

```
Build me a product description generator as a single HTML file.

I input:
- Product name
- Key specs (material, dimensions, features) — free text field
- Target customer — free text field
- Price point
- Voice preset dropdown with these options: [Confident & Direct, Warm & Friendly,
  Technical & Precise, Playful & Bold]

It generates:
- SEO title (under 60 characters)
- Meta description (under 155 characters)
- Short description (2 sentences)
- Long description (3-4 paragraphs)
- 5 bullet points
- 3 social media captions (Instagram, Facebook, LinkedIn)

Features:
- "Regenerate" button next to each section (regenerates just that section)
- "Copy" button next to each section
- "Copy All" button that copies everything formatted
- "Export JSON" button that downloads all content as a JSON file I can import to Shopify
- Clean, minimal UI. Cream background. Dark text. Looks professional.

Use my brand voice from CLAUDE.md as the default voice preset.
```

This gives you a tool you open, fill in the specs, and get ready-to-publish content. No prompting required. No context-setting. Just input and output.

### Shopify-Ready Output

If you're on Shopify specifically, ask for output in their format:

```
Format the product descriptions as Shopify-compatible HTML. Use:
- <h2> for section headings within the description
- <ul><li> for bullet points
- <p> for paragraphs
- No inline styles (Shopify's theme handles styling)
- Include the short description separately — that's for the "excerpt" field

Output as a CSV with columns: Handle, Title, Body (HTML), SEO Title, SEO Description.
I'll import this directly into Shopify.
```

---

## 4. Social Media Content Calendar

Writing social posts one at a time is exhausting. Generate a full month at once, then schedule them.

### The 30-Day Calendar

```
Create a 30-day social media content calendar for [brand name].

About the brand: [one paragraph about what you sell and who you serve]

We post on:
- Instagram: daily — mix of product shots, behind-the-scenes, educational content,
  customer stories
- LinkedIn: 3x per week — thought leadership, company updates, industry insights
- Facebook: 3x per week — product features, customer stories, promotions

For each post, give me:
1. Day number and date
2. Platform
3. Post type (e.g., product feature, educational, behind-the-scenes, user story,
   promotional)
4. Caption text (ready to paste — include line breaks where they belong)
5. Image direction (describe what the photo or graphic should show)
6. Hashtags (Instagram only, 10-15 relevant ones)
7. Best posting time

This month's theme: [e.g., new collection launch, sustainability focus, customer
  appreciation month, holiday season prep]

Use my brand voice from CLAUDE.md.
Output as a table organized by date.
```

### Content Pillars

If you want more strategic control, define your content pillars first:

```
My brand posts about 4 topics (content pillars):
1. Product education — how to use our products, care tips, what makes them different
2. Behind the scenes — how we make things, team stories, studio life
3. Customer spotlight — real customers, their stories, how they use our products
4. Industry/lifestyle — trends, tips, and insights our customer cares about

Create a 30-day Instagram content calendar following a rotation:
Mon: Product education
Tue: Behind the scenes
Wed: Customer spotlight
Thu: Product education
Fri: Industry/lifestyle
Sat: Behind the scenes
Sun: Customer spotlight

For each post, write the full caption and describe the visual.
Use my brand voice from CLAUDE.md.
```

### Weekly Batch Instead of Monthly

A month of content can feel overwhelming. Start with a week:

```
Write me 7 Instagram captions for this week.

Theme: [this week's focus — e.g., new product launch, seasonal topic, brand value]
Products to feature: [list 2-3 products to highlight this week]

For each post:
- Full caption (ready to copy and paste)
- Image direction (what to photograph or design)
- 10 relevant hashtags
- Post type label (educational / product / behind-the-scenes / engagement)

Mix the types. Don't make every post a product pitch.
Use my brand voice from CLAUDE.md.
```

Seven posts in two minutes. Schedule them on Sunday. Your week is covered.

---

## 5. Blog Post Generator

Blog posts drive organic traffic. But writing a 1500-word article from scratch takes hours. Here's how to do it in stages so the output is actually good.

### Step 1: Topic Generation

Don't start with a blank page. Start with a list:

```
Generate 10 blog post topics for [your brand/niche].

My target customer is: [who they are]
My product solves: [what problem]

Each topic should:
- Answer a question our customer actually searches for
- Target a different keyword
- Be specific enough to write a focused post (not "Everything about skincare")

For each topic, give me:
1. Blog post title
2. Target keyword
3. Search intent (informational, commercial, or transactional)
4. One-sentence summary of what the post covers
5. Estimated difficulty to rank (easy / medium / hard)

Rank by estimated difficulty — easiest to rank for first. Those are our quick wins.
```

Pick the top 3. Write those first.

### Step 2: Outline Before Draft

Never ask Claude to write the full post in one go. The outline step is what separates decent content from great content.

```
Write a blog post outline for:

Title: "[your chosen title]"
Target keyword: "[keyword]"
Target audience: [who reads this]
Word count target: 1200-1500 words

Structure:
- Introduction: hook the reader with a specific problem or surprising fact
- 3-5 main sections with clear subheadings
- Conclusion with a CTA to [product / newsletter / consultation]

For each section, include:
- The subheading
- 2-3 bullet points of what to cover
- One specific example, stat, or data point to include
- How this section connects to our product (subtle, not salesy)

Don't write the full post yet. Just the outline. I want to review the structure first.
```

Review the outline. Move sections around. Cut anything that feels like filler. Add angles you think are missing. Then move to the draft.

### Step 3: Full Draft

```
Write the full blog post from this outline.

Rules:
1. Under 1500 words — every sentence must earn its place
2. Use my brand voice from CLAUDE.md
3. Include a meta title (under 60 characters) and meta description (under 155 characters)
4. Use headers that include the target keyword naturally — don't force it
5. End with a CTA to [product / newsletter / consultation]
6. No generic filler paragraphs. No "In today's fast-paced world..." No "In
   conclusion..." Every sentence should teach or persuade.
7. Use short paragraphs (2-3 sentences max)
8. Include one real or realistic example per section
9. Write for a reader who scrolls — use headers, bold text, and bullet points
   to make it scannable
```

### Step 4: SEO Polish

After the draft is written:

```
Review this blog post for SEO:

Target keyword: "[keyword]"

Check:
1. Is the keyword in the meta title, H1, and first 100 words?
2. Are the subheadings using related keywords naturally?
3. Is there an internal link opportunity to [another page on your site]?
4. Is the meta description compelling enough to click on in search results?
5. Are there any sections that could use a bullet list for featured snippet potential?

Make the adjustments. Don't stuff keywords. Keep it natural.
```

### Batch Blog Content

Once you've nailed the process for one post, scale it:

```
Generate blog post outlines for my top 10 topics:

1. [topic]
2. [topic]
...
10. [topic]

For each, include: title, target keyword, outline with 4 sections, and a
one-sentence CTA suggestion. I'll review all 10 and pick the ones to write first.
```

---

## 6. Email Copy Generator

Email is the highest-ROI channel in ecommerce. But most founders either don't send emails or send boring ones. Here's every email sequence your brand needs, ready to generate.

### Welcome Sequence

The emails new subscribers get when they sign up. This is your first impression. Most brands blow it with a generic "Welcome to our newsletter!" that says nothing.

```
Write a 5-email welcome sequence for new subscribers to [brand name].

About the brand: [what you sell, who you serve, what makes you different]
Main product to highlight: [your bestseller or hero product]
First purchase offer: [e.g., 10% off, free shipping — or "none"]

Email 1 (send immediately): Welcome + brand story + why we exist.
  Not "welcome to our newsletter." Tell them something they didn't know about
  the brand. End with one product highlight.

Email 2 (day 2): Educational content — teach them something useful about
  [topic related to your product]. Position the brand as the expert. No selling.

Email 3 (day 4): Social proof — feature a real customer story or compile your
  best reviews. Let other people sell for you.

Email 4 (day 6): Product showcase — your top 3 bestsellers. For each: one
  sentence on what it is, one sentence on why people love it, and a link.

Email 5 (day 8): The offer — if you have a first-purchase discount, this is
  where you use it. Create gentle urgency. "This offer expires in 48 hours."

For each email provide:
- Subject line (under 50 characters)
- Preview text (the snippet shown after the subject line)
- Body copy (under 150 words — people don't read long emails)
- CTA button text
- One A/B test subject line alternative

Use my brand voice from CLAUDE.md.
```

### Promotional Emails

For sales, launches, and special events:

```
Write 3 variants of a promotional email for [sale / product launch / event].

Details: [what's being promoted, dates, discount amount, what's included]

Variant 1 — Urgency-driven: Limited time. Create FOMO without being sleazy.
  Focus on what they'll miss if they wait.

Variant 2 — Story-driven: Why we created this. The backstory. Make them care
  about the product before you ask them to buy it.

Variant 3 — Social proof-driven: What customers are saying. Lead with reviews,
  results, and real feedback. Then the offer.

For each variant:
- Subject line pair (two options for A/B testing)
- Preview text
- Body copy (under 150 words)
- CTA button text

Use my brand voice from CLAUDE.md.
```

Three emails, three angles. Send the one that fits the moment. Or A/B test them against each other to learn what your audience responds to.

### Abandoned Cart Sequence

These emails recover revenue from people who added to cart but didn't buy. Every ecommerce brand should have these running:

```
Write a 3-email abandoned cart sequence for [brand name].

Product type: [what you sell]
Average order value: [€X]
Brand voice: use CLAUDE.md

Email 1 (1 hour after abandonment):
  Gentle reminder. No pressure. No discount. Just "Hey, you left something behind."
  Show the product. Make it easy to go back.

Email 2 (24 hours after abandonment):
  Highlight why the product is worth it. Include one customer review or testimonial.
  Address the most common objection: [e.g., "Is it worth the price?", "Will it
  actually work?", "What if I don't like it?"]

Email 3 (48 hours after abandonment):
  Final reminder. Add a small incentive: [free shipping / 5% off / bonus gift].
  Create gentle urgency: "This is the last time we'll remind you."

Keep each email under 100 words. Conversational tone. These should feel like a
helpful nudge, not a desperate sales pitch.
```

### Post-Purchase Sequence

The emails that turn a buyer into a repeat customer:

```
Write a 4-email post-purchase sequence for [brand name].

Email 1 (immediately after purchase): Order confirmation + genuine thank you.
  Not the transactional receipt — Shopify handles that. This is the human email
  that says "We're excited to make this for you" or "Great choice."

Email 2 (day 3, after delivery): How to get the most out of your [product].
  Usage tips, care instructions, or a "getting started" guide.

Email 3 (day 14): Ask for a review. Keep it simple. One question: "How are you
  liking your [product]?" Link to leave a review.

Email 4 (day 30): Cross-sell. "People who bought [product] also love [related
  product]." One product recommendation, one reason why, one link.

Under 100 words each. Use my brand voice from CLAUDE.md.
```

---

## 7. SEO Content Workflow

Content that ranks on Google is content that answers the questions your customers are already searching for. Here's a systematic workflow.

### Step 1: Find What People Search For

```
For my business — [one sentence description of what you sell and who you serve] —
find 20 long-tail keywords people search for related to [your niche].

Focus on keywords that are:
- Specific (not "skincare" but "best moisturizer for dry skin in winter")
- Questions people actually ask (how to, what is, best for, vs, alternative to)
- Relevant to products I sell

For each keyword:
1. The keyword phrase
2. Search intent: informational (learning), commercial (comparing), or
   transactional (ready to buy)
3. Suggested content type: blog post, product page, FAQ page, comparison page,
   or guide
4. Title suggestion for the content
5. How it connects to my product (the natural CTA)

Rank by estimated difficulty — easiest to rank for first.
These are my next 20 pieces of content.
```

### Step 2: Map Keywords to Content

```
Take the 20 keywords from above and organize them into a content plan:

Group them by theme (you'll probably find 4-5 natural clusters).
For each cluster:
- Pillar content: one long-form guide (2000+ words) targeting the main keyword
- Supporting content: 3-4 shorter posts targeting the long-tail variations
- Product pages: which of my products should link to this content?

This gives me a 3-month content calendar. Map it out week by week, starting with
the easiest keywords first.
```

### Step 3: Write Content That Ranks

Use the blog post generator from Section 5, but add SEO-specific instructions:

```
Write this blog post with SEO in mind:

Target keyword: "[keyword]"
Secondary keywords: "[related keyword 1]", "[related keyword 2]"

Additional SEO rules:
- Include the target keyword in: title, first paragraph, one H2, meta description
- Use secondary keywords in other H2s naturally
- Write a "People also ask" section with 3-4 related questions and answers
  (these can win featured snippets)
- Include an internal link to [your product page URL] where it fits naturally
- End with a CTA that relates to the search intent — don't push a sale on an
  informational post
```

---

## 8. Content Repurposing Engine

One good piece of content should become ten. This is how you get maximum mileage from every article, email, or product story you create.

### One Blog Post, Six Formats

```
Take this blog post and repurpose it into 6 formats:

[Paste the blog post, or reference the file]

1. Instagram carousel (5-7 slides):
   - Each slide = one key point from the post
   - Slide 1: hook headline that makes people swipe
   - Slides 2-6: one insight per slide, 2 sentences max
   - Last slide: CTA ("Link in bio" or "Save this for later")
   - Write the caption separately (under 200 words, with hashtags)

2. LinkedIn post (under 200 words):
   - Professional but not stiff
   - Lead with a surprising insight or contrarian take
   - End with a question to drive comments

3. X/Twitter thread (5-7 posts):
   - First tweet must hook — no "Thread:" or "1/"
   - Each tweet must stand alone (people see them individually in feeds)
   - Last tweet: link to the full post

4. Email newsletter section (3 sentences):
   - Tease the insight
   - One key takeaway
   - "Read the full post" link

5. Pinterest pin descriptions (3 variants):
   - Keyword-rich, under 100 words each
   - Different angle for each pin

6. Short-form video script (60-second TikTok or Reel):
   - Hook in the first 3 seconds
   - 3 key points
   - CTA at the end

Use my brand voice from CLAUDE.md for all formats.
Adjust tone slightly for each platform (LinkedIn is more professional,
Instagram is more visual and casual, X is more direct).
```

### Product Launch Repurposing

When you launch a new product, you need content for every channel:

```
I'm launching [product name]. Here are the details:

[Product specs, story, price, target customer, launch date]

Create all launch content:
1. Product page description (short + long)
2. Launch announcement email
3. Instagram post + Story sequence (5 slides)
4. LinkedIn announcement
5. Facebook post
6. Press release summary (3 paragraphs, for media outreach)
7. SMS announcement (under 160 characters)
8. Push notification text (under 50 characters)

All in my brand voice from CLAUDE.md.
```

One prompt. Eight channels covered. That's a launch content package that would take a marketing team a day, done in minutes.

---

## 9. Ad Copy Generator

Paid ads need tight, tested copy. Here's how to generate it at scale.

### Facebook / Instagram Ads

```
Write ad copy for [product] targeting [audience] on Facebook and Instagram.

Product: [what it is, key benefit, price]
Offer: [discount, free shipping, bundle deal — or just awareness]
Landing page: [where the ad sends people]

Generate 5 ad variants:

Variant 1 — Problem-aware: Start with the pain point. "Tired of [problem]?"
Variant 2 — Social proof: Lead with a customer result. "Over [X] customers..."
Variant 3 — Direct offer: Lead with the deal. "[X]% off this week only."
Variant 4 — Curiosity: Tease without revealing. "The [product category] that
  [surprising claim]."
Variant 5 — Story: Mini-narrative. "We created [product] because..."

For each variant:
- Primary text (the main copy, under 125 characters for optimal display)
- Headline (under 40 characters)
- Description (under 30 characters)
- CTA button recommendation (Shop Now, Learn More, Sign Up, etc.)

Use my brand voice from CLAUDE.md.
```

### Google Ads

```
Write Google Search ad copy for these keywords:

Keywords: [list your target keywords]
Landing page: [URL]
Product/offer: [what you're promoting]

For each keyword, generate:
- 3 headline options (under 30 characters each)
- 2 description options (under 90 characters each)
- Display URL path suggestions

Rules:
- Include the keyword naturally (Google bolds matching terms)
- Lead with the benefit, not the feature
- Include a number or specific claim where possible
- Every headline should make sense on its own (Google mixes and matches them)
```

### Ad Copy Testing Matrix

```
I want to test ad copy systematically for [product].

Create a testing matrix:
- 5 different hooks (the first line that stops the scroll)
- 3 different value propositions (why they should care)
- 3 different CTAs (what you want them to do)

Combine them into 10 complete ad variants. Label each one
(e.g., Hook 1 + Value Prop 2 + CTA 3) so I can track which
combinations perform best.
```

---

## 10. Building a Content Hub

If content generation is a regular part of your workflow, build a tool that makes it repeatable.

### The Spec

```
Build me a content hub as a single HTML file.

This is my central content generation tool. It should have these tabs:

Tab 1 — Product Descriptions:
  Inputs: product name, specs (textarea), target customer, price point
  Generates: SEO title, meta description, short description, long description,
  5 bullet points, 3 social captions
  Buttons: regenerate each section, copy each section, copy all, export as JSON

Tab 2 — Social Media:
  Inputs: topic/theme, platform dropdown (Instagram/LinkedIn/Facebook/X),
  post type (educational/promotional/behind-the-scenes/engagement)
  Generates: caption, image direction, hashtags (if Instagram)
  Buttons: regenerate, copy, generate batch of 7 (full week)

Tab 3 — Email:
  Inputs: email type dropdown (welcome/promotional/abandoned cart/post-purchase),
  key details (textarea)
  Generates: subject line, preview text, body, CTA button text
  Buttons: regenerate, copy, generate full sequence

Tab 4 — Blog:
  Inputs: topic, target keyword, audience
  Generates: outline first, then full post on confirmation
  Buttons: regenerate outline, write full post, copy, export as markdown

Features across all tabs:
- Save generated content with tags and timestamps
- Search and filter saved content
- Export selected content as CSV
- Track status: draft / scheduled / published
- Everything saves to localStorage so nothing is lost

UI: clean, minimal, cream background (#EAE6DF), dark text (#2E2A26),
accent (#8B1A10). Professional, not flashy.
```

This is a Tier 3 build. If you're not ready for this yet, use the prompts from the earlier sections directly in Claude Code. The tool is a convenience, not a requirement.

### Adding a Database (Advanced)

If you want content to persist across devices and team members:

```
Convert my content hub from localStorage to Supabase.

Supabase project URL: [your URL]
Supabase anon key: [your key]

Create a table called "content" with columns:
- id (uuid, auto-generated)
- type (text: "product_description", "social_post", "email", "blog")
- title (text)
- content (jsonb — stores all generated fields)
- tags (text array)
- status (text: "draft", "scheduled", "published")
- platform (text, nullable)
- created_at (timestamp)
- updated_at (timestamp)

Add save, search, filter, and export functionality.
Add a simple dashboard showing: total content pieces, breakdown by type,
breakdown by status.
```

---

## 11. Quality Control for AI Content

Generating content is fast. Publishing bad content is expensive. Here's how to make sure what you generate is worth publishing.

### The Three-Check System

Before any AI-generated content goes live, run it through three checks.

**Check 1 — The "Would I Say This?" Test**

Read the content out loud. If any sentence sounds like something a robot would say, rewrite it. Watch for:

- "In today's fast-paced world..." — nobody talks like this
- "Elevate your experience..." — what does this even mean?
- "Seamlessly integrate into your lifestyle..." — too many buzzwords
- "Our revolutionary approach..." — if you have to call it revolutionary, it isn't

If you can swap in any competitor's brand name and the content still works, it's too generic. Start over.

**Check 2 — Accuracy**

AI will occasionally make up product features, invent statistics, or describe things your product doesn't actually do. Check every factual claim:

- Does this product actually have these features?
- Are these dimensions correct?
- Did we actually win this award?
- Is this stat real?

Never publish a product description without verifying the specs against reality.

**Check 3 — Brand Voice Consistency**

Use Claude itself as a reviewer:

```
Review this content against my brand voice guide in CLAUDE.md.

Rate it 1-10 on voice consistency.
Highlight any phrases that don't match our voice.
Flag any sentences that sound generic or AI-generated.
Suggest specific rewrites for flagged phrases.

Content to review:
[paste content]
```

### Building a Brand Voice Checker

If you generate a lot of content, build a dedicated checker:

```
Build me a brand voice checker as a single HTML file.

Two text areas:
- Left: "Brand Voice Guide" (pre-filled with my voice guide from CLAUDE.md)
- Right: "Content to Check" (where I paste content)

A "Check Voice" button that:
1. Compares the content against the voice guide
2. Highlights phrases that don't match the voice (underline them in red)
3. Shows an overall score (1-10)
4. Lists specific issues with suggested rewrites
5. Flags common AI-sounding phrases automatically

Include a list of auto-flagged phrases:
"In today's", "revolutionize", "game-changing", "elevate", "leverage",
"seamless", "cutting-edge", "unlock", "empower", "synergy", "holistic",
"innovative solution", "at the end of the day", "it goes without saying"

Clean UI. Cream background. Useful, not pretty.
```

### The Editing Mindset

AI-generated content is a first draft, not a final product. Treat it like you'd treat copy from a junior writer: the structure and ideas are there, but it needs your eye before it ships.

Your editing pass should take 5-10 minutes per piece. That's still dramatically faster than writing from scratch. The goal isn't perfection — it's authenticity. Your customer should never be able to tell the content was AI-generated.

A good rule: if you spend more time editing AI content than you would have spent writing it yourself, your brand voice configuration needs work. Go back to Section 2 and make your voice guide more specific.

---

## 12. Quick Wins

Copy-paste these prompts. Each one gives you usable content in under 2 minutes. Fill in the brackets with your details.

### Quick Win 1: Five Product Descriptions

```
Write 5 unique product description variants for [product name].
Specs: [key specs].
Target customer: [who].
Each variant should take a completely different angle. No two should
open the same way. Use my brand voice from CLAUDE.md.
```

### Quick Win 2: Turn Reviews Into Testimonials

```
Here are 5 customer reviews from [platform]:

1. "[raw review]"
2. "[raw review]"
3. "[raw review]"
4. "[raw review]"
5. "[raw review]"

Turn each one into a polished testimonial I can use on my website.
Keep the customer's authentic voice — don't make it sound corporate.
Just clean up grammar, trim the length, and highlight the strongest line.
Format: "[Quote]" — [First name], [City]
```

### Quick Win 3: This Week's Instagram

```
Write me 7 Instagram captions for this week.
Theme: [this week's focus].
Products to mention: [list 1-2 products].
Mix of post types: 2 educational, 2 product, 2 behind-the-scenes, 1 engagement.
Include 10 relevant hashtags per post.
Use my brand voice from CLAUDE.md.
```

### Quick Win 4: Rewrite a Product Page

```
Rewrite this product page to be more conversion-focused.

Current page copy:
[paste current product page text]

Target customer: [who buys this]
Main objection to address: [what stops people from buying]
Price: [€X]

Make it shorter, punchier, and focused on what the customer gets —
not what the product is. Use my brand voice from CLAUDE.md.
```

### Quick Win 5: A/B Test Subject Lines

```
Generate A/B test subject lines for this email:

[Paste the email or describe what it's about]

Give me 5 pairs of subject lines to test:
Pair 1: short (under 30 chars) vs. long (40-50 chars)
Pair 2: question vs. statement
Pair 3: with emoji vs. without
Pair 4: benefit-led vs. curiosity-led
Pair 5: personal ("You") vs. product-focused

Keep all of them in my brand voice from CLAUDE.md.
```

### Quick Win 6: Product Comparison Content

```
Write a comparison between my product and [competitor product].

My product: [name, key features, price, differentiator]
Competitor: [name, key features, price]

Format as a "vs" blog post. Be honest — acknowledge where the competitor
is strong. But make clear why someone who values [your differentiator]
should choose you.

This is for customers who are deciding between the two. Help them decide.
Don't be sleazy about it.
```

### Quick Win 7: Category Page Descriptions

```
Write category page descriptions for my online store.

Categories:
1. [Category name] — contains [types of products]
2. [Category name] — contains [types of products]
3. [Category name] — contains [types of products]
4. [Category name] — contains [types of products]

Each description: 2-3 sentences. Include the target keyword naturally.
Tell the customer what they'll find and why it matters to them.
No generic "Browse our collection of..." openers.

Use my brand voice from CLAUDE.md.
```

---

## 13. Workshop Exercise: Build Your Content Engine

Time to build for real. You'll leave this module with a working content generation system for your brand.

### The Exercise

Pick your real brand. Use your real products. Generate content you'll actually publish.

### Step 1: Configure Your Voice (10 minutes)

Fill in the brand voice template from Section 2. Add it to your project's CLAUDE.md. This is the foundation everything else builds on.

If you're not sure about your voice, use the "find your voice" prompt to generate 5 options and pick one.

Test it by generating one product description and reading it out loud. Does it sound like you? If not, adjust the voice guide until it does.

### Step 2: Generate Product Descriptions (10 minutes)

Pick 5 real products from your catalog. Generate descriptions for all 5 using the batch generation prompt from Section 3.

Review them. Edit them. Are they good enough to publish?

### Step 3: Create Your Content Calendar (5 minutes)

Generate a 7-day social media content calendar for next week using the prompt from Section 4.

### Step 4: Level Up (remaining time)

Pick your tier:

**Tier 1 — Prompt-Based (everyone should hit this):**
- Brand voice configured in CLAUDE.md
- 5 product descriptions generated and reviewed
- 7 days of social content planned
- 1 email (welcome or promotional) drafted

**Tier 2 — Tool Builder:**
- Everything from Tier 1
- Build the product description generator HTML tool from Section 3
- Build the brand voice checker from Section 11
- Generate a batch of 20 product descriptions using the tool

**Tier 3 — Content System:**
- Everything from Tier 2
- Build the full content hub from Section 10
- Generate descriptions for your entire product catalog
- Create a 30-day content calendar
- Draft a complete welcome email sequence
- Export everything in a format ready for your platform (Shopify CSV, JSON, etc.)

### What You Should Have When You're Done

1. A brand voice guide that makes Claude write like your brand
2. Product descriptions for real products, ready to publish
3. A social media calendar you can start posting from tomorrow
4. A content generation workflow you can repeat every week
5. The confidence that content is no longer a bottleneck for your business

The content you generated today isn't practice. It's real. Edit it, polish it, and publish it. The best content strategy is the one that actually ships.

### Your Takeaway File

This module's `templates/brand-voice-config.md` is the brand voice configuration you paste into your CLAUDE.md. It defines tone, words you use, words you ban, content length guidelines per type, and slots for example copy (good and bad). Once this is in your CLAUDE.md, every piece of content Claude writes will sound like your brand -- not like a robot.
