"use client"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

interface Category {
  id: number
  name_en: string
  name_ar: string
  description_en: string
  description_ar: string
  image: string
}

interface Product {
  id: number
  name_en: string
  name_ar: string
  description_en: string
  description_ar: string
  thumbnail_image: string
  price: number
  currency: string
  is_trending: boolean
}

export default function FeaturedCollections() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  const [collections, setCollections] = useState<Category[]>([])
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get<{ results: Category[] }>(
          "http://127.0.0.1:8000/product/api/categories/",
        )
        console.log("Categories API Response:", categoriesResponse.data)
        setCollections(categoriesResponse.data.results)
      } catch (error) {
        console.error("Error fetching categories:", error)
      } 

      try {
        const productsResponse = await axios.get<{ results: Product[] }>("http://127.0.0.1:8000/product/api/products/")
        console.log("Products API Response:", productsResponse.data)
        const trending = productsResponse.data.results.filter((product) => product.is_trending)
        setTrendingProducts(trending)
      } catch (error) {
        console.error("Error fetching products:", error)
      } 
    }

    fetchData()
  }, [])

  return (
    <section id="featured_collections" className={`py-20 bg-white ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-center font-heading font-bold text-gray-900 mb-4 mx-auto">
            {t("FeaturedHeading")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("FeaturedDescriptions")}</p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link href={`/category/${collection.id}`} key={collection.id} passHref>
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <div className="aspect-[3/4] bg-amber-100">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={isRTL ? collection.name_ar : collection.name_en}
                    width={500}
                    height={700}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {isRTL ? collection.name_ar : collection.name_en}
                  </h3>
                  <p className="text-amber-200 mb-4">{isRTL ? collection.description_ar : collection.description_en}</p>
                  <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors duration-300 w-fit">
                    {t("ExploreCollection")}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Items Carousel */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">{t("TrendingNow")}</h3>
          <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar">
            {trendingProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} passHref>
                <div className="min-w-[280px] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-square bg-amber-50 rounded-t-xl overflow-hidden">
                    <Image
                      src={product.thumbnail_image || "/placeholder.svg"}
                      alt={isRTL ? product.name_ar : product.name_en}
                      width={280}
                      height={280}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900">{isRTL ? product.name_ar : product.name_en}</h4>
                    <p className="text-amber-600 font-medium mt-2">
                      {t("Price")}: {product.price} {product.currency}
                    </p>
                    <button className="w-full mt-4 bg-amber-600 text-white py-2 rounded-full hover:bg-amber-700 transition-colors duration-300">
                      {t("AddToCart")}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

