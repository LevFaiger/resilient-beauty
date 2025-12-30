'use client';

import { Hero } from '@/components/sections/Hero';
import { TitleStory } from '@/components/sections/TitleStory';
import { ArtistGrid } from '@/components/sections/ArtistGrid';
import { getFreeArtists } from '@/data/artists';

export default function HomePage() {
  const freeArtists = getFreeArtists();

  return (
    <>
      <Hero />
      <TitleStory />
      <ArtistGrid
        artists={freeArtists}
        showViewAll={true}
        showBadges={false}
      />
    </>
  );
}
