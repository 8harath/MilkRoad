'use client';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const url = `https://milkroadpro.com/report/${encodeURIComponent(slug)}`;
  const text = `Check out: ${title}`;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 border-4 border-black bg-blue-400 hover:bg-blue-500 font-bold transition-colors brutal-shadow-hover"
        aria-label="Share on Twitter"
      >
        𝕏 TWITTER
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 border-4 border-black bg-blue-400 hover:bg-blue-500 font-bold transition-colors brutal-shadow-hover"
        aria-label="Share on LinkedIn"
      >
        💼 LINKEDIN
      </a>
      <button
        onClick={copyToClipboard}
        className="px-4 py-2 border-4 border-black bg-yellow-400 hover:bg-yellow-500 font-bold transition-colors brutal-shadow-hover"
        aria-label="Copy link"
      >
        🔗 COPY LINK
      </button>
    </div>
  );
}
