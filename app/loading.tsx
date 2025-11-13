export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Milk Bottle */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-gray-800 border-t-white rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold">Loading</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
