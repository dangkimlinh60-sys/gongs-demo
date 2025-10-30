"use client"

import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { WeChatQRDialog } from "@/components/wechat-qr-dialog"

export function FloatingConsultButton() {
  const [showWeChatDialog, setShowWeChatDialog] = useState(false)

  const handleConsultClick = () => {
    setShowWeChatDialog(true)
  }

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 group">
        <Button
          size="lg"
          className="relative bg-gradient-to-br from-purple-600 via-cyan-600 to-blue-600 hover:from-purple-700 hover:via-cyan-700 hover:to-blue-700 text-white rounded-2xl shadow-2xl shadow-cyan-500/40 h-16 w-16 p-0 animate-float cursor-pointer overflow-hidden border-2 border-purple-400/30 hover:border-cyan-400/50 transition-all duration-300"
          onClick={handleConsultClick}
        >
          {/* 按钮光效 */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* 图标 */}
          <MessageCircle className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300" />

          {/* 光环 */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

          {/* 装饰点 */}
          <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-pulse" />
        </Button>

        {/* 提示文字 */}
        <div className="absolute -bottom-10 right-0 glass-effect border border-purple-500/30 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap pointer-events-none shadow-lg shadow-purple-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
          <span className="bg-gradient-to-r from-purple-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent font-bold">
            立即咨询
          </span>
        </div>
      </div>
      <WeChatQRDialog open={showWeChatDialog} onOpenChange={setShowWeChatDialog} />
    </>
  )
}
