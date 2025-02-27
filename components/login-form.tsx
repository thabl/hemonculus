"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"

interface LoginFormProps {
  userType: "Patient" | "Provider"
  onSubmit: (email: string, password: string, remember: boolean) => void
}

export function LoginForm({ userType, onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, this would call an authentication API
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      onSubmit(email, password, remember)
    } catch (error) {
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
          {userType} Login
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Sign in to access your {userType.toLowerCase()} dashboard
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={remember}
              onCheckedChange={(checked) => setRemember(checked === true)}
              className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label htmlFor="remember" className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
              Remember me
            </Label>
          </div>
          <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Forgot password?
          </a>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full relative group overflow-hidden rounded-full hover:scale-105 transition-all duration-200 bg-transparent"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-90 group-hover:opacity-100 transition-all duration-200"></span>
          <span className="relative text-white">{isLoading ? "Signing in..." : "Sign In"}</span>
        </Button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  )
}

