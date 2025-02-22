"use client"

import { useState } from "react"
import { Users, FileText, Settings, Home, Video, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/provider-dashboard" },
  { icon: Video, label: "Clinic", href: "/provider-dashboard/clinic" },
  { icon: Users, label: "Patients", href: "/provider-dashboard/patients" },
  { icon: FileText, label: "Assistant", href: "/provider-dashboard/assistant" },
  { icon: Settings, label: "Settings", href: "/provider-dashboard/settings" },
]

export function ProviderDashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return (
    <div
      className={`flex flex-col h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}
    >
      <div className="relative h-[72px] border-b border-gray-200 dark:border-gray-700">
        <div className="absolute inset-0 flex justify-center items-center">
          {!isCollapsed && (
            <Link href="/" className="flex justify-center items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-red-500 to-blue-500 rounded-full">
                <div className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.03)] opacity-95"></div>
              </div>
            </Link>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full flex-shrink-0"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${isCollapsed ? "justify-center" : ""}`}
          >
            <item.icon className={`h-5 w-5 ${isCollapsed ? "" : "mr-3"}`} />
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Button variant="outline" className="w-full">
            Log Out
          </Button>
        </div>
      )}
    </div>
  )
}

