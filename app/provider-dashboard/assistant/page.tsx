import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Mic, Calendar, FileText, ClipboardList, Activity, FileSearch, Calculator } from "lucide-react"

export default function AssistantPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-[#f8f9fa] mb-6">Hemonculus AI</h1>

      {/* Standalone Chat Box */}
      <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-red-100/50 to-blue-100/50 dark:from-red-900/30 dark:to-blue-900/30 shadow-lg">
        <div className="p-6">
          <div className="flex space-x-2">
            <Input
              placeholder="Ask your hemonculus for help..."
              className="flex-grow bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-[#f8f9fa] placeholder:text-gray-700/70 dark:placeholder:text-[#f8f9fa]/70"
            />
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent hover:bg-gray-100/20 dark:hover:bg-gray-700/20 border-gray-200 dark:border-gray-700"
            >
              <Search className="h-4 w-4 text-gray-700 dark:text-[#f8f9fa]" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent hover:bg-gray-100/20 dark:hover:bg-gray-700/20 border-gray-200 dark:border-gray-700"
            >
              <Mic className="h-4 w-4 text-gray-700 dark:text-[#f8f9fa]" />
              <span className="sr-only">Speak</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="flex items-center justify-start gap-2 p-4 h-auto text-left bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800/30 border border-gray-200 dark:border-gray-700"
        >
          <Calendar className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
          <span className="text-sm sm:text-base truncate text-gray-700 dark:text-[#f8f9fa]">Reschedule a visit</span>
        </Button>

        <Button
          variant="outline"
          className="flex items-center justify-start gap-2 p-4 h-auto text-left bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800/30 border border-gray-200 dark:border-gray-700"
        >
          <FileText className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0" />
          <span className="text-sm sm:text-base truncate text-gray-700 dark:text-[#f8f9fa]">Summarize Rx history</span>
        </Button>

        <Button
          variant="outline"
          className="flex items-center justify-start gap-2 p-4 h-auto text-left bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800/30 border border-gray-200 dark:border-gray-700"
        >
          <ClipboardList className="h-5 w-5 text-purple-500 dark:text-purple-400 flex-shrink-0" />
          <span className="text-sm sm:text-base truncate text-gray-700 dark:text-[#f8f9fa]">Rx plan</span>
        </Button>

        <Button
          variant="outline"
          className="flex items-center justify-start gap-2 p-4 h-auto text-left bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800/30 border border-gray-200 dark:border-gray-700"
        >
          <FileSearch className="h-5 w-5 text-red-500 dark:text-red-400 flex-shrink-0" />
          <span className="text-sm sm:text-base truncate text-gray-700 dark:text-[#f8f9fa]">Review guidelines</span>
        </Button>

        <Button
          variant="outline"
          className="flex items-center justify-start gap-2 p-4 h-auto text-left bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800/30 border border-gray-200 dark:border-gray-700"
        >
          <Activity className="h-5 w-5 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
          <span className="text-sm sm:text-base truncate text-gray-700 dark:text-[#f8f9fa]">Find clinical trials</span>
        </Button>

        <Button
          variant="outline"
          className="flex items-center justify-start gap-2 p-4 h-auto text-left bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800/30 border border-gray-200 dark:border-gray-700"
        >
          <Calculator className="h-5 w-5 text-teal-500 dark:text-teal-400 flex-shrink-0" />
          <span className="text-sm sm:text-base truncate text-gray-700 dark:text-[#f8f9fa]">Calculators</span>
        </Button>
      </div>
    </div>
  )
}

