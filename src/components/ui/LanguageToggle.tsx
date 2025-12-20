'use client';

import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'he' : 'en')}
      className="px-3 py-1.5 border border-stone-300 rounded-lg text-sm font-semibold hover:bg-stone-100 transition-colors"
      aria-label={language === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
    >
      {language === 'en' ? 'עברית' : 'English'}
    </button>
  );
}
