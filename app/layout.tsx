import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Milk Road Pro Reports",
  description: "Professional crypto research reports that don't suck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white">
        {/* Navigation */}
        <nav className="border-b-4 border-black bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl md:text-3xl font-bold text-black hover:animate-wiggle">
                🥛 MILK ROAD
              </Link>
              <div className="flex gap-3 md:gap-4">
                <Link
                  href="/"
                  className="text-sm md:text-base font-bold text-black hover:bg-yellow-400 px-3 py-2 border-2 border-black transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/archive"
                  className="text-sm md:text-base font-bold text-black hover:bg-yellow-400 px-3 py-2 border-2 border-black transition-colors"
                >
                  ARCHIVE
                </Link>
                <Link
                  href="/intent"
                  className="text-sm md:text-base font-bold text-black hover:bg-yellow-400 px-3 py-2 border-2 border-black transition-colors"
                >
                  INTENT
                </Link>
                <Link
                  href="/contact"
                  className="text-sm md:text-base font-bold text-black hover:bg-blue-400 px-3 py-2 border-2 border-black transition-colors"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
