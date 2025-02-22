"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import TriageChat from "./components/triage-chat"

export default function TriagePage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check localStorage and system preference on mount
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)

    setDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    document.documentElement.classList.toggle("dark", newDarkMode)
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900 dark:to-blue-900 opacity-20 z-0 transition-colors duration-300"></div>
      <div className="relative z-10">
        {/* Header */}
        <header className="py-4 px-6 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"
          >
            <div className="w-6 h-6 bg-gradient-to-br from-white to-white/70 rounded-full shadow-inner"></div>
            <span className="text-lg font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Hemonculus
            </span>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Hematology Symptom Checker
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Get an initial assessment of your symptoms and guidance on next steps.
              </p>
              <p className="text-sm text-muted-foreground">
                Note: This is not a replacement for professional medical care.
              </p>
            </div>

            {/* Chat Interface */}
            <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
                <TriageChat />
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="rounded-lg border bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-4">
                  <h3 className="font-semibold mb-2">Emergency Alert</h3>
                  <p className="text-sm text-muted-foreground">
                    If you're experiencing a medical emergency, please call 911 or go to the nearest emergency room
                    right away.
                  </p>
                </div>

                <div className="rounded-lg border bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-4">
                  <h3 className="font-semibold mb-2">How to Use</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Describe your symptoms in detail</li>
                    <li>• Answer any follow-up questions we ask</li>
                    <li>• Get personalized guidance for your hematology care</li>
                    <li>• Follow our recommendations to connect with our experts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

