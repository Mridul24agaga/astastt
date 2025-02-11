"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Minus, Send, Bot } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
  type: "user" | "bot"
  content: string
}

const INITIAL_GREETING = "Hi there! 👋 Welcome to Ainstal AI Solutions."
const FOLLOW_UP_MESSAGE = "How can I help you transform your business with AI today?"

const PREDEFINED_OPTIONS = [
  "Tell me about your AI Chatbot solutions",
  "Explain your content automation services",
  "What are your pricing options?",
  "Can you show me some of your past work?",
]

const AI_RESPONSES = {
  chatbot:
    "Our AI Chatbots enhance customer experience by providing instant support, scheduling bookings, and engaging visitors 24/7. They're designed to boost efficiency and conversions effortlessly.",
  contentAutomation:
    "Our content automation service supercharges your online presence with AI-generated content optimized for SEO, engagement, and conversions. We can instantly generate blogs, sales copy, and more with AI precision.",
  pricing: `We offer various pricing options across different categories:

1. Websites & Applications:
   - Basic Website: $999 + $99/mo retainer
   - Advanced Website: $2,499 + $249/mo retainer
   - Advanced Dashboard: $3,499 + $349/mo retainer

2. AI Chatbots:
   - AI Chatbot: $499 + $35/mo retainer
   - Advanced AI Chatbot: $1,299 + $80/mo retainer
   - Enterprise AI Chatbot: $2,999 + $199/mo retainer

3. Content Automation:
   - Rank on Google: $99/mo
   - Social Media Ad Copy: $699/mo
   - Full Social Media Content Suite: $1,999/mo

Would you like more details on a specific plan or category?`,
  pastWork:
    "We've successfully completed projects for various clients including Venova Construction, AZ Shamrock Home Buyers, and Star State Roofing. Our portfolio showcases AI-powered solutions and custom web applications that have driven real business results for our clients.",
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, messagesEndRef])

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setTimeout(() => {
        setMessages([{ type: "bot", content: INITIAL_GREETING }])
        setTimeout(() => {
          setMessages((prev) => [...prev, { type: "bot", content: FOLLOW_UP_MESSAGE }])
          setHasGreeted(true)
        }, 1000)
      }, 500)
    }
  }, [isOpen, hasGreeted])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | string) => {
    if (typeof e !== "string") {
      e.preventDefault()
    }
    const userInput = typeof e === "string" ? e : input
    if (!userInput.trim()) return

    const userMessage: Message = { type: "user", content: userInput }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response based on user input
    let aiResponse =
      "I'm sorry, I don't have specific information about that. Can you try asking about our AI chatbots, content automation, pricing, past work, or our email contact?"

    if (userInput.toLowerCase().includes("chatbot")) {
      aiResponse = AI_RESPONSES.chatbot
    } else if (userInput.toLowerCase().includes("content automation")) {
      aiResponse = AI_RESPONSES.contentAutomation
    } else if (userInput.toLowerCase().includes("pricing") || userInput.toLowerCase().includes("price")) {
      aiResponse = AI_RESPONSES.pricing
    } else if (userInput.toLowerCase().includes("email") || userInput.toLowerCase().includes("contact")) {
      aiResponse = "You can reach us at ainstalsolutions@gmail.com for any inquiries or support."
    } else if (userInput.toLowerCase().includes("past work") || userInput.toLowerCase().includes("portfolio")) {
      aiResponse = AI_RESPONSES.pastWork
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", content: aiResponse }])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed ${
              isMobile ? "inset-2 top-auto" : "bottom-4 right-4 w-[400px]"
            } bg-white rounded-2xl shadow-2xl flex flex-col max-h-[600px] border border-gray-100 z-50`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-white">Ainstal AI Assistant</h2>
                  <p className="text-xs text-blue-100">Always here to help</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <Minus className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  key={index}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start items-start space-x-2"}`}
                >
                  {message.type === "bot" && (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none"
                        : "bg-white text-gray-700 rounded-bl-none"
                    }`}
                  >
                    <TypewriterText content={message.content} />
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-start space-x-2"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="max-w-[80%] p-4 rounded-2xl bg-white shadow-sm">
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                        className="w-2 h-2 bg-blue-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.2 }}
                        className="w-2 h-2 bg-blue-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.4 }}
                        className="w-2 h-2 bg-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Predefined Options */}
            {messages.length <= 2 && (
              <div className="p-4 space-y-2 bg-gray-50 border-t border-gray-100">
                {PREDEFINED_OPTIONS.map((option, index) => (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    key={index}
                    onClick={() => handleSubmit(option)}
                    className="w-full p-3 text-left text-sm text-gray-700 hover:bg-blue-50 rounded-xl transition-colors border border-gray-200 hover:border-blue-200"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className={`fixed ${
              isMobile ? "bottom-4 right-4" : "bottom-6 right-6"
            } w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group z-50`}
          >
            <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

function TypewriterText({ content }: { content: string }) {
  const [displayedContent, setDisplayedContent] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedContent((prev) => prev + content[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 25)
      return () => clearTimeout(timeout)
    }
  }, [content, currentIndex])

  useEffect(() => {
    setDisplayedContent("")
    setCurrentIndex(0)
  }, [content])

  return <div className="leading-relaxed whitespace-pre-line">{displayedContent}</div>
}

