# Python

**Python** is a programming language designed for readability and simplicity — it's one of the best languages for beginners and is widely used for data analysis, AI, and automation.

## Why Python for This Workshop?

Python is perfect for text analysis and working with AI because:
- **Readable syntax** — Looks almost like English
- **Rich libraries** — Tons of tools for text processing
- **AI integration** — Easy to call OpenAI, Anthropic, Google APIs
- **Jupyter notebooks** — Interactive coding environment
- **Gentle learning curve** — Faster to learn than most languages

## What Python Looks Like

```python
# This is readable, even if you've never coded
def analyze_text(text):
    words = text.split()
    word_count = len(words)
    return word_count

# Use the function
genesis_text = "In the beginning God created the heavens and the earth"
count = analyze_text(genesis_text)
print(f"Word count: {count}")
```

Compare to other languages — Python is significantly clearer.

## Python vs. Other Languages

### Python
```python
# Count words
words = text.split()
count = len(words)
```

### JavaScript
```javascript
// Count words
const words = text.split(' ');
const count = words.length;
```

### Java
```java
// Count words
String[] words = text.split(" ");
int count = words.length;
```

Python has less syntax noise, more natural reading.

## Python's Philosophy

From "The Zen of Python":
- **Beautiful is better than ugly**
- **Explicit is better than implicit**
- **Simple is better than complex**
- **Readability counts**

This makes Python perfect for humanities scholars learning to code.

## What Python Is Good At

### 1. Data Analysis
```python
import pandas as pd

# Analyze text corpus
data = pd.read_csv('bible_texts.csv')
word_counts = data['text'].apply(lambda x: len(x.split()))
print(word_counts.mean())
```

### 2. AI Integration
```python
import anthropic

client = anthropic.Anthropic()
response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    messages=[{"role": "user", "content": "Analyze this text..."}]
)
```

### 3. Automation
```python
# Process 100 files automatically
import os

for filename in os.listdir('texts/'):
    with open(f'texts/{filename}') as f:
        text = f.read()
        result = analyze(text)
        save_result(filename, result)
```

### 4. Web APIs
```python
from flask import Flask

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    text = request.json['text']
    result = process_text(text)
    return {'result': result}
```

## Python in This Workshop

You'll use Python for:
- Text processing (splitting, counting, filtering)
- Calling AI APIs (Gemini, OpenAI, Anthropic)
- Data structures (lists, dictionaries)
- Automation (loops to process multiple texts)
- Jupyter notebooks (interactive analysis)

## Python Versions

### Python 2 vs. Python 3
- Python 2: Old, deprecated (2020)
- Python 3: Current, what we use

**Always use Python 3** (3.9+ recommended)

Check version:
```bash
python --version
# Should show: Python 3.x.x
```

## Installing Python

### On Mac
```bash
# Using Homebrew
brew install python3
```

### On Windows
Download from python.org or use Microsoft Store

### On Linux
Usually pre-installed, or:
```bash
sudo apt install python3
```

### In Codespaces
Already installed! No setup needed.

## Running Python

### Interactive Mode (REPL)
```bash
$ python3
>>> print("Hello")
Hello
>>> 2 + 2
4
>>> exit()
```

### Script Mode
```bash
# Create file: script.py
print("Hello from script")

# Run it
python3 script.py
```

### Jupyter Notebooks
```bash
# Launch Jupyter
jupyter notebook

# Opens in browser, run cells interactively
```

## Python Package Manager: pip

Install libraries:
```bash
# Install a package
pip install requests

# Install multiple
pip install pandas numpy matplotlib

# From requirements.txt
pip install -r requirements.txt

# List installed
pip list
```

## Common Python Libraries

### For This Workshop
- **requests** — Make HTTP requests
- **openai** — OpenAI API client
- **anthropic** — Anthropic API client
- **google-generativeai** — Google Gemini API

### For Data Analysis
- **pandas** — Data manipulation
- **numpy** — Numerical computing
- **matplotlib** — Plotting
- **jupyter** — Interactive notebooks

### For Text Processing
- **nltk** — Natural Language Toolkit
- **spacy** — Advanced NLP
- **textblob** — Simple text analysis

## Python Syntax Basics

### Indentation Matters
```python
# Correct
def greet(name):
    print(f"Hello {name}")
    return True

# Wrong (IndentationError)
def greet(name):
print(f"Hello {name}")
return True
```

Python uses indentation (spaces/tabs) instead of braces `{}`.

### Comments
```python
# Single line comment

"""
Multi-line comment
or docstring
"""
```

### Naming Conventions
```python
# Variables and functions: snake_case
word_count = 42
def analyze_text(text):
    pass

# Classes: PascalCase
class TextAnalyzer:
    pass

# Constants: UPPER_CASE
MAX_LENGTH = 1000
```

## Python Data Types

```python
# Numbers
count = 42              # int
price = 19.99          # float

# Strings
text = "Genesis"       # str

# Booleans
is_complete = True     # bool

# Lists
books = ["Genesis", "Exodus"]   # list

# Dictionaries
book = {"title": "Genesis", "chapters": 50}  # dict

# None
result = None          # NoneType
```

## Python's Strengths

### 1. Readable
Code reads like English prose.

### 2. Batteries Included
Huge standard library — lots of built-in functionality.

### 3. Third-Party Packages
PyPI (Python Package Index) has 500,000+ packages.

### 4. Versatile
- Web development (Django, Flask)
- Data science (pandas, scikit-learn)
- AI/ML (TensorFlow, PyTorch)
- Automation (scripts, bots)
- Scientific computing (NumPy, SciPy)

### 5. Community
Massive community, tons of resources, help available.

## Python's Weaknesses

### 1. Speed
Slower than compiled languages (C, Rust, Go).

**But:** For most tasks, speed doesn't matter.

### 2. Mobile Development
Not great for iOS/Android apps.

### 3. Type Safety
Dynamically typed — no compile-time type checking.

**But:** Type hints help:
```python
def add(a: int, b: int) -> int:
    return a + b
```

## Learning Python

### Time Estimates
- **Basic syntax:** 1-2 days
- **Simple scripts:** 1 week
- **Workshop competence:** 1-2 weeks
- **Job-ready:** 3-6 months
- **Mastery:** Years

### Learning Path
1. Variables, data types
2. Functions
3. Loops and conditionals
4. Lists and dictionaries
5. File I/O
6. APIs and libraries
7. Object-oriented programming (optional)

## Python + AI (Vibe Coding)

The workshop approach:
1. **Specify** what you want in English
2. **AI generates** Python code
3. **Run** and verify it works
4. **Iterate** to improve
5. **Understand** selectively

You don't need to master Python first — you'll learn as you go.

## Helpful Resources

### Official
- python.org — Official docs
- docs.python.org — Language reference

### Interactive Learning
- codecademy.com/learn/learn-python-3
- learnpython.org

### For This Workshop
- Workshop notebooks (hands-on practice)
- AI assistants (for explanations)
- Glossary terms (quick reference)

## Python in Production

Python is used by:
- Google (YouTube, Search)
- Instagram (backend)
- Spotify (data analysis)
- Netflix (recommendations)
- NASA (scientific computing)
- Countless startups and enterprises

It's a real, professional language — not just for beginners.

## Vibe Coding with Python

Example prompts:
```
"Write Python code that:
1. Reads a text file
2. Counts word frequency
3. Saves top 20 words to CSV"
```

```
"Create a Python function that:
- Takes a list of texts
- Analyzes each with an AI API
- Returns results as JSON"
```

AI generates Python code exceptionally well.

## Related Terms
- [Function](./function.md)
- [Loop](./loop.md)
- [Variable](./variable.md)
- [List](./list.md)
- [Dictionary](./dictionary.md)
