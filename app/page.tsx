import Link from 'next/link';
import { getAllReports } from '@/lib/markdown';

export default function Home() {
  const reports = getAllReports();

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Milk Road
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Pro Reports Collection
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            All Reports
          </h2>
          <p className="text-gray-400">
            {reports.length} professional crypto research reports
          </p>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report) => (
            <Link
              key={report.slug}
              href={`/report/${encodeURIComponent(report.slug)}`}
              className="group block p-6 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors line-clamp-2">
                {report.title}
              </h3>
              <div className="mt-3 flex items-center text-sm text-gray-500">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Read report
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Milk Road. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
