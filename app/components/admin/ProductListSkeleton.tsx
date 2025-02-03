export function ProductTableSkeleton() {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="space-y-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex space-x-4">
              <div className="h-4 bg-gray-200 rounded w-1/12"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded w-1/12"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  