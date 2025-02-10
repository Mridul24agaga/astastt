"use client"

import type React from "react"
import { useState } from "react"

export function SimpleForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted", { name, message })
    // Reset form fields
    setName("")
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white border border-gray-300 rounded-lg">
      <div className="space-y-4 mb-6">
        <label htmlFor="name-field" className="block text-sm font-semibold text-gray-700">
          Name
        </label>
        <input
          id="name-field"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
        />
      </div>

      <div className="space-y-4 mb-6">
        <label htmlFor="message-field" className="block text-sm font-semibold text-gray-700">
          Message
        </label>
        <textarea
          id="message-field"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  )
}

