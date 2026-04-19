'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SearchPopup } from './search-popup';

export function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-4 z-50 w-full px-4 flex justify-center pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        <div className="flex h-14 items-center justify-between rounded-full border border-neutral-200/60 bg-white/70 px-6 shadow-lg shadow-neutral-200/20 backdrop-blur-xl dark:border-neutral-800/60 dark:bg-neutral-950/70 dark:shadow-black/40 transition-all">
          {/* Left: Logo & Name */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="group flex items-center space-x-2 sm:space-x-3 transition-opacity"
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="PromptMaster Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="hidden text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:block">
                PromptMaster
              </span>
            </Link>

            <nav className="flex items-center gap-4 md:gap-6">
              <Link
                href="/image"
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors"
              >
                Images
              </Link>
              <Link
                href="/custom-prompt"
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 transition-colors"
              >
                Workspace
              </Link>
            </nav>
          </div>

          {/* Right: Search & Theme */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="outline"
              onClick={() => setIsSearchOpen(true)}
              className="group hidden h-9 w-64 items-center justify-between rounded-full border-neutral-200/60 bg-white/50 px-4 text-neutral-500 hover:border-neutral-300 hover:bg-neutral-100 sm:flex dark:border-neutral-800/60 dark:bg-neutral-900/50 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
            >
              <span className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span className="text-sm font-normal">Search prompts...</span>
              </span>
              <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-neutral-200 bg-neutral-100 px-1.5 font-mono text-[10px] font-medium text-neutral-500 sm:flex dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="flex h-9 w-9 rounded-full text-neutral-500 hover:bg-neutral-100 sm:hidden dark:text-neutral-400 dark:hover:bg-neutral-800"
            >
              <Search className="h-4 w-4" />
            </Button>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-9 w-9 rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                title="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 animate-in zoom-in duration-300" />
                ) : (
                  <Moon className="h-4 w-4 animate-in zoom-in duration-300" />
                )}
              </Button>
            )}
          </div>
        </div>
        <SearchPopup open={isSearchOpen} setOpen={setIsSearchOpen} />
      </div>
    </header>
  );
}
