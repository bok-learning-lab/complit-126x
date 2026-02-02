# Loop

A **loop** is a programming construct that repeats a block of code multiple times.

## Why Loops Matter (The Tipping Point)

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

ChatGPT can't do this well. But a simple loop can:

```python
for text in all_texts:
    result = analyze(text)
    save(result)
```

**This is why coding matters** — automation at scale.

## Types of Loops

### For Loop
Repeats for each item in a collection:

```python
chapters = ["Genesis 1", "Genesis 2", "Genesis 3"]

for chapter in chapters:
    print(f"Analyzing {chapter}...")
    word_count = count_words(chapter)
    print(f"Words: {word_count}")
```

### While Loop
Repeats while a condition is true:

```python
count = 0
while count < 5:
    print(f"Count is {count}")
    count = count + 1
```

## The "ChatGPT Can't Do This" Moment

This is where students realize: **"Oh, this is why I'd learn to code."**

It's not about replacing ChatGPT — it's about doing things ChatGPT **can't** do.

## Related Terms
- [Function](./function.md)
- [Variable](./variable.md)
- [List](./list.md)
