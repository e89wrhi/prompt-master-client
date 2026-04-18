// @ts-check
// use: node scripts/sync-prompts.mjs
// Plain ESM JS – no tsx/TypeScript needed, works on any Node 18+ environment.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Recursively find all .md files
/** @param {string} dirPath @param {string[]} arrayOfFiles */
function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.md') && file !== 'eg.md') {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const contentDir = path.join(process.cwd(), 'src/content');

async function sync() {
  // Dynamically import sharp – gracefully skip if native binary isn't available.
  let sharpFn = null;
  try {
    const sharpModule = await import('sharp');
    sharpFn = sharpModule.default;
  } catch {
    console.warn('sharp not available – image dimensions will be skipped.');
  }

  /** @type {string[]} */
  let files = [];
  try {
    files = getAllMarkdownFiles(contentDir);
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    console.warn(`Could not read content directory: ${message}`);
  }

  const itemsPromises = files.map(async (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    // Only care about frontmatter-infused markdown files
    if (!data.id) return null;

    /** @type {Record<string, any>} */
    const item = {
      id: data.id,
      topicId: data.topicId,
      subTopicId: data.subTopicId,
      title: data.title,
      description: data.description || '',
      template: '', // Client doesn't need the full template in memory for Search
      filePath: filePath.replace(contentDir + path.sep, '').replace(/\\/g, '/'),
      examples: [],
    };

    // Extra twist for image topic: link to thumbnail and get resolution
    if (data.topicId === 'image' && data.subTopicId) {
      const pngPath = `/images/${data.subTopicId}/${data.id}.png`;
      const fullPngPath = path.join(process.cwd(), 'public', pngPath);
      if (fs.existsSync(fullPngPath)) {
        item.image = pngPath;
        if (sharpFn) {
          try {
            const metadata = await sharpFn(fullPngPath).metadata();
            item.width = metadata.width;
            item.height = metadata.height;
          } catch (e) {
            console.warn(`Error reading metadata for ${fullPngPath}`);
          }
        }
      }
    }

    return item;
  });

  const items = (await Promise.all(itemsPromises)).filter(Boolean);

  fs.writeFileSync(
    path.join(contentDir, 'generated-items.json'),
    JSON.stringify(items, null, 2),
    'utf8'
  );

  console.log(`Synced ${items.length} prompts to generated-items.json`);
}

sync().catch((err) => {
  console.error('sync-prompts failed:', err);
  process.exit(1);
});
