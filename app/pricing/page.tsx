"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import PricingPlans from "@/components/pricing-plans"
import Link from "next/link"

export default function PricingPage() {
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
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900 dark:to-blue-900 opacity-20 z-0 transition-colors duration-300"></div>
      <div className="relative z-10">
        <header className="py-4 px-6 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-red-500 to-blue-500 rounded-full">
              <div className="w-6 h-6 bg-gradient-to-br from-white to-white/70 dark:from-gray-900 dark:to-gray-900 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.03)] opacity-95"></div>
            </div>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full transition-colors duration-300 bg-transparent hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="h-5 w-5 text-gray-100" /> : <Moon className="h-5 w-5" />}
          </Button>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your healthcare needs
            </p>
          </div>
          <PricingPlans />
        </div>
      </div>
    </div>
  )
}

