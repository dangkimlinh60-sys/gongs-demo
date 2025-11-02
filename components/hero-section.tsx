import type React from "react"
import { Target, Users, Shield, FileText, Zap, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[520px] border-b border-slate-200">
      {/* 动态网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e515_1px,transparent_1px),linear-gradient(to_bottom,#4f46e515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* 多层渐变光晕 */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-500/25 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-glow-pulse" style={{animationDelay: '1.5s'}} />

      // 官方风格：去除大背景图


      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* 特性卡片网格（官方风格：保留功能要点） */}
          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto pt-10">
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="业务全面"
              delay="0s"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="快速下证"
              delay="0.1s"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="一站代办"
              delay="0.2s"
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8" />}
              title="一次性收费"
              delay="0.3s"
            />
          </div>
        </div>
      </div>

      {/* 底部装饰点 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === 0
                ? "bg-blue-600 w-8 shadow-lg shadow-blue-200"
                : "bg-slate-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-200"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  delay = "0s"
}: {
  icon: React.ReactNode
  title: string
  delay?: string
}) {
  return (
    <div
      className="group relative rounded-2xl p-7 border border-blue-200 bg-white hover:border-blue-400 transition-all duration-500 hover:scale-105 hover:shadow-lg"
      style={{animationDelay: delay}}
    >
      <div className="relative flex items-center gap-5">
        {/* 图标容器 */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-4 rounded-xl shadow-md group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
        </div>

        {/* 文字 */}
        <span className="text-slate-900 font-bold text-2xl group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </span>
      </div>
    </div>
  )
}
