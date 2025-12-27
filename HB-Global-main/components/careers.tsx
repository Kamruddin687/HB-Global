"use client"

import { useState } from "react"
import { MapPin, Briefcase, Sparkles, ArrowRight, Zap, DollarSign, Clock, TrendingUp } from "lucide-react"

interface CareersProps {
  onApplyClick?: () => void
}

const jobs = [
  {
    title: "Senior Recruitment Consultant",
    location: "New York, USA",
    type: "Full-time",
    salary: "$80k - $120k",
    level: "Senior",
    department: "Recruitment"
  },
  {
    title: "Business Development Manager",
    location: "London, UK",
    type: "Full-time",
    salary: "£60k - £90k",
    level: "Mid-Level",
    department: "Sales"
  },
  {
    title: "HR Specialist",
    location: "Singapore",
    type: "Full-time",
    salary: "S$60k - S$85k",
    level: "Mid-Level",
    department: "HR"
  },
  {
    title: "Talent Acquisition Lead",
    location: "Toronto, Canada",
    type: "Full-time",
    salary: "C$90k - C$130k",
    level: "Lead",
    department: "Talent"
  },
]

export default function Careers({ onApplyClick }: CareersProps) {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null)
  return (
    <section id="careers" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>Career Opportunities</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Join Our{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                Team
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Build your career with M&H Global Service Provider and make an impact
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => {
            const isHovered = hoveredJob === index
            
            return (
              <div
                key={index}
                className="group relative glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredJob(index)}
                onMouseLeave={() => setHoveredJob(null)}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm rounded-full font-medium">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-accent/10 to-primary/10 text-accent text-sm rounded-full font-medium">
                            <TrendingUp className="w-4 h-4" />
                            {job.level}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <Clock className="w-4 h-4 text-accent" />
                        </div>
                        <span className="font-medium">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <DollarSign className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={onApplyClick}
                      className="group/btn relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                      <span className="relative flex items-center justify-center gap-2">
                        <Zap className="w-5 h-5 group-hover/btn:animate-bounce" />
                        Apply Now
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>
                
                {/* Decorative Line */}
                <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            )
          })}
        </div>
        
        {/* View All CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-6 py-4 glass-effect rounded-2xl">
            <p className="text-muted-foreground">Don't see the right position?</p>
            <button 
              onClick={onApplyClick}
              className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
