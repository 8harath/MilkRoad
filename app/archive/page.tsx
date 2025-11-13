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
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
            Report Archive
          </h1>
          <p className="text-xl text-black font-medium">
            {reports.length} reports. Search, filter, and dive deep into crypto research.
          </p>
        </div>
      </section>

      {/* Client-side filtering and display */}
      <ArchiveClient reports={reports} />

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
