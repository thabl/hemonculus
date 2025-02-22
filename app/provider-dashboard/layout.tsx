"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProviderDashboardSidebar } from "./components/provider-dashboard-sidebar"
import type React from "react"

export default function ProviderDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
    <div className="flex h-screen bg-gray-100 dark:bg-gradient-to-br dark:from-[#1a1625] dark:to-[#0f172a] transition-colors duration-300">
      <ProviderDashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-[#1a1625]/50 dark:backdrop-blur-sm transition-colors duration-300">
          <div className="pt-4 px-6 flex justify-between items-center">
            <div className="w-12 h-12"></div>
            <div className="w-12 h-12"></div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full transition-colors duration-300 bg-transparent hover:bg-white/5"
            >
              {darkMode ? <Sun className="h-5 w-5 text-[#f8f9fa]" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8 bg-white dark:bg-[#1a1625]/50 dark:backdrop-blur-sm scrollable-container">
          {children}
        </main>
      </div>
    </div>
  )
}

