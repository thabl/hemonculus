"use client"

import { useState, useEffect } from "react"
import PricingPlans from "./components/pricing-plans"
import { NavigationMenu } from "@/components/navigation-menu"

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
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 relative">
      <div className="fixed inset-0 w-screen bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900 dark:to-blue-900 opacity-20 z-0 transition-colors duration-300"></div>
      <div className="relative z-10">
        <NavigationMenu />

        <div className="container mx-auto px-4 py-12 mt-20">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 pb-2 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
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

