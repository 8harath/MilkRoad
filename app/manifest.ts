import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Milk Road Pro Reports - Free Crypto Research',
    short_name: 'Milk Road Pro',
    description: 'Access 126+ professional cryptocurrency research reports for free. DeFi, NFTs, tokenomics, market analysis, and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffeb3b',
    orientation: 'portrait-primary',
    categories: ['finance', 'education', 'news'],
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/apple-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  };
}
