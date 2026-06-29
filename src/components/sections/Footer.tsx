'use client';

import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-serif italic text-stone-300 text-lg mb-4">
          &ldquo;{t('footer.quote')}&rdquo;
        </p>
        <p className="text-sm mb-6">
          &copy; {currentYear} {t('footer.copyright')}
        </p>

        <div className="mb-8 flex justify-center">
          <a
            href={t('footer.facebookUrl')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
            </svg>
            {t('footer.facebookLabel')}
          </a>
        </div>

        {/* Copyright Warning */}
        <div className="border-t border-stone-700 pt-8 mt-8 max-w-3xl mx-auto">
          <h4 className="text-stone-300 font-semibold text-sm uppercase tracking-wide mb-3">
            {t('footer.copyrightTitle')}
          </h4>
          <p className="text-stone-500 text-xs leading-relaxed mb-2">
            {t('footer.copyrightOwnership')}
          </p>
          <p className="text-stone-500 text-xs leading-relaxed">
            {t('footer.copyrightWarning')}
          </p>
        </div>
      </div>
    </footer>
  );
}
