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
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded bg-gray-200 text-gray-700"}`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("ar")}
        className={`px-3 py-1 rounded  bg-gray-200 text-gray-700"}`}
      >
        العربية
      </button>
    </div>
  )
}

export default LanguageSwitcher




