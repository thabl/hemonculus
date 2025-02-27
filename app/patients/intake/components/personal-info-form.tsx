"use client"

import type React from "react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface PersonalInfoFormProps {
  formData: any
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSelectChange: (name: string, value: string) => void
  onNext: () => void
}

export function PersonalInfoForm({ formData, handleChange, handleSelectChange, onNext }: PersonalInfoFormProps) {
  const handleNextClick = () => {
    // Check if all required fields are filled
    const requiredFields = ["firstName", "lastName", "dateOfBirth", "email", "phone"]
    const missingFields = requiredFields.filter((field) => !formData[field])

    if (missingFields.length > 0) {
      alert("Please fill in all required fields before proceeding.")
      return
    }

    onNext()
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">
            First Name*
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="flex-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">
            Last Name*
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="flex-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth" className="text-gray-700 dark:text-gray-300">
            Date of Birth*
          </Label>
          <Input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            max="2025-12-31"
            className="bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 dark:[color-scheme:dark] dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender" className="text-gray-700 dark:text-gray-300">
            Gender
          </Label>
          <Select name="gender" value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
            <SelectTrigger className="bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
            Email*
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
            Phone*
          </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="flex-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Insurance Information (Optional)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="insuranceProvider" className="text-gray-700 dark:text-gray-300">
            Insurance Provider
          </Label>
          <Input
            id="insuranceProvider"
            name="insuranceProvider"
            value={formData.insuranceProvider}
            onChange={handleChange}
            className="flex-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="policyNumber" className="text-gray-700 dark:text-gray-300">
            Policy Number
          </Label>
          <Input
            id="policyNumber"
            name="policyNumber"
            value={formData.policyNumber}
            onChange={handleChange}
            className="flex-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button
          onClick={handleNextClick}
          className="px-6 py-2 relative group overflow-hidden rounded-full hover:scale-105 transition-all duration-200 bg-transparent"
        >
          <span
            className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-red-500 to-blue-500 opacity-90 group-hover:opacity-100 transition-all duration-200"
            style={{
              WebkitMaskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
            }}
          ></span>
          <span className="relative text-white">Next Step</span>
        </Button>
      </div>
    </div>
  )
}

