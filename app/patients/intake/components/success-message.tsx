import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SuccessMessageProps {
  email: string
}

export function SuccessMessage({ email }: SuccessMessageProps) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-green-100/10 dark:bg-green-900/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
        <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Account Created Successfully!</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
        Thank you for providing your information. Our team will review your case and contact you shortly to schedule
        your telemedicine appointment. You will receive a confirmation email at {email} with further instructions.
      </p>
      <Link href="/" className="inline-flex justify-center">
        <Button className="px-6 py-2 relative group overflow-hidden rounded-full hover:scale-105 transition-all duration-200 bg-transparent">
          <span
            className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-red-500 to-blue-500 opacity-90 group-hover:opacity-100 transition-all duration-200"
            style={{
              WebkitMaskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
            }}
          ></span>
          <span className="relative text-white">Return to Homepage</span>
        </Button>
      </Link>
    </div>
  )
}

