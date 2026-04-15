'use client';

import { useMemo, useState } from 'react';
import { Prompt } from '@/types/prompt';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, Edit, ArrowLeft, Check, CheckCircle2, Eye, Code, Download, Plus, X } from 'lucide-react';
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
  const [editedTitle, setEditedTitle] = useState(prompt.title);
  const [editedDescription, setEditedDescription] = useState(prompt.description);
  const [editedExamples, setEditedExamples] = useState(prompt.examples || []);
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
      .replaceAll('@@HL_START@@', '<span class="bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 px-1.5 py-0.5 rounded font-bold border border-amber-200 dark:border-amber-800">')
      .replaceAll('@@HL_END@@', '</span>');
  }

  const handleDownload = () => {
    const content = `# Template: ${editedTitle}\n\n${editedDescription}\n\n## 📋 Prompt Template\n\n\`\`\`text\n${editedTemplate}\n\`\`\``;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${editedTitle.toLowerCase().replace(/\s+/g, '-')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Prompt downloaded!');
  };

  const renderedTemplate = applyVariables(editedTemplate, variables);
  const highlightedHTML = highlightToHTML(renderedTemplate);

  // ---------- UI ----------

  return (
    <div className="space-y-8 pt-8">

      {/* HERO */}
      <div className="relative isolate overflow-hidden rounded-3xl bg-neutral-900 px-6 py-12 shadow-2xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl flex-1">
            {isEditing ? (
              <div className="space-y-4">
                <Input 
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="text-4xl font-black bg-white/10 border-white/20 text-white h-auto py-2 focus-visible:ring-amber-500"
                  placeholder="Enter prompt title..."
                />
                <Textarea 
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="mt-4 text-lg bg-white/10 border-white/20 text-neutral-300 min-h-[80px] focus-visible:ring-amber-500"
                  placeholder="Enter prompt description..."
                />
              </div>
            ) : (
              <>
                <h1 className="text-4xl font-black text-white">{editedTitle}</h1>
                <p className="mt-4 text-lg text-neutral-300">{editedDescription}</p>
              </>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" variant={"ghost"} className='text-white rounded-full hover:bg-white/10' onClick={() => handleCopy(renderedTemplate)}>
              {copiedMap['main'] ? <CheckCircle2 className="mr-2 h-5 w-5 text-green-400" /> : <Copy className="mr-2 h-5 w-5" />}
              Copy
            </Button>
            <Button size="lg" variant={"ghost"} className='text-white rounded-full hover:bg-white/10' onClick={handleDownload}>
              <Download className="mr-2 h-5 w-5" />
              Download
            </Button>
            <Button size="lg" className='rounded-full bg-amber-500 hover:bg-amber-600 text-black border-none' onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? <Check className="mr-2 h-5 w-5" /> : <Edit className="mr-2 h-5 w-5" />}
              {isEditing ? 'Done' : 'Edit'}
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

      {/* EXAMPLES SECTION */}
      {(editedExamples.length > 0 || isEditing) && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Examples
            </h4>
            {isEditing && (
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full"
                onClick={() => setEditedExamples([...editedExamples, { id: Date.now().toString(), title: 'New Example', input: '', output: '' }])}
              >
                <Plus className="mr-2 h-4 w-4" /> Add Example
              </Button>
            )}
          </div>

          <div className="grid gap-6">
            {editedExamples.map((ex, idx) => (
              <div key={ex.id} className="rounded-2xl border overflow-hidden">
                <div className="bg-neutral-50 dark:bg-neutral-900 px-6 py-4 flex justify-between items-center border-b">
                  {isEditing ? (
                    <Input 
                      value={ex.title}
                      onChange={(e) => {
                        const newEx = [...editedExamples];
                        newEx[idx] = { ...newEx[idx]!, title: e.target.value };
                        setEditedExamples(newEx);
                      }}
                      className="max-w-xs h-8 text-sm font-bold"
                    />
                  ) : (
                    <h5 className="font-bold text-neutral-700 dark:text-neutral-300">
                      {ex.title || `Example ${idx + 1}`}
                    </h5>
                  )}
                  {isEditing && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => setEditedExamples(editedExamples.filter((_, i) => i !== idx))}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="p-6 grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Input</span>
                      {!isEditing && (
                        <Button variant="ghost" size="sm" onClick={() => handleCopy(ex.input, `in-${ex.id}`)}>
                          {copiedMap[`in-${ex.id}`] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      )}
                    </div>
                    {isEditing ? (
                      <Textarea 
                        value={ex.input}
                        onChange={(e) => {
                          const newEx = [...editedExamples];
                          newEx[idx] = { ...newEx[idx]!, input: e.target.value };
                          setEditedExamples(newEx);
                        }}
                        className="min-h-[100px] text-sm font-mono"
                      />
                    ) : (
                      <div className="bg-white dark:bg-black rounded-lg p-4 border text-sm font-mono whitespace-pre-wrap">
                        {ex.input}
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Output</span>
                      {!isEditing && (
                        <Button variant="ghost" size="sm" onClick={() => handleCopy(ex.output, `out-${ex.id}`)}>
                          {copiedMap[`out-${ex.id}`] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      )}
                    </div>
                    {isEditing ? (
                      <Textarea 
                        value={ex.output}
                        onChange={(e) => {
                          const newEx = [...editedExamples];
                          newEx[idx] = { ...newEx[idx]!, output: e.target.value };
                          setEditedExamples(newEx);
                        }}
                        className="min-h-[100px] text-sm font-mono"
                      />
                    ) : (
                      <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-4 border border-dashed text-sm font-mono whitespace-pre-wrap italic text-neutral-600 dark:text-neutral-400">
                        {ex.output}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}