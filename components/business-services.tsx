import { Building2, TrendingUp, User, Building } from "lucide-react"
import Link from "next/link"
import { SectionBanner } from "@/components/section-banner"

export function BusinessServices() {
  const services = [
    { icon: Building2, title: "有限公司", subtitle: "注册", slug: "limited-company" },
    { icon: TrendingUp, title: "股份有限", subtitle: "公司注册", slug: "joint-stock" },
    { icon: User, title: "个人独资", subtitle: "企业", slug: "sole-proprietorship" },
    { icon: Building, title: "分公司", subtitle: "注册", slug: "branch-company" },
    { icon: Building2, title: "子公司", subtitle: "注册", slug: "subsidiary" },
    { icon: Building, title: "外资公司", subtitle: "注册", slug: "foreign-company" },
    { icon: Building2, title: "中外合资", subtitle: "公司注册", slug: "joint-venture" },
    { icon: Building, title: "注册地址/", subtitle: "免费核名", slug: "address-verification" },
  ]

  return (
    <section id="business-services" className="py-16 bg-white relative overflow-hidden scroll-mt-16">
      {/* 科技网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e508_1px,transparent_1px),linear-gradient(to_bottom,#4f46e508_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      {/* 渐变光晕 */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      {/* 商务背景图 */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* 模块顶部横幅（来自本地图片） */}
        <SectionBanner images={["/banners/business/1.webp","/banners/business/2.webp","/banners/business/3.webp"]} />
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <span className="text-purple-400 font-bold text-sm border border-purple-500/30 px-5 py-2 rounded-full glass-effect shadow-lg shadow-purple-500/20">
              PART
            </span>
            <span className="text-5xl font-black text-blue-900">
              01
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-cyan-500 to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">
            工商服务
          </h2>
          <p className="text-gray-600 text-lg">帮助解决企业经营问题</p>
        </div>

        {/* 服务网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
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

function ServiceCard({
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
      href={`/services/business/${slug}`}
      className="group relative bg-white border border-blue-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-500 cursor-pointer block overflow-hidden tech-border"
      style={{animationDelay: `${index * 0.05}s`}}
    >
      {/* 悬停时的渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500" />

      {/* 左上角光效 */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-center gap-4">
        {/* 图标 */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-4 rounded-xl shadow-lg shadow-cyan-500/30 group-hover:shadow-purple-500/60 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <Icon className="w-8 h-8" />
          </div>
          {/* 图标光晕 */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        </div>

        {/* 文字 */}
        <div>
          <h3 className="font-bold text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{subtitle}</p>
        </div>
      </div>

      {/* 右上角渐变装饰 */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 装饰点 */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all" />
      <div className="absolute bottom-3 left-3 w-2 h-2 bg-purple-400 rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all" />
    </Link>
  )
}
