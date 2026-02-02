# Context Window

The **context window** is the maximum amount of text (measured in tokens) that an AI model can "see" and process at one time.

## Think of It Like...

The context window is like:
- **Working memory** — How much you can hold in your head at once
- **A spotlight** — Everything outside the window is invisible to the model
- **A page limit** — Can't fit more than X pages in the window

## Context Window Sizes (2025)

| Model | Context Window | Approximate Pages |
|-------|---------------|-------------------|
| GPT-3.5 | 16K tokens | ~60 pages |
| GPT-4 | 8K-128K tokens | ~30-480 pages |
| Claude 3.5 Sonnet | 200K tokens | ~750 pages |
| Gemini 1.5 Pro | 2M tokens | ~7,500 pages |

These numbers keep increasing over time.

## Why Context Windows Matter

### What Fits in the Window

The context window includes:
- Your prompt/instructions
- Any data you provide (text to analyze)
- The model's response
- Conversation history (in chat applications)

**All of this must fit within the limit.**

### Example Scenario

You have a model with 8,000 tokens:
- Your instructions: 200 tokens
- Text to analyze: 7,000 tokens
- Space for response: 800 tokens

If your text is 10,000 tokens, it **won't fit** — you'll need to:
- Use a model with a larger window
- Split your text into chunks
- Summarize/compress your text first

## Long Context = New Possibilities

Larger context windows enable:

**Previously impossible:**
- Analyze an entire novel in one request
- Compare 20 different documents simultaneously
- Maintain context across long conversations

**Now possible with Gemini 1.5 Pro (2M tokens):**
- Process entire books
- Analyze complete film scripts
- Work with large datasets

## Strategies for Long Texts

### Option 1: Use a Model with a Large Window
```python
# Gemini 1.5 Pro can handle very long texts
result = gemini.analyze(entire_book)
```

### Option 2: Process in Chunks
```python
# Split into chapters, process separately
results = []
for chapter in book_chapters:
    result = model.analyze(chapter)
    results.append(result)
```

### Option 3: Summarize First, Then Analyze
```python
# First pass: Summarize each chapter
summaries = [model.summarize(ch) for ch in chapters]

# Second pass: Analyze all summaries together
analysis = model.analyze(all_summaries)
```

## Context Window vs. Output Limit

Two separate limits:
- **Context window** — Total input + output
- **Max output tokens** — Maximum response length

Example:
- Model has 8K context window
- Max output is 4K tokens
- You can't use all 8K for input and expect 4K output

## Cost Considerations

Larger context windows can cost more:
- More tokens processed = higher cost
- Some models charge different rates for longer contexts

But costs are still usually quite low for typical use cases.

## Context Windows in This Workshop

For analyzing Bible chapters:
- Average chapter: ~1,000-2,000 tokens
- Your prompts: ~100-500 tokens
- Responses: ~500-1,000 tokens
- **Total: ~2,000-3,500 tokens**

You're well within any modern model's limits.

## The Future of Context Windows

Trend: Context windows keep growing:
- 2021: 2K-4K tokens
- 2023: 32K-100K tokens
- 2025: 200K-2M tokens
- Future: ?

Eventually, context window limits may become less of a concern.

## Related Terms
- [Token](./token.md)
- [Model](./model.md)
- [API](./api.md)
