'use client'
import AdminLayout from "@/app/components/admin/AdminLayout";
import dynamic from "next/dynamic";

const CategoryForm = dynamic(() => import("../../../components/admin/CategoryForm"), {
  ssr: false,
});

export default function NewCategoryPage() {
  return (
     <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Create New Category</h1>
      <CategoryForm />
    </AdminLayout>
  );
}
