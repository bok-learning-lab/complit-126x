# Function

A **function** is a reusable block of code that performs a specific task.

## Why Functions Matter

Functions are the "atoms of programming" — small, reusable pieces that you combine to build bigger things.

Without functions, you'd have to:
- Rewrite the same code over and over
- Make it harder to fix bugs (change it everywhere)
- Lose the ability to abstract and compose

With functions, you can:
- Write once, use everywhere
- Build complex behavior from simple pieces
- Test and verify incrementally

## Basic Structure

```python
def greet(name):
    return f"Hello, {name}!"
```

- `def` - Keyword that starts a function definition
- `greet` - The function name
- `name` - The argument/parameter (input)
- `return` - Sends a value back to whoever called the function

## Example in Context

```python
# Define the function
def count_words(text):
    words = text.split()
    return len(words)

# Use the function
genesis_text = "In the beginning God created..."
word_count = count_words(genesis_text)
print(word_count)
```

## Related Terms
- [Argument](./argument.md)
- [Return value](./return-value.md)
- [Variable](./variable.md)
