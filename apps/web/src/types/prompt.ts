export interface Topic {
  id: string;
  name: string;
  image: string;
  icon?: string;
  promptCount: number;
}

export interface Prompt {
  id: string;
  topicId: string;
  subTopicId?: string; // e.g. "api", "debugging"
  title: string;
  description: string;
  template: string;
  examples: Example[];
}

export interface Example {
  id: string;
  input: string;
  output: string;
}
