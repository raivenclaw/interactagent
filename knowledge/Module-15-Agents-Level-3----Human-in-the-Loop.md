# Module 15: Agents Level 3 -- Human in the Loop

Your Level 2 agent is smart. It reads reviews, classifies emails, scores leads. It makes good judgment calls. But it never acts on those calls. It routes information to you, and you do the acting.

Level 3 is where agents start doing things in the real world. Sending emails to customers. Posting on social media. Processing refunds. Placing reorders.

And that's where things get dangerous.

Because the difference between "agent drafted a bad response" and "agent sent a bad response to a customer" is the difference between a funny log entry and a damaged relationship.

Level 3 is about one concept: **knowing when to ask before acting.** It's the most underrated idea in automation, and it's what separates agents that help from agents that create fires.

---

## 1. The Stakes Matrix

Before you automate any action, run it through this matrix:

| Confidence | Stakes | Action |
|---|---|---|
| High | Low | Act automatically |
| Low | Low | Act + flag for review |
| Any | High | Ask first |
| Low | High | Stop completely |

This matrix is your decision framework for every single thing your agent might do.

### What "Confidence" Means

Confidence is how sure the agent is about its judgment. Claude can rate its own confidence. You can ask it directly:

"On a scale of 1-10, how confident are you that this is the right response? If below 7, flag for my review instead of acting."

High confidence: "This is a standard shipping question. The answer is clearly stated in our FAQ."
Low confidence: "This customer seems upset about a product defect, but I'm not sure if they want a refund or a replacement. The email is ambiguous."

### What "Stakes" Means

Stakes is what happens if the agent gets it wrong. Ask yourself:

- **Low stakes:** Agent likes a positive tweet. Worst case: you liked something slightly off-brand. Nobody notices.
- **Medium stakes:** Agent sends a thank-you email to a happy customer. Worst case: the tone is slightly off. Customer doesn't care.
- **High stakes:** Agent sends a response to an angry customer. Worst case: the response is tone-deaf, customer screenshots it, posts it on Twitter, it goes viral.

### The Exercise: Your Stakes Map

Stop reading for a second. Think about your business. List 5 things an agent could do for you:

1. ____________________
2. ____________________
3. ____________________
4. ____________________
5. ____________________

Now rate each one:
- What's the confidence level likely to be? (How clear-cut is the decision?)
- What are the stakes? (What happens if the agent gets it wrong?)
- What quadrant does it fall in?

Anything in the "Any confidence + High stakes" quadrant gets a human approval gate. Period. No exceptions. That's where the human-in-the-loop goes.

### Ask the Room

Here's a question worth sitting with:

**"In your business, what's a decision where being wrong costs you a real relationship or real money?"**

That's not where you start automating. That's where you put the approval gate. You automate the preparation -- the drafting, the research, the analysis -- and you keep the final "go" button in human hands.

---

## 2. Approval Gates

An approval gate is simple: the agent does all the work, then pauses and waits for you to say "go."

### How It Works

1. Agent detects something that needs action (a customer complaint, a refund request, a social media post to publish)
2. Agent does the thinking (analyzes the situation, drafts a response, prepares the action)
3. Agent sends you the draft with context (via Slack, email, or a dashboard)
4. You review it: **Approve / Edit / Reject**
5. On Approve: agent executes the action
6. On Edit: you change the text, agent executes the edited version
7. On Reject: agent logs it, moves on, does nothing

The agent does 90% of the work. You spend 10 seconds reviewing. That's the power of it. You're not writing responses from scratch. You're not researching the customer's order history. You're not figuring out what went wrong. The agent did all of that. You just read the draft and hit a button.

### The Slack Approval Pattern

The most practical way to implement approval gates for a small team is Slack. Here's what it looks like:

Your agent sends a Slack message:

```
NEW CUSTOMER RESPONSE READY FOR REVIEW

Customer: Sarah M.
Order: #4829
Issue: Package arrived damaged, requesting replacement

Draft response:
"Hi Sarah, I'm really sorry your package arrived damaged -- that's not 
the experience we want for you. I've already arranged a replacement to 
ship out today, and you should receive a tracking number within the hour. 
No need to return the damaged item. If there's anything else I can do, 
just let me know."

Confidence: 9/10
Reasoning: Clear damage complaint, standard replacement process, 
customer tone is frustrated but not hostile.

[Approve] [Edit] [Reject]
```

