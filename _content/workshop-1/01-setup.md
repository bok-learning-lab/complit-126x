# Setup Guide

## What We're Setting Up (and Why)

Today you'll work in **two environments**:

1. **Google Gemini** — Quick experiments and instant results
2. **GitHub Codespaces** — A full development environment in your browser

### Why Two Tools?

**Gemini** is immediate and conversational. It's perfect for:
- Quick prototypes
- Exploring ideas
- Getting something working fast

**Codespaces** is a real development environment. It gives you:
- Version control (your work is saved in a repository)
- The ability to work with files and data
- A professional coding setup
- Experience with industry-standard tools

Think of Gemini as sketching with a pencil, and Codespaces as working in a proper studio.

## Step 1: Get Your Documents

You should have received:
1. **This document** — The workshop guide
2. **API Keys document** — Access to Gemini and other services
3. **GitHub repository link** — Your workspace for today

## Step 2: Open GitHub and Start Your Codespace

### What Is a Codespace?

A Codespace is a **development environment in the cloud**. Instead of installing Python, VSCode, and various tools on your laptop, you get a fully configured environment in your browser.

**Why Codespaces?**
- ✅ No installation needed (works on any computer)
- ✅ Consistent environment for everyone
- ✅ Free for educational use
- ✅ Automatic saving and version control
- ✅ Access from anywhere

**When Would You Set Up Your Own Machine?**
- When you're working on longer-term projects
- When you need offline access
- When you want more control and customization
- When you're ready to invest 30-60 minutes in setup

### Starting Your Codespace

1. **Open the repository link** (provided by instructor)
2. **Click the green "Code" button**
3. **Select "Codespaces" tab**
4. **Click "Create codespace on main"**

⏰ **This takes 2-3 minutes to build.** While it builds, we'll work in Gemini (next section).

### What's Happening While It Builds?

GitHub is:
- Creating a virtual machine for you
- Installing Python and required packages
- Setting up a code editor (VSCode in browser)
- Configuring Git for version control
- Loading the workshop materials

This is all automatic—one click and you get a professional setup.

## Step 3: Open Gemini

While your Codespace builds, let's get Gemini ready.

### What Is Gemini?

Gemini is Google's AI assistant with advanced code generation capabilities. It can:
- Write code from English descriptions
- Explain existing code
- Debug errors
- Suggest improvements
- Generate visualizations

### Getting Started with Gemini

1. **Go to:** `gemini.google.com` (or use the link provided)
2. **Sign in** with your Google account
3. **Keep it open** in a separate tab

We'll use it in the next section.

## Step 4: Understanding Your Workspace

Once your Codespace opens, you'll see:

```
YOUR WORKSPACE
├── apps/
│   └── py/
│       └── workshop/          ← Your Python notebooks
│           ├── 01a-functions-start.ipynb
│           ├── 02a-loops-start.ipynb
│           └── ...
├── _content/
│   └── workshop-20260202/     ← These guides
└── texts/                     ← Sample texts (Bible, etc.)
```

### The Key Folders

**`apps/py/workshop/`** — This is where you'll spend most of your time. It contains Jupyter notebooks that guide you through:
1. Functions
2. Loops
3. API calls
4. Structured data
5. A final project

**`texts/`** — Sample texts for analysis (biblical passages, literary texts, etc.)

**`_content/workshop-20260202/`** — These guides you're reading now

## What Are Jupyter Notebooks?

Jupyter notebooks (`.ipynb` files) are **interactive documents** that combine:
- Explanatory text (like this)
- Runnable code
- Output and visualizations
- Your notes and experiments

They're perfect for learning because you can:
- Read explanation
- Run code immediately
- See results right away
- Experiment and iterate

Think of them as **lab notebooks for code**.

## Why GitHub?

You might wonder: "Why are we using GitHub? Isn't that for professional developers?"

Yes, and that's exactly why it's valuable:

### What GitHub Gives You

1. **Version Control** — Every change is saved with a history
2. **Backup** — Your work is stored in the cloud
3. **Collaboration** — Easy to share and work with others
4. **Professional Portfolio** — Real projects in a real repository
5. **Industry Standard** — The tool that 90% of developers use

### You Don't Need to Understand Git (Yet)

Today, GitHub is just:
- A place to store your code
- A way to access Codespaces
- An automatic backup system

As you do more computational work, you'll naturally learn more about version control.

## API Keys: What and Why

In your API keys document, you'll find access credentials for various services.

### What Is an API Key?

An **API** (Application Programming Interface) is a way for your code to talk to external services.

An **API key** is like a password that proves you're allowed to use that service.

### What You'll Use Today

- **Gemini API** — For AI code generation
- **Other APIs** — Depending on the workshop exercises

### Important Notes About API Keys

⚠️ **Never commit API keys to a public repository**
⚠️ **Don't share them publicly**
⚠️ **These are temporary workshop keys** (not for production use)

In a real project, you'd store keys in:
- Environment variables
- `.env` files (not committed to Git)
- Secret management services

## Deploying Your Work

Later, you might want to share what you build. You have several options:

### For Simple Python Scripts
- **Google Colab** — Free Jupyter notebooks in the cloud
- **GitHub Gists** — Quick code snippets

### For Web Apps
- **Vercel** — Great for Next.js and React (free tier)
- **Netlify** — Simple static sites and serverless functions (free tier)
- **Render** — Full-stack apps with databases (free tier)

### For Data Analysis
- **Observable** — Interactive data visualizations
- **Streamlit** — Python data apps (free hosting available)

We won't deploy today, but it's good to know the options.

## Checkpoint: Are You Ready?

Before moving on, you should have:

- ✅ Gemini open in one tab
- ✅ Codespace starting or running
- ✅ API keys document accessible
- ✅ This guide open for reference

### If Something's Not Working

**Codespace won't start?**
- Try refreshing the page
- Check your internet connection
- Ask the instructor for help

**Can't access Gemini?**
- Try signing in with your university account
- Use the backup link provided
- Work with a partner for now

## What's Next?

While your Codespace finishes building (or if it's already done), we'll jump into Gemini for some quick wins.

---

**Next:** [Gemini Warmup →](02-gemini-warmup.md)
