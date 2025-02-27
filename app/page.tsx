"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
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
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="fixed inset-0 w-screen bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900 dark:to-blue-900 opacity-20 z-0 transition-colors duration-300"></div>
      <div className="relative z-10">
        <header className="pt-4 px-6 flex justify-between items-center relative">
          <Link href="/" className="flex items-center">
            <span className="relative text-xl font-bold text-gray-900 dark:text-white px-4 py-2 rounded-full transition-colors">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-blue-600 opacity-100"></span>
              <span className="absolute inset-[2px] rounded-full bg-white dark:bg-gray-900"></span>
              <span className="relative">Hemonculus</span>
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/triage"
                className="text-sm text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Triage
              </Link>
              <Link
                href="/pricing"
                className="text-sm text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="text-sm text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Login
              </Link>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 pb-3 text-center bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            Hematology care, reimagined
          </h1>
          <p className="text-xl mb-12 max-w-2xl text-center">
            Connect with top hematologists from the comfort of your home. Expert care at your fingertips, powered by
            cutting-edge telemedicine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              className="group relative rounded-full text-lg px-8 py-6 border-0 transition-colors duration-300"
              asChild
            >
              <Link href="/patients">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-purple-500"></span>
                <span className="absolute inset-[2px] rounded-full bg-white dark:bg-gray-900 transition-colors duration-300"></span>
                <span className="relative">
                  For Patients
                  <ChevronRight className="ml-2 h-5 w-5 inline" />
                </span>
              </Link>
            </Button>
            <Button
              variant="outline"
              className="group relative rounded-full text-lg px-8 py-6 border-0 transition-colors duration-300"
              asChild
            >
              <Link href="/provider-dashboard">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
                <span className="absolute inset-[2px] rounded-full bg-white dark:bg-gray-900 transition-colors duration-300"></span>
                <span className="relative">
                  For Providers
                  <ChevronRight className="ml-2 h-5 w-5 inline" />
                </span>
              </Link>
            </Button>
          </div>
        </main>

        <footer className="absolute bottom-0 left-0 right-0 py-4 px-6 text-center text-sm">
          <span>&copy; 2025 HemaConnect. All rights reserved.</span>
        </footer>
      </div>
    </div>
  )
}

