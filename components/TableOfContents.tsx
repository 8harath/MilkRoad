'use client';

import { useState, useEffect } from 'react';

interface TOCProps {
  toc: Array<{ id: string; text: string; level: number }>;
}

export default function TableOfContents({ toc }: TOCProps) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <div className="hidden lg:block sticky top-24 w-64 border-4 border-black p-4 bg-white brutal-shadow max-h-[calc(100vh-8rem)] overflow-y-auto">
      <h3 className="text-lg font-bold mb-4 border-b-2 border-black pb-2">
        📚 TABLE OF CONTENTS
      </h3>
      <nav>
        <ul className="space-y-2">
          {toc.map(({ id, text, level }) => (
            <li
              key={id}
              style={{ paddingLeft: `${(level - 2) * 12}px` }}
            >
              <a
                href={`#${id}`}
                className={`block text-sm hover:text-black transition-colors font-medium ${
                  activeId === id
                    ? 'text-black font-bold bg-yellow-200 px-2 py-1'
                    : 'text-gray-700'
                }`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
