'use client';

import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage, default to light mode
    const stored = localStorage.getItem('darkMode');
    const isDark = stored === 'true'; // Default to false (light mode)

    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggle}
      className="text-2xl md:text-3xl p-2 hover:scale-110 transition-transform"
      aria-label="Toggle dark mode"
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}
