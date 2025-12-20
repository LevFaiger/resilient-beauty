
import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
  onNavigate: (view: 'home' | 'list') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, setLang, onNavigate }) => {
  const [showCopied, setShowCopied] = useState(false);
  const isRtl = lang === Language.HE;

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    });
  };

  return (
    <div className={`min-h-screen flex flex-col ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="text-xl font-serif font-bold tracking-tight text-stone-800"
          >
            {TRANSLATIONS.exhibitionTitle[lang]}
          </button>
          
          <nav className="flex items-center gap-4 md:gap-6">
            <button onClick={() => onNavigate('home')} className="hidden sm:block hover:text-amber-700 transition-colors">
              {TRANSLATIONS.home[lang]}
            </button>
            <button onClick={() => onNavigate('list')} className="hover:text-amber-700 transition-colors">
              {TRANSLATIONS.artists[lang]}
            </button>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={handleShare}
                className="flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-800 rounded-md border border-amber-200 text-sm font-bold hover:bg-amber-100 transition relative"
                title={TRANSLATIONS.share[lang]}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
                <span className="hidden md:inline">{TRANSLATIONS.share[lang]}</span>
                
                {showCopied && (
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-[10px] px-2 py-1 rounded shadow-lg animate-bounce">
                    {TRANSLATIONS.linkCopied[lang]}
                  </span>
                )}
              </button>

              <div className="h-6 w-px bg-stone-300 mx-1"></div>
              
              <button 
                onClick={() => setLang(lang === Language.EN ? Language.HE : Language.EN)}
                className="px-3 py-1 border border-stone-300 rounded text-sm font-semibold hover:bg-stone-100"
              >
                {lang === Language.EN ? 'עברית' : 'English'}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-serif italic mb-4">"Even in the darkness, there is light. Even in the silence, there is a song."</p>
          <p className="text-sm">&copy; 2025 Resilient Beauty Exhibition. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
