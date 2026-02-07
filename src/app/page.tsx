import {
  Navbar,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  ComplianceSection,
  PricingSection,
  TestimonialsSection,
  CTASection,
  Footer,
} from '@/components/landing'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComplianceSection />
      
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
