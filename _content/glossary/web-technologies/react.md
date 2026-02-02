# React

**React** is a JavaScript library for building user interfaces — it lets you create reusable UI components and build interactive web applications.

## What Is React?

React is:
- **Component-based** — Build UIs from reusable pieces
- **Declarative** — Describe what you want, React handles the how
- **JavaScript library** — Not a full framework, just for UI

Think of components as Lego blocks for websites.

## Basic React Example

```jsx
// A simple React component
function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
}

// Use it
<Greeting name="Genesis" />
// Renders: <h1>Hello, Genesis!</h1>
```

## Components

### Function Components (Modern)
```jsx
function BookCard({ title, author, chapters }) {
    return (
        <div className="book-card">
            <h2>{title}</h2>
            <p>By {author}</p>
            <p>{chapters} chapters</p>
        </div>
    );
}

// Use it
<BookCard
    title="Genesis"
    author="Traditional"
    chapters={50}
/>
```

### Composing Components
```jsx
function BookList() {
    return (
        <div>
            <h1>Books of the Bible</h1>
            <BookCard title="Genesis" author="Traditional" chapters={50} />
            <BookCard title="Exodus" author="Traditional" chapters={40} />
            <BookCard title="Leviticus" author="Traditional" chapters={27} />
        </div>
    );
}
```

## JSX: HTML in JavaScript

React uses JSX — HTML-like syntax in JavaScript:

```jsx
// JSX
const element = <h1>Hello, world!</h1>;

// Gets compiled to:
const element = React.createElement('h1', null, 'Hello, world!');
```

### JSX Rules

**1. Expressions in Curly Braces**
```jsx
const name = "Genesis";
<h1>Book: {name}</h1>
<h2>Chapters: {50}</h2>
<p>Word count: {1000 + 547}</p>
```

**2. className Instead of class**
```jsx
// HTML
<div class="card"></div>

// JSX
<div className="card"></div>
```

**3. camelCase for Attributes**
```jsx
// HTML
<button onclick="handleClick()">

// JSX
<button onClick={handleClick}>
```

**4. Self-Closing Tags**
```jsx
<img src="..." />
<input type="text" />
```

## State: Making Components Interactive

### useState Hook
```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
```

### Example: Text Analyzer
```jsx
function TextAnalyzer() {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

    const handleAnalyze = () => {
        const words = text.split(" ").filter(w => w.length > 0);
        setWordCount(words.length);
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to analyze..."
            />
            <button onClick={handleAnalyze}>Analyze</button>
            <p>Word count: {wordCount}</p>
        </div>
    );
}
```

## Props: Passing Data

```jsx
// Parent passes props
function App() {
    return (
        <BookCard
            title="Genesis"
            chapters={50}
            onRead={() => alert('Reading Genesis')}
        />
    );
}

// Child receives props
function BookCard({ title, chapters, onRead }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{chapters} chapters</p>
            <button onClick={onRead}>Read</button>
        </div>
    );
}
```

## Rendering Lists

```jsx
function BookList() {
    const books = [
        { id: 1, title: "Genesis", chapters: 50 },
        { id: 2, title: "Exodus", chapters: 40 },
        { id: 3, title: "Leviticus", chapters: 27 }
    ];

    return (
        <div>
            {books.map(book => (
                <BookCard
                    key={book.id}
                    title={book.title}
                    chapters={book.chapters}
                />
            ))}
        </div>
    );
}
```

**Note the `key` prop** — React needs it for efficient updates.

## Conditional Rendering

```jsx
function BookCard({ title, chapters, isRead }) {
    return (
        <div>
            <h2>{title}</h2>
            {isRead ? (
                <span>✓ Read</span>
            ) : (
                <button>Mark as Read</button>
            )}
        </div>
    );
}
```

## Effects: Side Effects

```jsx
import { useEffect, useState } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Runs after component mounts
        fetch('/api/books')
            .then(res => res.json())
            .then(data => setData(data));
    }, []); // Empty array = run once

    if (!data) return <p>Loading...</p>;

    return <div>{/* Display data */}</div>;
}
```

## React in This Workshop

**Limited React usage:**
- Workshop focuses on Python
- React mentioned for web interfaces
- Optional extension: Build a React frontend

**Possible use case:**
```jsx
// Display analysis results from Python API
function AnalysisDisplay() {
    const [results, setResults] = useState([]);

    const analyzeTexts = async () => {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            body: JSON.stringify({ texts })
        });
        const data = await response.json();
        setResults(data);
    };

    return (
        <div>
            <button onClick={analyzeTexts}>Analyze</button>
            {results.map(result => (
                <ResultCard key={result.id} data={result} />
            ))}
        </div>
    );
}
```

## React Ecosystem

### Core Tools
- **Create React App** — Starter template
- **Vite** — Modern build tool (faster)
- **Next.js** — React + server features

### State Management
- **useState** — Built-in, simple
- **Context** — Share state across components
- **Redux** — External library, complex apps
- **Zustand** — Simpler alternative to Redux

### Styling
- **CSS Modules** — Scoped CSS
- **Tailwind CSS** — Utility classes
- **styled-components** — CSS in JS

## Why React?

### Advantages
- **Component reusability** — Write once, use everywhere
- **Large ecosystem** — Many libraries and tools
- **Popular** — Lots of jobs, resources, help
- **React Native** — Use React for mobile apps

### Learning Curve
- Basic React: A few days
- useState, props: A week
- useEffect, advanced patterns: A few weeks
- Mastery: Months

## React + AI

Vibe coding works great with React:

```
"Create a React component that:
1. Has a text input
2. Shows word count as you type
3. Highlights words over 10 characters
4. Uses Tailwind CSS for styling"
```

AI will generate complete components.

## Getting Started

### Installation
```bash
# Create new React app
npx create-react-app my-app
cd my-app
npm start

# Or with Vite (faster)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### File Structure
```
my-app/
├── public/
├── src/
│   ├── App.jsx          # Main component
│   ├── components/      # Your components
│   ├── index.jsx        # Entry point
│   └── styles/          # CSS files
└── package.json
```

## React Concepts Summary

| Concept | Purpose | Example |
|---------|---------|---------|
| Components | Reusable UI pieces | `<BookCard />` |
| JSX | HTML in JavaScript | `<h1>{title}</h1>` |
| Props | Pass data down | `<Card title="Genesis" />` |
| State | Store changing data | `useState(0)` |
| Effects | Handle side effects | `useEffect(...)` |
| Events | Handle interactions | `onClick={...}` |

## Related Terms
- [JavaScript](./javascript.md)
- [TypeScript](./typescript.md)
- [NextJS](./nextjs.md)
- [JSX](./jsx.md)
