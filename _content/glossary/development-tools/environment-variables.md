# Environment Variables

**Environment variables** are named values stored outside your code that configure how your program runs — like settings that can change without modifying code.

## Why Environment Variables?

### The Problem
```python
# BAD: Secrets in code
api_key = "sk-abc123..."  # Exposed if you share code!
database = "production-db"  # Can't switch to test database easily
```

### The Solution
```python
# GOOD: Secrets in environment
import os
api_key = os.environ.get("API_KEY")
database = os.environ.get("DATABASE_NAME")
```

Now you can:
- Share code without exposing secrets
- Use different settings in different environments
- Change configuration without editing code

## Common Use Cases

### 1. API Keys and Secrets
```python
OPENAI_API_KEY=sk-proj-abc123...
ANTHROPIC_API_KEY=sk-ant-api03-xyz...
DATABASE_PASSWORD=super-secret-password
```

### 2. Configuration
```python
ENVIRONMENT=production  # or 'development', 'testing'
DEBUG=False
PORT=8000
```

### 3. Database Connections
```python
DATABASE_URL=postgresql://localhost/mydb
REDIS_URL=redis://localhost:6379
```

## How to Set Environment Variables

### Option 1: .env File (Local Development)

Create a `.env` file:
```bash
# .env
OPENAI_API_KEY=sk-proj-abc123...
ANTHROPIC_API_KEY=sk-ant-xyz...
DEBUG=True
```

Add to `.gitignore`:
```bash
# .gitignore
.env
.env.local
```

Load in Python:
```python
from dotenv import load_dotenv
import os

load_dotenv()  # Load .env file

api_key = os.environ.get("OPENAI_API_KEY")
```

### Option 2: Shell Export (Terminal)

```bash
export OPENAI_API_KEY="sk-proj-abc123..."
export DEBUG="True"

# Now run your script
python my_script.py
```

### Option 3: Codespaces Secrets

In GitHub Codespaces:
1. Repository Settings → Secrets → Codespaces
2. Add secrets (they become environment variables)
3. Automatically available in your Codespace

### Option 4: Platform-Specific (Vercel, etc.)

Most hosting platforms have environment variable settings:
- Vercel: Project Settings → Environment Variables
- Heroku: Config Vars
- AWS: Systems Manager Parameter Store

## Accessing Environment Variables

### Python
```python
import os

# Get variable (returns None if not set)
api_key = os.environ.get("API_KEY")

# Get variable (raises error if not set)
api_key = os.environ["API_KEY"]

# Get with default value
port = os.environ.get("PORT", "8000")
```

### JavaScript/Node
```javascript
// Get variable
const apiKey = process.env.API_KEY;

// With default
const port = process.env.PORT || 8000;
```

### Shell/Bash
```bash
echo $API_KEY
```

## Best Practices

### 1. Never Commit Secrets
```bash
# Always add to .gitignore
.env
.env.local
.env.*.local
```

### 2. Provide a Template
```bash
# .env.example (commit this)
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here
DATABASE_URL=your_database_url
```

Users copy this to `.env` and fill in real values.

### 3. Document Required Variables
In your README:
```markdown
## Required Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key
- `DATABASE_URL` - PostgreSQL connection string
- `DEBUG` - Set to 'True' for development
```

### 4. Validate on Startup
```python
import os
import sys

required_vars = ["OPENAI_API_KEY", "DATABASE_URL"]

for var in required_vars:
    if not os.environ.get(var):
        print(f"Error: {var} environment variable not set")
        sys.exit(1)
```

## Environment Variable Naming Conventions

**Standard convention:**
- ALL_CAPS_WITH_UNDERSCORES
- Descriptive names
- No spaces

**Good examples:**
- `OPENAI_API_KEY`
- `DATABASE_URL`
- `MAX_UPLOAD_SIZE`
- `ENABLE_DEBUG_MODE`

**Bad examples:**
- `key` (too vague)
- `my-api-key` (use underscores)
- `MyApiKey` (not uppercase)

## Different Environments

Common pattern: Different settings per environment

```bash
# .env.development
DEBUG=True
DATABASE_URL=postgresql://localhost/mydb_dev
API_URL=http://localhost:3000

# .env.production
DEBUG=False
DATABASE_URL=postgresql://prod-server/mydb
API_URL=https://api.example.com
```

## Checking What's Set

### In Terminal
```bash
# See all environment variables
env

# See specific variable
echo $OPENAI_API_KEY

# Set temporarily for one command
OPENAI_API_KEY=abc123 python script.py
```

### In Python
```python
import os

# Print all environment variables
for key, value in os.environ.items():
    print(f"{key}: {value}")

# Check if variable is set
if "OPENAI_API_KEY" in os.environ:
    print("API key is set")
```

## In This Workshop

You'll use environment variables for:
- Storing your API keys securely
- Configuring your development environment
- Keeping secrets out of version control

## Troubleshooting

**Variable not found?**
1. Check spelling (case-sensitive!)
2. Verify .env file is in the right location
3. Ensure you called `load_dotenv()`
4. Check if you need to restart your application

**Variable showing up as `None`?**
```python
# Debug it
import os
print(f"API_KEY value: {os.environ.get('API_KEY')}")
print(f"All vars: {list(os.environ.keys())}")
```

## Related Terms
- [API Keys](./api-keys.md)
- [Codespaces](./codespaces.md)
