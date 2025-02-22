import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#1f2937] dark:text-gray-300">Settings</h1>
      <Card className="bg-white dark:bg-[#1f2937]">
        <CardHeader>
          <CardTitle className="text-gray-700 dark:text-gray-300">General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode" className="flex flex-col space-y-1">
              <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
              <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                Enable dark mode for the dashboard
              </span>
            </Label>
            <Switch
              id="dark-mode"
              className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700"
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="flex flex-col space-y-1">
              <span className="text-gray-700 dark:text-gray-300">Notifications</span>
              <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                Receive notifications for important updates
              </span>
            </Label>
            <Switch
              id="notifications"
              className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700"
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="traditional-emr" className="flex flex-col space-y-1">
              <span className="text-gray-700 dark:text-gray-300">Traditional EMR</span>
              <span className="font-normal text-sm text-gray-500 dark:text-gray-400">
                Enable access to traditional EMR platform
              </span>
            </Label>
            <Switch
              id="traditional-emr"
              className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700"
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="ai-assistant" className="flex flex-col space-y-1">
              <span className="text-gray-700 dark:text-gray-300">AI Assistant</span>
              <span className="font-normal text-sm text-gray-500 dark:text-gray-400">Enable AI assistant features</span>
            </Label>
            <Switch
              id="ai-assistant"
              className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

