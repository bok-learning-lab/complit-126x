# Context Engineering

**Context engineering** is the practice of deliberately shaping what information an LLM receives — because the model has no memory, no persistent self, and starts completely fresh with every call.

If prompt engineering is choosing your words carefully, context engineering is choosing what's *in the room* when the conversation starts.

## The Fundamental Truth About LLMs

> **Every call to an LLM is a blank slate.**

This is hard to grasp because chat interfaces create a convincing illusion of continuity. When you say "now do the same for Exodus" and the model responds coherently, it *seems* like memory. But the model isn't remembering your earlier exchange — it's *reading* it, as new text, pasted invisibly into the prompt by the chat application. It's the difference between a person who recalls a conversation and a person who's been handed a transcript.

```
What seems to happen:         What actually happens:
─────────────────────         ─────────────────────
You: "Analyze Genesis"        Call 1: [system prompt + your message]
AI: "Sure..."                 → Response generated → Everything forgotten

You: "Now do Exodus"          Call 2: [system prompt + FULL transcript of
AI: "Following the same..."          Call 1 + your new message]
  ↑                             → Model reads transcript as fresh text
  Feels like memory               → Generates response → Forgets again
```

**There is no "self" that persists between calls.** The LLM that helped you yesterday is not "the same" LLM today — not because the model changed, but because there is no continuous entity. Each call is a function that takes text in and returns text out.

## Why This Matters: The Context Gap

Without context, you get generic responses. This is the single most common frustration people have with LLMs, and it's almost always a context problem, not an intelligence problem.

```
You: "Analyze this text"
LLM: "This text discusses several themes including..."
```

Generic. Useless. But not because the model is stupid — because you've given it nothing to work with. It's like handing someone a passage and saying "analyze this" with no indication of your field, your framework, your purpose, or what counts as a good analysis.

```
You: "I'm a comparative literature student analyzing creation myths
      across the Ancient Near East. I'm interested in literary structure,
      particularly parallelism and chiastic patterns. Please analyze
      Genesis 1:1-5 with specific verse citations."

LLM: "This passage employs chiastic structure (v. 1-3 / v. 4-6).
      Note the parallel: 'darkness'/'light' in v.2-3 mirrors
      'formless'/'formed' in v.1-4, reinforcing the creation-from-chaos
      motif central to Ancient Near Eastern cosmogonies..."
```

Same model. Radically different output. The only variable is context.

## Ways to Engineer Context

### 1. In Your Prompts (Manual)

The simplest approach: front-load your messages with who you are and what you need.

```
"I'm a comparative literature student analyzing creation myths.
I'm interested in how Genesis 1 uses repetition and structure.
I prefer academic tone with specific textual evidence.
Please analyze this passage: [paste text]"
```

This works, but you'll re-type it every session.

### 2. Context Documents (Reusable)

Keep a markdown file with your project context that you paste at the start of new conversations:

```markdown
# Project Context

## What I'm Working On
Comparative study of creation narratives in the Ancient Near East

## My Background
- Humanities student, focus on literary analysis
- Limited Hebrew, reading in translation

## What I Want
- Textual evidence with verse citations
- Literary device identification
- Connections to other ANE texts
- Academic but accessible tone

## What I Don't Want
- Theological interpretations
- Devotional content
```

This is low-tech and effective. Update it as your project evolves.

### 3. System Prompts (In Code)

When building tools with the API, you set a system prompt that's included in every call automatically:

```python
system_context = """
You are assisting a comparative literature scholar analyzing
biblical creation narratives. Prefer concise, evidence-based
analysis with verse citations. Focus on literary structure and
connections to other Ancient Near Eastern texts.
"""

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    system=system_context,  # ← Sent with every call
    messages=[{"role": "user", "content": "Analyze Genesis 1:1-5"}]
)
```

This is how most AI-powered tools work under the hood — the "personality" of any AI product is largely a system prompt.

### 4. Conversation History (Automatic)

Chat apps like ChatGPT and Claude automatically include previous messages as context. This is why the conversation *seems* to have memory — each new call gets the full transcript.

But start a new chat window? The context resets completely.

### 5. RAG (Retrieval-Augmented Generation)

For large projects, [RAG](./rag.md) systems automatically find and inject relevant context. Instead of you remembering to paste your project notes, the system searches a database of your documents and includes relevant passages. This is how tools like Cursor, NotebookLM, and Claude Projects work.

## Context Engineering as Rhetoric

Here's the comp lit angle: context engineering is a form of **rhetorical situation design**.

Classical rhetoric already understood that communication depends on more than the words themselves — it depends on the shared context between speaker and audience (what rhetoricians call the *sensus communis*, or what linguists call *common ground*). When you talk to a colleague, you share institutional context, disciplinary conventions, ongoing conversations. You can say "the argument in chapter 3" and they know what you mean.

An LLM shares *none* of this common ground by default. Every call is a stranger walking into the room. Context engineering is the work of artificially constructing the common ground that human communication normally takes for granted.

This is also why "prompt engineering" as a phrase slightly misses the point. The prompt is just the latest utterance. The *context* is everything that makes that utterance intelligible — your role, your goals, your standards, your history. Designing that is closer to writing a good introduction to a dissertation chapter than to crafting a clever sentence.

## The Context Window as Workspace

The [context window](./context-window.md) is the hard limit on how much context an LLM can process at once:

```
┌──────────────────────────────────┐
│     Available: ~200k tokens      │
├──────────────────────────────────┤
│ System prompt:     ~500 tokens   │
│ Project context:   ~2000 tokens  │
│ Conversation:      ~5000 tokens  │
│ Your query:        ~1000 tokens  │
│                                  │
│ Remaining: ~191,500 tokens       │
│ (room for the response)          │
└──────────────────────────────────┘
```

You're filling a workspace. Too little context and you get generic responses. Too much irrelevant context and the signal gets lost in noise. The art is curating what goes in.

## The Bottom Line

LLMs don't remember you. They process whatever text is in front of them, then forget everything.

This means:
1. **Every call is a fresh start** — there's no continuous entity
2. **Quality depends on context** — generic input produces generic output
3. **You control the context** — through prompts, documents, system prompts, and tools
4. **Context design is the real skill** — more than "prompt tricks," it's information architecture

The gap between a frustrating AI experience and a useful one is almost always a context gap.

## Related Terms
- [Context Window](./context-window.md) — How much context fits
- [RAG](./rag.md) — Automated context retrieval
- [Prompt](./prompt.md) — How you structure requests
- [Model](./model.md) — What you're providing context to