You read it. It's good. You click Approve. The agent sends the email. Done.

Or: you read it and think "Actually, I want to add a 10% discount." You click Edit, add a line about the discount, submit. The agent sends your edited version.

Or: you read it and think "This situation is more complex than the agent realizes -- I'll handle this one personally." You click Reject. The agent logs it and moves on.

### The Email Approval Pattern

If you don't use Slack, the same pattern works with email:

- Agent sends you an email with the draft and context
- You reply with "APPROVED" to send it
- You reply with your edited version to send that instead
- You reply with "REJECT" or just ignore it

Less elegant than Slack buttons, but works just as well.

---

## 3. Confidence Thresholds

The smarter version of approval gates: the agent rates its own confidence and decides whether to act or ask.

### How to Implement It

Add this to every Claude prompt in your agent:

```
After drafting your response, rate your confidence on a scale of 1-10:
- 9-10: I'm very confident this is the right response
- 7-8: I'm fairly confident but there are nuances I might be missing
- 5-6: I'm unsure -- multiple valid approaches exist
- 1-4: I don't have enough context to handle this well

Return your confidence score and a one-sentence explanation of why.
```

Then your agent uses the score:

| Confidence | Stakes | What the agent does |
|---|---|---|
| 9-10 | Low | Acts automatically, logs the action |
| 9-10 | High | Sends for approval (high stakes always need a human) |
| 7-8 | Low | Acts automatically, flags for review in daily digest |
| 7-8 | High | Sends for approval with the confidence note |
| 5-6 | Any | Sends for approval, highlights uncertainty |
| 1-4 | Any | Stops, escalates to human, does not draft a response |

### Why This Works

Claude is surprisingly well-calibrated when you ask it to rate its own confidence. It knows when something is straightforward ("standard shipping question, answer is in the FAQ") and when something is ambiguous ("customer seems to be asking for a refund but might just be venting").

By letting the agent self-assess, you get the best of both worlds:
- Routine, clear-cut situations get handled automatically (saving you time)
- Edge cases and ambiguity get flagged for you (keeping you safe)

The threshold is adjustable. Start strict (only auto-act on 9-10 confidence, low stakes). As you build trust in the agent's judgment, loosen it gradually.

---

## 4. Examples for Your Ecommerce Business

### Customer Complaint Responder

```
Agent monitors incoming complaints. For each one:

1. Pulls the customer's order history from Shopify
2. Identifies the specific issue (late delivery, damaged product, wrong item, quality complaint)
3. Checks if this customer has complained before
4. Drafts a response using brand voice:
   - Acknowledge the issue specifically (don't be generic)
   - State what you're doing about it (refund, replacement, investigation)
   - Add a goodwill gesture if it's a repeat issue

Decision:
- Confidence 9+ AND issue is standard (late delivery, easy fix): auto-send
- Confidence 7-8 OR issue is complex: send to Slack for approval
- Confidence below 7 OR customer is hostile: escalate to founder, do not draft

The agent never auto-sends to hostile customers. Ever. That's a hard rule.
```

### Refund Processor

```
Agent detects refund requests. For each one:

1. Verifies the order exists and is within refund window
2. Checks refund reason against policy
3. Calculates refund amount

Decision (based on amount and complexity):
- Under EUR 10, clear reason, first request: auto-process refund via Shopify API
- EUR 10-50, clear reason: draft refund + send for approval
- Over EUR 50: always send for approval with full context
- Repeat refunder (3+ refunds in 90 days): always escalate to founder
- Outside refund window: draft a polite decline, send for approval

The agent processes small, clear refunds automatically. 
Everything else needs your OK.
```

### Social Media Publisher

```
Agent generates social media posts from recent positive reviews and new products.

1. Selects content source (new 5-star review, new product, milestone)
2. Drafts a post appropriate for the platform (Instagram, Twitter, LinkedIn)
3. Rates its own confidence in the post

Decision:
- Product announcements with standard template: auto-schedule
- Customer quote posts (just the review + thank you): auto-schedule
- Anything mentioning a social cause, controversy, or opinion: ALWAYS send for approval
- Anything the agent isn't sure about: send for approval

Hard rules:
- Never auto-publish posts about competitors
- Never auto-publish posts about current events
- Never auto-publish posts with claims about product effectiveness
These always go through approval regardless of confidence.
```

