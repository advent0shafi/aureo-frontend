"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function AboutPage() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  return (
    <main className={`min-h-screen bg-[#fdf6e9] ${isRTL ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                {t("craftingTimeless")}
                <span className="text-amber-600 block">{t("elegance")}</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">{t("aboutDescription")}</p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-full overflow-hidden">
              <Image
                src="/banner/closeup-portrait-gorgeous-young-woman-with-big-golden-earrings-using-eye-patches-pensive-european-girl-posing-turban.jpg"
                alt={t("craftingTimeless")}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t("heritage"),
                description: t("heritageDescription"),
              },
              {
                title: t("quality"),
                description: t("qualityDescription"),
              },
              {
                title: t("innovation"),
                description: t("innovationDescription"),
              },
            ].map((value, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`order-2 ${isRTL ? "lg:order-2" : "lg:order-1"}`}>
              <div className="aspect-square relative rounded-full overflow-hidden">
                <Image src="/banner/newarrival.jpg" alt={t("ourStory")} fill className="object-cover" />
              </div>
            </div>
            <div className={`space-y-6 order-1 ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
              <h2 className="text-3xl font-bold text-gray-900">{t("ourStory")}</h2>
              <p className="text-gray-600">{t("storyDescription")}</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="text-2xl text-amber-600">20+</span>
                  <p className="text-sm text-gray-600">{t("yearsOfExcellence")}</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl text-amber-600">5000+</span>
                  <p className="text-sm text-gray-600">{t("happyCustomers")}</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-2xl text-amber-600">100%</span>
                  <p className="text-sm text-gray-600">{t("authenticMaterials")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">{t("experienceOurCraftsmanship")}</h2>
          <div className="flex gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-3 bg-white text-amber-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              {t("viewCollection")}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
            >
              {t("contactUs")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

