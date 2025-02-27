"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Settings, Beaker, Activity, Pill, Brain, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(0)

  // Define categorized settings
  const settingsCategories = [
    {
      name: "Laboratory & Diagnostics",
      icon: <Beaker size={16} />,
      subcategories: [
        {
          name: "Lab Display",
          settings: [
            { id: 1, name: "Default lab value display units (SI vs. conventional)" },
            { id: 3, name: "Preferred CBC parameter display order" },
            { id: 29, name: "Trending lab value display interval (7-day, 30-day, 90-day)" },
          ],
        },
        {
          name: "Specialized Tests",
          settings: [
            { id: 4, name: "Flow cytometry report format preference" },
            { id: 5, name: "Bone marrow biopsy report template selection" },
            { id: 37, name: "Coagulation panel display preferences" },
            { id: 39, name: "Hemoglobinopathy screening protocol options" },
          ],
        },
        {
          name: "Alerts & Thresholds",
          settings: [
            { id: 2, name: "Critical lab value thresholds (customizable by provider)" },
            { id: 35, name: "Transfusion threshold parameters by patient type" },
            { id: 38, name: "Bleeding risk assessment tool selection" },
          ],
        },
      ],
    },
    {
      name: "Patient Settings",
      icon: <Activity size={16} />,
      subcategories: [
        {
          name: "Appointments & Scheduling",
          settings: [
            { id: 6, name: "Default appointment duration for new patients" },
            { id: 7, name: "Default appointment duration for follow-ups" },
            { id: 8, name: "Buffer time between appointments" },
            { id: 9, name: "Automatic follow-up scheduling intervals by diagnosis" },
            { id: 10, name: "Late patient handling policy" },
            { id: 11, name: "No-show management protocol" },
          ],
        },
        {
          name: "Documentation & Templates",
          settings: [
            { id: 12, name: "Default note templates by diagnosis category" },
            { id: 13, name: "Voice recognition preferences" },
            { id: 14, name: "Signature line configuration" },
            { id: 15, name: "Default patient instructions by procedure type" },
            { id: 36, name: "Stem cell transplant protocol checklist customization" },
          ],
        },
        {
          name: "Communication",
          settings: [
            { id: 16, name: "Language preferences for patient communications" },
            { id: 17, name: "Automatic translation services toggle" },
            { id: 18, name: "Patient portal message templates" },
            { id: 19, name: "Video quality settings (bandwidth management)" },
          ],
        },
      ],
    },
    {
      name: "Medications & Treatments",
      icon: <Pill size={16} />,
      subcategories: [
        {
          name: "Medication Management",
          settings: [
            { id: 21, name: "Default pharmacy for electronic prescriptions" },
            { id: 22, name: "Medication reconciliation reminder frequency" },
          ],
        },
        {
          name: "Treatment Protocols",
          settings: [
            { id: 20, name: "Preferred chemotherapy protocol display format" },
            { id: 23, name: "Standing order templates by diagnosis" },
            { id: 24, name: "Treatment protocol reference display options" },
          ],
        },
      ],
    },
    {
      name: "Clinical Decision Support",
      icon: <Brain size={16} />,
      subcategories: [
        {
          name: "Risk Assessment",
          settings: [
            { id: 25, name: "Risk calculator integration preferences" },
            { id: 26, name: "Drug interaction alert sensitivity" },
          ],
        },
        {
          name: "Advanced Support",
          settings: [
            { id: 27, name: "Clinical pathway integration options" },
            { id: 28, name: "AI diagnostic suggestion visibility toggle" },
          ],
        },
      ],
    },
    {
      name: "Security & Permissions",
      icon: <Shield size={16} />,
      subcategories: [
        {
          name: "Security Settings",
          settings: [
            { id: 30, name: "Session timeout duration" },
            { id: 31, name: "Two-factor authentication settings" },
          ],
        },
        {
          name: "Access & Compliance",
          settings: [
            { id: 32, name: "Audit log visibility options" },
            { id: 33, name: "Patient record access permissions" },
            { id: 34, name: "Data export format preferences" },
          ],
        },
      ],
    },
  ]

  const [expandedSubcategories, setExpandedSubcategories] = useState(() => {
    // Initialize all subcategories as expanded
    const initial = {}
    settingsCategories.forEach((category, categoryIndex) => {
      category.subcategories.forEach((_, subcategoryIndex) => {
        initial[`${categoryIndex}-${subcategoryIndex}`] = true
      })
    })
    return initial
  })

  const toggleSubcategory = (categoryIndex, subcategoryIndex) => {
    const key = `${categoryIndex}-${subcategoryIndex}`
    setExpandedSubcategories((prev) => ({
      ...prev,
      [key]: !(prev[key] ?? true), // Default to true if undefined
    }))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-[#f8f9fa] mb-6">Settings</h1>

      <div className="flex h-[calc(100vh-200px)] overflow-hidden bg-white/50 dark:bg-[#1a1625]/30 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-white/10">
        {/* Settings sidebar */}
        <div className="w-64 bg-white/80 dark:bg-[#1a1625]/50 border-r border-gray-200/50 dark:border-white/10 overflow-y-auto">
          <div className="p-3 border-b border-gray-200/50 dark:border-white/10">
            <h2 className="text-base font-semibold text-gray-700 dark:text-[#f8f9fa] flex items-center">
              <Settings size={16} className="mr-2 text-red-500 dark:text-blue-400" />
              Categories
            </h2>
          </div>

          <nav className="p-1.5">
            {settingsCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-1">
                <button
                  className={`flex items-center w-full px-2.5 py-1.5 text-left text-sm font-medium rounded-md transition-colors ${
                    activeTab === categoryIndex
                      ? "bg-gradient-to-r from-red-100 to-blue-100 dark:from-red-900/30 dark:to-blue-900/30 text-gray-800 dark:text-[#f8f9fa]"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/5"
                  }`}
                  onClick={() => setActiveTab(categoryIndex)}
                >
                  <span className={`mr-2 ${activeTab === categoryIndex ? "text-red-500 dark:text-blue-400" : ""}`}>
                    {category.icon}
                  </span>
                  <span>{category.name}</span>
                </button>
              </div>
            ))}
          </nav>
        </div>

        {/* Main content area */}
        <div className="flex-1 overflow-y-auto p-6">
          {settingsCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={activeTab === categoryIndex ? "block" : "hidden"}>
              <div className="flex items-center mb-4">
                <span className="mr-2 p-1.5 bg-gradient-to-r from-red-100 to-blue-100 dark:from-red-900/30 dark:to-blue-900/30 rounded-full text-red-500 dark:text-blue-400">
                  {category.icon}
                </span>
                <h2 className="text-base font-semibold text-gray-700 dark:text-[#f8f9fa]">{category.name} Settings</h2>
              </div>

              <div className="grid gap-6">
                {category.subcategories.map((subcategory, subcategoryIndex) => {
                  const isExpanded = expandedSubcategories[`${categoryIndex}-${subcategoryIndex}`] !== false
                  return (
                    <Card
                      key={subcategoryIndex}
                      className="bg-white/5 dark:bg-white/5 border-gray-200/50 dark:border-white/10 overflow-hidden backdrop-blur-sm"
                    >
                      <button
                        className="flex items-center justify-between w-full p-3 text-left font-medium border-b border-gray-200/50 dark:border-white/10 focus:outline-none"
                        onClick={() => toggleSubcategory(categoryIndex, subcategoryIndex)}
                      >
                        <span className="text-sm text-gray-700 dark:text-[#f8f9fa]">{subcategory.name}</span>
                        {isExpanded ? (
                          <ChevronDown size={14} className="text-gray-500 dark:text-gray-400" />
                        ) : (
                          <ChevronRight size={14} className="text-gray-500 dark:text-gray-400" />
                        )}
                      </button>

                      {isExpanded && (
                        <CardContent className="p-3 divide-y divide-gray-100 dark:divide-gray-700">
                          {subcategory.settings.map((setting) => (
                            <div key={setting.id} className="py-2 flex items-center justify-between">
                              <div className="text-sm text-gray-700 dark:text-gray-300">{setting.name}</div>
                              <button className="text-xs p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                <ChevronRight size={14} />
                              </button>
                            </div>
                          ))}
                        </CardContent>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

