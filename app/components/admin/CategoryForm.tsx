"use client"

import { useState, useEffect, type FormEvent, type ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import BACKEND_BASE_URL from "@/app/lib/Api"

interface Category {
  id: number
  name_en: string
  name_ar: string
  description_en: string
  description_ar: string
  sku: string
  image: string | null
}

interface CategoryFormProps {
  category?: Category | null
}

export default function CategoryForm({ category = null }: CategoryFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<FormDataState>({
    name_en: category ? category.name_en : "",
    name_ar: category ? category.name_ar : "",
    description_en: category ? category.description_en : "",
    description_ar: category ? category.description_ar : "",
    sku: category ? category.sku : "",
    image: null,
  })
  const [imagePreview, setImagePreview] = useState<string | null>(category?.image || null)

  interface FormDataState {
    name_en: string
    name_ar: string
    description_en: string
    description_ar: string
    sku: string
    image: File | null
  }

  useEffect(() => {
    if (category) {
      setFormData({
        name_en: category.name_en,
        name_ar: category.name_ar,
        description_en: category.description_en,
        description_ar: category.description_ar,
        sku: category.sku,
        image: null,
      })
      setImagePreview(category.image)
    }
  }, [category])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
      setImagePreview(URL.createObjectURL(files[0]))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const data = new FormData()
    data.append("name_en", formData.name_en)
    data.append("name_ar", formData.name_ar)
    data.append("description_en", formData.description_en)
    data.append("description_ar", formData.description_ar)
    data.append("sku", formData.sku)
    if (formData.image) {
      data.append("image", formData.image)
    }

    try {
      let res: Response
      if (category) {
        // Update existing category
        res = await fetch(`${BACKEND_BASE_URL}/product/api/categories/${category.id}/`, {
          method: "PATCH",
          body: data,
        })
      } else {
        // Create new category
        res = await fetch(`${BACKEND_BASE_URL}/product/api/categories/`, {
          method: "POST",
          body: data,
        })
      }
      if (res.ok) {
        router.push("/admin/catogery")
      } else {
        const errorData = await res.json()
        console.error("Submission failed", errorData)
      }
    } catch (error) {
      console.error("An error occurred", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            {category ? "Edit Category" : "Create New Category"}
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name_en">
              Name (EN)
            </label>
            <input
              type="text"
              id="name_en"
              name="name_en"
              value={formData.name_en}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name_ar">
              Name (AR)
            </label>
            <input
              type="text"
              id="name_ar"
              name="name_ar"
              value={formData.name_ar}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description_en">
              Description (EN)
            </label>
            <textarea
              id="description_en"
              name="description_en"
              value={formData.description_en}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description_ar">
              Description (AR)
            </label>
            <textarea
              id="description_ar"
              name="description_ar"
              value={formData.description_ar}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sku">
              SKU
            </label>
            <input
              type="text"
              id="sku"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              accept="image/*"
            />
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Image Preview:</p>
                <div className="relative w-40 h-40 overflow-hidden rounded-lg">
                  <Image
                    src={imagePreview || "/placeholder.svg"}
                    alt="Category preview"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              {category ? "Update Category" : "Create Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

