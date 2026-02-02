# Python Notebooks Walkthrough

## Welcome to Your Development Environment

Your Codespace is now running! You should see:
- **File explorer** (left side) — Your project files
- **Editor** (center) — Where you'll work
- **Terminal** (bottom) — Command line access

This is **VSCode in your browser** — the same tool professional developers use.

## The Learning Path

You'll work through 5 notebooks, each building on the last:

1. **Functions** — Reusable blocks of code
2. **Loops** — Processing multiple items
3. **APIs** — Connecting to external services
4. **Structured Data** — Working with JSON
5. **Cards** — A complete project

Each notebook follows the **Vibe → Run → Unpack → Extend** pattern.

## What Makes These Notebooks Different?

Unlike traditional tutorials, these notebooks:
- ✅ Start with working code (from AI)
- ✅ Focus on verification and testing
- ✅ Explain concepts **after** you've seen them work
- ✅ Encourage iteration and experimentation
- ✅ Build real tools you might actually use

## Notebook 1: Functions

**Location:** `apps/py/workshop/01a-functions-start.ipynb`

### What You'll Learn
- What a function is (by making one)
- How arguments work (by passing them)
- What return values mean (by using them)

### Why Functions Matter
Functions are the **atoms of programming** — small, reusable pieces that you combine to build bigger things.

Without functions, you'd have to:
- Rewrite the same code over and over
- Make it harder to fix bugs (change it everywhere)
- Lose the ability to abstract and compose

With functions, you can:
- Write once, use everywhere
- Build complex behavior from simple pieces
- Test and verify incrementally

### The Pattern
1. **Vibe:** Ask AI for a word-counting function
2. **Run:** Test it on Genesis 1
3. **Verify:** Check that the count makes sense
4. **Unpack:** Understand what `def`, arguments, and `return` mean
5. **Extend:** Modify it to print a message

### Why This Order?
Traditional teaching says: "Learn what a function is, then write one."

We say: "See a function work, then understand what you just used."

The motivation is **intrinsic** — you've already built something useful, now you want to understand it better.

### Time: ~10 minutes

## Notebook 2: Loops

**Location:** `apps/py/workshop/02a-loops-start.ipynb`

### What You'll Learn
- How to process multiple texts automatically
- What a loop is (for, while)
- How to build up results iteratively

### Why Loops Matter (The Tipping Point)

This is where coding becomes **more powerful than ChatGPT**.

If you want to analyze **one** text, ChatGPT is perfect:
- Paste the text
- Ask your question
- Get an answer

But what if you want to analyze:
- 10 texts?
- 100 texts?
- Every chapter of the Bible?
- Every play by Shakespeare?

ChatGPT can't do this (well). But a simple loop can:

```python
for text in all_texts:
    result = analyze(text)
    save(result)
```

**This is why coding matters** — automation at scale.

### The Pattern
1. **Vibe:** Ask AI for code that processes multiple Bible chapters
2. **Run:** Watch it analyze all of Genesis
3. **Verify:** Spot-check a few results
4. **Unpack:** Understand how `for` loops work
5. **Extend:** Add filtering or sorting

### The "ChatGPT Can't Do This" Moment

This is the notebook where students realize: **"Oh, this is why I'd learn to code."**

It's not about replacing ChatGPT — it's about doing things ChatGPT **can't** do.

### Time: ~10 minutes

## Notebook 3: APIs

**Location:** `apps/py/workshop/03a-api-start.ipynb`

### What You'll Learn
- How to call external services from your code
- What an API is (and why they matter)
- How to work with API keys and authentication

### Why APIs Matter

An API (Application Programming Interface) is how your code talks to:
- Language models (OpenAI, Anthropic, Google)
- Databases (Supabase, Firebase)
- Services (Stripe, Twilio, SendGrid)
- Data sources (weather, stocks, news)

**APIs are how you connect to the world.**

Without APIs, your code is isolated.
With APIs, your code becomes a **conductor** orchestrating multiple services.

### Real-World Example

Instead of:
1. Copy text from website
2. Paste into ChatGPT
3. Copy result
4. Paste into another tool
5. Repeat 100 times

You can:
```python
for item in dataset:
    result = ai_api.analyze(item)
    database_api.save(result)
```

