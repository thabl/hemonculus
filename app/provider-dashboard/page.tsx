import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProviderDashboardHomeContent from "./components/provider-dashboard-home-content"

export default function ProviderDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-[#f8f9fa] mb-6 max-w-[90%] mx-auto">
        Provider Dashboard
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-[90%] mx-auto">
        <Card className="overflow-hidden bg-white dark:bg-[#1a1625]/50 dark:backdrop-blur-sm border dark:border-white/10">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-base text-gray-700 dark:text-[#f8f9fa]">Total Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-700 dark:text-[#f8f9fa]">1,234</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden bg-white dark:bg-[#1a1625]/50 dark:backdrop-blur-sm border dark:border-white/10">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-base text-gray-700 dark:text-[#f8f9fa]">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-700 dark:text-[#f8f9fa]">15</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden bg-white dark:bg-[#1a1625]/50 dark:backdrop-blur-sm border dark:border-white/10">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-base text-gray-700 dark:text-[#f8f9fa]">Pending Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-700 dark:text-[#f8f9fa]">7</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden bg-white dark:bg-[#1a1625]/50 dark:backdrop-blur-sm border dark:border-white/10">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-base text-gray-700 dark:text-[#f8f9fa]">Recent Consultations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-gray-700 dark:text-[#f8f9fa]">28</p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-[90%] mx-auto mt-8">
        <ProviderDashboardHomeContent />
      </div>
    </div>
  )
}

