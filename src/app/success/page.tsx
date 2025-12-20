'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { usePremium } from '@/hooks/usePremium';

export default function SuccessPage() {
  const { t } = useLanguage();
  const { setPremium } = usePremium();

  // Grant premium access when this page is visited
  useEffect(() => {
    setPremium(true);
  }, [setPremium]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-stone-50">
      <div className="max-w-lg w-full text-center">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-stone-100">
          {/* Success icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            {t('success.title')}
          </h1>

          <p className="text-xl text-stone-600 mb-2">
            {t('success.subtitle')}
          </p>

          <p className="text-stone-500 mb-8">
            {t('success.description')}
          </p>

          <Link
            href="/artists/"
            className="inline-block px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-colors shadow-lg"
          >
            {t('success.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