### Inventory Auto-Reorder

```
Agent monitors inventory levels and handles reorders.

1. Checks stock levels daily
2. Calculates reorder point based on sales velocity
3. Determines reorder quantity based on lead time and safety stock

Decision:
- Staple items (always in stock, stable demand, cost < EUR 500): 
  auto-submit reorder to supplier via email
- Seasonal items: send reorder recommendation for approval
- Expensive items (reorder cost > EUR 500): always send for approval  
- New items (less than 90 days of sales data): always send for approval

The agent handles the boring reorders automatically and only 
bothers you with the ones that need judgment.
```

### Email Outreach Agent

```
Agent manages outbound email campaigns for B2B/wholesale leads.

1. New lead comes in (from website form, event, referral)
2. Agent researches the lead (company website, LinkedIn, recent news)
3. Drafts a personalized outreach email using the research
4. Rates confidence in personalization quality

Decision:
- Queue all drafts for morning review (9am daily digest)
- Present each email with: lead context, personalization notes, 
  draft email, confidence score
- You review and approve/edit/reject each one
- Approved emails send immediately after your review

The agent does the research and writing. You do the quality control. 
One 15-minute review session handles 20+ personalized emails.
```

---

## 5. Step-by-Step Build: Customer Response Agent with Approval

Let's build the most valuable Level 3 agent for any ecommerce business: one that handles customer emails with an approval gate.

### What You'll Get

When a customer sends a complaint or question:
1. Agent detects it within 30 minutes
2. Agent pulls their order history, identifies the issue, drafts a response
3. You get a Slack message with the draft, context, and Approve/Edit/Reject buttons
4. You tap Approve (or edit if needed)
5. Customer gets a thoughtful, personalized response
6. Average response time drops from "when you remember to check" to under 1 hour

### The Full Spec

```
AGENT: Customer Response Agent with Approval Gate

TRIGGER:
- Runs every 30 minutes
- Checks for new customer emails/messages since last run

DATA SOURCES:
- Gmail API or support inbox (new customer emails)
- Shopify Admin API (order history, product data)
- Previous interactions database (has this customer contacted us before?)

PROCESSING (for each new message):

1. CLASSIFY the message:
   Send to Claude: "Classify this customer email:
   - COMPLAINT: unhappy about order/product/experience
   - QUESTION: asking about products/shipping/sizing/returns
   - COMPLIMENT: positive feedback
   - SPAM: not a real customer inquiry
   
   Also classify urgency: HIGH / MEDIUM / LOW
   Also rate your confidence: 1-10"

2. RESEARCH the customer:
   - Pull order history from Shopify (last 5 orders)
   - Check if they've contacted before (database)
   - Note: returning customer? High-value customer? First-time buyer?

3. DRAFT a response:
   Send to Claude: "Draft a customer response for this ecommerce brand.
   
   Brand voice: [friendly, direct, appreciative -- insert your own]
   Customer name: [name]
   Issue: [Claude's classification from step 1]
   Order history: [from step 2]
   Previous contacts: [from step 2]
   
   Their message: [original email]
   
   Guidelines:
   - Address them by first name
   - Acknowledge the specific issue (never be generic)
   - State clearly what action you're taking
   - If returning customer with issue: add extra warmth and a goodwill gesture
   - If first-time buyer: make sure they feel welcomed despite the issue
   - Keep it under 150 words
   - Sign off with your brand name
   
   After drafting, rate your confidence 1-10 and explain."

4. ROUTE based on confidence and stakes:
   
   COMPLIMENT + any confidence:
   → Auto-send a brief thank you
   → Log the compliment
   → Add to testimonials if quotable
   
   QUESTION + confidence 9-10:
   → Auto-send the response
   → Log the interaction
   
   QUESTION + confidence below 9:
   → Send draft to Slack for approval
   
   COMPLAINT + any confidence:
   → Always send to Slack for approval
   → Never auto-send complaint responses
   
   SPAM:
   → Archive, no response, no notification

5. APPROVAL GATE (Slack):
   Send message to #customer-responses channel:
   - Customer name and email
   - Their original message
   - Order history summary
   - Classification + urgency + confidence
   - Draft response
   - [Approve] [Edit] [Reject] buttons

6. ON APPROVAL:
   - Send the response via email
   - Log: timestamp, customer, issue type, response sent, response time

7. ON EDIT:
   - Open edit modal in Slack
   - Founder edits the text
   - Send the edited response via email
   - Log with note: "manually edited"

8. ON REJECT:
   - Log: rejected, reason (if provided)
   - Move to "manual handling" queue
   - Do not respond

TRACKING:
- Track all interactions in database:
  message_id, customer_email, classification, urgency, confidence,
  draft_response, final_response, status (auto_sent/approved/edited/rejected),
  response_time_minutes, created_at
- Weekly summary: total messages, breakdown by type, average response time,
  auto-send rate vs. approval rate

SAFETY RULES:
- Never auto-respond to complaints (always approval gate)
- Never auto-respond when confidence is below 7
- Never send a response that mentions refund amounts without approval
- Never share customer data from one customer with another
- If Shopify API is down: skip order history, note in the draft that 
  order context is missing, lower confidence to 5
- If Claude API is down: queue the message for manual handling, 
  send a "messages waiting for review" alert
```

