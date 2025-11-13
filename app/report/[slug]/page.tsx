import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { getAllSlugs, getReportBySlug, getAllReports } from '@/lib/markdown';
import MarkdownContent from '@/components/MarkdownContent';
import BookmarkButton from '@/components/BookmarkButton';
import ShareButtons from '@/components/ShareButtons';
import TableOfContents from '@/components/TableOfContents';
import { generateReportStructuredData } from '@/lib/seo';
import { getRelatedReports } from '@/lib/relatedReports';

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

  const excerpt = report.content.substring(0, 160).replace(/[#*\[\]]/g, '');

  return {
    title: report.title,
    description: excerpt,
    keywords: report.categories?.join(', '),
    openGraph: {
      title: report.title,
      description: excerpt,
      type: 'article',
      publishedTime: report.date || undefined,
      tags: report.categories,
    },
    twitter: {
      card: 'summary_large_image',
      title: report.title,
      description: excerpt,
    },
  };
}

export default function ReportPage({ params }: { params: { slug: string } }) {
  const report = getReportBySlug(decodeURIComponent(params.slug));
  const allReports = getAllReports();

  if (!report) {
    notFound();
  }

  const relatedReports = getRelatedReports(report, allReports, 3);
  const structuredData = generateReportStructuredData(report);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/archive"
            className="inline-flex items-center font-bold text-black hover:bg-yellow-400 px-4 py-2 border-2 border-black transition-colors brutal-shadow-hover"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            BACK TO ARCHIVE
          </Link>
        </div>
      </header>

      {/* Report Header */}
      <section className="border-b-4 border-black bg-gradient-to-r from-yellow-200 to-blue-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-5xl">
            {/* Categories */}
            {report.categories && report.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {report.categories.map(cat => (
                  <span
                    key={cat}
                    className="text-sm font-bold px-3 py-1 bg-blue-400 border-2 border-black"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap gap-3 mb-6">
              {report.date && (
                <div className="inline-block bg-black text-white px-4 py-2 font-bold">
                  📅 {report.date}
                </div>
              )}
              {report.readingTime && (
                <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-bold border-2 border-black">
                  ⏱️ {report.readingTime} min read
                </div>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              {report.title}
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <BookmarkButton slug={report.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Table of Contents - Desktop */}
          {report.toc && report.toc.length > 0 && (
            <aside className="hidden lg:block flex-shrink-0">
              <TableOfContents toc={report.toc} />
            </aside>
          )}

          {/* Article Content */}
          <article className="flex-1 max-w-5xl">
            <div className="bg-white border-4 border-black p-8 md:p-12 brutal-shadow-lg">
              <MarkdownContent content={report.content} />
            </div>

            {/* Share Section */}
            <div className="mt-8 p-6 border-4 border-black bg-yellow-100 brutal-shadow">
              <h3 className="text-xl font-bold mb-4">📤 SHARE THIS REPORT</h3>
              <ShareButtons title={report.title} slug={report.slug} />
            </div>
          </article>
        </div>
      </main>

      {/* Related Reports */}
      {relatedReports.length > 0 && (
        <section className="border-t-4 border-black bg-blue-100 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-black mb-8 border-b-4 border-black inline-block pb-2">
              📚 RELATED REPORTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedReports.map(related => (
                <Link
                  key={related.slug}
                  href={`/report/${encodeURIComponent(related.slug)}`}
                  className="retro-card"
                >
                  {related.categories && related.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {related.categories.slice(0, 2).map(cat => (
                        <span
                          key={cat}
                          className="text-xs font-bold px-2 py-1 bg-blue-200 border-2 border-black"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">
                    {related.title}
                  </h3>
                  {related.readingTime && (
                    <div className="text-sm font-bold text-gray-700">
                      ⏱️ {related.readingTime} min
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="border-t-4 border-black bg-yellow-100 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link
              href="/archive"
              className="retro-button w-full md:w-auto text-center"
            >
              ← View All Reports
            </Link>
            <Link
              href="/"
              className="retro-button-blue w-full md:w-auto text-center"
            >
              🏠 Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-black">
              🥛 MILK ROAD PRO
            </div>
            <div className="flex gap-6">
              <Link href="/" className="text-black font-bold hover:underline">
                Home
              </Link>
              <Link href="/archive" className="text-black font-bold hover:underline">
                Archive
              </Link>
              <Link href="/intent" className="text-black font-bold hover:underline">
                Intent
              </Link>
              <Link href="/contact" className="text-black font-bold hover:underline">
                Contact
              </Link>
              <Link href="/rss.xml" className="text-black font-bold hover:underline">
                RSS
              </Link>
            </div>
            <div className="text-black font-medium">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </footer>

      {/* Structured Data */}
      <Script
        id="report-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </div>
  );
}
