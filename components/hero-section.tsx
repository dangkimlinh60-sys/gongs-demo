import type React from "react"
import { Target, Users, Shield, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=800&width=1600&query=business+professional+holding+puzzle+piece+hands+corporate+office+background+blurred)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <h1 className="text-6xl font-bold text-red-600 leading-tight drop-shadow-lg">企业经营许可证</h1>

          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full shadow-xl">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold">◆</span>
            </div>
            <span className="text-xl font-bold">一站式代办服务平台</span>
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold">◆</span>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto pt-8">
            <FeatureCard icon={<Target className="w-7 h-7" />} title="业务全面" />
            <FeatureCard icon={<Users className="w-7 h-7" />} title="快速下证" />
            <FeatureCard icon={<Shield className="w-7 h-7" />} title="一站代办" />
            <FeatureCard icon={<FileText className="w-7 h-7" />} title="一次性收费" />
          </div>
        </div>
      </div>

      {/* Decorative dots at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full ${i === 0 ? "bg-red-600" : "bg-gray-300"}`} />
        ))}
      </div>
    </section>
  )
}

function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg p-5 flex items-center gap-4 shadow-lg hover:shadow-xl transition-all hover:scale-105">
      {/* Hexagon-like decoration on left */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 rotate-45 rounded-lg" />

      <div className="bg-red-600 text-white p-3 rounded-full z-10 shadow-md">{icon}</div>
      <span className="text-white font-bold text-xl z-10">{title}</span>

      {/* Hexagon-like decoration on right */}
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 rotate-45 rounded-full" />
    </div>
  )
}
