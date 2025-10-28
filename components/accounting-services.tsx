import { Calendar, TrendingUp, Calculator, FileCheck, DollarSign, PieChart } from "lucide-react"
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
    <section id="accounting-services" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-red-600 font-bold text-sm border-2 border-red-600 px-3 py-1 rounded">PART</span>
            <span className="text-6xl font-bold text-red-600">03</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">审计服务</h2>
          <p className="text-gray-600 text-lg">10+年经验团队，为您高效解决审计难题</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Featured Service */}
          <Link
            href={`/services/accounting/${mainService.slug}`}
            className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg p-8 text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer block"
          >
            <h3 className="text-3xl font-bold mb-2">{mainService.title}</h3>
            <p className="text-xl">{mainService.subtitle}</p>
          </Link>

          {/* Other Services */}
          {services.map((service, index) => (
            <AccountingServiceCard
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

function AccountingServiceCard({
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
      href={`/services/accounting/${slug}`}
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
