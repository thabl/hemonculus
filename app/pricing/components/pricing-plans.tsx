import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

const PricingPlans = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-4 min-h-[110%]">
      {/* Essential Plan */}
      <Card className="flex-1 border rounded-lg overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200/50 dark:border-white/10">
        <CardHeader className="p-4">
          <h2 className="text-xl font-bold dark:text-white">Essential Care</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Pay-per-visit model</p>
          <div className="mt-3">
            <span className="text-2xl font-bold dark:text-white">$50</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">/visit</span>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">Telemedicine consultations with board-certified hematologists</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">Asynchronous care for routine labs and prescriptions*</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">Secure patient portal access</span>
            </li>
          </ul>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            *For established patients with qualifying conditions
          </p>
        </CardContent>
      </Card>

      {/* Basic Plan */}
      <Card className="flex-1 rounded-lg overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200/50 dark:border-white/10">
        <CardHeader className="p-4">
          <h2 className="text-xl font-bold dark:text-white">Basic Care</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Annual membership + visits</p>
          <div className="mt-3">
            <span className="text-2xl font-bold dark:text-white">$300</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">/year</span>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">+ $50 per visit</p>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">All Essential Care features</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">Full access to Hemonculus AI assistant</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">Clinical trial matching database</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">Priority scheduling</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Premium Plan */}
      <Card className="flex-1 relative rounded-lg overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200/50 dark:border-white/10 group">
        <CardHeader className="p-4">
          <div className="flex items-baseline gap-2">
            <h2 className="text-xl font-bold dark:text-white">Premium Care</h2>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Plus</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Comprehensive care package</p>
          <div className="mt-3">
            <span className="text-2xl font-bold dark:text-white">$1,000</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">/year</span>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Includes quarterly visits</p>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">All Basic Care features</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">Quarterly included visits with your dedicated hematologist</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">Additional visits at $50/consultation</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">Second opinion access to leading national experts</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
              <span className="dark:text-gray-100">Advanced care coordination and treatment planning</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default PricingPlans

