# PromptMaster Web

The Web App is the primary engine for the PromptMaster library, delivering a fast, responsive, and minimalist interface for discovering AI templates.

## 🌟 Key Features

- **Topic Browsing**: Discover prompts organized by専門 (Coding, Marketing, Creative, etc.).
- **Standalone Prompt Pages**: Deep-linkable, full-page views for every individual prompt.
- **Advanced Search**: Global search popup (Cmd+K) to find any prompt in the library instantly.
- **Theme Support**: Seamless transition between light and dark modes using a neutral design system.
- **Optimized for Copying**: Direct "Copy Template" actions with toast feedback for a smooth workflow.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Components**: Shared `@masterprompt/ui` package using Tailwind CSS v4.
- **State Management**: URL-based state and TanStack Query for data fetching.
- **Icons**: Lucide React for consistent, scalable iconography.
- **Accessibility**: Semantic HTML and Radix UI primitives for inclusive design.

## 🚀 Getting Started

This app is part of the PromptMaster monorepo.

1. Navigate to the web application directory:

   ```bash
   cd apps/web
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:3000`.

## 📦 Navigation Shortcuts

- `Cmd/Ctrl + K`: Open search popup
- `Click Category Card`: View all prompts in a topic
- `Click Prompt Card`: Navigate to full prompt details
