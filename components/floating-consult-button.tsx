"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { WeChatQRDialog } from "@/components/wechat-qr-dialog"

export function FloatingConsultButton() {
  const [showWeChatDialog, setShowWeChatDialog] = useState(false)

  const handleConsultClick = () => {
    // 打开微信二维码对话框
    setShowWeChatDialog(true)
  }

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl h-16 w-16 p-0 animate-bounce cursor-pointer"
          onClick={handleConsultClick}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
        <div className="absolute -bottom-8 right-0 bg-red-600 text-white text-sm px-3 py-1 rounded-full whitespace-nowrap pointer-events-none">
          立即咨询
        </div>
      </div>
      <WeChatQRDialog open={showWeChatDialog} onOpenChange={setShowWeChatDialog} />
    </>
  )
}
