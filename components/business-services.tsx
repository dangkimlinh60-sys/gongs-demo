import { Building2, TrendingUp, User, Building } from "lucide-react"
import Link from "next/link"

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
    <section id="business-services" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-red-600 font-bold text-sm border-2 border-red-600 px-3 py-1 rounded">PART</span>
            <span className="text-6xl font-bold text-red-600">01</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">工商服务</h2>
          <p className="text-gray-600 text-lg">帮助解决企业经营问题</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
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

function ServiceCard({
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
      href={`/services/business/${slug}`}
      className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all cursor-pointer group block"
    >
      <div className="flex items-center gap-4">
        <div className="bg-red-600 text-white p-4 rounded-full group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
    </Link>
  )
}
