
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations.js';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Initialize state from localStorage, strictly defaulting to 'zh' (Chinese) if not found
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    if (saved) return saved;
    return 'zh';
  });

  useEffect(() => {
    // Persist language choice and update HTML lang attribute for accessibility/SEO
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value === undefined) return key; // Fallback to raw key if translation is missing
      value = value[k];
    }
    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
