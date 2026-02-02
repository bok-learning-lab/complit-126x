# String

A **string** is text data in programming — any sequence of characters enclosed in quotes.

## What Counts as a String?

Strings can contain:
- Words: `"hello"`
- Sentences: `"In the beginning God created the heavens"`
- Numbers as text: `"123"` (not the same as the number 123)
- Special characters: `"Hello! How are you?"`
- Empty text: `""` (an empty string)

## Creating Strings

You can use single or double quotes:

```python
text1 = "Genesis 1"
text2 = 'Genesis 1'
text3 = """This is a
multi-line
string"""
```

## Common String Operations

```python
text = "Genesis"

# Length
len(text)              # Returns: 7

# Uppercase/Lowercase
text.upper()           # Returns: "GENESIS"
text.lower()           # Returns: "genesis"

# Split into words
sentence = "In the beginning"
words = sentence.split()    # Returns: ["In", "the", "beginning"]

# Combining strings
greeting = "Hello, " + "world!"    # Returns: "Hello, world!"

# Checking contents
"Gen" in text          # Returns: True
"Exod" in text         # Returns: False
```

## String Formatting

Modern way to insert variables into strings:

```python
book = "Genesis"
chapter = 1
message = f"Reading {book} chapter {chapter}"
# Result: "Reading Genesis chapter 1"
```

## Why Strings Matter in Text Analysis

For humanities work, strings are fundamental:
- Texts you're analyzing are strings
- Words extracted from texts are strings
- Results you display are strings

Most text analysis starts with: "How do I process this string?"

## Related Terms
- [Variable](./variable.md)
- [List](./list.md)
- [Function](./function.md)
