import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

const PREDEFINED_TOPICS = [
  {
    id: 'coding',
    name: 'Software Engineering',
    description: 'Prompts for code generation, review, and architecture.',
    icon: 'Code2',
  },
  {
    id: 'marketing',
    name: 'Marketing & Sales',
    description: 'Copywriting, SEO, and campaign strategy prompts.',
    icon: 'Megaphone',
  },
  {
    id: 'creative',
    name: 'Creative Writing',
    description: 'Storytelling, world-building, and character development.',
    icon: 'Feather',
  },
  {
    id: 'productivity',
    name: 'Productivity',
    description: 'Task management, summarizing, and workflow design.',
    icon: 'Zap',
  },
  {
    id: 'education',
    name: 'Education & Learning',
    description: 'Tutoring, lesson planning, and curriculum development.',
    icon: 'BookOpen',
  },
];

async function main() {
  console.log('Seeding database...');
  
  // Create topics
  for (const topic of PREDEFINED_TOPICS) {
    await prisma.topic.upsert({
      where: { id: topic.id },
      update: { ...topic },
      create: { ...topic },
    });
  }

  const contentDir = path.join(process.cwd(), 'src/content');
  if (!fs.existsSync(contentDir)) {
    console.log('No content directory found.');
    return;
  }

  const topics = fs.readdirSync(contentDir);

  for (const topicId of topics) {
    const topicPath = path.join(contentDir, topicId);
    if (!fs.statSync(topicPath).isDirectory()) continue;

    // Check if subdirectories are grouping folders (like 'api') or prompt folders directly.
    const subdirs = fs.readdirSync(topicPath);
    for (const subdir of subdirs) {
      const subdirPath = path.join(topicPath, subdir);
      if (!fs.statSync(subdirPath).isDirectory()) continue;

      // Inside we might have prompt folders
      const promptFolders = fs.readdirSync(subdirPath);
      for (const promptFold of promptFolders) {
        const promptPath = path.join(subdirPath, promptFold);
        if (!fs.statSync(promptPath).isDirectory()) continue;

        const indexPath = path.join(promptPath, 'index.md');
        if (fs.existsSync(indexPath)) {
          const content = fs.readFileSync(indexPath, 'utf-8');
          // Parse title (from first # Heading)
          const titleMatch = content.match(/^#\s+(.+)/m);
          let title = titleMatch ? titleMatch[1] : promptFold;

          // Remove "Template: " prefix if exists
          if (title.startsWith('Template: ')) {
             title = title.substring(10);
          }

          // Description (First paragraph after heading)
          const descMatch = content.match(/^#\s+.+\n+([^#\n][\s\S]*?)(?=\n##|$)/m);
          let description = descMatch ? descMatch[1].trim() : '';
          if (description.length > 200) description = description.substring(0, 197) + '...';

          // Extract Prompt Template
          const templateMatch = content.match(/##\s+📋\s+Prompt Template\s+```text([\s\S]*?)```/m);
          const template = templateMatch ? templateMatch[1].trim() : 'No template found.';

          await prisma.prompt.upsert({
            where: { id: promptFold },
            update: {
              title,
              description,
              template,
              topicId
            },
            create: {
              id: promptFold,
              title,
              description,
              template,
              topicId
            }
          });

          // Increase prompt count
          await prisma.topic.update({
            where: { id: topicId },
            data: { promptCount: { increment: 1 } }
          });
        }
      }
    }
  }

  console.log('Finished seeding.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
