import Link from 'next/link';

export const metadata = {
  title: 'Contact | Milk Road Pro Reports',
  description: 'Get in touch',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b-4 border-black bg-blue-400">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-black font-medium">
            Questions? Feedback? Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-4 border-black p-8 md:p-12 bg-yellow-100 brutal-shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-black mb-6">
            📧 Email Me
          </h2>
          <div className="bg-white border-4 border-black p-6">
            <a
              href="mailto:8harrath.k@gmail.com"
              className="text-2xl md:text-3xl font-bold text-black underline hover:text-gray-700 break-all"
            >
              8harrath.k@gmail.com
            </a>
          </div>
          <p className="text-lg text-gray-900 mt-6">
            Feel free to reach out for any questions, concerns, feedback, or if you'd like to contribute reports to the archive.
          </p>
        </div>

        <div className="border-4 border-black p-8 md:p-12 bg-blue-100 brutal-shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-6 border-b-4 border-black pb-2">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/"
              className="block text-lg font-bold text-black hover:bg-yellow-400 p-4 border-2 border-black transition-colors text-center"
            >
              → Home
            </Link>
            <Link
              href="/archive"
              className="block text-lg font-bold text-black hover:bg-yellow-400 p-4 border-2 border-black transition-colors text-center"
            >
              → Full Archive
            </Link>
            <Link
              href="/intent"
              className="block text-lg font-bold text-black hover:bg-yellow-400 p-4 border-2 border-black transition-colors text-center"
            >
              → Our Intent
            </Link>
            <a
              href="https://themilkroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg font-bold text-black hover:bg-blue-400 p-4 border-2 border-black transition-colors text-center"
            >
              → Official Site
            </a>
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
