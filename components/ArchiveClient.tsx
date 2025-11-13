'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Report } from '@/lib/markdown';
import { getAllCategories } from '@/lib/categories';

interface ArchiveClientProps {
  reports: Report[];
}

export default function ArchiveClient({ reports }: ArchiveClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'readingTime'>('date');
  const [searchMode, setSearchMode] = useState<'title' | 'content'>('title');

  const allCategories = useMemo(() => getAllCategories(reports), [reports]);

  const filteredAndSortedReports = useMemo(() => {
    let filtered = reports;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(report =>
        report.categories?.includes(selectedCategory)
      );
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(report => {
        if (searchMode === 'title') {
          return report.title.toLowerCase().includes(searchLower);
        } else {
          // Full-text search
          return (
            report.title.toLowerCase().includes(searchLower) ||
            report.content.toLowerCase().includes(searchLower)
          );
        }
      });
    }

    // Sort
    const sorted = [...filtered];
    if (sortBy === 'title') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'readingTime') {
      sorted.sort((a, b) => (a.readingTime || 0) - (b.readingTime || 0));
    }
    // Default 'date' is already sorted from getAllReports()

    return sorted;
  }, [reports, searchTerm, selectedCategory, sortBy, searchMode]);

  return (
    <>
      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 border-b-4 border-black bg-yellow-100">
        {/* Search */}
        <div className="mb-4">
          <div className="flex gap-2 mb-2">
            <button
              onClick={() => setSearchMode('title')}
              className={`px-3 py-2 border-2 border-black font-bold text-xs md:text-sm transition-all flex-1 md:flex-none ${
                searchMode === 'title'
                  ? 'bg-yellow-400'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              TITLE ONLY
            </button>
            <button
              onClick={() => setSearchMode('content')}
              className={`px-3 py-2 border-2 border-black font-bold text-xs md:text-sm transition-all flex-1 md:flex-none ${
                searchMode === 'content'
                  ? 'bg-yellow-400'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              FULL TEXT
            </button>
          </div>
          <input
            type="text"
            placeholder={searchMode === 'title' ? "Search by title..." : "Search entire content..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 md:px-4 py-2 md:py-3 border-4 border-black font-bold text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
          />
        </div>

        {/* Categories */}
        {allCategories.length > 0 && (
          <div className="mb-4">
            <label className="block text-xs md:text-sm font-bold mb-2">FILTER BY CATEGORY:</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-2 md:px-3 py-2 border-3 border-black font-bold text-xs md:text-sm transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-blue-400 brutal-shadow'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                ALL ({reports.length})
              </button>
              {allCategories.map(category => {
                const count = reports.filter(r => r.categories?.includes(category)).length;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-2 md:px-3 py-2 border-3 border-black font-bold text-xs md:text-sm transition-all ${
                      selectedCategory === category
                        ? 'bg-blue-400 brutal-shadow'
                        : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Sort Options */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSortBy('date')}
            className={`px-3 md:px-4 py-2 border-4 border-black font-bold text-xs md:text-sm transition-all flex-1 md:flex-none ${
              sortBy === 'date'
                ? 'bg-yellow-400 brutal-shadow'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            📅 NEWEST
          </button>
          <button
            onClick={() => setSortBy('title')}
            className={`px-3 md:px-4 py-2 border-4 border-black font-bold text-xs md:text-sm transition-all flex-1 md:flex-none ${
              sortBy === 'title'
                ? 'bg-yellow-400 brutal-shadow'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            🔤 A-Z
          </button>
          <button
            onClick={() => setSortBy('readingTime')}
            className={`px-3 md:px-4 py-2 border-4 border-black font-bold text-xs md:text-sm transition-all flex-1 md:flex-none ${
              sortBy === 'readingTime'
                ? 'bg-yellow-400 brutal-shadow'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            ⏱️ QUICKEST
          </button>
        </div>

        {/* Results count */}
        <div className="mt-4 text-center">
          <p className="text-base md:text-lg font-bold text-black">
            {filteredAndSortedReports.length} {filteredAndSortedReports.length === 1 ? 'Report' : 'Reports'} Found
          </p>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {filteredAndSortedReports.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-black mb-4">No reports found</h3>
            <p className="text-lg text-gray-700 mb-8">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="retro-button"
            >
              Clear All Filters
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
                {/* Categories */}
                {report.categories && report.categories.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {report.categories.slice(0, 2).map(cat => (
                      <span
                        key={cat}
                        className="text-xs font-bold px-2 py-1 bg-blue-200 border-2 border-black"
                      >
                        {cat}
                      </span>
                    ))}
                    {report.categories.length > 2 && (
                      <span className="text-xs font-bold px-2 py-1 bg-gray-200 border-2 border-black">
                        +{report.categories.length - 2}
                      </span>
                    )}
                  </div>
                )}

                {/* Date and Reading Time */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {report.date && (
                    <div className="inline-block bg-black text-white px-3 py-1 text-sm font-bold">
                      {report.date}
                    </div>
                  )}
                  {report.readingTime && (
                    <div className="inline-block bg-yellow-400 text-black px-3 py-1 text-sm font-bold border-2 border-black">
                      ⏱️ {report.readingTime} min
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
