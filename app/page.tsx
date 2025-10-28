import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BusinessServices } from "@/components/business-services"
import { TaxServices } from "@/components/tax-services"
import { AccountingServices } from "@/components/accounting-services"
import { FloatingConsultButton } from "@/components/floating-consult-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <BusinessServices />
        <TaxServices />
        <AccountingServices />
      </main>
      <FloatingConsultButton />
    </div>
  )
}
