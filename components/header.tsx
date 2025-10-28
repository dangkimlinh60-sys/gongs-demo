"use client"

import { Phone, Search, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { WeChatQRDialog } from "@/components/wechat-qr-dialog"

export function Header() {
  const router = useRouter()
  const [showWeChatDialog, setShowWeChatDialog] = useState(false)

  const handleConsultClick = () => {
    // 打开微信二维码对话框
    setShowWeChatDialog(true)
  }

  const handleHomeClick = () => {
    router.push('/')
    // 如果已经在首页，滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:13728777024'
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Contact */}
          <div className="flex items-center gap-8">
            <div
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleHomeClick}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">双杰</span>
              </div>
              <span className="text-xl font-bold text-gray-800">双杰集团</span>
            </div>
            <button
              className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors cursor-pointer"
              onClick={handlePhoneClick}
            >
              <Phone className="w-4 h-4" />
              <span className="text-lg font-semibold">13728777024</span>
            </button>
            <button
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              onClick={handleHomeClick}
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">返回首页</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#business-services" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">
              公司注册
            </a>
            <a href="#accounting-services" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">
              审计服务
            </a>
            <a href="#tax-services" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">
              异常处理
            </a>
            <a href="#business-services" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">
              工商变更
            </a>
            <a href="#business-services" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">
              资质许可
            </a>
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
              onClick={handleConsultClick}
            >
              免费咨询
            </Button>
          </nav>
        </div>
      </div>
      <WeChatQRDialog open={showWeChatDialog} onOpenChange={setShowWeChatDialog} />
    </header>
  )
}
