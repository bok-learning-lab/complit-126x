import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// In a monorepo, the _content folder is at the root
// Check if _content exists in current dir, otherwise go up to monorepo root
const localContentDir = path.join(process.cwd(), '_content');
const rootContentDir = path.join(process.cwd(), '..', '..', '_content');
const contentDirectory = fs.existsSync(localContentDir) ? localContentDir : rootContentDir;

// _meta.json schema types
interface MetaEntry {
  title?: string;
  type?: 'page' | 'section';
  href?: string;
  hidden?: boolean;
  collapsed?: boolean;
}

type MetaValue = string | MetaEntry;
type MetaFile = Record<string, MetaValue>;

export interface ContentItem {
  slug: string;
  title: string;
  path: string;
  isDirectory: boolean;
  children?: ContentItem[];
  hidden?: boolean;
  collapsed?: boolean;
  href?: string;
}

export interface DocMetadata {
  title?: string;
  description?: string;
  [key: string]: any;
}

export interface Doc {
  slug: string;
  content: string;
  metadata: DocMetadata;
  path: string;
}

/**
 * Get all content folders (e.g., 'manual')
 */
export function getContentFolders(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  return fs.readdirSync(contentDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

/**
 * Load _meta.json from a directory if it exists
 */
function loadMeta(dirPath: string): MetaFile | null {
  const metaPath = path.join(dirPath, '_meta.json');
  if (!fs.existsSync(metaPath)) {
    return null;
  }
  try {
    const content = fs.readFileSync(metaPath, 'utf8');
    return JSON.parse(content);
  } catch {
    return null;
  }
}

/**
 * Parse a meta value into normalized fields
 */
function parseMetaValue(value: MetaValue): MetaEntry {
  if (typeof value === 'string') {
    return { title: value };
  }
  return value;
}

/**
 * Recursively get all markdown files in a directory
 */
function getMarkdownFiles(dir: string, basePath: string = ''): ContentItem[] {
  const fullPath = path.join(contentDirectory, dir, basePath);
  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const meta = loadMeta(fullPath);
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });

  // Build a map of existing files/folders for quick lookup
  const existingItems = new Map<string, { entry: fs.Dirent; slug: string }>();
  for (const entry of entries) {
    if (entry.name === '_meta.json') continue;

    if (entry.isDirectory()) {
      existingItems.set(entry.name, { entry, slug: entry.name });
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      const slug = entry.name.replace(/\.(md|mdx)$/, '');
      existingItems.set(slug, { entry, slug });
    }
  }

  const items: ContentItem[] = [];
  const processedSlugs = new Set<string>();

  // Helper to create a ContentItem from an entry
  const createItem = (slug: string, entry: fs.Dirent, metaEntry?: MetaEntry): ContentItem => {
    const relativePath = path.join(basePath, entry.name);
    const fullEntryPath = path.join(fullPath, entry.name);

    if (entry.isDirectory()) {
      return {
        slug,
        title: metaEntry?.title || slug,
        path: relativePath,
        isDirectory: true,
        children: getMarkdownFiles(dir, relativePath),
        hidden: metaEntry?.hidden,
        collapsed: metaEntry?.collapsed,
      };
    } else {
      const fileContents = fs.readFileSync(fullEntryPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        title: metaEntry?.title || data.title || slug,
        path: relativePath.replace(/\.(md|mdx)$/, ''),
        isDirectory: false,
        hidden: metaEntry?.hidden,
      };
    }
  };

  // If meta exists, use its key order
  if (meta) {
    for (const [key, value] of Object.entries(meta)) {
      const metaEntry = parseMetaValue(value);

      // Handle external links (no corresponding file)
      if (metaEntry.href) {
        items.push({
          slug: key,
          title: metaEntry.title || key,
          path: key,
          isDirectory: false,
          href: metaEntry.href,
          hidden: metaEntry.hidden,
        });
        processedSlugs.add(key);
        continue;
      }

      // Find matching file/folder
      const existing = existingItems.get(key);
      if (existing) {
        items.push(createItem(existing.slug, existing.entry, metaEntry));
        processedSlugs.add(key);
      }
    }

    // Add orphan items (not in meta) at the end, sorted alphabetically
    const orphans: ContentItem[] = [];
    for (const [slug, { entry }] of existingItems) {
      if (!processedSlugs.has(slug)) {
        orphans.push(createItem(slug, entry));
      }
    }
    orphans.sort((a, b) => {
      if (a.isDirectory && !b.isDirectory) return -1;
      if (!a.isDirectory && b.isDirectory) return 1;
      return a.title.localeCompare(b.title);
    });
    items.push(...orphans);
  } else {
    // No meta: fall back to alphabetical sorting
    for (const [slug, { entry }] of existingItems) {
      items.push(createItem(slug, entry));
    }
    items.sort((a, b) => {
      if (a.isDirectory && !b.isDirectory) return -1;
      if (!a.isDirectory && b.isDirectory) return 1;
      return a.title.localeCompare(b.title);
    });
  }

  // Filter out hidden items
  return items.filter(item => !item.hidden);
}

/**
 * Get navigation structure for a content folder
 */
export function getContentNavigation(folder: string): ContentItem[] {
  return getMarkdownFiles(folder);
}

/**
 * Get a specific doc by folder and slug path
 */
export function getDoc(folder: string, slugPath: string[]): Doc | null {
  if (slugPath.length === 0) {
    return null;
  }

  const filePath = path.join(contentDirectory, folder, ...slugPath);

  // Try .mdx first, then .md
  let fullPath = `${filePath}.mdx`;
  if (!fs.existsSync(fullPath)) {
    fullPath = `${filePath}.md`;
    if (!fs.existsSync(fullPath)) {
      return null;
    }
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: slugPath.join('/'),
    content,
    metadata: data,
    path: fullPath,
  };
}

/**
 * Get all possible paths for a content folder
 */
export function getAllDocPaths(folder: string): string[][] {
  const items = getMarkdownFiles(folder);
  const paths: string[][] = [];

  function traverse(items: ContentItem[], currentPath: string[] = []) {
    for (const item of items) {
      if (item.isDirectory) {
        traverse(item.children || [], [...currentPath, item.slug]);
      } else {
        paths.push([...currentPath, item.slug]);
      }
    }
  }

  traverse(items);
  return paths;
}
