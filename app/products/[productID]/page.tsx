"use client";
import { useEffect, useState, use } from "react";
import ProductDetailsSkeleton from "@/app/components/skeletons/ProductDetailsSkeleton";
import Breadcrumb from "./components/ Breadcrumb";
import ProductImages from "./components/ProductImages";
import ProductDetails from "./components/ ProductDetails";
import ProductCard from "./components/ProductCard";






export default function Product({ params }: { params: { productID: string } }) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<ProductAPI | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);

  // ... keep the useEffect and fetch logic the same
  useEffect(() => {
    const fetchProduct = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/product/api/products/${resolvedParams.productID}/`
            );
            if (!response.ok) throw new Error("Network response was not ok");
            
            const data: ProductAPI = await response.json();
            setProduct(data);
            setSelectedImage(data.detail_images[0]?.image || null);

            // Fetch related products
            const relatedResponse = await fetch(
                `http://127.0.0.1:8000/product/api/products/`
            );
            if (relatedResponse.ok) {
                const relatedData: { results: Product[] } = await relatedResponse.json();
                setRelatedProducts(relatedData.results);
            } else {
                console.error("Error fetching related products");
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchProduct();
}, [resolvedParams.productID]); // Use resolvedParams.productID as dependency

const handleQuantityChange = (newQuantity: number) => {
  if (newQuantity > 0) {
    setQuantity(newQuantity);
  }
};


  if (loading || error || !product) return <ProductDetailsSkeleton />;

  return (
    <section id="product_details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb product={product} />
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <ProductImages
            product={product}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          
          <ProductDetails
            product={product}
            quantity={quantity}
            handleQuantityChange={setQuantity}
          />
        </div>
 
        
        {relatedProducts.length > 0 ? (

        <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts
                .filter(
                  (relatedProduct) =>
                    relatedProduct.category === product?.category.id && relatedProduct.id !== product.id
                )
                .map((relatedProduct) => (
                  <div key={relatedProduct.id}>
                   
                    <ProductCard product={relatedProduct} />
                  </div>
                ))}
            </div>
          </div>
        ) : (
          "NO RELATED PRODUCT"
        )}

 
      </div>
    </section>
  );
} 