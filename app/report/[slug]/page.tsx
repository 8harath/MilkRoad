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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6">
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
        <div className="max-w-5xl mx-auto px-6 py-12">
          {report.date && (
            <div className="inline-block bg-black text-white px-4 py-2 font-bold mb-6">
              📅 {report.date}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            {report.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white border-4 border-black p-8 md:p-12 brutal-shadow-lg">
          <MarkdownContent content={report.content} />
        </div>
      </main>

      {/* Navigation */}
      <section className="border-t-4 border-black bg-blue-100 py-12 mt-12">
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
            </div>
            <div className="text-black font-medium">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
