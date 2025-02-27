"use client"

import type React from "react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronLeft, ChevronRight, Check, Mic } from "lucide-react"
import { useState } from "react"
import { consultationReasons, basicReasonOptions } from "../data/consultation-reasons"

interface MedicalInfoFormProps {
  formData: any
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSelectChange: (name: string, value: string) => void
  onBack: () => void
  onSubmit: (e: React.FormEvent) => void
  setVoiceAssistantActive: (active: boolean) => void
}

export function MedicalInfoForm({
  formData,
  handleChange,
  handleSelectChange,
  onBack,
  onSubmit,
  setVoiceAssistantActive,
}: MedicalInfoFormProps) {
  // Add a console log at the beginning of the MedicalInfoForm component to help debug
  // Add this right after the function declaration
  console.log("Reason from URL:", formData.reasonForConsult)
  const [openOtherReason, setOpenOtherReason] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check if required fields from both forms are filled
    const requiredFields = {
      page1: ["firstName", "lastName", "dateOfBirth", "email", "phone"],
      page2: ["reasonForConsult", "briefDescription", "consentToTreatment", "hipaaAcknowledgment"],
    }

    const missingFields = requiredFields.page1.filter((field) => !formData[field])
    if (missingFields.length > 0) {
      alert("Please go back and fill in all required fields from the first page.")
      return
    }

    const missingPage2Fields = requiredFields.page2.filter((field) => !formData[field])
    if (missingPage2Fields.length > 0) {
      alert("Please fill in all required fields before submitting.")
      return
    }

    onSubmit(e)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300">Medical Information</h2>

      {/* Voice Assistant Button */}
      <div className="mb-6 flex justify-center">
        <Button
          type="button"
          onClick={() => setVoiceAssistantActive(true)}
          className="relative group overflow-hidden rounded-full hover:scale-105 transition-all duration-200 px-6 py-2"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90 group-hover:opacity-100 transition-all duration-200"></span>
          <span className="relative text-white flex items-center">
            <Mic className="mr-2 h-4 w-4" />
            Use Voice to Fill Medical Information
          </span>
        </Button>
      </div>

      <div className="mb-4 space-y-2">
        <Label htmlFor="reasonForConsult" className="text-gray-700 dark:text-gray-300">
          Reason for Consultation*
        </Label>
        {/* Make sure the Select component for reasonForConsult is correctly handling the value */}
        {/* Find the Select component for reasonForConsult and ensure it looks like this: */}
        <Select
          name="reasonForConsult"
          value={formData.reasonForConsult}
          onValueChange={(value) => {
            handleSelectChange("reasonForConsult", value)
            if (value === "other") {
              setOpenOtherReason(true)
            }
          }}
        >
          <SelectTrigger className="bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700">
            <SelectValue placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent>
            {basicReasonOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {formData.reasonForConsult === "other" && (
          <div className="mt-2">
            <Label htmlFor="otherReason" className="text-gray-700 dark:text-gray-300">
              Please specify your reason*
            </Label>
            <Popover open={openOtherReason} onOpenChange={setOpenOtherReason}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openOtherReason}
                  className="w-full justify-between bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 mt-1"
                >
                  {formData.otherReason
                    ? consultationReasons.find((reason) => reason.value === formData.otherReason)?.label
                    : "Search for a specific condition..."}
                  <ChevronRight className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search for a condition..." />
                  <CommandList>
                    <CommandEmpty>No condition found.</CommandEmpty>
                    <CommandGroup className="max-h-[300px] overflow-y-auto">
                      {consultationReasons.map((reason) => (
                        <CommandItem
                          key={reason.value}
                          value={reason.value}
                          onSelect={(value) => {
                            handleSelectChange("otherReason", value)
                            setOpenOtherReason(false)
                          }}
                        >
                          <Check
                            className={`mr-2 h-4 w-4 ${
                              formData.otherReason === reason.value ? "opacity-100" : "opacity-0"
                            }`}
                          />
                          {reason.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>

      <div className="mb-4 space-y-2">
        <Label htmlFor="briefDescription" className="text-gray-700 dark:text-gray-300">
          Brief Description of Your Concerns*
        </Label>
        <Textarea
          id="briefDescription"
          name="briefDescription"
          value={formData.briefDescription}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Please describe your symptoms, concerns, or questions"
          className="flex-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 resize-none"
        />
      </div>

      <div className="mb-4 space-y-2">
        <Label htmlFor="primaryCarePhysician" className="text-gray-700 dark:text-gray-300">
          Primary Care Physician
        </Label>
        <Input
          id="primaryCarePhysician"
          name="primaryCarePhysician"
          value={formData.primaryCarePhysician}
          onChange={handleChange}
          placeholder="Name of your primary doctor (if any)"
          className="flex-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="currentMedications" className="text-gray-700 dark:text-gray-300">
            Current Medications
          </Label>
          <Textarea
            id="currentMedications"
            name="currentMedications"
            value={formData.currentMedications}
            onChange={handleChange}
            rows={3}
            placeholder=""
            className="flex-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 resize-none"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="allergies" className="text-gray-700 dark:text-gray-300">
            Allergies
          </Label>
          <Textarea
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            rows={3}
            placeholder=""
            className="flex-1 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 resize-none"
          />
        </div>
      </div>

      <div className="mb-4 space-y-2">
        <div className="flex items-center">
          <Checkbox
            id="previousHematologyHistory"
            name="previousHematologyHistory"
            checked={formData.previousHematologyHistory}
            onCheckedChange={(checked) =>
              handleSelectChange("previousHematologyHistory", checked === true ? "true" : "false")
            }
            className="mr-2 h-4 w-4 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
          />
          <Label htmlFor="previousHematologyHistory" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            I have previously seen a hematologist
          </Label>
        </div>

        {formData.previousHematologyHistory && (
          <div className="mt-2 pl-6">
            <Label htmlFor="hematologistInfo" className="text-sm text-gray-700 dark:text-gray-300">
              Previous Hematologist Information (Optional)
            </Label>
            <Textarea
              id="hematologistInfo"
              name="hematologistInfo"
              value={formData.hematologistInfo || ""}
              onChange={handleChange}
              placeholder="Please provide your previous hematologist's name and any relevant details"
              className="mt-1 w-full bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 resize-none"
              rows={3}
            />
          </div>
        )}
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-start">
            <Checkbox
              id="consentToTreatment"
              name="consentToTreatment"
              checked={formData.consentToTreatment}
              onCheckedChange={(checked) =>
                handleSelectChange("consentToTreatment", checked === true ? "true" : "false")
              }
              required
              className="mr-2 mt-1 h-4 w-4 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label htmlFor="consentToTreatment" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              I consent to telemedicine consultation and understand that this does not replace in-person medical care. I
              acknowledge that limitations exist with telemedicine and that I may be referred for in-person evaluation
              if needed.*
            </Label>
          </div>
        </div>

        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-start">
            <Checkbox
              id="hipaaAcknowledgment"
              name="hipaaAcknowledgment"
              checked={formData.hipaaAcknowledgment}
              onCheckedChange={(checked) =>
                handleSelectChange("hipaaAcknowledgment", checked === true ? "true" : "false")
              }
              required
              className="mr-2 mt-1 h-4 w-4 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label htmlFor="hipaaAcknowledgment" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              I acknowledge that my information will be handled according to HIPAA regulations, and I have reviewed the
              Privacy Policy.*
            </Label>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          type="button"
          onClick={onBack}
          variant="outline"
          className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full bg-transparent hover:bg-gray-50/30 dark:hover:bg-gray-800/30"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          type="submit"
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
          <span className="relative text-white">Create Account</span>
        </Button>
      </div>
    </form>
  )
}

