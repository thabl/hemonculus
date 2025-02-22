"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function NavigationMenu() {
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
    <header className="pt-4 px-6 flex justify-between items-center relative">
      <div className="w-12 h-12"></div>
      <Link href="/" className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-20">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ring-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="20" stroke="url(#ring-gradient)" strokeWidth="4" fill="none" />
        </svg>
      </Link>
      <div className="flex items-center space-x-6">
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/triage" className="text-sm hover:text-red-600 dark:hover:text-red-400 transition-colors">
            Triage
          </Link>
          <Link href="/pricing" className="text-sm hover:text-red-600 dark:hover:text-red-400 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm hover:text-red-600 dark:hover:text-red-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:text-red-600 dark:hover:text-red-400 transition-colors">
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  )
}

