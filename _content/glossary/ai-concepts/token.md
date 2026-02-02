# Token

A **token** is the basic unit of text that AI models process — roughly equivalent to a word or part of a word.

## What Counts as a Token?

Tokens are not exactly words. They're chunks of text:

| Text | Tokens | Notes |
|------|--------|-------|
| `hello` | 1 token | Common word |
| `ChatGPT` | 2 tokens | `Chat` + `GPT` |
| `extraordinary` | 3 tokens | Long word, split up |
| `the` | 1 token | Short word |
| `123` | 1 token | Numbers |

**Rule of thumb:** ~4 characters per token, or ~75 words per 100 tokens.

## Why Tokens Matter

1. **Cost** — API calls are priced per token
   - Input tokens (what you send)
   - Output tokens (what you get back)

2. **Context limits** — Models have maximum token limits
   - GPT-4: 8,000 - 128,000 tokens depending on version
   - Claude: up to 200,000 tokens
   - Gemini: up to 2,000,000 tokens

3. **Speed** — More tokens = slower responses

## Token Pricing Example

Typical pricing structure:
```
Gemini 1.5 Pro:
- Input: $0.00025 per 1K tokens
- Output: $0.00075 per 1K tokens

For a 1,000 word document (~1,333 tokens):
- Cost to send: ~$0.00033
- Cost for 500 word response: ~$0.00050
- Total: less than $0.001
```

APIs are remarkably cheap for individual requests, but costs add up at scale.

## Checking Token Count

Most APIs provide token counters:

```python
response = model.generate(
    prompt="Analyze this text...",
    text=long_document
)

print(f"Input tokens: {response.usage.input_tokens}")
print(f"Output tokens: {response.usage.output_tokens}")
```

## Managing Token Usage

**When processing many texts:**

❌ Don't: Send entire book to API
```python
result = model.analyze(entire_bible)  # Too many tokens!
```

✓ Do: Process in chunks
```python
for chapter in bible_chapters:
    result = model.analyze(chapter)  # Manageable size
    results.append(result)
```

## Context Window

The **context window** is the maximum tokens a model can handle at once:
- Input tokens (your prompt + data)
- Output tokens (the response)
- Total must fit within the window

Example:
- Model has 8,000 token limit
- Your prompt: 7,000 tokens
- Space left for response: 1,000 tokens

Choose models with appropriate context windows for your task.

## Tokens in Practice

For this workshop:
- Individual Bible chapters: ~1,000-2,000 tokens
- Your prompts: ~100-500 tokens
- Typical API responses: ~500-1,000 tokens

You're well within limits for all major models.

## Related Terms
- [Context Window](./context-window.md)
- [API](./api.md)
- [Model](./model.md)
- [Rate Limit](./rate-limit.md)
