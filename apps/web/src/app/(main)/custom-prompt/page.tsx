'use client';

import { useState } from 'react';
import { Prompt } from '@/types/prompt';
import { PromptDetails } from '../prompt/[slug]/prompt-details';
import DetailWidthWrapper from '@/components/layout/detail-width-wrapper';
import { Button } from '@/components/ui/button';
import { FileUp, FileText, Plus, X, Download, Sparkles, Wand2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';

export default function CustomPromptPage() {
  const [prompt, setPrompt] = useState<Prompt | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.md') && !file.name.endsWith('.txt')) {
      toast.error('Please upload a markdown (.md) or text (.txt) file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      parseContent(content, file.name);
    };
    reader.readAsText(file);
  };

  const parseContent = (fileContent: string, fileName: string) => {
    const displayPrompt: Prompt = {
      id: 'custom-' + Date.now(),
      topicId: 'custom',
      title: fileName.replace(/\.(md|txt)$/, ''),
      description: 'Custom uploaded prompt',
      template: fileContent,
      filePath: fileName,
      examples: []
    };

    // Use the same parsing logic as in the prompt/[slug]/page.tsx
    const titleMatch = fileContent.match(/^# Template: (.+)$/m);
    if (titleMatch && titleMatch[1]) displayPrompt.title = titleMatch[1].trim();

    const templateHeader = '## 📋 Prompt Template';
    const headerIndex = fileContent.indexOf(templateHeader);
    
    if (headerIndex !== -1) {
      const beforeTemplate = fileContent.substring(0, headerIndex);
      const lines = beforeTemplate.split('\n');
      displayPrompt.description = lines
        .filter(l => l.trim() && !l.startsWith('#'))
        .join(' ')
        .trim();

      const afterHeader = fileContent.substring(headerIndex);
      const templateMatch = afterHeader.match(/```text\n([\s\S]*?)```/);
      if (templateMatch && templateMatch[1]) {
        displayPrompt.template = templateMatch[1].trim();
      }
    }

    setPrompt(displayPrompt);
    toast.success('Prompt loaded successfully!');
  };

  const handleManualCreate = () => {
    setPrompt({
      id: 'custom-' + Date.now(),
      topicId: 'custom',
      title: 'My Custom Prompt',
      description: 'Enter your prompt description here...',
      template: 'Write your prompt template here. Use [VARIABLES] if needed.',
      filePath: 'custom.md',
      examples: []
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <DetailWidthWrapper className="pb-20">
        <AnimatePresence mode="wait">
          {!prompt ? (
            <motion.div
              key="upload-choice"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center space-y-12 py-16"
            >
              <div className="text-center space-y-6 max-w-3xl">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-medium text-sm mb-4"
                >
                  <Sparkles className="w-4 h-4" />
                  Your Workspace
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight text-neutral-900 dark:text-white">
                  Craft Your <span className="text-amber-500">Masterpiece</span>
                </h1>
                <p className="text-xl text-neutral-500 dark:text-neutral-400">
                  Import your existing prompt files or build a new one with our advanced builder. 
                  Leverage variables, previews, and more.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
                <motion.label 
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex flex-col items-center justify-center border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-[2.5rem] p-12 transition-all cursor-pointer bg-neutral-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  <input type="file" className="hidden" accept=".md,.txt" onChange={handleFileUpload} />
                  <div className="mb-6 p-6 rounded-3xl bg-white dark:bg-neutral-800 shadow-xl group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    <FileUp className="w-10 h-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400">
                    Import Prompt
                  </h3>
                  <p className="mt-4 text-neutral-400 text-center text-lg">
                    Select an .md or .txt file from your computer
                  </p>
                </motion.label>

                <motion.button 
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleManualCreate}
                  className="group relative flex flex-col items-center justify-center border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-[2.5rem] p-12 transition-all bg-neutral-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  <div className="mb-6 p-6 rounded-3xl bg-white dark:bg-neutral-800 shadow-xl group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    <Plus className="w-10 h-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400">
                    Create New
                  </h3>
                  <p className="mt-4 text-neutral-400 text-center text-lg">
                    Start with a fresh template and build it here
                  </p>
                </motion.button>
              </div>

              <div className="flex items-center gap-4 text-neutral-400 font-medium">
                <Wand2 className="w-5 h-5" />
                <span>Supports dynamic variables like [NAME] or &#123;&#123;NAME&#125;&#125;</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="editor-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8 px-2">
                <Button 
                  variant="ghost" 
                  onClick={() => setPrompt(null)}
                  className="rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-500 font-semibold"
                >
                  <X className="mr-2 h-4 w-4" /> Discard and Start Over
                </Button>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-neutral-400 flex items-center mr-2">
                    <Sparkles className="w-4 h-4 mr-1 text-amber-500" />
                    Custom Mode Active
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-[2.5rem] blur-2xl opacity-50" />
                <div className="relative bg-white dark:bg-black rounded-[2rem] overflow-hidden">
                  <PromptDetails prompt={prompt} showBackLink={false} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DetailWidthWrapper>
    </div>
  );
}
