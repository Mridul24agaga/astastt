"use client"
import Link from "next/link"
import Image from "next/image"
import { Chatbot } from "@/components/Chatbot"
import { Footer } from "../footer"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"



const pricingCategories = [
  {
    title: "Websites & Applications",
    plans: [
      {
        title: "Basic Website",
        price: "$999",
        retainer: "$99/mo",
        features: [
          "5-page responsive website",
          "Basic SEO optimization",
          "Contact form integration",
          "1 round of revisions",
          "30-day support",
        ],
      },
      {
        title: "Advanced Website",
        price: "$2,499",
        retainer: "$249/mo",
        features: [
          "Up to 15 pages with responsive design",
          "Advanced SEO optimization",
          "Basic AI chatbot integration",
          "E-commerce or booking system",
          "2 rounds of revisions",
          "60-day support",
        ],
        highlight: true,
      },
      {
        title: "Advanced Dashboard",
        price: "$3,499",
        retainer: "$349/mo",
        features: [
          "AI-powered automation & reports",
          "Up to 10 custom features",
          "Integration with website & CRM",
          "Role-based access control",
          "60-day support & training",
        ],
        highlight: true,
      },
    ],
  },
  {
    title: "AI Chatbots",
    plans: [
      {
        title: "AI Chatbot",
        price: "$499",
        retainer: "$35/mo",
        features: [
          "Pre-built AI responses for FAQs",
          "Basic lead capture",
          "Website integration",
          "Monthly usage up to 1,000 conversations",
          "Basic analytics",
        ],
      },
      {
        title: "Advanced AI Chatbot",
        price: "$1,299",
        retainer: "$80/mo",
        features: [
          "Custom-trained AI responses",
          "Multi-channel integration",
          "Lead qualification & appointment booking",
          "Monthly usage up to 5,000 conversations",
          "Advanced analytics & insights",
        ],
        highlight: true,
      },
      {
        title: "Enterprise AI Chatbot",
        price: "$2,999",
        retainer: "$199/mo",
        features: [
          "Fully customized AI assistant",
          "Advanced NLP capabilities",
          "CRM & analytics tools integration",
          "Unlimited conversations",
          "24/7 premium support",
          "Custom AI model development",
        ],
      },
    ],
  },
  {
    title: "Content Automation",
    plans: [
      {
        title: "Rank on Google",
        price: "$99/mo",
        retainer: null,
        features: [
          "15 SEO-optimized, AI-generated blog posts per month",
          "1500+ words, engaging & structured",
          "Keyword research included",
          "1 round of revisions per blog",
          "Delivery throughout the month",
        ],
      },
      {
        title: "Social Media Ad Copy",
        price: "$699/mo",
        retainer: null,
        features: [
          "AI-powered sales copy for social media ads",
          "Targeted content creation for ad campaigns",
          "10+ pieces of AI-generated content/month",
          "2 rounds of revisions per piece",
          "48-hour turnaround time",
        ],
        highlight: true,
      },
      {
        title: "Full Social Media Content Suite",
        price: "$1,999/mo",
        retainer: null,
        features: [
          "Unlimited AI-generated social media content & ads",
          "AI-powered email campaigns & video scripts",
          "Real-time AI content optimization",
          "Unlimited revisions",
          "24/7 content generation & support",
        ],
      },
    ],
  },
]

export default function Pricing() {
  const pathname = usePathname()

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#020817]"
    >
      <div className="relative z-10">
        <nav className="bg-[#000B1C] border-b border-white/10">
          <div className="container mx-auto px-4 py-4 md:py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
              <Link href="/" className="flex items-center justify-center md:justify-start">
                <Image src="/logo.png" alt="Ainstal Logo" width={140} height={140} className="h-8 md:h-12 w-auto" />
              </Link>
              <div className="flex items-center justify-center md:justify-end space-x-4 md:space-x-8 pr-4">
                <Link href="/" className="text-white/80 text-sm md:text-base hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/blogs" className="text-white/80 text-sm md:text-base hover:text-white transition-colors">
                  Blog
                </Link>
                <Link
                  href="/pricing"
                  className={`text-white text-sm md:text-base hover:text-white transition-colors ${
                    pathname === "/pricing" ? "underline underline-offset-8" : ""
                  }`}
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
      </div>

      <section id="pricing" className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services & Pricing</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to transform your business at every level
            </p>
          </div>

          {pricingCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (categoryIndex + 1) }}
              className="mb-24"
            >
              <h3 className="text-3xl font-bold text-white mb-8 text-center">{category.title}</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {category.plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className={`relative bg-[#0A1628] rounded-xl border border-white/10 p-6 overflow-visible ${
                      plan.highlight ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <div className="p-8">
                      <h4 className="text-2xl font-semibold text-white mb-4">{plan.title}</h4>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        {plan.retainer && <div className="text-xs text-gray-400 mt-1">Retainer: {plan.retainer}</div>}
                      </div>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <svg viewBox="0 0 16 16" className="h-5 w-5 flex-none text-blue-500" fill="currentColor">
                              <path d="M8 0L10.2571 5.08359L16 5.81451L11.9428 9.71641L12.9428 15.1854L8 12.6L3.05719 15.1854L4.05719 9.71641L0 5.81451L5.74286 5.08359L8 0Z" />
                            </svg>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/#contact"
                        className={`block w-full py-3 px-4 text-center rounded-lg transition-colors ${
                          plan.highlight
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                    {plan.highlight && (
                      <div className="absolute -top-3 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                        Most Popular
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Chatbot />
      <Footer />
    </motion.main>
  )
}

