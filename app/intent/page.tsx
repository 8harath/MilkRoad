import Link from 'next/link';

export const metadata = {
  title: 'Intent | Milk Road Pro Reports',
  description: 'Why this site exists and our mission',
};

export default function IntentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b-4 border-black bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <h1 className="text-4xl md:text-7xl font-bold text-black mb-3 md:mb-4 leading-tight">
            Why This Exists
          </h1>
          <p className="text-lg md:text-xl text-black font-medium">
            Our mission and intent
          </p>
        </div>
      </section>

      {/* Intent Content */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="border-4 border-black p-6 md:p-12 bg-white brutal-shadow-lg mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6 border-b-4 border-black pb-2">
            Our Mission
          </h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-900">
            <p>
              This website exists to provide access to Milk Road Pro reports for people who are not capable enough to pay for a subscription.
            </p>
            <p className="font-bold text-black bg-yellow-200 p-4 border-2 border-black">
              I believe information should be free for all.
            </p>
            <p>
              These reports contain valuable crypto research, tokenomics analysis, and market insights that can help people make informed decisions. Not everyone can afford premium subscriptions, but everyone deserves access to quality information.
            </p>
          </div>
        </div>

        <div className="border-4 border-black p-6 md:p-12 bg-white brutal-shadow-lg mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6 border-b-4 border-black pb-2">
            Important Notes
          </h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-900">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">📅 Cut-off Date</h3>
              <p>
                I have a cut-off date for these reports. I don't have access to reports published after a certain point.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">🤝 Help Us Grow</h3>
              <p>
                If you are a current Milk Road Pro member and would like to contribute newer reports to this archive, please reach out! I'll be happy to:
              </p>
              <ul className="list-disc ml-6 mt-2 md:mt-3 space-y-2">
                <li>Post the content here for the community</li>
                <li>Give you full credit and recognition</li>
                <li>Include a shout-out if you'd like</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">⚖️ Legal Notice</h3>
              <p>
                If you find any problem with this website or have concerns about the content shared here, please reach out to me. I'm happy to discuss and take it down if needed.
              </p>
              <p className="mt-3">
                This project is built with respect for the original creators and is intended solely for educational purposes and accessibility.
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-black p-6 md:p-12 bg-blue-100 brutal-shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6 border-b-4 border-black pb-2">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-gray-900 mb-4 md:mb-6">
            For any questions, concerns, or contributions:
          </p>
          <div className="bg-white border-4 border-black p-4 md:p-6">
            <div className="flex items-center gap-3">
              <span className="text-xl md:text-2xl">📧</span>
              <div>
                <p className="text-xs md:text-sm font-bold text-gray-600 mb-1">EMAIL</p>
                <a
                  href="mailto:8harrath.k@gmail.com"
                  className="text-base md:text-xl font-bold text-black underline hover:text-gray-700 break-all"
                >
                  8harrath.k@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-8">
            <Link
              href="/archive"
              className="retro-button inline-block text-sm md:text-base"
            >
              Browse All Reports →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-8 md:py-12 mt-8 md:mt-12">
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
