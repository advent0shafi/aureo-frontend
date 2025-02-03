"use client"
import Image from "next/image"
import { FaPencilAlt, FaGem, FaMagic } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import Link from "next/link"

export default function CustomDesignService() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  return (
    <section
      id="custom_design_service"
      className={`py-20 bg-gradient-to-b from-white to-amber-50 ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium">{t("personalizedLuxury")}</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
            {t("customDesignService")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("customDesignDescription")}</p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPencilAlt className="text-2xl text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t("designConsultation")}</h3>
            <p className="text-gray-600">{t("designConsultationDesc")}</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaGem className="text-2xl text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t("materialSelection")}</h3>
            <p className="text-gray-600">{t("materialSelectionDesc")}</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMagic className="text-2xl text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t("crafting")}</h3>
            <p className="text-gray-600">{t("craftingDesc")}</p>
          </div>
        </div>

        {/* Featured Custom Designs */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("recentCustomCreations")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="aspect-square bg-amber-50 rounded-xl overflow-hidden">
              <Image
                src="/banner/custom-1.jpg"
                alt={t("customRingDesign")}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={300}
                height={300}
              />
            </div>
            <div className="aspect-square bg-amber-50 rounded-xl overflow-hidden">
              <Image
                src="/banner/custom-2.jpg"
                alt={t("customNecklaceDesign")}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={300}
                height={300}
              />
            </div>
            <div className="aspect-square bg-amber-50 rounded-xl overflow-hidden">
              <Image
                src="/banner/custom-3.jpg"
                alt={t("customBraceletDesign")}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={300}
                height={300}
              />
            </div>
            <div className="aspect-square bg-amber-50 rounded-xl overflow-hidden">
              <Image
                src="/banner/custom-4.jpg"
                alt={t("customJewelrySet")}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-amber-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">{t("readyToCreate")}</h3>
          <p className="mb-8 text-amber-100">{t("bookConsultationDesc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link  href="/contact">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-full hover:bg-amber-50 transition-colors duration-300">
              {t("bookConsultation")}
            </button>
            </Link>
            <Link  href="/contact">
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300">
              {t("learnMore")}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

