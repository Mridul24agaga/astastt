import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { CustomButton } from "@/components/ui/button"
import Link from "next/link"

export default function AIHero() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image (hidden on mobile) */}
          <div className="relative h-[650px] w-full overflow-hidden hidden lg:block">
            <Image
              src="/h.png"
              alt="AI Vision"
              fill
              className="object-cover rounded-3xl shadow-xl shadow-blue-500/10"
              priority
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 lg:space-y-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-black">
              Accelerate Your Vision With{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
                AI-Driven Innovation.
              </span>
            </h1>

            <p className="text-black/70 text-lg sm:text-xl leading-relaxed max-w-2xl font-medium">
              Unlock new possibilities with our AI-powered solutions tailored to transform your business. From ideation
              to implementation, we bring your vision to life with intelligent, data-driven insights.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 sm:gap-y-8 sm:gap-x-12">
              {[
                "Enterprise ready",
                "Cost-Effectiveness",
                "Most advanced technology",
                "Startup friendly",
                "Cross-Platform AI",
                "Scalable solutions",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 group">
                  <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rotate-45 bg-[#2563EB] group-hover:scale-125 transition-transform" />
                  <span className="text-black/80 text-base sm:text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-6">
              <CustomButton className="group relative bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden">
                <Link href="/#contact" className="relative z-10 flex items-center">
                  Contact Us Today
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1E40AF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

