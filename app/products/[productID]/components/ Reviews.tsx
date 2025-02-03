import { useTranslation } from "react-i18next"
import { FaStar } from "react-icons/fa"

interface Review {
  id: number
  author: string
  rating: number
  date: string
  comment: string
  verified: boolean
}

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  return (
    <div className={`mt-8 ${isRTL ? "rtl" : "ltr"}`}>
      <h3 className="text-lg font-bold mb-4">{t("reviews")}</h3>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-medium">{review.author}</span>
                {review.verified && (
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    {t("verifiedPurchase")}
                  </span>
                )}
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {review.rating} {t("outOf5")}
              </span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 text-amber-600 hover:text-amber-700 transition-colors duration-300">
        {t("showMoreReviews")}
      </button>
    </div>
  )
}

