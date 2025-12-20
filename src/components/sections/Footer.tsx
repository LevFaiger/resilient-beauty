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
        <p className="text-sm">
          &copy; {currentYear} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
