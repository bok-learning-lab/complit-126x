# List

A **list** is an ordered collection of items in Python, written with square brackets `[]`.

## Think of It Like...

A list is like:
- A shopping list (ordered, can have duplicates)
- A playlist (sequence of songs)
- A lineup (first, second, third...)

## Creating Lists

```python
# List of strings
books = ["Genesis", "Exodus", "Leviticus"]

# List of numbers
chapters = [1, 2, 3, 4, 5]

# Mixed types (less common)
mixed = ["Genesis", 1, True, 2547]

# Empty list
empty = []
```

## Accessing Items

```python
books = ["Genesis", "Exodus", "Leviticus", "Numbers"]

# By position (starts at 0!)
books[0]        # Returns: "Genesis"
books[1]        # Returns: "Exodus"
books[-1]       # Returns: "Numbers" (last item)

# Slicing (getting a range)
books[0:2]      # Returns: ["Genesis", "Exodus"]
books[1:]       # Returns: ["Exodus", "Leviticus", "Numbers"]
```

## Common List Operations

```python
words = ["the", "quick", "brown"]

# Add to end
words.append("fox")        # Now: ["the", "quick", "brown", "fox"]

# Add multiple items
words.extend(["jumps", "over"])

# Insert at position
words.insert(1, "very")    # Insert at index 1

# Remove item
words.remove("the")        # Removes first occurrence

# Length
len(words)                 # Returns: number of items

# Check if item exists
"quick" in words          # Returns: True
```

## Looping Through Lists

```python
chapters = ["Genesis 1", "Genesis 2", "Genesis 3"]

for chapter in chapters:
    print(f"Processing {chapter}...")
    # Do something with each chapter
```

## When You'll Use Lists

Lists are everywhere in text analysis:
- **Collection of texts** to analyze
- **Words extracted** from splitting text
- **Results** from multiple operations
- **API responses** with multiple items

## Example: Processing Multiple Texts

```python
texts = [
    "In the beginning God created",
    "And God said let there be light",
    "And there was light"
]

word_counts = []
for text in texts:
    words = text.split()
    count = len(words)
    word_counts.append(count)

print(word_counts)  # Output: [5, 7, 4]
```

## Related Terms
- [Loop](./loop.md)
- [Dictionary](./dictionary.md)
- [String](./string.md)
