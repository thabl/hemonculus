"use client"

import { NavigationMenu } from "@/components/navigation-menu"

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="fixed inset-0 w-screen bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900 dark:to-blue-900 opacity-20 z-0 transition-colors duration-300"></div>
      <div className="relative z-10">
        <NavigationMenu />
        <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <span className="text-sm text-gray-500 dark:text-gray-400">beda@thabl.com</span>
        </main>
      </div>
    </div>
  )
}

