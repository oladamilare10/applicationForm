import React, { useState, useRef, useEffect } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi'
import { ImSpinner2 } from 'react-icons/im'
import './AiChat.css'

const AiChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm your AI Assistant. I can help you with:\n- Information about our company\n- Details about our 3 available positions\n- Assistance filling out your application form\n\nWhat would you like to know?",
      sender: 'bot'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const genAI = useRef(null)

  useEffect(() => {
    // Initialize Gemini API
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY || 'AIzaSyAZeFlCmRXi8diy2Xu5qTCiG2ES6Lt2A_E' // Placeholder
    genAI.current = new GoogleGenerativeAI(apiKey)
  }, [])

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const companyContext = `
    You are a helpful AI assistant for a company's recruitment portal. You have knowledge about:
    
    COMPANY INFORMATION:
    - Professional and innovative organization
    - Focus on flexibility and remote work
    - Strong support for part-time professionals
    - Commitment to employee growth and development
    
    AVAILABLE POSITIONS (All Part-Time & Remote):
    1. Financial Clerk
       - Type: Part-Time, Remote
       - Responsibilities: Processing financial transactions, managing accounts, recording payments, reconciling statements
       - Requirements: Strong numerical skills, attention to detail, basic accounting knowledge helpful
       - Skills: Data entry, Excel, financial record-keeping, organization, accuracy
       - Why Join: Flexible hours, work from home, stable income
    
    2. Virtual Assistant
       - Type: Part-Time, Remote
       - Responsibilities: Email management, scheduling, administrative support, customer communication, data management
       - Requirements: Excellent communication skills, organizational abilities, reliability
       - Skills: Organization, communication, customer service, time management, multitasking
       - Why Join: Flexible schedule, diverse tasks, work-life balance
    
    3. Shopping Assistant
       - Type: Part-Time, Remote
       - Responsibilities: Product research, customer service, assisting with online shopping inquiries, recommendations
       - Requirements: Good communication skills, product knowledge, customer-focused approach
       - Skills: Customer service, product knowledge, communication, research, problem-solving
       - Why Join: Flexible hours, help customers, remote flexibility
    
    When users ask about application form assistance, help them understand:
    - What information to provide
    - How to fill each section
    - Tips for strong applications
    - Common mistakes to avoid
    - Requirements for part-time remote work
    
    Always be professional, helpful, and encouraging. Provide concise answers.
  `

  const handleSendMessage = async (e) => {
    e.preventDefault()
    
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user'
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const model = genAI.current.getGenerativeModel({ model: 'gemini-2.5-flash' })
      
      const chat = model.startChat({
        history: []
      })

      const response = await chat.sendMessage(
        `${companyContext}\n\nUser Question: ${input}`
      )

      const botMessage = {
        id: Date.now() + 1,
        text: response.response.text(),
        sender: 'bot'
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      
      // Fallback response if API fails
      const fallbackMessage = {
        id: Date.now() + 1,
        text: `I'm having trouble connecting to the AI service. Please try again or contact our support team.`,
        sender: 'bot'
      }
      setMessages(prev => [...prev, fallbackMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat Widget */}
      <div className="ai-chat-widget">
        {/* Toggle Button */}
        <button
          className="ai-chat-toggle"
          onClick={() => setIsOpen(!isOpen)}
          title="Open AI Assistant"
        >
          {isOpen ? <FiX size={24} /> : <div><span className="ai-chat-badge" style={{fontWeight: 'bold'}}>AI </span><FiMessageSquare size={24} /></div>}
        </button>

        {/* Chat Box */}
        {isOpen && (
          <div className="ai-chat-box">
            {/* Header */}
            <div className="ai-chat-header">
              <h3>AI Assistant</h3>
              <button
                className="close-btn"
                onClick={() => setIsOpen(false)}
                title="Close chat"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="ai-chat-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`ai-message ${msg.sender}`}
                >
                  <div className="message-content">
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="ai-message bot">
                  <div className="message-content loading">
                    <ImSpinner2 className="spinner" />
                    <span>Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form className="ai-chat-input-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Ask anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                className="ai-chat-input"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="ai-chat-send-btn"
                title="Send message"
              >
                <FiSend size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default AiChat
