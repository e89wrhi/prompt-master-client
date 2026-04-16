'use client';

import { Prompt } from '@/types/prompt';
import Image from 'next/image';
import Link from 'next/link';
import { PromptDetails } from '../../prompt/[slug]/prompt-details';

interface ImageDetailClientProps {
  prompt: Prompt;
  allPrompts: Prompt[];
}

export function ImageDetailClient({
  prompt,
  allPrompts,
}: ImageDetailClientProps) {
  return (
    <div className="flex w-full max-w-[1400px] mx-auto py-8 px-4 sm:px-6 gap-10">
      {/* Sidebar: Selectable Image List */}
      <div className="w-72 hidden lg:flex flex-col gap-6 border-r pr-6 border-neutral-200 dark:border-neutral-800">
        <div className="sticky top-0 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md py-4 z-10 border-b border-transparent">
          <Link
            href="/image"
            className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-amber-500 transition-colors flex items-center gap-2 mb-4"
          >
            <span>← Back to Images</span>
          </Link>
          <h2 className="font-black text-3xl text-neutral-900 dark:text-white">
            Gallery
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto h-[calc(100vh-8rem)] pb-20 custom-scrollbar pr-2">
          <div className="flex flex-col gap-5">
            {allPrompts.map((p) => {
              const isActive = p.id === prompt.id;
              return (
                <Link
                  key={p.id}
                  href={`/image/${p.id}`}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    isActive
                      ? 'ring-4 ring-amber-500 scale-[1.02] shadow-lg'
                      : 'hover:scale-[1.02] shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full bg-neutral-100 dark:bg-neutral-800">
                    <Image
                      src="/sport.png"
                      alt={p.title}
                      fill
                      className={`object-cover transition-transform duration-500 ${isActive ? 'scale-105' : 'group-hover:scale-105'}`}
                    />
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 flex flex-col justify-end p-3 
                      ${isActive ? 'bg-gradient-to-t from-black/80 to-transparent opacity-100' : 'bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100'}`}
                    >
                      <p className="text-sm text-white font-bold line-clamp-2">
                        {p.title}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-8 max-w-4xl min-w-0">
        {/* Large Image Header */}
        <div className="w-full relative aspect-square sm:aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10 group">
          <Image
            src="/sport.png"
            alt={prompt.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Prompt Content */}
        <div className="-mt-8">
          <PromptDetails prompt={prompt} />
        </div>
      </div>
    </div>
  );
}
