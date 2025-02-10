"use client"

import Link from "next/link"
import Image from "next/image"

export default function Solutions() {
  return (
    <main className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section id="solutions" className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-6">AI Automation Solutions</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI automation. From intelligent chatbots to seamless lead
            generation and content creation, we integrate AI-driven solutions that save time, boost efficiency, and
            maximize growth—effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="group">
            <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3] relative">
              <Image
                src="/chatbot.jpg"
                alt="AI Chatbot Interface"
                width={800}
                height={600}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">AI Chatbots</h3>
            <p className="text-gray-600">
              Enhance customer experience with AI-driven chatbots that provide instant support, schedule bookings, and
              engage visitors 24/7, boosting efficiency and conversions effortlessly.
            </p>
          </div>

          <div className="group">
            <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3] relative">
              <Image
                src="/som.webp"
                alt="Lead Generation Visualization"
                width={800}
                height={600}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Lead Generation</h3>
            <p className="text-gray-600">
              Increase sales with AI-powered lead qualification and automated outreach. Our smart systems identify and
              convert high-value prospects, so you can focus on closing deals.
            </p>
          </div>

          <div className="group">
            <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3] relative">
              <Image
                src="/conten.jpeg"
                alt="Content Automation Dashboard"
                width={800}
                height={600}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Content Automation</h3>
            <p className="text-gray-600">
              Supercharge your online presence with AI-generated content that's optimized for SEO, engagement, and
              conversions. Generate blogs, sales copy, and more instantly with AI precision.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

