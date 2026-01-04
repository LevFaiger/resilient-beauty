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
        <p className="text-sm mb-8">
          &copy; {currentYear} {t('footer.copyright')}
        </p>

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
