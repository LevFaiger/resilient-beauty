'use client';

import { Hero } from '@/components/sections/Hero';
import { TitleStory } from '@/components/sections/TitleStory';
import { ArtistGrid } from '@/components/sections/ArtistGrid';
import { getFreeArtists } from '@/data/artists';
import { useLanguage } from '@/hooks/useLanguage';

export default function HomePage() {
  const { t } = useLanguage();
  const freeArtists = getFreeArtists();

  return (
    <>
      <Hero />
      <TitleStory />
      <ArtistGrid
        artists={freeArtists}
        title={t('artists.freeAccess')}
        showViewAll={true}
        showBadges={false}
      />
    </>
  );
}
