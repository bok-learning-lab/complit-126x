# Specification

**Specification** is clearly stating what should happen — defining your requirements before you generate or run code.

## Why Specification Matters

You can't verify what you haven't specified.

**Without specification:**
- "Make a word counter" → Vague, no way to check if it's right

**With specification:**
- "Count words in Genesis 1, should return approximately 800 words" → Testable, verifiable

## The Specification Habit

Before asking AI to generate code, answer:

1. **What is the input?**
   - Example: A text string from Genesis 1

2. **What should the output be?**
   - Example: A dictionary of word frequencies

3. **What are the rules/constraints?**
   - Example: Case-insensitive, exclude common words

4. **How will I know if it works?**
   - Example: "God" should be the most frequent word

## Specification Template

```
I need code that:
- Input: [Describe what goes in]
- Processing: [Describe what happens]
- Output: [Describe what comes out]
- Constraints: [Any special rules]
- Success criteria: [How to verify it works]
```

## Example: Word Frequency Analyzer

### Poor Specification
```
Make something that counts words.
```

### Good Specification
```
Create a word frequency analyzer that:

Input:
- A text string (e.g., Genesis 1 from KJV Bible)

Processing:
1. Split text into words
2. Convert to lowercase for case-insensitive counting
3. Remove common words (the, a, and, etc.)
4. Count frequency of each remaining word

Output:
- Dictionary mapping words to their counts
- Sorted by frequency (most common first)
- Display top 20 words

Success criteria:
- For Genesis 1, "God" should be among top 3 words
- Total word count should be ~800 words
- "the" should not appear in results (filtered out)
```

## Specification in Practice

The vibe-coding workflow:

1. **Specify** → Define what you want clearly
2. Generate → Ask AI to create code
3. **Verify** → Check against your specification
4. Iterate → Refine if it doesn't match

Specification and verification are flip sides of the same coin:
- Specification: "Here's what should happen"
- Verification: "Did it happen?"

## Specifications Can Evolve

First specification:
```
Count words in text
```

After first attempt, refined specification:
```
Count words, but ignore common words
```

After second attempt:
```
Count words, ignore common words, and handle hyphenated words
```

This is normal — specifications become clearer through iteration.

## Scholarly Analog

This is exactly what humanities scholars do:

**Bad research question:**
"What is Genesis about?"

**Good research question:**
"How does the word 'light' function metaphorically in Genesis 1,
and how does its frequency compare to other creation accounts?"

Clear specification → Verifiable results.

## Specifications Prevent Scope Creep

Clear specifications help you know when you're done:

Without specification:
- Code works → "But what if we add X, Y, Z?"
- Never finished, always "one more thing"

With specification:
- Code meets all criteria → ✓ Done
- Additional features → New specifications for next iteration

## Related Terms
- [Verification](./verification.md)
- [Iteration](./iteration.md)
- [Selective Reading](./selective-reading.md)
