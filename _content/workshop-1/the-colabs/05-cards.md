# Workshop 05: Putting It All Together — Player Cards

## What You're Doing This Session

In the previous four workshops, you learned:

1. **Functions** (Workshop 01) — Reusable blocks of code
2. **Loops** (Workshop 02) — Apply a function to many items automatically (SCALE)
3. **API Chaining** (Workshop 03) — Connect steps so output of one becomes input to the next (CHAINING)
4. **Structured Output** (Workshop 04) — Get organized data instead of paragraphs (CONTROL)

In this workshop, you're putting it all together to build something real: **Player Cards**.

You'll:
1. Define a card schema
2. Create a function that extracts card data from a passage
3. Create a function that generates card art with DALL-E
4. Loop through multiple passages, extracting data and generating images
5. Save everything as JSON ready for use in a web app

---

## What You're Building

By the end, you'll have:

- **3 player cards** with titles, themes, quotes, power ratings, imagery
- **3 AI-generated images** created with DALL-E
- **A JSON file** with all the card data, ready to use in a Next.js app

Each card will look like this:

```json
{
  "id": "genesis",
  "title": "Genesis 1:1-5",
  "source": "Bible",
  "era": "ancient",
  "themes": ["creation", "light vs darkness", "divine speech"],
  "quote": "Let there be light: and there was light.",
  "mood": "majestic and foundational",
  "power_rating": 9,
  "key_images": ["void", "waters", "light", "darkness"],
  "art_prompt": "An epic fantasy card art image of divine creation...",
  "image_path": "cards/genesis.png"
}
```

---

## The AI Prompts

### Prompt 1: Define the Card Schema

Ask the AI:

```
Write Python code that defines a Pydantic schema for player cards.
Each card should have:
- id (string): unique identifier
- title (string): passage title
- source (string): what book/source it's from
- era (string): what historical era
- themes (list of strings): main themes
- quote (string): a representative quote
- mood (string): the overall mood
- power_rating (integer 1-10): mythological significance
- key_images (list of strings): important imagery
- art_prompt (string): a detailed visual prompt for DALL-E
- image_path (string): where the image will be saved

Use Pydantic BaseModel.
```

### Prompt 2: Create the Extraction Function

```
Write a function called `extract_card(name, text)` that:
1. Takes a passage name and text
2. Uses client.beta.messages.parse() with the PlayerCard schema
3. Asks the AI to analyze the passage and fill in all fields
4. Returns the card data as a dictionary

For the art_prompt, ask the AI to create a vivid visual description 
suitable for generating card art. Use a style like "epic fantasy card 
game art" or "mythological illustration".

I already have the PlayerCard schema and client = OpenAI() set up.
```

### Prompt 3: Create the Image Generation Function

```
Write a function called `generate_card_art(art_prompt, card_id)` that:
1. Takes an art prompt and a card ID
2. Uses client.images.generate() to create an image with DALL-E
3. Downloads the image
4. Saves it to a file like cards/{card_id}.png
5. Returns the file path

Use the model "dall-e-3" and size "1024x1024".
```

### Prompt 4: Create the Processing Function

```
Write a function called `process_passage(passage_dict)` that:
1. Takes a dictionary with id, name, and text
2. Calls extract_card() to get the structured data
3. Calls generate_card_art() to generate the image
4. Updates the card data with the image path
5. Returns the complete card data

Handle any errors gracefully.
```

### Prompt 5: Loop Through All Passages

```
I have a list of passages like:
```python
passages = [
    {"id": "genesis", "name": "Genesis", "text": "..."},
    {"id": "theogony", "name": "Hesiod's Theogony", "text": "..."},
    {"id": "metamorphoses", "name": "Ovid's Metamorphoses", "text": "..."}
]
```

Write code that:
1. Loops through each passage
2. Calls process_passage() for each one
3. Collects the results in a list
4. Saves the list to JSON at cards.json
5. Prints a summary of what was created
```

---

## The Code: What the AI Gave You

### Define the Schema

```python
from pydantic import BaseModel

class PlayerCard(BaseModel):
    id: str
    title: str
    source: str
    era: str
    themes: list[str]
    quote: str
    mood: str
    power_rating: int
    key_images: list[str]
    art_prompt: str
    image_path: str
```

Simple: just define the fields and their types. Pydantic handles the rest.

### Extract Card Data

```python
def extract_card(name: str, text: str, card_id: str) -> dict:
    """Extract a PlayerCard from a passage using structured output."""
    response = client.beta.messages.parse(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": f"""You are a literary analyst creating player cards 
for mythological and literary texts.

Extract the key information from this passage and rate the cosmic/mythic 
significance from 1-10.

For the art_prompt, create a vivid visual description (2-3 sentences) suitable 
for generating card art with DALL-E. Style: epic fantasy card game art, 
mythological illustration, detailed and atmospheric.

Passage: {text}"""
            }
        ],
        response_format=PlayerCard
    )
    
    card = response.content[0].parsed
    return card.model_dump()
```

