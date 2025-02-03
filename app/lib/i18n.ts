import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enTranslations from "./../locales/en.json"
import arTranslations from "./../locales/ar.json"

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enTranslations },
    ar: { common: arTranslations },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already safes from xss
  },
})

export default i18n

