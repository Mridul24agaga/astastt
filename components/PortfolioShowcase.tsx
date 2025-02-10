"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

type PortfolioItem = {
  title: string
  description: string
  imageUrl: string
  websiteUrl: string
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Venova Construction",
    description: "A fully responsive online store built with Next.js and Shopify",
    imageUrl: "/construction.png",
    websiteUrl: "https://venovaconstructioninc.netlify.app/",
  },
  {
    title: "AZ Shamrock home buyers",
    description: "A dynamic travel blog with a custom CMS, built using Gatsby and Contentful",
    imageUrl: "/realestate.png",
    websiteUrl: "https://azshamrockhomebuyers.com/",
  },
  {
    title: "Renovations Website",
    description: "A React Native mobile app for efficient task management and collaboration",
    imageUrl: "/renovation.png",
    websiteUrl: "https://castellanosrenovations.com/",
  },
  {
    title: "Star State Roofing",
    description: "A sleek, responsive portfolio website showcasing web development projects",
    imageUrl: "/roofing.png",
    websiteUrl: "https://starstateroofing.com/",
  },
  {
    title: "Happy Home Roofers",
    description: "An interactive weather dashboard with real-time data and forecasts",
    imageUrl: "/roofers.png",
    websiteUrl: "https://happyhomeroofers.com/",
  },
]

export default function PortfolioShowcase() {
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

    const cardWidth = scrollContainer.offsetWidth / cardsPerView
    const totalItems = portfolioItems.length

    const scroll = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % totalItems
        if (scrollContainer) {
          scrollContainer.scrollTo({
            left: nextIndex * cardWidth,
            behavior: "smooth",
          })
        }
        return nextIndex
      })
    }

    const intervalId = setInterval(scroll, 3000)

    return () => clearInterval(intervalId)
  }, [isMobile, isTablet])

  const getCardWidthClass = () => {
    if (isMobile) return "w-full"
    if (isTablet) return "w-1/2"
    return "w-1/3"
  }

  return (
    <section id="portfolio" className="py-8 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
            Our Past Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed px-4">
            Explore our portfolio of successful projects. From AI-powered solutions to custom web applications, we
            deliver innovative technology that drives real business results.
          </p>
        </div>

        <div ref={scrollRef} className="flex overflow-x-hidden">
          {[...portfolioItems, ...portfolioItems.slice(0, 2)].map((item, index) => (
            <div key={index} className={`flex-none ${getCardWidthClass()} p-2 md:p-3`}>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-500">
                <div className="relative aspect-video">
                  <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <Link
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm md:text-base"
                  >
                    Visit Website
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

