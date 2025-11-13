'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 border-2 border-black bg-white hover:bg-yellow-400 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          />

          {/* Menu */}
          <div className="fixed top-[60px] right-0 w-full max-w-xs bg-white border-l-4 border-b-4 border-black z-50 brutal-shadow animate-slide-in">
            <div className="p-6 space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="block text-xl font-bold text-black hover:bg-yellow-400 px-4 py-3 border-2 border-black transition-colors text-center"
              >
                HOME
              </Link>
              <Link
                href="/archive"
                onClick={closeMenu}
                className="block text-xl font-bold text-black hover:bg-yellow-400 px-4 py-3 border-2 border-black transition-colors text-center"
              >
                ARCHIVE
              </Link>
              <Link
                href="/intent"
                onClick={closeMenu}
                className="block text-xl font-bold text-black hover:bg-yellow-400 px-4 py-3 border-2 border-black transition-colors text-center"
              >
                INTENT
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block text-xl font-bold text-black hover:bg-blue-400 px-4 py-3 border-2 border-black transition-colors text-center"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
