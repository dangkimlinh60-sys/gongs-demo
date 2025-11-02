import { Calendar, TrendingUp, Calculator, FileCheck, DollarSign, PieChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AccountingServices() {
  const mainService = {
    title: "热门",
    subtitle: "审计服务",
    slug: "popular-audit",
  }

  const services = [
    { icon: Calendar, title: "年度审计", subtitle: "", slug: "annual-audit" },
    { icon: TrendingUp, title: "高新审计", subtitle: "", slug: "high-tech-audit" },
    { icon: Calculator, title: "财务审计", subtitle: "", slug: "financial-audit" },
    { icon: FileCheck, title: "专项审计", subtitle: "", slug: "special-audit" },
    { icon: DollarSign, title: "税务审计", subtitle: "", slug: "tax-audit" },
    { icon: PieChart, title: "清算审计", subtitle: "", slug: "liquidation-audit" },
  ]

  return (
    <section id="accounting-services" className="py-20 bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950 relative overflow-hidden scroll-mt-16">
      {/* 科技网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf615_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* 渐变光晕 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* 背景（本地图片） */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/gallery/12.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* 模块顶部横幅图（本地图片） */}
        <div className="max-w-5xl mx-auto mb-10 overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-purple-500/10">
          <Image
            src="/gallery/13.webp"
            alt="审计服务-形象图"
            width={1600}
            height={600}
            className="w-full h-56 md:h-72 object-cover"
            priority={false}
          />
        </div>

        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <span className="text-blue-400 font-bold text-sm border border-blue-500/30 px-5 py-2 rounded-full glass-effect shadow-lg shadow-blue-500/20">
              PART
            </span>
            <span className="text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
              03
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-500 to-transparent" />
          </div>
          <h2 className="text-5xl font-black text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            审计服务
          </h2>
          <p className="text-gray-400 text-xl">10+年经验团队，为您高效解决审计难题</p>
        </div>

        {/* 服务网格 */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* 主推服务卡片 */}
          <Link
            href={`/services/accounting/${mainService.slug}`}
            className="group relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-10 text-white shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-500 cursor-pointer block overflow-hidden hover:scale-105"
          >
            {/* 动画背景 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <h3 className="text-4xl font-black mb-3">{mainService.title}</h3>
              <p className="text-2xl text-blue-100">{mainService.subtitle}</p>
            </div>

            {/* 装饰元素 */}
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse" />
          </Link>

          {/* 其他服务 */}
          {services.map((service, index) => (
            <AccountingServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              slug={service.slug}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function AccountingServiceCard({
  icon: Icon,
  title,
  subtitle,
  slug,
  index,
}: {
  icon: any
  title: string
  subtitle: string
  slug: string
  index: number
}) {
  return (
    <Link
      href={`/services/accounting/${slug}`}
      className="group relative glass-effect border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer block overflow-hidden tech-border"
      style={{animationDelay: `${index * 0.05}s`}}
    >
      {/* 悬停渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500" />

      {/* 左上角光效 */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center gap-4">
        {/* 图标 */}
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 text-white p-4 rounded-xl shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/60 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <Icon className="w-8 h-8" />
          </div>
          {/* 图标光晕 */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        </div>

        {/* 文字 */}
        <div>
          <h3 className="font-bold text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>
          {subtitle && <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{subtitle}</p>}
        </div>
      </div>

      {/* 右下角装饰 */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 装饰点 */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-purple-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all" />
      <div className="absolute bottom-3 left-3 w-2 h-2 bg-blue-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all" />
    </Link>
  )
}
