# Selective Reading

**Selective reading** is reading code for specific purposes rather than trying to understand every line — reading strategically, not exhaustively.

## Why Selective Reading

You don't need to understand everything to work effectively with code.

**Traditional approach:**
- Read every line
- Understand every detail
- Memorize syntax
- Then use code

**Selective reading:**
- Understand what the code does (high level)
- Identify key sections
- Know how to verify it works
- Learn details only when needed

## What to Read For

Different reading goals require different approaches:

### Reading for Safety
**Goal:** Make sure code won't do harm

**What to look for:**
- File operations (`delete`, `remove`, `write`)
- Network calls (`fetch`, `request`, `download`)
- System commands (`execute`, `shell`, `system`)
- Anything that modifies data

**What to ignore:**
- Calculation details
- Variable names
- Syntax specifics

### Reading for Structure
**Goal:** Understand overall flow

**What to look for:**
- Function definitions (`def function_name`)
- Main logic flow
- Input and output
- Major steps

**What to ignore:**
- Implementation details
- Specific calculations
- Helper functions

### Reading for Debugging
**Goal:** Fix a problem

**What to look for:**
- Where the error occurs
- What data is involved
- What should happen vs. what happens
- Error messages

**What to ignore:**
- Working sections
- Unrelated code
- Syntax you don't understand (yet)

### Reading for Modification
**Goal:** Change specific behavior

**What to look for:**
- Where the behavior happens
- What variables are involved
- What needs to change

**What to ignore:**
- Code that works correctly
- Implementation of other features

## Example: Selective Reading for Safety

```python
import requests
from collections import Counter

def analyze_text(text):
    # Convert to lowercase
    text = text.lower()

    # Remove common words
    stopwords = ["the", "a", "and", "or", "but"]
    words = [w for w in text.split() if w not in stopwords]

    # Count frequencies
    word_freq = Counter(words)

    return dict(word_freq.most_common(20))
```

**Safety reading:**
- ✓ Imports: `requests` (network), `Counter` (safe utility)
- ✓ No file operations
- ✓ No system commands
- ✓ Just text processing
- **Verdict:** Safe to run

You didn't need to understand `Counter`, list comprehensions, or `most_common()` to verify safety.

## Example: Selective Reading for Structure

Same code, reading for structure:

```python
def analyze_text(text):                    # ← Function definition
    text = text.lower()                    # ← Step 1: Normalize

    stopwords = ["the", "a", "and", ...]   # ← Step 2: Define filter
    words = [w for w in text.split() ...]  # ← Step 3: Filter words

    word_freq = Counter(words)             # ← Step 4: Count

    return dict(word_freq.most_common(20)) # ← Step 5: Return top 20
```

**Structure reading:**
- Takes text input
- Processes it in ~5 steps
- Returns word frequencies
- Details don't matter yet

## Levels of Reading Depth

### Level 1: Glance (5 seconds)
- "What does this generally do?"
- Look at function names, comments

### Level 2: Scan (30 seconds)
- "What are the main steps?"
- Follow the flow, ignore details

### Level 3: Read (5 minutes)
- "How does this work?"
- Understand logic, still skip complex parts

### Level 4: Study (30+ minutes)
- "Why is it implemented this way?"
- Deep understanding, research unfamiliar concepts

**Most of the time, Level 1-2 is enough.**

## The Scholarly Analog

Humanities scholars already do selective reading:

**Reading a 400-page book:**
- Don't read every word equally
- Skim for relevant sections
- Deep read important passages
- Skip irrelevant parts

**Reading code:**
- Don't read every line equally
- Scan for overall structure
- Deep read critical sections
- Skip implementation details

## When to Go Deeper

Read more carefully when:

1. **Debugging** — Something's broken, need to understand why
2. **Modifying** — Need to change behavior, must understand mechanics
3. **Learning** — Want to understand a technique for future use
4. **Verifying** — Results seem wrong, need to check logic

Otherwise, shallow reading is fine.

## Selective Reading ≠ Lazy Reading

This isn't about avoiding learning.

It's about **efficient learning** — understanding what matters for your current purpose.

You can always read deeper later when you need to.

## Recognizing Patterns

Over time, you'll recognize common patterns:

```python
# Pattern: Looping through items
for item in items:
    process(item)

# Pattern: Filtering
results = [x for x in items if condition(x)]

# Pattern: Dictionary lookup with default
value = dictionary.get(key, default_value)
```

Once you recognize these patterns, you don't need to read carefully — you know what they do.

## Using AI for Selective Reading

You can ask AI to explain selectively:

```
"Explain what this function does in 2-3 sentences,
without getting into implementation details."
```

```
"What does this line do:
word_freq = Counter(words)"
```

```
"Is there anything dangerous in this code?"
```

AI can help you read at the right level.

## Selective Reading Checklist

Before running code:

- [ ] What does this code do? (One sentence)
- [ ] What is the input and output?
- [ ] Are there any safety concerns?
- [ ] Does the structure make sense?

You don't need:
- [ ] To understand every line
- [ ] To know all the syntax
- [ ] To memorize the details
- [ ] To explain the implementation

## Building Intuition

With practice, you'll develop intuition:

```python
word_freq = Counter(words)
```

First time:
- "What's Counter? What does this do?"

After seeing it 10 times:
- "Ah, counting things, I know this pattern"

After seeing it 50 times:
- "Word frequency count" (instant recognition)

**Selective reading becomes faster with experience.**

## The Permission to Not Understand Everything

This is key to vibe coding:

**You have permission to:**
- Use code you don't fully understand
- Skip complex parts
- Learn details only when needed
- Trust verification over comprehension

**As long as you:**
- Verify it works correctly
- Know what it does (high level)
- Can modify it with AI help
- Know when to dig deeper

## Related Terms
- [Verification](./verification.md)
- [Iteration](./iteration.md)
- [Specification](./specification.md)
