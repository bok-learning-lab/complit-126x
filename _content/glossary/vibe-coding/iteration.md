# Iteration

**Iteration** is the process of refining and improving through repeated cycles — making incremental progress rather than trying to get everything perfect the first time.

## The Iterative Mindset

Traditional approach:
- Plan everything perfectly
- Write perfect code on first try
- Hope it works

Vibe coding approach:
- Start with something that works
- Test and identify issues
- Refine incrementally
- Build on what works

## The Iteration Cycle

```
1. Try something
   ↓
2. See what happens
   ↓
3. Learn from results
   ↓
4. Refine and try again
   ↓
(Repeat until satisfied)
```

## Example: Building a Word Counter

### Iteration 1: Basic Version
```
Prompt: "Count words in this text"
Result: Gets basic count
Issue: Counts "The" and "the" as different words
```

### Iteration 2: Case Insensitive
```
Prompt: "Make it case-insensitive"
Result: Now "The" and "the" count together
Issue: Includes common words like "the", "a", "and"
```

### Iteration 3: Filter Common Words
```
Prompt: "Ignore common words like 'the', 'a', 'and'"
Result: More meaningful word frequency
Issue: Hyphenated words counted strangely
```

### Iteration 4: Handle Punctuation
```
Prompt: "Handle hyphenated words and punctuation properly"
Result: Clean, accurate word counts
Status: ✓ Good enough for current purpose
```

## When to Stop Iterating

You could iterate forever, but you don't need perfection:

**Stop when:**
- It meets your specifications
- It works for your use case
- Further improvements have diminishing returns

**Keep going when:**
- Results don't match expectations
- You discover new edge cases
- You need additional features

## Iteration vs. Starting Over

Don't throw away working code — build on it:

❌ **Starting Over Each Time**
```
Version 1: Basic counter
→ Doesn't work perfectly
→ Delete everything
→ Version 2: New approach
→ Still not perfect
→ Delete everything
→ Version 3: Another new approach
```

✓ **Iterating**
```
Version 1: Basic counter
→ Works for simple cases
→ Version 2: Add case-insensitivity
→ Builds on V1
→ Version 3: Add filtering
→ Builds on V2
→ Each version is an improvement
```

## Prompts for Iteration

Effective iteration prompts:

```
"Now modify it to [add feature]"
"Update the code to also [handle case]"
"Can you improve it to [better behavior]"
"The output shows [problem], fix it so [solution]"
```

These build on existing code rather than starting fresh.

## Iteration in the Workshop

The notebooks follow an iterative pattern:

1. **Vibe** → Get working code from AI
2. **Run** → See it work
3. **Verify** → Check results
4. **Unpack** → Understand what it does
5. **Extend** → Iterate with improvements

The "Extend" section is where you practice iteration.

## Small Steps vs. Big Leaps

Better to iterate in small steps:

❌ **Too Much at Once**
```
"Create a complete text analysis pipeline that:
- Processes multiple files
- Calls an AI API
- Generates visualizations
- Exports to PDF
- Handles errors gracefully
- Includes a web interface"
```

This is overwhelming and hard to debug.

✓ **Small Iterations**
```
Iteration 1: Process one file
Iteration 2: Process multiple files
Iteration 3: Add API call
Iteration 4: Add visualization
Iteration 5: Add export
...
```

Each step is testable and manageable.

## Iteration Builds Understanding

Each iteration teaches you something:

First iteration:
- You get working code
- You don't understand much

Fifth iteration:
- You've seen it work (and break) multiple times
- You've fixed issues
- You've added features
- You understand it much better

**Understanding emerges through iteration.**

## Failed Iterations Are Learning

Not every iteration succeeds:

```
Iteration 3: Try to add visualization
→ Code breaks
→ Error message: "Module 'matplotlib' not found"
→ Learn: Need to install dependencies
→ Iteration 3.1: Install matplotlib
→ Iteration 3.2: Retry visualization
→ Success!
```

The failure taught you something important.

## Iteration vs. Perfectionism

Perfectionism says:
- "It must be perfect before I show anyone"
- "I need to understand everything"
- "I can't move forward until this is flawless"

Iteration says:
- "This works for now, I can improve it later"
- "I understand enough to verify it works"
- "Good enough to move to the next step"

## The Scholarly Analog

Academics already iterate:

**Writing a paper:**
1. Rough draft (gets ideas down)
2. Add evidence (cite sources)
3. Refine argument (clarify logic)
4. Polish prose (improve readability)
5. Peer review (get feedback)
6. Final revisions (incorporate feedback)

**Coding is the same:**
1. Basic version (gets it working)
2. Add features (extend functionality)
3. Fix bugs (improve correctness)
4. Optimize (improve performance)
5. Get feedback (test with users)
6. Final polish (clean up code)

## Iteration Saves Time

Counterintuitive but true:

**Trying to be perfect first:**
- Spend hours planning
- Write complex code
- It doesn't work
- Hard to debug
- Start over

**Iterating:**
- Get basic version in minutes
- Test it (works!)
- Add one feature
- Test it (works!)
- Add another feature
- Each step is verified

Iteration is actually faster because you catch issues early.

## Related Terms
- [Specification](./specification.md)
- [Verification](./verification.md)
- [Selective Reading](./selective-reading.md)
