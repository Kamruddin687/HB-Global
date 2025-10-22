import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import JobOpenings from "@/components/job-openings"
import Testimonials from "@/components/testimonials"
import Careers from "@/components/careers"
import Clients from "@/components/clients"
import Team from "@/components/team"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <JobOpenings />
      <Testimonials />
      <Clients />
      <Team />
      <Careers />
      <CTA />
      <Footer />
    </main>
  )
}
