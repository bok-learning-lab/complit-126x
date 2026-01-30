#!/bin/bash
# =============================================================================
# COMPLIT-126X Codespace Setup Script
# Run this once when you start a new Codespace:
#   bash setup.sh
# =============================================================================

set -e  # Exit on any error

echo "🚀 Setting up your COMPLIT-126X Codespace..."
echo ""

# -----------------------------------------------------------------------------
# 1. Check for OpenAI API Key
# -----------------------------------------------------------------------------
echo "📋 Step 1: Checking for OPENAI_API_KEY..."

if [ -z "$OPENAI_API_KEY" ]; then
    echo ""
    echo "❌ ERROR: OPENAI_API_KEY not found!"
    echo ""
    echo "   Before running this script, you need to:"
    echo "   1. Go to: https://github.com/settings/codespaces"
    echo "   2. Scroll to 'Secrets'"
    echo "   3. Click 'New secret'"
    echo "   4. Name: OPENAI_API_KEY"
    echo "   5. Value: your OpenAI API key (from platform.openai.com)"
    echo "   6. Select this repository (or 'All repositories')"
    echo "   7. Rebuild/restart your Codespace"
    echo ""
    exit 1
else
    echo "   ✓ OPENAI_API_KEY found"
fi

# -----------------------------------------------------------------------------
# 2. Install Python packages
# -----------------------------------------------------------------------------
echo ""
echo "📦 Step 2: Installing Python packages..."

pip install --quiet --upgrade pip
pip install --quiet \
    openai \
    pydantic \
    requests \
    httpx \
    ipykernel \
    pandas \
    numpy \
    matplotlib \
    seaborn \
    pillow \
    python-dotenv \
    tiktoken \
    tenacity \
    tqdm \
    beautifulsoup4 \
    lxml

echo "   ✓ Python packages installed"

# -----------------------------------------------------------------------------
# 3. Install Jupyter kernel
# -----------------------------------------------------------------------------
echo ""
echo "🐍 Step 3: Setting up Jupyter kernel..."

python -m ipykernel install --user --name=python3 --display-name="Python 3"
echo "   ✓ Jupyter kernel installed"

# -----------------------------------------------------------------------------
# 4. Install Gemini CLI
# -----------------------------------------------------------------------------
echo ""
echo "💎 Step 4: Installing Gemini CLI..."

npm install -g @google/gemini-cli

echo "   ✓ Gemini CLI installed (run 'gemini' to start)"

# -----------------------------------------------------------------------------
# 5. Install Node.js dependencies (for the interface app)
# -----------------------------------------------------------------------------
echo ""
echo "📦 Step 5: Installing Node.js dependencies..."

# Check if pnpm is available, install if not
if ! command -v pnpm &> /dev/null; then
    echo "   Installing pnpm..."
    npm install -g pnpm
fi

# Install root dependencies
pnpm install

# Install interface app dependencies
cd apps/interface
pnpm install
cd ../..

echo "   ✓ Node.js dependencies installed"

# -----------------------------------------------------------------------------
# 6. Create output directories for the workshop
# -----------------------------------------------------------------------------
echo ""
echo "📁 Step 6: Creating output directories..."

mkdir -p apps/interface/public/cards
mkdir -p apps/interface/data

echo "   ✓ Output directories created"

# -----------------------------------------------------------------------------
# 7. Verify installation
# -----------------------------------------------------------------------------
echo ""
echo "🔍 Step 7: Verifying installation..."

python3 << 'EOF'
import sys

errors = []

# Core packages to verify
packages = [
    'openai',              # OpenAI API
    'pydantic',            # Structured output
    'requests',            # HTTP
    'pandas',              # Data manipulation
    'numpy',               # Numerical
    'matplotlib',          # Plotting
    'PIL',                 # Image processing (pillow)
    'IPython',             # Jupyter display
    'bs4',                 # BeautifulSoup
    'tqdm',                # Progress bars
]

for pkg in packages:
    try:
        __import__(pkg)
    except ImportError:
        errors.append(f"Missing package: {pkg}")

# Verify OpenAI client can be imported
try:
    from openai import OpenAI
except ImportError:
    errors.append("OpenAI client not properly installed")

if errors:
    print("❌ Verification failed:")
    for e in errors:
        print(f"   - {e}")
    sys.exit(1)
else:
    print("   ✓ All Python packages verified")
EOF

echo ""
echo "============================================================================="
echo "✅ SETUP COMPLETE!"
echo "============================================================================="
echo ""
echo "You're ready to go! Here's what you can do:"
echo ""
echo "  📓 NOTEBOOKS: Open any .ipynb file in apps/py/tutorial or apps/py/workshop"
echo "     - Select 'Python 3' as your kernel when prompted"
echo ""
echo "  🌐 INTERFACE: To run the Next.js app:"
echo "     pnpm interface"
echo ""
echo "  🔑 Your OPENAI_API_KEY is set and ready to use in the notebooks."
echo ""
echo "  💎 GEMINI CLI: Type 'gemini' in the terminal to start the AI assistant"
echo ""
echo "============================================================================="
