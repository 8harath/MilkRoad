import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://milkroad-reports.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Milk Road Pro Reports | Professional Crypto Research & Analysis",
    template: "%s | Milk Road Pro",
  },
  description: "Access 127+ professional crypto research reports from Milk Road. Expert analysis on Bitcoin, Ethereum, DeFi, NFTs, and emerging blockchain technologies.",
  keywords: [
    "crypto research",
    "cryptocurrency analysis",
    "bitcoin reports",
    "ethereum analysis",
    "DeFi research",
    "NFT market analysis",
    "blockchain technology",
    "crypto portfolio",
    "digital assets",
    "Web3",
    "Milk Road",
  ],
  authors: [{ name: "Milk Road" }],
  creator: "Milk Road",
  publisher: "Milk Road",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Milk Road Pro Reports",
    title: "Milk Road Pro Reports | Professional Crypto Research & Analysis",
    description: "Access 127+ professional crypto research reports from Milk Road. Expert analysis on Bitcoin, Ethereum, DeFi, NFTs, and emerging blockchain technologies.",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Milk Road Pro Reports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milk Road Pro Reports | Professional Crypto Research & Analysis",
    description: "Access 127+ professional crypto research reports from Milk Road. Expert analysis on Bitcoin, Ethereum, DeFi, NFTs, and emerging blockchain technologies.",
    creator: "@MilkRoadDaily",
    images: ["/icon.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Milk Road Pro Reports",
              description: "Professional crypto research reports and analysis",
              url: siteUrl,
              publisher: {
                "@type": "Organization",
                name: "Milk Road",
                logo: {
                  "@type": "ImageObject",
                  url: `${siteUrl}/icon.svg`,
                },
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
