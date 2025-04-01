import ContactSection from "@/components/main/contact-section"
import FAQ from "@/components/main/faq-section."
import HeroSection from "@/components/main/hero"
import PortfolioSection from "@/components/main/portfolio-section"
import TeamSection from "@/components/main/team-section"
import TestimonialsCarousel from "@/components/main/testimonials-carousel"
import VideoPlayer from "@/components/ui/video-player"

export default function Page() {
  return (
    <main className="bg-zinc-900 text-white min-h-screen">
      <VideoPlayer />
      <HeroSection />
      <PortfolioSection />
      <TeamSection/>
      <TestimonialsCarousel/>
      <FAQ/>
      <ContactSection/>
    </main>
  )
}
