"use client"

import { NavigationMenu } from "@/components/navigation-menu"

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="fixed inset-0 w-screen bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900 dark:to-blue-900 opacity-20 z-0 transition-colors duration-300"></div>
      <div className="relative z-10">
        <NavigationMenu />
        <main className="container mx-auto px-4 py-12 mt-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Contact Beda
            </h1>

            <div className="text-center -mt-8">
              <button className="px-4 py-2 transition-colors duration-300 border border-gray-200 dark:border-gray-700 rounded-full hover:border-gray-300 dark:hover:border-gray-600">
                <span className="text-sm text-gray-500 dark:text-gray-400">beda@thabl.com</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

