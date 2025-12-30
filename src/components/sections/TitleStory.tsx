'use client';

import { useLanguage } from '@/hooks/useLanguage';

export function TitleStory() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose prose-stone prose-lg max-w-none">
          <p className="text-stone-600 italic mb-8 text-lg">
            {t('titleStory.attribution')}
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            {t('titleStory.paragraph1')}
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            {t('titleStory.paragraph2')}
          </p>

          <p className="text-stone-700 leading-relaxed mb-10">
            {t('titleStory.paragraph3')}
          </p>

          <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6 border-b pb-2 inline-block border-amber-500">
            {t('titleStory.subheading')}
          </h3>

          <p className="text-stone-700 leading-relaxed mb-6">
            {t('titleStory.paragraph4')}
          </p>

          <p className="text-stone-700 leading-relaxed mb-6 italic">
            {t('titleStory.paragraph5')}
          </p>

          <p className="text-stone-700 leading-relaxed mb-6">
            {t('titleStory.paragraph6')}
          </p>

          <p className="text-stone-700 leading-relaxed mb-8">
            {t('titleStory.paragraph7')}
          </p>

          <blockquote className="text-3xl md:text-4xl font-serif font-bold text-amber-700 text-center py-8 border-y border-amber-200">
            {t('titleStory.quote')}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
