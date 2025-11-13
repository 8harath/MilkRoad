import Link from 'next/link';
import { getAllReports } from '@/lib/markdown';
import ArchiveClient from '@/components/ArchiveClient';

export const metadata = {
  title: 'Archive | Milk Road Pro Reports',
  description: 'Browse all our crypto research reports',
};

export default function ArchivePage() {
  const reports = getAllReports();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b-4 border-black bg-blue-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <h1 className="text-4xl md:text-7xl font-bold text-black mb-3 md:mb-4 leading-tight">
            Report Archive
          </h1>
          <p className="text-lg md:text-xl text-black font-medium">
            {reports.length} reports. Search, filter, and dive deep into crypto research.
          </p>
        </div>
      </section>

      {/* Client-side filtering and display */}
      <ArchiveClient reports={reports} />

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="text-xl md:text-2xl font-bold text-black">
              🥛 MILK ROAD PRO
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/" className="text-black font-bold hover:underline text-sm md:text-base">
                Home
              </Link>
              <Link href="/archive" className="text-black font-bold hover:underline text-sm md:text-base">
                Archive
              </Link>
              <Link href="/intent" className="text-black font-bold hover:underline text-sm md:text-base">
                Intent
              </Link>
              <Link href="/contact" className="text-black font-bold hover:underline text-sm md:text-base">
                Contact
              </Link>
            </div>
            <div className="text-black font-medium text-sm md:text-base text-center">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
