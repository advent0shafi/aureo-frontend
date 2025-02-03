'use client'
import AdminLayout from "@/app/components/admin/AdminLayout";
import dynamic from "next/dynamic";

const ProductForm = dynamic(() => import("../../../components/admin/ProductForm"), {
  ssr: false,
});

export default function NewProductPage() {
  return (
       <AdminLayout>
      <ProductForm />
   </AdminLayout>
  );
}
