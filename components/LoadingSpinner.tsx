'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        {/* Milk bottle animation */}
        <div className="relative inline-block">
          <div className="text-8xl animate-bounce">🥛</div>
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-4 h-4 bg-black border-2 border-black brutal-shadow-sm animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="w-4 h-4 bg-black border-2 border-black brutal-shadow-sm animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-4 bg-black border-2 border-black brutal-shadow-sm animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        <p className="mt-6 text-xl font-bold text-black">Loading Reports...</p>
      </div>
    </div>
  );
}
