'use client';

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { usePremium } from '@/hooks/usePremium';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const STRIPE_PAYMENT_LINK = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || '#';

export default function PremiumPage() {
  const { t, language } = useLanguage();
  const { isPremium } = usePremium();
  const router = useRouter();

  // Redirect to artists if already premium
  useEffect(() => {
    if (isPremium) {
      router.push('/artists/');
    }
  }, [isPremium, router]);

  if (isPremium) {
    return null;
  }

  const features = [
    t('premium.features.feature1'),
    t('premium.features.feature2'),
    t('premium.features.feature3'),
    t('premium.features.feature4'),
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-stone-50">
      <div className="max-w-lg w-full">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-stone-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              {t('premium.title')}
            </h1>
            <p className="text-stone-600">
              {t('premium.subtitle')}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="font-bold text-stone-800">{t('premium.features.title')}</h3>
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
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
                  <span className="text-stone-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-stone-900 mb-1">
              {t('premium.price')}
            </div>
            <p className="text-stone-500 text-sm">{t('premium.priceNote')}</p>
          </div>

          <a
            href={STRIPE_PAYMENT_LINK}
            className="block w-full py-4 bg-amber-600 text-white font-bold text-center rounded-full hover:bg-amber-700 transition-colors shadow-lg"
          >
            {t('premium.cta')}
          </a>

          <p className="text-stone-400 text-sm text-center mt-6">
            {t('premium.freeNote')}
          </p>

          {/* Demo mode button - for testing */}
          <div className="mt-8 pt-6 border-t border-stone-200">
            <Link
              href="/success/"
              className="block w-full py-3 bg-stone-100 text-stone-600 font-medium text-center rounded-full hover:bg-stone-200 transition-colors text-sm"
            >
              {language === 'en' ? 'Demo: Simulate Payment' : 'הדגמה: סימולציית תשלום'}
            </Link>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/artists/"
            className="text-stone-500 hover:text-amber-700 transition-colors"
          >
            {t('common.back')}
          </Link>
        </div>
      </div>
    </div>
  );
}
