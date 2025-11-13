export default function Loading() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Skeleton */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="h-6 w-32 bg-gray-800 rounded animate-pulse"></div>
        </div>
      </header>

      {/* Content Skeleton */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {/* Title Skeleton */}
          <div className="h-12 w-3/4 bg-gray-800 rounded animate-pulse"></div>

          {/* Paragraph Skeletons */}
          <div className="space-y-3 pt-8">
            <div className="h-4 w-full bg-gray-800 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-800 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-800 rounded animate-pulse"></div>
          </div>

          <div className="space-y-3 pt-6">
            <div className="h-4 w-full bg-gray-800 rounded animate-pulse"></div>
            <div className="h-4 w-4/5 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-800 rounded animate-pulse"></div>
          </div>

          {/* Loading Indicator */}
          <div className="flex items-center justify-center pt-12">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 border-4 border-gray-800 border-t-white rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
