"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { LoginForm } from "@/components/login-form"
import { NavigationMenu } from "@/components/navigation-menu"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [userType, setUserType] = useState<"Patient" | "Provider">("Patient")
  const router = useRouter()

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

  const handleLogin = (email: string, password: string, remember: boolean) => {
    console.log(`${userType} login:`, { email, password, remember })
    // In a real app, this would authenticate the user and redirect to the appropriate dashboard
    if (userType === "Provider") {
      router.push("/provider-dashboard")
    } else {
      router.push("/patients")
    }
  }

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="fixed inset-0 w-screen bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900 dark:to-blue-900 opacity-20 z-0 transition-colors duration-300"></div>
      <div className="relative z-10">
        <NavigationMenu />

        <main className="container mx-auto px-4 py-12 mt-20 flex items-center justify-center">
          <Card className="w-full max-w-md bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 shadow-lg p-8 rounded-2xl">
            <div className="mb-8">
              <div className="flex justify-center">
                <div className="inline-flex rounded-lg p-1 bg-gray-100 dark:bg-gray-800">
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      userType === "Patient"
                        ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    }`}
                    onClick={() => setUserType("Patient")}
                  >
                    Patient Login
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      userType === "Provider"
                        ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    }`}
                    onClick={() => setUserType("Provider")}
                  >
                    Provider Login
                  </button>
                </div>
              </div>
            </div>

            <LoginForm userType={userType} onSubmit={handleLogin} />
          </Card>
        </main>
      </div>
    </div>
  )
}

