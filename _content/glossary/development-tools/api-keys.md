# API Keys

An **API key** is a secret password that identifies your application when making API calls — it's how services know who's making requests and track usage/billing.

## Why API Keys Exist

API keys serve three purposes:

1. **Authentication** — Proves you have permission to use the API
2. **Rate limiting** — Tracks how many requests you make
3. **Billing** — Associates usage with your account for payment

## What API Keys Look Like

```
sk-proj-abc123def456ghi789...
AIzaSyD-abc123def456ghi789...
anthropic_abc123def456...
```

- Usually long random strings
- Often start with a prefix identifying the service
- Should NEVER be shared publicly

## Getting an API Key

Typical process:

1. **Sign up** for the service (OpenAI, Google, Anthropic, etc.)
2. **Navigate** to API settings or developer console
3. **Generate** a new API key
4. **Copy** it immediately (often can't see it again)
5. **Store** it securely

## Using API Keys

### In Python Code

```python
import os
from anthropic import Anthropic

# Load API key from environment variable
api_key = os.environ.get("ANTHROPIC_API_KEY")

# Use it to authenticate
client = Anthropic(api_key=api_key)

# Make API calls
response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    messages=[{"role": "user", "content": "Hello!"}]
)
```

### Never Hardcode Keys

❌ **DANGER: Never do this**
```python
# DO NOT DO THIS
api_key = "sk-proj-abc123def456..."  # Visible in code!

# If you commit this to Git, it's exposed forever
```

✓ **Safe: Use environment variables**
```python
import os
api_key = os.environ.get("OPENAI_API_KEY")
```

## Security Best Practices

### 1. Use Environment Variables
Store keys in environment variables, not in code.

### 2. Add .env to .gitignore
```bash
# .gitignore file
.env
.env.local
*.env
```

### 3. Rotate Keys Regularly
If a key is exposed, regenerate it immediately.

### 4. Use Different Keys for Different Projects
Don't reuse the same key everywhere.

### 5. Set Usage Limits
Most services let you set spending limits to prevent abuse.

## What Happens If Your Key Leaks?

If you accidentally commit an API key to GitHub:

1. **Revoke the key immediately** (in the service's dashboard)
2. **Generate a new key**
3. **Update your environment variables**
4. **Check for unexpected usage** (someone might have used it)

GitHub and many services scan for leaked keys and may notify you.

## API Keys in Codespaces

When using GitHub Codespaces, you can set secrets:

1. Go to your repository settings
2. Navigate to Secrets → Codespaces
3. Add your API keys as secrets
4. They'll be available as environment variables

## Free Tier Limits

Most APIs have free tiers with limits:

**OpenAI:**
- Free trial: $5 credit
- Then: Pay per use

**Anthropic (Claude):**
- Pay per use
- ~$3 per million tokens (varies by model)

**Google (Gemini):**
- Free tier: 15 requests per minute
- Paid tier: Higher limits

Check current pricing — it changes frequently and generally decreases over time.

## API Key Formats by Service

| Service | Prefix | Example |
|---------|--------|---------|
| OpenAI | `sk-` | `sk-proj-abc123...` |
| Anthropic | `sk-ant-` | `sk-ant-api03-abc123...` |
| Google | `AIza` | `AIzaSyD-abc123...` |
| GitHub | `ghp_` | `ghp_abc123def456...` |

## In This Workshop

You'll use API keys to:
- Call Gemini API for text analysis
- Authenticate with AI services from your Python code
- Store them securely in environment variables

## Related Terms
- [Environment Variables](./environment-variables.md)
- [API](../ai-concepts/api.md)
- [Codespaces](./codespaces.md)
