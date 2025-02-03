"use client"
import { FiMinus, FiPlus } from "react-icons/fi"
import toast, { Toaster } from "react-hot-toast"
import { useTranslation } from "react-i18next"
import Reviews from "./ Reviews"
import axios from "axios"

const reviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "January 15, 2025",
    comment: "Absolutely stunning ring! The diamond quality is exceptional and the rose gold setting is beautiful.",
    verified: true,
  },
  {
    id: 2,
    author: "Emma L.",
    rating: 4,
    date: "January 10, 2025",
    comment: "Love the delicate floral design. Slightly smaller than expected but still gorgeous.",
    verified: true,
  },
]

interface ProductAPI {
  id: number
  name_en: string
  name_ar: string
  description_en: string
  description_ar: string
  price: number
  currency: string
  material: string
}

export default function ProductDetails({
  product,
  quantity,
  handleQuantityChange,
}: {
  product: ProductAPI
  quantity: number
  handleQuantityChange: (newQuantity: number) => void
}) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  const addItemToCart = async (productId: number, quantity: number) => {
    try {
      let guestId = localStorage.getItem("guest_id")
      if (!guestId) {
        guestId = String(Math.random().toString(36).substr(2, 9))
        localStorage.setItem("guest_id", guestId)
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/cart/carts/",
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
      toast.success(t("successAddToCart"))
    } catch (error) {
      console.error("Error adding item to cart:", error)
      toast.error(t("failAddToCart"))
    }
  }

  return (
    <div className={`mt-8 lg:mt-0 ${isRTL ? "rtl" : "ltr"}`}>
      <Toaster />
      <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
        {isRTL ? product.name_ar : product.name_en}
      </h1>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-2xl font-bold text-amber-600">
          {product.price} {product.currency}
        </span>
      </div>

      <div className="prose prose-sm text-gray-600 mb-8">
        <p>{isRTL ? product.description_ar : product.description_en}</p>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{t("quantity")}</label>
          <div className="flex items-center gap-2 w-32">
            <button
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              <FiMinus className="text-sm" />
            </button>
            <span className="w-12 text-center">{quantity}</span>
            <button
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              <FiPlus className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={() => addItemToCart(product.id, quantity)}
          className="flex-1 bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300"
        >
          {t("addToCart")}
        </button>
        <button className="flex-1 border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full hover:bg-amber-50 transition-colors duration-300">
          {t("addToWishlist")}
        </button>
      </div>

      <div className="border-t pt-8 mb-8">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">{t("material")}:</span>
            <span className="font-medium text-gray-900 mr-2 ml-2">{product.material}</span>
          </div>
        </div>
        <Reviews reviews={reviews} />
      </div>
    </div>
  )
}

