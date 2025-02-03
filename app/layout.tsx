import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aureosolutions.tech"),
  title: {
    default: "Aureo Jewelry | Exclusive Diamond & Luxury Jewelry Collection | أوريو للمجوهرات",
    template: "%s - Aureo Jewelry | أوريو للمجوهرات",
  },
  description:
    "Discover Aureo's exquisite collection of diamond jewelry, luxury watches, and fine accessories. Experience unparalleled craftsmanship and timeless elegance. | اكتشف مجموعة أوريو من مجوهرات الألماس والساعات الفاخرة والإكسسوارات الراقية. اختبر براعة حرفية لا مثيل لها وأناقة خالدة",
  keywords: [
    "luxury jewelry",
    "diamond jewelry",
    "fine jewelry",
    "engagement rings",
    "wedding bands",
    "luxury watches",
    "Aureo Jewelry",
    "diamond collection",
    "fine accessories",
    "premium jewelry",
    "مجوهرات فاخرة",
    "مجوهرات الماس",
    "خواتم الزواج",
    "ساعات فاخرة",
    "أوريو للمجوهرات",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Aureo Jewelry | Luxury Diamond Collection | أوريو للمجوهرات",
    description:
      "Discover our exclusive collection of fine jewelry and diamonds | اكتشف مجموعتنا الحصرية من المجوهرات الراقية والألماس",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
              

        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
       
      </body>
    </html>
  );
}
