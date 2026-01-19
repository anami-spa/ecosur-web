import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { SustainabilityPreview } from "@/components/sustainability-preview"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <AboutPreview />
        <SustainabilityPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
