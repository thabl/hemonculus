"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Download, FileText } from "lucide-react"

interface CBCPopupProps {
  isOpen: boolean
  onClose: () => void
  result: {
    patient: string
    date: string
    values: {
      name: string
      value: number
      unit: string
      reference: string
      status?: "low" | "high" | "critical"
    }[]
  }
}

export function CBCPopup({ isOpen, onClose, result }: CBCPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white dark:bg-[#1a1625] border-gray-200 dark:border-white/10">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Complete Blood Count</h2>
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

        <div className="space-y-4">
          {/* Critical Alert if any */}
          {result.values.some((v) => v.status === "critical") && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-lg p-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <p className="text-sm text-red-800 dark:text-red-200">
                Critical values detected. Immediate attention required.
              </p>
            </div>
          )}

          {/* CBC Values */}
          <div className="border rounded-lg border-gray-200 dark:border-gray-700 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Test</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Result</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Units</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Reference
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {result.values.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900/30">
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">{item.name}</td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={
                          item.status === "critical"
                            ? "text-red-600 dark:text-red-400 font-medium"
                            : item.status === "low"
                              ? "text-orange-600 dark:text-orange-400"
                              : item.status === "high"
                                ? "text-orange-600 dark:text-orange-400"
                                : "text-gray-900 dark:text-gray-100"
                        }
                      >
                        {item.value}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{item.unit}</td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{item.reference}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

