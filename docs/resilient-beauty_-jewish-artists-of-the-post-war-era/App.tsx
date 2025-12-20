
import React, { useState } from 'react';
import { Artist, Language } from './types';
import { ARTISTS_DATA, TRANSLATIONS } from './constants';
import Layout from './components/Layout';
import ArtistDetail from './components/ArtistDetail';
import PaymentForm from './components/PaymentForm';

type View = 'home' | 'list' | 'detail' | 'payment';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [view, setView] = useState<View>('home');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isPaid, setIsPaid] = useState(false);

  const handleArtistClick = (artist: Artist) => {
    if (!isPaid && !artist.isFree) {
      setView('payment');
    } else {
      setSelectedArtist(artist);
      setView('detail');
    }
  };

  const isRtl = lang === Language.HE;

  return (
    <Layout lang={lang} setLang={setLang} onNavigate={setView}>
      {view === 'home' && (
        <div className="flex flex-col items-center">
          {/* Hero Section */}
          <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-stone-900/40 z-10"></div>
            <img 
              src="https://picsum.photos/1920/1080?grayscale" 
              className="absolute inset-0 w-full h-full object-cover"
              alt="Background"
            />
            <div className="relative z-20 text-center text-white px-4 max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 drop-shadow-lg">
                {TRANSLATIONS.exhibitionTitle[lang]}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-12 tracking-wide text-stone-100">
                {TRANSLATIONS.exhibitionSubtitle[lang]}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button 
                  onClick={() => setView('list')}
                  className="px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition shadow-xl"
                >
                  {TRANSLATIONS.artists[lang]}
                </button>
                {!isPaid && (
                  <button 
                    onClick={() => setView('payment')}
                    className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/40 font-bold rounded-full hover:bg-white/20 transition"
                  >
                    {TRANSLATIONS.buyTicket[lang]}
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Featured Artists (Free 10) */}
          <section className="py-24 max-w-7xl mx-auto px-4 w-full">
            <h2 className="text-4xl font-serif font-bold text-center mb-16 text-stone-900">
              {TRANSLATIONS.freeAccess[lang]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {ARTISTS_DATA.slice(0, 10).map(artist => (
                <div 
                  key={artist.id}
                  onClick={() => handleArtistClick(artist)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-stone-100"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={artist.imageUrl} alt={artist.name[lang]} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                      <span className="text-white font-bold">{TRANSLATIONS.aboutArtist[lang]} &rarr;</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-stone-800 mb-2">{artist.name[lang]}</h3>
                    <p className="text-stone-500 text-sm line-clamp-3 leading-relaxed">
                      {artist.biography[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button 
                onClick={() => setView('list')}
                className="text-amber-700 font-bold text-lg hover:underline"
              >
                {lang === Language.EN ? "View All Artists" : "צפה בכל האמנים"} &rarr;
              </button>
            </div>
          </section>
        </div>
      )}

      {view === 'list' && (
        <section className="py-12 max-w-7xl mx-auto px-4 w-full">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-4xl font-serif font-bold">{TRANSLATIONS.artists[lang]}</h1>
            {!isPaid && (
              <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-bold">
                {TRANSLATIONS.freeAccess[lang]}
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ARTISTS_DATA.map(artist => (
              <div 
                key={artist.id}
                onClick={() => handleArtistClick(artist)}
                className={`group cursor-pointer border rounded-xl p-4 transition ${
                  (!isPaid && !artist.isFree) ? 'opacity-60 grayscale bg-stone-100' : 'bg-white hover:border-amber-400'
                }`}
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 relative">
                  <img src={artist.imageUrl} alt={artist.name[lang]} className="w-full h-full object-cover" />
                  {!isPaid && !artist.isFree && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-stone-900">{artist.name[lang]}</h3>
                <p className="text-stone-500 text-xs mt-1 italic">{artist.paintingDescription[lang]}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {view === 'detail' && selectedArtist && (
        <ArtistDetail artist={selectedArtist} lang={lang} />
      )}

      {view === 'payment' && (
        <div className="min-h-[80vh] flex items-center justify-center p-4 bg-stone-50">
          <PaymentForm 
            lang={lang} 
            onSuccess={() => {
              setIsPaid(true);
              setView('list');
            }} 
          />
        </div>
      )}
    </Layout>
  );
};

export default App;
