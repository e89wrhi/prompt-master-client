import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PromptItem {
  id: string;
  topicId: string;
  subTopicId: string;
  title: string;
  description?: string;
  filePath: string;
}

// use: npx tsx scripts/migrate.ts - to run migration
function getAllIndexFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllIndexFiles(fullPath, arrayOfFiles);
    } else if (file === 'index.md') {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function extractTitleFromMarkdown(content: string): string | null {
  const lines = content.split('\n');
  for (const line of lines) {
    if (line.startsWith('# ')) {
      return line.substring(2).trim();
    }
  }
  return null;
}

const contentDir = path.join(process.cwd(), 'src/content');
const files = getAllIndexFiles(contentDir);

let migratedCount = 0;
let updatedCount = 0;
let skippedCount = 0;

for (const filePath of files) {
  // Relative path from content dir, e.g. "coding/api/auth_flow/index.md"
  const relPath = path.relative(contentDir, filePath).replace(/\\/g, '/');
  const pathParts = relPath.split('/');

  // We expect [topicId, subTopicId, itemId, 'index.md']
  if (pathParts.length < 4) {
    skippedCount++;
    continue;
  }

  const [topicId, subTopicId, itemId] = pathParts;
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(fileContent);
  const data = parsed.data;

  // Check if we need to migrate/update
  const needsMigration = !data.id || !data.topicId || !data.subTopicId || !data.title;
  const isImageTopic = topicId === 'image';
  const hasThumbnailInFrontmatter = !!data.thumbnail;

  if (needsMigration || isImageTopic) {
    let title = data.title;
    if (!title || title === itemId || title.includes('_') || title === title.toLowerCase()) {
      const extracted = extractTitleFromMarkdown(fileContent);
      if (extracted) {
        title = extracted.replace(/^Template:\s*/i, '');
      }
    }

    const newData: any = {
      id: data.id || itemId,
      topicId: data.topicId || topicId,
      subTopicId: data.subTopicId || subTopicId,
      title: title || data.id || itemId,
    };

    // Merge other existing data
    Object.assign(newData, data);

    // Remove legacy fields
    delete newData.thumbnail;

    // Handle image thumbnails
    if (isImageTopic) {
      const pngPath = `/images/${subTopicId}/${newData.id}.png`;
      const fullPngPath = path.join(process.cwd(), 'public', pngPath);
      if (fs.existsSync(fullPngPath)) {
        newData.image = pngPath;
      }
    }

    // Write back
    const updatedFileContent = matter.stringify(parsed.content, newData);
    fs.writeFileSync(filePath, updatedFileContent, 'utf8');
    
    if (needsMigration) migratedCount++;
    else updatedCount++;
  } else {
    skippedCount++;
  }
}

console.log(`Migrated ${migratedCount} files to full frontmatter!`);
console.log(`Updated ${updatedCount} existing frontmatter files (including images).`);
console.log(`Skipped ${skippedCount} non-template files.`);

