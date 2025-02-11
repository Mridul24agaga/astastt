"use client"

import { ArrowUpRight } from "lucide-react"

export default function WhatWeOffer() {
  return (
    <section className="min-h-screen bg-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#020817] text-center mb-8 md:mb-16">
          What We Offer
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {/* Website Development */}
          <div className="bg-[#0A101F] rounded-[24px] p-6 md:p-8 transition-all duration-300">
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <h3 className="text-[24px] md:text-[28px] leading-[30px] md:leading-[34px] font-medium text-white">
                Website
                <br />
                Development
              </h3>
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#4CC9F0]" />
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-8 md:mb-12">
                <img
                  src="/bud.png"
                  alt="AI Brain with Tech Stack"
                  className="w-36 h-36 md:w-48 md:h-48 object-contain"
                />
              </div>
              <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-wide text-gray-400 text-center">
                CUSTOM WEBSITES WITH AI-POWERED
                <br />
                FEATURES AND SEAMLESS USER EXPERIENCE
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-4 md:space-y-6">
            {/* AI Chatbot */}
            <div className="bg-[#0A101F] rounded-[24px] p-6 md:p-8 transition-all duration-300">
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <h3 className="text-[24px] md:text-[28px] leading-[30px] md:leading-[34px] font-medium text-white">
                  AI Chatbot
                </h3>
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#4CC9F0]" />
              </div>
              <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-wide text-gray-400 text-center">
                24/7 CUSTOMER SUPPORT WITH
                <br />
                INTELLIGENT CONVERSATION AI
              </p>
            </div>

            {/* Automation */}
            <div className="bg-[#0A101F] rounded-[24px] p-6 md:p-8 transition-all duration-300">
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <h3 className="text-[24px] md:text-[28px] leading-[30px] md:leading-[34px] font-medium text-white">
                  Automation
                </h3>
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#4CC9F0]" />
              </div>
              <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-wide text-gray-400 text-center">
                STREAMLINE YOUR BUSINESS WITH
                <br />
                AI-POWERED WORKFLOW
                <br />
                AUTOMATION
              </p>
            </div>
          </div>

          {/* Content & SEO */}
          <div className="bg-[#0A101F] rounded-[24px] p-6 md:p-8 transition-all duration-300">
            <div className="flex justify-between items-start mb-8 md:mb-12">
              <h3 className="text-[24px] md:text-[28px] leading-[30px] md:leading-[34px] font-medium text-white">
                Content
                <br />& SEO
              </h3>
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#4CC9F0]" />
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-8 md:mb-12">
                <img
                  src="/sh.png"
                  alt="AI Brain with Connections"
                  className="w-36 h-36 md:w-48 md:h-48 object-contain"
                />
              </div>
              <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-wide text-gray-400 text-center">
                RANK HIGHER ON GOOGLE WITH
                <br />
                AI-GENERATED SEO CONTENT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

