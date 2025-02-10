import type { Metadata } from "next"
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
import "./globals.css"
import type React from "react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ainstal.com"),
  title: {
    default: "Ainstal - AI-Powered Business Solutions",
    template: "%s | Ainstal",
  },
  description:
    "Revolutionize your business with Ainstal's AI-powered solutions. Boost efficiency, automate operations, and drive growth with cutting-edge technology.",
  keywords: ["AI", "business solutions", "automation", "efficiency", "growth", "technology"],
  authors: [{ name: "Ainstal Team" }],
  creator: "Ainstal",
  publisher: "Ainstal Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ainstal.com",
    siteName: "Ainstal",
    title: "Ainstal - AI-Powered Business Solutions",
    description:
      "Revolutionize your business with Ainstal's AI-powered solutions. Boost efficiency, automate operations, and drive growth.",
    images: [
      {
        url: "https://ainstal.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ainstal AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ainstal - AI-Powered Business Solutions",
    description:
      "Revolutionize your business with Ainstal's AI-powered solutions. Boost efficiency, automate operations, and drive growth.",
    images: ["https://ainstal.com/twitter-image.jpg"],
    creator: "@ainstal",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://ainstal.com",
    languages: {
      "en-US": "https://ainstal.com",
      "es-ES": "https://ainstal.com/es",
      "fr-FR": "https://ainstal.com/fr",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ainstal.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}

