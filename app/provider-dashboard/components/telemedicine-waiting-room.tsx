"use client"

import type React from "react"

import { useState } from "react"
import {
  Video,
  Brain,
  Clock,
  Calendar,
  FileText,
  X,
  User,
  AlertTriangle,
  MessageSquare,
  Clipboard,
  Phone,
  FilePlus,
  CheckCircle,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Patient {
  id: number
  name: string
  age: number
  time: string
  reason: string
  status: string
  statusColor: string
  waitTime: string
  lastVisit: string
  priority: string
}

interface AiSummaryData {
  name: string
  age: number
  diagnosis: string
  diagnosis_date: string
  stage: string
  treatment: string
  key_labs: string
  recent_changes: string
  medications: string
  comorbidities: string
  last_imaging: string
  last_encounter: string
  alerts: string[]
  recommendations: string[]
}

export default function TelemedicineWaitingRoom() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [showAiSummary, setShowAiSummary] = useState(false)

  // Mock patients for a day's clinic schedule
  const patients: Patient[] = [
    {
      id: 1,
      name: "Maria Garcia",
      age: 58,
      time: "09:00 AM",
      reason: "Follow-up: AML maintenance",
      status: "Checked In",
      statusColor: "green",
      waitTime: "5 min",
      lastVisit: "Dec 12, 2023",
      priority: "regular",
    },
    {
      id: 2,
      name: "James Wilson",
      age: 72,
      time: "09:30 AM",
      reason: "New symptoms: fatigue, bruising",
      status: "In Waiting Room",
      statusColor: "blue",
      waitTime: "10 min",
      lastVisit: "Jan 8, 2024",
      priority: "high",
    },
    {
      id: 3,
      name: "Samantha Lee",
      age: 45,
      time: "10:00 AM",
      reason: "Chemotherapy follow-up",
      status: "Next Patient",
      statusColor: "purple",
      waitTime: "0 min",
      lastVisit: "Jan 5, 2024",
      priority: "regular",
    },
    {
      id: 4,
      name: "Robert Johnson",
      age: 64,
      time: "10:30 AM",
      reason: "Review bone marrow biopsy results",
      status: "Not Checked In",
      statusColor: "gray",
      waitTime: "-",
      lastVisit: "Dec 18, 2023",
      priority: "high",
    },
    {
      id: 5,
      name: "Emily Clark",
      age: 33,
      time: "11:00 AM",
      reason: "Iron deficiency anemia follow-up",
      status: "Not Checked In",
      statusColor: "gray",
      waitTime: "-",
      lastVisit: "Nov 29, 2023",
      priority: "regular",
    },
    {
      id: 6,
      name: "David Patel",
      age: 67,
      time: "11:30 AM",
      reason: "CLL monitoring",
      status: "Not Checked In",
      statusColor: "gray",
      waitTime: "-",
      lastVisit: "Jan 2, 2024",
      priority: "regular",
    },
    {
      id: 7,
      name: "Lisa Martinez",
      age: 52,
      time: "01:00 PM",
      reason: "Post-transplant follow-up",
      status: "Not Checked In",
      statusColor: "gray",
      waitTime: "-",
      lastVisit: "Dec 5, 2023",
      priority: "high",
    },
    {
      id: 8,
      name: "Michael Thompson",
      age: 41,
      time: "01:30 PM",
      reason: "ITP treatment evaluation",
      status: "Not Checked In",
      statusColor: "gray",
      waitTime: "-",
      lastVisit: "Jan 12, 2024",
      priority: "regular",
    },
    {
      id: 9,
      name: "Sarah Adams",
      age: 70,
      time: "02:00 PM",
      reason: "MDS therapy adjustment",
      status: "Not Checked In",
      statusColor: "gray",
      waitTime: "-",
      lastVisit: "Dec 22, 2023",
      priority: "high",
    },
    {
      id: 10,
      name: "Thomas Wright",
      age: 55,
      time: "02:30 PM",
      reason: "Multiple myeloma monitoring",
      status: "Not Checked In",
      statusColor: "gray",
      waitTime: "-",
      lastVisit: "Jan 15, 2024",
      priority: "regular",
    },
  ]

  // Mock AI Summary data
  const aiSummaryData: AiSummaryData = {
    name: "James Wilson",
    age: 72,
    diagnosis: "Chronic Lymphocytic Leukemia (CLL)",
    diagnosis_date: "June 2021",
    stage: "Rai Stage II",
    treatment: "Currently on ibrutinib 420mg daily since Oct 2022",
    key_labs: "WBC 15.2 (↑), ALC 10.8 (↑), Hgb 11.3 (↓), PLT 95 (↓)",
    recent_changes: "Increasing fatigue over past 3 weeks. New bruising on arms and legs without trauma.",
    medications: "Ibrutinib 420mg daily, Lisinopril 10mg daily, Atorvastatin 40mg daily, Aspirin 81mg daily",
    comorbidities: "Hypertension, Hyperlipidemia, Coronary Artery Disease",
    last_imaging: "CT Chest/Abdomen/Pelvis (Dec 2023): Stable cervical and axillary lymphadenopathy, no new findings",
    last_encounter: "Jan 8, 2024 - Routine follow-up with Dr. Chen. Reported mild fatigue but otherwise doing well.",
    alerts: [
      "Trending decrease in platelets over last 3 visits",
      "Recent ER visit (Jan 19, 2024) for epistaxis",
      "30% increase in lymphocyte count over last 6 months",
    ],
    recommendations: [
      "Check CBC with differential and CMP",
      "Assess for bleeding or infection",
      "Consider dose adjustment of ibrutinib if thrombocytopenia has worsened",
      "Review medication adherence and potential drug interactions",
    ],
  }

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient)
    setShowAiSummary(false)
  }

  const handleAiSummaryClick = (e: React.MouseEvent, patient: Patient) => {
    e.stopPropagation()
    setSelectedPatient(patient)
    setShowAiSummary(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "green":
        return "bg-green-500 dark:bg-green-600"
      case "blue":
        return "bg-blue-500 dark:bg-blue-600"
      case "purple":
        return "bg-purple-500 dark:bg-purple-600"
      case "gray":
        return "bg-gray-400 dark:bg-gray-500"
      default:
        return "bg-gray-400 dark:bg-gray-500"
    }
  }

  const getPriorityLabel = (priority: string) => {
    if (priority === "high") {
      return <Badge className="ml-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">Priority</Badge>
    }
    return null
  }

  return (
    <div className="flex h-[calc(100vh-200px)] w-full overflow-hidden bg-white dark:bg-[#1a1625]/50 dark:backdrop-blur-sm text-gray-800 dark:text-[#f8f9fa] border border-gray-200 dark:border-white/10 rounded-lg">
      {/* Left sidebar with patient queue */}
      <div className="w-1/3 border-r border-gray-200 dark:border-white/10 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-white/10">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-white">Telemedicine Clinic</h1>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Calendar size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">Tuesday, Feb 25, 2025</span>
            </div>
          </div>
          <div className="mt-2 flex justify-between items-center text-sm">
            <div className="flex items-center">
              <Clock size={16} className="text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">
                Current Time: <span className="font-medium text-gray-700 dark:text-gray-200">09:45 AM</span>
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 dark:text-gray-400">Next Patient:</span>
              <span className="ml-1 font-medium text-white">Samantha Lee</span>
            </div>
          </div>
        </div>

        {/* Patient Queue */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-2">
            <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Today's Schedule
            </h2>

            <div className="mt-2">
              {patients.map((patient) => (
                <div
                  key={patient.id}
                  className={`border-b border-gray-100 dark:border-white/5 py-3 px-4 cursor-pointer ${
                    selectedPatient && selectedPatient.id === patient.id
                      ? "bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-900/10 dark:to-blue-900/10 border-l-2 border-l-red-500 dark:border-l-blue-500"
                      : "hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
                  onClick={() => handlePatientClick(patient)}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center mb-1">
                      <div className={`w-2.5 h-2.5 rounded-full mr-2 ${getStatusColor(patient.statusColor)}`}></div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-900 dark:text-[#f8f9fa]">{patient.name}</h3>
                          {getPriorityLabel(patient.priority)}
                        </div>
                      </div>

                      <div className="flex">
                        <button className="p-1 rounded-full text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
                          <Video size={18} />
                        </button>
                        <button
                          className="p-1 rounded-full text-blue-500 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/20 ml-1 transition-colors"
                          onClick={(e) => handleAiSummaryClick(e, patient)}
                        >
                          <Brain size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 dark:text-gray-400 ml-4">
                      {patient.age} y/o • {patient.time}
                    </div>

                    <div className="text-sm text-gray-700 dark:text-gray-300 mt-1 ml-4">{patient.reason}</div>

                    <div className="flex text-xs text-gray-500 dark:text-gray-400 mt-1 ml-4">
                      <div className="flex items-center">
                        <span>Wait: {patient.waitTime}</span>
                      </div>
                      <div className="flex items-center ml-3">
                        <span>Last Visit: {patient.lastVisit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="p-4 border-t border-gray-200 dark:border-white/10">
          <div className="flex space-x-3">
            <Button className="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 rounded-md shadow-sm flex-1">
              <Phone size={16} className="mr-2" />
              Call Patient
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-[#f8f9fa] bg-white dark:bg-[#1a1625] border border-gray-300 dark:border-white/10 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-white/5 flex-1"
            >
              <FilePlus size={16} className="mr-2" />
              Add Patient
            </Button>
          </div>
        </div>
      </div>

      {/* Right content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {selectedPatient && showAiSummary ? (
          // AI Summary content
          <div className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-[#0f172a]/50">
            <div className="bg-white dark:bg-[#1a1625]/80 rounded-lg shadow-sm p-5 border border-gray-100 dark:border-white/5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-[#f8f9fa] flex items-center">
                    <Brain size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                    AI Patient Summary
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Generated on Feb 25, 2025 at 09:42 AM</p>
                </div>
                <button
                  className="p-1.5 rounded-full bg-gray-100 dark:bg-[#1a1625] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/5 transition-colors"
                  onClick={() => setShowAiSummary(false)}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Patient Overview */}
                <div className="col-span-2 bg-gray-50 dark:bg-[#1a1625] rounded-lg p-4 border border-gray-100 dark:border-white/5">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900/30 dark:to-blue-900/30 rounded-full p-3 mr-4">
                      <User size={24} className="text-gray-700 dark:text-[#f8f9fa]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-[#f8f9fa]">{aiSummaryData.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {aiSummaryData.age} y/o • {aiSummaryData.diagnosis}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Diagnosed: {aiSummaryData.diagnosis_date} • {aiSummaryData.stage}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 font-medium">
                        {aiSummaryData.treatment}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recent Changes */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-100 dark:border-yellow-800/30">
                  <h3 className="font-semibold text-gray-900 dark:text-[#f8f9fa] flex items-center mb-2">
                    <AlertTriangle size={18} className="mr-2 text-yellow-600 dark:text-yellow-400" />
                    Recent Changes & Chief Complaint
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{aiSummaryData.recent_changes}</p>
                </div>

                {/* Key Labs */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800/30">
                  <h3 className="font-semibold text-gray-900 dark:text-[#f8f9fa] flex items-center mb-2">
                    <Clipboard size={18} className="mr-2 text-blue-600 dark:text-blue-400" />
                    Key Labs
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{aiSummaryData.key_labs}</p>
                </div>

                {/* Alerts */}
                <div className="col-span-2 mt-2">
                  <h3 className="font-semibold text-gray-900 dark:text-[#f8f9fa] flex items-center mb-2">
                    <AlertTriangle size={18} className="mr-2 text-red-600 dark:text-red-400" />
                    Clinical Alerts
                  </h3>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 border border-red-100 dark:border-red-800/30">
                    <ul className="space-y-1">
                      {aiSummaryData.alerts.map((alert, index) => (
                        <li key={index} className="text-sm text-red-700 dark:text-red-400 flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-600 mr-2 mt-1.5 flex-shrink-0"></span>
                          {alert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Medical Information */}
                <div className="col-span-2 grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-[#f8f9fa] mb-2">Medications</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{aiSummaryData.medications}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-[#f8f9fa] mb-2">Comorbidities</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{aiSummaryData.comorbidities}</p>
                  </div>
                </div>

                {/* Previous Encounters & Imaging */}
                <div className="col-span-2 grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-[#f8f9fa] mb-2">Last Encounter</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{aiSummaryData.last_encounter}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-[#f8f9fa] mb-2">Last Imaging</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{aiSummaryData.last_imaging}</p>
                  </div>
                </div>

                {/* AI Recommendations */}
                <div className="col-span-2 mt-3">
                  <h3 className="font-semibold text-gray-900 dark:text-[#f8f9fa] flex items-center mb-2">
                    <CheckCircle size={18} className="mr-2 text-green-600 dark:text-green-400" />
                    AI Recommendations for Today's Visit
                  </h3>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-100 dark:border-green-800/30">
                    <ul className="space-y-2">
                      {aiSummaryData.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-gray-800 dark:text-gray-200 flex items-start">
                          <span className="inline-block w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 flex items-center justify-center mr-2 flex-shrink-0">
                            {index + 1}
                          </span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t border-gray-200 dark:border-white/10">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">AI Model:</span> Clinical Hematology Assistant v2.3
                </div>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    className="text-gray-600 dark:text-gray-300 border-gray-300 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5"
                  >
                    Download Summary
                  </Button>
                  <Button className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white border-0">
                    Add to Patient Notes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Empty state or default view
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900/30 dark:to-blue-900/30 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <MessageSquare size={28} className="text-gray-700 dark:text-[#f8f9fa]" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-[#f8f9fa] mb-2">
                Telemedicine Session Dashboard
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                Select a patient from the waiting room to view their details or click the AI summary button to see a
                comprehensive patient overview.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-2">
                    <Video size={24} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Join Call</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 mb-2">
                    <Settings size={24} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Settings</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-2">
                    <Brain size={24} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">AI Summary</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-white dark:bg-[#1a1625]/80 border-t border-gray-200 dark:border-white/10 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span>Connected to Telemedicine System v3.5</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent hover:from-red-600 hover:to-blue-600">
              <FileText size={16} className="mr-1 text-red-500 dark:text-red-400" />
              View Schedule
            </button>
            <button className="flex items-center text-sm bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent hover:from-red-600 hover:to-blue-600">
              <MessageSquare size={16} className="mr-1 text-blue-500 dark:text-blue-400" />
              Support
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

