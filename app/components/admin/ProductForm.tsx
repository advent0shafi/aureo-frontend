"use client"

import { useState, useEffect, type ChangeEvent, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import BACKEND_BASE_URL from "@/app/lib/Api"

interface Category {
  id: number
  name_en: string
  name_ar: string
  description_en: string
  description_ar: string
  image: string
  sku: string
}

interface ImageData {
  id: number
  image: string
  alt_text: string | null
  created_at: string
}

interface Product {
  id: number
  category: Category
  banner_images: ImageData[]
  detail_images: ImageData[]
  name_en: string
  name_ar: string
  description_en: string
  description_ar: string
  price: string
  currency: string
  stock: number
  material: string
  diamond_weight: string
  diamond_quality: string
  sku: string
  thumbnail_image: string
  created_at: string
  updated_at: string
  is_trending: boolean
  is_promoted: boolean
  is_arabic_special: boolean
}

interface ProductFormProps {
  product?: Product | null
}

interface ProductFormData {
  name_en: string
  name_ar: string
  description_en: string
  description_ar: string
  category: string
  price: string
  currency: string
  stock: string
  material: string
  diamond_weight: string
  diamond_quality: string
  sku: string
  thumbnail_image: File | null
  banner_images: File[]
  detail_images: File[]
  is_trending: boolean
  is_promoted: boolean
  is_arabic_special: boolean
}

export default function EnhancedProductForm({ product = null }: ProductFormProps) {
  const router = useRouter()

  const [categories, setCategories] = useState<Category[]>([])
  const [formData, setFormData] = useState<ProductFormData>({
    name_en: product ? product.name_en : "",
    name_ar: product ? product.name_ar : "",
    description_en: product ? product.description_en : "",
    description_ar: product ? product.description_ar : "",
    category: product ? product.category.id.toString() : "",
    price: product ? product.price : "",
    currency: product ? product.currency : "",
    stock: product ? product.stock.toString() : "",
    material: product ? product.material : "",
    diamond_weight: product ? product.diamond_weight : "",
    diamond_quality: product ? product.diamond_quality : "",
    sku: product ? product.sku : "",
    thumbnail_image: null,
    banner_images: [],
    detail_images: [],
    is_trending: product ? product.is_trending : false,
    is_promoted: product ? product.is_promoted : false,
    is_arabic_special: product ? product.is_arabic_special : false,
  })

  const [currentImages, setCurrentImages] = useState<{
    thumbnail: string | null
    banner: ImageData[]
    detail: ImageData[]
  }>({
    thumbnail: product ? product.thumbnail_image : null,
    banner: product ? product.banner_images : [],
    detail: product ? product.detail_images : [],
  })

  const [selectedImages, setSelectedImages] = useState<{
    thumbnail: File | null
    banner: File[]
    detail: File[]
  }>({
    thumbnail: null,
    banner: [],
    detail: [],
  })

  const [uploadedImages, setUploadedImages] = useState<{
    thumbnail: string | null
    banner: string[]
    detail: string[]
  }>({
    thumbnail: null,
    banner: [],
    detail: [],
  })

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${BACKEND_BASE_URL}/product/api/categories/`)
        const data = await res.json()
        setCategories(data.results || data)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    if (product) {
      setFormData((prev) => ({
        ...prev,
        name_en: product.name_en,
        name_ar: product.name_ar,
        description_en: product.description_en,
        description_ar: product.description_ar,
        category: product.category.id.toString(),
        price: product.price,
        currency: product.currency,
        stock: product.stock.toString(),
        material: product.material,
        diamond_weight: product.diamond_weight,
        diamond_quality: product.diamond_quality,
        sku: product.sku,
        is_trending: product.is_trending,
        is_promoted: product.is_promoted,
        is_arabic_special: product.is_arabic_special,
      }))
      setCurrentImages({
        thumbnail: product.thumbnail_image,
        banner: product.banner_images,
        detail: product.detail_images,
      })
    }
  }, [product])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
      setSelectedImages((prev) => ({ ...prev, [name]: files[0] }))
    }
  }

  const handleMultipleFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files) {
      const fileArray = Array.from(files)
      setFormData((prev) => ({ ...prev, [name]: fileArray }))
      setSelectedImages((prev) => ({ ...prev, [name]: fileArray }))
    }
  }

  const handleRemoveImage = (type: "thumbnail" | "banner" | "detail", id: number) => {
    setCurrentImages((prev) => {
      if (type === "thumbnail") {
        return { ...prev, thumbnail: null }
      } else {
        return {
          ...prev,
          [type]: prev[type].filter((img) => img.id !== id),
        }
      }
    })
  }

  const handleRemoveSelectedImage = (type: "thumbnail" | "banner" | "detail", index: number) => {
    setSelectedImages((prev) => {
      if (type === "thumbnail") {
        return { ...prev, thumbnail: null }
      } else {
        return {
          ...prev,
          [type]: prev[type].filter((_, i) => i !== index),
        }
      }
    })

    setFormData((prev) => {
      if (type === "thumbnail") {
        return { ...prev, thumbnail_image: null }
      } else {
        return {
          ...prev,
          [`${type}_images`]: (prev[`${type}_images`] as File[]).filter((_, i) => i !== index),
        }
      }
    })
  }

  const handleRemoveUploadedImage = (type: "thumbnail" | "banner" | "detail", index: number) => {
    setUploadedImages((prev) => {
      if (type === "thumbnail") {
        return { ...prev, thumbnail: null }
      } else {
        return {
          ...prev,
          [type]: prev[type].filter((_, i) => i !== index),
        }
      }
    })
  }

  const renderImages = (type: "thumbnail" | "banner" | "detail", imageType: "current" | "selected" | "uploaded") => {
    let images: (string | File | ImageData)[] = []
    let removeHandler: (index: number) => void

    if (imageType === "current") {
      images = type === "thumbnail" ? [currentImages.thumbnail].filter((img): img is string => img !== null) : currentImages[type]
      removeHandler = (index) => handleRemoveImage(type, (images[index] as ImageData).id)
    } else if (imageType === "selected") {
      images = type === "thumbnail" ? [selectedImages.thumbnail].filter((img): img is File => img !== null) : selectedImages[type]
      removeHandler = (index) => handleRemoveSelectedImage(type, index)
    } else {
      images = type === "thumbnail" ? [uploadedImages.thumbnail].filter((img): img is string => img !== null) : uploadedImages[type]
      removeHandler = (index) => handleRemoveUploadedImage(type, index)
    }

    return (
      <div className="mt-2 flex flex-wrap gap-2">
        {images.filter(Boolean).map((img, index) => (
          <div key={index} className="relative group">
            <Image
              src={
                imageType === "current"
                  ? type === "thumbnail"
                    ? (img as string)
                    : (img as ImageData).image
                  : imageType === "selected"
                    ? URL.createObjectURL(img as File)
                    : (img as string)
              }
              alt={`${imageType} ${type} image ${index + 1}`}
              width={96}
              height={96}
              className="w-24 h-24 object-cover rounded-md"
            />
            <button
              type="button"
              onClick={() => removeHandler(index)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label={`Remove ${imageType} ${type} image ${index + 1}`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    )
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const data = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "banner_images" || key === "detail_images") {
        ;(value as File[]).forEach((file) => data.append(key, file))
      } else if (key === "thumbnail_image" && value instanceof File) {
        data.append(key, value)
      } else if (typeof value === "boolean") {
        data.append(key, String(value))
      } else if (value !== null) {
        data.append(key, value as string)
      }
    })

    if (currentImages.thumbnail) {
      data.append("current_thumbnail_image", currentImages.thumbnail)
    }
    currentImages.banner.forEach((img) => {
      data.append("current_banner_images", img.id.toString())
    })
    currentImages.detail.forEach((img) => {
      data.append("current_detail_images", img.id.toString())
    })

    try {
      const url = product
        ? `${BACKEND_BASE_URL}/product/api/products/${product.id}/`
        : `${BACKEND_BASE_URL}/product/api/products/`
      const method = product ? "PATCH" : "POST"

      const res = await fetch(url, { method, body: data })

      if (res.ok) {
        const responseData = await res.json()
        // Update uploaded images
        setUploadedImages({
          thumbnail: responseData.thumbnail_image,
          banner: responseData.banner_images.map((img: ImageData) => img.image),
          detail: responseData.detail_images.map((img: ImageData) => img.image),
        })
        // Clear selected images
        setSelectedImages({
          thumbnail: null,
          banner: [],
          detail: [],
        })
        // Show success message or redirect
        alert("Product successfully saved!")

        router.push("/admin/products")
      } else {
        const errorData = await res.json()
        console.error("Submission failed", errorData)
        alert("Failed to save product. Please try again.")
      }
    } catch (error) {
      console.error("An error occurred", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{product ? "Edit Product" : "Add New Product"}</h2>

      {/* Name fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name_en" className="block text-sm font-medium text-gray-700 mb-1">
            Name (EN)
          </label>
          <input
            id="name_en"
            type="text"
            name="name_en"
            value={formData.name_en}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="name_ar" className="block text-sm font-medium text-gray-700 mb-1">
            Name (AR)
          </label>
          <input
            id="name_ar"
            type="text"
            name="name_ar"
            value={formData.name_ar}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
      </div>

      {/* Description fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="description_en" className="block text-sm font-medium text-gray-700 mb-1">
            Description (EN)
          </label>
          <textarea
            id="description_en"
            name="description_en"
            value={formData.description_en}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="description_ar" className="block text-sm font-medium text-gray-700 mb-1">
            Description (AR)
          </label>
          <textarea
            id="description_ar"
            name="description_ar"
            value={formData.description_ar}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            required
          ></textarea>
        </div>
      </div>

      {/* Category, Price, and Currency fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name_en}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            id="price"
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
            Currency
          </label>
          <input
            id="currency"
            type="text"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
      </div>

      {/* Stock, Material, and SKU fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
            Stock
          </label>
          <input
            id="stock"
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">
            Material
          </label>
          <input
            id="material"
            type="text"
            name="material"
            value={formData.material}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="sku" className="block text-sm font-medium text-gray-700 mb-1">
            SKU
          </label>
          <input
            id="sku"
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
      </div>

      {/* Diamond Weight and Quality fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="diamond_weight" className="block text-sm font-medium text-gray-700 mb-1">
            Diamond Weight
          </label>
          <input
            id="diamond_weight"
            type="number"
            step="0.01"
            name="diamond_weight"
            value={formData.diamond_weight}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="diamond_quality" className="block text-sm font-medium text-gray-700 mb-1">
            Diamond Quality
          </label>
          <input
            id="diamond_quality"
            type="text"
            name="diamond_quality"
            value={formData.diamond_quality}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Image upload fields */}
      <div className="space-y-4">
        <div>
          <label htmlFor="thumbnail_image" className="block text-sm font-medium text-gray-700 mb-1">
            Thumbnail Image
          </label>
          <h3 className="text-sm font-medium text-gray-700 mt-2">Current Image:</h3>
          {renderImages("thumbnail", "current")}
          <h3 className="text-sm font-medium text-gray-700 mt-2">Selected Image:</h3>
          {renderImages("thumbnail", "selected")}
          <h3 className="text-sm font-medium text-gray-700 mt-2">Uploaded Image:</h3>
          {renderImages("thumbnail", "uploaded")}
          <input
            id="thumbnail_image"
            type="file"
            name="thumbnail_image"
            onChange={handleFileChange}
            className="mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            accept="image/*"
          />
        </div>
        <div>
          <label htmlFor="banner_images" className="block text-sm font-medium text-gray-700 mb-1">
            Banner Images
          </label>
          <h3 className="text-sm font-medium text-gray-700 mt-2">Current Images:</h3>
          {renderImages("banner", "current")}
          <h3 className="text-sm font-medium text-gray-700 mt-2">Selected Images:</h3>
          {renderImages("banner", "selected")}
          <h3 className="text-sm font-medium text-gray-700 mt-2">Uploaded Images:</h3>
          {renderImages("banner", "uploaded")}
          <input
            id="banner_images"
            type="file"
            name="banner_images"
            onChange={handleMultipleFilesChange}
            className="mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            accept="image/*"
            multiple
          />
        </div>
        <div>
          <label htmlFor="detail_images" className="block text-sm font-medium text-gray-700 mb-1">
            Detail Images
          </label>
          <h3 className="text-sm font-medium text-gray-700 mt-2">Current Images:</h3>
          {renderImages("detail", "current")}
          <h3 className="text-sm font-medium text-gray-700 mt-2">Selected Images:</h3>
          {renderImages("detail", "selected")}
          <h3 className="text-sm font-medium text-gray-700 mt-2">Uploaded Images:</h3>
          {renderImages("detail", "uploaded")}
          <input
            id="detail_images"
            type="file"
            name="detail_images"
            onChange={handleMultipleFilesChange}
            className="mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            accept="image/*"
            multiple
          />
        </div>
      </div>

      {/* Checkbox fields */}
      <div className="flex flex-wrap gap-6">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="is_trending"
            checked={formData.is_trending}
            onChange={handleChange}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2 text-sm text-gray-700">Is Trending</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="is_promoted"
            checked={formData.is_promoted}
            onChange={handleChange}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2 text-sm text-gray-700">Is Promoted</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="is_arabic_special"
            checked={formData.is_arabic_special}
            onChange={handleChange}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2 text-sm text-gray-700">Is Arabic Special</span>
        </label>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {product ? "Update Product" : "Create Product"}
      </button>
    </form>
  )
}

