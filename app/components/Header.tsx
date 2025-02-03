"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Search, User, ShoppingCart, Menu, LogIn } from "lucide-react"
import LanguageSwitcher from "@/app/components/language-switcher/LanguageSwitcher"

export default function Header() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

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
            <button className="text-gray-700 hover:text-amber-600 transition-colors" aria-label={t("search")}>
              <Search className="w-5 h-5" />
            </button>

            {/* User Profile or Login/Signup */}
            {isLoggedIn ? (
              <>
                <Link
                  href="/profile"
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                  aria-label={t("profile")}
                >
                  <User className="w-5 h-5" />
                </Link>
                <button onClick={handleLogout} className="text-gray-700 hover:text-amber-600 transition-colors">
                  {t("logout")}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                  aria-label={t("login")}
                >
                  <LogIn className="w-5 h-5" />
                </Link>
                <Link
                  href="/signup"
                  className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
                >
                  {t("signUp")}
                </Link>
              </>
            )}

            {/* Cart Button */}
            <button className="text-gray-700 hover:text-amber-600 transition-colors relative" aria-label={t("cart")}>
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-700 hover:text-amber-600 transition-colors" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

