import { MOCK_PROMPTS } from '@/mock/prompts';
import { notFound } from 'next/navigation';
import { PromptDetails } from './prompt-details';
import DetailWidthWrapper from '@/components/layout/detail-width-wrapper';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PromptPage({ params }: PageProps) {
  const { slug } = await params;
  const prompt = MOCK_PROMPTS.find((p) => p.id === slug);

  if (!prompt) {
    notFound();
  }

  return (
    <DetailWidthWrapper className="min-h-screen">
      <PromptDetails prompt={prompt} />
    </DetailWidthWrapper>
  );
}
