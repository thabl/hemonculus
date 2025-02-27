"use client"

import { useState } from "react"
import { Beaker, Brain, Image, MessageCircle, ChevronDown, Clipboard, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessagePopup } from "./notification-popups/message-popup"
import { CBCPopup } from "./notification-popups/cbc-popup"
import { ImagingPopup } from "./notification-popups/imaging-popup"

export default function ProviderDashboardHomeContent() {
  // Mock inbox notifications
  const notifications = [
    {
      id: 1,
      type: "message",
      icon: <MessageCircle size={16} className="text-blue-500 dark:text-blue-400" />,
      title: "Message from Sarah Adams",
      content: "Question about increased bruising with ibrutinib",
      time: "10 min ago",
      isRead: false,
      category: "messages",
      link: "/provider-dashboard/inbox/1",
    },
    {
      id: 2,
      type: "lab",
      icon: <Beaker size={16} className="text-purple-500 dark:text-purple-400" />,
      title: "New CBC Results",
      content: "James Wilson - Critical: Platelets 22 × 10^9/L",
      time: "32 min ago",
      isRead: false,
      category: "labs",
      priority: "high",
      link: "/provider-dashboard/labs/2",
    },
    {
      id: 3,
      type: "message",
      icon: <MessageCircle size={16} className="text-blue-500 dark:text-blue-400" />,
      title: "Message from Robert Johnson",
      content: "Requesting appointment change for next week",
      time: "1 hour ago",
      isRead: true,
      category: "messages",
      link: "/provider-dashboard/inbox/3",
    },
    {
      id: 4,
      type: "imaging",
      icon: <Image size={16} className="text-green-500 dark:text-green-400" />,
      title: "PET/CT Results Available",
      content: "Emily Clark - Follow-up for lymphoma treatment",
      time: "2 hours ago",
      isRead: false,
      category: "imaging",
      link: "/provider-dashboard/imaging/4",
    },
    {
      id: 5,
      type: "lab",
      icon: <Beaker size={16} className="text-purple-500 dark:text-purple-400" />,
      title: "New Bone Marrow Biopsy Report",
      content: "David Patel - Post-treatment assessment",
      time: "3 hours ago",
      isRead: true,
      category: "labs",
      link: "/provider-dashboard/labs/5",
    },
    {
      id: 6,
      type: "procedure",
      icon: <Clipboard size={16} className="text-orange-500 dark:text-orange-400" />,
      title: "Apheresis Procedure Note",
      content: "Lisa Martinez - Stem cell collection completed",
      time: "5 hours ago",
      isRead: true,
      category: "procedures",
      link: "/provider-dashboard/procedures/6",
    },
    {
      id: 7,
      type: "message",
      icon: <MessageCircle size={16} className="text-blue-500 dark:text-blue-400" />,
      title: "Message from Maria Garcia",
      content: "Experiencing fever after chemotherapy",
      time: "6 hours ago",
      isRead: false,
      category: "messages",
      priority: "high",
      link: "/provider-dashboard/inbox/7",
    },
    {
      id: 8,
      type: "lab",
      icon: <Beaker size={16} className="text-purple-500 dark:text-purple-400" />,
      title: "New Coagulation Panel",
      content: "Thomas Wright - INR 3.6, PT 34s",
      time: "8 hours ago",
      isRead: true,
      category: "labs",
      priority: "high",
      link: "/provider-dashboard/labs/8",
    },
    {
      id: 9,
      type: "imaging",
      icon: <Image size={16} className="text-green-500 dark:text-green-400" />,
      title: "MRI Results Available",
      content: "Samantha Lee - Extramedullary disease assessment",
      time: "Yesterday",
      isRead: true,
      category: "imaging",
      link: "/provider-dashboard/imaging/9",
    },
    {
      id: 10,
      type: "procedure",
      icon: <Clipboard size={16} className="text-orange-500 dark:text-orange-400" />,
      title: "Port Placement Report",
      content: "Michael Thompson - Successful insertion",
      time: "Yesterday",
      isRead: true,
      category: "procedures",
      link: "/provider-dashboard/procedures/10",
    },
  ]

  const [selectedNotification, setSelectedNotification] = useState<number | null>(null)

  // Mock data for popups
  const mockCBCData = {
    patient: "James Wilson",
    date: "February 25, 2025 09:28 AM",
    values: [
      { name: "WBC", value: 3.8, unit: "x10^9/L", reference: "4.0-11.0", status: "low" },
      { name: "RBC", value: 4.1, unit: "x10^12/L", reference: "4.5-5.9", status: "low" },
      { name: "Hemoglobin", value: 12.8, unit: "g/dL", reference: "13.5-17.5", status: "low" },
      { name: "Hematocrit", value: 37.2, unit: "%", reference: "41.0-53.0", status: "low" },
      { name: "Platelets", value: 22, unit: "x10^9/L", reference: "150-450", status: "critical" },
      { name: "Neutrophils", value: 2.1, unit: "x10^9/L", reference: "2.0-7.0" },
      { name: "Lymphocytes", value: 1.2, unit: "x10^9/L", reference: "1.0-3.0" },
    ],
  }

  const mockPETCTData = {
    patient: "Emily Clark",
    date: "February 25, 2025 07:45 AM",
    type: "PET/CT Whole Body",
    technique: "FDG-PET/CT scan performed from skull base to mid-thigh following administration of 10 mCi F-18 FDG.",
    comparison: "Prior PET/CT dated November 15, 2024",
    findings:
      "Multiple FDG-avid lymph nodes noted in the cervical, axillary, and mediastinal regions. Largest node measures 2.8 cm in short axis (previously 3.2 cm) with SUV max of 4.2 (previously 5.8). No new FDG-avid lesions identified. No evidence of extranodal disease.",
    impression:
      "1. Partial metabolic response to therapy with decrease in size and FDG uptake of previously identified lymphadenopathy.\n2. No evidence of new disease.",
  }

  // Mock research articles
  const researchArticles = [
    {
      id: 1,
      title:
        "Long-term outcomes of ibrutinib in patients with chronic lymphocytic leukemia: 8-year follow-up of phase 3 RESONATE-2 study",
      journal: "Journal of Clinical Oncology",
      date: "February 2025",
      relevance: "3 CLL patients in your panel",
      summary:
        "Extended follow-up confirms sustained efficacy and manageable safety profile of ibrutinib as first-line treatment for CLL. 8-year PFS rate was 67.2% versus 12.9% for chlorambucil. Particularly relevant for your elderly CLL patients (Wilson, Patel).",
      doi: "10.1200/JCO.24.00831",
    },
    {
      id: 2,
      title: "Improved outcomes with early intervention for venetoclax-associated neutropenia in AML",
      journal: "Blood",
      date: "January 2025",
      relevance: "4 AML patients in your panel",
      summary:
        "Study demonstrates that proactive management of venetoclax-associated neutropenia with early dose adjustments and prophylactic antimicrobials reduces infection rates without compromising efficacy. Consider implementing protocol for your patients on Ven+HMA regimens.",
      doi: "10.1182/blood.2024019433",
    },
    {
      id: 3,
      title: "Risk-adapted prophylaxis for pneumocystis pneumonia in hematologic malignancies",
      journal: "Leukemia",
      date: "February 2025",
      relevance: "Applies to multiple patients",
      summary:
        "New risk-stratification model outperforms traditional CD4+ count for PCP prophylaxis decisions. High validity in lymphoid malignancies. Algorithm suggests safely withholding prophylaxis in low-risk patients, potentially reducing adverse effects.",
      doi: "10.1038/s41375-024-01567-8",
    },
    {
      id: 4,
      title: "Real-world experience with polatuzumab-based therapy for relapsed/refractory DLBCL",
      journal: "Hematological Oncology",
      date: "January 2025",
      relevance: "1 DLBCL patient (Lee)",
      summary:
        "Multicenter analysis shows 43% ORR with pola-BR in patients who failed 2+ lines of therapy. Median PFS of 5.9 months. Notable neurological toxicity profile differs from clinical trials. Consider monitoring for patient Lee who started this regimen.",
      doi: "10.1002/hon.3175",
    },
    {
      id: 5,
      title: "Iron deficiency management in cancer-related anemia: intravenous versus oral supplementation",
      journal: "Supportive Care in Cancer",
      date: "February 2025",
      relevance: "Multiple patients with therapy-induced anemia",
      summary:
        "Randomized trial demonstrates superior hemoglobin recovery with IV iron compared to oral supplementation in patients with cancer-related anemia (9.6 g/dL increase vs. 5.4 g/dL). Quality of life improvements were significant in IV group. Consider for patients with treatment-related anemia.",
      doi: "10.1007/s00520-024-07889-8",
    },
    {
      id: 6,
      title:
        "Early results of chimeric antigen receptor T-cell therapy in elderly patients with high-risk hematological malignancies",
      journal: "Nature Medicine",
      date: "January 2025",
      relevance: "2 potential CAR-T candidates in your panel",
      summary:
        "Age-adapted CAR-T protocols show promising efficacy in patients >75 years. CRS and ICANS incidence comparable to younger cohorts with modified lymphodepletion. May be relevant for patient Adams who is considering CAR-T therapy.",
      doi: "10.1038/s41591-024-02700-9",
    },
  ]

  const [expandedArticle, setExpandedArticle] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      {/* Left panel - Notifications */}
      <div className="bg-white dark:bg-[#1a1625]/50 dark:backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden">
        <div className="border-b border-gray-200 dark:border-white/10 flex justify-between items-center p-4">
          <h2 className="font-semibold text-lg text-gray-700 dark:text-[#f8f9fa]">Notifications</h2>
          <Button variant="link" className="text-primary hover:text-primary/80" asChild>
            <Link href="/provider-dashboard/inbox">View All Inbox</Link>
          </Button>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-20rem)]">
          <div className="p-4 space-y-3">
            {notifications
              .filter((n) => !n.isRead)
              .slice(0, 5)
              .map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => setSelectedNotification(notification.id)}
                  className={`rounded-lg shadow-sm cursor-pointer transition-colors ${
                    notification.priority === "high" ? "border-l-4 border-l-red-500 dark:border-l-red-700" : ""
                  } ${
                    notification.type === "message"
                      ? "bg-blue-50/80 dark:bg-blue-900/20"
                      : notification.type === "lab"
                        ? "bg-purple-50/80 dark:bg-purple-900/20"
                        : notification.type === "imaging"
                          ? "bg-green-50/80 dark:bg-green-900/20"
                          : "bg-orange-50/80 dark:bg-orange-900/20"
                  } p-3 hover:bg-white/50 dark:hover:bg-white/5`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {notification.icon}
                    <span className="font-medium text-sm text-gray-900 dark:text-[#f8f9fa]">
                      {notification.title}
                      {notification.priority === "high" && (
                        <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-full">
                          Critical
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="text-sm mb-1 ml-6 text-gray-700 dark:text-gray-300">{notification.content}</p>
                  <div className="text-xs text-gray-500 dark:text-gray-400 ml-6 flex items-center justify-between">
                    <span>{notification.time}</span>
                  </div>
                </div>
              ))}

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-white/10"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white dark:bg-[#1a1625] text-sm text-gray-500 dark:text-gray-400">
                  Earlier Today
                </span>
              </div>
            </div>

            {notifications
              .filter((n) => n.isRead)
              .slice(0, 5)
              .map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => setSelectedNotification(notification.id)}
                  className="rounded-lg bg-white/60 dark:bg-[#1a1625]/60 border border-gray-200 dark:border-white/10 shadow-sm cursor-pointer hover:bg-white/80 dark:hover:bg-white/5 transition-colors p-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {notification.icon}
                    <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
                      {notification.title}
                      {notification.priority === "high" && (
                        <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-full">
                          Critical
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 ml-6">{notification.content}</p>
                  <div className="text-xs text-gray-500 dark:text-gray-400 ml-6 flex items-center justify-between">
                    <span>{notification.time}</span>
                  </div>
                </div>
              ))}

            <div className="flex justify-center pt-4">
              <button className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 flex items-center">
                <ChevronDown size={16} className="mr-1" />
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel - Research Articles */}
      <div className="bg-white dark:bg-[#1a1625]/50 dark:backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden">
        <div className="border-b border-gray-200 dark:border-white/10 p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg text-gray-700 dark:text-[#f8f9fa]">Relevant Research</h2>
            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              <Brain size={16} className="mr-1 text-purple-500 dark:text-purple-400" />
              <span>AI-recommended for your patients</span>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-20rem)]">
          <div className="p-4 space-y-4">
            {researchArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white/80 dark:bg-[#1a1625]/60 border border-gray-200 dark:border-white/10 rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <div className="p-4">
                  <div className="flex justify-between">
                    <h3 className="text-base font-semibold text-gray-700 dark:text-[#f8f9fa]">{article.title}</h3>
                  </div>
                  <div className="mt-1 flex flex-wrap text-xs text-gray-500 dark:text-gray-400">
                    <span>{article.journal}</span>
                    <span className="mx-1">•</span>
                    <span>{article.date}</span>
                    <span className="mx-1">•</span>
                    <span>DOI: {article.doi}</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400">
                      <Brain size={12} className="mr-1" />
                      {article.relevance}
                    </span>
                  </div>

                  {expandedArticle === article.id && (
                    <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-50/80 dark:bg-gray-800/30 p-3 rounded-md">
                      <p>{article.summary}</p>
                    </div>
                  )}

                  <div className="mt-3 flex justify-between">
                    <button
                      onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                      className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                      <Brain size={14} className="mr-1" />
                      {expandedArticle === article.id ? "Hide AI Summary" : "Show AI Summary"}
                    </button>
                    <div className="flex space-x-2">
                      <button className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                        <Download size={14} className="mr-1" />
                        PDF
                      </button>
                      <Button variant="link" className="text-primary hover:text-primary/80">
                        View Full Article
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Popups */}
      <MessagePopup
        isOpen={selectedNotification === 1}
        onClose={() => setSelectedNotification(null)}
        message={{
          sender: "Sarah Adams",
          content: "Question about increased bruising with ibrutinib",
          time: "10 min ago",
          avatar: "/placeholder.svg?height=40&width=40",
        }}
      />

      <CBCPopup
        isOpen={selectedNotification === 2}
        onClose={() => setSelectedNotification(null)}
        result={mockCBCData}
      />

      <ImagingPopup
        isOpen={selectedNotification === 4}
        onClose={() => setSelectedNotification(null)}
        result={mockPETCTData}
      />
    </div>
  )
}

