"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"

const blogPosts = [
  {
    id: 1,
    title: "7 AI Chatbot Benefits for Small Business Growth",
    excerpt:
      "Explore how AI chatbots can transform customer interactions, improve efficiency, and fuel small business growth.",
    date: "December 15, 2024",
    image: "/11.jpg",
    slug: "7-ai-chatbot-benefits-for-small-business-growth",
  },
  {
    id: 2,
    title: "How to Automate Lead Generation: A Step-by-Step Guide",
    excerpt:
      "Learn practical strategies and tools for automating lead generation, saving time, and increasing conversions.",
    date: "December 14, 2024",
    image: "/12.jpg",
    slug: "how-to-automate-lead-generation-step-by-step",
  },
  {
    id: 3,
    title: "CRM vs ERP: Which System Best Fits Your Business?",
    excerpt:
      "Understand the differences between CRM and ERP systems, and choose the right solution for your business needs.",
    date: "December 10, 2024",
    image: "/14.webp",
    slug: "crm-vs-erp-which-system-fits-the-most",
  },
  {
    id: 4,
    title: "5 Ways AI Content Automation Saves Time and Money",
    excerpt:
      "Discover how AI-driven content automation can help businesses save time, reduce costs, and improve content strategies.",
    date: "December 9, 2024",
    image: "/15.webp",
    slug: "5-ways-ai-content-automation-saves-your-time",
  },
  {
    id: 5,
    title: "Business Dashboard Setup: Essential Steps for Beginners",
    excerpt: "Learn how to set up a powerful business dashboard from scratch, with actionable steps for beginners.",
    date: "December 8, 2024",
    image: "/17.jpg",
    slug: "business-dashboard-step-essential-steps-for-beginners",
  },
]

export default function BlogPage() {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#020817]">
      {/* Navigation */}
      <nav className="bg-[#000B1C] border-b border-white/10">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
            <Link href="/" className="flex items-center justify-center md:justify-start">
              <Image src="/logo.png" alt="Ainstal Logo" width={140} height={140} className="h-8 md:h-12 w-auto" />
            </Link>
            <div className="flex items-center justify-center md:justify-end space-x-4 md:space-x-8 pr-4">
              <Link href="/" className="text-white text-sm md:text-base hover:text-white transition-colors">
                Home
              </Link>
              <Link
                href="/blogs"
                className={`text-white text-sm md:text-base hover:text-white transition-colors ${
                  pathname === "/blogs" ? "underline underline-offset-8" : ""
                }`}
              >
                Blog
              </Link>
              <Link href="/pricing" className="text-white/80 text-sm md:text-base hover:text-white transition-colors">
                Prices
              </Link>
              <Link href="/#contact" className="text-white/80 text-sm md:text-base hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Latest Articles</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="relative h-48 md:h-56 lg:h-64">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

