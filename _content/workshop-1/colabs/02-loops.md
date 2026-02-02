# Workshop 02: Loops

## What You're Doing This Session

In Workshop 01, you learned how to **reuse code through functions**. You could call `count_word()` as many times as you wanted with different inputs.

But imagine you want to count "God" in not just Genesis, but also Exodus, Leviticus, Numbers, and Deuteronomy—five books. You could call the function five times:

```python
count_word(genesis, "God")
count_word(exodus, "God")
count_word(leviticus, "God")
count_word(numbers, "God")
count_word(deuteronomy, "God")
```

That works, but it's tedious. Imagine doing that for 100 books, or 1,000 poems, or 10,000 tweets. 

This workshop teaches you **loops**—how to tell Python "do this for each item in a list" and let it run automatically. That's the first major power of code: **SCALE**.

---

## The AI Prompts

### Prompt 1: Ask for a Loop

First, set up your texts:

```python
genesis = """In the beginning God created the heaven and the earth. ..."""
exodus = """And God spake all these words, saying, I am the LORD thy God, ..."""
psalms = """Blessed is the man that walketh not in the counsel of the ungodly, ..."""

# And your function from Workshop 01
def count_word(text, word):
    # (function code here)
    pass
```

Then ask the AI:

```
I have three texts stored in variables called `genesis`, `exodus`, and `psalms`. 
I have a function `count_word(text, word)` that counts word occurrences. 
Write code that loops through all three texts and counts how many times "God" 
appears in each. Print the name and count for each book.
```

**What to expect:** The AI will give you a loop that processes all three texts automatically.

### Prompt 2: Understanding

```
Explain this code to me. What is a list? What does 'for' do? 
How does the loop work?
```

### Prompt 3: Multiple Words

Once you understand the basic loop:

```
Modify the code so it counts multiple words (like "God", "Lord", 
"heaven", "earth") across all three texts. Use nested loops to do this.
```

---

## The Code: What the AI Gave You

Here's what you'll likely receive for Prompt 1:

```python
# Put the texts in a list, with names so we know which is which
texts = [
    ("Genesis", genesis),
    ("Exodus", exodus),
    ("Psalms", psalms)
]

# Loop through and count "God" in each
for name, text in texts:
    count = count_word(text, "God")
    print(f"{name}: 'God' appears {count} times")
```

### Running It

When you run this code, it produces output like:

```
Genesis: 'God' appears 4 times
Exodus: 'God' appears 5 times
Psalms: 'God' appears 3 times
```

The code did three separate counts automatically. You didn't have to copy-paste or call the function three times manually.

---

## Breaking It Down: How Loops Work

### Lists: A Collection of Items

```python
texts = [
    ("Genesis", genesis),
    ("Exodus", exodus),
    ("Psalms", psalms)
]
```

Let's unpack this:

- **Square brackets `[]`** — This creates a **list**, which is a collection of items in order
- Each item in this list is a **tuple** — a pair of values: `(name, text)`
  - `("Genesis", genesis)` — A pair: the name "Genesis" and the actual text
  - `("Exodus", exodus)` — Another pair: "Exodus" and its text
  - `("Psalms", psalms)` — Another pair: "Psalms" and its text

So `texts` is a list with 3 items, and each item is a pair.

You could also write this as:

```python
texts = [
    ("Genesis", genesis),
    ("Exodus", exodus),
    ("Psalms", psalms)
]
```

Or more compactly:

```python
texts = [("Genesis", genesis), ("Exodus", exodus), ("Psalms", psalms)]
```

They're equivalent—it's just a question of formatting.

### The For Loop: Iterating Through Items

```python
for name, text in texts:
    count = count_word(text, "God")
    print(f"{name}: 'God' appears {count} times")
```

This is the magic. Let's break it down line by line:

#### The Loop Header

```python
for name, text in texts:
```

- **`for`** — This keyword says "I'm about to loop through something"
- **`name, text`** — These are variables that will hold each pair. On the first iteration, `name` gets "Genesis" and `text` gets the Genesis text. On the second iteration, `name` gets "Exodus" and `text` gets the Exodus text. And so on.
- **`in texts:`** — We're looping through the `texts` list
- **`:`** — The colon says "what comes next is the body of the loop"

#### What Happens Inside the Loop

```python
    count = count_word(text, "God")
    print(f"{name}: 'God' appears {count} times")
```

Notice the **indentation** (the spaces at the beginning of the lines). Python uses indentation to show what's "inside" the loop. Everything indented under the `for` line runs once for each item in the list.

On the **first iteration**:
- `name = "Genesis"`
- `text = genesis` (the full Genesis text)
- `count = count_word(genesis, "God")` — Count "God" in Genesis
- `print(...)` — Print "Genesis: 'God' appears X times"

