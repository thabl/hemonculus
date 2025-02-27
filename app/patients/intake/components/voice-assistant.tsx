"use client"

import { useState, useRef, useEffect } from "react"
import { Mic, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VoiceAssistantProps {
  onDataProcessed: (processedData: Record<string, any>) => void
  isActive: boolean
  setIsActive: (active: boolean) => void
}

export function VoiceAssistant({ onDataProcessed, isActive, setIsActive }: VoiceAssistantProps) {
  const [showVoiceModal, setShowVoiceModal] = useState(false)
  const [voiceAssistantActive, setVoiceAssistantActive] = useState(false)
  const [voicePrompt, setVoicePrompt] = useState("")
  const [displayedPrompt, setDisplayedPrompt] = useState("")
  const [voiceData, setVoiceData] = useState("")
  const [processingVoice, setProcessingVoice] = useState(false)
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false)
  const [promptStage, setPromptStage] = useState(0)

  const recognitionRef = useRef<any>(null)
  const promptIntervalRef = useRef<any>(null)

  // Define the prompts for each stage
  const prompts = [
    "Please describe your reason for consultation and any symptoms or concerns you're experiencing.",
    "Please list any medications you're currently taking. You don't need to include dosages or instructions.",
    "Do you have any allergies to medications or other substances?",
    "Would you like to share your primary care doctor's information so we can obtain medical records and send them a copy of your visit summary? Say 'yes' to continue or 'no' to submit the information you've already provided.",
  ]

  // Text animation effect for voice prompts
  useEffect(() => {
    if (voicePrompt && voiceAssistantActive) {
      let i = 0
      setDisplayedPrompt("")

      if (promptIntervalRef.current) {
        clearInterval(promptIntervalRef.current)
      }

      promptIntervalRef.current = setInterval(() => {
        if (i < voicePrompt.length) {
          setDisplayedPrompt((prev) => prev + voicePrompt.charAt(i))
          i++
        } else {
          clearInterval(promptIntervalRef.current)
        }
      }, 30) // Speed of text animation
    }

    return () => {
      if (promptIntervalRef.current) {
        clearInterval(promptIntervalRef.current)
      }
    }
  }, [voicePrompt, voiceAssistantActive])

  // Cleanup recognition on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop()
        } catch (e) {
          console.error("Error stopping recognition:", e)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (isActive) {
      startVoiceAssistant()
    }
  }, [isActive])

  const startVoiceAssistant = () => {
    if (!disclaimerAccepted) {
      setShowVoiceModal(true)
      return
    }

    setVoiceAssistantActive(true)
    setPromptStage(0)
    setVoicePrompt(prompts[0])
    setVoiceData("")

    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()

      recognitionRef.current.continuous = true
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = "en-US"

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[event.results.length - 1][0].transcript

        // If we're at the final prompt, check for yes/no response
        if (promptStage === 3) {
          const lowerTranscript = transcript.toLowerCase()
          if (lowerTranscript.includes("no") || lowerTranscript.includes("submit")) {
            // User doesn't want to share PCP info, process and submit
            stopVoiceAssistant()
            return
          } else if (lowerTranscript.includes("yes") || lowerTranscript.includes("share")) {
            // Move to collecting PCP info
            setPromptStage(4)
            setVoicePrompt("Please tell me your primary care doctor's name and any contact information you have.")
            return
          }
        }

        setVoiceData((prev) => prev + " [STAGE " + promptStage + "] " + transcript)
      }

      recognitionRef.current.onend = () => {
        // If recognition ends and we're not at the final stage, move to next prompt
        if (voiceAssistantActive && promptStage < prompts.length - 1) {
          const nextStage = promptStage + 1
          setPromptStage(nextStage)
          setVoicePrompt(prompts[nextStage])

          // Restart recognition
          try {
            recognitionRef.current.start()
          } catch (e) {
            console.error("Error restarting recognition:", e)
          }
        }
      }

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error", event.error)
        if (event.error !== "no-speech") {
          setVoiceAssistantActive(false)
        }
      }

      recognitionRef.current.start()
    } else {
      alert("Speech recognition is not supported in your browser.")
      setVoiceAssistantActive(false)
    }
  }

  const advanceToNextPrompt = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop()
      } catch (e) {
        console.error("Error stopping recognition:", e)
      }
    }

    if (promptStage < prompts.length - 1) {
      const nextStage = promptStage + 1
      setPromptStage(nextStage)
      setVoicePrompt(prompts[nextStage])

      // Restart recognition after a short delay
      setTimeout(() => {
        if (recognitionRef.current && voiceAssistantActive) {
          try {
            recognitionRef.current.start()
          } catch (e) {
            console.error("Error restarting recognition:", e)
          }
        }
      }, 500)
    } else {
      // We're at the final prompt, process and submit
      stopVoiceAssistant()
    }
  }

  const stopVoiceAssistant = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop()
      } catch (e) {
        console.error("Error stopping recognition:", e)
      }
    }

    setProcessingVoice(true)

    // Process the voice data
    setTimeout(() => {
      const processedData = processVoiceData(voiceData)
      onDataProcessed(processedData)
      setVoiceAssistantActive(false)
      setProcessingVoice(false)
      setVoiceData("")
      setIsActive(false)
    }, 1500)
  }

  const acceptDisclaimer = () => {
    setDisclaimerAccepted(true)
    setShowVoiceModal(false)
    startVoiceAssistant()
  }

  const closeVoiceModal = () => {
    setShowVoiceModal(false)
    setIsActive(false)
  }

  // Process voice data with stage markers
  const processVoiceData = (data: string) => {
    const processedData: Record<string, any> = {}

    // Split the data by stage markers
    const stageRegex = /\[STAGE (\d+)\] (.*?)(?=\[STAGE \d+\]|$)/gs
    const matches = [...data.matchAll(stageRegex)]

    const stageData: Record<number, string> = {}
    matches.forEach((match) => {
      const stageNum = Number.parseInt(match[1])
      const content = match[2].trim()
      if (!stageData[stageNum]) {
        stageData[stageNum] = content
      } else {
        stageData[stageNum] += " " + content
      }
    })

    // Process each stage data
    if (stageData[0]) {
      // Stage 0: Reason for consultation and description
      processedData.briefDescription = stageData[0]
    }

    if (stageData[1]) {
      // Stage 1: Medications
      processedData.currentMedications = stageData[1]
    }

    if (stageData[2]) {
      // Stage 2: Allergies
      processedData.allergies = stageData[2]
    }

    if (stageData[4]) {
      // Stage 4: Primary care physician (only if user said yes at stage 3)
      processedData.primaryCarePhysician = stageData[4]
    }

    return processedData
  }

  return (
    <>
      {/* Voice Assistant Button */}
      <div className="absolute top-4 right-4">
        <Button
          onClick={() => setIsActive(true)}
          className="relative group overflow-hidden rounded-full hover:scale-105 transition-all duration-200 w-12 h-12 p-0"
          disabled={voiceAssistantActive || processingVoice}
        >
          <span className="relative flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <defs>
                <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
              </defs>
              <circle cx="12" cy="12" r="10" fill="url(#innerGlow)" opacity="0.6" />
              <circle cx="12" cy="12" r="4" fill="white" opacity="0.9" />
              <path d="M8,16 C8,16 8,12 12,12 C16,12 16,16 16,16" stroke="white" strokeLinecap="round" />
              <path d="M12,8 L12,4" stroke="white" strokeLinecap="round">
                <animate
                  attributeName="d"
                  values="M12,8 L12,4; M11,8 L10,4; M12,8 L12,4"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M16,10 L19,8" stroke="white" strokeLinecap="round">
                <animate
                  attributeName="d"
                  values="M16,10 L19,8; M16,9 L19,7; M16,10 L19,8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M8,10 L5,8" stroke="white" strokeLinecap="round">
                <animate
                  attributeName="d"
                  values="M8,10 L5,8; M8,9 L5,7; M8,10 L5,8"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </span>
        </Button>
      </div>

      {/* Voice Assistant Modal */}
      {showVoiceModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Voice Assistant</h3>
              <Button variant="ghost" size="icon" onClick={closeVoiceModal} className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                By using the voice assistant, you agree to the following:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Your voice will be processed to extract information for your intake form</li>
                <li>No recordings will be stored after processing is complete</li>
                <li>You can review and edit any information before submission</li>
                <li>You can stop the voice assistant at any time</li>
              </ul>
            </div>
            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={closeVoiceModal}>
                Cancel
              </Button>
              <Button
                onClick={acceptDisclaimer}
                className="relative group overflow-hidden rounded-full hover:scale-105 transition-all duration-200"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-90 group-hover:opacity-100 transition-all duration-200"></span>
                <span className="relative text-white">Accept & Continue</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Voice Assistant Interface */}
      {voiceAssistantActive && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/90 dark:bg-gray-800/90 rounded-lg max-w-2xl w-full p-8 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center">
                  <Mic className="h-6 w-6 text-white animate-pulse" />
                </div>
                <h3 className="text-xl font-bold ml-3 text-gray-900 dark:text-gray-100">Voice Assistant</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={stopVoiceAssistant} className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="mb-8 min-h-[100px]">
              <p className="text-lg text-gray-800 dark:text-gray-200">{displayedPrompt}</p>
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                onClick={advanceToNextPrompt}
                className="px-6 py-2 relative group overflow-hidden rounded-full hover:scale-105 transition-all duration-200"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 group-hover:opacity-100 transition-all duration-200"></span>
                <span className="relative text-white">Next</span>
              </Button>

              <Button
                onClick={stopVoiceAssistant}
                className="px-6 py-2 relative group overflow-hidden rounded-full hover:scale-105 transition-all duration-200"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-90 group-hover:opacity-100 transition-all duration-200"></span>
                <span className="relative text-white">Submit</span>
              </Button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>Speak clearly about your medical concerns, medications, and allergies</p>
            </div>
          </div>
        </div>
      )}

      {/* Processing Voice Data Overlay */}
      {processingVoice && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-8 shadow-xl text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center">
              <svg
                className="animate-spin h-8 w-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Processing your information</h3>
            <p className="text-gray-600 dark:text-gray-400">Please wait while we analyze your voice input...</p>
          </div>
        </div>
      )}
    </>
  )
}

