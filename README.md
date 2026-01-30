# COMPLIT-126X

Computational approaches to literature — Python notebooks and a Next.js interface for exploring texts with AI.

## Quick Start (GitHub Codespaces)

### Step 1: Set Up Your API Key (Before Creating Codespace)

1. Go to [github.com/settings/codespaces](https://github.com/settings/codespaces)
2. Scroll to **Secrets**
3. Click **New secret**
4. Name: `OPENAI_API_KEY`
5. Value: Your OpenAI API key (get one at [platform.openai.com](https://platform.openai.com))
6. Repository access: Select this repository (or "All repositories")

### Step 2: Create Your Codespace

1. Click the green **Code** button on this repo
2. Select **Codespaces** tab
3. Click **Create codespace on main**

The Codespace will automatically install everything you need (this takes ~2 minutes).

### Step 3: Start Working

Once setup completes, you're ready:

- **Notebooks**: Open any `.ipynb` file in `apps/py/tutorial/` or `apps/py/workshop/`
- **Interface**: Run `pnpm interface` to start the Next.js app

---

## Manual Setup (If Automatic Setup Fails)

If you need to run setup manually:

```bash
bash setup.sh
```

---

## Project Structure

```
apps/
├── py/
│   ├── tutorial/    # Learning notebooks (00-06)
│   └── workshop/    # Hands-on exercises
└── interface/       # Next.js web app
```

## Requirements

- Python 3.11+
- Node.js 20+
- OpenAI API key