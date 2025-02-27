"use client"

import { useState } from "react"
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  MessageSquare,
  Share2,
  FileText,
  Maximize2,
  Volume2,
  Brain,
  X,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CurrentVisit() {
  const [micMuted, setMicMuted] = useState(false)
  const [videoOff, setVideoOff] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [showNotes, setShowNotes] = useState(false)

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-[#0f172a]/50 rounded-lg overflow-hidden border border-gray-200 dark:border-white/10">
      {/* Header */}
      <div className="bg-white dark:bg-[#1a1625]/80 p-4 border-b border-gray-200 dark:border-white/10 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900/30 dark:to-blue-900/30 flex items-center justify-center mr-3">
            <span className="font-semibold text-gray-800 dark:text-gray-200">JW</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-[#f8f9fa]">James Wilson</h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">72 y/o male</span>
              <Badge className="ml-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 text-xs">
                Priority
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 flex items-center">
            <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 mr-1.5"></span>
            Connected
          </Badge>
          <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">Duration: 00:12:45</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex">
        {/* Video area */}
        <div className="flex-1 relative">
          {/* Patient video (large) */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-md m-4">
            {videoOff ? (
              <div className="flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                  <span className="text-3xl font-semibold text-gray-300">JW</span>
                </div>
                <span className="text-gray-400">Video paused</span>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full w-full">
                <div className="bg-gray-800 rounded-full p-8 flex items-center justify-center">
                  <User className="h-24 w-24 text-gray-400" />
                </div>
              </div>
            )}

            {/* Doctor video (small overlay) */}
            <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-md border-2 border-white dark:border-gray-700 overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=180&width=240"
                alt="Doctor video feed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Side panel (conditional) */}
        {(showChat || showNotes) && (
          <div className="w-80 bg-white dark:bg-[#1a1625]/80 border-l border-gray-200 dark:border-white/10 flex flex-col">
            <div className="p-3 border-b border-gray-200 dark:border-white/10 flex justify-between items-center">
              <h3 className="font-medium text-gray-900 dark:text-[#f8f9fa]">{showChat ? "Chat" : "Visit Notes"}</h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 rounded-full"
                onClick={() => {
                  setShowChat(false)
                  setShowNotes(false)
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 p-3 overflow-y-auto">
              {showChat && (
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-gray-800 dark:text-gray-200 rounded-lg p-2 max-w-[80%]">
                      Hello Mr. Wilson, how are you feeling today?
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg p-2 max-w-[80%]">
                      I've been experiencing more fatigue lately, and I noticed some bruising on my arms.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-gray-800 dark:text-gray-200 rounded-lg p-2 max-w-[80%]">
                      I see. When did you first notice the bruising?
                    </div>
                  </div>
                </div>
              )}

              {showNotes && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-[#f8f9fa] mb-1">Chief Complaint</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Increased fatigue and unexplained bruising
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-[#f8f9fa] mb-1">History</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Patient reports gradual onset of fatigue over past 3 weeks. Noticed bruising on arms and legs
                      without trauma.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-[#f8f9fa] mb-1">Assessment</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      CLL with possible disease progression. Thrombocytopenia worsening based on recent labs.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-[#f8f9fa] mb-1">Plan</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      1. Urgent CBC with differential and CMP
                      <br />
                      2. Consider dose adjustment of ibrutinib
                      <br />
                      3. Follow-up in 1 week
                    </p>
                  </div>
                </div>
              )}
            </div>

            {showChat && (
              <div className="p-3 border-t border-gray-200 dark:border-white/10">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button className="rounded-r-md bg-blue-500 px-3 py-2 text-white">
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-white dark:bg-[#1a1625]/80 p-3 border-t border-gray-200 dark:border-white/10 flex justify-between items-center">
        <div className="flex space-x-2">
          <Button
            variant={micMuted ? "destructive" : "secondary"}
            size="icon"
            className="rounded-full h-10 w-10"
            onClick={() => setMicMuted(!micMuted)}
          >
            {micMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>
          <Button
            variant={videoOff ? "destructive" : "secondary"}
            size="icon"
            className="rounded-full h-10 w-10"
            onClick={() => setVideoOff(!videoOff)}
          >
            {videoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
            <Volume2 className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex space-x-2">
          <Button
            variant={showChat ? "outline" : "secondary"}
            size="icon"
            className={`rounded-full h-10 w-10 ${
              showChat
                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                : ""
            }`}
            onClick={() => {
              setShowChat(!showChat)
              setShowNotes(false)
            }}
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Button
            variant={showNotes ? "outline" : "secondary"}
            size="icon"
            className={`rounded-full h-10 w-10 ${
              showNotes
                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                : ""
            }`}
            onClick={() => {
              setShowNotes(!showNotes)
              setShowChat(false)
            }}
          >
            <FileText className="h-5 w-5" />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
            <Share2 className="h-5 w-5" />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
            <Brain className="h-5 w-5" />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
            <Maximize2 className="h-5 w-5" />
          </Button>
        </div>

        <div>
          <Button variant="destructive" className="rounded-full px-4">
            <PhoneOff className="h-5 w-5 mr-2" />
            End Call
          </Button>
        </div>
      </div>
    </div>
  )
}

