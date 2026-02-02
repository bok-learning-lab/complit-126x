# Workshop 01: Functions

## What You're Doing This Session

In traditional programming education, you learn theory first: syntax, data types, control flow. Then you write code. 

In this workshop, we're flipping that: **you'll ask AI to write code, run it, verify it works, then understand what it does.** By the end, you'll know what a **function** is, what **arguments** are, and what **return values** mean—not from a textbook, but because you've seen them in action.

---

## The AI Prompts

Here are the exact prompts you'll give to ChatGPT, Claude, or Gemini.

### Prompt 1: Ask for a Function

```
Make me a simple Python function that counts how many times a word appears 
in a text. The function should take two inputs: the text to search and the 
word to look for. Make it case-insensitive.
```

**What to expect:** The AI will give you a function definition. It might look slightly different from the example below, but the structure will be the same.

### Prompt 2: Understanding (optional, but helpful)

If you want the AI to explain what it gave you:

```
Explain this code to me like I've never programmed before. What is a function? 
What are the arguments? What does 'return' mean?
```

### Prompt 3: Modification

Once you understand it:

```
Modify this function so it also prints a message like:
"The word 'God' appears 32 times."
```

---

## The Code: What the AI Gave You

Here's a likely version of what ChatGPT/Claude/Gemini will produce for Prompt 1:

```python
def count_word(text, word):
    """
    Count how many times a word appears in a text (case-insensitive).
    """
    # Convert both to lowercase so "God" matches "god"
    text_lower = text.lower()
    word_lower = word.lower()
    
    # Split text into words and count matches
    words = text_lower.split()
    count = 0
    for w in words:
        # Remove punctuation from the word
        w_clean = w.strip('.,;:!?"\'')
        if w_clean == word_lower:
            count += 1
    return count
```

### Running It

You'd then test it like this:

```python
genesis = """In the beginning God created the heaven and the earth. 
And the earth was without form, and void; and darkness was upon the face 
of the deep. And the Spirit of God moved upon the face of the waters..."""

# Call the function
result = count_word(genesis, "God")
print(result)  # Output: 4
```

When you run `count_word(genesis, "God")`, the function:
1. Takes the text and the word
2. Processes them (lowercase, split, clean punctuation)
3. Counts matches
4. Returns the count

---

## Breaking It Down: How It Actually Works

Let's unpack each part of this function so you understand what it's doing.

### The Function Definition

```python
def count_word(text, word):
```

- **`def`** — This keyword tells Python "I'm defining a function now"
- **`count_word`** — This is the name we gave our function. We could have called it anything: `count_occurrences`, `word_frequency`, `find_word`, etc.
- **`(text, word)`** — These are the **arguments** (the inputs the function needs to work). Our function needs two things: a text to search in, and a word to search for.

### The Docstring

```python
    """
    Count how many times a word appears in a text (case-insensitive).
    """
```

This is just a comment explaining what the function does. Python ignores it during execution, but it's helpful for humans reading the code.

### Setting Up Lowercase Versions

```python
    text_lower = text.lower()
    word_lower = word.lower()
```

Why? Because "God" and "god" and "GOD" should all count as the same word. If we search for "God" in the original text, we'd miss "god" or "GOD". By converting everything to lowercase first, we make the comparison case-insensitive.

- `text.lower()` — Converts the entire text to lowercase
- `word.lower()` — Converts the search word to lowercase
- We store these in new variables `text_lower` and `word_lower`

### Splitting Into Words

```python
    words = text_lower.split()
    count = 0
```

- `split()` — Breaks the text into individual words. `"hello world".split()` becomes `["hello", "world"]`
- `count = 0` — We start counting at zero. We'll increment this each time we find a match.

### The Loop: Checking Each Word

```python
    for w in words:
        w_clean = w.strip('.,;:!?"\'')
        if w_clean == word_lower:
            count += 1
```

This is the core logic:

- **`for w in words:`** — Loop through each word in our list. On the first iteration, `w` is the first word; on the second, it's the second word; and so on.

- **`w_clean = w.strip('.,;:!?"\'`)'** — Remove punctuation from the word. The word "light." includes a period. We strip it so "light." becomes "light" and can be compared properly to our search word.

- **`if w_clean == word_lower:`** — Check if this cleaned word matches our search word.

- **`count += 1`** — If it matches, add 1 to our count. This is shorthand for `count = count + 1`.

### The Return Statement

```python
    return count
```

This is the function's output. When the loop is done, we return (give back) the count of how many matches we found.

---

## Why This Matters: The Concept of a Function

A function is a **reusable block of code with a name**. Once you define it, you can call it as many times as you want with different inputs:

```python
# Count "God"
result1 = count_word(genesis, "God")

# Count "light"
result2 = count_word(genesis, "light")

# Count "earth"
result3 = count_word(genesis, "earth")
```

Without a function, you'd have to rewrite all that code three times, changing only the word. That's tedious and error-prone. With a function, you write it once and reuse it.

### The Anatomy of a Function Call

When you write `count_word(genesis, "God")`:

1. **Name:** `count_word` — Which function to run
2. **Arguments:** `genesis, "God"` — What inputs to give it
3. **Return value:** The function gives back a number (the count)

The pattern is always:

```python
result = function_name(argument1, argument2)
```

---

## The Modified Version (After Prompt 3)

If you asked the AI to modify it to also print a message, you might get:

```python
def count_word_verbose(text, word):
    """
    Count how many times a word appears and print a message.
    """
    text_lower = text.lower()
    word_lower = word.lower()
    
    words = text_lower.split()
    count = 0
    for w in words:
        w_clean = w.strip('.,;:!?"\'')
        if w_clean == word_lower:
            count += 1
    
    # NEW: Print the message
    print(f"The word '{word}' appears {count} times.")
    
    # Still return the count (in case we want to use it)
    return count
```

The key difference: we added a `print()` statement before the `return`. Now when you call this function, it both prints a message AND returns the count.

```python
count_word_verbose(genesis, "God")
# Output: The word 'God' appears 4 times.
# Return value: 4
```

---

## What Just Happened

You did something important:

1. **Vibecoded:** Asked AI to write code
2. **Tested it:** Ran it and verified it worked
3. **Understood it:** Broke down each part and grasped what it does
4. **Extended it:** Modified it to do something slightly different

You didn't memorize Python syntax from a textbook. You encountered real code, understood it by doing, and now you have a tool you can use and modify.

---

## Key Takeaways

| Concept | What It Means | Example |
|---------|---------------|---------|
| **Function** | A reusable block of code with a name | `count_word` |
| **Argument** | An input to a function | `text` and `word` are arguments |
| **Return** | What the function gives back | `return count` |
| **Call** | Running a function | `count_word(genesis, "God")` |
| **Parameter** | The variable name in the definition | In `def count_word(text, word)`, `text` and `word` are parameters |

---

## Next: Loops and Scale

In the next workshop, you'll learn **loops**—how to do something to many texts automatically. Right now, if you had 10 texts and wanted to count "God" in each one, you'd call the function 10 times. With loops, you'll write the code once and let it run 10 times automatically.

That's when coding becomes powerful.
