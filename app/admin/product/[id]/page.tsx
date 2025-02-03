"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import AdminLayout from "@/app/components/admin/AdminLayout";
import BACKEND_BASE_URL from "@/app/lib/Api";

interface ImageData {
  id: number;
  image: string;
  alt_text: string;
  created_at: string;
}

interface ProductDetailsType {
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
const ProductForm = dynamic(() => import("../../../components/admin/ProductForm"), {
  ssr: false,
});

export default function EditProductPage() {
  const params = useParams();
  const { id } = params as { id: string };
  const [product, setProduct] = useState<ProductDetailsType | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BACKEND_BASE_URL}/product/api/products/${id}/`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        } else {
          console.error("Failed to fetch product");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <AdminLayout>
         
      {product ? <ProductForm product={product} /> : <p>Loading...</p>}
    </AdminLayout>
  );
}
