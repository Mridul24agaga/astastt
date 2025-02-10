"use client"
import { InlineWidget } from "react-calendly"
import { SimpleForm } from "@/components/SimpleForm"

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      {/* Contact Content */}
      <div id="contact" className="container mx-auto px-4 py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="w-full">
            <SimpleForm />
          </div>

          {/* Calendly Embed */}
          <div className="w-full">
            <InlineWidget
              url="https://calendly.com/ainstalsolutions"
              styles={{
                height: "700px",
                minWidth: "320px",
              }}
              prefill={{}}
              pageSettings={{
                hideEventTypeDetails: false,
                hideLandingPageDetails: true,
                hideGdprBanner: true,
                primaryColor: "3182ce",
                textColor: "1a202c",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

