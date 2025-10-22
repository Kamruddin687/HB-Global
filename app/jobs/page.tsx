import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import JobOpenings from "@/components/job-openings"

export default function Jobs() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <JobOpenings />
      <Footer />
    </main>
  )
}
