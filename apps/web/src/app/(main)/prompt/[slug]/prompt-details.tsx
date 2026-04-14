'use client';

import { useMemo, useState } from 'react';
import { Prompt } from '@/types/prompt';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  const [variables, setVariables] = useState<Record<string,string>>({});

  const handleCopy = (text: string, id: string = 'main') => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
    setCopiedMap((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setCopiedMap((prev) => ({ ...prev, [id]: false })), 2000);
  };

  // ---------- VARIABLE ENGINE ----------

  const variableRegex = /\[([A-Z0-9_]+)\]|\{\{([a-zA-Z0-9_]+)\}\}/g;

  const templateVars = useMemo(() => {
    const vars = new Set<string>();
    let match;
    while ((match = variableRegex.exec(editedTemplate)) !== null) {
      vars.add(match[1]! || match[2]!);
    }
    return Array.from(vars);
  }, [editedTemplate]);

  function applyVariables(template: string, values: Record<string,string>) {
    return template.replace(variableRegex, (_, bracketVar, curlyVar) => {
      const key = bracketVar || curlyVar;
      if (!values[key]) return `[${key}]`;
      return `@@HL_START@@${values[key]}@@HL_END@@`;
    });
  }

  function highlightToHTML(text: string) {
    return text
      .replaceAll('@@HL_START@@', '<span class="bg-amber-200 text-black px-1 rounded">')
      .replaceAll('@@HL_END@@', '</span>');
  }

  const renderedTemplate = applyVariables(editedTemplate, variables);
  const highlightedHTML = highlightToHTML(renderedTemplate);

  // ---------- UI ----------

  return (
    <div className="space-y-8 pt-8">

      {/* HERO */}
      <div className="relative isolate overflow-hidden rounded-3xl bg-neutral-900 px-6 py-12 shadow-2xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black text-white">{prompt.title}</h1>
            <p className="mt-4 text-lg text-neutral-300">{prompt.description}</p>
          </div>
          <div className="flex gap-3">
            <Button size="lg" variant={"ghost"} className='text-white rounded-full' onClick={() => handleCopy(renderedTemplate)}>
              {copiedMap['main'] ? <CheckCircle2 className="mr-2 h-5 w-5" /> : <Copy className="mr-2 h-5 w-5" />}
              Copy Prompt
            </Button>
            <Button size="lg" className='rounded-full' variant="outline" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? <Check className="mr-2 h-5 w-5 text-amber-500" /> : <Edit className="mr-2 h-5 w-5" />}
              {isEditing ? 'Save Changes' : 'Edit Template'}
            </Button>
          </div>
        </div>
      </div>

      {/* VARIABLES INPUTS (SHOW ONLY IN EDIT MODE) */}
{isEditing && templateVars.length > 0 && (
  <div className="rounded-2xl border p-6 space-y-4">
    <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
      Fill Template Variables
    </h4>

    <div className="grid md:grid-cols-2 gap-4">
      {templateVars.map((key) => (
        <div key={key} className="space-y-2">
          <label className="text-xs font-bold text-neutral-500">{key}</label>
          <Input
            placeholder={`Enter ${key}`}
            value={variables[key] || ''}
            onChange={(e) =>
              setVariables((prev) => ({
                ...prev,
                [key]: e.target.value,
              }))
            }
          />
        </div>
      ))}
    </div>
  </div>
)}

      {/* TEMPLATE BOX */}
      <div className="rounded-2xl border p-8">
        <div className="mb-6 flex justify-between">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
            Prompt Template
          </h4>

          {!isEditing && (
            <div className="flex gap-2">
              <Button size="sm" variant={viewMode === 'raw' ? 'secondary' : 'ghost'} onClick={() => setViewMode('raw')}>
                <Code className="mr-2 h-4 w-4" /> Raw
              </Button>
              <Button size="sm" variant={viewMode === 'preview' ? 'secondary' : 'ghost'} onClick={() => setViewMode('preview')}>
                <Eye className="mr-2 h-4 w-4" /> Preview
              </Button>
            </div>
          )}
        </div>

        <div className="rounded-xl bg-neutral-50 p-6 dark:bg-neutral-950">

          {isEditing ? (
            <Textarea
              value={editedTemplate}
              onChange={(e) => setEditedTemplate(e.target.value)}
              className="min-h-[300px] font-mono"
            />
          ) : viewMode === 'preview' ? (
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: highlightedHTML }}
            />
          ) : (
            <pre
              className="whitespace-pre-wrap font-mono"
              dangerouslySetInnerHTML={{ __html: highlightedHTML }}
            />
          )}

        </div>
      </div>

    </div>
  );
}