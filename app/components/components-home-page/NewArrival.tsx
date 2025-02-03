"use client"
import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import NewArrivalsSkeleton from "./NewArrivalsSketeton"
import BACKEND_BASE_URL from "@/app/lib/Api"

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

interface ApiResponse {
  results: Product[]
}

const NewArrivals: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/product/api/products/`)
        const data: ApiResponse = await response.json()
        const lastFourProducts = data.results.slice(-4)
        setProducts(lastFourProducts)
      } catch (error) {
        console.error("Error fetching products:", error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <NewArrivalsSkeleton />
  }

  if (error) {
    return <div className="text-center py-20">{t("ErrorLoadingProducts")}</div>
  }

  const renderProduct = (product: Product) => {
    const thumbnail = product.thumbnail_image || "/default-image.jpg" // Default image path
    const productName = isRTL ? product.name_ar : product.name_en

    return (
      <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative">
          <div className="aspect-square bg-amber-50 rounded-t-xl overflow-hidden">
            <Image
              src={thumbnail || "/placeholder.svg"}
              alt={productName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width={1200}
              height={300}
              loading="lazy"
            />
          </div>
          <span className="absolute top-4 left-4 bg-red-600 text-white text-sm px-3 py-1 rounded-full">{t("New")}</span>
          <button
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-amber-600 hover:bg-white transition-colors duration-300"
            aria-label={t("AddToWishlist", { productName })}
          >
            <i className="fas fa-heart"></i>
          </button>
        </div>
        <div className="p-4">
          <h4 className="font-bold text-gray-900">{productName}</h4>
          <div className="mt-2 mb-4">
            <span className="text-amber-600 font-medium">
              {product.price} {product.currency}
            </span>
          </div>
          <button className="w-full bg-amber-600 text-white py-2 rounded-full hover:bg-amber-700 transition-colors duration-300">
            {t("AddToCart")}
          </button>
        </div>
      </div>
    )
  }

  return (
    <section id="new_arrivals" className={`py-20 bg-white ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-medium">{t("LatestAdditions")}</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">{t("NewArrivals")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("DiscoverLatestCollection")}</p>
        </div>

        {/* Featured New Arrival */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <div className="aspect-[21/9] bg-amber-100">
            <Image
              src={"/banner/main-banner-0.jpg"}
              alt={t("RoyalCollection")}
              className="w-full h-full object-cover"
              width={1200}
              height={400}
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="p-8 lg:p-12 max-w-xl">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t("RoyalCollection")}</h3>
              <p className="text-amber-200 mb-6">{t("ExclusivePieces")}</p>
              <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300">
                {t("ShopCollection")}
              </button>
            </div>
          </div>
        </div>

        {/* New Arrivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{products.map(renderProduct)}</div>
      </div>
    </section>
  )
}

export default NewArrivals

