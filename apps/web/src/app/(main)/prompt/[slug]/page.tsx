import { notFound } from 'next/navigation';
import { PromptDetails } from './prompt-details';
import DetailWidthWrapper from '@/components/layout/detail-width-wrapper';
import { ITEMS } from '@/content';
import { Prompt, Example } from '@/types/prompt';
import fs from 'fs/promises';
import path from 'path';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PromptPage({ params }: PageProps) {
  const { slug } = await params;
  const prompt = ITEMS.find((p) => p.id === slug);

  if (!prompt) {
    notFound();
  }

  // Create a copy to avoid mutating the shared ITEMS registry
  const displayPrompt = { ...prompt } as Prompt;

  // Load the actual content from the .md file if available
  try {
    // Correctly resolve the content directory based on project structure
    const cwd = process.cwd();
    const isInsideAppDir =
      cwd.toLowerCase().includes(`apps${path.sep}web`) ||
      cwd.toLowerCase().includes('apps/web');

    const baseContentPath = isInsideAppDir
      ? path.join(cwd, 'src/content')
      : path.join(cwd, 'apps/web/src/content');

    const fullPath = path.join(baseContentPath, displayPrompt.filePath);
    const fileContent = await fs.readFile(fullPath, 'utf8');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { data, content } = require('gray-matter')(fileContent);

    if (data.title) displayPrompt.title = data.title;
    if (data.description) displayPrompt.description = data.description;

    // We want the raw content as the template. But we could also selectively strip the # Template header if it exists.
    let finalTemplate = content.trim();
    if (finalTemplate.startsWith('# Template:')) {
      finalTemplate = finalTemplate.split('\n').slice(1).join('\n').trim();
    }

    displayPrompt.template = finalTemplate;

    // Attempt to load examples from eg.md in the same folder
    const dirPath = path.dirname(fullPath);
    const egPath = path.join(dirPath, 'eg.md');
    try {
      const egContent = await fs.readFile(egPath, 'utf8');
      if (egContent) {
        // Simple example parsing (assuming blocks starting with ### Example)
        const examples: Example[] = [];
        const sections = egContent.split('### ').filter((s) => s.trim());
        sections.forEach((s, idx) => {
          const lines = s.split('\n');
          const title = lines[0]!.trim();
          const content = s.substring(lines[0]!.length).trim();

          // Pattern: Input then Output
          const inputMatch = content.match(
            /\*\*Input:\*\*\n([\s\S]*?)(?=\*\*Output:\*\*|$)/
          );
          const outputMatch = content.match(/\*\*Output:\*\*\n([\s\S]*?)$/);

          if (inputMatch && inputMatch[1] && outputMatch && outputMatch[1]) {
            examples.push({
              id: `ex-${idx}`,
              title,
              input: inputMatch[1].trim(),
              output: outputMatch[1].trim(),
            });
          }
        });
        if (examples.length > 0) displayPrompt.examples = examples;
      }
    } catch {
      // eg.md might not exist, that's fine
    }
  } catch (error) {
    console.error(
      `Error reading prompt file: ${displayPrompt.filePath}`,
      error
    );
  }

  return (
    <DetailWidthWrapper className="min-h-screen">
      <PromptDetails prompt={displayPrompt} />
    </DetailWidthWrapper>
  );
}
