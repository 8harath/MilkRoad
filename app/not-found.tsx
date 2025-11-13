import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Animated 404 */}
        <div className="mb-8 animate-pop">
          <h1 className="text-9xl md:text-[12rem] font-bold text-black border-8 border-black p-8 brutal-shadow-lg inline-block bg-yellow-400">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="border-4 border-black bg-white p-8 md:p-12 brutal-shadow-lg mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Report Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Looks like this page got lost in the crypto void. Maybe it's been rug pulled? 🥛
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="retro-button inline-block"
            >
              🏠 GO HOME
            </Link>
            <Link
              href="/archive"
              className="retro-button-blue inline-block"
            >
              📚 VIEW ARCHIVE
            </Link>
          </div>
        </div>

        {/* Fun message */}
        <div className="text-sm text-gray-600 font-medium">
          <p>Pro tip: Use the search in the archive to find what you're looking for!</p>
        </div>
      </div>
    </div>
  );
}
