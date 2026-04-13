import { Suspense } from 'react';
import { MOCK_TOPICS, MOCK_PROMPTS } from '@/mock/prompts';
import { notFound } from 'next/navigation';
import TopicPageClient from './topic-page-client';
import DetailWidthWrapper from '@/components/layout/detail-width-wrapper';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TopicPage({ params }: PageProps) {
  const { id } = await params;
  const topic = MOCK_TOPICS.find((t) => t.id === id);

  if (!topic) {
    notFound();
  }

  const prompts = MOCK_PROMPTS.filter((p) => p.topicId === id);

  return (
    <DetailWidthWrapper className="min-h-screen">
      <TopicPageClient topic={topic} prompts={prompts} />
    </DetailWidthWrapper>
  );
}
