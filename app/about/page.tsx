"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
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
        <header className="pt-4 px-6 flex justify-between items-center">
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
          <div className="w-12 h-12"></div>
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

        <main className="container mx-auto px-4 py-12 mt-20">
          <div className="max-w-3xl mx-auto space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              About Us
            </h1>
            <section className="prose dark:prose-invert prose-lg mx-auto">
              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Welcome to Hemonculus, where we're transforming telemedicine into a powerful tool to fix healthcare's
                biggest challenges. As a physician-led initiative founded by a hematologist with a passion for patient
                care, we're here to put the focus back where it belongs: on the relationship between you—the patient—and
                your doctor. By leveraging cutting-edge artificial intelligence (AI) and a innovative clinic model,
                we're breaking down barriers, streamlining workflows, and empowering physicians to deliver the highest
                quality care with zero distractions.
              </p>
            </section>

            <section className="prose dark:prose-invert prose-lg mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Our Vision: A Better Healthcare Experience
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Healthcare today is bogged down by inefficiencies—endless paperwork, scheduling hassles, and
                administrative overload—that pull physicians away from what they do best: listening to patients,
                understanding their needs, and crafting personalized treatment plans. At Hemonculus, we believe that
                technology should serve people, not the other way around. Our mission is simple yet bold: automate the
                busywork so doctors can spend more time talking to you, truly hearing you, and providing care that makes
                a difference.
              </p>
            </section>

            <section className="prose dark:prose-invert prose-lg mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                The Innovation: AI Meets the Single Physician Clinic
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                What sets us apart is our pioneering approach—a modular, single-physician clinic model built from the
                ground up for medical subspecialties like hematology. Unlike traditional telemedicine platforms that
                juggle multiple providers and generic workflows, we've designed a system that's laser-focused on the
                unique needs of subspecialty care. Each clinic is a tailored, digital space where one physician oversees
                every aspect of your journey, supported by a team of AI agents working seamlessly behind the scenes.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

