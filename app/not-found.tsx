"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div
        className={`max-w-2xl w-full transition-all duration-1000 ${
          isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-64 sm:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-8xl sm:text-9xl font-bold text-primary">404</h1>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Skateboarder"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="pt-16 pb-8 px-6 text-center">
            <h2 className="text-2xl font-bold mb-2">This Page Does Not Exist</h2>
            <p className="text-gray-600 mb-8">
              Sorry, the page you are looking for could not be found. It's just an accident that was not intentional.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
