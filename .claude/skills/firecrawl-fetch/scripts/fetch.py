#!/usr/bin/env python3
"""
Fetch web content using Firecrawl API.
Returns markdown content from the scraped page.

Usage: python fetch.py <url>

Loads FIRECRAWL_API_KEY from:
1. Environment variable (if set)
2. .env file in project root (fallback)
"""

import os
import sys
import json
import urllib.request
import urllib.error
from pathlib import Path


def load_env_file():
    """Load environment variables from .env file in project root."""
    # Look for .env file starting from script location, going up
    current = Path(__file__).resolve().parent
    while current != current.parent:
        env_file = current / ".env"
        if env_file.exists():
            with open(env_file) as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith("#") and "=" in line:
                        key, _, value = line.partition("=")
                        key = key.strip()
                        value = value.strip()
                        # Only set if not already in environment
                        if key not in os.environ:
                            os.environ[key] = value
            return
        current = current.parent


def fetch_url(url: str) -> dict:
    """Fetch a URL using Firecrawl and return the result."""
    # Try loading from .env if env var not set
    if not os.environ.get("FIRECRAWL_API_KEY"):
        load_env_file()

    api_key = os.environ.get("FIRECRAWL_API_KEY")
    if not api_key:
        return {"success": False, "error": "FIRECRAWL_API_KEY not found in environment or .env file"}

    endpoint = "https://api.firecrawl.dev/v1/scrape"

    payload = json.dumps({
        "url": url,
        "formats": ["markdown"],
        "onlyMainContent": True
    }).encode("utf-8")

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    req = urllib.request.Request(endpoint, data=payload, headers=headers, method="POST")

    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read().decode("utf-8"))
            return result
    except urllib.error.HTTPError as e:
        error_body = e.read().decode("utf-8") if e.fp else str(e)
        return {"success": False, "error": f"HTTP {e.code}: {error_body}"}
    except urllib.error.URLError as e:
        return {"success": False, "error": f"URL Error: {e.reason}"}
    except Exception as e:
        return {"success": False, "error": str(e)}


def main():
    if len(sys.argv) < 2:
        print("Usage: python fetch.py <url>", file=sys.stderr)
        sys.exit(1)

    url = sys.argv[1]
    result = fetch_url(url)

    if result.get("success") and result.get("data"):
        data = result["data"]
        # Print metadata as header
        metadata = data.get("metadata", {})
        if metadata.get("title"):
            print(f"# {metadata['title']}\n")
        if metadata.get("sourceURL"):
            print(f"Source: {metadata['sourceURL']}\n")
        print("---\n")
        # Print main content
        print(data.get("markdown", "No content extracted"))
    else:
        print(f"Error: {result.get('error', 'Unknown error')}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