This:
1. Calls the API with your schema
2. The AI analyzes the passage and returns structured data
3. Converts it to a dictionary for easier handling

### Generate Image with DALL-E

```python
from pathlib import Path
import requests

def generate_card_art(art_prompt: str, card_id: str, output_dir: str = "cards") -> str:
    """Generate card art with DALL-E and save it."""
    
    # Make sure output directory exists
    Path(output_dir).mkdir(exist_ok=True)
    
    # Generate image
    image_response = client.images.generate(
        model="dall-e-3",
        prompt=art_prompt,
        size="1024x1024",
        quality="standard",
        n=1
    )
    
    # Get the image URL
    image_url = image_response.data[0].url
    
    # Download and save
    image_data = requests.get(image_url).content
    image_path = f"{output_dir}/{card_id}.png"
    
    with open(image_path, "wb") as f:
        f.write(image_data)
    
    return image_path
```

This:
1. Calls DALL-E with your art prompt
2. Downloads the generated image
3. Saves it to a file
4. Returns the file path

### Process a Passage (Combine Both)

```python
def process_passage(passage: dict) -> dict:
    """Process a single passage: extract data and generate art."""
    
    print(f"Processing {passage['name']}...")
    
    # Extract card data
    card_data = extract_card(
        passage['name'],
        passage['text'],
        passage['id']
    )
    
    # Generate image
    print(f"  Generating art...")
    image_path = generate_card_art(
        card_data['art_prompt'],
        passage['id']
    )
    
    # Add image path to card data
    card_data['image_path'] = image_path
    
    print(f"  ✓ Done!")
    return card_data
```

This combines extraction and image generation into one workflow.

### Loop Through All Passages

```python
import json

passages = [
    {
        "id": "genesis",
        "name": "Genesis 1:1-5",
        "text": """In the beginning God created the heaven and the earth. 
And the earth was without form, and void; and darkness was upon the face 
of the deep. And the Spirit of God moved upon the face of the waters. 
And God said, Let there be light: and there was light. And God saw the light, 
that it was good: and God divided the light from the darkness. And God called 
the light Day, and the darkness he called Night. And the evening and the 
morning were the first day."""
    },
    {
        "id": "theogony",
        "name": "Hesiod's Theogony",
        "text": """First of all, the Void came into being, next broad-bosomed Earth, 
the solid and eternal home of all, and Eros, the most beautiful of the immortal gods. 
From Earth and Heaven were born the Titans..."""
    },
    {
        "id": "metamorphoses",
        "name": "Ovid's Metamorphoses",
        "text": """Before the sea and lands began to be, before the sky had mantled 
everything, Nature displayed a single face, which they called Chaos—a rough, 
unordered mass of matter, nothing but a dead weight, a jumble of seeds..."""
    }
]

# Process all passages
cards = []
for passage in passages:
    card = process_passage(passage)
    cards.append(card)

# Save to JSON
with open("cards.json", "w") as f:
    json.dump(cards, f, indent=2)

print(f"\n✓ Created {len(cards)} cards!")
print(f"✓ Saved to cards.json")
```

---

## Breaking It Down: What's Happening

### Step 1: Define the Schema

You're telling the system what shape your data should take. The schema is a contract: "I want data that looks like this."

### Step 2: Extract Data

The `extract_card()` function:
1. Sends the passage to the AI
2. Asks for analysis in your schema shape
3. Gets back structured data
4. Returns it as a dictionary

The AI understands each field:
- `power_rating: int` means give me a number 1-10
- `themes: list[str]` means give me a list of text items
- `art_prompt: str` means give me a detailed text description

### Step 3: Generate Images

The `generate_card_art()` function:
1. Takes the art prompt (created by the extraction step)
2. Sends it to DALL-E
3. Gets back an image URL
4. Downloads the image
5. Saves it locally

This is **chaining**: the output of the extraction (the art prompt) becomes the input to image generation.

### Step 4: Combine Everything

The `process_passage()` function orchestrates the whole workflow:
1. Extract data
2. Generate image
3. Combine them
4. Return complete card

### Step 5: Loop and Save

Loop through all passages (Workshop 02 + 03 + 04 combined):
1. For each passage, call `process_passage()`
2. Collect results in a list
3. Save to JSON

This is **scaling**: you're processing 3 passages, but the code would work for 30 or 300.

---

## What the Output Looks Like

### JSON File

```json
[
  {
    "id": "genesis",
    "title": "Genesis 1:1-5",
    "source": "Bible",
    "era": "ancient",
    "themes": [
      "creation",
      "light vs darkness",
      "divine speech"
    ],
    "quote": "Let there be light: and there was light.",
    "mood": "majestic and foundational",
    "power_rating": 9,
    "key_images": [
      "void",
      "waters",
      "light",
      "darkness"
    ],
    "art_prompt": "An epic fantasy card art image depicting the moment of divine creation...",
    "image_path": "cards/genesis.png"
  },
  ...
]
```

