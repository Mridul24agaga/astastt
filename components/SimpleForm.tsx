"use client"

import type React from "react"
import { useState } from "react"

export function SimpleForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    const formData = new FormData()
    formData.append("access_key", "2ca0470a-2a84-4e00-b87a-15f7f2d10f45") // Replace with your actual access key
    formData.append("name", name)
    formData.append("email", email)
    formData.append("message", message)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()
      if (result.success) {
        setStatus("Thank you for your submission!")
        // Reset form fields
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("There was an error. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setStatus("There was an error. Please try again.")
    }
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
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 text-black"
        />
      </div>

      <div className="space-y-4 mb-6">
        <label htmlFor="email-field" className="block text-sm font-semibold text-gray-700">
          Email
        </label>
        <input
          id="email-field"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 text-black"
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
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none text-black"
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
      >
        Send Message
      </button>

      {status && <p className="mt-4 text-center text-sm font-medium text-gray-700">{status}</p>}
    </form>
  )
}

