'use client';
 
import { useState } from 'react';
import { Prompt } from '@/types/prompt';
import { Button } from '@/components/ui/button';
import { Copy, Edit, ArrowLeft, Check, CheckCircle2, Eye, Code } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PromptDetailsProps {
  prompt: Prompt;
  showBackLink?: boolean;
  onBack?: () => void;
}

export function PromptDetails({ prompt, showBackLink = true, onBack }: PromptDetailsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [viewMode, setViewMode] = useState<'raw' | 'preview'>('raw');
  const [editedTemplate, setEditedTemplate] = useState(prompt.template);
  const [copiedMap, setCopiedMap] = useState<Record<string, boolean>>({});

  const handleCopy = (text: string, id: string = 'main') => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
    setCopiedMap((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setCopiedMap((prev) => ({ ...prev, [id]: false })), 2000);
  };

  return (
    <div className="space-y-8">
      {showBackLink && (
        onBack ? (
          <button 
            onClick={onBack}
            className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {prompt.topicId}
          </button>
        ) : (
          <Link 
            href={`/topic/${prompt.topicId}`}
            className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {prompt.topicId}
          </Link>
        )
      )}

      <div className="relative isolate overflow-hidden rounded-3xl bg-neutral-900 px-6 py-12 sm:px-12 md:py-16 shadow-2xl dark:bg-neutral-900/50 dark:ring-1 dark:ring-white/10 mb-8 mt-4">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-neutral-950 opacity-80" />
        <div className="absolute -top-24 -right-24 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-neutral-500 to-neutral-800 opacity-20 blur-3xl mix-blend-screen" />
        
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{prompt.title}</h1>
            <p className="mt-4 text-lg text-neutral-300 md:text-xl">{prompt.description}</p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Button 
              size="lg"
              className="rounded-full bg-white text-black hover:bg-neutral-200"
              onClick={() => handleCopy(editedTemplate, 'main')}
            >
              {copiedMap['main'] ? <CheckCircle2 className="mr-2 h-5 w-5" /> : <Copy className="mr-2 h-5 w-5" />}
              {copiedMap['main'] ? 'Copied to clipboard' : 'Copy Template'}
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="rounded-full border-neutral-700 bg-neutral-800/50 text-white backdrop-blur-sm hover:bg-neutral-700 hover:text-white dark:border-neutral-700 dark:bg-neutral-800/50"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? <Check className="mr-2 h-5 w-5 text-amber-500" /> : <Edit className="mr-2 h-5 w-5" />}
              {isEditing ? 'Save Changes' : 'Edit Prompt'}
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mb-6 flex items-center justify-between">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Prompt Template</h4>
          {!isEditing && (
            <div className="flex rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800">
              <Button
                variant={viewMode === 'raw' ? 'secondary' : 'ghost'}
                size="sm"
                className="h-8 rounded-md px-3 text-xs"
                onClick={() => setViewMode('raw')}
              >
                <Code className="mr-2 h-3.5 w-3.5" />
                Raw
              </Button>
              <Button
                variant={viewMode === 'preview' ? 'secondary' : 'ghost'}
                size="sm"
                className="h-8 rounded-md px-3 text-xs"
                onClick={() => setViewMode('preview')}
              >
                <Eye className="mr-2 h-3.5 w-3.5" />
                Preview
              </Button>
            </div>
          )}
        </div>
        
        <div className="rounded-xl bg-neutral-50 p-6 dark:bg-neutral-950">
          {isEditing ? (
            <Textarea
              value={editedTemplate}
              onChange={(e) => setEditedTemplate(e.target.value)}
              className="min-h-[300px] resize-y font-mono text-base text-neutral-900 focus-visible:ring-neutral-200 dark:text-neutral-100 dark:focus-visible:ring-neutral-800"
            />
          ) : (
            viewMode === 'preview' ? (
              <div className="markdown-preview prose prose-neutral dark:prose-invert max-w-none prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-900 prose-headings:font-black prose-p:text-neutral-700 dark:prose-p:text-neutral-300">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {editedTemplate}
                </ReactMarkdown>
              </div>
            ) : (
              <pre className="whitespace-pre-wrap font-mono text-base text-neutral-900 dark:text-neutral-100">
                {editedTemplate}
              </pre>
            )
          )}
        </div>
      </div>

      {prompt.examples.map((ex) => (
        <div key={ex.id} className="space-y-6">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Example: {ex.title}</h3>
          <div className="grid gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden dark:border-neutral-800 dark:bg-neutral-900">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
                <div className="p-6 relative group">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Input / Use Case</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100" onClick={() => handleCopy(ex.input, `in-${ex.id}`)}>
                      {copiedMap[`in-${ex.id}`] ? <CheckCircle2 className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300">{ex.input}</p>
                </div>
                <div className="p-6 bg-neutral-50/50 relative group dark:bg-neutral-800/20">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Expected Output</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100" onClick={() => handleCopy(ex.output, `out-${ex.id}`)}>
                        {copiedMap[`out-${ex.id}`] ? <CheckCircle2 className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                  </div>
                  <div className="markdown-preview prose prose-neutral dark:prose-invert text-sm italic prose-p:text-neutral-700 dark:prose-p:text-neutral-300">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {ex.output}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
