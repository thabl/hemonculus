"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, AlertTriangle } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
  severity?: string
  matched_symptoms?: string[]
}

const getSeverityColor = (severity: string) => {
  switch (severity?.toUpperCase()) {
    case "EMERGENCY":
      return "text-red-500 dark:text-red-400"
    case "URGENT":
      return "text-orange-500 dark:text-orange-400"
    case "CONCERNING":
      return "text-yellow-500 dark:text-yellow-400"
    default:
      return "text-green-500 dark:text-green-400"
  }
}

export default function TriageChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    try {
      setIsLoading(true)
      // Add user message
      const userMessage: Message = { role: "user", content: input }
      setMessages((prev) => [...prev, userMessage])
      setInput("")

      // Send to API
      const response = await fetch("http://localhost:8000/triage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      })

      const data = await response.json()

      // Add assistant message
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
        severity: data.severity,
        matched_symptoms: data.matched_symptoms,
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error:", error)
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, there was an error processing your request. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="flex flex-col h-[600px] bg-transparent">
      <ScrollArea className="flex-1 p-4 scrollable-container">
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground p-4">Describe your symptom in detail</div>
          )}
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  message.role === "user"
                    ? "bg-blue-100 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100"
                    : "bg-white/50 dark:bg-gray-900/50"
                }`}
              >
                {message.severity && (
                  <div className={`flex items-center gap-2 font-bold mb-2 ${getSeverityColor(message.severity)}`}>
                    <AlertTriangle className="h-4 w-4" />
                    <span>{message.severity}</span>
                  </div>
                )}
                {message.matched_symptoms && message.matched_symptoms.length > 0 && (
                  <div className="text-sm text-muted-foreground mb-2">
                    Symptoms detected: {message.matched_symptoms.join(", ")}
                  </div>
                )}
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <CardContent className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            sendMessage()
          }}
          className="flex gap-2"
        >
          <Input
            placeholder="How can I help you today?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="relative group overflow-hidden rounded-full hover:scale-105 transition-all duration-200"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-90 group-hover:opacity-100 transition-all duration-200"></span>
            <span className="relative">
              <Send className="h-4 w-4 text-white" />
            </span>
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

