'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Artist } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { usePremium } from '@/hooks/usePremium';
import { LockIcon } from './PremiumBadge';
import { cn } from '@/lib/utils';

interface ArtistCardProps {
  artist: Artist;
  showBadge?: boolean;
}

export function ArtistCard({ artist, showBadge = true }: ArtistCardProps) {
  const { language, t } = useLanguage();
  const { isPremium } = usePremium();

  const isLocked = !artist.isFree && !isPremium;
  const href = isLocked ? '/premium/' : `/artists/${artist.id}/`;

  return (
    <Link
      href={href}
      className={cn(
        "group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100",
        isLocked && "opacity-75"
      )}
    >
      <div className="aspect-[4/3] overflow-hidden relative bg-stone-200">
        <Image
          src={artist.imageUrl}
          alt={artist.name[language]}
          fill
          className={cn(
            "object-cover transition duration-700",
            !isLocked && "group-hover:scale-110"
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Hover overlay for non-locked artists */}
        {!isLocked && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
            <span className="text-white font-bold flex items-center gap-2">
              {t('artists.aboutArtist')}
              <span aria-hidden="true">&rarr;</span>
            </span>
          </div>
        )}

        {/* Lock overlay for premium artists */}
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <LockIcon className="w-10 h-10 text-white" />
          </div>
        )}

        {/* Badge */}
        {showBadge && (
          <div className="absolute top-3 right-3">
            <span className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              artist.isFree
                ? "bg-green-100 text-green-800"
                : "bg-amber-100 text-amber-800"
            )}>
              {artist.isFree ? t('artists.freeAccess') : t('artists.premiumRequired')}
            </span>
          </div>
        )}

        {/* Video icon */}
        {artist.videoUrl && (
          <div className="absolute top-3 left-3">
            <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-600 text-white">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Video
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">
          {artist.name[language]}
        </h3>
        <p className="text-stone-500 text-sm line-clamp-3 leading-relaxed">
          {artist.biography[language]}
        </p>

        {/* Years */}
        {(artist.birthYear || artist.deathYear) && (
          <p className="text-stone-400 text-xs mt-3">
            {artist.birthYear} — {artist.deathYear || '...'}
          </p>
        )}
      </div>
    </Link>
  );
}
