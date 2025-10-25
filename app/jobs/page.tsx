"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import JobOpenings from "@/components/job-openings"
import ResumeForm from "@/components/resume-form"

export default function Jobs() {
  const [isResumeFormOpen, setIsResumeFormOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <JobOpenings onApplyClick={() => setIsResumeFormOpen(true)} />
      <Footer />
      
      {/* Resume Form Modal */}
      <ResumeForm isOpen={isResumeFormOpen} onClose={() => setIsResumeFormOpen(false)} />
    </main>
  )
}
