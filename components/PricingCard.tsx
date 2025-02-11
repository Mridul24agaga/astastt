import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  features: string[]
  highlight?: boolean
}

export function PricingCard({ title, price, period, features, highlight }: PricingCardProps) {
  return (
    <div
      className={`relative bg-[#0A1628] rounded-xl border border-white/10 p-6 overflow-visible transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 ${
        highlight ? "ring-2 ring-blue-500" : ""
      }`}
    >
      <div className="p-8">
        <h4 className="text-2xl font-semibold text-white mb-4">{title}</h4>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          {period && <span className="text-gray-400 ml-2">{period}</span>}
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, featureIndex) => (
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
            highlight
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
        >
          Get Started
        </Link>
      </div>
      {highlight && (
        <div className="absolute -top-3 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          Most Popular
        </div>
      )}
    </div>
  )
}
