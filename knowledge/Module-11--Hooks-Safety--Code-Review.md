# Module 11: Hooks, Safety & Code Review

You can't read code. That's fine. Most ecommerce founders can't. But here's the problem: when you vibe code with Claude, it writes hundreds of lines in seconds. Lines you don't fully understand. Lines that might contain your Stripe API key in plain text. Lines that might delete your entire Git history with one wrong command.

Research backs this up. AI-generated code has 1.7x more bugs and 2.74x more security vulnerabilities than code written by human developers. Not because the AI is dumb -- but because it optimizes for "get it working" and you're not in a position to catch what it missed.

You don't need to learn to read code. You need guardrails.

This module gives you three automatic safety nets and a simple review process. By the end, you'll have hooks that catch dangerous commands before they execute, a commit scanner that blocks leaked secrets, and a 5-point review checklist you can run on anything Claude builds.

---

## 1. What Are Hooks?

Hooks are small scripts that run automatically when Claude Code does certain things. You don't trigger them. You don't think about them. They just run in the background, every time.

Think of them like the safety features in your car. You don't think about ABS until you slam the brakes on a wet road. You don't think about the seatbelt until something goes wrong. But they're always there, always on, always protecting you.

Hooks work the same way. Claude is about to force push your code? The hook blocks it before it happens. Claude is about to commit a file with your Stripe secret key in it? The hook catches it and stops the commit. You don't see any of this unless something actually gets blocked.

### Where Do They Live?

Hooks are defined in one file: `.claude/settings.json` in your project folder. The actual scripts live in `.claude/hooks/`. You set them up once and forget about them.

### Three Types You Need

1. **Git safety hook** -- prevents destructive Git operations. Force pushes, hard resets, branch deletions. The stuff that can wipe out your work permanently.
2. **Commit quality hook** -- scans your code before every commit. Catches debug statements, console.logs, hardcoded passwords, API keys. The stuff that shouldn't end up in your codebase.
3. **Cost tracker hook** -- logs every session so you can see what you're spending. The stuff that prevents a surprise bill.

That's it. Three scripts. Let's install them.

---

## 2. Installing the Safety Hooks

This is a step-by-step walkthrough. You can either copy these files manually or tell Claude Code to create them for you. Both work.

### Step 1: Create the Hooks Folder

Tell Claude:

> "Create a folder at .claude/hooks/ in my project"

Or do it yourself -- just make sure `.claude/hooks/` exists in your project root.

### Step 2: Git Safety Hook

This is the most important one. It blocks three commands that can permanently destroy your work:

- **Force push** (`git push --force`) -- overwrites the remote history. If your local code is broken, you just broke the remote copy too. No undo.
- **Hard reset** (`git reset --hard`) -- deletes all uncommitted work. Every change you haven't committed is gone. Permanently.
- **Force branch delete** (`git branch -D`) -- deletes a branch even if it has unmerged work. Safe delete (`-d`) checks first. Force delete doesn't.

Here's the script:

```bash
#!/bin/bash
# .claude/hooks/git-safety.sh
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Block force pushes
if echo "$COMMAND" | grep -qE 'git\s+push\s+.*--force|git\s+push\s+-f'; then
  echo '{"decision":"block","reason":"Force push blocked. This can destroy remote history. Use --force-with-lease if you really need to."}'
  exit 0
fi

# Block hard resets
if echo "$COMMAND" | grep -qE 'git\s+reset\s+--hard'; then
  echo '{"decision":"block","reason":"Hard reset blocked. This deletes uncommitted work permanently."}'
  exit 0
fi

# Block branch deletion
if echo "$COMMAND" | grep -qE 'git\s+branch\s+-D'; then
  echo '{"decision":"block","reason":"Force branch delete blocked. Use -d for safe delete."}'
  exit 0
fi

echo '{"decision":"allow"}'
```

What's happening here: every time Claude tries to run a Bash command, this script checks if it's one of the dangerous ones. If yes, it blocks it and tells you why. If no, it lets it through. You never see it unless it catches something.

### Step 3: Commit Quality Hook

This one runs every time Claude tries to commit code. It checks two things:

1. **Debug statements** -- `console.log`, `debugger`, `TODO`, `FIXME`, `HACK`. These are developer notes that shouldn't ship to production. They're like leaving scaffolding on a finished building.
2. **Hardcoded secrets** -- API keys, passwords, secrets typed directly into the code instead of stored safely in environment variables. This is the big one. If a Stripe live key ends up in your code and that code goes to GitHub, anyone can find it and charge your account.

