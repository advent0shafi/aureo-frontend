'use client';
import React from 'react';

export default function CartSkeleton() {
  return (
    <section id="shopping_cart" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Skeleton */}
        <div className="mb-8">
          <div className="h-8 w-48 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 w-64 bg-gray-200 rounded-full mt-2 animate-pulse"></div>
        </div>

        {/* Cart Content Skeleton */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items Skeleton */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm">
              {/* Cart Item Skeleton */}
              {[...Array(3)].map((_, index) => (
                <div key={index} className="p-6 border-b">
                  <div className="flex gap-6">
                    {/* Image Skeleton */}
                    <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-200 animate-pulse"></div>

                    {/* Product Details Skeleton */}
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <div className="h-6 w-48 bg-gray-200 rounded-full animate-pulse"></div>
                          <div className="h-4 w-32 bg-gray-200 rounded-full mt-2 animate-pulse"></div>
                        </div>
                        <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                          <div className="w-12 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                        </div>
                        <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping Skeleton */}
            <div className="mt-6">
              <div className="h-10 w-48 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Order Summary Skeleton */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="h-6 w-48 bg-gray-200 rounded-full animate-pulse mb-4"></div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="h-4 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-4 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-4 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Checkout Button Skeleton */}
              <div className="h-12 w-full bg-gray-200 rounded-full mt-6 animate-pulse"></div>

              {/* Payment Methods Skeleton */}
              <div className="mt-6 text-center">
                <div className="h-4 w-48 bg-gray-200 rounded-full mx-auto animate-pulse"></div>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}