'use client';

import Link from 'next/link';
import { Artist } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { ArtistCard } from '@/components/ui/ArtistCard';

interface ArtistGridProps {
  artists: Artist[];
  title?: string;
  showViewAll?: boolean;
  showBadges?: boolean;
}

export function ArtistGrid({
  artists,
  title,
  showViewAll = false,
  showBadges = true,
}: ArtistGridProps) {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 w-full">
      {title && (
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-stone-900">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} showBadge={showBadges} />
        ))}
      </div>

      {showViewAll && (
        <div className="mt-12 text-center">
          <Link
            href="/artists/"
            className="text-amber-700 font-bold text-lg hover:underline inline-flex items-center gap-2"
          >
            {t('artists.viewAll')}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      )}
    </section>
  );
}
