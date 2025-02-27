"use client"

import { useState } from "react"
import { Users, FileText, Settings, Home, Video, PanelLeft } from "lucide-react"
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
      className={`flex flex-col h-screen bg-white dark:bg-[#1a1625]/50 dark:backdrop-blur-sm border-r border-gray-200 dark:border-white/10 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="relative h-24 flex items-center justify-center">
        <div className="flex justify-center items-center">
          {!isCollapsed && (
            <Link href="/" className="flex items-center justify-center">
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
          )}
          {isCollapsed && (
            <Link href="/" className="flex items-center justify-center scale-75">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ring-gradient-collapsed" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <circle cx="24" cy="24" r="20" stroke="url(#ring-gradient-collapsed)" strokeWidth="4" fill="none" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 mt-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center px-4 py-2.5 text-gray-700 dark:text-[#f8f9fa] hover:bg-gray-100 dark:hover:bg-white/5 transition-colors ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <item.icon className={`h-5 w-5 ${isCollapsed ? "" : "mr-3"}`} />
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-white/10">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="mb-3 w-full flex items-center justify-center rounded-md bg-transparent hover:bg-gray-100/10 dark:hover:bg-white/5 dark:text-[#f8f9fa]"
          >
            <PanelLeft className="h-5 w-5" />
            <span className="ml-2">{isCollapsed ? "Expand" : "Collapse"} Sidebar</span>
          </Button>
          <Button
            variant="outline"
            className="w-full bg-transparent text-gray-700 dark:text-[#f8f9fa] border-gray-300 dark:border-white/20 hover:bg-gray-100/10 dark:hover:bg-white/5"
          >
            Log Out
          </Button>
        </div>
      )}

      {isCollapsed && (
        <div className="p-2 border-t border-gray-200 dark:border-white/10 flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="rounded-full flex-shrink-0 dark:text-[#f8f9fa]"
          >
            <PanelLeft className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

