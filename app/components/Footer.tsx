"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  const { t, i18n } = useTranslation();


  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <footer id="footer" className={`bg-gray-900 text-white pt-20 pb-10 `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image src="/logo_001.png" width={50} alt="logo" height={50} className="object-contain" />
          </Link>
            <p className="text-gray-400 mb-6">{t("companyDescription")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-600 transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-600 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-600 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-600 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t("quickLinks")}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                >
                  {t("aboutUs")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                >
                  {t("collections")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                >
                  {t("storeLocations")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                >
                  {t("customDesign")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                >
                  {t("contactUs")}
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t("customerService")}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                >
                  {t("faq")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                >
                  {t("shippingPolicy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                >
                  {t("returnsExchange")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                >
                  {t("sizeGuide")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-600 transition-colors"
                >
                  {t("careInstructions")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t("contactUs")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-amber-600" />
                <span className="text-gray-400">{t("address.westBay")}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-amber-600" />
                <span className="text-gray-400">{t("phone")}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-600" />
                <span className="text-gray-400">{t("email")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-10 pb-8">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-lg font-bold mb-4">
              {t("subscribeNewsletter")}
            </h4>
            <p className="text-gray-400 mb-6">{t("newsletterDescription")}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t("enterEmail")}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full focus:ring-2 focus:ring-amber-600 focus:border-transparent"
              />
              <button className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300">
                {t("subscribe")}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              {t("allRightsReserved")}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-amber-600 transition-colors"
              >
                {t("privacyPolicy")}
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-amber-600 transition-colors"
              >
                {t("termsOfService")}
              </a>
              <button
                onClick={changeLanguage}
                className="text-sm text-gray-400 hover:text-amber-600 transition-colors flex items-center gap-2"
              >
                <FaGlobe />
                <span>{t("language")}</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="https://placehold.co/40x25/FEF3C7/92400E?text=Visa"
                alt="Visa"
                width={24}
                height={24}
                className="h-6"
              />
              <Image
                src="https://placehold.co/40x25/FEF3C7/92400E?text=Visa"
                alt="Mastercard"
                width={24}
                height={24}
                className="h-6"
              />

              <Image
                src="https://placehold.co/40x25/FEF3C7/92400E?text=Visa"
                alt="American Express"
                width={24}
                height={24}
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
