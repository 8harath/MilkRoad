import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/markdown';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://milkroad-reports.vercel.app';
  const slugs = getAllSlugs();

  const reportUrls = slugs.map((slug) => ({
    url: `${siteUrl}/report/${encodeURIComponent(slug)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...reportUrls,
  ];
}
