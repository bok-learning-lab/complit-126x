# API (Application Programming Interface)

An **API** is how your code talks to external services — it's like a menu at a restaurant that tells you what you can order and how to order it.

## Why APIs Matter

An API is how your code connects to:
- **Language models** (OpenAI, Anthropic, Google)
- **Databases** (Supabase, Firebase)
- **Services** (Stripe, Twilio, SendGrid)
- **Data sources** (weather, stocks, news)

**APIs are how you connect to the world.**

Without APIs, your code is isolated.
With APIs, your code becomes a **conductor** orchestrating multiple services.

## Real-World Example

Instead of manually:
1. Copy text from website
2. Paste into ChatGPT
3. Copy result
4. Paste into another tool
5. Repeat 100 times

You can automate with APIs:
```python
for item in dataset:
    result = ai_api.analyze(item)
    database_api.save(result)
```

**This is automation of your entire workflow.**

## How APIs Work

Think of an API as a conversation:

1. **You make a request** (asking for something)
2. **The service processes it** (does the work)
3. **You get a response** (the result)

```python
# Request: "Please analyze this text"
response = gemini_api.analyze_text(
    text="In the beginning...",
    task="identify themes"
)

# Response: The results come back
print(response.themes)
```

## API Keys

Most APIs require an **API key** — a secret password that:
- Identifies who you are
- Tracks your usage
- Controls access and billing

```python
api_key = "sk-abc123..."  # Keep this secret!
client = GeminiAPI(api_key=api_key)
```

## Rate Limits

APIs often have **rate limits** — maximum requests per minute/hour:
- Free tier: 10 requests per minute
- Paid tier: 1000 requests per minute

This prevents abuse and manages server load.

## Common API Terms

- **Endpoint**: The URL you send requests to (e.g., `https://api.example.com/analyze`)
- **Request**: What you send (your data + instructions)
- **Response**: What you get back (results)
- **Status code**: Success/error indicator (200 = success, 404 = not found, 500 = error)

## APIs in This Workshop

You'll use APIs to:
- Send texts to Gemini for analysis
- Get AI-generated insights back
- Process multiple texts automatically

This is the bridge between your local code and AI models in the cloud.

## Related Terms
- [Token](./token.md)
- [Model](./model.md)
- [JSON](./json.md)
- [Rate Limit](./rate-limit.md)
