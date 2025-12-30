'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

export function Header() {
  const { t } = useLanguage();
  const [showCopied, setShowCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm sm:text-base md:text-xl font-serif font-bold tracking-tight text-stone-800 hover:text-amber-700 transition-colors max-w-[150px] sm:max-w-none leading-tight"
        >
          {t('site.title')}
        </Link>

        <nav className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="hidden sm:block text-stone-600 hover:text-amber-700 transition-colors font-medium"
          >
            {t('navigation.home')}
          </Link>
          <Link
            href="/artists/"
            className="text-stone-600 hover:text-amber-700 transition-colors font-medium"
          >
            {t('navigation.artists')}
          </Link>

          <div className="flex items-center gap-2">
            {/* Share button */}
            <button
              onClick={handleShare}
              className="relative flex items-center gap-1 px-3 py-1.5 bg-amber-50 text-amber-800 rounded-lg border border-amber-200 text-sm font-medium hover:bg-amber-100 transition-colors"
              title={t('common.share')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <span className="hidden md:inline">{t('common.share')}</span>

              {showCopied && (
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                  {t('common.linkCopied')}
                </span>
              )}
            </button>

            <div className="h-6 w-px bg-stone-300" aria-hidden="true" />

            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
