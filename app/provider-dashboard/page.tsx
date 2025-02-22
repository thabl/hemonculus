import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProviderDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">Provider Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-[90%] mx-auto">
        <Card className="overflow-hidden bg-white dark:bg-gray-800">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-base text-gray-700 dark:text-gray-300">Total Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">1,234</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden bg-white dark:bg-gray-800">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-base text-gray-700 dark:text-gray-300">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">15</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden bg-white dark:bg-gray-800">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-base text-gray-700 dark:text-gray-300">Pending Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">7</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden bg-white dark:bg-gray-800">
          <CardHeader className="space-y-0 pb-2">
            <CardTitle className="text-base text-gray-700 dark:text-gray-300">Recent Consultations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">28</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

