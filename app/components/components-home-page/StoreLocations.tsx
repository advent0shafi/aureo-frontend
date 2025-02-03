"use client"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { FaMapMarkerAlt, FaClock, FaPhone, FaCoffee, FaParking, FaGem, FaTools } from "react-icons/fa"

export default function StoreLocation() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  const stores = [
    { name: "westBayStore", address: "westBay", phone: "+974 4444 1234" },
    { name: "pearlQatarStore", address: "pearlQatar", phone: "+974 4444 5678" },
    { name: "mallOfQatarStore", address: "mallOfQatar", phone: "+974 4444 9012" },
  ]

  const features = [
    { icon: FaCoffee, name: "vipLounge", description: "vipLoungeDesc" },
    { icon: FaParking, name: "freeParking", description: "freeParkingDesc" },
    { icon: FaGem, name: "expertStaff", description: "expertStaffDesc" },
    { icon: FaTools, name: "repairService", description: "repairServiceDesc" },
  ]

  return (
    <section
      id="store_locations"
      className={`py-20 bg-gradient-to-b from-amber-50/50 to-white ${isRTL ? "rtl" : "ltr"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">{t("storeLocations")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("storeLocationsDesc")}</p>
        </div>

        {/* Store Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div
              key={store.name}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video bg-amber-50 rounded-t-2xl overflow-hidden">
                <Image
                  src={"/map.png"}
                  alt={t(store.name)}
                  className="w-full h-full object-cover"
                  width={800}
                  height={400}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t(store.name)}</h3>
                <div className="space-y-3">
                  <p className="text-gray-600 flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 text-amber-600" />
                    <span>{t(`address.${store.address}`)}</span>
                  </p>
                  <p className="text-gray-600 flex items-start gap-3">
                    <FaClock className="mt-1 text-amber-600" />
                    <span>{t("openingHours")}</span>
                  </p>
                  <p className="text-gray-600 flex items-start gap-3">
                    <FaPhone className="mt-1 text-amber-600" />
                    <span>{store.phone}</span>
                  </p>
                </div>
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 bg-amber-600 text-white py-2 rounded-full hover:bg-amber-700 transition-colors duration-300">
                    {t("getDirections")}
                  </button>
                  <button className="w-12 h-10 flex items-center justify-center border-2 border-amber-600 text-amber-600 rounded-full hover:bg-amber-50 transition-colors duration-300">
                    <FaPhone className="text-amber-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Store Features */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-2xl text-amber-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{t(feature.name)}</h4>
              <p className="text-sm text-gray-600">{t(feature.description)}</p>
            </div>
          ))}
        </div>

        {/* Book Appointment CTA */}
        <div className="mt-16 text-center">
          <Link href="/contact">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors duration-300">
            {t("bookAppointment")}
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

