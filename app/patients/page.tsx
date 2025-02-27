"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { NavigationMenu } from "@/components/navigation-menu"

const consultationReasons = [
  {
    title: "Anemia",
    description: "Low red blood cell count, often causing fatigue",
  },
  {
    title: "Polycythemia",
    description: "Excess red blood cells, thickening the blood",
  },
  {
    title: "Leukopenia",
    description: "Low white blood cell count, weakening immune defense",
  },
  {
    title: "Leukocytosis",
    description: "High white blood cell count, often indicating infection",
  },
  {
    title: "Thrombocytopenia",
    description: "Low platelet count, potentially causing easy bleeding",
  },
  {
    title: "Thrombocytosis",
    description: "High platelet count, increasing clotting risk",
  },
  {
    title: "Bleeding or Easy Bruising",
    description: "Unusual bleeding or bruising from minor injuries",
  },
  {
    title: "Clotting Disorders",
    description: "Abnormal blood clot formation in veins or arteries",
  },
  {
    title: "Genetics",
    description: "Inherited blood disorders or cancer risk factors",
  },
  {
    title: "Indolent Hematologic Malignancies",
    description: "Slow-growing blood cancers requiring monitoring",
  },
  {
    title: "Other",
    description: "Specialist review for complex or unclear diagnoses",
  },
]

export default function PatientsPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="fixed inset-0 w-screen bg-gradient-to-br from-red-100 to-blue-100 dark:from-red-900 dark:to-blue-900 opacity-20 z-0 transition-colors duration-300"></div>
      <div className="relative z-10">
        <NavigationMenu />

        <main className="container mx-auto px-4 py-12 mt-20">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Referral Portal
            </h1>
            <p className="text-xl text-muted-foreground">
              Select your reason for consultation and connect with our expert hematologists
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 max-w-4xl mx-auto">
            {consultationReasons.map((reason) => (
              <Link
                key={reason.title}
                href={`/patients/intake?reason=${encodeURIComponent(reason.title.toLowerCase().replace(/ /g, "-"))}`}
                className="block"
              >
                <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:shadow-red-500/5 dark:hover:shadow-blue-500/5 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 cursor-pointer">
                  <CardHeader className="px-4 py-3">
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {reason.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                      {reason.description}
                    </CardDescription>
                  </CardHeader>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="rounded-full text-lg px-6 py-6 border-2 border-blue-500 dark:border-red-500 hover:bg-blue-50 dark:hover:bg-red-900/10 transition-colors duration-300"
              asChild
            >
              <Link href="/patients/intake">
                Schedule a Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </main>

        <footer className="py-8 px-6 text-center text-sm text-muted-foreground">
          <span>&copy; 2025 HemaConnect. All rights reserved.</span>
        </footer>
      </div>
    </div>
  )
}

