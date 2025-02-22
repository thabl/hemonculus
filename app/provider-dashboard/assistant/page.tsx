import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Search } from "lucide-react"

export default function AssistantPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">AI Assistant</h1>
      <Card className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-700 dark:text-gray-300">Search or Speak to Your AI Assistant</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="Ask your AI assistant..." className="flex-grow bg-white dark:bg-gray-900" />
            <Button
              variant="outline"
              size="icon"
              className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Mic className="h-4 w-4" />
              <span className="sr-only">Speak</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Personalized Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Your AI assistant is trained to understand and adapt to your individual workflow, providing tailored
              support for your specific needs.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Real-time Audio Interaction</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Engage with your AI assistant through voice commands, allowing for hands-free operation and natural
              conversation.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Intelligent Query Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Advanced natural language processing allows the assistant to understand complex medical queries and
              provide accurate, relevant information.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle>Continuous Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The AI assistant continuously learns from your interactions, improving its performance and becoming more
              attuned to your preferences over time.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

