'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Artist } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { usePremium } from '@/hooks/usePremium';

interface ArtistDetailClientProps {
  artist: Artist;
}

export function ArtistDetailClient({ artist }: ArtistDetailClientProps) {
  const { language, t } = useLanguage();
  const { isPremium } = usePremium();
  const router = useRouter();

  // Redirect to premium page if artist is not free and user is not premium
  useEffect(() => {
    if (!artist.isFree && !isPremium) {
      router.push('/premium/');
    }
  }, [artist.isFree, isPremium, router]);

  // Show nothing while checking/redirecting
  if (!artist.isFree && !isPremium) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Back button */}
      <Link
        href="/artists/"
        className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-700 transition-colors mb-8"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        {t('common.back')}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Artwork */}
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-stone-200 aspect-[4/5] border-8 border-white">
            <Image
              src={artist.imageUrl}
              alt={artist.name[language]}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-6 text-white border-t border-white/10">
              <h3 className="text-xl font-bold mb-1">{t('artists.artwork')}</h3>
              <p className="text-stone-300 italic font-light">
                {artist.paintingDescription[language]}
              </p>
            </div>
          </div>

          {/* Additional Images */}
          {artist.additionalImages && artist.additionalImages.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {artist.additionalImages.map((img, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-xl shadow-lg bg-stone-200 aspect-square border-4 border-white">
                  <Image
                    src={img}
                    alt={`${artist.name[language]} - ${idx + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Video Link */}
          {artist.videoUrl && (
            <a
              href={artist.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg">{t('artists.watchVideo')}</div>
                <div className="text-red-200 text-sm">YouTube</div>
              </div>
            </a>
          )}
        </div>

        {/* Right Column: Biography */}
        <div className="flex flex-col">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 mb-4 tracking-tight">
              {artist.name[language]}
            </h1>
            {(artist.birthYear || artist.deathYear) && (
              <div className="flex items-center gap-4 text-stone-500 font-medium">
                <span className="px-3 py-1 bg-stone-100 rounded-md">
                  {artist.birthYear} — {artist.deathYear || '...'}
                </span>
                <div className="h-px flex-grow bg-stone-200" />
              </div>
            )}
          </header>

          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 border-b pb-2 inline-block border-amber-500">
              {t('artists.biography')}
            </h2>
            <div className="text-stone-700 leading-relaxed text-lg whitespace-pre-wrap font-light">
              {artist.biography[language]}
            </div>
          </section>

          {/* Painting Style and Subject Matter */}
          {artist.paintingStyle && (
            <section className="prose prose-stone prose-lg max-w-none mt-10">
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 border-b pb-2 inline-block border-amber-500">
                {t('artists.paintingStyle')}
              </h2>
              <div className="text-stone-700 leading-relaxed text-lg whitespace-pre-wrap font-light">
                {artist.paintingStyle[language]}
              </div>
            </section>
          )}

          {/* Resources */}
          {artist.links.length > 0 && (
            <div className="mt-12 pt-8 border-t border-stone-200 space-y-6">
              <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                {t('artists.resources')}
              </h4>
              <div className="flex flex-wrap gap-3">
                {artist.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-stone-600 hover:text-amber-700 hover:border-amber-700 transition-all text-sm font-medium shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {t('artists.officialArchive')}
                  </a>
                ))}
              </div>
            </div>
          )}

          <p className="text-stone-400 text-sm italic mt-8">
            {t('artists.archiveNote')}
          </p>
        </div>
      </div>
    </div>
  );
}
