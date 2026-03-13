import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PackagesSection } from "@/components/packages-section"
import { GallerySection } from "@/components/gallery-section"
import { AboutSection } from "@/components/about-section"
import BookingSection from '@/components/booking-section'
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PackagesSection />
      <GallerySection />
      <AboutSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
