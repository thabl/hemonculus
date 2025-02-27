"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TelemedicineWaitingRoom from "../components/telemedicine-waiting-room"
import CurrentVisit from "./components/current-visit"

export default function ClinicPage() {
  const [activeTab, setActiveTab] = useState("waiting-room")

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-[#f8f9fa] mb-6">Telemedicine Clinic</h1>

      <Tabs defaultValue="waiting-room" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4 bg-gray-100 dark:bg-[#1a1625] p-1 rounded-lg">
          <TabsTrigger
            value="waiting-room"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-[#0f172a] rounded-md"
          >
            Waiting Room
          </TabsTrigger>
          <TabsTrigger
            value="current-visit"
            className="data-[state=active]:bg-white dark:data-[state=active]:bg-[#0f172a] rounded-md"
          >
            Current Visit
          </TabsTrigger>
        </TabsList>

        <TabsContent value="waiting-room" className="space-y-4">
          <div className="h-[calc(100vh-200px)]">
            <TelemedicineWaitingRoom />
          </div>
        </TabsContent>

        <TabsContent value="current-visit" className="space-y-4">
          <div className="h-[calc(100vh-200px)]">
            <CurrentVisit />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

