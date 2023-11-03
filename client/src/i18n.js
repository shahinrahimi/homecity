import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './locales/en.json'
import translationFa from './locales/fa.json'
import translationTr from './locales/tr.json'
import translationAr from './locales/ar.json'

const lang = JSON.parse(localStorage.getItem("lang")) || "en"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEn },
      fa: { translation: translationFa },
      tr: { translation: translationTr },
      ar: { translation: translationAr }
    },
    fallbackLng: lang,
    lng: lang,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `http://localhost:5173/i18n/{{lng}}.json`,
    },
  });

export default i18n;