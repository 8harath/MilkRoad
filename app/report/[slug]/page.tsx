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

  return {
    title: `${report.title} | Milk Road`,
    description: report.title,
  };
}

export default function ReportPage({ params }: { params: { slug: string } }) {
  const report = getReportBySlug(decodeURIComponent(params.slug));

  if (!report) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <MarkdownContent content={report.content} />
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
