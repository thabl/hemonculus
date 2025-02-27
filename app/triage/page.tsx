"use client"

import { NavigationMenu } from "@/components/navigation-menu"
import TriageChat from "./components/triage-chat"

export default function TriagePage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="fixed inset-0 w-screen bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900 dark:to-blue-900 opacity-20 z-0 transition-colors duration-300"></div>
      <div className="relative z-10">
        <NavigationMenu />

        <main className="w-full max-w-7xl mx-auto px-4 py-12 mt-20">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 pb-3 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Symptom Checker
            </h1>
            <p className="text-lg text-muted-foreground">
              Get an initial assessment of your symptoms and guidance on next steps.
            </p>
            <p className="text-sm text-muted-foreground">
              Note: This is not a replacement for professional medical care.
            </p>
          </div>

          {/* Centered Chat Interface */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
              <TriageChat />
            </div>
          </div>

          {/* Info Cards at Bottom */}
          <div className="max-w-3xl mx-auto grid gap-4">
            <div className="rounded-lg border bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-4">
              <h3 className="font-semibold mb-2">Emergency Alert</h3>
              <p className="text-sm text-muted-foreground">
                If you're experiencing a medical emergency, please call 911 or go to the nearest emergency room right
                away.
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
        </main>
      </div>
    </div>
  )
}

