// app/context/CartContext.tsx
"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import axios from "axios"
import toast from "react-hot-toast"

interface CartItem {
  id: number
  product: {
    id: number
    name_en: string
    name_ar: string
    thumbnail_image: string
    price: number
    currency: string
    material: string
  }
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

interface CartContextType {
  cart: Cart | null
  loading: boolean
  fetchCart: () => Promise<void>
  addToCart: (productId: number) => Promise<void>
  deleteCartItem: (itemId: number) => Promise<void>
  updateCartItemQuantity: (itemId: number, newQuantity: number) => Promise<void>
  incrementQuantity: (itemId: number, currentQuantity: number) => Promise<void>
  decrementQuantity: (itemId: number, currentQuantity: number) => Promise<void>
  clearCart: () => Promise<void>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(true)

  const getOrCreateGuestId = () => {
    let guestId = localStorage.getItem("guest_id")
    if (!guestId) {
      guestId = Math.random().toString(36).substr(2, 9)
      localStorage.setItem("guest_id", guestId)
    }
    return guestId
  }

  const fetchCart = async () => {
    setLoading(true)
    try {
      const guestId = getOrCreateGuestId()
      const response = await axios.get("http://127.0.0.1:8000/cart/carts/", {
        headers: { "X-Guest-ID": guestId }
      })
      setCart(response.data as Cart)
    } catch (error) {
      console.error("Error fetching cart:", error)
      toast.error("Failed to load cart")
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (productId: number) => {
    try {
      const guestId = getOrCreateGuestId()
      await axios.post(
        "http://127.0.0.1:8000/cart/carts/",
        { product: productId, quantity: 1 },
        { headers: { "X-Guest-ID": guestId } }
      )
      await fetchCart()
      toast.success("Product added to cart")
    } catch (error) {
      console.error("Error adding to cart:", error)
      toast.error("Failed to add product")
    }
  }

  const deleteCartItem = async (itemId: number) => {
    try {
      const guestId = getOrCreateGuestId()
      await axios.delete(`http://127.0.0.1:8000/cart/carts/${itemId}/`, {
        headers: { "X-Guest-ID": guestId }
      })
      await fetchCart()
      toast.success("Item removed from cart")
    } catch (error) {
      console.error("Error deleting item:", error)
      toast.error("Failed to remove item")
    }
  }

  const updateCartItemQuantity = async (itemId: number, newQuantity: number) => {
    try {
      const guestId = getOrCreateGuestId()
      await axios.patch(
        `http://127.0.0.1:8000/cart/carts/${itemId}/`,
        { quantity: newQuantity },
        { headers: { "X-Guest-ID": guestId } }
      )
      await fetchCart()
      toast.success("Cart updated")
    } catch (error) {
      console.error("Error updating quantity:", error)
      toast.error("Failed to update quantity")
    }
  }

  const incrementQuantity = async (itemId: number, currentQuantity: number) => {
    await updateCartItemQuantity(itemId, currentQuantity + 1)
  }

  const decrementQuantity = async (itemId: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      await updateCartItemQuantity(itemId, currentQuantity - 1)
    }
  }

  const clearCart = async () => {
    try {
      const guestId = getOrCreateGuestId()
      await axios.delete("http://127.0.0.1:8000/cart/carts/clear/", {
        headers: { "X-Guest-ID": guestId }
      })
      await fetchCart()
      toast.success("Cart cleared")
    } catch (error) {
      console.error("Error clearing cart:", error)
      toast.error("Failed to clear cart")
    }
  }

  useEffect(() => {
    fetchCart()
  }, [])

  return (
    <CartContext.Provider value={{
      cart,
      loading,
      fetchCart,
      addToCart,
      deleteCartItem,
      updateCartItemQuantity,
      incrementQuantity,
      decrementQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}