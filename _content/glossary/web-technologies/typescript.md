# TypeScript

**TypeScript** is JavaScript with type checking — it helps catch errors before you run your code.

## The Problem TypeScript Solves

### JavaScript (Dynamic Typing)
```javascript
function add(a, b) {
    return a + b;
}

add(5, 10);        // Works: 15
add("5", "10");    // Works: "510" (string concat!)
add(5, "hello");   // Works: "5hello" (weird!)
```

JavaScript lets you do anything, even if it doesn't make sense.

### TypeScript (Static Typing)
```typescript
function add(a: number, b: number): number {
    return a + b;
}

add(5, 10);        // ✓ Works: 15
add("5", "10");    // ✗ Error: expects numbers
add(5, "hello");   // ✗ Error: expects numbers
```

TypeScript catches mistakes before runtime.

## Basic TypeScript

### Type Annotations
```typescript
// Variables
let name: string = "Genesis";
let chapter: number = 1;
let isComplete: boolean = true;

// Arrays
let books: string[] = ["Genesis", "Exodus"];
let chapters: number[] = [1, 2, 3];

// Objects
let bookInfo: {
    title: string;
    chapter: number;
    wordCount: number;
} = {
    title: "Genesis",
    chapter: 1,
    wordCount: 2547
};
```

### Function Types
```typescript
// Parameters and return type
function countWords(text: string): number {
    return text.split(" ").length;
}

// Optional parameters
function greet(name: string, title?: string): string {
    if (title) {
        return `Hello, ${title} ${name}`;
    }
    return `Hello, ${name}`;
}
```

### Interfaces
```typescript
// Define a structure
interface Book {
    title: string;
    author: string;
    chapters: number;
    published?: number;  // Optional
}

// Use it
const genesis: Book = {
    title: "Genesis",
    author: "Traditional",
    chapters: 50
};
```

## Why TypeScript?

### Advantages

**1. Catch Errors Early**
```typescript
function analyze(text: string) {
    return text.toUpperCase();
}

analyze(123);  // ✗ Error caught by editor
// JavaScript would fail at runtime
```

**2. Better Autocomplete**
Your editor knows what properties/methods are available:
```typescript
let book = { title: "Genesis", chapters: 50 };
book.  // Editor suggests: title, chapters
```

**3. Self-Documenting**
```typescript
// Clear what this function expects and returns
function processTexts(
    texts: string[],
    minLength: number
): string[] {
    // ...
}
```

**4. Refactoring Confidence**
Rename a variable/function — TypeScript finds all uses.

### Disadvantages

**1. More Verbose**
```javascript
// JavaScript
const books = ["Genesis", "Exodus"];

// TypeScript
const books: string[] = ["Genesis", "Exodus"];
```

**2. Learning Curve**
Need to learn type system on top of JavaScript.

**3. Build Step Required**
TypeScript → JavaScript (browsers don't run TypeScript directly).

## TypeScript in This Workshop

**You probably won't write TypeScript:**
- Workshop focuses on Python
- TypeScript appears in Next.js projects
- Understanding not required

**But you might see it:**
- Next.js uses TypeScript
- Many modern projects use it
- AI can generate TypeScript just as easily

## Type Inference

TypeScript can often infer types:

```typescript
// No annotation needed
let name = "Genesis";  // TypeScript knows: string
let count = 42;        // TypeScript knows: number

// Infers return type
function add(a: number, b: number) {
    return a + b;  // TypeScript knows: returns number
}
```

Write annotations when they add clarity, not always.

## Common Types

```typescript
// Primitives
string, number, boolean, null, undefined

// Arrays
string[], number[], Array<string>

// Objects
{ name: string, age: number }

// Union types (multiple possibilities)
string | number  // Can be string OR number
string | null    // Can be string or null

// Any (escape hatch - avoid)
any  // Turns off type checking

// Unknown (safer than any)
unknown  // Must check type before using
```

## Real-World Example

```typescript
// Define API response structure
interface AnalysisResult {
    text: string;
    wordCount: number;
    themes: string[];
    sentiment: "positive" | "negative" | "neutral";
}

// Type-safe API call
async function analyzeText(text: string): Promise<AnalysisResult> {
    const response = await fetch("/api/analyze", {
        method: "POST",
        body: JSON.stringify({ text })
    });
    return await response.json();
}

// Use it
const result = await analyzeText("In the beginning...");
console.log(result.themes);  // TypeScript knows this exists
console.log(result.author);  // ✗ Error: author doesn't exist
```

## TypeScript + React

TypeScript works great with React:

```typescript
interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
}

function Card({ title, description, imageUrl }: CardProps) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            {imageUrl && <img src={imageUrl} alt={title} />}
        </div>
    );
}

// Usage
<Card title="Genesis 1" description="Creation story" />
<Card title="Genesis 1" wrong="property" />  // ✗ Error
```

## Getting Started with TypeScript

### Installation
```bash
npm install -D typescript
```

### Configuration (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true,
    "module": "ESNext"
  }
}
```

### Running TypeScript
```bash
# Compile
npx tsc myfile.ts  # Creates myfile.js

# Watch mode
npx tsc --watch
```

## TypeScript vs. Python Types

Python also has types (type hints):

```python
# Python
def add(a: int, b: int) -> int:
    return a + b

# TypeScript
function add(a: number, b: number): number {
    return a + b;
}
```

Similar ideas, different syntax!

## Vibe Coding with TypeScript

AI works great with TypeScript:

```
"Write TypeScript code that:
1. Defines an interface for a Book
2. Takes an array of books
3. Filters by publication year
4. Returns sorted results"
```

AI will generate properly typed code.

## When to Use TypeScript

**Use TypeScript for:**
- ✓ Large projects with many files
- ✓ Team projects
- ✓ Projects you'll maintain long-term
- ✓ When you want editor assistance

**JavaScript is fine for:**
- ✓ Quick scripts
- ✓ Small projects
- ✓ Learning/prototyping
- ✓ Solo projects

## Related Terms
- [JavaScript](./javascript.md)
- [React](./react.md)
- [NextJS](./nextjs.md)
