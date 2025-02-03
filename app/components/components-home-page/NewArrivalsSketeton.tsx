import type React from "react"

const NewArrivalsSkeleton: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-4 animate-shimmer"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4 animate-shimmer"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto animate-shimmer"></div>
        </div>

        {/* Featured New Arrival Skeleton */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <div className="aspect-[21/9] bg-gray-200 animate-shimmer"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-transparent flex items-center">
            <div className="p-8 lg:p-12 max-w-xl">
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4 animate-shimmer"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-6 animate-shimmer"></div>
              <div className="h-10 bg-gray-300 rounded w-40 animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* New Arrivals Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm">
              <div className="aspect-square bg-gray-200 rounded-t-xl animate-shimmer"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4 animate-shimmer"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-shimmer"></div>
                <div className="h-8 bg-gray-200 rounded w-full animate-shimmer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewArrivalsSkeleton

