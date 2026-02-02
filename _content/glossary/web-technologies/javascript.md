# JavaScript

**JavaScript** is a programming language that runs in web browsers — it's what makes websites interactive.

## What JavaScript Does

On websites, JavaScript handles:
- Button clicks and user interactions
- Form validation
- Animations and visual effects
- Fetching data without page reload
- Dynamic content updates

**Every interactive website uses JavaScript.**

## JavaScript vs. Python

| Aspect | Python | JavaScript |
|--------|--------|------------|
| Main use | Data processing, AI, servers | Web interactivity |
| Runs | On servers, computers | In browsers (+ servers) |
| Syntax | Readable, clean | More punctuation |
| Workshop focus | Primary language | Mentioned briefly |

## Basic JavaScript

```javascript
// Variables
let name = "Genesis";
const chapter = 1;

// Functions
function countWords(text) {
    return text.split(" ").length;
}

// Arrays (like Python lists)
let books = ["Genesis", "Exodus", "Leviticus"];

// Objects (like Python dictionaries)
let bookInfo = {
    title: "Genesis",
    chapter: 1,
    wordCount: 2547
};

// Loops
for (let book of books) {
    console.log(book);
}
```

## Where JavaScript Appears

### 1. Frontend (Browser)
```javascript
// Make a button do something
document.querySelector('button').addEventListener('click', () => {
    alert('Button clicked!');
});
```

### 2. Backend (Node.js)
```javascript
// Simple server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
```

### 3. Full-Stack Frameworks
- Next.js (React + server)
- Remix
- SvelteKit

## JavaScript in This Workshop

**Minimal JavaScript usage:**
- Workshop focuses on Python
- May see JavaScript in React examples
- Understanding not required for core work

**When you might encounter it:**
- Building a web interface (optional extension)
- Looking at Next.js demos
- Web-based visualizations

## Modern JavaScript (ES6+)

JavaScript has evolved significantly:

### Arrow Functions
```javascript
// Old way
function add(a, b) {
    return a + b;
}

// Modern way
const add = (a, b) => a + b;
```

### Template Literals
```javascript
// Old way
let message = "Reading " + book + " chapter " + chapter;

// Modern way
let message = `Reading ${book} chapter ${chapter}`;
```

### Async/Await
```javascript
// Modern way to handle asynchronous code
async function analyzeText(text) {
    const response = await fetch('/api/analyze', {
        method: 'POST',
        body: JSON.stringify({ text })
    });
    return await response.json();
}
```

## JavaScript Ecosystem

### Package Manager: npm
```bash
npm install package-name
```

Like Python's `pip`.

### Frameworks
- **React** — UI components
- **Vue** — Alternative to React
- **Angular** — Full framework
- **Next.js** — React + server features

### Runtime: Node.js
JavaScript outside the browser.

## Why JavaScript Matters

JavaScript is:
1. **Universal** — Every browser runs it
2. **Full-stack** — Frontend + backend
3. **Rich ecosystem** — Massive library collection
4. **In-demand** — Very popular in job market

## Learning Path

**If coming from Python:**
1. Syntax is similar but different
2. Functions work similarly
3. Objects ≈ dictionaries
4. Arrays ≈ lists
5. Main difference: browser-specific APIs

**Time to basic competence:**
- Reading JavaScript: A few hours
- Writing JavaScript: A few days
- Mastery: Months to years

## JavaScript + AI

You can use AI to work with JavaScript just like Python:

```
"Write JavaScript code that:
1. Takes an array of texts
2. Counts word frequency
3. Returns the top 20 words"
```

Vibe coding works for JavaScript too!

## Common Gotchas

### 1. var vs. let vs. const
```javascript
var x = 1;    // Old way, avoid
let y = 2;    // Can change
const z = 3;  // Cannot change
```

Use `const` by default, `let` when you need to change.

### 2. Equality
```javascript
"5" == 5      // true (type coercion)
"5" === 5     // false (strict equality)
```

Always use `===` (triple equals).

### 3. Semicolons
```javascript
// Optional but recommended
let x = 5;
let y = 10;
```

## TypeScript: JavaScript's Younger Sibling

TypeScript adds types to JavaScript:

```typescript
// JavaScript
function add(a, b) {
    return a + b;
}

// TypeScript
function add(a: number, b: number): number {
    return a + b;
}
```

More on this: [TypeScript](./typescript.md)

## Related Terms
- [TypeScript](./typescript.md)
- [React](./react.md)
- [NextJS](./nextjs.md)
- [Node.js](./nodejs.md)
