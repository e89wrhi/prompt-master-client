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
      // Since all prompts are currently index.md or actual prompt template files:
      if (file !== 'eg.md') {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

const contentDir = path.join(process.cwd(), 'src/content');
let files: string[];
try {
  files = getAllMarkdownFiles(contentDir);
} catch (e) {
  files = [];
}

const items = files.map(filePath => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  // We only care about frontmatter-infused markdown files
  if (!data.id) return null;

  return {
    id: data.id,
    topicId: data.topicId,
    subTopicId: data.subTopicId,
    title: data.title,
    description: data.description || '',
    template: '', // Client doesn't need to load the full template in memory for Search
    filePath: filePath.replace(contentDir + path.sep, '').replace(/\\/g, '/'),
    examples: []
  };
}).filter(Boolean);

fs.writeFileSync(
  path.join(contentDir, 'generated-items.json'),
  JSON.stringify(items, null, 2),
  'utf8'
);

console.log(`Synced ${items.length} prompts to generated-items.json`);
