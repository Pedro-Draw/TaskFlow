import { createContext, useContext, useState } from "react";
import { translations } from "./translations";

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "pt"
  );

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <I18nContext.Provider value={{ t, language, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
