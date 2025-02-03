import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

export default function Breadcrumb({ product }: { product: ProductAPI }) {
  return (
    <nav className="flex items-center space-x-2 mb-8 text-sm">
      <Link href="/" className="text-gray-600 hover:text-amber-600">
        Home
      </Link>
      <AiOutlineRight className="text-gray-400 text-xs" />
      <Link
        href={`/category/${product.category.id}`}
        className="text-gray-600 hover:text-amber-600"
      >
        {product?.category.name_en}
      </Link>
      <AiOutlineRight className="text-gray-400 text-xs" />
      <span className="text-gray-900">{product.name_en}</span>
    </nav>
  );
}