### Step 1: Set Up the Infrastructure

Tell Claude:

> "Set up the infrastructure for a customer response agent. I need:
> 1. A Trigger.dev scheduled task that runs every 30 minutes
> 2. Gmail API connection (read new emails from support inbox)
> 3. Shopify API connection (read order history)
> 4. Slack integration with interactive buttons (approve/edit/reject)
> 5. A database table for tracking all interactions
> 6. Resend for sending customer responses
> 
> Use environment variables for all credentials. Follow trigger-rules.md conventions."

### Step 2: Build the Classification Pipeline

> "Build the email classification step. For each new email:
> 1. Check if we've already processed this email (by message ID in database)
> 2. If new: send to Claude for classification (complaint/question/compliment/spam)
> 3. Get urgency rating and confidence score
> 4. Store the classification results"

### Step 3: Build the Research Step

> "Build the customer research step. For each classified email:
> 1. Extract the customer's email address
> 2. Search Shopify for their recent orders (last 5)
> 3. Check our interactions database for previous contacts
> 4. Compile a customer profile: name, order count, total spend, last order date, any previous complaints"

### Step 4: Build the Response Drafting

> "Build the response drafting step. Send Claude:
> - The customer's message
> - The classification and urgency
> - The customer profile from Step 3
> - Our brand voice guidelines
> 
> Have Claude draft a response and rate its confidence.
> Use the prompt from the spec above."

### Step 5: Build the Routing Logic

> "Build the routing logic:
> - Compliments: auto-send thank you
> - Questions with confidence 9+: auto-send
> - Everything else: send to Slack for approval
> - Complaints: always go to Slack, regardless of confidence
> 
> For auto-sent responses, log them but also include them in the daily digest so I can spot-check."

### Step 6: Build the Slack Approval Interface

> "Build the Slack integration:
> - When a response needs approval, send a formatted Slack message with all context
> - Include three buttons: Approve, Edit, Reject
> - On Approve: send the response via email, log the result
> - On Edit: open a modal where I can edit the text, then send
> - On Reject: log it, add to manual queue
> - Include a timeout: if not reviewed within 4 hours, send a reminder"

### Step 7: Build the Tracking Dashboard

> "Create a simple daily digest email that shows:
> - Total customer messages received
> - Breakdown: auto-sent vs. approved vs. edited vs. rejected
> - Average response time
> - Any messages still waiting for review
> Send this at 6pm daily."

### Step 8: Test with Real Emails

> "Set up a test mode where I can forward emails to the agent manually. I want to test with 10 real customer emails before going live. Show me the classification, customer profile, and draft response for each one, but don't actually send anything."

Review the 10 test results. Are the classifications right? Are the drafts good? Does the tone match your brand? Adjust the prompts based on what you see.

### Step 9: Go Live

> "Switch the agent to live mode. Start checking the support inbox every 30 minutes. Route everything through the approval gate for the first week -- no auto-sending until I'm comfortable."

Start with 100% approval gate. After a week of good results, let simple questions auto-send. After two weeks, let compliment responses auto-send. Complaints always go through approval.

---

## 6. The Trust Ladder

