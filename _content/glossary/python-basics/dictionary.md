# Dictionary

A **dictionary** is a data structure that stores key-value pairs — like a real dictionary maps words to definitions.

## Think of It Like...

A dictionary is like a lookup table:
- The **key** is what you look up (like a word in a dictionary)
- The **value** is what you get back (like the definition)
- Keys must be unique
- Values can be anything

## Basic Structure

```python
# Creating a dictionary
word_counts = {
    "God": 32,
    "heaven": 8,
    "earth": 21,
    "light": 6
}

# Accessing values
print(word_counts["God"])      # Outputs: 32
print(word_counts["earth"])    # Outputs: 21

# Adding new entries
word_counts["water"] = 15

# Changing values
word_counts["God"] = 33
```

## Common Dictionary Operations

```python
book_info = {
    "title": "Genesis",
    "chapter": 1,
    "word_count": 2547,
    "language": "English"
}

# Get a value
book_info["title"]              # Returns: "Genesis"

# Get with default if key doesn't exist
book_info.get("author", "Unknown")    # Returns: "Unknown"

# Check if key exists
"chapter" in book_info          # Returns: True

# Get all keys
book_info.keys()                # Returns: ["title", "chapter", "word_count", "language"]

# Get all values
book_info.values()              # Returns: ["Genesis", 1, 2547, "English"]
```

## When You'll Use Dictionaries

Dictionaries are perfect for:
- **Word frequency counts** (word → count)
- **JSON data from APIs** (structured data)
- **Configuration settings** (setting name → value)
- **Metadata about texts** (property → value)

## Example: Word Frequency

```python
text = "the quick brown fox jumps over the lazy dog"
words = text.split()

# Count word frequencies
word_freq = {}
for word in words:
    if word in word_freq:
        word_freq[word] = word_freq[word] + 1
    else:
        word_freq[word] = 1

print(word_freq)
# Output: {'the': 2, 'quick': 1, 'brown': 1, 'fox': 1, ...}
```

## Related Terms
- [List](./list.md)
- [Variable](./variable.md)
- [JSON](../ai-concepts/json.md)
