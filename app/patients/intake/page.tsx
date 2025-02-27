"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ChevronLeft, Moon, Sun, ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { PersonalInfoForm } from "./components/personal-info-form"
import { MedicalInfoForm } from "./components/medical-info-form"
import { SuccessMessage } from "./components/success-message"
import { ProgressBar } from "./components/progress-bar"
import { VoiceAssistant } from "@/components/voice-assistant"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PatientIntakeForm() {
  const searchParams = useSearchParams()
  const reasonFromUrl = searchParams.get("reason")

  const [darkMode, setDarkMode] = useState(false)
  const [step, setStep] = useState(1)
  const [voiceAssistantActive, setVoiceAssistantActive] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    gender: "",
    insuranceProvider: "",
    policyNumber: "",
    reasonForConsult: reasonFromUrl || "",
    otherReason: "",
    briefDescription: "",
    primaryCarePhysician: "",
    currentMedications: "",
    allergies: "",
    previousHematologyHistory: false,
    consentToTreatment: false,
    hipaaAcknowledgment: false,
  })

  useEffect(() => {
    // Check localStorage and system preference on mount
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)

    setDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  useEffect(() => {
    // Set reason from URL if available
    if (reasonFromUrl) {
      console.log("Original reason from URL:", reasonFromUrl)
      // Map common URL parameter formats to the expected form values
      const reasonMap = {
        anemia: "anemia",
        polycythemia: "polycythemia",
        leukopenia: "leukopenia",
        leukocytosis: "leukocytosis",
        thrombocytopenia: "thrombocytopenia",
        thrombocytosis: "thrombocytosis",
        "bleeding-or-easy-bruising": "bleeding",
        "clotting-disorders": "clotting",
        genetics: "genetics",
        "indolent-hematologic-malignancies": "malignancies",
        other: "other",
      }

      // Get the mapped value or use the original
      const mappedReason = reasonMap[reasonFromUrl] || reasonFromUrl

      setFormData((prev) => ({
        ...prev,
        reasonForConsult: mappedReason,
      }))
    }
  }, [reasonFromUrl])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    document.documentElement.classList.toggle("dark", newDarkMode)
    localStorage.setItem("theme", newDarkMode ? "dark" : "light")
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value === "true" ? true : value === "false" ? false : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData)
    setStep(3) // Move to confirmation step
  }

  const handleVoiceData = (processedData) => {
    setFormData((prev) => ({
      ...prev,
      ...processedData,
    }))
  }

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="fixed inset-0 w-screen bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900 dark:to-blue-900 opacity-20 z-0 transition-colors duration-300"></div>
      <div className="relative z-10">
        <header className="pt-4 px-6 flex justify-between items-center relative">
          <Link href="/patients" className="flex items-center space-x-2">
            <ChevronLeft className="h-5 w-5" />
            <span>Back to Referral Portal</span>
          </Link>
          <div className="flex-1"></div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-sm hover:text-red-600 dark:hover:text-red-400 transition-colors p-0 h-auto font-normal"
                >
                  Login <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                <DropdownMenuItem className="focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer">
                  <Link href="/login/patient" className="w-full">
                    Patient Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer">
                  <Link href="/login/provider" className="w-full">
                    Provider Login
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 mt-20">
          <Card className="max-w-3xl mx-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 shadow-lg">
            <div className="p-6 relative">
              {/* Voice Assistant - Hidden but functional */}
              <VoiceAssistant
                onDataProcessed={handleVoiceData}
                isActive={voiceAssistantActive}
                setIsActive={setVoiceAssistantActive}
              />

              <div className="mb-8">
                <div className="flex items-center justify-center mb-6">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                    Patient Intake Form
                  </h1>
                </div>

                <ProgressBar currentStep={step} totalSteps={2} />
              </div>

              {step === 1 && (
                <PersonalInfoForm
                  formData={formData}
                  handleChange={handleChange}
                  handleSelectChange={handleSelectChange}
                  onNext={() => setStep(2)}
                />
              )}

              {step === 2 && (
                <MedicalInfoForm
                  formData={formData}
                  handleChange={handleChange}
                  handleSelectChange={handleSelectChange}
                  onBack={() => setStep(1)}
                  onSubmit={handleSubmit}
                  setVoiceAssistantActive={setVoiceAssistantActive}
                />
              )}

              {step === 3 && <SuccessMessage email={formData.email} />}

              <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400 text-center">
                <p>Fields marked with * are required</p>
                <p className="mt-2">
                  If you need immediate medical attention, please call 911 or go to your nearest emergency room.
                </p>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}

