import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllSlugs, getReportBySlug } from '@/lib/markdown';
import MarkdownContent from '@/components/MarkdownContent';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const report = getReportBySlug(decodeURIComponent(params.slug));

  if (!report) {
    return {
      title: 'Report Not Found',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://milkroad-reports.vercel.app";
  const reportUrl = `${siteUrl}/report/${encodeURIComponent(params.slug)}`;

  // Extract first paragraph as description
  const description = report.content.split('\n\n')[0].slice(0, 160) || report.title;

  return {
    title: report.title,
    description,
    openGraph: {
      type: 'article',
      url: reportUrl,
      title: report.title,
      description,
      siteName: 'Milk Road Pro Reports',
      images: [
        {
          url: `${siteUrl}/icon.svg`,
          width: 512,
          height: 512,
          alt: report.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: report.title,
      description,
      images: [`${siteUrl}/icon.svg`],
    },
    alternates: {
      canonical: reportUrl,
    },
  };
}

export default function ReportPage({ params }: { params: { slug: string } }) {
  const report = getReportBySlug(decodeURIComponent(params.slug));

  if (!report) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://milkroad-reports.vercel.app";
  const reportUrl = `${siteUrl}/report/${encodeURIComponent(params.slug)}`;

  return (
    <div className="min-h-screen bg-black">
      {/* Structured Data for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: report.title,
            url: reportUrl,
            publisher: {
              "@type": "Organization",
              name: "Milk Road",
              logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/icon.svg`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": reportUrl,
            },
          }),
        }}
      />

      {/* Header */}
      <header className="border-b border-gray-800">
        <nav className="max-w-4xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            aria-label="Back to all reports"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all reports
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article>
          <MarkdownContent content={report.content} />
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Back to all reports
            </Link>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Milk Road
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
