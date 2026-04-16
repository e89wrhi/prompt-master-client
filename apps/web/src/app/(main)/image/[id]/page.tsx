import { notFound } from 'next/navigation';
import { ITEMS } from '@/content';
import { Prompt } from '@/types/prompt';
import fs from 'fs/promises';
import path from 'path';
import { ImageDetailClient } from './image-detail-client';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ImageDetailPage({ params }: PageProps) {
  const { id } = await params;
  const prompt = ITEMS.find((p) => p.id === id);

  if (!prompt) {
    notFound();
  }

  // Create a copy to avoid mutating the shared registry
  const displayPrompt = { ...prompt } as Prompt;

  try {
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

    let finalTemplate = content.trim();
    if (finalTemplate.startsWith('# Template:')) {
      finalTemplate = finalTemplate.split('\n').slice(1).join('\n').trim();
    }

    displayPrompt.template = finalTemplate;
  } catch (error) {
    console.error(
      `Error reading prompt file: ${displayPrompt.filePath}`,
      error
    );
  }

  const imagePrompts = ITEMS.filter((p) => p.topicId === 'image');

  return (
    <div className="min-h-screen">
      <ImageDetailClient prompt={displayPrompt} allPrompts={imagePrompts} />
    </div>
  );
}
