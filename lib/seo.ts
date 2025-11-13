export function generateReportStructuredData(report: {
  title: string;
  date?: string | null;
  slug: string;
  content: string;
}) {
  const excerpt = report.content.substring(0, 200).replace(/[#*\[\]]/g, '');

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: report.title,
    datePublished: report.date || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Milk Road Pro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Milk Road Pro Reports',
      logo: {
        '@type': 'ImageObject',
        url: 'https://milkroadpro.com/logo.png',
      },
    },
    description: excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://milkroadpro.com/report/${report.slug}`,
    },
  };
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Milk Road Pro Reports',
    description: '126+ free professional crypto research reports',
    url: 'https://milkroadpro.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://milkroadpro.com/archive?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
