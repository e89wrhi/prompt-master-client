import { SiteConfig } from '@/types';
import { env } from '@/../env.mjs';
import icon from '@/assets/favicon.png';

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: 'PromptMaster',
  description: 'Latest prompt templates for AI.',
  url: site_url,
  ogImage: icon.src,
  links: {
    twitter: 'https://twitter.com/masterprompt',
    github: 'https://github.com/masterprompt',
  },
  mailSupport: 'support@masterprompt.com',
};
