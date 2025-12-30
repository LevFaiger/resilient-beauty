'use client';

import { artists } from '@/data/artists';
import { useLanguage } from '@/hooks/useLanguage';
import { ArtistGrid } from '@/components/sections/ArtistGrid';

export default function ArtistsPage() {
  const { t } = useLanguage();

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8">
          {t('artists.title')}
        </h1>
      </div>

      <ArtistGrid artists={artists} showBadges={false} />
    </div>
  );
}