**This is automation of your entire workflow.**

### The Pattern
1. **Vibe:** Ask AI for code that calls an AI API (Gemini, OpenAI, etc.)
2. **Run:** Send a text for analysis
3. **Verify:** Check the API response
4. **Unpack:** Understand requests, responses, and authentication
5. **Extend:** Process multiple texts via API

### The API Keys Moment

This is where students learn:
- Why API keys exist (security + billing)
- How to keep them secret (environment variables)
- What rate limits mean (real-world constraints)

### Time: ~10 minutes

## Notebook 4: Structured Data

**Location:** `apps/py/workshop/04a-structured-start.ipynb`

### What You'll Learn
- How to work with JSON (the language of APIs)
- Data structures (lists, dictionaries)
- How to transform and reshape data

### Why Structured Data Matters

Most real-world data isn't plain text. It's:
- JSON from APIs
- CSV from spreadsheets
- XML from legacy systems
- Databases with tables and relations

If you can only work with strings, you're limited.

If you can work with **structured data**, you can:
- Extract what you need
- Transform formats
- Combine multiple sources
- Build complex analyses

### The Pattern
1. **Vibe:** Ask AI for code that parses JSON data
2. **Run:** Process a sample JSON file
3. **Verify:** Check that extraction works
4. **Unpack:** Understand dictionaries, lists, and nested data
5. **Extend:** Transform data into different formats

### The "Real Data Is Messy" Moment

This notebook introduces:
- Missing data
- Nested structures
- Format inconsistencies

Students learn that AI-generated code **needs verification** because real-world data is unpredictable.

This reinforces: **Verification is not optional.**

### Time: ~10 minutes

## Notebook 5: Cards (Final Project)

**Location:** `apps/py/workshop/05a-cards-start.ipynb`

### What You'll Build

A complete project that:
- Analyzes multiple texts
- Calls an AI API
- Structures results as JSON
- Generates visual "cards" for each text

This combines everything you've learned.

### Why This Matters

This isn't a toy example. This is a **real tool** you could:
- Use for research (analyze literary texts)
- Adapt for teaching (create study materials)
- Extend for a project (add web interface)
- Share with others (publish to GitHub)

### The Pattern
1. **Vibe:** Ask AI for a complete pipeline
2. **Run:** Process a small dataset
3. **Verify:** Check each stage of the pipeline
4. **Unpack:** Understand how the pieces fit together
5. **Extend:** Add your own features

### The Integration Challenge

This is where students experience:
- "Wait, this broke"
- "The API returned an error"
- "The output format is wrong"

**This is the real learning moment.**

Not when everything works, but when it **doesn't** — and you have to:
1. Read the error message
2. Isolate the problem
3. Ask AI for help (with context)
4. Verify the fix
5. Iterate until it works

### Time: ~20 minutes

## The Pedagogical Design

### Why This Sequence?

The notebooks build up **complexity gradually**:

| Notebook | Concept | Why Now |
|----------|---------|---------|
| 1. Functions | Abstraction | Basic building block |
| 2. Loops | Repetition | Unlock automation |
| 3. APIs | Integration | Connect to world |
| 4. Data | Structure | Handle real formats |
| 5. Cards | Synthesis | Put it all together |

Each notebook:
- Assumes nothing from before (can be done independently)
- But builds on previous concepts (reinforces learning)
- Ends with a complete, working artifact

### The "Start" and "Complete" Files

Each notebook has two versions:
- **`01a-functions-start.ipynb`** — Your starting point (fill in code)
- **`01b-functions-complete.ipynb`** — Completed example (if you get stuck)

