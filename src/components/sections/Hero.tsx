'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { usePremium } from '@/hooks/usePremium';

export function Hero() {
  const { t } = useLanguage();
  const { isPremium } = usePremium();

  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-stone-900/50 z-10" />

      {/* Background image - using a placeholder gradient for now */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-stone-800 via-stone-800 to-stone-700"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl">
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 drop-shadow-lg animate-fade-in">
          {t('site.title')}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-12 tracking-wide text-stone-100 animate-slide-up">
          {t('site.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/artists/"
            className="px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-colors shadow-xl"
          >
            {t('hero.cta')}
          </Link>
          {/* Temporarily hidden
          {!isPremium && (
            <Link
              href="/premium/"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/40 font-bold rounded-full hover:bg-white/20 transition-colors"
            >
              {t('hero.premiumCta')}
            </Link>
          )}
          */}
        </div>
      </div>
    </section>
  );
}
