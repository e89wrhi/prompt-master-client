'use client';

import * as React from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { MOCK_PROMPTS } from '@/mock/prompts';
import { Search, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SearchPopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function SearchPopup({ open, setOpen }: SearchPopupProps) {
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen]);

  const handleSelect = (id: string, topicId: string) => {
    setOpen(false);
    // In a real app, maybe we open the drawer directly or navigate to a specific page
    // For now, let's navigate to the topic page if we are not there
    router.push(`/topic/${topicId}?prompt=${id}`);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search all prompts... (e.g. Code Refactor, Marketing)" />
      <CommandList className="pb-2">
        <CommandEmpty className="py-12 text-center text-sm text-neutral-500 dark:text-neutral-400">
          No prompts found. Try a different search term.
        </CommandEmpty>
        <CommandGroup heading="Available Prompts" className="px-2">
          {MOCK_PROMPTS.map((prompt) => (
            <CommandItem
              key={prompt.id}
              onSelect={() => handleSelect(prompt.id, prompt.topicId)}
              className="group flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-neutral-100 aria-selected:bg-neutral-100 dark:hover:bg-neutral-800/50 dark:aria-selected:bg-neutral-800/50 my-1"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800 transition-colors group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800">
                <FileText className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate font-semibold text-neutral-900 dark:text-neutral-100">{prompt.title}</span>
                <span className="truncate text-xs text-neutral-500 dark:text-neutral-400">
                  {prompt.description}
                </span>
              </div>
              <span className="ml-auto flex shrink-0 items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-600 ring-1 ring-inset ring-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:ring-neutral-800">
                {prompt.topicId}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
