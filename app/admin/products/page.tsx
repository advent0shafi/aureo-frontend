"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Trash2, Edit, Plus } from "lucide-react"
import { ProductTableSkeleton } from "@/app/components/admin/ProductListSkeleton"
import AdminLayout from "@/app/components/admin/AdminLayout"
import Image from "next/image"
import BACKEND_BASE_URL from "@/app/lib/Api"

interface Product {
  id: number
  name_en: string
  sku: string
  price: number
  currency: string
  thumbnail_image?: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`${BACKEND_BASE_URL}/product/api/products/`)
      const data = await res.json()
      setProducts(data.results || data)
    } catch (error) {
      console.error("Error fetching products:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, []) //Fixed: Added empty dependency array to useEffect

  const handleDelete = async (id?: number) => {
    if (!id) return
    if (!confirm("Are you sure you want to delete this product?")) return
    try {
      const res = await fetch(`${BACKEND_BASE_URL}/product/api/products/${id}/`, {
        method: "DELETE",
      })
      if (res.ok) {
        setProducts(products.filter((prod) => prod.id !== id))
      } else {
        console.error("Delete failed")
      }
    } catch (error) {
      console.error("Error deleting product:", error)
    }
  }

  return (
    <AdminLayout>
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-800">Products</h1>
              <Link href="/admin/product/new">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300 ease-in-out flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  New Product
                </button>
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="p-6">
                <ProductTableSkeleton />
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name (EN)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SKU
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Thumbnail
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((prod) => (
                    <tr key={prod.id} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prod.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{prod.name_en}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{prod.sku}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {prod.price} {prod.currency}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {prod.thumbnail_image ? (
                          <Image
                            src={prod.thumbnail_image || "/placeholder.svg"}
                            alt={prod.name_en}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-sm text-gray-500">No Image</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/admin/product/${prod.id}`}>
                          <button className="text-blue-600 hover:text-blue-900 mr-4 transition duration-150 ease-in-out">
                            <Edit className="w-5 h-5" />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(prod.id)}
                          className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && !isLoading && (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                        No products found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  )
}

