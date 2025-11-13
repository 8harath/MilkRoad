import { getAllReports } from '@/lib/markdown';

export default function sitemap() {
  const reports = getAllReports();
  const baseUrl = 'https://milkroadpro.com'; // Update with your actual domain

  const reportUrls = reports.map((report) => ({
    url: `${baseUrl}/report/${encodeURIComponent(report.slug)}`,
    lastModified: report.dateObj || new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/archive`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/intent`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    ...reportUrls,
  ];
}
