# Variable

A **variable** is a named container that stores a value in your program.

## Think of It Like...

A variable is like a labeled box:
- The **name** is the label on the box (e.g., `word_count`)
- The **value** is what's inside the box (e.g., `2547`)
- You can look inside the box (read the value)
- You can put something new in the box (change the value)

## Basic Usage

```python
# Creating variables
name = "Genesis"
chapter = 1
word_count = 2547

# Using variables
print(name)           # Outputs: Genesis
print(chapter)        # Outputs: 1
print(word_count)     # Outputs: 2547

# Changing variables
chapter = 2
print(chapter)        # Outputs: 2
```

## Naming Rules

Valid variable names:
- `word_count` ✓
- `genesis_text` ✓
- `chapter1` ✓
- `total_words` ✓

Invalid variable names:
- `word-count` ✗ (no hyphens)
- `1chapter` ✗ (can't start with number)
- `for` ✗ (reserved Python keyword)

## Types of Values

Variables can hold different types of data:

```python
text = "Hello, world!"       # String (text)
number = 42                  # Integer (whole number)
price = 19.99                # Float (decimal number)
is_complete = True           # Boolean (True/False)
words = ["the", "quick"]     # List (collection)
```

## Related Terms
- [String](./string.md)
- [List](./list.md)
- [Dictionary](./dictionary.md)
