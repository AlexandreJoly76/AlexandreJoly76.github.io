import { useState, useEffect, useMemo, useCallback } from 'react';
import { LangContext } from './LangContext';
import { translations, LANGS, DEFAULT_LANG } from './translations';

const readSavedLang = () => {
  try {
    const saved = localStorage.getItem('lang');
    return LANGS.includes(saved) ? saved : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
};

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(readSavedLang);
  const t = translations[lang];

  // Synchronise <html lang>, le titre et la meta description, et mémorise le choix.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // stockage indisponible (navigation privée...) : on ignore
    }
  }, [lang, t]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  const value = useMemo(() => ({ lang, t, toggleLang }), [lang, t, toggleLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export default LangProvider;
