<p align="center">
  <img src="assets/logo.png" alt="PromptMaster Logo" width="120">
</p>

# PromptMaster

PromptMaster is a premium collection of production-ready AI prompts designed to help you master every domain—from complex coding refactors to high-converting marketing copy. Built as a high-performance monorepo, it serves as a central hub for discoverable, reusable, and professional AI templates.

## ⚙️ Project Links

- ⚙️ Resource → https://github.com/e89wrhi/prompt-master

## 🌟 Features

- **Categorized Library**: Explore prompts across Coding, Creative, Education, Marketing, Productivity, and more.
- **Instant Copy & View**: One-click template copying and detailed example views for every prompt.
- **Deep Linking**: Share specific prompts or topics directly with URL-based state.
- **Premium UI**: Built with a neutral, minimal design system supporting seamless Dark Mode.
- **Modern Tech Stack**: Powered by Next.js 15, React 19, Tailwind CSS v4, and Lucide Icons.

## 🏗️ Architecture

This repository is structured as a monorepo using [Turborepo](https://turbo.build/):

### Applications

- **`apps/web`**: The main user-facing library where users browse topics and prompts.

### Shared Packages

- **`packages/ui`**: Shared UI component library (Neutral-themed).
- **`packages/lib`**: Shared utilities and type definitions.
- **`packages/typescript-config`**: Shared TypeScript configurations.

## 📸 Screenshots

<p align="center">
  <img src="assets/ss/ss1.png" width="45%" border="1" />
  <img src="assets/ss/ss2.png" width="45%" border="1" />
</p>

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) 10+

### Installation

1. Clone the repository and navigate into it:

   ```bash
   git clone <repository-url>
   cd prompt-library-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development servers for all applications:

```bash
npm run dev
```

The web application runs on port `3000`.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Tooling**: [Turborepo](https://turbo.build/), ESLint, Prettier