```bash
#!/bin/bash
# .claude/hooks/commit-quality.sh
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Only check git commit commands
if ! echo "$COMMAND" | grep -qE 'git\s+commit'; then
  echo '{"decision":"allow"}'
  exit 0
fi

# Get staged files
STAGED=$(git diff --cached --name-only 2>/dev/null)
if [ -z "$STAGED" ]; then
  echo '{"decision":"allow"}'
  exit 0
fi

ISSUES=""

# Check for debug statements
for file in $STAGED; do
  if [ -f "$file" ]; then
    if grep -nE 'console\.log|debugger|TODO|FIXME|HACK' "$file" 2>/dev/null | head -5 > /tmp/hook_issues; then
      if [ -s /tmp/hook_issues ]; then
        ISSUES="$ISSUES\n$file has debug statements or TODOs:\n$(cat /tmp/hook_issues)"
      fi
    fi
  fi
done

# Check for hardcoded secrets
for file in $STAGED; do
  if [ -f "$file" ]; then
    if grep -nEi 'sk_live|api_key\s*=\s*["\x27][a-zA-Z0-9]|password\s*=\s*["\x27][^$]|secret\s*=\s*["\x27][a-zA-Z0-9]' "$file" 2>/dev/null | head -3 > /tmp/hook_secrets; then
      if [ -s /tmp/hook_secrets ]; then
        ISSUES="$ISSUES\n!! POSSIBLE SECRET in $file:\n$(cat /tmp/hook_secrets)"
      fi
    fi
  fi
done

if [ -n "$ISSUES" ]; then
  echo "{\"decision\":\"block\",\"reason\":\"Commit quality issues found:$ISSUES\"}"
  exit 0
fi

echo '{"decision":"allow"}'
```

When this blocks a commit, it tells you exactly which file and which line has the problem. You (or Claude) fix it, then commit again.

### Step 4: Cost Tracker Hook

Claude Code bills by tokens. Long sessions with lots of context use more tokens. This hook logs every session so you can spot trends and catch runaway costs early.

```bash
#!/bin/bash
# .claude/hooks/cost-tracker.sh
INPUT=$(cat)
COST_LOG=".claude/cost-log.csv"

# Extract session data
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
SESSION_ID=$(echo "$INPUT" | jq -r '.session_id // "unknown"')

# Append to log
if [ ! -f "$COST_LOG" ]; then
  echo "timestamp,session_id" > "$COST_LOG"
fi
echo "$TIMESTAMP,$SESSION_ID" >> "$COST_LOG"

echo '{"decision":"allow"}'
```

This creates a simple CSV file at `.claude/cost-log.csv`. Nothing fancy. Just a record of when you used Claude Code and which session it was. Over time, you'll see patterns -- which days you're spending the most, which projects eat the most budget.

### Step 5: Wire Them Up

