import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BusinessServices } from "@/components/business-services"
import { TaxServices } from "@/components/tax-services"
import { AccountingServices } from "@/components/accounting-services"
import { FloatingConsultButton } from "@/components/floating-consult-button"
import { GallerySection } from "../components/gallery-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-slate-900 to-blue-950">
      <Header />
      <main>
        <HeroSection />
        <GallerySection />
        <BusinessServices />
        <TaxServices />
        <AccountingServices />
      </main>
      <FloatingConsultButton />
    </div>
  )
}
