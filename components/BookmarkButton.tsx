'use client';

import { useEffect, useState } from 'react';

interface BookmarkButtonProps {
  slug: string;
}

export default function BookmarkButton({ slug }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setIsBookmarked(bookmarks.includes(slug));
  }, [slug]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    let newBookmarks: string[];

    if (bookmarks.includes(slug)) {
      newBookmarks = bookmarks.filter((b: string) => b !== slug);
    } else {
      newBookmarks = [...bookmarks, slug];
    }

    localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  return (
    <button
      onClick={toggleBookmark}
      className="inline-flex items-center gap-2 px-4 py-2 border-4 border-black bg-white hover:bg-yellow-400 font-bold transition-colors brutal-shadow-hover"
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <span className="text-xl">{isBookmarked ? '🔖' : '📑'}</span>
      <span>{isBookmarked ? 'BOOKMARKED' : 'BOOKMARK'}</span>
    </button>
  );
}
