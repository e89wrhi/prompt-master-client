'use client';

import { Prompt } from '@/types/prompt';
import Link from 'next/link';
import Image from 'next/image';

interface ImageGalleryClientProps {
  prompts: Prompt[];
}

// Simulated dynamic heights for masonry layout
const heights = [300, 400, 250, 450, 350, 500];

export function ImageGalleryClient({ prompts }: ImageGalleryClientProps) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
      {prompts.map((prompt, i) => {
        const height = heights[i % heights.length];
        return (
          <div key={prompt.id} className="break-inside-avoid relative group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform bg-neutral-100 dark:bg-neutral-800">
            <Link href={`/image/${prompt.id}`} className="block relative">
              {/* Image using sport.png but styled to mimic different heights */}
              <div 
                className="w-full relative" 
                style={{ height: `${height}px` }}
              >
                <Image 
                  src="/sport.png" 
                  alt={prompt.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-extrabold text-xl line-clamp-2">{prompt.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2 mt-2">{prompt.description}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