This is ready to use in a web app, database, or analysis.

### Images

In the `cards/` directory:
- `genesis.png` — DALL-E generated art for Genesis
- `theogony.png` — DALL-E generated art for Hesiod
- `metamorphoses.png` — DALL-E generated art for Ovid

Each image is a unique, AI-generated illustration matching the art prompt.

---

## Using This Data

### In a Web App

Load the JSON and display cards:

```javascript
const cards = await fetch('cards.json').then(r => r.json())

cards.forEach(card => {
  console.log(`${card.title} (Power: ${card.power_rating}/10)`)
  console.log(`Themes: ${card.themes.join(', ')}`)
  console.log(`Image: ${card.image_path}`)
})
```

### In Analysis

```python
import json

with open('cards.json') as f:
    cards = json.load(f)

# Find most powerful cards
sorted_cards = sorted(cards, key=lambda c: c['power_rating'], reverse=True)
for card in sorted_cards[:3]:
    print(f"{card['title']}: {card['power_rating']}/10")

# Find common themes
from collections import Counter
all_themes = []
for card in cards:
    all_themes.extend(card['themes'])

theme_counts = Counter(all_themes)
print(theme_counts.most_common(5))
```

### In a Database

```python
import sqlite3

conn = sqlite3.connect('cards.db')
c = conn.cursor()

c.execute('''CREATE TABLE cards
             (id TEXT, title TEXT, themes TEXT, power_rating INT)''')

for card in cards:
    c.execute(
        "INSERT INTO cards VALUES (?, ?, ?, ?)",
        (card['id'], card['title'], ','.join(card['themes']), card['power_rating'])
    )

conn.commit()
```

Your structured data is immediately usable.

---

## Key Things That Happened

You combined all four workshops:

| Workshop | Concept | Used Here |
|----------|---------|-----------|
| 01 | Functions | `extract_card()`, `generate_card_art()`, `process_passage()` |
| 02 | Loops | Loop through `passages`, process each automatically |
| 03 | API Chaining | Output of extraction feeds into image generation |
| 04 | Structured Output | Define schema, get organized data back |

Plus new skills:
- **Image generation** with DALL-E
- **File I/O** (saving images and JSON)
- **Error handling** (what to do if something fails)

---

## The Three Powers of Code

| Power | What It Does | Saves You From |
|-------|-------------|-----------------|
| **SCALE** | Process many items with the same code | Copy-pasting the same operation 100 times |
| **CHAINING** | Connect steps so output of one becomes input to next | Manual copy-pasting between steps |
| **CONTROL** | Get structured, organized data | Parsing paragraphs to extract information |

These three powers together let you:
- Process 1,000 passages (SCALE)
- Each with 3 AI steps (CHAINING)
- Getting back organized data (CONTROL)
- Automatically

That would take hours manually. Code does it in minutes.

---

## Common Extensions

### Add More Passages

Just add more items to the `passages` list. The same code loops through them all.

### Customize the Schema

Add more fields to `PlayerCard`:
- `author: str`
- `literary_devices: list[str]`
- `historical_context: str`
- `similar_works: list[str]`

Ask the AI to fill them in.

### Different Extraction Prompts

Change the prompt in `extract_card()` to get different analysis:
- Literary analysis (symbolism, motifs, narrative structure)
- Historical analysis (context, influences, legacy)
- Thematic analysis (core themes, character arcs)

### Generate Multiple Images

Instead of one image per card, generate multiple and pick the best:

```python
def generate_card_art_multiple(art_prompt, card_id, count=3):
    """Generate multiple images and return the best one."""
    # Generate multiple images
    # Let the user pick the best
    # Or use a scoring function
```

### Save to a Database Instead of JSON

```python
import sqlite3

conn = sqlite3.connect('cards.db')
for card in cards:
    conn.execute(
        "INSERT INTO cards VALUES (?, ?, ...)",
        (card['id'], card['title'], ...)
    )
conn.commit()
```

---

## What You Built

You just completed a full end-to-end workflow:

1. ✓ Defined data schema
2. ✓ Created extraction functions
3. ✓ Integrated image generation
4. ✓ Looped through multiple inputs
5. ✓ Saved structured output
6. ✓ Generated AI images

This is a real, production-ready system. You could use this to:
- Build a card game
- Create an encyclopedia
- Generate content for a game
- Analyze literary texts at scale
- Create training data

---

## What's Next?

You've learned how to:
- Get AI to generate code you can understand
- Test it and verify it works
- Understand what it does
- Modify and extend it
- Build real systems with it

This is vibes-first coding: you started with working code, understood it through use, and now you can build things.

The skills transfer:
- Need something else generated? Same process.
- Need to process more data? Same pattern (functions, loops, API calls).
- Need structured output? Same approach (define schema, parse response).

You now have a template for building with AI. Go build something.
