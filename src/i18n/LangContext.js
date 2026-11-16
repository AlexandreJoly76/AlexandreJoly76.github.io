import { createContext, useContext } from 'react';

export const LangContext = createContext(null);

// Renvoie { lang, t, toggleLang } : t contient les textes de la langue active.
export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang doit être utilisé dans <LangProvider>');
  return ctx;
};
