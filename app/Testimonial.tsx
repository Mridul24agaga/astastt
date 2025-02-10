"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
  avatarUrl: string
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "CEO",
    company: "Tech Innovators",
    quote: "The AI solutions provided by this team have revolutionized our business processes. Highly recommended!",
    avatarUrl: "/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director",
    company: "Global Reach Inc.",
    quote: "Their AI-powered marketing tools have significantly improved our campaign performance and ROI.",
    avatarUrl: "/2.webp",
  },
  {
    name: "Mike Johnson",
    role: "CTO",
    company: "FutureTech Solutions",
    quote: "The custom AI models developed for our specific needs have given us a competitive edge in the market.",
    avatarUrl: "/3.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Operations Manager",
    company: "Efficient Systems Co.",
    quote: "The AI automation tools have streamlined our operations, saving us countless hours and resources.",
    avatarUrl: "/4.webp",
  },
  {
    name: "David Chen",
    role: "Head of Research",
    company: "Innovate AI Labs",
    quote: "Their expertise in cutting-edge AI technologies has been instrumental in advancing our research projects.",
    avatarUrl: "/5.jpg",
  },
  {
    name: "Emily Wong",
    role: "Product Manager",
    company: "Smart Solutions Ltd.",
    quote: "The AI-driven insights have helped us make data-driven decisions and stay ahead of market trends.",
    avatarUrl: "/6.jpg",
  },
]

export default function TestimonialShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let cardsPerView = 3 // desktop default
    if (isMobile) cardsPerView = 1
    else if (isTablet) cardsPerView = 2

    const totalItems = testimonials.length

    const scroll = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % totalItems
        if (scrollContainer) {
          const scrollAmount = scrollContainer.offsetWidth * (nextIndex / cardsPerView)
          scrollContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
          })
        }
        return nextIndex
      })
    }

    const intervalId = setInterval(scroll, 5000) // Change interval as needed

    return () => clearInterval(intervalId)
  }, [isMobile, isTablet])

  const getCardWidthClass = () => {
    if (isMobile) return "w-full"
    if (isTablet) return "w-1/2"
    return "w-1/3"
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Hear from the businesses we've helped transform with our AI solutions.
          </p>
        </div>

        <div ref={scrollRef} className="flex overflow-x-hidden snap-x snap-mandatory">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className={`flex-none ${getCardWidthClass()} p-2 md:p-3 snap-start`}>
              <div className="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:border-blue-500 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 mb-4 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatarUrl || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <blockquote className="text-lg font-medium text-gray-900 mb-4 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="not-italic mt-auto">
                    <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </cite>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

