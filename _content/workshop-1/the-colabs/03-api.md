# Workshop 03: API Calls and Chaining

## What You're Doing This Session

In Workshop 01, you learned **functions** — reusable blocks of code.
In Workshop 02, you learned **loops** — doing things to many items automatically.

In this workshop, you'll learn **API calls** — how to talk to AI models from your code. And more importantly, you'll learn **chaining** — how to connect multiple API calls so the output of one becomes the input to the next.

This is the second major power of coding with AI: **CHAINING**.

---

## Why This Matters

In ChatGPT, if you want to:
1. Summarize a passage
2. Extract themes from that summary
3. Ask a follow-up question about those themes

...you'd have to copy-paste between each step manually. It's tedious and error-prone.

With API calls and chaining, you do all three steps in code, automatically. The summary flows into the theme extraction, which flows into the follow-up question. No copy-paste needed.

---

## The AI Prompts

### Prompt 1: Basic API Call

First, set up your environment. You'll need an OpenAI API key (in Colab Secrets or environment variables).

```python
from openai import OpenAI
client = OpenAI()

passage = """In the beginning God created the heaven and the earth. 
And the earth was without form, and void; and darkness was upon the face of the deep. 
And the Spirit of God moved upon the face of the waters."""
```

Then ask the AI:

```
Write Python code that uses the OpenAI API to send a passage of text 
and ask for a one-sentence summary. Use the gpt-4o-mini model. 
I already have `client = OpenAI()` set up.
```

**What to expect:** The AI will give you code that calls the API and extracts the response.

### Prompt 2: Understanding

```
Explain this code to me. What is a 'client'? What is the input parameter? 
What does the response object contain?
```

### Prompt 3: Make It Reusable

```
Wrap this API call in a function called `ask(prompt)` that takes a prompt 
string and returns the response text.
```

### Prompt 4: Chain It Together

```
Using my `ask()` function, write code that: 
(1) summarizes the passage, 
(2) takes that summary and asks what the main theme is, 
(3) asks a follow-up question about how that theme relates to creation myths. 
Print the result of each step.
```

---

## The Code: What the AI Gave You

### Basic API Call

Here's what you'll get for Prompt 1:

```python
response = client.messages.create(
    model="gpt-4o-mini",
    messages=[
        {
            "role": "user",
            "content": f"Summarize this passage in one sentence:\n\n{passage}"
        }
    ]
)

summary = response.content[0].text
print(summary)
```

### How It Works

When you run this, it:
1. Sends your passage to OpenAI's servers
2. The AI model processes it
3. You get back a response object
4. You extract the text from that response

The output might be something like:

```
God creates the heavens, earth, and waters at the beginning of existence.
```

### Reusable Function (Prompt 3)

For Prompt 3, you'd wrap it in a function:

```python
def ask(prompt):
    """Send a prompt to the AI and return the response text."""
    response = client.messages.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )
    return response.content[0].text

# Test it
answer = ask("What is the capital of France? Answer in one word.")
print(answer)  # Output: Paris
```

Now you have a simple function `ask()` that takes any prompt and returns an answer. This is your connection to the AI.

### Chaining It Together (Prompt 4)

Here's the powerful part — chaining multiple calls:

```python
# Step 1: Summarize
summary = ask(f"Summarize this passage in one sentence:\n\n{passage}")
print("SUMMARY:")
print(summary)
print()

# Step 2: Identify theme (using the summary from step 1)
theme = ask(f"Based on this summary, what is the main theme in 2-3 words?\n\n{summary}")
print("THEME:")
print(theme)
print()

# Step 3: Follow-up question (using the theme from step 2)
comparison = ask(f"How does the theme of '{theme}' in Genesis compare to creation myths in other cultures? Give 2-3 examples.")
print("COMPARISON:")
print(comparison)
```

Output might look like:

```
SUMMARY:
God creates the heavens, earth, and waters at the beginning of existence.

THEME:
Divine Creation

COMPARISON:
The theme of divine creation appears in many cultures:
1. In Hesiod's Theogony, primordial gods (Titans) emerge from Chaos
2. In Hindu mythology, Brahma creates the universe from cosmic consciousness
3. In Egyptian mythology, the creator god Ra brings order from primordial waters
```

Notice: each step's output became the input to the next step. Step 1's summary fed into Step 2, and Step 2's theme fed into Step 3.

---

## Breaking It Down: How API Calls Work

### What Is a Client?

```python
from openai import OpenAI
client = OpenAI()
```

A **client** is your connection to OpenAI's servers. It:
- Handles authentication (using your API key)
- Formats your request correctly
- Sends it over the internet
- Gets the response back
- Handles errors if something goes wrong

Think of it like a telephone: `client` is the phone, and `messages.create()` is the act of dialing and talking.

### Making an API Call

