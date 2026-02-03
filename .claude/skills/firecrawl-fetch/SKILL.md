---
name: firecrawl-fetch
description: This skill fetches web content using Firecrawl API when the built-in WebFetch tool fails (403 errors, blocked requests). Use this skill when needing to scrape websites that block automated requests, such as poetry sites, documentation, or other content-heavy pages.
---

# Firecrawl Fetch

## Overview

Fetch web content using the Firecrawl API, which can access sites that block standard automated requests. Returns clean markdown content extracted from web pages.

## When to Use

Use this skill when:
- WebFetch returns 403 Forbidden errors
- A website blocks automated/bot requests
- Clean markdown extraction from a webpage is needed

## Usage

Run the fetch script with a URL:

```bash
python3 ~/.claude/skills/firecrawl-fetch/scripts/fetch.py "<url>"
```

The script:
1. Requires `FIRECRAWL_API_KEY` environment variable to be set
2. Calls Firecrawl's scrape API with the URL
3. Returns the page content as clean markdown
4. Extracts only main content (strips nav, footers, ads)

## Example Workflow

1. Use WebSearch to find a URL for the desired content
2. Try WebFetch first (it may work and is faster)
3. If WebFetch fails with 403, use this skill's fetch script
4. Process the returned markdown as needed

## Output Format

The script outputs:
- Page title as H1 header
- Source URL
- Separator line
- Main page content as markdown
