import { FileText, Calculator, TrendingUp, Shield, Settings, Layers } from "lucide-react"
import Link from "next/link"
import { SectionBanner } from "@/components/section-banner"

export function TaxServices() {
  const mainService = {
    title: "一般纳税人",
    subtitle: "代理记账",
    slug: "general-taxpayer",
  }

  const services = [
    { icon: FileText, title: "小规模", subtitle: "代理记账", slug: "small-scale" },
    { icon: Calculator, title: "税务核定", subtitle: "", slug: "tax-verification" },
    { icon: TrendingUp, title: "一般纳税人", subtitle: "申请", slug: "taxpayer-application" },
    { icon: Shield, title: "年检服务", subtitle: "", slug: "annual-inspection" },
    { icon: Settings, title: "定制财务", subtitle: "", slug: "custom-finance" },
    { icon: Layers, title: "旧账整理", subtitle: "", slug: "old-accounts" },
  ]

  return (
    <section id="tax-services" className="py-16 bg-white relative overflow-hidden scroll-mt-16">
      {/* 科技网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* 渐变光晕 */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* 办公室背景 */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* 模块顶部横幅（来自本地图片） */}
        <SectionBanner images={["/banners/tax/7.jpg","/banners/tax/8.jpeg","/banners/tax/9.webp"]} />
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="text-cyan-400 font-bold text-sm border border-cyan-500/30 px-5 py-2 rounded-full glass-effect shadow-lg shadow-cyan-500/20">
              PART
            </span>
            <span className="text-5xl font-black text-blue-900">
              02
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-500 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">
            记账报税
          </h2>
          <p className="text-gray-600 text-lg">20+服务项目，账务清晰账本失误</p>
        </div>

        {/* 服务网格 */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* 其他服务（主推色块卡片已移除，以保持风格一致） */}
          {services.map((service, index) => (
            <TaxServiceCard
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

function TaxServiceCard({
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
      href={`/services/tax/${slug}`}
      className="group relative bg-white border border-blue-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-500 cursor-pointer block overflow-hidden tech-border"
      style={{animationDelay: `${index * 0.05}s`}}
    >
      {/* 悬停渐变背景 */}
      <div className="absolute inset-0" />

      {/* 左上角光效 */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center gap-4">
        {/* 图标 */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-4 rounded-xl shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/60 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <Icon className="w-8 h-8" />
          </div>
          {/* 图标光晕 */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        </div>

        {/* 文字 */}
        <div>
          <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-700 transition-colors">
            {title}
          </h3>
          {subtitle && <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{subtitle}</p>}
        </div>
      </div>

      {/* 右下角装饰 */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 装饰点 */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all" />
      <div className="absolute bottom-3 left-3 w-2 h-2 bg-blue-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all" />
    </Link>
  )
}
