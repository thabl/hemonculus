"use client"

import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertCircle,
  X,
  ArrowDownCircle,
  AlertTriangle,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  Heart,
  Pill,
  TrendingUp,
  User,
  Activity,
  Search,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PatientsPage() {
  const [showAlert, setShowAlert] = useState(true)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-[#f8f9fa] mb-6">Patient Records</h1>

      {showAlert && (
        <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 flex items-center justify-between">
          <div className="flex items-center">
            <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
            <AlertTitle className="text-blue-800 dark:text-blue-200 mr-2">Note:</AlertTitle>
            <AlertDescription className="text-blue-700 dark:text-blue-300">
              Traditional EMR platform is available but must be enabled under settings.
            </AlertDescription>
          </div>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-full" onClick={() => setShowAlert(false)}>
            <X className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </Button>
        </Alert>
      )}

      <HematologyEMR />
    </div>
  )
}

// HematologyEMR component
const HematologyEMR = () => {
  const [activeCategory, setActiveCategory] = useState("myeloid")
  const [selectedPatient, setSelectedPatient] = useState("patient1")

  const patients = {
    myeloid: [
      { id: "patient1", name: "Robert Chen", age: 62, diagnosis: "Acute Myeloid Leukemia" },
      { id: "patient2", name: "Sarah Williams", age: 56, diagnosis: "Myelodysplastic Syndrome" },
      { id: "patient3", name: "Michael Jordan", age: 71, diagnosis: "Chronic Myeloid Leukemia" },
    ],
    lymphoid: [
      { id: "patient4", name: "Jennifer Lopez", age: 45, diagnosis: "Diffuse Large B-Cell Lymphoma" },
      { id: "patient5", name: "Thomas Wilson", age: 38, diagnosis: "Acute Lymphoblastic Leukemia" },
    ],
    benign: [
      { id: "patient6", name: "Emily Davis", age: 29, diagnosis: "Iron Deficiency Anemia" },
      { id: "patient7", name: "Kevin Martin", age: 52, diagnosis: "Essential Thrombocythemia" },
    ],
  }

  // Mock patient data for Robert Chen
  const patientData = {
    patient1: {
      demographics: {
        name: "Robert Chen",
        dob: "03/14/1962",
        age: 62,
        sex: "Male",
        mrn: "MRN-7829145",
        insurance: "Medicare",
        contactPhone: "(555) 123-4567",
        emergencyContact: "Linda Chen (Wife) - (555) 987-6543",
      },
      diagnosis: {
        primary: "Acute Myeloid Leukemia (AML)",
        subtype: "AML with t(8;21)(q22;q22.1); RUNX1-RUNX1T1",
        dateOfDiagnosis: "06/12/2023",
        stage: "Refractory",
        riskStatus: "High-risk cytogenetics",
      },
      labValues: [
        { name: "WBC", value: "2.1", unit: "x10^9/L", flag: "LOW", refRange: "4.5-11.0" },
        { name: "Hgb", value: "8.9", unit: "g/dL", flag: "LOW", refRange: "13.5-17.5" },
        { name: "PLT", value: "45", unit: "x10^9/L", flag: "LOW", refRange: "150-450" },
        { name: "Blasts", value: "12", unit: "%", flag: "HIGH", refRange: "0" },
        { name: "Neutrophils", value: "0.8", unit: "x10^9/L", flag: "LOW", refRange: "1.8-7.7" },
        { name: "Creatinine", value: "1.1", unit: "mg/dL", flag: "", refRange: "0.74-1.35" },
      ],
      vitals: {
        bp: "132/78",
        hr: "84",
        rr: "16",
        temp: "98.2°F",
        o2: "97%",
        weight: "71 kg",
        height: "175 cm",
        bmi: "23.2",
      },
      treatment: {
        currentRegimen: "Venetoclax + Azacitidine",
        cycleNumber: "Cycle 2 (Day 14)",
        treatmentStart: "09/05/2023",
        responseStatus: "Partial Response",
        previousRegimens: [
          {
            name: "7+3 (Cytarabine + Idarubicin)",
            start: "06/18/2023",
            end: "06/25/2023",
            response: "Refractory",
            notes: "Failed to achieve remission",
          },
          {
            name: "Venetoclax + Azacitidine",
            start: "09/05/2023",
            end: "Present",
            response: "Ongoing",
            notes: "Blast reduction from 32% to 12%",
          },
        ],
        plannedNext: "Continue current regimen with response assessment after cycle 3",
      },
      medications: [
        { name: "Venetoclax", dose: "400 mg", frequency: "Daily", route: "PO", startDate: "09/05/2023" },
        {
          name: "Azacitidine",
          dose: "75 mg/m²",
          frequency: "Days 1-7 of 28-day cycle",
          route: "SC",
          startDate: "09/05/2023",
        },
        { name: "Acyclovir", dose: "800 mg", frequency: "BID", route: "PO", startDate: "09/05/2023" },
        { name: "Levofloxacin", dose: "500 mg", frequency: "Daily", route: "PO", startDate: "09/05/2023" },
        { name: "Posaconazole", dose: "300 mg", frequency: "Daily", route: "PO", startDate: "09/05/2023" },
      ],
      recentEvents: [
        {
          date: "01/18/2024",
          event: "Hospitalization",
          description: "Neutropenic fever, treated with broad-spectrum antibiotics",
        },
        {
          date: "01/12/2024",
          event: "Blood Transfusion",
          description: "2 units pRBCs for symptomatic anemia (Hgb 7.2 g/dL)",
        },
        {
          date: "01/08/2024",
          event: "Bone Marrow Biopsy",
          description: "Results showed 12% blasts, hypocellular marrow",
        },
        {
          date: "12/28/2023",
          event: "Clinic Visit",
          description: "Dose reduction of Azacitidine due to prolonged cytopenias",
        },
      ],
      comorbidities: ["Hypertension", "Type 2 Diabetes", "Coronary Artery Disease", "Hyperlipidemia"],
      transfusions: {
        lastPRBC: "01/12/2024",
        lastPlatelet: "01/15/2024",
        rbcUnitsLast30Days: 4,
        plateletUnitsLast30Days: 3,
      },
      nextAppointment: "01/30/2024 - Clinic follow-up with CBC",
    },
  }

  const patientInfo = patientData[selectedPatient] || patientData.patient1

  const getCategoryPatients = (category) => {
    return patients[category] || []
  }

  return (
    <div className="flex h-full w-full bg-transparent text-gray-800 dark:text-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      {/* Sidebar */}
      <div className="w-64 bg-white/50 dark:bg-[#1a1625]/50 dark:backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-white">Hematology EMR</h1>
            <Search size={18} className="text-gray-500 dark:text-gray-400" />
          </div>
          <div className="mt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients..."
                className="w-full py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Diagnosis Categories
          </h2>
          <nav className="space-y-1">
            <button
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                activeCategory === "myeloid"
                  ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30"
              }`}
              onClick={() => setActiveCategory("myeloid")}
            >
              <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
              Myeloid Malignancies
            </button>
            <button
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                activeCategory === "lymphoid"
                  ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30"
              }`}
              onClick={() => setActiveCategory("lymphoid")}
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
              Lymphoid Malignancies
            </button>
            <button
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                activeCategory === "benign"
                  ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30"
              }`}
              onClick={() => setActiveCategory("benign")}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
              Benign Disorders
            </button>
          </nav>
        </div>

        {/* Patient List */}
        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Patient List
          </h2>
          <div className="space-y-1">
            {getCategoryPatients(activeCategory).map((patient) => (
              <button
                key={patient.id}
                className={`flex items-center w-full px-3 py-2 text-sm rounded-md ${
                  selectedPatient === patient.id
                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30"
                }`}
                onClick={() => setSelectedPatient(patient.id)}
              >
                <div className="flex-1 flex flex-col">
                  <span className="font-medium">{patient.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {patient.age} y/o - {patient.diagnosis}
                  </span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 dark:bg-indigo-700 rounded-md shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-600">
            <Users size={16} className="mr-2" />
            View All Patients
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top nav */}
        <header className="bg-white/50 dark:bg-[#1a1625]/50 dark:backdrop-blur-sm shadow-sm px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Patient Summary</h2>
          </div>
          <div className="flex space-x-4">
            <button className="px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              Edit
            </button>
            <button className="px-3 py-1.5 bg-indigo-600 rounded-md text-sm font-medium text-white hover:bg-indigo-700">
              Add Note
            </button>
          </div>
        </header>

        {/* Patient summary */}
        <div className="flex-1 overflow-auto p-6 bg-transparent">
          {/* Patient demographics and diagnosis */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 col-span-1">
              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-3 mr-4">
                  <User size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {patientInfo.demographics.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {patientInfo.demographics.age} y/o {patientInfo.demographics.sex}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">DOB: {patientInfo.demographics.dob}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">MRN: {patientInfo.demographics.mrn}</p>
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Phone:</span> {patientInfo.demographics.contactPhone}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Emergency:</span> {patientInfo.demographics.emergencyContact}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 col-span-2">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                  <FileText size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Diagnosis & Disease Status
                </h3>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
                  {patientInfo.diagnosis.stage}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Primary Diagnosis</p>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{patientInfo.diagnosis.primary}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Subtype</p>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{patientInfo.diagnosis.subtype}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Date of Diagnosis</p>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {patientInfo.diagnosis.dateOfDiagnosis}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Risk Status</p>
                  <p className="font-medium text-red-600 dark:text-red-400">{patientInfo.diagnosis.riskStatus}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle row */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Current Treatment */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 col-span-1">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center mb-3">
                <Pill size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                Current Treatment
              </h3>
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-md p-3 mb-3">
                <p className="font-semibold text-indigo-800 dark:text-indigo-300">
                  {patientInfo.treatment.currentRegimen}
                </p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400">{patientInfo.treatment.cycleNumber}</p>
                <div className="mt-2 text-xs text-indigo-500 dark:text-indigo-400">
                  <span className="bg-white dark:bg-gray-800 px-2 py-0.5 rounded text-indigo-600 dark:text-indigo-400">
                    Started: {patientInfo.treatment.treatmentStart}
                  </span>
                </div>
              </div>
              <div className="text-sm mb-3">
                <p className="font-medium text-gray-700 dark:text-gray-300">Response Status:</p>
                <p className="text-gray-600 dark:text-gray-400">{patientInfo.treatment.responseStatus}</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-700 dark:text-gray-300">Next Steps:</p>
                <p className="text-gray-600 dark:text-gray-400">{patientInfo.treatment.plannedNext}</p>
              </div>
            </div>

            {/* Lab Values */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 col-span-1">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                  <Activity size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Latest Lab Values
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">01/20/2024</span>
              </div>
              <div className="space-y-2">
                {patientInfo.labValues.map((lab, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100 w-24">{lab.name}</span>
                      <span
                        className={`text-sm ${lab.flag === "LOW" ? "text-red-600 dark:text-red-400" : lab.flag === "HIGH" ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-gray-100"}`}
                      >
                        {lab.value} {lab.unit}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{lab.refRange}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">View Trends</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Last CBC: 3 days ago</span>
              </div>
            </div>

            {/* Vitals & Comorbidities */}
            <div className="grid grid-rows-2 gap-4 col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center mb-2">
                  <Heart size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Latest Vitals
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center p-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400">BP</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{patientInfo.vitals.bp}</p>
                  </div>
                  <div className="text-center p-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400">HR</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{patientInfo.vitals.hr}</p>
                  </div>
                  <div className="text-center p-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Temp</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{patientInfo.vitals.temp}</p>
                  </div>
                  <div className="text-center p-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400">O₂</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{patientInfo.vitals.o2}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center mb-2">
                  <AlertTriangle size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Comorbidities
                </h3>
                <div className="flex flex-wrap gap-1">
                  {patientInfo.comorbidities.map((condition, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-12 gap-6">
            {/* Treatment Timeline */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 col-span-6">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center mb-3">
                <TrendingUp size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                Treatment Timeline
              </h3>
              <div className="relative pl-6">
                {patientInfo.treatment.previousRegimens.map((regimen, index) => (
                  <div key={index} className="mb-4 relative">
                    <div className="absolute -left-6 top-0 w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border-2 border-indigo-500 dark:border-indigo-400"></div>
                    <div
                      className={`absolute -left-4 top-4 w-0.5 h-full ${index === patientInfo.treatment.previousRegimens.length - 1 ? "bg-transparent" : "bg-indigo-200 dark:bg-indigo-800"}`}
                    ></div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3">
                      <div className="flex justify-between">
                        <p className="font-medium text-gray-900 dark:text-gray-100">{regimen.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {regimen.start} - {regimen.end}
                        </p>
                      </div>
                      <p
                        className={`text-sm mt-1 ${regimen.response === "Refractory" ? "text-red-600 dark:text-red-400" : regimen.response === "Partial Response" ? "text-yellow-600 dark:text-yellow-400" : "text-green-600 dark:text-green-400"}`}
                      >
                        Response: {regimen.response}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{regimen.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medications and Recent Events */}
            <div className="grid grid-rows-2 col-span-6 gap-4">
              {/* Medications */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                    <Pill size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                    Current Medications
                  </h3>
                  <button className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                    View All
                  </button>
                </div>
                <div className="overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr className="text-xs text-gray-500 dark:text-gray-400 text-left">
                          <th className="pr-2 py-1 font-medium">Medication</th>
                          <th className="px-2 py-1 font-medium">Dosage</th>
                          <th className="px-2 py-1 font-medium">Frequency</th>
                          <th className="pl-2 py-1 font-medium">Route</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {patientInfo.medications.slice(0, 3).map((med, index) => (
                          <tr key={index} className="text-sm">
                            <td className="pr-2 py-1.5 font-medium text-gray-900 dark:text-gray-100">{med.name}</td>
                            <td className="px-2 py-1.5 text-gray-700 dark:text-gray-300">{med.dose}</td>
                            <td className="px-2 py-1.5 text-gray-700 dark:text-gray-300">{med.frequency}</td>
                            <td className="pl-2 py-1.5 text-gray-700 dark:text-gray-300">{med.route}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Recent Events */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                    <Clock size={18} className="mr-2 text-indigo-600 dark:text-indigo-400" />
                    Recent Events
                  </h3>
                  <button className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                    View All
                  </button>
                </div>
                <div className="space-y-2">
                  {patientInfo.recentEvents.slice(0, 3).map((event, index) => (
                    <div key={index} className="flex">
                      <div className="w-20 text-xs font-medium text-gray-500 dark:text-gray-400">{event.date}</div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{event.event}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-2 flex items-center justify-between">
          <div className="flex items-center text-sm">
            <Calendar size={16} className="text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">
              Next Appointment: <span className="font-medium">{patientInfo.nextAppointment}</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
              <FileText size={16} className="mr-1" />
              Full Chart
            </button>
            <button className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
              <ArrowDownCircle size={16} className="mr-1" />
              Download Summary
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

