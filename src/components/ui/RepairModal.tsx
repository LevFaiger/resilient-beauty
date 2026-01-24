'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { RepairInfo, LocalizedString, Language } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { ImageLightbox } from './ImageLightbox';

// Helper to get localized text with English fallback
const getLocalizedText = (text: LocalizedString, lang: Language): string => {
  return text[lang] || text.en;
};

interface RepairModalProps {
  artistName: LocalizedString;
  repairInfo: RepairInfo;
  isOpen: boolean;
  onClose: () => void;
}

export function RepairModal({ artistName, repairInfo, isOpen, onClose }: RepairModalProps) {
  const { language, t } = useLanguage();
  const l = (text: LocalizedString) => getLocalizedText(text, language);
  const isRTL = language === 'he';
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && !isLightboxOpen) {
      onClose();
    }
  }, [onClose, isLightboxOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white hover:text-amber-400 transition-colors"
          aria-label="Close"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal content */}
        <div
          className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">
              {t('repair.modalTitle')}
            </h2>
            <p className="text-amber-100 text-lg">{l(artistName)}</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Core appeal section */}
            <div className="mb-8 bg-stone-50 rounded-xl p-6 border border-stone-200">
              <p className="text-stone-700 leading-relaxed whitespace-pre-line">
                {t('repair.coreAppeal')}
              </p>
            </div>

            {/* Specific work section */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Image with zoom */}
              <div className="relative">
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-200 cursor-zoom-in group block"
                >
                  <Image
                    src={repairInfo.imageUrl}
                    alt={l(artistName)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Zoom overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {/* Click to zoom hint */}
                <p className="text-center text-stone-400 text-xs mt-2">
                  {t('repair.clickToZoom')}
                </p>
              </div>

              {/* Work description */}
              <div>
                <h3 className="text-xl font-serif font-bold text-amber-700 mb-4">
                  {l(repairInfo.heading)}
                </h3>
                <p className="text-stone-600 leading-relaxed whitespace-pre-line">
                  {l(repairInfo.description)}
                </p>
              </div>
            </div>

            {/* Close button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors font-medium"
              >
                {t('repair.close')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen lightbox for zoomed image */}
      <ImageLightbox
        src={repairInfo.imageUrl}
        alt={l(artistName)}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}
