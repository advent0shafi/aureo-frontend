"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import AdminLayout from "@/app/components/admin/AdminLayout";


const CategoryForm = dynamic(() => import("../../../components/admin/CategoryForm"), {
  ssr: false,
});

export default function EditCategoryPage() {
  const params = useParams();
  const { id } = params as { id: string };
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchCategory = async () => {
      try {
        const res = await fetch(`http://localhost:8000/product/api/categories/${id}/`);
        if (res.ok) {
          const data = await res.json();
          setCategory(data);
        } else {
          console.error("Failed to fetch category");
        }
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [id]);

  return (
     <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Category</h1>
      {category ? <CategoryForm category={category} /> : <p>Loading...</p>}
    </AdminLayout>
  );
}
