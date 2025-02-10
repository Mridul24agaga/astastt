"use client"

import { Star } from "lucide-react"
import Link from "next/link"

export default function AdditionalPricing() {
  return (
    <main  id="pricing" className="min-h-screen bg-[#020817]">
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="relative text-center mb-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Pricing</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our advanced AI solutions tailored for enterprise needs.
            </p>
          </div>
        </div>

        {/* Additional Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          

          {/* Full AI Content Suite */}
          <div className="bg-[#0A101F]/80 border border-white/10 rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:border-blue-500/50 hover:bg-[#0A101F]">
            <h3 className="text-xl font-semibold text-white mb-2">Full AI Content Suite</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$2,499</span>
              <span className="text-gray-400 ml-2">/month</span>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">40 Human Written blogs, SEO content & ads</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">AI-powered email campaigns & video scripts</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">Real-time AI content optimization</span>
              </div>
            </div>
            <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Get Started
            </button>
          </div>
          {/* Enterprise AI Assistant */}
          <div className="bg-[#0A101F]/80 border border-white/10 rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:border-blue-500/50 hover:bg-[#0A101F]">
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise AI Assistant</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$3,999+</span>
              <span className="text-gray-400 ml-2">180$/monthly</span>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">Fully customized AI assistant with advanced NLP</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">Sales automation & e-commerce recommendations</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">API Integration with CRM & analytics tools</span>
              </div>
            </div>
            <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          {/* Premium AI Website */}
          <div className="bg-[#0A101F]/80 border border-white/10 rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:border-blue-500/50 hover:bg-[#0A101F]">
            <h3 className="text-xl font-semibold text-white mb-2">Premium AI Website</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$4,999+</span>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">Unlimited pages & full-stack development</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">
                  Custom AI-powered features (personalized recommendations, automation)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">Full E-commerce, SaaS, or Enterprise solution</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">API Integrations & Advanced Automation</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">Full Admin Dashboard & CRM</span>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-300">1-on-1 Strategy Call & Premium Support</span>
              </div>
            </div>
            <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Button to see full pricing list */}
        <div className="mt-16 text-center">
          <Link
            href="/pricing"
            className="inline-block py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-lg font-normal"
          >
            See Full Pricing List
          </Link>
        </div>
      </div>
    </main>
  )
}

