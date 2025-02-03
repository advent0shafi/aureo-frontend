import React from 'react';
import {
  FaSearch,
  FaChevronDown,
  FaSlidersH,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

export default function ProductSkeleton(){
return (
    <section id="product_listing" className="pb-16 pt-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters and Search Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Search Skeleton */}
          <div className="w-full md:w-64 mb-4 md:mb-0">
            <div className="relative">
              <div className="w-full pl-10 pr-4 py-2 bg-gray-200 rounded-full animate-pulse" />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Filters Skeleton */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="pl-4 pr-10 py-2 bg-gray-200 rounded-full animate-pulse w-32" />
              <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="relative">
              <div className="pl-4 pr-10 py-2 bg-gray-200 rounded-full animate-pulse w-32" />
              <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <button className="bg-gray-200 p-2 rounded-full animate-pulse">
              <FaSlidersH className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Repeat Product Cards Skeleton */}
          {[...Array(8)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="mt-12 flex justify-center items-center space-x-2">
          <button className="w-10 h-10 bg-gray-200 rounded-full animate-pulse">
            <FaChevronLeft className="text-gray-400" />
          </button>
          <button className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
          <button className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
          <button className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
          <span className="text-gray-400">...</span>
          <button className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
          <button className="w-10 h-10 bg-gray-200 rounded-full animate-pulse">
            <FaChevronRight className="text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};


// Product Card Skeleton Component
const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-3">
        {/* Image Skeleton */}
        <div className="w-full h-64 bg-gray-200 animate-pulse" />

        {/* Wishlist Button Skeleton */}
        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-gray-200 p-2 rounded-full animate-pulse">
            <div className="w-5 h-5 bg-gray-300 rounded-full" />
          </button>
        </div>

        {/* Add to Cart Button Skeleton */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="w-full bg-gray-200 py-2 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Product Details Skeleton */}
      <div className="space-y-1">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4" />
        </div>
      </div>
    </div>
  );
};