# Milk Road Pro Reports 🥛

A neo-brutalism style website showcasing 127+ professional crypto research reports from Milk Road.

![Neo-Brutalism Design](https://img.shields.io/badge/Design-Neo--Brutalism-FF69B4?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

- **127+ Professional Reports** - Each report is accessible as its own dedicated page with proper date sorting
- **Neo-Brutalism Design** - Bold, retro aesthetic with:
  - White background with black text
  - Thick black borders and brutal shadows
  - Bright accent colors (yellow, pink, blue)
  - Retro animated buttons with hover effects
  - Space Grotesk typography
- **Responsive Layout** - Works beautifully on all devices
- **Full Navigation** - Home, Archive, and Contact pages
- **Date-Sorted Reports** - Reports are automatically sorted by publish date
- **Full Markdown Support** - Proper rendering of:
  - Links (external links open in new tabs)
  - Images with brutalist borders and shadows
  - Code blocks with yellow highlights
  - Blockquotes with blue backgrounds
  - Tables with bold styling
  - And more!
- **Static Site Generation** - Fast loading times and excellent SEO
- **Clean Content** - Automatically removes broken links and formatting issues

## 🎨 Design Philosophy

The website embraces **neo-brutalism** principles:
- Raw, bold aesthetics with no subtle gradients
- Heavy use of borders and drop shadows
- High contrast color palette
- Playful animations and interactions
- Retro, nostalgic feel
- Asymmetric but intentional layouts

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling with custom brutalist utilities
- **React Markdown** - Markdown rendering with GitHub Flavored Markdown support
- **Gray Matter** - Front matter parsing

## 🛠️ Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage with latest reports
│   ├── globals.css         # Global styles & neo-brutalism utilities
│   ├── archive/            # Archive page with all reports
│   ├── contact/            # Contact page
│   └── report/[slug]/      # Dynamic report pages
├── components/
│   └── MarkdownContent.tsx # Client component for markdown rendering
├── lib/
│   ├── markdown.ts         # Utilities for reading markdown files
│   └── cleanMarkdown.ts    # Content cleaning utilities
└── newsletters/            # All markdown report files (127+)
```

## 🎯 Key Features Explained

### Neo-Brutalism Styling
Custom Tailwind utilities for the brutal aesthetic:
- `.brutal-shadow` - Solid black drop shadows
- `.brutal-shadow-hover` - Interactive shadow effects
- `.retro-card` - Brutalist card components
- `.retro-button` - Animated retro buttons in multiple colors

### Date Extraction & Sorting
Reports are automatically sorted by their publication date, extracted from the markdown content. Latest reports appear first on the homepage and archive.

### Content Cleaning
Broken social media links and formatting issues are automatically cleaned from the markdown before rendering.

## 🌈 Color Palette

- **Background**: Pure White (#ffffff)
- **Text**: Pure Black (#000000)
- **Accent Yellow**: #ffeb3b
- **Accent Pink**: #ff69b4
- **Accent Blue**: #00bfff
- **Borders**: Black (#000000)

## 📄 License

© 2025 Milk Road. All rights reserved.
