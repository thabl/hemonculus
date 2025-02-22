import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Decentralized Medical Record System</h1>
      <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <AlertTitle className="text-blue-800 dark:text-blue-200">Note</AlertTitle>
        <AlertDescription className="text-blue-700 dark:text-blue-300">
          Traditional EMR platform is available but must be enabled under settings.
        </AlertDescription>
      </Alert>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Enhanced Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our decentralized system ensures that patient data is distributed across multiple secure nodes,
              significantly reducing the risk of large-scale data breaches and unauthorized access.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Improved Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Work seamlessly with our AI-powered front-end assistant to review patient information quickly and
              efficiently, without the need to navigate complex traditional EMR interfaces.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Patient Data Ownership</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Empower patients with control over their medical data, allowing them to grant and revoke access to their
              records easily and securely.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Interoperability</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our system seamlessly integrates with other healthcare providers and systems, ensuring continuity of care
              and comprehensive patient histories.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

