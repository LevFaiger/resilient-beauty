'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PremiumContextType {
  isPremium: boolean;
  setPremium: (value: boolean) => void;
}

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

interface PremiumProviderProps {
  children: ReactNode;
}

const PREMIUM_STORAGE_KEY = 'resilient_beauty_premium';

export function PremiumProvider({ children }: PremiumProviderProps) {
  const [isPremium, setIsPremiumState] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedPremium = localStorage.getItem(PREMIUM_STORAGE_KEY);
    if (savedPremium === 'true') {
      setIsPremiumState(true);
    }
  }, []);

  const setPremium = (value: boolean) => {
    setIsPremiumState(value);
    localStorage.setItem(PREMIUM_STORAGE_KEY, value.toString());
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <PremiumContext.Provider value={{ isPremium: false, setPremium }}>
        {children}
      </PremiumContext.Provider>
    );
  }

  return (
    <PremiumContext.Provider value={{ isPremium, setPremium }}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  const context = useContext(PremiumContext);
  if (context === undefined) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
}
