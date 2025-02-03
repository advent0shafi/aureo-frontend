"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-[#fdf6e9] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-6xl font-extrabold text-amber-600">Oops!</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Something went wrong</h2>
          <p className="mt-2 text-sm text-gray-600">We apologize for the inconvenience.</p>
        </div>
        <div className="mt-8 space-y-4">
          <button
            onClick={() => reset()}
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-amber-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            Go back home
          </Link>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-600">
            If the problem persists, please{" "}
            <Link href="/contact" className="font-medium text-amber-600 hover:text-amber-500">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  )
}

