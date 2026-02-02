# Workshop 04: Structured Output

## What You're Doing This Session

In Workshop 03, you learned how to chain API calls together. But there's a problem: the AI gives you back **paragraphs**. 

For example, you ask "What are the themes in this passage?" and you get:

```
The passage explores creation, divine authority, and the separation of order 
from chaos. Light and darkness are used as metaphors for knowledge and ignorance.
```

That's readable, but what if you want to:
- Compare themes across 100 passages?
- Count how many passages have "creation" as a theme?
- Build a database of passages organized by theme?
- Generate a player card with structured fields?

You can't easily do that with a paragraph. You need **structured output** — organized data with consistent fields.

This workshop teaches you how to get the AI to return data in a specific format: **CONTROL**.

---

## The AI Prompts

### Prompt 1: Basic Structured Output

Set up your environment:

```python
from openai import OpenAI
from pydantic import BaseModel

client = OpenAI()

passage = """In the beginning God created the heaven and the earth. 
And the earth was without form, and void; and darkness was upon the face of the deep. 
And the Spirit of God moved upon the face of the waters. And God said, Let there be light: 
and there was light. And God saw the light, that it was good: and God divided the light 
from the darkness. And God called the light Day, and the darkness he called Night. 
And the evening and the morning were the first day."""
```

Then ask the AI:

```
Write Python code that uses the OpenAI API with structured output (Pydantic). 
I want to analyze a text passage and get back a structured object with these fields:
- title (string)
- themes (list of strings)
- quote (string)
- mood (string)

Use `client.beta.messages.parse()` with a Pydantic model. 
I already have `client = OpenAI()` set up.
```

**What to expect:** The AI will define a Pydantic class (a schema) and use it to get structured output.

### Prompt 2: Understanding

```
Explain this code to me. What is Pydantic? What is a schema? 
What does the response format do?
```

### Prompt 3: Extend the Schema

```
Add two new fields to the schema:
- key_images (list of strings): important imagery from the passage
- power_rating (integer 1-10): how significant is this passage mythologically

Then ask the AI to analyze the passage with the extended schema.
```

---

## The Code: What the AI Gave You

### Define Your Schema with Pydantic

```python
from pydantic import BaseModel

class TextAnalysis(BaseModel):
    title: str
    themes: list[str]
    quote: str
    mood: str
```

Let's break this down:

- **`from pydantic import BaseModel`** — Import Pydantic, a library for defining data structures
- **`class TextAnalysis(BaseModel):`** — Define a schema class (a template for data)
- **`title: str`** — This field is a string (text)
- **`themes: list[str]`** — This field is a list of strings
- **`quote: str`** — Another string
- **`mood: str`** — Another string

This schema says: "I want data that looks like this: a title (text), themes (multiple text items), a quote (text), and a mood (text)."

### Using the Schema in an API Call

```python
response = client.beta.messages.parse(
    model="gpt-4o-mini",
    messages=[
        {
            "role": "user",
            "content": f"""Analyze this passage and extract the requested information:

Title: Identify the passage or give it a short name
Themes: List 2-3 main themes
Quote: Choose one representative quote
Mood: Describe the overall mood in one word

Passage:
{passage}"""
        }
    ],
    response_format=TextAnalysis
)

analysis = response.content[0].parsed
print(analysis)
```

The key difference from Workshop 03:
- We use **`client.beta.messages.parse()`** instead of `client.messages.create()`
- We pass **`response_format=TextAnalysis`** — telling the AI "return data matching this schema"

When you run this, instead of getting back text, you get back a `TextAnalysis` object with the fields you defined.

### Accessing the Fields

```python
print("Title:", analysis.title)
print("Themes:", analysis.themes)
print("Quote:", analysis.quote)
print("Mood:", analysis.mood)

# Loop through themes
for theme in analysis.themes:
    print(f"  - {theme}")
```

Now you can access each field directly. `analysis.themes` is a Python list you can loop through. `analysis.title` is a string you can print or manipulate.

### Converting to a Dictionary

```python
# Convert to a dictionary (useful for JSON or databases)
data = analysis.model_dump()
print(data)
# Output: {"title": "Genesis 1:1-5", "themes": ["creation", "light"], ...}
```

---

## Breaking It Down: How Structured Output Works

### What Is a Schema?

A schema is a **template** that defines what fields you want and what type each field should be.

```python
class TextAnalysis(BaseModel):
    title: str              # Must be text
    themes: list[str]       # Must be a list of text items
    quote: str              # Must be text
    mood: str               # Must be text
```

This is like saying to the AI: "When you analyze this passage, give me back a data structure with these four fields, and these are the types."

### Type Hints

Python uses **type hints** to say what type a field should be:

| Type | What It Means | Example |
|------|---------------|---------|
| `str` | String (text) | `"Genesis 1:1-5"` |
| `int` | Integer (whole number) | `8` |
| `float` | Float (decimal number) | `3.14` |
| `bool` | Boolean (True or False) | `True` |
| `list[str]` | List of strings | `["creation", "order", "light"]` |
| `list[int]` | List of integers | `[1, 2, 3]` |
| `dict` | Dictionary (key-value pairs) | `{"key": "value"}` |

### How the API Enforces the Schema

When you call with `response_format=TextAnalysis`, the API:

1. Receives your prompt
2. Generates a response
3. Formats it to match your schema
4. Returns structured data you can use immediately

It's like saying to a human: "Answer these questions with this exact format."

### The Parsed Response

```python
analysis = response.content[0].parsed
```

- **`response.content[0]`** — The first content block
- **`.parsed`** — The parsed (structured) version of that content

This gives you a Python object where you can access fields directly:

```python
analysis.title    # Get the title
analysis.themes   # Get the list of themes
```

---

## Extended Schema (After Prompt 3)

If you add more fields:

```python
class TextAnalysisExtended(BaseModel):
    title: str
    themes: list[str]
    quote: str
    mood: str
    key_images: list[str]      # NEW
    power_rating: int           # NEW
```

Then use it:

```python
response = client.beta.messages.parse(
    model="gpt-4o-mini",
    messages=[
        {
            "role": "user",
            "content": f"""Analyze this passage:

Title: Give it a name
Themes: List 2-3 themes
Quote: A representative quote
Mood: One-word mood
Key images: Important imagery (metaphors, visual elements)
Power rating: 1-10, how mythologically significant is this?

Passage:
{passage}"""
        }
    ],
    response_format=TextAnalysisExtended
)

analysis = response.content[0].parsed
print("Key images:", analysis.key_images)
print("Power rating:", analysis.power_rating)
```

Now you have structured data with more detail.

---

## Why Structured Output Matters

### Without Structure (Paragraph)

```
The passage is very significant mythologically, with a power rating of 9.
Key imagery includes void, waters, light and darkness, representing chaos
and order, knowledge and ignorance.
```

To extract the power rating, you'd have to:
- Read the text
- Find "power rating of 9"
- Extract the number 9
- Convert it to an integer

That's fragile and error-prone.

### With Structure (Object)

```python
analysis.power_rating  # Returns: 9 (as an integer)
analysis.key_images    # Returns: ["void", "waters", "light", "darkness"] (as a list)
```

You get immediate access to the data. You can use it in calculations, comparisons, or to build other things.

---

## Real-World Use Case: Building Player Cards

Imagine you want to create player cards for a game. Each card needs:

```python
class PlayerCard(BaseModel):
    title: str
    source: str
    era: str
    themes: list[str]
    mood: str
    power_rating: int
    key_images: list[str]
```

Ask the AI to analyze 3 passages with this schema. Now you have:

```python
card1 = {
    "title": "Genesis 1:1-5",
    "source": "Bible",
    "era": "ancient",
    "themes": ["creation", "light vs darkness", "divine speech"],
    "mood": "majestic",
    "power_rating": 9,
    "key_images": ["void", "waters", "light", "darkness"]
}
```

This data is ready to:
- Save to a database
- Export to JSON
- Display in a web app
- Compare with other cards
- Generate visualizations

With paragraphs, you'd have to parse text manually. With structure, you have immediately usable data.

---

## Combining Everything: Functions + Loops + API + Structure

Here's how you'd process multiple passages:

```python
def analyze_text(text: str, title: str) -> dict:
    """Extract structured analysis from a passage."""
    response = client.beta.messages.parse(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": f"Analyze this passage:\n\n{text}"
            }
        ],
        response_format=TextAnalysis
    )
    return response.content[0].parsed.model_dump()

# Process multiple passages
passages = [
    ("Genesis", genesis_text),
    ("Hesiod", hesiod_text),
    ("Ovid", ovid_text)
]

analyses = []
for name, text in passages:
    analysis = analyze_text(text, name)
    analyses.append(analysis)

# Now you have structured data for all three
for analysis in analyses:
    print(f"{analysis['title']}: Power {analysis['power_rating']}/10")
```

You're combining:
- **Functions** from Workshop 01
- **Loops** from Workshop 02
- **API calls** from Workshop 03
- **Structured output** from Workshop 04

This is powerful. You can process hundreds of texts, get back organized data, and use it to build things.

---

## Key Concepts

| Concept | What It Means | Example |
|---------|---------------|---------|
| **Schema** | A template defining what fields you want | `class TextAnalysis(BaseModel):` |
| **Pydantic** | A Python library for defining schemas | `from pydantic import BaseModel` |
| **Type hint** | Specifies what type a field should be | `title: str` or `themes: list[str]` |
| **Structured output** | Data formatted to match a schema | An object with accessible fields |
| **Parsed response** | The AI's response formatted as your schema | `response.content[0].parsed` |

---

## Common Patterns

### Pattern 1: Single Field List

Get a list of items from the AI:

```python
class Themes(BaseModel):
    items: list[str]

response = client.beta.messages.parse(
    model="gpt-4o-mini",
    messages=[...],
    response_format=Themes
)

themes = response.content[0].parsed.items  # ["creation", "light", "order"]
```

### Pattern 2: Multiple Objects

If you want multiple objects, return a list:

```python
class Card(BaseModel):
    title: str
    power: int

class CardList(BaseModel):
    cards: list[Card]

# Then response.content[0].parsed.cards gives you a list of cards
```

### Pattern 3: Nested Objects

Objects within objects:

```python
class Character(BaseModel):
    name: str
    age: int

class Scene(BaseModel):
    title: str
    characters: list[Character]
    setting: str

# Now you have structured data with nested information
```

---

## What Just Happened

You learned:

1. **How to define a schema** — What fields you want and their types
2. **How to get structured output** — Ask the AI for data in a specific format
3. **How to use structured data** — Access fields directly, build on them

This is the third major power: **CONTROL**. You're not limited to paragraphs anymore. You can shape what the AI gives you and use it immediately.

---

## Next: Putting It All Together

You've learned:
- **Workshop 01:** Functions (reusable code)
- **Workshop 02:** Loops (apply to many items)
- **Workshop 03:** API chaining (connect steps)
- **Workshop 04:** Structured output (organize data)

In Workshop 05, you'll put all of this together: process multiple passages, extract structured data, generate images with DALL-E, and create player cards ready for use in a web app.

That's where it gets fun.
