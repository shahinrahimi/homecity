import React, { useEffect, createContext, useState } from "react";
import i18n from "../i18n";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(JSON.parse(localStorage.getItem("lang")) || "en")
  const [dir, setDir] = useState(lang !== "fa" && lang !== "ar" ? "ltr" : "rtl")

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang))
    i18n.changeLanguage(lang)
    if (lang !== "fa" && lang !== "ar") {
      setDir("ltr")
    } else {
      setDir("rtl")
    }
  }, [lang])


  return (
    <LanguageContext.Provider value={{ lang, setLang, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

