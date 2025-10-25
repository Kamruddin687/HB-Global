"use client"

import { useState } from "react"
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
import ResumeForm from "@/components/resume-form"

export default function Home() {
  const [isResumeFormOpen, setIsResumeFormOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <Hero />
      
      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <Services />
      
      {/* Section Divider */}
      <div className="relative h-16 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </div>
      
      <WhyChooseUs />
      
      {/* Section Divider */}
      <div className="relative h-16 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>
      </div>
      
      <Testimonials />
      
      {/* Section Divider */}
      <div className="relative h-16 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
      
      <Clients />
      
      {/* Section Divider */}
      <div className="relative h-16 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <Team />
      
      {/* Section Divider */}
      <div className="relative h-24 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <JobOpenings onApplyClick={() => setIsResumeFormOpen(true)} />
      <Careers onApplyClick={() => setIsResumeFormOpen(true)} />
      <CTA onApplyClick={() => setIsResumeFormOpen(true)} />
      <Footer />
      
      {/* Resume Form Modal */}
      <ResumeForm isOpen={isResumeFormOpen} onClose={() => setIsResumeFormOpen(false)} />
    </main>
  )
}
