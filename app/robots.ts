export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://milkroadpro.com/sitemap.xml', // Update with your actual domain
  };
}
