# Module 10: Database, Auth & Deployment

**Claude Code Bookclub** -- Going from "runs on my laptop" to "runs on the internet"

---

Everything you've built so far lives on your computer. Your landing pages, your tools, your dashboards -- they work, but only you can see them. Close the browser and nothing is saved. Nobody else can use it.

This module changes that. By the end, your projects will:

1. **Save things** -- data persists even when you close the browser
2. **Know who's using them** -- users have accounts, you know who did what
3. **Live on the internet** -- anyone with the URL can access them

Three things. Three setup steps. Each one is essentially one prompt to Claude Code with a few clicks in a browser. If you can create a Google account, you can do all of this.

---

## 1. Why This Matters Now

Think about what you've already built. A landing page with an email capture form -- where do those emails go? Nowhere. A product description generator -- can your team use it? Not unless they're sitting at your laptop.

Here's what changes when you add each layer:

**Database:** Your email capture form now saves every submission to a table you can view anytime. Your product tool remembers every description it generated. Your dashboard shows real data.

**Authentication:** Your team can log in. Your customers can log in. You can show different things to different people. You can protect pages that shouldn't be public.

**Deployment:** Your mom can see it. Your investor can see it. Your customers can use it. You share a link, it works.

Each layer builds on the previous one. Database first, then auth, then deploy. Let's go.

---

## 2. Databases -- Saving Things

### What Is a Database?

A spreadsheet that your app can read and write to automatically.

That's it. Seriously. Rows and columns, just like Google Sheets. The difference is that your app can access it with code -- adding rows, updating cells, filtering data -- without anyone touching a spreadsheet manually.

When someone fills out a form on your site, a new row appears in the database. When you want to see all orders from last week, you ask the database and it gives you the answer in milliseconds.

### Why Supabase?

There are dozens of database services. We use Supabase because:

- **Free to start.** No credit card. Generous free tier that handles thousands of users.
- **It includes everything.** Database, authentication, file storage -- one tool instead of three.
- **Claude knows it deeply.** Ask Claude to do anything with Supabase and it writes the code immediately. No fumbling.
- **You can see your data.** Supabase has a dashboard where you can view your tables, edit rows, run queries -- like a built-in Google Sheets view of your data.

### Setting Up Supabase

This takes about 3 minutes.

**Step 1: Create an account**

