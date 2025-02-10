import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#000B1C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image src="/logo.png" alt="Ainstal Logo" width={140} height={140} className="h-12 w-auto mb-4" />
            <p className="text-sm text-gray-400 mt-2">
              Ainstal is a leading AI solutions provider, offering cutting-edge chatbots, lead generation, and content
              automation services to revolutionize your business.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Now</h3>
            <p className="text-sm text-gray-400">
              Email:{" "}
              <a href="mailto:ainstalsolutions@gmail.com" className="hover:text-white transition-colors">
              ainstalsolutions@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Ainstal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

