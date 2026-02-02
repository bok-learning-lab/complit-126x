# Verification

**Verification** is checking that code actually does what it's supposed to do — building trust through testing, not blind faith.

## Why Verification Matters

> Trust is earned through verification, not vibes.

You can't just assume AI-generated code works correctly. You must **check**.

## The Three Questions

Before running code, ask:

1. **Does this do what I asked?** (Read the code loosely)
2. **Are there any danger zones?** (File deletion? Network calls?)
3. **What will I check to verify it works?** (Known results?)

## Verification Methods

### 1. Spot Checks
Use examples where you know the answer:

```python
# Test with simple input
result = count_words("the quick brown fox")
print(result)  # Should show 4 words

# Check against expectation
if result == 4:
    print("✓ Basic test passed")
else:
    print("✗ Something is wrong")
```

### 2. Domain Knowledge
Apply what you know about the content:

```python
# Analyze Genesis 1
word_freq = analyze(genesis_1_text)

# Verify using domain knowledge
# - "God" should be a top word (Genesis 1 is about creation by God)
# - "light" should appear multiple times ("Let there be light")
# - Total words should be ~800 (rough expectation for a chapter)

print(word_freq["God"])    # Should be high
print(word_freq["light"])  # Should be present
```

### 3. Edge Cases
Test unusual inputs:

```python
# What happens with empty text?
count_words("")

# What about punctuation?
count_words("Hello, world!")

# What about numbers?
count_words("Genesis 1:1")
```

### 4. Comparison
Compare against known benchmarks:

```python
# Your code's result
my_count = count_words(genesis_1)

# Compare to manual count or other source
# (Genesis 1 has approximately 800 words)

if 750 < my_count < 850:
    print("✓ Count seems reasonable")
else:
    print("✗ Count is suspicious")
```

## Verification Checklist

After running code:

- [ ] Did it produce output?
- [ ] Is the output the right format?
- [ ] Are the values reasonable?
- [ ] Does it match my domain knowledge?
- [ ] Did I test edge cases?
- [ ] Are there any error messages?

## The Scholarly Parallel

Verification is what humanities scholars already do:

| Coding | Scholarship |
|--------|-------------|
| Test code with known inputs | Test claims with known evidence |
| Check output format | Check citation format |
| Verify against domain knowledge | Verify against textual evidence |
| Spot check results | Spot check quotations |
| Compare to benchmarks | Compare to other scholars |

**You already have these skills from scholarly training.**

## When Verification Reveals Problems

### The Code Runs But Results Are Wrong

```python
# Code runs without error
word_freq = count_words(genesis_1)

# But verification fails
print(word_freq["the"])  # Returns 70
# Wait, "the" should be filtered out!
```

This is good! You caught an error before relying on the results.

### The Code Crashes

```python
# Code fails with error
word_freq = count_words(genesis_1)
# Error: AttributeError: 'NoneType' object has no attribute 'split'
```

The error message is verification too — it's telling you something is wrong.

## Verification Levels

### Level 1: Does it run?
- Does the code execute without errors?

### Level 2: Does it produce output?
- Does it generate some result?

### Level 3: Is the output the right format?
- Is it a number, string, dictionary, etc.?

### Level 4: Are the values reasonable?
- Do the numbers make sense?

### Level 5: Is it correct?
- Does it match known ground truth?

Each level builds confidence.

## Verification in the Workflow

The vibe-coding cycle:

1. Specify → "Count words, ignore common words"
2. Generate → AI creates code
3. **Verify** → Check it works correctly
4. Iterate → Fix what's wrong

Verification is where you catch issues before they matter.

## What Good Verification Looks Like

```python
# Step 1: Run the code
word_freq = analyze_text(genesis_1)

# Step 2: Check structure
print(f"Result type: {type(word_freq)}")  # Should be dict
print(f"Number of unique words: {len(word_freq)}")  # Should be reasonable

# Step 3: Check top results
print("Top 10 words:")
for word, count in sorted(word_freq.items(), key=lambda x: x[1], reverse=True)[:10]:
    print(f"  {word}: {count}")

# Step 4: Verify expectations
assert "God" in word_freq, "Expected 'God' to appear"
assert word_freq["God"] > 10, "Expected 'God' to appear frequently"
assert "the" not in word_freq, "Expected 'the' to be filtered out"

print("✓ All verifications passed")
```

## When Verification Is Impossible

Sometimes you can't fully verify:
- Analyzing a text you've never read
- Complex statistical results
- Subjective AI interpretations

In these cases:
- Verify the **process** (is the code doing what you asked?)
- Spot check a **sample** (do a few results make sense?)
- Compare to **alternatives** (does another method give similar results?)

## The Verification Mindset

Verification isn't about paranoia — it's about **confidence**.

Without verification:
- "I hope this works..."
- Anxiety and uncertainty

With verification:
- "I've tested this and it works"
- Confidence and trust

## Related Terms
- [Specification](./specification.md)
- [Iteration](./iteration.md)
- [Selective Reading](./selective-reading.md)
