'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Language } from '@/types';
import enTranslations from '@/locales/en.json';
import heTranslations from '@/locales/he.json';
import ruTranslations from '@/locales/ru.json';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations = {
  en: enTranslations,
  he: heTranslations,
  ru: ruTranslations,
};

const VALID_LANGUAGES: Language[] = ['en', 'he', 'ru'];

function isValidLanguage(lang: string | null): lang is Language {
  return lang !== null && VALID_LANGUAGES.includes(lang as Language);
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Read language from URL or localStorage on mount
  useEffect(() => {
    setMounted(true);

    // Priority: URL param > localStorage > default
    const urlLang = searchParams.get('lang');
    if (isValidLanguage(urlLang)) {
      setLanguageState(urlLang);
      localStorage.setItem('language', urlLang);
    } else {
      const savedLang = localStorage.getItem('language');
      if (isValidLanguage(savedLang)) {
        setLanguageState(savedLang);
        // Add lang to URL if missing but we have a saved language
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', savedLang);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
    }
  }, [searchParams, pathname, router]);

  // Update URL when language changes
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);

    // Update URL with new language parameter
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', lang);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, pathname, router]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  const isRtl = language === 'he';

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: 'en', setLanguage, t, isRtl: false }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
