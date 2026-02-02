# Prompt

A **prompt** is the text instruction you give to an AI model — it's how you communicate what you want the AI to do.

## Why Prompts Matter

The quality of your prompt directly affects the quality of the output:
- **Vague prompt** → Vague or irrelevant results
- **Clear, specific prompt** → Useful, targeted results

Prompt engineering is a real skill — learning to communicate effectively with AI.

## Example Prompts

### Vague Prompt
```
Analyze this text.
```
Too general — analyze how? For what purpose?

### Better Prompt
```
Analyze the word frequency in this text,
showing the top 20 most common words,
excluding common words like "the", "a", "and".
```
Clear, specific, actionable.

### Even Better Prompt
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
Extremely specific, with examples and constraints.

## Elements of a Good Prompt

1. **Clear task** — What do you want done?
2. **Context** — What's this for? Who's the audience?
3. **Constraints** — Any requirements or limitations?
4. **Format** — How should the output look?
5. **Examples** — Show what you mean (if helpful)

## Prompt Template for Code

```
Write [language] code that:
1. [First thing it should do]
2. [Second thing it should do]
3. [Third thing it should do]

Input: [Describe the input]
Output: [Describe desired output]

Example input: [Actual example]
Expected output: [What you'd expect]

Additional requirements:
- [Any constraints]
- [Any libraries to use/avoid]
```

## Iterating on Prompts

Prompts are conversations — you can refine:

**First try:**
```
Create a word frequency analyzer
```

**If output isn't quite right:**
```
Now modify it to ignore case (treat "The" and "the" as the same word)
```

**Further refinement:**
```
Add a visualization showing the top 15 words as a bar chart
```

This is **iteration** — building on what works.

## Common Prompt Patterns

### Analysis Prompt
```
Analyze [text/data] for [specific aspect].
Show me [format of results].
```

### Code Generation Prompt
```
Write [language] code that [does X].
Input: [Y]
Output: [Z]
```

### Explanation Prompt
```
Explain [concept/code] in simple terms,
as if I'm [audience level].
```

### Debugging Prompt
```
This code:
[paste code]

Is giving this error:
[paste error]

Help me fix it.
```

## Prompts in This Workshop

You'll use prompts to:
- Generate Python code for text analysis
- Ask AI to explain code you don't understand
- Debug errors when things break
- Extend working code with new features

**The better your prompts, the better your results.**

## Related Terms
- [Model](./model.md)
- [Context Window](./context-window.md)
- [Token](./token.md)