This gives students:
- Freedom to experiment (can't "break" anything)
- Safety net (reference if stuck)
- Comparison point (see one solution)

### The Productive Failure Design

The notebooks are designed to create **productive failure**:
1. You're given a problem that's too hard (initially)
2. AI helps you solve it (generates code)
3. You encounter real issues (bugs, errors, confusion)
4. You learn targeted concepts (on-demand, motivated)

This is **not** failure in a negative sense. It's:
- Intentional struggle
- Immediate feedback
- Concepts introduced **when needed**
- Building resilience and debugging skills

### The Verification Emphasis

Every notebook emphasizes:
- **Before running:** What will I check?
- **While running:** What's happening?
- **After running:** Did it work as expected?

This builds the habit:
> Trust is earned through verification, not vibes.

## Working in Jupyter Notebooks

### Basic Commands

- **Run a cell:** `Shift + Enter`
- **Add cell below:** `B` (in command mode)
- **Delete cell:** `D D` (in command mode)
- **Undo cell deletion:** `Z` (in command mode)
- **Change to markdown:** `M` (in command mode)
- **Change to code:** `Y` (in command mode)

### Command Mode vs Edit Mode

- **Edit mode** — Typing in a cell (green border)
- **Command mode** — Navigating between cells (blue border)

Press `Esc` to enter command mode.
Press `Enter` to enter edit mode.

### Pro Tips

1. **Run cells in order** (top to bottom) — They depend on each other
2. **Don't be afraid to experiment** — You can always reload the file
3. **Add your own cells** — Try variations, test ideas
4. **Use markdown cells for notes** — Capture your learning

## Getting Help

### When Code Doesn't Run

1. **Read the error message** (it usually tells you what's wrong)
2. **Copy the error to Gemini/ChatGPT** (ask for explanation)
3. **Check the complete notebook** (`01b-functions-complete.ipynb`)
4. **Ask the instructor** (we're here to help!)

### When You Don't Understand Something

1. **Ask AI to explain** ("Explain this code like I'm new to programming")
2. **Look at the complete notebook** (see a working example)
3. **Experiment** (change values, see what happens)
4. **Ask a neighbor** (often faster than waiting)

### When You Want to Go Further

1. **Try the "Extend It" challenges** (at the end of each notebook)
2. **Apply to your own data** (analyze texts you care about)
3. **Combine notebooks** (use functions from multiple notebooks together)
4. **Ask "What if..."** (and prompt AI to help)

## The Meta-Learning

As you work through these notebooks, notice:

### What AI Does Well
- Generating boilerplate code
- Providing working examples
- Explaining concepts
- Suggesting approaches

### What AI Doesn't Do
- Understand your specific goals
- Know your data
- Verify correctness
- Make judgment calls

### What YOU Bring
- Domain knowledge (you know what matters in your texts)
- Critical thinking (does this answer make sense?)
- Verification practices (from scholarly training)
- Iteration and refinement (keep improving)

**This is the hybrid skill set** — human + AI working together.

## Time Management

Here's a suggested pace:

| Time | Activity |
|------|----------|
| 0:00 - 0:10 | Notebook 1: Functions |
| 0:10 - 0:20 | Notebook 2: Loops |
| 0:20 - 0:30 | Notebook 3: APIs |
| 0:30 - 0:40 | Notebook 4: Structured Data |
| 0:40 - 1:00 | Notebook 5: Cards (final project) |

**But:** Go at your own pace. The notebooks will be available after the workshop.

## What If You Get Stuck?

Getting stuck is **normal and expected**. It's part of the learning process.

When you're stuck:
1. ✅ You're learning where the boundaries are
2. ✅ You're developing debugging skills
3. ✅ You're building resilience
4. ✅ You're finding out what you need to learn

**Being stuck is not failing. It's exploring.**

## What Success Looks Like

By the end of these notebooks, you should:
- ✅ Have working code in your repository
- ✅ Understand (roughly) what each notebook does
- ✅ Be able to modify code with AI assistance
- ✅ Know how to verify and test results
- ✅ Feel capable of tackling your own projects

You do **NOT** need to:
- ❌ Memorize Python syntax
- ❌ Understand every line of code
- ❌ Be able to write code from scratch (yet)
- ❌ Know all the theory

## The Handoff Point

These notebooks are designed to get you to a **handoff point**:

You know enough to:
- Specify what you want (clear prompts)
- Verify what you get (testing and checks)
- Iterate toward working (debugging and refinement)
- Decide when to learn more (targeted learning)

From here, you can:
- Keep using AI assistance (perfectly valid)
- Learn traditionally (if/when you need to)
- Hybrid approach (usually best)

## Ready?

Open the first notebook:
```
apps/py/workshop/01a-functions-start.ipynb
```

And let's begin.

---

**Next:** [Next Steps & Resources →](04-next-steps.md)
