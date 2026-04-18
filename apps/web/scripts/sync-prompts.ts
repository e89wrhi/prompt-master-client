import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// use: npx tsx scripts/sync-prompts.ts
// Recursively find all md files
function getAllMarkdownFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.md')) {
      // Ignore eg.md if they exist separately, or include and distinguish?
      if (file !== 'eg.md') {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

const contentDir = path.join(process.cwd(), 'src/content');

async function sync() {
  // Dynamically import sharp so a missing/unbuilt native binary doesn't
  // crash the entire script at startup (e.g. on Vercel before rebuild).
  let sharpFn: ((input: string) => { metadata: () => Promise<{ width?: number; height?: number }> }) | null = null;
  try {
    const sharpModule = await import('sharp');
    sharpFn = sharpModule.default as any;
  } catch {
    console.warn('sharp not available – image dimensions will be skipped.');
  }

  let files: string[];
  try {
    files = getAllMarkdownFiles(contentDir);
  } catch (e) {
    files = [];
  }

  const itemsPromises = files.map(async (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    // We only care about frontmatter-infused markdown files
    if (!data.id) return null;

    const item: any = {
      id: data.id,
      topicId: data.topicId,
      subTopicId: data.subTopicId,
      title: data.title,
      description: data.description || '',
      template: '', // Client doesn't need to load the full template in memory for Search
      filePath: filePath.replace(contentDir + path.sep, '').replace(/\\/g, '/'),
      examples: []
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

sync().catch(console.error);
