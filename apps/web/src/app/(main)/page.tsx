import Link from 'next/link';
import { MOCK_TOPICS } from '@/mock/prompts';
import { TopicCard } from './components/topic-card';
import DetailWidthWrapper from '@/components/layout/detail-width-wrapper';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black">
      {/* Premium Background Blobs */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-10" />
      </div>

      <DetailWidthWrapper className="relative z-10 !bg-transparent pt-20 pb-32 shadow-none">
        <header className="mb-24 flex flex-col items-center text-center">
          <div className="mb-8 mt-5 inline-flex items-center rounded-full border border-neutral-200 bg-white/40 px-4 py-1.5 text-sm font-medium text-neutral-800 backdrop-blur-md transition-colors hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-300 dark:hover:bg-neutral-800 cursor-default">
            <Sparkles className="mr-2 h-4 w-4 text-amber-500" />
            <span>PromptMaster Library 2.0</span>
          </div>
          
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-7xl lg:text-8xl">
            Supercharge your AI <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-900 dark:from-neutral-400 dark:to-white">
              workflows instantly
            </span>
          </h1>
          
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
            Stop guessing what works. Discover the definitive library of production-ready AI templates, expertly crafted and tested for peak performance.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#library" className="group inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-8 font-medium text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/20 dark:bg-white dark:text-black dark:hover:shadow-white/10">
              Browse Library
            </Link>
            <Link href="/topic/coding" className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 bg-white/50 px-8 font-medium text-neutral-900 backdrop-blur transition-all hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-white dark:hover:bg-neutral-800">
              View Examples <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </header>

        <div id="library" className="scroll-mt-32">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Expert Categories</h2>
            <div className="ml-6 flex-1 h-px bg-gradient-to-r from-neutral-200 to-transparent dark:from-neutral-800" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {MOCK_TOPICS.map((topic, i) => (
              <div key={topic.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" style={{ animationDelay: `${i * 100}ms` }}>
                <TopicCard topic={topic} />
              </div>
            ))}
          </div>
        </div>
      </DetailWidthWrapper>
    </div>
  );
}
