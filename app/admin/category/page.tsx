"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Trash2, Edit, Plus } from "lucide-react"
import { CategoryTableSkeleton } from "@/app/components/admin/CategoryTableSkeleton"
import AdminLayout from "@/app/components/admin/AdminLayout"
import Image from "next/image"
import BACKEND_BASE_URL from "@/app/lib/Api"

interface Category {
  id: number
  name_en: string
  sku: string
  image?: string
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchCategories = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`${BACKEND_BASE_URL}/product/api/categories/`)
      const data = await res.json()
      setCategories(data.results)
      console.log(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, []) //Fixed: Added empty dependency array to useEffect

  const handleDelete = async (id?: number) => {
    if (!id) return
    if (!confirm("Are you sure you want to delete this category?")) return
    try {
      const res = await fetch(`${BACKEND_BASE_URL}/product/api/categories/${id}/`, {
        method: "DELETE",
      })
      if (res.ok) {
        setCategories(categories.filter((cat) => cat.id !== id))
      } else {
        console.error("Delete failed")
      }
    } catch (error) {
      console.error("Error deleting category:", error)
    }
  }

  return (
     <AdminLayout>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-800">Categories</h1>
              <Link href="/admin/category/new">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300 ease-in-out flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  New Category
                </button>
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="p-6">
                <CategoryTableSkeleton />
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
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {categories.map((cat) => (
                    <tr key={cat.id} className="hover:bg-gray-50 transition duration-150 ease-in-out">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cat.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cat.name_en}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cat.sku}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {cat.image ? (
                          <Image
                            src={cat.image || "/placeholder.svg"}
                            alt={cat.name_en}
                            width={40}
                            height={40}
                            loading="lazy"
                            className="h-10 w-10 rounded object-cover"
                          />
                        ) : (
                          <span className="text-sm text-gray-500">No Image</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/admin/category/${cat.id}`}>
                          <button className="text-blue-600 hover:text-blue-900 mr-4 transition duration-150 ease-in-out">
                            <Edit className="w-5 h-5" />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(cat.id)}
                          className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {categories.length === 0 && !isLoading && (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                        No categories found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
   </AdminLayout>
  )
}

