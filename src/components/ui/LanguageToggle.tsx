'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/types';

const languages: { code: Language; label: string; nativeLabel: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'EN' },
  { code: 'he', label: 'Hebrew', nativeLabel: 'עב' },
  { code: 'ru', label: 'Russian', nativeLabel: 'RU' },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 text-sm font-semibold rounded transition-colors ${
            language === lang.code
              ? 'bg-amber-100 text-amber-800 border border-amber-300'
              : 'text-stone-500 hover:bg-stone-100 border border-transparent'
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.nativeLabel}
        </button>
      ))}
    </div>
  );
}
