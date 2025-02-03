import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fdf6e9] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-6xl font-extrabold text-amber-600">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Page Not Found</h2>
          <p className="mt-2 text-sm text-gray-600">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            Go back home
          </Link>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-600">
            If you believe this is an error, please{" "}
            <Link href="/contact" className="font-medium text-amber-600 hover:text-amber-500">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  )
}

