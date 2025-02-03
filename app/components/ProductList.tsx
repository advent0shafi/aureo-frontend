"use client"
import { useEffect, useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { useTranslation } from "react-i18next"

import { FaSearch, FaChevronDown, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import ProductSkeleton from "./skeletons/ProductSkeletons"
import BACKEND_BASE_URL from "../lib/Api"

interface Product {
  id: number
  name_en: string
  name_ar: string
  thumbnail_image: string
  price: number
  currency: string
  material: string
  category: string
}

interface PriceRange {
  label: string
  value: string
}

export default function ProductList() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [category, setCategory] = useState<string>("")
  const [priceRange, setPriceRange] = useState<string>("")
  const [material, setMaterial] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const priceRanges = useMemo<PriceRange[]>(
    () => [
      { label: t("under1000"), value: "Under $1,000" },
      { label: t("1000to5000"), value: "$1,000 - $5,000" },
      { label: t("5000to10000"), value: "$5,000 - $10,000" },
      { label: t("above10000"), value: "Above $10,000" },
    ],
    [t],
  )

  const materials = useMemo<string[]>(() => ["Gold", "Diamond", "Platinum", "Silver"], [])

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(false)
      try {
        const response = await fetch(`${BACKEND_BASE_URL}/product/api/products/`)
        const data = await response.json()
        setProducts(data.results)
        setFilteredProducts(data.results)
      } catch (err) {
        console.error("Error fetching products:", err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    let filtered = [...products]

    if (category) {
      filtered = filtered.filter((product) => product.category === category)
    }

    if (priceRange) {
      if (priceRange === "Under $1,000") {
        filtered = filtered.filter((product) => product.price < 1000)
      } else if (priceRange === "$1,000 - $5,000") {
        filtered = filtered.filter((product) => product.price >= 1000 && product.price <= 5000)
      } else if (priceRange === "$5,000 - $10,000") {
        filtered = filtered.filter((product) => product.price >= 5000 && product.price <= 10000)
      } else if (priceRange === "Above $10,000") {
        filtered = filtered.filter((product) => product.price > 10000)
      }
    }

    if (material) {
      filtered = filtered.filter((product) => product.material.toLowerCase() === material.toLowerCase())
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.name_ar.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredProducts(filtered)
  }, [category, priceRange, material, searchQuery, products])

  const productsPerPage = 12
  const startIndex = (page - 1) * productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const addItemToCart = async (productId: number, quantity: number) => {
    try {
      let guestId = localStorage.getItem("guest_id")
      if (!guestId) {
        guestId = String(Math.random().toString(36).substr(2, 9))
        localStorage.setItem("guest_id", guestId)
      }

      const response = await axios.post(
        `${BACKEND_BASE_URL}/cart/carts/`,
        {
          product_id: productId,
          quantity: quantity,
        },
        {
          headers: {
            "X-Guest-ID": guestId,
          },
        },
      )

      console.log("Cart updated:", response.data)
      toast.success(t("itemAddedToCart"))
    } catch (error) {
      toast.error(t("failedToAddItem"))
      console.error("Error adding item to cart:", error)
    }
  }

  if (loading) {
    return (
      <div>
        <ProductSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <ProductSkeleton />
      </div>
    )
  }

  return (
    <section id="product_listing" className={`pb-16 pt-30 bg-white mt-5 ${isRTL ? "rtl" : "ltr"}`}>
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 ">
          {/* Search Bar */}
          <div className="w-full md:w-64 mb-4 md:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4 overflow-x-scroll">
            {/* Category Filter */}
            <div className="relative">
              <select
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-full appearance-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">{t("category")}</option>
                <option value="3">{t("jewelry")}</option>
                <option value="4">{t("watches")}</option>
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Price Filter */}
            <div className="relative">
              <select
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-full appearance-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="">{t("priceRange")}</option>
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Material Filter */}
            <div className="relative">
              <select
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-full appearance-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              >
                <option value="">{t("material")}</option>
                {materials.map((mat) => (
                  <option key={mat} value={mat}>
                    {mat}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => {
            const productName = isRTL ? product.name_ar : product.name_en
            const thumbnail = product.thumbnail_image || "/default-image.jpg"

            return (
              <div className="group" key={product.id}>
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={thumbnail || "/placeholder.svg"}
                      alt={productName}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
                      <FaHeart className="text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <button
                      onClick={() => addItemToCart(product.id, 1)}
                      className="w-full bg-white text-gray-900 py-2 rounded-full font-medium hover:bg-gray-100 transition"
                    >
                      {t("addToCart")}
                    </button>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">{productName}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">{product.material}</p>
                    <p className="font-bold text-gray-900">
                      {product.price} {product.currency}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pagination Controls */}
        <div className="mt-12 flex justify-center items-center space-x-2">
          <button
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                page === num + 1 ? "bg-gray-900 text-white" : "bg-gray-100"
              } hover:bg-gray-200 transition`}
              onClick={() => setPage(num + 1)}
            >
              {num + 1}
            </button>
          ))}
          <button
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

