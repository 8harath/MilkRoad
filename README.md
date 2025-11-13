# Milk Road Pro Reports

A neo-modern website showcasing professional crypto research reports from Milk Road.

## Features

- **127 Professional Reports** - Each report is accessible as its own dedicated page
- **Neo-Modern Design** - Minimal, black and white aesthetic with clean typography
- **Responsive Layout** - Works beautifully on all devices
- **Full Markdown Support** - Proper rendering of links, images, headings, and formatted content
- **Static Site Generation** - Fast loading times and excellent SEO

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **React Markdown** - Markdown rendering with GitHub Flavored Markdown support

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with global styles
│   ├── page.tsx            # Homepage with report list
│   ├── globals.css         # Global styles and markdown styling
│   └── report/[slug]/      # Dynamic report pages
├── components/
│   └── MarkdownContent.tsx # Client component for markdown rendering
├── lib/
│   └── markdown.ts         # Utilities for reading markdown files
└── newsletters/            # All markdown report files
```

## License

© 2025 Milk Road. All rights reserved.
