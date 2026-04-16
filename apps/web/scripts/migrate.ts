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
// Quick and dirty way to parse the items.ts file without full TS compilation
function parseItemsTs(): PromptItem[] {
  const fileContent = fs.readFileSync(path.join(process.cwd(), 'src/content/items.ts'), 'utf-8');
  
  // Find the array definition
  const arrayStart = fileContent.indexOf('const ITEMS: Prompt[] = [');
  const arrayEnd = fileContent.lastIndexOf('];');
  
  if (arrayStart === -1 || arrayEnd === -1) {
    throw new Error('Could not find ITEMS array in items.ts');
  }
  
  const arrayString = fileContent.substring(arrayStart + 'const ITEMS: Prompt[] = '.length, arrayEnd + 1);
  
  // Dangerously evaluate the array string (safe since we control the file)
  // We need to provide dummy Prompt type or just eval it
  const items = eval(`(${arrayString})`) as PromptItem[];
  return items;
}

const items = parseItemsTs();

let migratedCount = 0;

for (const item of items) {
  const fullPath = path.join(process.cwd(), 'src/content', item.filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    continue;
  }
  
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  
  // Check if file already has frontmatter
  const parsed = matter(fileContent);
  if (Object.keys(parsed.data).length > 0) {
    console.log(`Skipping (already has frontmatter): ${item.filePath}`);
    continue;
  }
  
  // Prepare new frontmatter
  const frontmatter: Record<string, any> = {
    id: item.id,
    topicId: item.topicId,
    subTopicId: item.subTopicId,
    title: item.title,
  };
  
  // Only add non-empty fields to avoid clutter
  if (item.description) {
    frontmatter.description = item.description;
  }
  
  // Write back to the file
  const updatedFileContent = matter.stringify(fileContent, frontmatter);
  fs.writeFileSync(fullPath, updatedFileContent, 'utf8');
  migratedCount++;
}

console.log(`Migrated ${migratedCount} files to use frontmatter!`);