Level 3 is about building trust incrementally. Here's the progression:

**Week 1: Everything goes through approval.**
Every single response, even the obvious ones. You're calibrating. You're learning how the agent thinks. You're catching errors.

**Week 2: Auto-send compliment responses.**
"Thanks for the kind words, Sarah!" doesn't need your review. Let the agent handle it.

**Week 3: Auto-send simple questions (confidence 9+).**
"What are your shipping times?" has one correct answer. Let the agent send it.

**Week 4: Auto-send standard questions (confidence 7+).**
The agent has proven it can handle routine questions. Expand its autonomy.

**Never: Auto-send complaint responses.**
This is the hard line. Complaint responses always go through approval. The stakes are too high. A bad response to an angry customer can cost you a customer for life -- or become a social media post you can't take back.

### How to Move Up the Ladder

After each week, review:
- How many responses did the agent auto-send?
- How many were wrong? (Check customer replies -- did anyone respond confused or annoyed?)
- How many did you edit before approving? (If you're editing more than 20%, the prompt needs work)
- How many did you reject? (If you're rejecting more than 10%, something is fundamentally off)

If auto-sent responses are good and approved responses rarely need editing, move up one level of trust. If you're catching errors, stay where you are and improve the prompts.

---

## 7. Quick Wins -- Copy-Paste Prompts

### Quick Win 1: Refund Gatekeeper

```
Build a Trigger.dev task that monitors for refund requests.

Trigger: every 30 minutes, check support inbox for new emails

For each refund request:
1. Verify the order exists in Shopify
2. Check if it's within our refund window (30 days)
3. Check if this customer has requested refunds before

Decision:
- Under EUR 10, within window, first refund: auto-process via Shopify API, 
  send confirmation email, log it, notify me in daily digest
- EUR 10-50, within window: draft refund confirmation, send to Slack 
  for approval with order details
- Over EUR 50: always send to Slack for approval with full order history 
  and customer context
- Outside refund window: draft a polite decline explaining the policy, 
  send to Slack for approval (never auto-send declines)
- 3+ refunds in 90 days: escalate to founder, flag as potential abuse

Always log: order number, amount, reason, decision, outcome
```

### Quick Win 2: Morning Email Queue

```
Build a Trigger.dev task for managing outbound emails with approval.

Schedule: runs overnight (2am), prepares everything for morning review

Process:
1. Check what outreach emails need to be sent today (from CRM or database)
2. For each one, research the recipient (company, recent news, our relationship)
3. Draft a personalized email using our templates + personalization

At 8am, send me a single Slack message:
"You have [X] emails ready for review."
[Link to review dashboard or thread]

List each email:
- Recipient name + company
- Context (why we're emailing them)
- Draft email text
- [Approve] [Edit] [Skip]

I review them during my morning coffee. Approved emails send immediately. 
Edited emails send after I submit changes. Skipped emails go back in queue.

This turns 2 hours of email work into a 15-minute review session.
```

### Quick Win 3: Content Approval Pipeline

```
Build a Trigger.dev task that generates and queues social media content.

Schedule: runs Monday at midnight, prepares the week's content

Process:
1. Pull recent 5-star reviews, new products, and any milestones
2. For each content source, generate posts for relevant platforms:
   - Instagram: visual-first, lifestyle angle, relevant hashtags
   - Twitter/X: concise, engaging, brand voice
   - LinkedIn: professional, story-driven (if applicable)
3. Generate 7 days of content (one post per day minimum)

Monday at 8am, send me the week's content plan:
"Content calendar for this week: [X] posts ready for review."

For each post:
- Platform
- Proposed date/time
- Post text
- Suggested visual direction (what image to pair with it)
- [Approve] [Edit] [Reject]

Approved posts get scheduled via social media API.
Edited posts get rescheduled with changes.
Rejected posts get dropped.

This replaces the "stare at a blank content calendar" problem.
```

---

## 8. Common Mistakes with Level 3

### Mistake 1: Skipping the Approval Gate Too Early

You build the agent, it works great for two days, and you think "This is solid, let me turn off approvals." Don't. Two days is not enough data. Run with full approval for at least a week. You'll catch edge cases you never imagined.

### Mistake 2: Making the Approval Process Annoying

If reviewing approvals takes longer than doing the task yourself, you'll stop reviewing and just auto-approve everything. That defeats the purpose. Keep the approval message clean, scannable, and quick to action. One tap should be enough for 90% of approvals.

### Mistake 3: No Timeout on Approvals

If you don't review a pending approval within a few hours, what happens? If the answer is "nothing, it just waits forever," that's a problem. Customer emails get stale. Time-sensitive responses become irrelevant.

Build in a reminder after 2 hours and an escalation after 4 hours. If you haven't responded in 4 hours, either auto-send (for low-stakes items) or escalate to another team member.

### Mistake 4: Forgetting to Track Auto-Sent Messages

When the agent auto-sends responses (compliments, simple questions), you still need to review them periodically. Include auto-sent messages in your daily digest. Spot-check 5 per day. This is how you catch drift -- the agent slowly getting worse without you noticing.

### Mistake 5: Not Improving the Prompts

Your agent's first draft prompts are version 1. After a week of reviews, you'll notice patterns: the agent always forgets to mention the return label, or it uses language that doesn't match your brand, or it misclassifies warranty claims as refund requests.

Each observation is a prompt improvement. Add it. The best agents have prompts that were refined over 20+ iterations.

---

## 9. Workshop Exercise: Build an Agent with an Approval Gate

Time to build. Pick your high-stakes scenario:

### Option A: Customer Response Agent
Build the full customer response agent from Section 5. Classify, research, draft, approve, send.

### Option B: Refund Processor
Build an agent that handles refund requests with smart thresholds -- auto-process small ones, require approval for large ones.

### Option C: Content Publisher
Build an agent that generates social media posts and queues them for your approval before publishing.

### Option D: Your Own High-Stakes Process
Think about your 3am question: "What's the worst that happens if this agent acts wrong?" Whatever process has a scary answer to that question -- build the approval gate for it.

### The Steps

1. Identify the high-stakes action (the thing that should never happen without your OK)
2. Design the approval flow (Slack message? Email? Dashboard?)
3. Define the confidence thresholds (when does the agent auto-act vs. ask?)
4. Write the spec
5. Build it with Claude
6. Test with real data, approval gate ON for everything
7. Review for one week, refine prompts
8. Gradually increase autonomy (the trust ladder)

### What Success Looks Like

You should have:
- An agent that prepares high-quality drafts for your review
- An approval gate that's fast and easy to use (under 10 seconds per review)
- Clear confidence thresholds that route correctly
- A trust ladder plan for gradually increasing autonomy
- The peace of mind that nothing goes out to customers without your OK (until you're ready)

---

## 10. Key Takeaways

1. **The approval gate is the most valuable pattern in automation.** The agent does 90% of the work. You spend 10 seconds approving. This is where you get leverage without losing control.

2. **Use the stakes matrix for every automated action.** High stakes = always ask. Low stakes + high confidence = act. Low confidence = ask. This is your decision framework. Tape it to your wall.

3. **Trust is earned, not configured.** Start with everything going through approval. Watch the agent for a week. Expand autonomy one notch at a time. Never skip the trust ladder.

4. **Confidence thresholds are adjustable.** Start strict (only auto-act on 9-10 confidence). As the agent proves itself, loosen the threshold. You can always tighten again if quality drops.

5. **Complaints always go through a human.** This is the one hard rule. No matter how confident the agent is, no matter how standard the complaint seems, a human reviews every complaint response before it reaches a customer. The cost of getting it wrong is too high.

6. **Your prompts are a living document.** Every approval you edit is a lesson. Every rejection is a lesson. Feed those lessons back into the prompts. The agent gets better because you're teaching it.

## Templates

- **Agent Level 3 Spec Template:** `templates/agent-level-3-spec.md` — reusable approval gate template with stakes matrix, trust ladder, and progressive autonomy plan
- **Track-Specific Session 3 Agent Specs** (same specs as Module 14 — each covers the full L1 → L2 → L3 progression):
  - Ecom: `participant-kit/tracks/ecom-founder/session-3-spec.md` — adds review response approval gate
  - Agency: `participant-kit/tracks/agency-owner/session-3-spec.md` — adds client communication approval gate
  - Sales: `participant-kit/tracks/sales-pro/session-3-spec.md` — adds outreach email approval gate

---

Next up: Level 4 agents -- multiple agents working together as a system.
