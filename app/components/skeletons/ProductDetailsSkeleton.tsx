import { AiOutlineRight } from "react-icons/ai";

export default function ProductDetailsSkeleton() {
    return (
        <section id="product_details" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb Skeleton */}
                <nav className="flex items-center space-x-2 mb-8 text-sm">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    <AiOutlineRight className="text-gray-400 text-xs" />
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <AiOutlineRight className="text-gray-400 text-xs" />
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                </nav>

                {/* Product Info Skeleton */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                    {/* Product Images Skeleton */}
                    <div className="space-y-4">
                        {/* Main Image Skeleton */}
                        <div className="aspect-square bg-amber-50 rounded-2xl overflow-hidden animate-pulse"></div>

                        {/* Thumbnail Images Skeleton */}
                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="aspect-square bg-amber-50 rounded-xl overflow-hidden animate-pulse"></div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details Skeleton */}
                    <div className="mt-8 lg:mt-0">
                        <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                            <div className="h-8 w-64 bg-gray-200 rounded animate-pulse"></div>
                        </h1>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        {/* Product Description Skeleton */}
                        <div className="prose prose-sm text-gray-600 mb-8">
                            <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        {/* Product Options Skeleton */}
                        <div className="space-y-6 mb-8">
                            {/* Quantity Skeleton */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                                </label>
                                <div className="flex items-center gap-2 w-32">
                                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-gray-200 animate-pulse"></div>
                                    <div className="w-12 text-center bg-gray-200 rounded animate-pulse"></div>
                                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-gray-200 animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        {/* Actions Skeleton */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="flex-1 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                            <div className="flex-1 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                        </div>

                        {/* Additional Product Details Skeleton */}
                        <div className="border-t pt-8">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                {[...Array(4)].map((_, index) => (
                                    <div key={index}>
                                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                                        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mt-1"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section Skeleton */}
               
            </div>
        </section>
    );
}