# Next.js

**Next.js** is a React framework that adds server-side features, routing, and optimizations — it's React plus everything you need to build a full website.

## What Is Next.js?

React alone is just for building UI components. Next.js adds:
- **Routing** — Navigate between pages
- **Server rendering** — Render on server for speed
- **API routes** — Build backend endpoints
- **Optimizations** — Images, fonts, performance
- **File-based routing** — Pages from file structure

Think of it as **React + Server + Router + Build Tools** in one package.

## Why Next.js?

### React Alone
```
You get: UI components
You need to add: Routing, server, build tools, optimization
Result: Complex setup
```

### Next.js
```
You get: Everything included
Result: Start building immediately
```

## File-Based Routing

### App Router (Next.js 13+)
```
app/
├── page.tsx              → /
├── about/
│   └── page.tsx         → /about
├── books/
│   ├── page.tsx         → /books
│   └── [id]/
│       └── page.tsx     → /books/123
└── api/
    └── analyze/
        └── route.ts     → /api/analyze
```

**File structure = URL structure**. No configuration needed!

## Basic Next.js Page

```tsx
// app/page.tsx
export default function Home() {
    return (
        <div>
            <h1>Welcome to My App</h1>
            <p>This is the home page</p>
        </div>
    );
}
```

That's it! Next.js handles the routing, rendering, everything.

## Dynamic Routes

```tsx
// app/books/[id]/page.tsx
export default function BookPage({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>Book {params.id}</h1>
        </div>
    );
}
```

- `/books/1` → params.id = "1"
- `/books/genesis` → params.id = "genesis"

## Server Components (Default)

Next.js components are server-rendered by default:

```tsx
// This runs on the SERVER
export default async function BooksPage() {
    // Fetch data directly (no API needed)
    const books = await fetchBooksFromDatabase();

    return (
        <div>
            {books.map(book => (
                <BookCard key={book.id} {...book} />
            ))}
        </div>
    );
}
```

Benefits:
- Faster initial load
- Better SEO
- Reduced JavaScript bundle

## Client Components

For interactive components:

```tsx
'use client'  // Mark as client component

import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}
```

Use `'use client'` when you need:
- React hooks (useState, useEffect)
- Browser APIs
- Event handlers

## API Routes

Build backend endpoints alongside your frontend:

```typescript
// app/api/analyze/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { text } = await request.json();

    // Process the text
    const wordCount = text.split(' ').length;

    return NextResponse.json({
        wordCount,
        processed: true
    });
}
```

Call it from your frontend:
```tsx
const response = await fetch('/api/analyze', {
    method: 'POST',
    body: JSON.stringify({ text: 'Hello world' })
});
const data = await response.json();
```

## Data Fetching

### Server Component (Recommended)
```tsx
async function getData() {
    const res = await fetch('https://api.example.com/books');
    return res.json();
}

export default async function Page() {
    const data = await getData();
    return <div>{/* Use data */}</div>;
}
```

### Client Component
```tsx
'use client'

import { useEffect, useState } from 'react';

export default function Page() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/books')
            .then(res => res.json())
            .then(setData);
    }, []);

    if (!data) return <p>Loading...</p>;
    return <div>{/* Use data */}</div>;
}
```

## Project Structure

```
my-nextjs-app/
├── app/                    # App directory (Next.js 13+)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── api/               # API routes
├── components/            # Reusable components
├── lib/                   # Utility functions
├── public/               # Static files
├── next.config.js        # Next.js config
└── package.json
```

## Layouts

Shared UI across pages:

```tsx
// app/layout.tsx
export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <nav>
                    <a href="/">Home</a>
                    <a href="/books">Books</a>
                </nav>
                <main>{children}</main>
                <footer>© 2026</footer>
            </body>
        </html>
    );
}
```

This wraps all pages automatically.

## Real-World Example: Text Analysis App

```tsx
// app/analyze/page.tsx
'use client'

import { useState } from 'react';

export default function AnalyzePage() {
    const [text, setText] = useState('');
    const [results, setResults] = useState(null);

    const handleAnalyze = async () => {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
        const data = await response.json();
        setResults(data);
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl mb-4">Text Analyzer</h1>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-40 p-2 border"
                placeholder="Enter text..."
            />
            <button
                onClick={handleAnalyze}
                className="mt-4 px-4 py-2 bg-blue-500 text-white"
            >
                Analyze
            </button>
            {results && (
                <div className="mt-4">
                    <h2>Results</h2>
                    <p>Word count: {results.wordCount}</p>
                    <p>Character count: {results.charCount}</p>
                </div>
            )}
        </div>
    );
}
```

## Next.js in This Workshop

**Possible uses:**
- Build a web interface for your text analysis
- Display results from Python API
- Create interactive visualizations
- Deploy your project online

**Example flow:**
1. Python backend processes texts
2. Next.js frontend displays results
3. Users interact through browser
4. Deploy to Vercel

## Getting Started

```bash
# Create new Next.js app
npx create-next-app@latest my-app

# Options you'll see:
# - TypeScript? Yes (recommended)
# - ESLint? Yes
# - Tailwind CSS? Yes (recommended)
# - App Router? Yes (use new features)

cd my-app
npm run dev
```

Visit `http://localhost:3000`

## Key Features

### 1. Image Optimization
```tsx
import Image from 'next/image';

<Image
    src="/book-cover.jpg"
    alt="Book cover"
    width={500}
    height={300}
/>
```

Automatically optimizes images!

### 2. Font Optimization
```tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
```

### 3. Metadata
```tsx
export const metadata = {
    title: 'My Text Analyzer',
    description: 'Analyze biblical texts with AI'
};
```

Good for SEO!

## Deployment

Next.js apps deploy easily to [Vercel](./vercel.md):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Done! Your app is live.

## Next.js + Python Backend

Typical architecture:

```
Frontend (Next.js)
    ↓ API calls
Backend (Python)
    ↓ Processing
AI APIs (OpenAI, etc.)
```

Next.js API routes can proxy to Python:

```typescript
// app/api/analyze/route.ts
export async function POST(request: Request) {
    const data = await request.json();

    // Call Python backend
    const response = await fetch('http://python-server:5000/analyze', {
        method: 'POST',
        body: JSON.stringify(data)
    });

    return response;
}
```

## Learning Curve

- **If you know React:** A few days
- **If you're new to React:** Learn React first, then Next.js
- **Basic Next.js app:** A week
- **Advanced features:** A few weeks

## Vibe Coding with Next.js

AI works extremely well with Next.js:

```
"Create a Next.js page that:
1. Has a form for text input
2. Calls /api/analyze when submitted
3. Displays results in a card
4. Uses Tailwind CSS for styling
5. Includes loading state"
```

AI will generate complete, working pages.

## Related Terms
- [React](./react.md)
- [TypeScript](./typescript.md)
- [Vercel](./vercel.md)
- [JavaScript](./javascript.md)
