export default function SkeletonCard() {
  return (
    <div className="border-4 border-black bg-white p-6 brutal-shadow animate-pulse">
      {/* Category badges skeleton */}
      <div className="flex gap-2 mb-3">
        <div className="h-6 w-16 bg-gray-200 border-2 border-black"></div>
        <div className="h-6 w-20 bg-gray-200 border-2 border-black"></div>
      </div>

      {/* Date and reading time skeleton */}
      <div className="mb-4 flex gap-2">
        <div className="h-7 w-28 bg-gray-300 border-2 border-black"></div>
        <div className="h-7 w-20 bg-gray-200 border-2 border-black"></div>
      </div>

      {/* Title skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-6 bg-gray-300 border-2 border-black"></div>
        <div className="h-6 bg-gray-300 border-2 border-black w-4/5"></div>
      </div>

      {/* Read more skeleton */}
      <div className="h-5 w-24 bg-gray-200 border-2 border-black"></div>
    </div>
  );
}
