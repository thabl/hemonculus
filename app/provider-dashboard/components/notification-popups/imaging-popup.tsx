"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, FileText, ZoomIn } from "lucide-react"

interface ImagingPopupProps {
  isOpen: boolean
  onClose: () => void
  result: {
    patient: string
    date: string
    type: string
    findings: string
    impression: string
    comparison: string
    technique: string
  }
}

export function ImagingPopup({ isOpen, onClose, result }: ImagingPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] bg-white dark:bg-[#1a1625] border-gray-200 dark:border-white/10">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">{result.type}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Patient: {result.patient} • {result.date}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <FileText className="h-4 w-4" />
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-5 gap-4">
          {/* Left side - Report */}
          <div className="col-span-3 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Clinical History</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{result.technique}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Comparison</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{result.comparison}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Findings</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{result.findings}</p>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Impression</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{result.impression}</p>
            </div>
          </div>

          {/* Right side - Image thumbnails */}
          <div className="col-span-2 space-y-3">
            <div className="aspect-square relative group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/50 group-hover:bg-gray-900/20 dark:group-hover:bg-gray-900/60 transition-colors" />
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="PET/CT Scan"
                className="w-full h-full object-cover"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-2 right-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square relative group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/50 group-hover:bg-gray-900/20 dark:group-hover:bg-gray-900/60 transition-colors" />
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt={`PET/CT Scan ${i}`}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