```python
response = client.messages.create(
    model="gpt-4o-mini",
    messages=[
        {
            "role": "user",
            "content": "Your prompt here"
        }
    ]
)
```

Breaking this down:

- **`client.messages.create()`** — Create a new message (send a prompt to the AI)
- **`model="gpt-4o-mini"`** — Which AI model to use
  - `gpt-4o-mini` is fast and inexpensive
  - `gpt-4` is more capable but slower and more expensive
  - You choose based on your needs
- **`messages=[...]`** — A list of messages in the conversation
  - Each message has a `"role"` (who is talking) and `"content"` (what they said)
  - `"role": "user"` means this is a question/prompt from you
  - `"role": "assistant"` means this is a response from the AI
- **`"content": "Your prompt here"`** — The actual text you're sending

### Getting the Response Back

```python
summary = response.content[0].text
```

The response object contains several pieces of information. What we care about is:
- **`response.content[0]`** — The first (and usually only) content block in the response
- **`.text`** — The actual text of the response

So `response.content[0].text` extracts the AI's answer as a string.

### The Simple Function Wrapper

```python
def ask(prompt):
    """Send a prompt to the AI and return the response text."""
    response = client.messages.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )
    return response.content[0].text
```

This function does three things:
1. Takes a prompt string as input
2. Calls the OpenAI API with that prompt
3. Returns just the text (not the whole response object)

Now instead of writing out the full API call every time, you just write:

```python
answer = ask("What is 2+2?")
```

Much cleaner.

---

## Breaking Down Chaining

The magic of chaining is this: **the output of one operation becomes the input to the next.**

```python
# Step 1: Get a summary
summary = ask(f"Summarize this passage in one sentence:\n\n{passage}")

# Step 2: Use the summary
theme = ask(f"Based on this summary, what is the main theme?\n\n{summary}")

# Step 3: Use the theme
comparison = ask(f"How does '{theme}' compare to other creation myths?")
```

Look at what we're doing:

- In **Step 1**, we call `ask()` and store the result in `summary`
- In **Step 2**, we pass `summary` into a new prompt
- In **Step 3**, we use `theme` (from Step 2) in yet another prompt

Each step builds on the previous one. In ChatGPT, you'd have to:
1. Write the first prompt
2. Copy the answer
3. Write a second prompt, paste the answer in
4. Copy that answer
5. Write a third prompt, paste the answer in

With code, it's seamless and automatic.

---

## Combining Loops + API (Advanced)

Now combine what you learned in Workshop 02 (loops) with API calls:

```python
passages = [
    ("Genesis", """In the beginning God created the heaven and the earth..."""),
    ("Hesiod", """First of all, the Void came into being..."""),
    ("Ovid", """Before the sea and lands began to be...""")
]

# Loop through passages and summarize each
for name, text in passages:
    summary = ask(f"Summarize this passage in one sentence:\n\n{text}")
    print(f"{name}: {summary}")
```

This loops through 3 passages and summarizes each one **automatically**. No copy-paste. The code handles it.

Think about what's happening:
- Workshop 01: Write one function, use it many times manually
- Workshop 02: Loop through items, apply a function to each
- Workshop 03: Loop through items, apply **API calls** to each, chain results together

---

## Key Concepts

| Concept | What It Means | Example |
|---------|---------------|---------|
| **Client** | Your connection to the AI API | `client = OpenAI()` |
| **API call** | Sending a prompt to the AI from code | `client.messages.create(...)` |
| **Response** | What comes back from the API | The AI's text answer |
| **Chaining** | Output of step 1 → Input of step 2 | `ask()` result fed into next `ask()` |
| **Integration** | Combining loops with API calls | Loop through items, call API for each |

---

## Important Notes

### API Keys and Security

Your OpenAI API key is secret. **Never commit it to Git.** In Colab, use Secrets. In local development, use environment variables or a `.env` file (add to `.gitignore`).

### Cost

Each API call costs money (though usually a few cents). Be mindful of how many calls you're making, especially in loops. A loop with 1,000 items × 1 API call per item = 1,000 API calls.

### Rate Limiting

OpenAI has rate limits on how many requests you can make per minute. For loops with many items, you might need to add pauses between calls.

---

## What Just Happened

You learned:

1. **How to call an AI API from code** — No more copy-pasting into ChatGPT
2. **How to chain multiple calls** — Output of one becomes input to the next
3. **How to scale with loops** — Process many items, each with API calls

This is the second major power: **CHAINING**. You can now build workflows that would be tedious to do manually.

---

## Next: Structured Output

In Workshop 03, you learned how to call the AI and get back **text** (paragraphs).

But what if you want structured data? What if you want the AI to give you:
- A list of themes (not a paragraph about themes)
- A JSON object with fields
- Data you can analyze, compare, or use to build things

In Workshop 04, you'll learn **structured output** — how to tell the AI "give me back data in this format" and get organized, usable information.

That's the third major power: **CONTROL**.
