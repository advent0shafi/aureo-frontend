import React from "react";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";



interface ProductCardProps {
  product: ProductAPI;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  return (
    <div>
 
      <div className="group" key={product.id}>
        <div className="relative overflow-hidden rounded-lg mb-3">
          <Link href={`/products/${product.id}`} className="btn btn-primary">
            <Image
              src={product.thumbnail_image}
              alt={product.name_en}
              width={300} // Set the width of the image
              height={300} // Set the height of the image
              className="w-full h-64 object-cover transition duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
            />
          </Link>
          <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
              <FaHeart className="text-gray-600" />
            </button>
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">{product.name_en}</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">{product.material}</p>
            <p className="font-bold text-gray-900">
              {product.price} {product.currency}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;