All three hooks need to be registered in `.claude/settings.json`. This tells Claude Code when to run each one.

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "bash .claude/hooks/git-safety.sh" },
          { "type": "command", "command": "bash .claude/hooks/commit-quality.sh" }
        ]
      }
    ],
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          { "type": "command", "command": "bash .claude/hooks/cost-tracker.sh" }
        ]
      }
    ]
  }
}
```

What this says:

- **PreToolUse + Bash** -- before Claude runs any Bash command, check both the git safety hook and the commit quality hook. This catches dangerous commands and bad commits before they happen.
- **Stop** -- when a session ends, run the cost tracker to log it.

### The One-Liner Install

If you don't want to create each file manually, tell Claude:

> "Create these three hook scripts in .claude/hooks/ and the settings.json configuration. Here are the scripts: [paste the scripts above]. Test each one to make sure they work."

Claude will create the files, set the permissions, and verify they run correctly.

---

## 3. Code Review for Non-Developers

You can't read code line by line. That's fine. You don't need to. But you do need to check five things after every build. Think of this like a walk-through inspection of a building. You're not checking the wiring behind the walls -- you're checking that the doors open, the lights turn on, and nobody left a window unlocked.

### The 5-Point Check

Run this after every significant build or change. It takes 2 minutes.

**1. Does it work?**

Run it. Click everything. Fill out every form. Try to break it. Enter a phone number where it asks for an email. Leave required fields blank. Go through every flow a customer would.

If something breaks, screenshot it and paste it into Claude Code. You don't need to explain what went wrong technically. Just show it.

**2. Is data safe?**

Ask Claude:

> "Are there any API keys, passwords, or secrets hardcoded in my files? Check all files in this project."

If Claude finds anything, the fix is always the same: move it to a `.env` file and reference it as a variable. If you don't know how, ask Claude to do it.

**3. Are secrets hidden?**

Ask Claude:

> "Is my .env file in .gitignore? Show me the .gitignore contents."

Your `.env` file should never, ever end up on GitHub. The `.gitignore` file tells Git which files to skip. If `.env` isn't listed in there, your secrets will be pushed to the internet the next time you deploy.

**4. Is it doing what I asked?**

Ask Claude:

> "Review the code you just wrote. Does it match my original spec? List any features you added that I didn't ask for."

Claude sometimes adds extras. A login page you didn't request. An admin panel "just in case." Error pages with custom animations. These aren't bad, but they add complexity. If you didn't ask for it and don't need it, remove it.

**5. Is it doing anything I didn't ask for?**

This is the paranoia check. Ask Claude:

> "List everything this code does. Every API call, every data storage operation, every external connection. I want to know about any behavior I didn't explicitly request."

You're looking for anything unexpected. Does it send data somewhere? Does it store something you didn't know about? Does it connect to a service you never mentioned? Usually the answer is "no, it only does what you asked." But the one time it isn't, you'll be glad you checked.

### Using Claude as a Full Reviewer

For a deeper review, use this prompt:

> "Review the code in [file or folder] for:
> 1. Security issues -- exposed secrets, SQL injection, XSS
> 2. Unnecessary complexity -- is anything overengineered?
> 3. Missing error handling -- what happens when things go wrong?
> 4. Consistency -- does it match the patterns in the rest of the project?
>
> Give me a summary with severity ratings: critical, warning, info."

This gives you a structured report. Fix anything marked critical immediately. Warnings are worth addressing before you launch. Info items are nice-to-know.

---

## 4. Cost Management

Claude Code can get expensive if you're not paying attention. Here's how to keep it under control.

**Why sessions get expensive:**

Every message in a conversation adds to the context. The more context Claude is holding, the more tokens each response costs. A session where you've been going back and forth for an hour costs significantly more per message than a fresh one.

**The /clear habit:**

When you finish a task, type `/clear` before starting the next one. This resets the context. It's like closing a browser tab when you're done with it. Fresh context means lower cost AND better responses -- Claude isn't trying to remember 45 minutes of unrelated conversation.

**Rule of thumb:** If a single session costs more than around 5 euros, you're probably doing too much in one conversation. Break it into smaller tasks.

**Set a budget alert:**

Go to your Anthropic dashboard and set a monthly spending limit. This isn't about being cheap -- it's about not getting surprised. Most ecommerce founders using Claude Code daily spend between 50-150 euros per month. If you're consistently above that, you're either running very long sessions or asking Claude to process very large codebases.

**Check mid-session:**

If you're deep in a build and want to know where you stand:

> "How much context have I used in this session?"

This won't give you a dollar amount, but it tells you how close you are to the limit. If it's high, consider finishing the current task and starting fresh with `/clear`.

---

## 5. Quick Wins

Things you can do right now, in the next 10 minutes:

1. **Install all three hooks.** Copy the `settings.json` config from Step 5 above and create the three script files. Two minutes.

2. **Run the 5-point check on your current project.** Just go through the five questions. You'll either feel good about your codebase or find something important.

3. **Scan for secrets.** Tell Claude: "Check my entire project for hardcoded secrets or API keys." Do this on every project you've built so far.

4. **Review recent changes.** Tell Claude: "Review the last 5 files you modified. Are there any security issues, debug statements, or hardcoded secrets?"

5. **Check your context usage.** Ask Claude: "How much context have I used in this session?" If it's high, this is your reminder to `/clear` more often.

---

## 6. Workshop Exercise

Time to put this into practice. Follow these steps in order.

### Part 1: Install the hooks

1. Open your project in Claude Code
2. Tell Claude: "Create a .claude/hooks/ folder with three hook scripts: git-safety.sh, commit-quality.sh, and cost-tracker.sh. Then create .claude/settings.json to wire them up." Paste the scripts and config from this module.
3. Verify the hooks are installed: "Show me the contents of .claude/settings.json"

### Part 2: Test the git safety hook

4. Tell Claude: "Try to run git push --force" -- it should be blocked
5. Tell Claude: "Try to run git reset --hard" -- it should be blocked
6. Tell Claude: "Try to run git branch -D test" -- it should be blocked

If all three are blocked with clear messages, your git safety hook works.

### Part 3: Run the 5-point code review

7. Pick a project you've built with Claude Code (or use your current project)
8. Go through all five checks:
   - Run the app and click everything
   - Ask Claude to scan for hardcoded secrets
   - Check that .env is in .gitignore
   - Ask Claude if the code matches your spec
   - Ask Claude to list all behaviors and external connections
9. Fix anything Claude finds

### Part 4: Lock it in

10. Tell Claude: "Review the last 5 files you modified. Are there any issues?"
11. If issues are found, fix them and commit
12. Run `/clear` to start fresh

### What success looks like

After this exercise, you should have:

- Three hook scripts in `.claude/hooks/`
- A `settings.json` that wires them up
- Confidence that destructive git commands are blocked
- A clean bill of health from the 5-point review (or a list of fixes you just made)

You may not understand every line of code in your project. But you now have automatic guardrails that catch the dangerous stuff, and a simple review process for everything else. That's what safety looks like when you vibe code.

### Shortcut: Pre-Built Files

All three hook scripts, the settings.json, and the code review checklist are ready to copy in this module's `templates/` folder:

- `templates/git-safety.sh` -- blocks force pushes, hard resets, branch deletions
- `templates/commit-quality.sh` -- catches secrets and debug code
- `templates/cost-tracker.sh` -- logs session costs to CSV
- `templates/settings.json` -- wires up all three hooks
- `templates/code-review-checklist.md` -- the 5-point review as a reusable document

Copy them into your project's `.claude/` folder and you're done in 30 seconds.
