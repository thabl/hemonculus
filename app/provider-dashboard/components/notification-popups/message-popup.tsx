"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mic, Send } from "lucide-react"

interface MessagePopupProps {
  isOpen: boolean
  onClose: () => void
  message: {
    sender: string
    content: string
    time: string
    avatar?: string
  }
}

export function MessagePopup({ isOpen, onClose, message }: MessagePopupProps) {
  const [reply, setReply] = useState("")
  const [isVoiceMode, setIsVoiceMode] = useState(false)

  const handleSend = () => {
    // Handle sending the reply
    console.log("Sending reply:", reply)
    setReply("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white dark:bg-[#1a1625] border-gray-200 dark:border-white/10 transition-colors duration-300">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <Avatar className="h-8 w-8">
              <AvatarImage src={message.avatar} />
              <AvatarFallback className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                {message.sender[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-semibold">{message.sender}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{message.time}</span>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg my-4 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <p className="text-gray-700 dark:text-gray-300">{message.content}</p>
        </div>
        <div className="space-y-4">
          {!isVoiceMode ? (
            <Textarea
              placeholder="Type your reply..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              className="min-h-[100px] bg-white dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors duration-300"
            />
          ) : (
            <div className="min-h-[100px] flex items-center justify-center border rounded-md border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500/10 to-blue-500/10 dark:from-red-500/20 dark:to-blue-500/20 flex items-center justify-center mx-auto mb-2">
                  <Mic className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Click to start recording</p>
              </div>
            </div>
          )}
        </div>
        <DialogFooter className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700/50 pt-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setIsVoiceMode(!isVoiceMode)}
          >
            <Mic className={`h-4 w-4 ${isVoiceMode ? "text-red-500 dark:text-red-400" : ""}`} />
          </Button>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSend}
              className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white gap-2 transition-all duration-300"
            >
              <Send className="h-4 w-4" />
              Send Reply
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

