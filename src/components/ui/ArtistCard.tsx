'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Artist, LocalizedString, Language } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { usePremium } from '@/hooks/usePremium';
import { LockIcon } from './PremiumBadge';
import { RepairModal } from './RepairModal';
import { cn } from '@/lib/utils';

// Helper to get localized text with English fallback
const getLocalizedText = (text: LocalizedString, lang: Language): string => {
  return text[lang] || text.en;
};

interface ArtistCardProps {
  artist: Artist;
  showBadge?: boolean;
}

export function ArtistCard({ artist, showBadge = true }: ArtistCardProps) {
  const { language, t } = useLanguage();
  const l = (text: LocalizedString) => getLocalizedText(text, language);
  const { isPremium } = usePremium();
  const [isRepairModalOpen, setIsRepairModalOpen] = useState(false);

  const isLocked = !artist.isFree && !isPremium;
  const href = isLocked ? '/premium/' : `/artists/${artist.id}/`;
  const hasRepairInfo = !!artist.repairInfo;

  const handleRepairClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsRepairModalOpen(true);
  };

  return (
    <>
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
            alt={l(artist.name)}
            fill
            className={cn(
              "object-cover transition duration-700",
              !isLocked && "group-hover:scale-110"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />


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

          {/* Video and Animation icons */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {artist.videoUrl && (
              <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-600 text-white">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Video
              </span>
            )}
            {artist.animationUrls && artist.animationUrls.length > 0 && (
              <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6.47L5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"/>
                </svg>
                Animation
              </span>
            )}
          </div>

          {/* Repair button overlay */}
          {hasRepairInfo && !isLocked && (
            <button
              onClick={handleRepairClick}
              className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-semibold shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {t('repair.buttonText')}
            </button>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">
            {l(artist.name)}
          </h3>
          <p className="text-stone-500 text-sm line-clamp-3 leading-relaxed">
            {l(artist.biography)}
          </p>

          {/* Years */}
          {(artist.birthYear || artist.deathYear) && (
            <p className="text-stone-400 text-xs mt-3">
              {artist.birthYear} — {artist.deathYear || '...'}
            </p>
          )}
        </div>
      </Link>

      {/* Repair Modal */}
      {hasRepairInfo && artist.repairInfo && (
        <RepairModal
          artistName={artist.name}
          repairInfo={artist.repairInfo}
          isOpen={isRepairModalOpen}
          onClose={() => setIsRepairModalOpen(false)}
        />
      )}
    </>
  );
}