On the **second iteration**:
- `name = "Exodus"`
- `text = exodus` (the full Exodus text)
- `count = count_word(exodus, "God")` — Count "God" in Exodus
- `print(...)` — Print "Exodus: 'God' appears X times"

On the **third iteration**:
- Same pattern for Psalms

After the third iteration, there are no more items in the list, so the loop ends.

---

## The Extended Version: Nested Loops

For Prompt 3, you might get:

```python
# Words to count
words_to_count = ["God", "Lord", "heaven", "earth"]

# Loop through each text
for name, text in texts:
    print(f"\n{name}:")
    
    # For each text, loop through each word
    for word in words_to_count:
        count = count_word(text, word)
        print(f"  '{word}': {count}")
```

This produces output like:

```
Genesis:
  'God': 4
  'Lord': 2
  'heaven': 1
  'earth': 2

Exodus:
  'God': 5
  'Lord': 3
  'heaven': 0
  'earth': 1

Psalms:
  'God': 3
  'Lord': 4
  'heaven': 2
  'earth': 0
```

### How Nested Loops Work

```python
for name, text in texts:           # Outer loop: for each text
    print(f"\n{name}:")
    
    for word in words_to_count:    # Inner loop: for each word
        count = count_word(text, word)
        print(f"  '{word}': {count}")
```

- **Outer loop:** Runs once for each text (3 times)
- **Inner loop:** Runs once for each word (4 times)
- **Total iterations:** 3 × 4 = 12 counts, all automatic

Here's the key: the inner loop runs completely for each iteration of the outer loop.

**Iteration 1 (Outer loop, name = "Genesis"):**
  - Inner loop iteration 1: Count "God" in Genesis
  - Inner loop iteration 2: Count "Lord" in Genesis
  - Inner loop iteration 3: Count "heaven" in Genesis
  - Inner loop iteration 4: Count "earth" in Genesis

**Iteration 2 (Outer loop, name = "Exodus"):**
  - Inner loop iteration 1: Count "God" in Exodus
  - Inner loop iteration 2: Count "Lord" in Exodus
  - Inner loop iteration 3: Count "heaven" in Exodus
  - Inner loop iteration 4: Count "earth" in Exodus

**Iteration 3 (Outer loop, name = "Psalms"):**
  - Inner loop iteration 1: Count "God" in Psalms
  - Inner loop iteration 2: Count "Lord" in Psalms
  - Inner loop iteration 3: Count "heaven" in Psalms
  - Inner loop iteration 4: Count "earth" in Psalms

---

## The Power of Scale

Think about what you just did:

```
3 texts × 4 words = 12 counts
All done automatically with a few lines of code
```

Now imagine:
- **100 texts × 10 words = 1,000 counts** (same few lines of code)
- **1,000 texts × 5 words = 5,000 counts** (same few lines of code)
- **10,000 tweets × 3 words = 30,000 counts** (same few lines of code)

Without loops, you'd have to copy-paste manually. With loops, you write it once and it scales to any size. **That's the first major power of coding with AI.**

---

## Key Concepts

| Concept | What It Means | Example |
|---------|---------------|---------|
| **List** | A collection of items in order | `[("Genesis", genesis), ("Exodus", exodus)]` |
| **Tuple** | A pair (or group) of values | `("Genesis", genesis)` — a name and a text |
| **For loop** | "Do this for each item in a list" | `for name, text in texts:` |
| **Iteration** | One pass through the loop | First iteration: `name = "Genesis"` |
| **Indentation** | Shows what's inside the loop | Code indented under `for` runs each iteration |
| **Nested loops** | A loop inside a loop | Outer loop × Inner loop = Total iterations |

---

## Common Mistake: Indentation

Python cares about indentation. If you accidentally un-indent code, Python thinks it's outside the loop:

```python
# WRONG: print is outside the loop
for name, text in texts:
    count = count_word(text, "God")
print(f"{name}: 'God' appears {count} times")  # This runs once, after the loop
```

```python
# RIGHT: print is inside the loop
for name, text in texts:
    count = count_word(text, "God")
    print(f"{name}: 'God' appears {count} times")  # This runs for each item
```

The difference: the second version has the `print` indented at the same level as the `count` line above it.

---

## What Just Happened

You learned:

1. **Lists** — How to group multiple items together
2. **For loops** — How to do something to each item automatically
3. **Scale** — How to go from "3 manual calls" to "3,000 automatic operations"

You didn't memorize loop syntax. You saw actual code doing real work, and now you understand how it works.

---

## Next: Chaining

In Workshop 01, you learned **functions** (reusable code).
In Workshop 02, you learned **loops** (reusing over many items).

In Workshop 03, you'll learn **chaining**—how to connect multiple operations so the output of one becomes the input to the next. That's when you combine loops with AI calls to process massive amounts of data automatically.

That's the second major power of coding: **CHAINING**.
