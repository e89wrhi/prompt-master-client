import { notFound } from 'next/navigation';
import TopicPageClient from './topic-page-client';
import DetailWidthWrapper from '@/components/layout/detail-width-wrapper';
import { ITEMS, TOPICS } from '@/content';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TopicPage({ params }: PageProps) {
  const { id } = await params;
  const topic = TOPICS.find((t) => t.id === id);

  if (!topic) {
    notFound();
  }

  const prompts = ITEMS.filter((p) => p.topicId === id);

  return (
    <DetailWidthWrapper className="min-h-screen">
      <TopicPageClient topic={topic} prompts={prompts} />
    </DetailWidthWrapper>
  );
}