Go to [supabase.com](https://supabase.com) and sign up. Use your GitHub account if you have one (you'll need GitHub later for deployment anyway), or sign up with email.

**Step 2: Create a new project**

Click "New Project." You'll need three things:

- **Name:** Whatever your app is called. "my-ecommerce-app" or "team-dashboard" -- doesn't matter much.
- **Database password:** Supabase generates a strong one. Save it somewhere safe (a password manager, not a sticky note).
- **Region:** Pick the one closest to your customers. If you're in Europe, pick "West EU (Ireland)" or "Central EU (Frankfurt)."

Click "Create new project." It takes about 30 seconds to set up.

**Step 3: Get your keys**

Once the project is ready, go to **Settings** (gear icon in the sidebar) then **API**. You need two things:

- **Project URL** -- looks like `https://xyzabc123.supabase.co`
- **anon public key** -- a long string starting with `eyJ...`

Copy both. You'll use them in a minute.

**Step 4: Add them to your project**

In your project folder, create a file called `.env` (or add to the existing one) with these two lines:

```
SUPABASE_URL=https://xyzabc123.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...your-key-here
```

Then tell Claude to install the Supabase library:

```
Install the Supabase JavaScript client and set up the connection using
the environment variables in my .env file.
```

Claude creates a small setup file that connects your app to Supabase. Done. Your app can now talk to your database.

### Creating Tables -- In Plain English

This is where it gets fun. You don't need to learn SQL. You don't need to understand database schemas. You describe what you want to store, and Claude writes everything.

**Example prompt:**

```
Create a Supabase table called "products" with these columns:
- id (auto-generated, unique)
- name (text)
- price (number)
- description (text)
- stock_count (number)
- created_at (timestamp, auto-set when created)

Then create a table called "orders" with:
- id (auto-generated, unique)
- customer_email (text)
- product_id (references the products table)
- quantity (number)
- total_price (number)
- status (text, default value "pending")
- created_at (timestamp, auto-set when created)
```

Claude generates a SQL migration file. It looks like code, but you don't need to understand it. Claude will tell you how to run it -- usually by pasting it into Supabase's SQL Editor (a page in the dashboard where you can run database commands).

**Another example -- a lead capture database:**

```
Create a Supabase table called "leads" with:
- id (auto-generated)
- email (text, required, must be unique)
- name (text)
- source (text -- where they came from, like "landing-page" or "instagram")
- created_at (timestamp)
```

**A customer feedback table:**

```
Create a Supabase table called "feedback" with:
- id (auto-generated)
- customer_email (text)
- rating (number, 1 to 5)
- comment (text)
- product_name (text)
- created_at (timestamp)
```

Think about your own business. What data do you wish you were collecting? Describe it in plain English. Claude builds the table.

### Reading Data

Once you have tables with data, you can ask questions:

```
Show me all products where stock_count is less than 5.
```

```
How many orders did we get today?
```

```
What's the total revenue this month? Sum the total_price column
in the orders table where status is "completed" and created_at
is in the current month.
```

```
Show me all leads from the "instagram" source, sorted by newest first.
```

Claude writes the query, runs it, and shows you the results. You're querying a database without knowing what a query is.

### Writing Data

Adding and updating data works the same way:

```
Add a new product: name "Summer Tee", price 29.99,
description "Organic cotton t-shirt", stock_count 100.
```

```
Update the stock count for "Summer Tee" to 85.
```

```
Change the status of order #47 to "shipped".
```

```
Delete all leads where email contains "test@".
```

### Connecting Your App to the Database

The real power is when your app reads and writes data automatically. Here's how that works in practice.

**Making a form save to the database:**

```
Update my landing page's email capture form so that when someone
submits their email, it saves to the "leads" table in Supabase.
Show a success message after saving. If the email already exists,
show "You're already on the list!" instead of an error.
```

**Making a page show data from the database:**

```
Create a dashboard page that shows all products from my Supabase
"products" table in a table format. Show name, price, stock count,
and created date. Sort by stock count ascending so low-stock items
appear first. Highlight rows where stock is below 5 in red.
```

**Making an admin page to manage data:**

```
Build an admin page where I can:
1. See all products in a table
2. Click "Edit" on any row to update the name, price, or stock
3. Click "Delete" to remove a product (with a confirmation popup)
4. Click "Add Product" to add a new one via a form
Use my Supabase connection. Style it clean and simple.
```

That last prompt gives you a basic admin panel. The kind of thing that costs $5,000 from an agency.

---

## 3. Row Level Security -- Keeping Data Safe

Here's something important. By default, Supabase locks everything down. Nobody can read or write your tables unless you explicitly allow it. This is good -- it means your data is safe. But it also means your app can't access it yet until you set permissions.

These permissions are called Row Level Security, or RLS. Think of it as bouncer rules for your database. You tell the bouncer who gets in, who doesn't, and what they're allowed to do once inside.

### How It Works

You describe the rules in plain English. Claude writes the policy.

**Example: Public product catalog, private orders**

```
Set up RLS policies for my Supabase tables:

Products table:
- Anyone can read (view) products, even without logging in
- Only authenticated users can add, edit, or delete products

Orders table:
- Users can only see their own orders (match on customer_email)
- Users can create new orders
- Only admins can update order status
- Nobody can delete orders

Leads table:
- Nobody can read leads from the app (I'll view them in the Supabase dashboard)
- Anyone can insert a new lead (for the signup form)
- Nobody can update or delete leads from the app
```

Claude generates the SQL policies. You run them in the Supabase SQL Editor.

### Why This Matters

Without RLS, anyone who inspects your website's code could potentially read or modify your database. With RLS, even if someone finds your API key (which is public by design -- the anon key is meant to be in browser code), they can only do what the rules allow.

**A real scenario:** Your landing page collects emails. Without RLS, a competitor could use your API key to download your entire lead list. With the RLS policy above ("anyone can insert, nobody can read"), they can add an email but never see the list. You view leads safely through the Supabase dashboard.

### The Prompt to Check Your Security

Run this anytime before deploying:

```
Review all my Supabase tables and their RLS policies. For each table,
tell me:
1. Is RLS enabled?
2. What can unauthenticated users do?
3. What can authenticated users do?
4. Are there any security concerns?

If any table is missing RLS or has overly permissive policies, fix it.
```

---

## 4. Authentication -- Knowing Who's Using It

### Why Authentication Matters

Without auth, your app is a public park. Anyone can walk in and do anything. That's fine for a landing page. It's not fine for a dashboard, an admin panel, or anything with personal data.

With auth:

- Users have accounts (email and password, or Google sign-in)
- You know who's doing what
- You can show different things to different people (admin vs. customer)
- You can protect pages (only logged-in users see the dashboard)
- Your RLS policies can use the logged-in user's identity to filter data

### Option 1: Supabase Auth (Recommended)

Since you already have Supabase for your database, you get auth for free. No extra accounts, no extra services, no extra cost.

Supabase Auth supports:

- **Email + password** -- the classic. User signs up with email and password.
- **Magic link** -- user enters email, gets a link, clicks it, they're in. No password needed. Less friction.
- **Google sign-in** -- "Continue with Google" button. Users don't need to create a new password.
- **Apple sign-in** -- same idea, for Apple users.
- **GitHub sign-in** -- useful for developer-facing tools.

**The simplest starting point:**

```
Add authentication to my app using Supabase Auth. I want:

1. A sign-up page with email and password
2. A login page
3. A "Continue with Google" button on both pages
4. After login, redirect to /dashboard
5. A logout button in the top right of the header
6. If someone tries to visit /dashboard without being logged in,
   redirect them to /login

Use Supabase Auth. Don't build custom auth. Don't use JWT manually.
```

Claude builds the sign-up page, login page, session handling, redirects, and logout button. The whole auth flow, from one prompt.

**Setting up Google sign-in:**

This requires one extra step in the Supabase dashboard:

1. Go to **Authentication** in the Supabase sidebar
2. Click **Providers**
3. Find **Google** and enable it
4. You'll need a Google Client ID and Secret -- Supabase links to the instructions for creating them in Google Cloud Console
5. Paste them in and save

It takes about 5 minutes. Claude can walk you through it:

```
Walk me through setting up Google OAuth for Supabase Auth,
step by step. Include the Google Cloud Console setup.
```

**Setting up magic link (passwordless) login:**

```
Add magic link login to my app. When users enter their email,
they receive a link. Clicking the link logs them in. No password.
Show a message after submission: "Check your email for a login link."
```

Magic link works out of the box with Supabase -- no extra setup needed.

### Option 2: Clerk

Clerk is a separate authentication service. It gives you prettier sign-in components and a more polished user management dashboard. The tradeoff is it's an extra service to set up and manage, and it has its own pricing.

**When to use Clerk instead of Supabase Auth:**

- You want a very polished, drop-in sign-in component with minimal styling work
- You need advanced features like multi-factor authentication or organization management
- You're building a SaaS product where user management is a core feature

For most projects, Supabase Auth is enough. Start there.

### The CLAUDE.md Rule

Put your auth decision in your project's CLAUDE.md so Claude doesn't improvise:

```markdown
## Auth
Use Supabase Auth for all authentication. Do not build custom auth.
Do not use JWT manually. Do not create your own session management.

Google sign-in is enabled.
Magic link is enabled.
No password requirements beyond 8 characters.
Redirect to /dashboard after login.
Redirect to /login if unauthenticated user visits a protected page.
```

This saves you from Claude going rogue and building a login system from scratch with password hashing and token management. That's a security nightmare. Let Supabase handle it.

### Protected Pages

Once auth is set up, you can lock down any page:

```
Make the /dashboard page protected. Only logged-in users can see it.
If someone visits /dashboard without being logged in, redirect to /login.
After they log in, take them back to /dashboard.
```

```
Make the /admin page only accessible to users whose email is in this list:
- maurits@maisoncler.com
- partner@maisoncler.com
All other logged-in users who try to visit /admin should see a
"Not authorized" message.
```

That second prompt gives you basic admin access control. Simple, effective, no complicated role systems.

---

## 5. Environment Variables -- Keeping Secrets Safe

### What Are They?

Your app needs passwords and API keys to talk to services like Supabase, Stripe, or Google. These should never appear directly in your code. If they do, anyone who sees your code (including on GitHub) can steal them.

Environment variables are the solution. They're stored in a special file that your app can read but that never gets uploaded anywhere.

### The .env File

This file lives in the root of your project folder. It looks like this:

```
SUPABASE_URL=https://xyzabc123.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOi...your-key
STRIPE_SECRET_KEY=sk_live_xxxxx
GOOGLE_CLIENT_SECRET=GOCSPX-xxxxx
```

Each line is a key-value pair. Your app reads them when it starts. The actual values never appear in your code -- only the variable names like `process.env.SUPABASE_URL`.

### The Rules

**Rule 1: Never put API keys directly in your code.**

Bad:

```javascript
const supabase = createClient('https://xyz.supabase.co', 'eyJhbGciOi...')
```

Good:

```javascript
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
```

The first version exposes your keys to anyone who reads the code. The second reads them from the environment -- safe.

**Rule 2: Always add .env to .gitignore.**

The `.gitignore` file tells Git "don't upload these files." Your `.env` file must be in there. Otherwise, when you push your code to GitHub, your secrets go with it.

```
Check that my .env file is in .gitignore. If it's not, add it.
Also check that no API keys or secrets are hardcoded anywhere
in my code. If they are, move them to .env and use environment
variables instead.
```

Run this prompt before every deployment. It takes Claude 10 seconds and could save you from a real security incident.

**Rule 3: Different environments have different .env files.**

Your laptop has one `.env` with development keys. Your production server (Vercel) has its own environment variables set through its dashboard. This means you can use test keys locally and real keys in production.

**Rule 4: Create a .env.example file.**

This is a copy of your `.env` but with fake values. It tells anyone (or future you) what variables the project needs:

```
SUPABASE_URL=your-supabase-url-here
SUPABASE_ANON_KEY=your-anon-key-here
STRIPE_SECRET_KEY=your-stripe-secret-key-here
```

```
Create a .env.example file based on my .env file. Replace all
actual values with placeholder descriptions. Make sure .env.example
is NOT in .gitignore (it should be committed).
```

---

## 6. Deployment -- Putting It on the Internet

You've built something that works on your laptop. Now let's put it where the world can see it.

### Option 1: Vercel (Recommended for Next.js Apps)

Vercel is the easiest way to deploy a web app. It's free for personal projects and small teams. It's made by the same people who make Next.js, so everything works together perfectly.

**What you need before starting:**

- A GitHub account (free at github.com)
- Your code pushed to a GitHub repository
- A Vercel account (free at vercel.com, sign in with GitHub)

**Step 1: Push your code to GitHub**

If your project isn't on GitHub yet, Claude can set this up:

```
Create a new GitHub repository called "my-app" and push my
project code to it. Make sure .env is NOT included. Make sure
.gitignore is set up properly first.
```

Claude will:
1. Initialize a Git repository in your project folder (if not already done)
2. Create a `.gitignore` that excludes `.env`, `node_modules`, and other files that shouldn't be uploaded
3. Create a repository on GitHub
4. Push your code

You might need to authenticate with GitHub the first time. Claude will walk you through it.

**Step 2: Import to Vercel**

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click **"Add New..."** then **"Project"**
3. You'll see a list of your GitHub repositories -- find yours and click **"Import"**
4. Vercel auto-detects your project settings (framework, build command, etc.). Usually the defaults are correct.
5. **Important: Add your environment variables.** Click "Environment Variables" and add each key-value pair from your `.env` file:
   - `SUPABASE_URL` = your Supabase URL
   - `SUPABASE_ANON_KEY` = your anon key
   - Any other variables your app needs
6. Click **"Deploy"**

That's it. Vercel builds your app, puts it on the internet, and gives you a URL like `my-app.vercel.app`. The whole process takes about 2 minutes.

**Step 3: Every push auto-deploys**

Here's the best part: after this initial setup, every time you push code to GitHub, Vercel automatically rebuilds and deploys. Make a change, push it, it's live in 60 seconds. No manual deployment ever again.

```
Help me deploy my project to Vercel. Walk me through each step,
starting with pushing to GitHub.
```

### Option 2: Netlify Drop (Simplest for Plain HTML)

If you built a simple HTML page (no Next.js, no Node.js, just an HTML file with CSS), deployment is even simpler.

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your project folder onto the page
3. Done. Your site is live.

No account required. No configuration. No GitHub. Just drag and drop.

This is perfect for landing pages from Module 3, static tools, or any standalone HTML file you want to share quickly.

The URL Netlify gives you will be something like `random-name-123.netlify.app`. You can change it or add a custom domain later.

### Option 3: GitHub Pages (Free, Simple)

If you have a GitHub repo with a static site (HTML/CSS/JS, no server-side code), GitHub can host it for free:

```
Set up GitHub Pages for my repository. Deploy from the main branch.
```

Good for portfolios, documentation sites, and simple tools.

---

## 7. Custom Domains

Your app is live at `my-app.vercel.app`. That works, but for anything customer-facing, you want your own domain.

### Step 1: Buy a Domain

If you don't have one yet, buy it from any registrar:

- **Cloudflare** -- cheapest, no markup on domain prices
- **Namecheap** -- simple interface, good prices
- **Google Domains** (now Squarespace Domains) -- straightforward

Pick your domain. Pay. Done.

### Step 2: Add It to Vercel

1. In your Vercel dashboard, go to your project
2. Click **Settings** then **Domains**
3. Type your domain (e.g., `myapp.com`) and click **Add**
4. Vercel shows you DNS records to add at your domain registrar

### Step 3: Update DNS

Go to your domain registrar and add the records Vercel told you to add. Usually it's one of:

- **Option A:** Change your domain's nameservers to Vercel's nameservers (easiest, Vercel manages everything)
- **Option B:** Add a CNAME record pointing to `cname.vercel-dns.com`

If this feels confusing, use this prompt:

```
I bought the domain myapp.com on Cloudflare. Walk me through
connecting it to my Vercel deployment, step by step. Tell me
exactly what to click and what to type.
```

### Step 4: SSL Is Automatic

Once your domain is connected, Vercel automatically generates an SSL certificate. Your site works with `https://` -- the little padlock in the browser. You don't need to do anything.

---

## 8. The Deployment Checklist

Before going live, run through this list. You can hand this directly to Claude:

```
Run through this deployment checklist for my app. Check each item
and tell me what needs fixing:

1. App works locally with no errors in the browser console
2. All API keys are in .env, not hardcoded in any file
3. .env is in .gitignore
4. All Supabase tables have RLS policies enabled
5. Auth works: can sign up, log in, and log out
6. Protected pages redirect to login when not authenticated
7. Mobile responsive: test at 375px width
8. Forms actually submit and save data to the database
9. No console.log statements that print sensitive data
10. Meta tags are set: title, description, and OG image for social sharing
11. Favicon is set
12. Environment variables are configured in Vercel (not just local .env)
```

Claude checks each one and gives you a pass/fail report. Fix what fails. Deploy with confidence.

### The Meta Tags Prompt

Item 10 is easy to forget but important. When someone shares your link on Slack, LinkedIn, or Twitter, the meta tags control what people see -- the title, description, and preview image.

```
Add proper meta tags to my app:
- Title: [your app name]
- Description: [one sentence about what it does]
- OG image: [URL to an image, or ask Claude to create a placeholder]

Make sure these tags work for Twitter, LinkedIn, and Slack previews.
```

---

## 9. Adding Analytics

Your app is live. People are using it. But how many people? Where are they coming from? Which pages do they visit?

### Option 1: Plausible (Recommended)

Plausible is privacy-friendly, lightweight, and simple. No cookie banners needed (it doesn't use cookies). Perfect for the EU/GDPR.

1. Sign up at [plausible.io](https://plausible.io) (free trial, then $9/month)
2. Add your domain
3. Get the script tag

```
Add Plausible analytics to my app. My Plausible domain is myapp.com.
Add the script tag to the head of every page. Make sure it loads
on all routes.
```

### Option 2: Google Analytics (GA4)

Free. More features. More complex. Requires a cookie consent banner in the EU.

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a property for your site
3. Get your Measurement ID (starts with `G-`)

```
Add Google Analytics to my app. My measurement ID is G-XXXXXXXXXX.
Add the script to the head of every page. Also add a simple cookie
consent banner at the bottom of the page that appears on first visit.
```

### Option 3: No Analytics (For Internal Tools)

If it's an internal tool for your team, you probably don't need analytics. Skip it.

---

## 10. The CLAUDE.md for Database Projects

Once you've set up Supabase, auth, and deployment, add this to your project's CLAUDE.md so Claude stays consistent across sessions:

```markdown
## Database
Supabase project: [your project name]
All database operations use the Supabase JavaScript client.
Never write raw SQL in the application code -- use the Supabase query builder.
Environment variables: SUPABASE_URL, SUPABASE_ANON_KEY in .env.

## Tables
- products: id, name, price, description, stock_count, created_at
- orders: id, customer_email, product_id, quantity, total_price, status, created_at
- leads: id, email, name, source, created_at

## Auth
Use Supabase Auth for all authentication. Do not build custom auth.
Do not use JWT manually. Do not create your own session management.
Google sign-in is enabled. Magic link is enabled.
Redirect to /dashboard after login.
Redirect to /login if unauthenticated user visits a protected page.

## Deployment
Hosted on Vercel. Auto-deploys from the main branch on GitHub.
Environment variables are set in Vercel dashboard.
Domain: [your domain]

## Security Rules
- All tables must have RLS enabled
- .env must be in .gitignore
- No API keys in code -- only environment variables
- No console.log of sensitive data
```

This is your project's memory. Every time you open Claude Code, it reads this file and knows exactly how your project works. No re-explaining, no drift.

---

## 11. Common Mistakes (And How to Avoid Them)

### Mistake 1: Hardcoding API Keys

You paste your Supabase key directly into a file instead of using `.env`. It works locally. Then you push to GitHub and your key is now public.

**Fix:**

```
Scan my entire project for hardcoded API keys, secrets, tokens,
or credentials. If you find any, move them to .env and replace
with environment variable references.
```

### Mistake 2: Forgetting Environment Variables in Vercel

Your app works perfectly on your laptop. You deploy to Vercel. It breaks. The error says something about "undefined" or "missing key."

You forgot to add your `.env` values to Vercel's dashboard. Your laptop has the `.env` file. Vercel doesn't -- it has its own environment variables that you set in the dashboard.

**Fix:** Go to your Vercel project, Settings, Environment Variables, and add each key-value pair from your `.env` file.

### Mistake 3: No RLS on Supabase Tables

You create tables and everything works. You deploy. Someone finds your Supabase URL and anon key (they're in your browser's JavaScript -- that's by design), and now they can read or write anything.

**Fix:** Always set up RLS before deploying. Use the security review prompt from Section 3.

### Mistake 4: Building Auth from Scratch

Claude is happy to build you a login system with password hashing, JWT tokens, session management, and password reset flows. Don't let it. Custom auth is the #1 source of security vulnerabilities in web apps.

**Fix:** Put the auth rule in CLAUDE.md. Use Supabase Auth. Let the professionals handle security.

### Mistake 5: Deploying Before Testing on Mobile

60% or more of web traffic is mobile. You test on your laptop, everything looks great. You share the link. Someone opens it on their phone. It's broken -- text overlapping, buttons unreachable, forms unusable.

**Fix:**

```
Open my app and check every page at mobile width (375px).
Fix any layout issues: overlapping text, buttons that are too small
to tap, forms that overflow, horizontal scrolling, text that's
too small to read. Make sure everything works on mobile.
```

### Mistake 6: Not Checking That Forms Actually Save Data

Your form looks beautiful. The submit button has a nice hover effect. But when someone actually submits it... nothing happens. The form doesn't connect to the database. Or it connects but the RLS policy blocks the insert.

**Fix:**

```
Test every form in my app. Submit test data and verify it appears
in the Supabase database. Check that success/error messages
display correctly. Check that validation works (required fields,
email format, etc.).
```

---

## 12. Quick Wins

Six prompts that give you disproportionate results. Copy-paste these.

### 1. Create a Database from Plain English

```
Create Supabase tables from this description:

I run an online store that sells candles. I need to track:
- My products (name, price, scent, size, how many in stock)
- Customer orders (who ordered, what they ordered, how many,
  total price, order status, shipping address)
- Email subscribers (email, when they signed up, which page
  they signed up from)

Create the tables with proper relationships between them.
Add RLS policies: products are publicly readable, orders are
private to the customer, email subscribers can only be inserted
(not read) from the app.
```

### 2. Add Auth to an Existing App

```
Add Supabase Auth to my existing app. I want:
- Sign-up page with email/password and Google sign-in
- Login page with the same options
- After login, redirect to /dashboard
- Logout button in the header
- Protect the /dashboard and /admin routes -- redirect
  to /login if not authenticated
```

### 3. Deploy and Go Live

```
Help me deploy this to Vercel:
1. Check that .gitignore excludes .env and node_modules
2. Create a GitHub repository and push my code
3. Tell me the exact steps to do in Vercel's dashboard
4. List all environment variables I need to add in Vercel
5. After deployment, verify the live URL works
```

### 4. Add a Custom Domain

```
I bought the domain myproduct.com on Cloudflare. My app is deployed
on Vercel at my-app.vercel.app. Walk me through connecting the
domain step by step. Tell me exactly what to click and type in
both Cloudflare and Vercel.
```

### 5. Build an Admin Dashboard

```
Build an admin page at /admin that shows:
1. A table of all products with edit and delete buttons
2. An "Add Product" button that opens a form
3. A table of recent orders (last 50) with status
4. A count of total orders, revenue this month, and new
   subscribers this week
Only accessible to logged-in users whose email matches
my admin email list.
```

### 6. Security Audit Before Launch

```
Audit my app for security before I deploy:
1. Check for hardcoded API keys or secrets
2. Verify .env is in .gitignore
3. Check all Supabase tables have RLS enabled
4. Review RLS policies for overly permissive rules
5. Check that auth is properly protecting all private routes
6. Look for console.log statements with sensitive data
7. Check that forms validate input before saving
Give me a pass/fail for each item and fix anything that fails.
```

---

## 13. Workshop Exercise: Make It Real

Take any project you built in a previous module -- a landing page, a tool, a generator -- and make it real. Follow these steps:

### Part 1: Add a Database (15 minutes)

1. Set up Supabase (account, project, keys)
2. Tell Claude what data you want to save
3. Connect your forms to the database
4. Verify data appears in the Supabase dashboard

### Part 2: Add Authentication (15 minutes)

1. Add email + Google sign-in with Supabase Auth
2. Create a protected dashboard page
3. Test: sign up, log in, log out, try visiting the dashboard without being logged in

### Part 3: Deploy (10 minutes)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables in Vercel
4. Deploy and test the live URL

### Part 4: Polish (10 minutes)

1. Run the deployment checklist
2. Test on mobile
3. Add meta tags for social sharing
4. Share the URL with someone and ask them to use it

By the end of this exercise, you have a live app on the internet that saves data, has user accounts, and works on any device. You built it without writing a single line of code yourself.

---

## 14. The Stack Summary

Here's what you're using and why. Pin this for reference.

```
Frontend:     Next.js + Tailwind CSS
              (or plain HTML for simple one-page tools)

Database:     Supabase (PostgreSQL under the hood, but you
              never need to know that)

Auth:         Supabase Auth (email, magic link, Google sign-in)

Hosting:      Vercel (auto-deploys from GitHub)

Domains:      Any registrar (Cloudflare, Namecheap) → Vercel DNS

Analytics:    Plausible (privacy-friendly) or GA4 (free, more complex)

Secrets:      .env files locally, Vercel environment variables
              in production -- never in code

Version       GitHub (your code lives here, Vercel watches it
control:      for changes)
```

Every tool on this list has a generous free tier. You can run a production app serving real customers without paying anything until you have meaningful traffic.

---

## 15. What You Can Build Now

With database, auth, and deployment under your belt, here's what's unlocked:

- **A waitlist page** that actually collects and stores emails
- **A customer portal** where buyers can log in and see their orders
- **An internal dashboard** showing live sales data from your database
- **A feedback tool** where customers submit reviews that save to a table
- **A simple SaaS tool** with user accounts and saved preferences
- **An admin panel** to manage products, orders, and content without touching the database directly

You went from "I can build things that run on my laptop" to "I can build things that run on the internet." That's a massive shift. Every module from here builds on this foundation.

### Your Takeaway Files

This module's `templates/` folder has three files:

- **env-example** -- a `.env` template with all common environment variables (Supabase, Stripe, Google) pre-formatted with placeholder values. Copy it as `.env`, fill in your keys.
- **deploy-checklist.md** -- 12 items to check before going live. Environment vars, auth, mobile, meta tags, security. No missed steps.
- **claude-md-database-addition.md** -- paste this into your CLAUDE.md when your project has a database. Tells Claude about your tables, auth rules, and deployment settings.
