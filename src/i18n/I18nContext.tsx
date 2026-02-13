import React, { createContext, useCallback, useContext, useState } from 'react';
import type { Locale } from './index';
import { getLocale, setLocale as setLocaleFn, supportedLocales, t as tFn } from './index';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  supportedLocales: Locale[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleFn(next);
    setLocaleState(next);
  }, []);

  const value: I18nContextValue = {
    locale,
    setLocale,
    t: tFn,
    supportedLocales,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within I18nProvider');
  }
  return ctx;
}
