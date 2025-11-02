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
    setShowWeChatDialog(true)
  }

  const handleHomeClick = () => {
    router.push('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:13728777024'
  }

  return (
    <header className="relative bg-slate-950/90 backdrop-blur-xl border-b border-purple-500/20 sticky top-0 z-50 shadow-2xl shadow-purple-500/10">
      {/* 顶部渐变光晕 */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo 和联系方式 */}
          <div className="flex items-center gap-8">
            <div
              className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-all group"
              onClick={handleHomeClick}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/40 group-hover:shadow-cyan-500/60 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6">
                  <span className="text-white font-black text-base">双杰</span>
                </div>
                {/* Logo 光晕 */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">
                双杰集团
              </span>
            </div>

            <button
              className="flex items-center gap-2 glass-effect px-4 py-2 rounded-xl border border-cyan-500/20 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer group"
              onClick={handlePhoneClick}
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold">13728777024</span>
            </button>

            <button
              className="flex items-center gap-2 glass-effect px-4 py-2 rounded-xl border border-purple-500/20 text-purple-400 hover:text-purple-300 hover:border-purple-500/40 transition-all duration-300 cursor-pointer group"
              onClick={handleHomeClick}
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm">返回首页</span>
            </button>
          </div>

          {/* 导航菜单 */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#business-services"
              className="relative text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 cursor-pointer group px-4 py-2"
            >
              公司注册
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full shadow-lg shadow-cyan-500/50" />
            </a>
            <a
              href="#accounting-services"
              className="relative text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 cursor-pointer group px-4 py-2"
            >
              审计服务
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full shadow-lg shadow-cyan-500/50" />
            </a>
            <a
              href="#tax-services"
              className="relative text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 cursor-pointer group px-4 py-2"
            >
              异常处理
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full shadow-lg shadow-cyan-500/50" />
            </a>
            <a
              href="#business-services"
              className="relative text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 cursor-pointer group px-4 py-2"
            >
              工商变更
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full shadow-lg shadow-cyan-500/50" />
            </a>
            <a
              href="#business-services"
              className="relative text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 cursor-pointer group px-4 py-2"
            >
              资质许可
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full shadow-lg shadow-cyan-500/50" />
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all duration-300"
            >
              <Search className="w-5 h-5" />
            </Button>

            <Button
              className="relative bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 hover:from-purple-700 hover:via-cyan-700 hover:to-blue-700 text-white cursor-pointer shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 rounded-xl px-6 font-bold overflow-hidden group"
              onClick={handleConsultClick}
            >
              {/* 按钮光效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">免费咨询</span>
            </Button>
          </nav>
        </div>
      </div>

      <WeChatQRDialog open={showWeChatDialog} onOpenChange={setShowWeChatDialog} />
    </header>
  )
}
