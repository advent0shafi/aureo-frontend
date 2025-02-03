"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "@/app/components/language-switcher/LanguageSwitcher"

export default function Header() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    // Add your logout logic here
    setIsLoggedIn(false)
  }

  const navItems = [
    { name: t("product"), href: "/products" },
    { name: t("about"), href: "/about" },
    { name: t("contact"), href: "/contact" },
  ]

  return (
    <nav
      className={`w-full bg-white/95 backdrop-blur-sm z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0 shadow-md" : ""
      } ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image src="/logo_001.png" width={50} alt="logo" height={50} className="object-contain" />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-amber-600 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative language-selector">
              <LanguageSwitcher />
            </div>

            {/* Search Button */}
            <Link
              href="/search"
              className="text-gray-700 hover:text-amber-600 transition-colors"
              aria-label={t("search")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>

            {/* Cart Button */}
            <Link
              href="/cart"
              className="text-gray-700 hover:text-amber-600 transition-colors relative"
              aria-label={t("cart")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* User Profile or Login/Signup */}
            {isLoggedIn ? (
              <div className="relative group">
                <button className="text-gray-700 hover:text-amber-600 transition-colors" aria-label={t("profile")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t("profile")}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t("logout")}
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-gray-700 hover:text-amber-600 transition-colors"
                aria-label={t("login")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-amber-600 transition-colors"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
          {!isLoggedIn && (
            <Link
              href="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50"
            >
              {t("signUp")}
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

