import Link from 'next/link';

export const metadata = {
  title: 'Contact | Milk Road Pro Reports',
  description: 'Get in touch with Milk Road',
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
            Questions? Feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact Info */}
          <div className="border-4 border-black p-8 bg-yellow-100 brutal-shadow">
            <h2 className="text-3xl font-bold text-black mb-6">
              Connect With Us
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  📧 Email
                </h3>
                <a
                  href="mailto:hello@milkroad.com"
                  className="text-black font-medium underline hover:text-gray-700"
                >
                  hello@milkroad.com
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  🐦 Twitter
                </h3>
                <a
                  href="https://twitter.com/milkroadpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium underline hover:text-gray-700"
                >
                  @milkroadpro
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  💬 Discord
                </h3>
                <a
                  href="https://discord.gg/milkroad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium underline hover:text-gray-700"
                >
                  Join our community
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-4 border-black p-8 bg-pink-100 brutal-shadow">
            <h2 className="text-3xl font-bold text-black mb-6">
              Quick Links
            </h2>
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-lg font-bold text-black hover:bg-yellow-400 p-3 border-2 border-black transition-colors"
              >
                → Home
              </Link>
              <Link
                href="/archive"
                className="block text-lg font-bold text-black hover:bg-pink-400 p-3 border-2 border-black transition-colors"
              >
                → Full Archive
              </Link>
              <a
                href="https://themilkroad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-bold text-black hover:bg-blue-400 p-3 border-2 border-black transition-colors"
              >
                → Main Website
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="border-4 border-black p-8 bg-white brutal-shadow-lg">
          <h2 className="text-3xl font-bold text-black mb-4 border-b-4 border-black pb-2">
            About Milk Road PRO
          </h2>
          <p className="text-lg text-gray-900 mb-4">
            We deliver professional crypto research reports that cut through the noise.
            Our team analyzes tokenomics, market trends, and emerging projects to help
            you make informed decisions.
          </p>
          <p className="text-lg text-gray-900 mb-4">
            No hype. No fluff. Just deep, actionable insights.
          </p>
          <div className="mt-8">
            <Link
              href="/archive"
              className="retro-button inline-block"
            >
              Explore Our Reports
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
