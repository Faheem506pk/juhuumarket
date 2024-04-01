// TranslationContext.js
import React, { createContext, useContext, useState } from 'react';
import translations from './data';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translate = (key) => {
    return translations[key][language];
  };

  return (
    <TranslationContext.Provider value={{ translate, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
