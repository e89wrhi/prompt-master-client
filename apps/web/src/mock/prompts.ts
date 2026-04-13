import { Topic, Prompt } from '@/types/prompt';

export const MOCK_TOPICS: Topic[] = [
  {
    id: 'coding',
    name: 'Coding',
    image: '',
    icon: 'Code',
    promptCount: 25,
  },
  {
    id: 'creative',
    name: 'Creative',
    image: '',
    icon: 'Palette',
    promptCount: 12,
  },
  {
    id: 'education',
    name: 'Education',
    image: '',
    icon: 'GraduationCap',
    promptCount: 18,
  },
  {
    id: 'image',
    name: 'Image',
    image: '',
    icon: 'Image',
    promptCount: 20,
  },
  {
    id: 'marketing',
    name: 'Marketing',
    image: '',
    icon: 'TrendingUp',
    promptCount: 15,
  },
  {
    id: 'productivity',
    name: 'Productivity',
    image: '',
    icon: 'Zap',
    promptCount: 22,
  },
  {
    id: 'video',
    name: 'Video',
    image: '',
    icon: 'Video',
    promptCount: 10,
  },
];

export const MOCK_PROMPTS: Prompt[] = [
  {
    id: 'code-refactor',
    topicId: 'coding',
    subTopicId: 'optimization',
    title: 'Code Refactoring Specialist',
    description: 'Expert prompt for refactoring messy code into clean, efficient patterns.',
    template: 'Act as a professional software engineer. Refactor the following code for better readability and performance: {{code}}',
    examples: [
      { id: '1', input: 'for(let i=0; i<arr.length; i++) { console.log(arr[i]) }', output: 'arr.forEach(item => console.log(item))' }
    ],
  },
  {
    id: 'auth_flow',
    topicId: 'coding',
    subTopicId: 'api',
    title: 'Secure Authentication Flow',
    description: 'Design and implement a secure authentication flow.',
    template: 'Act as a strict Cybersecurity Architect and Senior Backend Developer. Design and implement a secure [AUTH_TYPE] flow for a [APPLICATION_TYPE]...',
    examples: [
      { id: '1', input: 'OAuth 2.0 for SPA', output: 'Use PKCE flow with httpOnly cookies...' }
    ],
  },
  {
    id: 'bug-hunter',
    topicId: 'coding',
    subTopicId: 'debugging',
    title: 'Bug Hunter',
    description: 'Find elusive bugs in multi-threading code.',
    template: 'Analyze the following concurrent code block and point out race conditions: {{code}}',
    examples: [
      { id: '1', input: 'Using shared thread variables', output: 'You have a race condition on line X...' }
    ],
  },
  {
    id: 'copywrite-ads',
    topicId: 'marketing',
    title: 'High-Converting Ad Copy',
    description: 'Generate catchy headlines and body text for social media ads.',
    template: 'Create a compelling Facebook ad copy for a {{product}} targeted at {{audience}}. Focus on {{benefit}}.',
    examples: [
      { id: '1', input: 'Product: Coffee, Audience: Remote Workers, Benefit: Focus', output: 'Struggling to focus? Our special blend is made for your home office.' }
    ],
  },
];
