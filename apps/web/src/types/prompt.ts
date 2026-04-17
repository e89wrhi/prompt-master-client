export interface Topic {
  id: string;
  name: string;
  image: string;
  icon?: string;
  promptCount: number;
}

export interface SubTopic {
  id: string;
  topicId: string;
  name: string;
  description?: string;
  icon?: string;
  promptCount?: number;
}

export interface Prompt {
  id: string;
  topicId: string;
  subTopicId?: string;
  title: string;
  description: string;
  template: string; // The content of index.md or actual prompt
  filePath: string; // Location of the .md file (e.g. "coding/api/auth-flow/index.md")
  image?: string;
  width?: number;
  height?: number;
  examples: Example[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Example {
  id: string;
  title?: string;
  input: string;
  output: string;
  filePath?: string; // Location of eg.md if separate
}
