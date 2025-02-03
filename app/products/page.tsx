import { Metadata } from "next";
import ProductList from "../components/ProductList";
export const metadata: Metadata = {
  title: 'Luxury Jewelry Collection | مجموعة المجوهرات الفاخرة',
  description: 'Explore our exclusive collection of diamond jewelry, precious gems, and luxury watches. Find the perfect piece for every occasion. | اكتشف مجموعتنا الحصرية من مجوهرات الألماس والأحجار الكريمة والساعات الفاخرة. اعثر على القطعة المثالية لكل مناسبة',
  keywords: ['luxury jewelry', 'diamond collection', 'precious gems', 'مجوهرات فاخرة', 'مجموعة الألماس', 'أحجار كريمة'],
}

export default function Product() {
  return (
    <div>
      <main>
        <ProductList />
      </main>
    </div>
  );
}
