import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";
import MobileNav from "@/components/MobileNav";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffeb3b' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Milk Road Pro Reports - Free Crypto Research & Analysis",
    template: "%s | Milk Road Pro",
  },
  description: "Access 126+ professional crypto research reports for free. Deep dives into DeFi, NFTs, tokenomics, and market analysis. Information should be free for all.",
  keywords: [
    "Milk Road Pro",
    "Milk Road",
    "crypto reports",
    "crypto research",
    "DeFi analysis",
    "NFT research",
    "tokenomics",
    "crypto market analysis",
    "blockchain reports",
    "cryptocurrency research",
    "free crypto reports",
    "crypto education",
  ],
  authors: [{ name: "Milk Road Pro Archive" }],
  creator: "Milk Road Pro Archive",
  publisher: "Milk Road Pro Archive",
  applicationName: "Milk Road Pro Reports",
  category: 'finance',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://milkroadpro.com",
    title: "Milk Road Pro Reports - Free Crypto Research",
    description: "126+ professional crypto research reports. DeFi, NFTs, tokenomics, and market insights. Free access for all.",
    siteName: "Milk Road Pro Reports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milk Road Pro Reports",
    description: "126+ free professional crypto research reports",
    creator: "@milkroad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  manifest: '/manifest.webmanifest',
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
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl md:text-3xl font-bold text-black hover:animate-wiggle">
                🥛 MILK ROAD
              </Link>

              {/* Mobile Navigation */}
              <div className="flex items-center gap-2 md:hidden">
                <DarkModeToggle />
                <MobileNav />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-4">
                <DarkModeToggle />
                <Link
                  href="/"
                  className="text-base font-bold text-black hover:bg-yellow-400 px-3 py-2 border-2 border-black transition-colors"
                >
                  HOME
                </Link>
                <Link
                  href="/archive"
                  className="text-base font-bold text-black hover:bg-yellow-400 px-3 py-2 border-2 border-black transition-colors"
                >
                  ARCHIVE
                </Link>
                <Link
                  href="/intent"
                  className="text-base font-bold text-black hover:bg-yellow-400 px-3 py-2 border-2 border-black transition-colors"
                >
                  INTENT
                </Link>
                <Link
                  href="/contact"
                  className="text-base font-bold text-black hover:bg-blue-400 px-3 py-2 border-2 border-black transition-colors"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <ScrollToTop />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Milk Road Pro Reports',
              description: '126+ free professional crypto research reports',
              url: 'https://milkroadpro.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://milkroadpro.com/archive?search={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
