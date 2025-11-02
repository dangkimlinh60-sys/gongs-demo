import type React from "react"
import { Target, Users, Shield, FileText, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 overflow-hidden min-h-[600px]">
      {/* 动态网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e515_1px,transparent_1px),linear-gradient(to_bottom,#4f46e515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* 多层渐变光晕 */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-500/25 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-glow-pulse" style={{animationDelay: '1.5s'}} />

      {/* 商务背景图（改为本地图片，统一视觉） */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: "url(/gallery/14.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* 顶部装饰 */}
          <div className="flex justify-center items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-shimmer"
                 style={{backgroundImage: 'linear-gradient(90deg, transparent, #a855f7, #06b6d4, #a855f7, transparent)'}} />
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-shimmer"
                 style={{backgroundImage: 'linear-gradient(90deg, transparent, #06b6d4, #a855f7, #06b6d4, transparent)'}} />
          </div>

          {/* 主标题 - 一站式代办服务平台 */}
          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight drop-shadow-2xl animate-gradient-shift">
            一站式代办服务平台
          </h1>

          {/* 发光分割线 */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-1 w-40 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50 animate-border-glow" />
              <div className="absolute inset-0 h-1 w-40 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-full blur-md opacity-70" />
            </div>
          </div>

          {/* 特性卡片网格 */}
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
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-8 shadow-lg shadow-cyan-500/50"
                : "bg-slate-600 hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30"
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
      className="group relative glass-effect rounded-2xl p-7 border border-purple-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 tech-border"
      style={{animationDelay: delay}}
    >
      {/* 内部光效 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500" />

      <div className="relative flex items-center gap-5">
        {/* 图标容器 */}
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 text-white p-4 rounded-xl shadow-lg shadow-cyan-500/30 group-hover:shadow-purple-500/60 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6">
            {icon}
          </div>
          {/* 图标背景光晕 */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        </div>

        {/* 文字 */}
        <span className="text-white font-bold text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </span>
      </div>

      {/* 角落装饰点 */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300" />
      <div className="absolute bottom-3 left-3 w-2 h-2 bg-purple-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300" />
    </div>
  )
}
