
import React, { useEffect, useState, useRef } from 'react';
import { Artist, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { getResilienceReflection } from '../services/geminiService';

interface ArtistDetailProps {
  artist: Artist;
  lang: Language;
}

const ArtistDetail: React.FC<ArtistDetailProps> = ({ artist, lang }) => {
  const [reflection, setReflection] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchReflection = async () => {
      setLoading(true);
      const text = await getResilienceReflection(artist.name.en, artist.biography.en, lang);
      setReflection(text);
      setLoading(false);
    };
    fetchReflection();
    setPreviewImage(null); // Reset preview when changing artists
    window.scrollTo(0, 0);
  }, [artist, lang]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const isRtl = lang === Language.HE;
  const currentImage = previewImage || artist.imageUrl;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Visuals */}
        <div className="space-y-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-stone-200 aspect-[4/5] border-8 border-white">
            <img 
              src={currentImage} 
              alt={artist.name[lang]} 
              className="w-full h-full object-cover transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-6 text-white border-t border-white/10">
              <h3 className="text-xl font-bold mb-1">{TRANSLATIONS.artwork[lang]}</h3>
              <p className="text-stone-300 italic font-light">{artist.paintingDescription[lang]}</p>
            </div>
            
            {/* Upload Overlay (Visible on Hover) */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
               <button 
                onClick={() => fileInputRef.current?.click()}
                className="bg-white/90 hover:bg-white text-stone-900 p-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-bold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                {lang === Language.EN ? "Upload Image" : "העלאת תמונה"}
              </button>
            </div>
          </div>

          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            className="hidden" 
            accept="image/*"
          />
          
          <div className="bg-amber-50/50 p-8 rounded-2xl border border-amber-100/50 shadow-inner">
            <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></span>
              {TRANSLATIONS.aiInterpretation[lang]}
            </h4>
            {loading ? (
              <div className="space-y-3 animate-pulse">
                <div className="h-4 bg-amber-200/50 rounded w-full"></div>
                <div className="h-4 bg-amber-200/50 rounded w-5/6"></div>
                <div className="h-4 bg-amber-200/50 rounded w-2/3"></div>
              </div>
            ) : (
              <p className="text-amber-900/80 leading-relaxed italic text-lg font-serif">
                "{reflection}"
              </p>
            )}
          </div>

          {artist.videoUrl && (
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-stone-900">
               <iframe 
                width="100%" 
                height="100%" 
                src={artist.videoUrl} 
                title="Artist Interview/Presentation"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        {/* Right Column: Narrative */}
        <div className="flex flex-col">
          <header className="mb-10">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-4 tracking-tight">
              {artist.name[lang]}
            </h1>
            <div className="flex items-center gap-4 text-stone-500 font-medium">
              <span className="px-3 py-1 bg-stone-100 rounded-md">
                {artist.birthYear} — {artist.deathYear || '...'}
              </span>
              <div className="h-px flex-grow bg-stone-200"></div>
            </div>
          </header>

          <section className="prose prose-stone prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 border-b pb-2 inline-block border-amber-500">
              {TRANSLATIONS.biography[lang]}
            </h2>
            <div className="text-stone-700 leading-relaxed text-xl whitespace-pre-wrap font-light">
              {artist.biography[lang]}
            </div>
          </section>

          <div className="mt-16 pt-10 border-t border-stone-200 space-y-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                {lang === Language.EN ? "Resources & Archives" : "משאבים וארכיונים"}
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
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    {lang === Language.EN ? "Official Archive" : "ארכיון רשמי"}
                  </a>
                ))}
              </div>
            </div>

            <p className="text-stone-400 text-sm italic">
              {lang === Language.EN 
                ? "This profile is part of the Resilient Beauty permanent digital archive." 
                : "פרופיל זה הוא חלק מהארכיון הדיגיטלי הקבוע של 'יופי עמיד'."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
