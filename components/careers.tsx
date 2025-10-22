import { MapPin, Briefcase } from "lucide-react"

const jobs = [
  {
    title: "Senior Recruitment Consultant",
    location: "New York, USA",
    type: "Full-time",
  },
  {
    title: "Business Development Manager",
    location: "London, UK",
    type: "Full-time",
  },
  {
    title: "HR Specialist",
    location: "Singapore",
    type: "Full-time",
  },
  {
    title: "Talent Acquisition Lead",
    location: "Toronto, Canada",
    type: "Full-time",
  },
]

export default function Careers() {
  return (
    <section id="careers" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build your career with HB Global Consultancy
          </p>
        </div>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow flex items-center justify-between"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} />
                    {job.type}
                  </div>
                </div>
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
