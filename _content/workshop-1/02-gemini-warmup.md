# Gemini Warmup: Your First Vibe Code

## What We're Doing (and Why)

While your Codespace builds, we're going to create working code in **under 5 minutes**.

This section demonstrates:
- How quickly AI can turn English into code
- What "vibe coding" feels like
- Why this approach is powerful (and what its limits are)

## Exercise 1: Word Frequency in Python

### The Prompt

Copy this prompt into Gemini:

```
Write me a Python script that:
1. Takes a text as input
2. Counts the frequency of each word
3. Displays the top 20 most common words
4. Ignores common words like "the", "a", "and"
5. Makes it case-insensitive

Use this text as an example:
[paste Genesis 1 from KJV Bible here]

Make it runnable in a simple Python environment.
```

### What Happens Next

Gemini will generate code in **seconds**.

🤯 **Take a moment to appreciate this:** What would have taken you hours (or days) to learn and write, the AI just created instantly.

### But Don't Run It Yet!

This is the critical moment where vibe coding differs from reckless coding.

**Before running ANY AI-generated code, ask:**
1. **Does this do what I asked?** (Read the code loosely)
2. **Are there any danger zones?** (File deletion? Network calls?)
3. **What will I check to verify it works?** (Known word counts?)

### Inspect the Code (Lightly)

You don't need to understand every line, but scan for:
- Does it look like it's processing text? ✓
- Does it have word counting logic? ✓
- Does it avoid common words ("stopwords")? ✓
- Does it do anything dangerous (delete files, access network)? ✗

**This is "selective reading"** — you're not reading for comprehension, you're reading for safety and sanity.

### Run It in Google Colab

1. **Ask Gemini:** "Open this in Google Colab"
2. **Gemini will give you a Colab link** (or you can create a new notebook at `colab.research.google.com`)
3. **Paste the code into a cell**
4. **Run it** (Shift+Enter or click the play button)

### Verify the Results

You should see word frequencies. Now verify:
- Is "God" near the top? (It should be — Genesis 1 mentions God frequently)
- Are common words like "the" filtered out? (They should be)
- Do the numbers seem reasonable? (Not millions, not zero)

**This is verification** — you're checking that reality matches expectation.

### What Just Happened?

You just:
1. **Specified** what you wanted (in English)
2. **Generated** code (via AI)
3. **Inspected** for safety (selective reading)
4. **Ran** and verified (checked results)
5. **Built trust** (incrementally, through testing)

This is the vibe coding workflow.

## Exercise 2 (Optional): Visualize It

If you're feeling confident, ask Gemini:

```
Now create a bar chart visualization of the top 15 words using matplotlib or plotly.
```

Gemini will:
- Add visualization code
- Import necessary libraries
- Generate a chart

Run it. See the chart. This is how you **iterate** — building on what works.

## Exercise 3 (Optional): Make It Interactive

Want to go further? Ask:

```
Create a simple React component that:
1. Takes a text input
2. Shows word frequency results
3. Highlights the searched word in the original text
```

Now you're building a **web interface** with AI assistance.

You could run this in CodeSandbox or StackBlitz (online React environments).

## Reflection: What Did We Just Learn?

### The Power

In **5-10 minutes**, you went from:
- Nothing
- → Working Python script
- → Data visualization
- → (Potentially) Interactive web app

This would have taken **days or weeks** to learn traditionally.

### The Limits

But notice what you **didn't** learn:
- How Python imports work
- What a dictionary data structure is
- How matplotlib generates charts
- React component lifecycle

**Is this a problem?**

It depends on what you're trying to do.

### When Vibe Coding Is Perfect

✅ **Quick prototypes** — Test an idea fast
✅ **One-off analysis** — Analyze a dataset you'll never touch again
✅ **Exploratory work** — Figure out what's even possible
✅ **Learning by doing** — Build motivation before learning theory

### When You Need to Go Deeper

❌ **Production systems** — Code that needs to be maintained
❌ **Complex debugging** — When things break in non-obvious ways
❌ **Performance tuning** — When it needs to run efficiently
❌ **Team projects** — When others need to understand your code

### The Hybrid Approach (What We're Teaching)

The best approach is usually:
1. **Vibe code first** (get something working)
2. **Verify thoroughly** (make sure it's correct)
3. **Unpack selectively** (understand what matters)
4. **Learn on demand** (when you need to modify or debug)

## Why Now Go to VSCode/Codespaces?

You might wonder: "If Gemini can do all this, why use VSCode?"

### What Gemini/ChatGPT Give You
- ✅ Instant results
- ✅ Conversational interface
- ✅ Great for exploration

### What They DON'T Give You
- ❌ Version control (history of changes)
- ❌ File management (organizing multiple files)
- ❌ Integration with real data sources
- ❌ Debugging tools
- ❌ Professional workflow
- ❌ Ability to run long processes
- ❌ Package management

### The Codespaces Advantage

When you move to VSCode/Codespaces, you get:
- **Real project structure** (multiple files, folders)
- **Git integration** (save history, collaborate)
- **Terminal access** (run any command)
- **Extensions** (AI assistants INSIDE your editor)
- **Debugging tools** (step through code, inspect variables)
- **Real-world workflow** (how professionals work)

Think of it this way:
- **Gemini** = Having a really smart friend you can text
- **Codespaces with Claude/Cursor** = Having that friend sitting next to you in your studio

## What About Claude Code and Other Tools?

You might hear about:
- **Claude Code** — AI assistant via command line
- **Cursor** — VSCode with AI built in
- **GitHub Copilot** — AI code completion in your editor
- **Aider** — AI pair programming in terminal

These tools bring AI **into your development environment**, which means:
- AI can see your whole project
- AI can make multi-file changes
- You can iterate faster
- You stay in a professional workflow

We won't use all of these today, but they're worth exploring later.

## The Gemini Authoring Note

One thing to watch: Gemini has incredible code generation capabilities, but:
- It can sometimes be overconfident
- It might generate code that works but isn't idiomatic
- It may not always use the latest library versions
- It requires clear, specific prompts

**This isn't a bug, it's a feature** — it forces you to be specific about what you want.

## Checkpoint: What You've Learned

Before moving to Codespaces, reflect on:

1. **Did you create working code?** Yes / No
2. **Did you verify it worked?** Yes / No
3. **Could you explain what it does (roughly)?** Yes / No
4. **Are you ready to go deeper?** Yes / No

If you answered "yes" to most of these, you're ready for the Python notebooks.

## One More Thing: The Discomfort Is Normal

If you feel:
- "This is too easy, I'm not really learning"
- "I don't understand what's happening"
- "This feels like cheating"

**Good.** That discomfort is you developing a new literacy.

Remember:
- Editors don't read every word before publication
- Drivers don't understand engine timing
- Statisticians don't implement algorithms from scratch

You're learning **operational competence under partial understanding** — and that's exactly right for this moment in history.

## What's Next?

Now that you've seen what's possible with pure AI generation, we're going to:
1. Work in a real development environment
2. Build understanding alongside working code
3. Learn verification and debugging practices
4. Create something you can maintain and extend

---

**Next:** [Python Notebooks Walkthrough →](03-python-notebooks.md)
