# GitHub Codespaces

**GitHub Codespaces** is a cloud-based development environment that runs VSCode in your browser — your entire coding setup, accessible from anywhere, no local installation needed.

## What Is Codespaces?

Think of it as:
- **VSCode in the cloud** — Full IDE, browser-based
- **Pre-configured environment** — Everything installed and ready
- **Consistent setup** — Everyone has the same environment
- **No local setup required** — No installing Python, Node, etc.

## Why Codespaces for This Workshop?

### Problems It Solves

**Without Codespaces:**
- "Python won't install on my computer"
- "I have Python 2, not Python 3"
- "This library won't install on Windows"
- "My setup is different from yours"
- "I don't have admin rights to install things"

**With Codespaces:**
- ✓ Click a link, start coding in 30 seconds
- ✓ Everyone has identical setup
- ✓ Works on any device with a browser
- ✓ Pre-installed libraries and tools
- ✓ No installation headaches

## What Codespaces Gives You

### 1. VSCode Interface
- File explorer (left sidebar)
- Code editor (center)
- Terminal (bottom)
- Extensions (AI assistants, syntax highlighting, etc.)

### 2. Development Tools
- Python installed
- Node/npm installed
- Git integrated
- Package managers ready

### 3. GitHub Integration
- Direct connection to your repository
- Commit and push from the interface
- See changes, branches, PRs

### 4. Persistent Storage
- Your work is saved in the cloud
- Resume where you left off
- Access from any device

## Starting a Codespace

### From a Repository
1. Go to GitHub repository
2. Click green "Code" button
3. Select "Codespaces" tab
4. Click "Create codespace on main"
5. Wait ~30 seconds for setup
6. Start coding!

### From a Template
1. Click a Codespaces template link
2. Automatically creates your environment
3. Everything pre-configured

## The Codespace Interface

```
┌─────────────────────────────────────────┐
│  [Files] [Search] [Extensions] [GitHub] │  ← Sidebar
├─────────────────────────────────────────┤
│                                         │
│                                         │
│            Code Editor                  │  ← Your code
│                                         │
│                                         │
├─────────────────────────────────────────┤
│  Terminal                               │  ← Command line
│  $ python script.py                     │
└─────────────────────────────────────────┘
```

## Common Tasks

### Running Python Scripts
```bash
# In the terminal
python my_script.py
```

### Installing Packages
```bash
pip install requests
pip install pandas
```

### Opening Jupyter Notebooks
- Click the `.ipynb` file
- Notebook interface opens automatically
- Run cells with Shift+Enter

### Using Git
```bash
git status
git add .
git commit -m "Update analysis"
git push
```

Or use the built-in Git UI (Source Control sidebar).

## Codespace Configuration

### .devcontainer/devcontainer.json
This file configures your Codespace:

```json
{
  "name": "Workshop Environment",
  "image": "mcr.microsoft.com/devcontainers/python:3.11",
  "postCreateCommand": "pip install -r requirements.txt",
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-python.python",
        "ms-toolsai.jupyter"
      ]
    }
  }
}
```

### requirements.txt
Python packages to install automatically:

```
openai
anthropic
google-generativeai
pandas
matplotlib
```

## Secrets and Environment Variables

### Setting Secrets
1. Repository Settings
2. Secrets → Codespaces
3. New repository secret
4. Available as environment variables in Codespace

### Using Secrets
```python
import os

# Automatically available
api_key = os.environ.get("OPENAI_API_KEY")
```

## Costs and Limits

### Free Tier (GitHub Free)
- 120 core-hours per month
- 15 GB storage
- 2-core machines

**What does this mean?**
- 2-core machine: 60 hours per month
- 4-core machine: 30 hours per month
- Plenty for this workshop!

### Pro Tier (GitHub Pro)
- 180 core-hours per month
- 20 GB storage

### Stopping to Save Hours
Codespaces stop automatically after 30 minutes of inactivity.

**Manually stop:**
1. Click your username → Your codespaces
2. Stop the Codespace
3. Resume anytime (your work is saved)

## Advantages for Learning

### 1. No Setup Friction
Start coding in seconds, not hours.

### 2. Consistency
Everyone has the same environment — no "works on my machine" issues.

### 3. Professional Tools
Learn the same tools developers use.

### 4. Portable
Access your environment from:
- School computer
- Home laptop
- Friend's device
- Anywhere with a browser

### 5. Isolation
Experiment without breaking your local system.

## Codespaces vs. Local Development

| Aspect | Codespaces | Local |
|--------|-----------|-------|
| Setup time | 30 seconds | Hours |
| Consistency | Everyone identical | Varies |
| Access | Any device | One device |
| Resources | Cloud (scalable) | Your hardware |
| Cost | Free tier available | Free (electricity) |

## Limitations

**What Codespaces can't do:**
- ❌ Run without internet
- ❌ Access your local files (unless uploaded)
- ❌ Use unlimited resources (free tier limits)

**But for this workshop, none of these matter.**

## Tips and Tricks

### Keyboard Shortcuts
- `Ctrl+` ` ` (backtick) — Toggle terminal
- `Ctrl+P` — Quick file open
- `Ctrl+Shift+P` — Command palette
- `Ctrl+B` — Toggle sidebar

### Extensions to Install
- Python (usually pre-installed)
- Jupyter (for notebooks)
- GitHub Copilot (AI code assistant)
- Prettier (code formatting)

### Saving Work
Your work auto-saves to the cloud, but remember to:
- Commit changes to Git
- Push to GitHub
- Your Codespace persists even if browser closes

## Troubleshooting

**Codespace won't start?**
- Check your internet connection
- Try a different browser
- Check GitHub status page

**Out of hours?**
- Stop unused Codespaces
- Wait for monthly reset
- Upgrade to Pro tier

**Missing packages?**
- Install manually: `pip install package-name`
- Add to requirements.txt for next time

## In This Workshop

You'll use Codespaces to:
- Run Python notebooks
- Call AI APIs
- Process and analyze texts
- Build your final project

All without installing anything locally.

## Related Terms
- [Environment Variables](./environment-variables.md)
- [API Keys](./api-keys.md)
- [Git](./git.md)
