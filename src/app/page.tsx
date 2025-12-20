'use client';

import { Hero } from '@/components/sections/Hero';
import { ArtistGrid } from '@/components/sections/ArtistGrid';
import { getFreeArtists } from '@/data/artists';
import { useLanguage } from '@/hooks/useLanguage';

export default function HomePage() {
  const { t } = useLanguage();
  const freeArtists = getFreeArtists();

  return (
    <>
      <Hero />
      <ArtistGrid
        artists={freeArtists}
        title={t('artists.freeAccess')}
        showViewAll={true}
        showBadges={false}
      />
    </>
  );
}
