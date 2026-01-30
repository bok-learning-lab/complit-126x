# COMPLIT-126X

Computational approaches to literature — Python notebooks and a Next.js interface for exploring texts with AI.

---

## Getting Started with Notebooks

Your workshop notebooks are located at:

```
apps/py/workshop/
```

### Opening a Notebook

1. In the file explorer (left sidebar), navigate to `apps/py/workshop/`
2. Click on any `.ipynb` file to open it
3. The notebook will open in VS Code's Jupyter interface

### Setting Up the Kernel (First Time)

The first time you open a notebook, you need to select a Python kernel:

1. Click **Select Kernel** in the top-right of the notebook (or you'll see a prompt)
2. Choose **Python Environments**
3. Select **Python 3.x** (the one with the path `/usr/local/bin/python`)

> **Note:** You'll need to select a kernel each time you open a new notebook. After the first time, VS Code usually remembers your choice for that specific notebook.

### Running Cells

- Click the **▶ Play button** next to a cell to run it
- Or press **Shift + Enter** to run and move to the next cell
- Run cells in order from top to bottom

---

## Using Gemini CLI

Gemini CLI is an AI assistant you can use in the terminal.

### First-Time Setup

1. Open a new terminal (Terminal → New Terminal, or `` Ctrl+` ``)
2. Type `gemini` and press Enter
3. You'll be prompted to log in:
   - A URL will appear — click it or copy/paste into your browser
   - Authorize with your Google account
   - Copy the code you receive
   - Paste it back into the terminal
4. **Important:** After logging in, close that terminal and open a new one
5. Now `gemini` will work normally

### Using Gemini

Once set up, just type `gemini` in any terminal to start a conversation with the AI assistant.

---

## Manual Setup (If Automatic Setup Fails)

If the Codespace didn't set up correctly, run:

```bash
bash setup.sh
```

This installs all Python packages, sets up the Jupyter kernel, and installs the Gemini CLI.

---

## Project Structure

```
apps/
├── py/
│   ├── tutorial/    # Learning notebooks (00-06)
│   └── workshop/    # Hands-on exercises
└── interface/       # Next.js web app
```