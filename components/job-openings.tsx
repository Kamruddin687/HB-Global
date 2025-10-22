"use client"

import { useState } from "react"
import { MapPin, Clock, DollarSign, ArrowRight, Filter, Search } from "lucide-react"

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

export default function JobOpenings() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            Latest Opportunities
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Dream Job
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover exciting career opportunities with top companies. We connect talented professionals 
            with leading organizations across various industries.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Job Type Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Job Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">{job.company}</p>
                    </div>
                    {job.urgent && (
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                        Urgent
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="text-muted-foreground">
                      {job.experience} experience
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground">Posted {job.posted}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 group-hover:gap-3">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                    Save Job
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Jobs */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
            View All Job Openings
          </button>
        </div>
      </div>
    </section>
  )
}
