"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Clock, DollarSign, ArrowRight, Filter, Search } from "lucide-react"

interface JobOpeningsProps {
  onApplyClick?: () => void
}

const jobOpenings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "₹8-12 LPA",
    experience: "3-5 years",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    posted: "2 days ago",
    urgent: true
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "Global Brands Ltd",
    location: "Mumbai, India", 
    type: "Full-time",
    salary: "₹6-10 LPA",
    experience: "2-4 years",
    skills: ["Digital Marketing", "SEO", "Analytics", "Campaign Management"],
    posted: "1 week ago",
    urgent: false
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "AI Innovations",
    location: "Hyderabad, India",
    type: "Full-time", 
    salary: "₹10-15 LPA",
    experience: "4-6 years",
    skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
    posted: "3 days ago",
    urgent: true
  },
  {
    id: 4,
    title: "Sales Executive",
    company: "Retail Plus",
    location: "Delhi, India",
    type: "Full-time",
    salary: "₹4-7 LPA", 
    experience: "1-3 years",
    skills: ["Sales", "CRM", "Communication", "Negotiation"],
    posted: "5 days ago",
    urgent: false
  },
  {
    id: 5,
    title: "UX Designer",
    company: "Design Studio",
    location: "Pune, India",
    type: "Contract",
    salary: "₹5-8 LPA",
    experience: "2-4 years", 
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    posted: "1 week ago",
    urgent: false
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudTech Systems",
    location: "Chennai, India",
    type: "Full-time",
    salary: "₹7-12 LPA",
    experience: "3-5 years",
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS"],
    posted: "4 days ago",
    urgent: true
  }
]

const jobTypes = ["All", "Full-time", "Contract", "Part-time"]
const locations = ["All", "Bangalore", "Mumbai", "Hyderabad", "Delhi", "Pune", "Chennai"]

export default function JobOpenings({ onApplyClick }: JobOpeningsProps) {
  const [selectedType, setSelectedType] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredJobs = jobOpenings.filter(job => {
    const matchesType = selectedType === "All" || job.type === selectedType
    const matchesLocation = selectedLocation === "All" || job.location.includes(selectedLocation)
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesType && matchesLocation && matchesSearch
  })

  return (
    <section id="jobs" className="py-20 md:py-32 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            <Search className="w-4 h-4 animate-pulse" />
            <span>Latest Opportunities</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Find Your{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                Dream Job
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover exciting career opportunities with top companies. We connect talented professionals 
            with leading organizations across various industries.
          </p>
        </div>

        {/* Filters */}
        <div className="glass-effect rounded-3xl p-8 mb-12 shadow-lg">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <label className="block text-sm font-semibold text-foreground mb-2">Search</label>
              <Search className="absolute left-4 bottom-4 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>

            {/* Job Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Job Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-bold text-primary">{filteredJobs.length}</span> jobs
            </p>
            <button className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Advanced Filters
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="group relative glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium">{job.company}</p>
                      </div>
                      {job.urgent && (
                        <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
                          URGENT
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 px-3 py-2 glass-effect rounded-lg">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 glass-effect rounded-lg">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-foreground">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 glass-effect rounded-lg">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{job.salary}</span>
                      </div>
                      <div className="px-3 py-2 glass-effect rounded-lg">
                        <span className="text-sm font-medium text-foreground">{job.experience}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground">Posted {job.posted}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={onApplyClick}
                      className="group/btn relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                      <span className="relative flex items-center gap-2">
                        Apply Now
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                      </span>
                    </button>
                    <button className="px-8 py-4 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                      Save Job
                    </button>
                  </div>
                </div>
                
                {/* Decorative Line */}
                <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Jobs */}
        <div className="text-center mt-12">
          <Link href="/jobs">
            <button className="group px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
              View All Job Openings
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
