'use client';

import { useState } from 'react';
import { Topic, Prompt } from '@/types/prompt';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Search, Copy, Edit, ExternalLink } from 'lucide-react';
import { SearchPopup } from '@/app/(main)/components/search-popup';
import { toast } from 'sonner';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface TopicPageClientProps {
  topic: Topic;
  prompts: Prompt[];
}

export default function TopicPageClient({ topic, prompts }: TopicPageClientProps) {
  const searchParams = useSearchParams();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const subtopics = Array.from(new Set(prompts.map(p => p.subTopicId).filter(Boolean))) as string[];
  const filteredPrompts = activeTab === 'all' ? prompts : prompts.filter(p => p.subTopicId === activeTab);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Prompt copied to clipboard!');
  };

  return (
    <div className="container mx-auto px-4 pb-12">
      {/* Premium Hero Block */}
      <div className="relative isolate mb-12 mt-4 overflow-hidden rounded-3xl bg-neutral-900 px-6 py-16 sm:px-12 md:py-24 dark:bg-neutral-900/50 dark:ring-1 dark:ring-white/10 shadow-2xl">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-neutral-900 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950" />
        
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-neutral-300 ring-1 ring-inset ring-white/20">
              {topic.promptCount} Professional Prompts
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{topic.name}</h1>
          </div>
          <Button 
            className="w-full bg-white text-black hover:bg-neutral-200 md:w-auto md:px-8"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="mr-2 h-4 w-4" />
            Search Database
          </Button>
        </div>
      </div>

      {/* Tabs / Filters */}
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="mb-8 flex flex-wrap gap-2 h-auto bg-transparent justify-start">
          <TabsTrigger value="all" className="rounded-full px-4 py-2 data-[state=active]:bg-neutral-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black border border-transparent data-[state=active]:border-neutral-200 dark:data-[state=active]:border-neutral-800">
            All Prompts
          </TabsTrigger>
          {subtopics.map(sub => (
            <TabsTrigger key={sub} value={sub} className="rounded-full px-4 py-2 data-[state=active]:bg-neutral-900 data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black capitalize border border-transparent data-[state=active]:border-neutral-200 dark:data-[state=active]:border-neutral-800">
              {sub}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPrompts.map((prompt) => (
            <Link
              key={prompt.id}
              href={`/prompt/${prompt.id}`}
              className="group relative rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-900 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-white"
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white">
                {prompt.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
                {prompt.description}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">View Template</span>
                <ExternalLink className="h-3 w-3 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </Tabs>

      {/* Search Popup */}
      <SearchPopup open={isSearchOpen} setOpen={setIsSearchOpen} />
    </div>
  );
}
