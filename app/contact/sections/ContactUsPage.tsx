"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function ContactPage() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("sending")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setFormStatus("sent")
  }

  return (
    <main className={`min-h-screen bg-[#fdf6e9] ${isRTL ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("getInTouch")}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("contactDescription")}</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Visit Us */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("visitUs")}</h3>
              <p className="text-gray-600 whitespace-pre-line">{t("address")}</p>
            </div>

            {/* Call Us */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("callUs")}</h3>
              <p className="text-gray-600">
                {t("phoneNumber")}
                <br />
                {t("workingHours")}
              </p>
            </div>

            {/* Email Us */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t("emailUs")}</h3>
              <p className="text-gray-600 whitespace-pre-line">{t("emailAddresses")}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{t("sendUsMessage")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors disabled:opacity-50"
                >
                  {formStatus === "sending" ? t("sending") : t("sendMessage")}
                </button>
              </div>
            </form>
            {formStatus === "sent" && (
              <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-lg text-center">{t("thankYouMessage")}</div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image src="/map.jpg" alt={t("visitUs")} fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  )
}

