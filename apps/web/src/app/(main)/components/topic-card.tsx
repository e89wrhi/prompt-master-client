import Link from 'next/link';
import { Topic } from '@/types/prompt';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  // @ts-ignore
  const IconComponent = Icons[topic.icon || 'FileText'];

  return (
    <Link
      href={`/topic/${topic.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-neutral-400 hover:shadow-xl bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-neutral-800"
    >
      <div className={cn(
        "mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
        "bg-neutral-50 text-neutral-600 group-hover:bg-white dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:bg-neutral-700"
      )}>
        {IconComponent && <IconComponent size={24} />}
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-neutral-900 transition-colors group-hover:text-black dark:text-neutral-50 dark:group-hover:text-white">
          {topic.name}
        </h3>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {topic.promptCount} Professional Prompts
        </p>
      </div>
      
      <div className="mt-4 flex items-center text-sm font-medium text-neutral-600 opacity-0 transition-all group-hover:opacity-100 dark:text-neutral-400">
        Browse topics
        <Icons.ArrowRight size={16} className="ml-1" />
      </div>
    </Link>
  );
}
