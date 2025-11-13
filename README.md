# 🥛 Milk Road Pro Reports

> A production-ready, SEO-optimized platform showcasing 127+ professional crypto research reports from Milk Road.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)

## ✨ Features

### Content & Design
- **127+ Professional Reports** - Comprehensive crypto research accessible as dedicated pages
- **Neo-Modern Design** - Minimal black & white aesthetic with clean typography
- **Responsive Layout** - Optimized for all devices (mobile, tablet, desktop)
- **Full Markdown Support** - GitHub Flavored Markdown with tables, links, images, and code blocks

### Performance & SEO
- **Static Site Generation (SSG)** - Lightning-fast loading times
- **SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards
- **Structured Data** - JSON-LD schema markup for better search engine visibility
- **Dynamic Sitemap** - Auto-generated XML sitemap for all reports
- **robots.txt** - Proper crawler configuration

### User Experience
- **Loading Animations** - Smooth skeleton screens and loading states
- **Custom Favicon** - SVG-based favicon and app icons
- **PWA Ready** - Web app manifest for installability
- **Optimized Images** - Lazy loading and proper caching
- **Accessibility** - Semantic HTML and ARIA labels

### Security & Best Practices
- **Security Headers** - XSS protection, content security, frame options
- **Type Safety** - Full TypeScript coverage
- **Cache Control** - Optimized static asset caching
- **Environment Variables** - Secure configuration management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/8harath/MilkRoad.git
cd MilkRoad
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and update `NEXT_PUBLIC_SITE_URL` with your deployment URL:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Test Production Build Locally

```bash
npm start
```

### Deploy to Vercel

#### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/8harath/MilkRoad)

#### Option 2: Vercel CLI

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Set Environment Variables in Vercel Dashboard**
   - Go to your project settings
   - Add `NEXT_PUBLIC_SITE_URL` with your production URL

#### Option 3: GitHub Integration

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel will automatically detect Next.js and deploy
4. Set environment variables in project settings

### Post-Deployment

After deployment:
1. Update `NEXT_PUBLIC_SITE_URL` in Vercel environment variables
2. Redeploy to apply changes
3. Verify sitemap at `https://your-domain.vercel.app/sitemap.xml`
4. Check robots.txt at `https://your-domain.vercel.app/robots.txt`

## 🏗️ Project Structure

```
MilkRoad/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Homepage with report grid
│   ├── loading.tsx             # Loading state for homepage
│   ├── globals.css             # Global styles & markdown styling
│   ├── sitemap.ts              # Dynamic sitemap generator
│   ├── manifest.json           # PWA manifest
│   └── report/[slug]/
│       ├── page.tsx            # Dynamic report page
│       ├── loading.tsx         # Report loading skeleton
│       └── not-found.tsx       # 404 page for reports
├── components/
│   └── MarkdownContent.tsx     # Client-side markdown renderer
├── lib/
│   └── markdown.ts             # Markdown utilities & parsing
├── newsletters/                # 127+ markdown report files
├── public/
│   ├── favicon.svg             # SVG favicon
│   ├── icon.svg                # High-res app icon
│   └── robots.txt              # Crawler instructions
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript configuration
├── vercel.json                 # Vercel deployment config
└── .env.example                # Environment variables template
```

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | React framework with SSG | 14.2+ |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development | 5+ |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling | 3.4+ |
| [React Markdown](https://github.com/remarkjs/react-markdown) | Markdown rendering | 9.0+ |
| [remark-gfm](https://github.com/remarkjs/remark-gfm) | GitHub Flavored Markdown | 4.0+ |
| [gray-matter](https://github.com/jonschlinkert/gray-matter) | Frontmatter parsing | 4.0+ |

## 📊 SEO Features

### Meta Tags
- Title templates for consistent branding
- Dynamic descriptions per page
- Keywords optimization
- Author and publisher information

### Social Media
- **Open Graph** - Optimized for Facebook, LinkedIn
- **Twitter Cards** - Rich previews for Twitter/X
- Custom social images

### Search Engines
- **Sitemap.xml** - Auto-generated from all reports
- **robots.txt** - Proper crawler directives
- **Canonical URLs** - Prevent duplicate content
- **Structured Data** - JSON-LD schema markup

### Performance
- Static generation for all pages
- Optimized images with lazy loading
- Font optimization with Google Fonts
- Efficient caching strategies

## 🎨 Customization

### Branding
Update colors in `tailwind.config.ts` and `app/globals.css`:
```css
:root {
  --background: #000000;
  --foreground: #ffffff;
}
```

### Favicon
Replace `/public/favicon.svg` and `/public/icon.svg` with your own.

### Metadata
Edit SEO information in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  // ...
};
```

## 📝 Adding New Reports

1. Add a markdown file to `/newsletters/` directory
2. Use `.md` extension
3. The filename becomes the URL slug
4. Next.js will automatically generate a new page
5. The sitemap updates automatically

Example: `newsletters/new-report.md` → `/report/new-report`

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Working
- Make sure `.env` file exists in root directory
- Restart dev server after changing `.env`
- For Vercel, set variables in dashboard and redeploy

### Sitemap Not Updating
- Sitemap is generated at build time
- Rebuild the project to update
- Check `/app/sitemap.ts` for configuration

## 📄 License

© 2025 Milk Road. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

For questions or issues, please open an issue on [GitHub](https://github.com/8harath/MilkRoad/issues).
