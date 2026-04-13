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
    const isInsideAppDir = cwd.toLowerCase().includes(`apps${path.sep}web`) || cwd.toLowerCase().includes('apps/web');
    
    const baseContentPath = isInsideAppDir 
      ? path.join(cwd, 'src/content') 
      : path.join(cwd, 'apps/web/src/content');
    
    const fullPath = path.join(baseContentPath, displayPrompt.filePath);
    const fileContent = await fs.readFile(fullPath, 'utf8');

    // Simple parsing logic to pull Title, Description, and Template
    const titleMatch = fileContent.match(/^# Template: (.+)$/m);
    if (titleMatch && titleMatch[1]) displayPrompt.title = titleMatch[1].trim();

    const templateHeader = '## 📋 Prompt Template';
    const headerIndex = fileContent.indexOf(templateHeader);
    
    if (headerIndex !== -1) {
      // Description is usually between title and template
      const beforeTemplate = fileContent.substring(0, headerIndex);
      const lines = beforeTemplate.split('\n');
      displayPrompt.description = lines
        .filter(l => l.trim() && !l.startsWith('#'))
        .join(' ')
        .trim();

      // Template is inside the first ```text block after the header
      const afterHeader = fileContent.substring(headerIndex);
      const templateMatch = afterHeader.match(/```text\n([\s\S]*?)```/);
      if (templateMatch && templateMatch[1]) {
        displayPrompt.template = templateMatch[1].trim();
      }
    }

    // Attempt to load examples from eg.md in the same folder
    const dirPath = path.dirname(fullPath);
    const egPath = path.join(dirPath, 'eg.md');
    try {
      const egContent = await fs.readFile(egPath, 'utf8');
      if (egContent) {
        // Simple example parsing (assuming blocks starting with ### Example)
        const examples: Example[] = [];
        const sections = egContent.split('### ').filter(s => s.trim());
        sections.forEach((s, idx) => {
          const lines = s.split('\n');
          const title = lines[0]!.trim();
          const content = s.substring(lines[0]!.length).trim();
          
          // Pattern: Input then Output
          const inputMatch = content.match(/\*\*Input:\*\*\n([\s\S]*?)(?=\*\*Output:\*\*|$)/);
          const outputMatch = content.match(/\*\*Output:\*\*\n([\s\S]*?)$/);
          
          if (inputMatch && inputMatch[1] && outputMatch && outputMatch[1]) {
            examples.push({
              id: `ex-${idx}`,
              title,
              input: inputMatch[1].trim(),
              output: outputMatch[1].trim()
            });
          }
        });
        if (examples.length > 0) displayPrompt.examples = examples;
      }
    } catch {
      // eg.md might not exist, that's fine
    }

  } catch (error) {
    console.error(`Error reading prompt file: ${displayPrompt.filePath}`, error);
  }

  return (
    <DetailWidthWrapper className="min-h-screen">
      <PromptDetails prompt={displayPrompt} />
    </DetailWidthWrapper>
  );
}
