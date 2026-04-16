import { Prompt } from '@/types/prompt';
import generatedItems from './generated-items.json';

// We assert the imported JSON aligns with the Prompt interface
export const ITEMS: Prompt[] = generatedItems as Prompt[];

export const getItemsBySubTopic = (subTopicId: string) => {
  return ITEMS.filter(item => item.subTopicId === subTopicId);
};

export const searchItems = (query: string) => {
  const normalizedQuery = query.toLowerCase();
  return ITEMS.filter(item => 
    item.title?.toLowerCase().includes(normalizedQuery) || 
    item.description?.toLowerCase().includes(normalizedQuery) ||
    item.id?.toLowerCase().includes(normalizedQuery)
  );
};

export const getItemsByTopic = (topicId: string) => {
  return ITEMS.filter(item => item.topicId === topicId);
};
