"use client"

import { useEffect } from "react"
import i18n from "@/i18n" // Import the i18n instance

const LanguageSwitcher = () => {
  useEffect(() => {
    // Ensure i18n is initialized
    if (!i18n.isInitialized) {
      i18n.init()
    }
  }, [])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    document.dir = lng === "ar" ? "rtl" : "ltr"
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
          i18n.language === "en" ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
        aria-label="Switch to English"
      >
        E
      </button>
      <button
        onClick={() => changeLanguage("ar")}
        className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
          i18n.language === "ar" ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
        aria-label="Switch to Arabic"
      >
        ع
      </button>
    </div>
  )
}

export default LanguageSwitcher

