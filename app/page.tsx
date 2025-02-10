import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, ArrowRight } from "lucide-react"
import Solutions from "./solutions"
import Contact from "./contact"
import { Footer } from "./footer"
import { Chatbot } from "@/components/Chatbot"
import PortfolioShowcase from "@/components/PortfolioShowcase"
import TestimonialShowcase from "./Testimonial"
import AdditionalPricing from "./addional"

export const metadata: Metadata = {
  title: "Ainstal",
  description:
    "Streamline operations, boost sales, and save time effortlessly with Ainstal's cutting-edge AI solutions. Get started today!",
  keywords: ["AI solutions", "business automation", "SEO", "sales boost", "time-saving technology"],
  openGraph: {
    title: "Revolutionize Your Business with AI | Ainstal",
    description:
      "Streamline operations, boost sales, and save time effortlessly with Ainstal's cutting-edge AI solutions. Get started today!",
    url: "https://www.ainstal.com",
    siteName: "Ainstal",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ainstal AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revolutionize Your Business with AI | Ainstal",
    description:
      "Streamline operations, boost sales, and save time effortlessly with Ainstal's cutting-edge AI solutions. Get started today!",
    images: ["/og.png"],
    creator: "@ainstal",
  },
  alternates: {
    canonical: "https://www.ainstal.com",
    languages: {
      "en-US": "https://www.ainstal.com",
      "es-ES": "https://www.ainstal.com",
      "fr-FR": "https://www.ainstal.com",
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817]">
      {/* Video Background with Overlay */}
      <div className="fixed top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-full">
            <source src="/globe.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-[#020817]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/30 via-transparent to-[#020817]/30" />
      </div>
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-[#000B1C] border-b border-white/10">
          <div className="container mx-auto px-4 py-4 md:py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
              <Link href="/" className="flex items-center justify-center md:justify-start">
                <Image src="/logo.png" alt="Ainstal Logo" width={140} height={140} className="h-8 md:h-12 w-auto" />
              </Link>
              <div className="flex items-center justify-center md:justify-end space-x-6 md:space-x-8">
                <Link href="/" className="text-white text-sm md:text-base underline underline-offset-8">
                  Home
                </Link>
                <Link
                  href="/pricing"
                  className="text-white/80 text-sm md:text-base hover:text-white transition-colors"
                >
                  Prices
                </Link>
                <Link
                  href="/#contact"
                  className="text-white/80 text-sm md:text-base hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-32 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium mb-8 animate-pulse">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="animate-pulse">One Click to SEO and Authority</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-tight drop-shadow-lg animate-fade-in-up">
              Revolutionize Your Business with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto drop-shadow animate-fade-in-up animation-delay-300">
              Streamline operations, boost sales, and save time effortlessly with our cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
              <Link
                href="/#contact"
                className="group inline-flex h-12 md:h-14 items-center justify-center rounded-full bg-blue-600 px-8 md:px-10 text-base md:text-lg font-medium text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#pricing"
                className="group inline-flex h-12 md:h-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 md:px-10 text-base md:text-lg font-medium text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-900"
              >
                View Pricing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <Solutions />
        <PortfolioShowcase />
        <TestimonialShowcase />
        <AdditionalPricing />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </main>
  )
}

