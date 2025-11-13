'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Report } from '@/lib/markdown';

interface ArchiveClientProps {
  reports: Report[];
}

export default function ArchiveClient({ reports }: ArchiveClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  const filteredAndSortedReports = useMemo(() => {
    let filtered = reports;

    // Filter by search term
    if (searchTerm) {
      filtered = reports.filter(report =>
        report.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortBy === 'title') {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    // Default is already sorted by date from getAllReports()
    return filtered;
  }, [reports, searchTerm, sortBy]);

  return (
    <>
      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-6 py-8 border-b-4 border-black bg-yellow-100">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border-4 border-black font-bold text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
            />
          </div>

          {/* Sort */}
          <div className="flex gap-2">
            <button
              onClick={() => setSortBy('date')}
              className={`px-4 py-3 border-4 border-black font-bold transition-all ${
                sortBy === 'date'
                  ? 'bg-yellow-400 brutal-shadow'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              📅 BY DATE
            </button>
            <button
              onClick={() => setSortBy('title')}
              className={`px-4 py-3 border-4 border-black font-bold transition-all ${
                sortBy === 'title'
                  ? 'bg-yellow-400 brutal-shadow'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              🔤 BY TITLE
            </button>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-center">
          <p className="text-lg font-bold text-black">
            {filteredAndSortedReports.length} {filteredAndSortedReports.length === 1 ? 'Report' : 'Reports'} Found
          </p>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {filteredAndSortedReports.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-black mb-4">No reports found</h3>
            <p className="text-lg text-gray-700 mb-8">
              Try adjusting your search term
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="retro-button"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedReports.map((report) => (
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
        )}
      </section>
    </>
  );
}
