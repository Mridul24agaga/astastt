import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

// This is where you would store your website's content for the AI to reference
const websiteContent = `
Ainstal is a leading AI solutions provider offering cutting-edge chatbots, lead generation, and content automation services.

Our main services include:
1. AI Chatbots: We offer basic, advanced, and enterprise-level AI chatbots to enhance customer experience and automate support.
2. Lead Generation: Our AI-powered lead generation services help businesses increase sales through targeted outreach and automation.
3. Content Automation: We provide AI-driven content creation services, including blog writing, copywriting, and full content suites.

Pricing:
- AI Chatbots start at $499 + $35/month for basic plans, with advanced plans at $1,299 + $80/month, and enterprise solutions at $3,999 + $180/month.
- Lead Generation packages range from $999/month for starter plans to $5,999/month for ultimate AI growth solutions.
- Content Automation services start at $90 per article for AI blog writing, with comprehensive packages available up to $2,499/month for full AI content suites.

Our mission is to revolutionize businesses with AI, streamlining operations, boosting sales, and saving time effortlessly.
`

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    // Generate a response using the Gemini API
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })
    const prompt = `Based on the following information about our website, please answer the user's question: 

${websiteContent}

User question: ${message}

Please provide a concise and helpful answer based solely on the information provided above.`

    const result = await model.generateContent(prompt)
    const response = result.response.text()

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

