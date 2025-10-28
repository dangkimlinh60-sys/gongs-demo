import { FileText, Calculator, TrendingUp, Shield, Settings, Layers } from "lucide-react"
import Link from "next/link"

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
    <section id="tax-services" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-red-600 font-bold text-sm border-2 border-red-600 px-3 py-1 rounded">PART</span>
            <span className="text-6xl font-bold text-red-600">02</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">记账报税</h2>
          <p className="text-gray-600 text-lg">20+服务项目，账务清晰账本失误</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Featured Service */}
          <Link
            href={`/services/tax/${mainService.slug}`}
            className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg p-8 text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer block"
          >
            <h3 className="text-3xl font-bold mb-2">{mainService.title}</h3>
            <p className="text-xl">{mainService.subtitle}</p>
          </Link>

          {/* Other Services */}
          {services.map((service, index) => (
            <TaxServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              slug={service.slug}
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
}: {
  icon: any
  title: string
  subtitle: string
  slug: string
}) {
  return (
    <Link
      href={`/services/tax/${slug}`}
      className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all cursor-pointer group block"
    >
      <div className="flex items-center gap-4">
        <div className="bg-red-600 text-white p-4 rounded-full group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      </div>
    </Link>
  )
}
