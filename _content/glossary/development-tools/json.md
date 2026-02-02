# JSON (JavaScript Object Notation)

**JSON** is a text format for storing and exchanging structured data — it's the language APIs use to communicate.

## Why JSON Matters

JSON is everywhere:
- **API responses** — How services send you data
- **Configuration files** — Settings for your programs
- **Data storage** — Lightweight database format
- **Data exchange** — Universal format across languages

If you work with APIs or structured data, you'll work with JSON.

## What JSON Looks Like

```json
{
  "book": "Genesis",
  "chapter": 1,
  "word_count": 2547,
  "themes": ["creation", "light", "separation"],
  "metadata": {
    "language": "English",
    "version": "KJV",
    "verified": true
  }
}
```

## JSON Structure

### Objects (Dictionaries)
Enclosed in `{}`, contain key-value pairs:

```json
{
  "name": "Genesis",
  "chapter": 1
}
```

In Python, this becomes a dictionary:
```python
{"name": "Genesis", "chapter": 1}
```

### Arrays (Lists)
Enclosed in `[]`, contain ordered items:

```json
["Genesis", "Exodus", "Leviticus"]
```

In Python, this becomes a list:
```python
["Genesis", "Exodus", "Leviticus"]
```

### Values
JSON supports:
- **Strings**: `"text in quotes"`
- **Numbers**: `42` or `3.14`
- **Booleans**: `true` or `false`
- **Null**: `null` (like Python's `None`)
- **Objects**: `{...}`
- **Arrays**: `[...]`

## Working with JSON in Python

### Reading JSON

```python
import json

# JSON string
json_text = '{"book": "Genesis", "chapter": 1}'

# Convert to Python dictionary
data = json.loads(json_text)

print(data["book"])     # Output: Genesis
print(data["chapter"])  # Output: 1
```

### Writing JSON

```python
import json

# Python dictionary
data = {
    "book": "Genesis",
    "chapter": 1,
    "themes": ["creation", "light"]
}

# Convert to JSON string
json_text = json.dumps(data, indent=2)

print(json_text)
```

Output:
```json
{
  "book": "Genesis",
  "chapter": 1,
  "themes": [
    "creation",
    "light"
  ]
}
```

## Real-World Example: API Response

When you call an AI API:

```python
# Your request
response = api.analyze(text="In the beginning...")

# Response comes back as JSON
{
  "analysis": {
    "themes": ["creation", "beginning"],
    "word_count": 5,
    "sentiment": "neutral"
  },
  "usage": {
    "input_tokens": 20,
    "output_tokens": 45
  }
}

# Access in Python
print(response["analysis"]["themes"])
# Output: ['creation', 'beginning']
```

## JSON vs. Python Differences

Be aware of minor differences:

| JSON | Python |
|------|--------|
| `true` | `True` |
| `false` | `False` |
| `null` | `None` |
| Double quotes only | Single or double quotes |

Python's `json` module handles these conversions automatically.

## Common JSON Patterns

### Nested Data
```json
{
  "book": {
    "title": "Genesis",
    "chapters": [
      {"number": 1, "verses": 31},
      {"number": 2, "verses": 25}
    ]
  }
}
```

### List of Objects
```json
[
  {"name": "Genesis", "chapters": 50},
  {"name": "Exodus", "chapters": 40},
  {"name": "Leviticus", "chapters": 27}
]
```

## JSON in This Workshop

You'll use JSON for:
- **API responses** from Gemini/OpenAI
- **Storing analysis results**
- **Configuration files**
- **Structured data** in your final project

## Related Terms
- [Dictionary](../python-basics/dictionary.md)
- [List](../python-basics/list.md)
- [API](./api.md)
