"use client"
import { useEffect, useState, useCallback, useRef } from "react"
import axios from "axios"
import Image from "next/image"
import toast, { Toaster } from "react-hot-toast"
import { FaTrash, FaMinus, FaPlus, FaArrowLeft, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa"
import Link from "next/link"
import CartSkeleton from "@/app/components/skeletons/CartSkeleton"
import BACKEND_BASE_URL from "../lib/Api"

interface Product {
  id: number
  name_en: string
  name_ar: string
  thumbnail_image: string
  price: number
  currency: string
  material: string
}

interface CartItem {
  id: number
  product: Product
  quantity: number
  subtotal: number
}

interface Cart {
  id: number
  items: CartItem[]
  subtotal: number
  shipping_cost: number
  vat: number
  total: number
}

const API_BASE_URL = BACKEND_BASE_URL

export default function Carts() {
  const [cart, setCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(true)

  const getOrCreateGuestId = useCallback(() => {
    let guestId = localStorage.getItem("guest_id")
    if (!guestId) {
      guestId = Math.random().toString(36).substr(2, 9)
      localStorage.setItem("guest_id", guestId)
    }
    return guestId
  }, [])

  const fetchCart = useCallback(async () => {
    setLoading(true)
    try {
      const guestId = getOrCreateGuestId()
      const response = await axios.get(`${API_BASE_URL}/cart/carts/`, {
        headers: { "X-Guest-ID": guestId },
      })
      setCart(response.data as Cart)
    } catch (error) {
      console.error("Error fetching cart:", error)
      toast.error("Failed to load cart")
    } finally {
      setLoading(false)
    }
  }, [getOrCreateGuestId])

  const fetchCartRef = useRef(fetchCart)

  useEffect(() => {
    fetchCartRef.current = fetchCart
  }, [fetchCart])

  const updateCartItem = useCallback(
    async (itemId: number, action: "delete" | "update", newQuantity?: number) => {
      try {
        const guestId = getOrCreateGuestId()
        const method = action === "delete" ? "delete" : "patch"
        const url = `${API_BASE_URL}/cart/carts/${itemId}/`
        const data = action === "update" ? { quantity: newQuantity } : undefined

        // Optimistically update the UI
        setCart((prevCart) => {
          if (!prevCart) return null

          if (action === "delete") {
            const updatedItems = prevCart.items.filter((item) => item.id !== itemId)
            const updatedSubtotal = updatedItems.reduce((sum, item) => sum + item.subtotal, 0)
            return {
              ...prevCart,
              items: updatedItems,
              subtotal: updatedSubtotal,
              total: updatedSubtotal + prevCart.shipping_cost + prevCart.vat,
            }
          } else if (action === "update" && newQuantity !== undefined) {
            const updatedItems = prevCart.items.map((item) =>
              item.id === itemId
                ? { ...item, quantity: newQuantity, subtotal: item.product.price * newQuantity }
                : item,
            )
            const updatedSubtotal = updatedItems.reduce((sum, item) => sum + item.subtotal, 0)
            return {
              ...prevCart,
              items: updatedItems,
              subtotal: updatedSubtotal,
              total: updatedSubtotal + prevCart.shipping_cost + prevCart.vat,
            }
          }
          return prevCart
        })

        // Make the API call
        await axios({
          method,
          url,
          data,
          headers: { "X-Guest-ID": guestId },
        })

        toast.success(action === "delete" ? "Item removed" : "Quantity updated")
      } catch (error) {
        console.error(`Error ${action}ing item:`, error)
        toast.error(`Failed to ${action} item`)
        // Revert the optimistic update on error
        fetchCartRef.current()
      }
    },
    [getOrCreateGuestId],
  )

  useEffect(() => {
    fetchCart()
  }, [fetchCart])

  if (loading) return <CartSkeleton />
  if (!cart) return <div className="text-center py-10">Your cart is empty</div>

  return (
    <section className="py-20 bg-white">
      <Toaster />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shopping Cart</h2>
          <p className="text-gray-600 mt-2">Review your items before checkout</p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm">
              {cart.items.map((item) => (
                <div key={item.id} className="p-6 border-b">
                  <div className="flex gap-6">
                    <Link
                      href={`/products/${item.product.id}`}
                      className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={`${API_BASE_URL}${item.product.thumbnail_image}`}
                        alt={item.product.name_en}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900">{item.product.name_en}</h3>
                          <p className="text-sm text-gray-600">{item.product.material}</p>
                        </div>
                        <button
                          onClick={() => updateCartItem(item.id, "delete")}
                          className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                          aria-label="Remove item"
                        >
                          <FaTrash />
                        </button>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateCartItem(item.id, "update", Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            aria-label="Decrease quantity"
                          >
                            <FaMinus className="text-sm" />
                          </button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateCartItem(item.id, "update", item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            aria-label="Increase quantity"
                          >
                            <FaPlus className="text-sm" />
                          </button>
                        </div>
                        <span className="font-bold text-amber-600">
                          {item.subtotal} {item.product.currency}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/products" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700">
                <FaArrowLeft />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{cart.subtotal} QAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{cart.shipping_cost} QAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">VAT (5%)</span>
                  <span className="font-medium">{cart.vat} QAR</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-amber-600">{cart.total} QAR</span>
                  </div>
                </div>
              </div>
              <Link href="/checkout" className="block w-full">
                <button className="w-full bg-amber-600 text-white py-3 rounded-full mt-6 hover:bg-amber-700 transition-colors duration-300">
                  Proceed to Checkout
                </button>
              </Link>
              <div className="mt-6 text-center text-sm text-gray-600">
                <p className="mb-2">We accept</p>
                <div className="flex justify-center gap-2 text-gray-400 text-xl">
                  <FaCcVisa />
                  <FaCcMastercard />
                  <FaCcAmex />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

