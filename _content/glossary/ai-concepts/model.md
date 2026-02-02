# Model

A **model** is the AI system that generates responses — different models have different capabilities, costs, and strengths.

## Common Models You'll Encounter

### Google's Models
- **Gemini 1.5 Pro** — Best balance of quality and cost
- **Gemini 1.5 Flash** — Faster, cheaper, still capable

### OpenAI's Models
- **GPT-4** — High quality, more expensive
- **GPT-3.5** — Faster, cheaper, good for simple tasks

### Anthropic's Models
- **Claude 3.5 Sonnet** — Excellent for code and reasoning
- **Claude 3 Opus** — Most capable, highest cost

## Why Different Models?

Models have different trade-offs:

| Factor | Small Models | Large Models |
|--------|--------------|--------------|
| Cost | Cheap | Expensive |
| Speed | Fast | Slower |
| Quality | Good for simple tasks | Better for complex tasks |
| Context | Smaller windows | Larger windows |

## Choosing a Model

Questions to ask:

**How complex is the task?**
- Simple → Use a smaller/faster model
- Complex → Use a larger/better model

**How much does it cost?**
- Budget-conscious → Gemini Flash, GPT-3.5
- Quality matters most → GPT-4, Claude Opus

**How much text do I need to process?**
- Short texts → Any model
- Long documents → Models with large context windows

## Model Versions

Models get updated:
- `gpt-4-0613` — June 2013 version
- `gpt-4-1106-preview` — November 2023 version
- `gemini-1.5-pro-001` — Version 001

Usually, use the latest version unless you need consistency.

## What Models Are Good At

Different models excel at different things:

**Claude (Anthropic)**
- Long, detailed responses
- Code generation and analysis
- Following complex instructions

**GPT-4 (OpenAI)**
- Creative writing
- General knowledge
- Conversational AI

**Gemini (Google)**
- Integration with Google services
- Multimodal (text + images)
- Cost-effective

## Models in This Workshop

You'll primarily use:
- **Gemini** — For quick prototyping and API calls
- **Whatever AI assistant you prefer** — For code generation

The principles work across all models.

## Model Capabilities Change Over Time

Important: Models are constantly improving.
- A task that requires GPT-4 today might work with GPT-3.5 tomorrow
- New models are released regularly
- Costs generally decrease over time

Don't get too attached to specific model names — the landscape evolves quickly.

## Related Terms
- [API](./api.md)
- [Token](./token.md)
- [Context Window](./context-window.md)
- [Prompt](./prompt.md)
