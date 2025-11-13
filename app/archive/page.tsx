import Link from 'next/link';
import { getAllReports } from '@/lib/markdown';

export const metadata = {
  title: 'Archive | Milk Road Pro Reports',
  description: 'Browse all our crypto research reports',
};

export default function ArchivePage() {
  const reports = getAllReports();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b-4 border-black bg-pink-400">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
            Report Archive
          </h1>
          <p className="text-xl text-black font-medium">
            {reports.length} reports and counting. Dive deep into crypto research.
          </p>
        </div>
      </section>

      {/* All Reports */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <Link
              key={report.slug}
              href={`/report/${encodeURIComponent(report.slug)}`}
              className="retro-card"
            >
              <div className="mb-4">
                {report.date && (
                  <div className="inline-block bg-black text-white px-3 py-1 text-sm font-bold">
                    {report.date}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-black mb-3 line-clamp-3">
                {report.title}
              </h3>
              <div className="mt-4 flex items-center text-sm font-bold text-black">
                READ MORE
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
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
