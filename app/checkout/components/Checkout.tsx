"use client"

import { useState } from "react"
import Image from "next/image"
import { Lock } from "lucide-react"

type Step = "information" | "payment" | "confirmation"

export default function CheckoutPage() {
  const [step, setStep] = useState<Step>("information")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    area: "",
    buildingNo: "",
    deliveryInstructions: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleContinue = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true)
      return
    }
    setStep("payment")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <StepIndicator
              number={1}
              title="Information"
              isActive={step === "information"}
              isCompleted={step === "payment" || step === "confirmation"}
            />
            <div className="h-[2px] w-16 bg-gray-200" />
            <StepIndicator
              number={2}
              title="Payment"
              isActive={step === "payment"}
              isCompleted={step === "confirmation"}
            />
            <div className="h-[2px] w-16 bg-gray-200" />
            <StepIndicator number={3} title="Confirmation" isActive={step === "confirmation"} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === "information" && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
                    <input
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Building/Villa No.</label>
                    <input
                      type="text"
                      name="buildingNo"
                      value={formData.buildingNo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Instructions (Optional)
                    </label>
                    <textarea
                      name="deliveryInstructions"
                      value={formData.deliveryInstructions}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setStep("confirmation")}
                    className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Complete Payment
                  </button>
                </div>
              </div>
            )}

            {step === "confirmation" && (
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="mb-6">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
                <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been confirmed.</p>
                <div className="text-left bg-gray-50 p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Order Details</h3>
                  <p>Order Number: #123456</p>
                  <p>Estimated Delivery: 3-5 business days</p>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-20 relative">
                  <Image
                    src="/banner/ee.jpg"
                    alt="Diamond Gold Ring"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Diamond Gold Ring</h4>
                  <p className="text-sm text-gray-600">Size: 7</p>
                  <p className="text-orange-500">4,500 QAR</p>
                </div>
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>4,500 QAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">VAT (5%)</span>
                  <span>225 QAR</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total</span>
                  <span className="text-orange-500">4,725 QAR</span>
                </div>
              </div>
              {step === "information" && (
                <button
                  onClick={handleContinue}
                  className="w-full bg-orange-500 text-white py-3 rounded-md mt-6 hover:bg-orange-600 transition-colors"
                >
                  Continue to Payment
                </button>
              )}
              <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                <Lock className="w-4 h-4 mr-1" />
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Login Required</h2>
            <p className="text-gray-600 mb-6">Please login to continue with your purchase</p>
            <div className="space-y-4">
              <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => {
                  setIsLoggedIn(true)
                  setShowLoginModal(false)
                  setStep("payment")
                }}
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => setShowLoginModal(false)}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Continue as Guest
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function StepIndicator({
  number,
  title,
  isActive,
  isCompleted,
}: {
  number: number
  title: string
  isActive: boolean
  isCompleted?: boolean
}) {
  const bgColor = isActive ? "bg-orange-500" : isCompleted ? "bg-green-500" : "bg-gray-200"
  const textColor = isActive ? "text-orange-500" : isCompleted ? "text-green-500" : "text-gray-500"

  return (
    <div className="flex flex-col items-center">
      <div className={`w-8 h-8 rounded-full ${bgColor} text-white flex items-center justify-center mb-2`}>
        {isCompleted ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          number
        )}
      </div>
      <span className={`text-sm font-medium ${textColor}`}>{title}</span>
    </div>
  )
}

