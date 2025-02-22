import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ClinicPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">AI Telemedicine Hematology Platform</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-700 dark:text-gray-300">Virtual Consultations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Conduct high-quality video consultations with patients, ensuring face-to-face interaction and detailed
              examination capabilities.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-700 dark:text-gray-300">AI-Powered Diagnostics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Utilize advanced AI algorithms to assist in analyzing blood work and imaging results, providing rapid and
              accurate diagnostic support.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-700 dark:text-gray-300">Real-time Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Seamlessly collaborate with other specialists in real-time, sharing patient data and insights for
              comprehensive care.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-700 dark:text-gray-300">Secure Data Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Ensure patient data privacy and security with our state-of-the-art encryption and decentralized storage
              solutions.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-700 dark:text-gray-300">Intelligent Scheduling</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Optimize your clinic schedule with AI-driven appointment management, reducing wait times and improving
              patient satisfaction.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-700 dark:text-gray-300">Remote Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Keep track of patients' conditions between appointments with integrated remote monitoring tools and
              automated alerts.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

