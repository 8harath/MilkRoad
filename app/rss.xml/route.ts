import { getAllReports } from '@/lib/markdown';

export async function GET() {
  const reports = getAllReports();
  const baseUrl = 'https://milkroadpro.com';

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Milk Road Pro Reports</title>
    <link>${baseUrl}</link>
    <description>126+ free professional crypto research reports</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${reports
      .slice(0, 50) // Latest 50 reports
      .map((report) => {
        const pubDate = report.dateObj || new Date();
        const excerpt = report.content.substring(0, 300).replace(/[#*\[\]]/g, '');

        return `
    <item>
      <title><![CDATA[${report.title}]]></title>
      <link>${baseUrl}/report/${encodeURIComponent(report.slug)}</link>
      <guid>${baseUrl}/report/${encodeURIComponent(report.slug)}</guid>
      <pubDate>${pubDate.toUTCString()}</pubDate>
      <description><![CDATA[${excerpt}...]]></description>
      ${report.categories?.map(cat => `<category>${cat}</category>`).join('\n      ') || ''}
    </item>`;
      })
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
