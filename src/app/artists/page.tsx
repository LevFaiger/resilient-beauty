'use client';

import { artists } from '@/data/artists';
import { useLanguage } from '@/hooks/useLanguage';
import { usePremium } from '@/hooks/usePremium';
import { ArtistGrid } from '@/components/sections/ArtistGrid';

export default function ArtistsPage() {
  const { t } = useLanguage();
  const { isPremium } = usePremium();

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">
            {t('artists.title')}
          </h1>
          {!isPremium && (
            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold">
              {t('artists.freeAccess')} (10/11)
            </span>
          )}
        </div>
      </div>

      <ArtistGrid artists={artists} showBadges={true} />
    </div>
  );
}
