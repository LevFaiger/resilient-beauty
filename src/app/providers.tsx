'use client';

import { ReactNode, Suspense } from 'react';
import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { PremiumProvider } from '@/hooks/usePremium';

function RtlWrapper({ children }: { children: ReactNode }) {
  const { isRtl } = useLanguage();

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'text-right' : 'text-left'}>
      {children}
    </div>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <LanguageProvider>
        <PremiumProvider>
          <RtlWrapper>{children}</RtlWrapper>
        </PremiumProvider>
      </LanguageProvider>
    </Suspense>
  );
}
