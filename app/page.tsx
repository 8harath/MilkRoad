import Link from 'next/link';
import { getAllReports } from '@/lib/markdown';

export default function Home() {
  const reports = getAllReports();
  const latestReports = reports.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b-4 border-black bg-yellow-400">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 animate-slide-in">
              Pro Crypto Reports
            </h1>
            <p className="text-xl md:text-2xl text-black mb-8 font-medium">
              Deep dives, tokenomics analysis, and market insights that actually matter.
              No BS, just research.
            </p>
            <Link
              href="/archive"
              className="retro-button inline-block animate-pop"
            >
              Explore All Reports →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Reports */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 border-b-4 border-black inline-block pb-2">
            Latest Reports
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Fresh insights from the bleeding edge of crypto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {latestReports.map((report, index) => (
            <Link
              key={report.slug}
              href={`/report/${encodeURIComponent(report.slug)}`}
              className="retro-card animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {report.date && (
                  <div className="inline-block bg-black text-white px-3 py-1 text-sm font-bold">
                    {report.date}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
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

        <div className="text-center">
          <Link href="/archive" className="retro-button-pink inline-block">
            View All {reports.length} Reports
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t-4 border-black bg-blue-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                {reports.length}+
              </div>
              <div className="text-xl font-bold text-black">
                PRO REPORTS
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                🔥
              </div>
              <div className="text-xl font-bold text-black">
                FIRE ANALYSIS
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                💎
              </div>
              <div className="text-xl font-bold text-black">
                GEM HUNTING
              </div>
            </div>
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
