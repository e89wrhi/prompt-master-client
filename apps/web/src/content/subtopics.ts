import { SubTopic } from '@/types/prompt';

export const SUBTOPICS: SubTopic[] = [
  // Coding
  { id: 'api', topicId: 'coding', name: 'API Development', icon: 'Terminal' },
  { id: 'debugging', topicId: 'coding', name: 'Debugging', icon: 'Bug' },
  { id: 'devops', topicId: 'coding', name: 'DevOps', icon: 'Server' },
  { id: 'documentation', topicId: 'coding', name: 'Documentation', icon: 'FileText' },
  { id: 'generation', topicId: 'coding', name: 'Code Generation', icon: 'Code2' },
  { id: 'optimization', topicId: 'coding', name: 'Optimization', icon: 'Zap' },
  { id: 'system design', topicId: 'coding', name: 'System Design', icon: 'Layout' },

  // Creative
  { id: 'art', topicId: 'creative', name: 'Digital Art', icon: 'Brush' },
  { id: 'brainstorming', topicId: 'creative', name: 'Brainstorming', icon: 'Lightbulb' },
  { id: 'music', topicId: 'creative', name: 'Music Composition', icon: 'Music' },
  { id: 'poetry', topicId: 'creative', name: 'Poetry', icon: 'Feather' },
  { id: 'scriptwriting', topicId: 'creative', name: 'Scriptwriting', icon: 'Clapperboard' },
  { id: 'storytelling', topicId: 'creative', name: 'Storytelling', icon: 'BookOpen' },

  // Education
  { id: 'plans', topicId: 'education', name: 'Lesson Plans', icon: 'ClipboardList' },
  { id: 'research', topicId: 'education', name: 'Academic Research', icon: 'Search' },
  { id: 'study', topicId: 'education', name: 'Study Guides', icon: 'Book' },
  { id: 'summarization', topicId: 'education', name: 'Summarization', icon: 'AlignLeft' },
  { id: 'tutoring', topicId: 'education', name: 'Personal Tutoring', icon: 'User' },

  // Image
  { id: 'art', topicId: 'image', name: 'AI Artistry', icon: 'Palette' },
  { id: 'marketing', topicId: 'image', name: 'Marketing Visuals', icon: 'Megaphone' },
  { id: 'product', topicId: 'image', name: 'Product Photography', icon: 'Camera' },
  { id: 'social', topicId: 'image', name: 'Social Media Posts', icon: 'Share2' },
  { id: 'ui', topicId: 'image', name: 'UI/UX Elements', icon: 'Monitor' },

  // Marketing
  { id: 'ad & campaigns', topicId: 'marketing', name: 'Ad Campaigns', icon: 'Target' },
  { id: 'analytics', topicId: 'marketing', name: 'Market Analytics', icon: 'BarChart' },
  { id: 'branding', topicId: 'marketing', name: 'Brand Strategy', icon: 'Flag' },
  { id: 'copywriting', topicId: 'marketing', name: 'Copywriting', icon: 'PenTool' },
  { id: 'email marketing', topicId: 'marketing', name: 'Email Marketing', icon: 'Mail' },
  { id: 'seo', topicId: 'marketing', name: 'SEO Optimization', icon: 'Globe' },
  { id: 'social', topicId: 'marketing', name: 'Social Strategy', icon: 'Hash' },

  // Productivity
  { id: 'analysis', topicId: 'productivity', name: 'Data Analysis', icon: 'PieChart' },
  { id: 'consulting', topicId: 'productivity', name: 'Business Consulting', icon: 'Briefcase' },
  { id: 'meeting', topicId: 'productivity', name: 'Meeting Management', icon: 'Users' },
  { id: 'strategy', topicId: 'productivity', name: 'Strategic Planning', icon: 'Compass' },
  { id: 'time', topicId: 'productivity', name: 'Time Management', icon: 'Clock' },
  { id: 'workflow', topicId: 'productivity', name: 'Workflow Automation', icon: 'GitMerge' },

  // Video
  { id: 'editing', topicId: 'video', name: 'Non-Linear Editing', icon: 'Scissors' },
  { id: 'motion', topicId: 'video', name: 'Motion Graphics', icon: 'Activity' },
  { id: 'script', topicId: 'video', name: 'Screenwriting', icon: 'FileText' },
  { id: 'storyboard', topicId: 'video', name: 'Storyboarding', icon: 'Film' },
];
