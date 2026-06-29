'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { curatorNote } from '@/data/curatorNote';

const HAIPO_ARTICLE_URL = 'https://haipo.co.il/item/631691';

const GALLERY_IMAGES = [
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-36-16-800x621.jpg',
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-37-13-800x463.jpg',
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-38-00-800x658.jpg',
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-38-19-800x677.jpg',
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-38-52-1068x1726.jpg',
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-39-27-800x560.jpg',
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-39-48-1920x1081.jpg',
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-40-14-800x388.jpg',
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-40-30.jpg',
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-40-40-800x369.jpg',
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-40-57-800x666.jpg',
  '/exhibitions/haifa-2026/Haipo-news-19.06.26-11-41-15-800x678.jpg',
];

export default function ExhibitionsPage() {
  const { t, language } = useLanguage();
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const note = curatorNote[language];

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-3">
          {t('exhibitions.title')}
        </h1>
        <p className="text-stone-600 text-lg mb-10">
          {t('exhibitions.subtitle')}
        </p>

        <article className="bg-white rounded-3xl shadow-sm border border-stone-100 p-6 md:p-10">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-3">
            {t('exhibitions.current.label')}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-2">
            {t('exhibitions.current.name')}
          </h2>
          <p className="text-stone-700">{t('exhibitions.current.venue')}</p>
          <p className="text-stone-500 mb-8">{t('exhibitions.current.address')}</p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-stone-800 font-medium">
                {t('exhibitions.current.opening')}
              </p>
              <p className="text-stone-600">
                {t('exhibitions.current.dates')}
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-800">
                {t('exhibitions.current.hoursTitle')}
              </p>
              <p className="text-stone-600">
                {t('exhibitions.current.hoursThursday')}
              </p>
              <p className="text-stone-600">
                {t('exhibitions.current.hoursFriday')}
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">
                {t('exhibitions.current.curatorLabel')}
              </p>
              <p className="text-stone-800">
                {t('exhibitions.current.curatorName')}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">
                {t('exhibitions.current.supportLabel')}
              </p>
              <p className="text-stone-800">
                {t('exhibitions.current.supportText')}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">
                {t('exhibitions.current.guestsLabel')}
              </p>
              <ul className="text-stone-800 space-y-1">
                <li>{t('exhibitions.current.guestMayor')}</li>
                <li>{t('exhibitions.current.guestChair')}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-6 mb-8">
            <h3 className="font-serif text-xl text-stone-900 mb-3">
              {t('exhibitions.current.aboutTitle')}
            </h3>
            <p className="text-stone-700 leading-relaxed">
              {t('exhibitions.current.aboutText')}
            </p>
          </div>

          <a
            href={HAIPO_ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors"
          >
            {t('exhibitions.current.readArticle')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </article>
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-6 md:p-10">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold mb-3">
            {note.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6">
            {note.title}
          </h2>
          <div className="space-y-5 text-stone-700 leading-relaxed">
            {note.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 text-stone-500 italic">{note.attribution}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-12">
        <h3 className="font-serif text-2xl md:text-3xl text-stone-900 mb-6">
          {t('exhibitions.current.galleryTitle')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveImage(src)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <Image
                src={src}
                alt={t('exhibitions.current.galleryAlt')}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      <ImageLightbox
        src={activeImage ?? ''}
        alt={t('exhibitions.current.galleryAlt')}
        isOpen={activeImage !== null}
        onClose={() => setActiveImage(null)}
      />
    </div>
  );
}
