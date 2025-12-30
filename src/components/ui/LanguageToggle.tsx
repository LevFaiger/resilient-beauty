'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/types';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'he', label: 'HE' },
  { code: 'ru', label: 'RU' },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className="px-2 py-1.5 text-sm font-medium border border-stone-300 rounded-lg bg-white text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
      aria-label="Select language"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
