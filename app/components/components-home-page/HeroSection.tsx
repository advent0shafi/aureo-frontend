'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

interface Category {
  icon: string;
  label: string;
}

const categories: Category[] = [
  { icon: "ring", label: "Rings" },
  { icon: "necklace", label: "Necklaces" },
  { icon: "bracelet", label: "Bracelets" },
  { icon: "earring", label: "Earrings" },
];

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="relative pt-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="lg:flex items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-8 animate-slide-up">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900">
                {t("allHeroText")} <span className="text-amber-600">Gold</span> &{" "}
                <span className="text-amber-600">Jewelry</span>
              </h2>
              <p className="text-lg text-gray-600">
                {t("heroDescrptions")}
              </p>
              <div className="flex space-x-4">
                <Link href="/products">
                <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300">
                  {t("ShopNow")}
                </button>
                </Link>
                <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full hover:bg-amber-50 transition-colors duration-300">
                  {t("CustomDesign")}
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 animate-slide-left">
              <div className="aspect-square bg-amber-100 rounded-full p-8 relative">
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-4 animate-float">
                  <span className="text-amber-600 font-bold">
                    {t("New Collection")}
                  </span>
                </div>
                <div className="h-full rounded-full overflow-hidden">
                  <Image
                    src={'/banner/product-12-min-min_11_11zon.jpg'}
                    width={200}
                    height={200}
                    alt={t("Luxury Gold Jewelry Collection")}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <i
                  className={`fas fa-${category.icon} text-3xl text-amber-600 mb-3`}
                ></i>
                <h3 className="font-medium">{t(category.label)}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
