"use client"

import { useState } from "react"
import { Linkedin, Mail, Star, Award, Sparkles } from "lucide-react"

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/professional-woman-ceo.jpg",
      linkedin: "#",
      email: "sarah@hbglobal.com",
      expertise: ["Leadership", "Strategy", "Growth"]
    },
    {
      name: "Michael Chen",
      role: "Head of Recruitment",
      image: "/professional-man-recruitment.jpg",
      linkedin: "#",
      email: "michael@hbglobal.com",
      expertise: ["Talent Acquisition", "HR", "Recruiting"]
    },
    {
      name: "Emma Williams",
      role: "Senior Consultant",
      image: "/professional-woman-consultant.jpg",
      linkedin: "#",
      email: "emma@hbglobal.com",
      expertise: ["Consulting", "Healthcare", "Compliance"]
    },
    {
      name: "David Martinez",
      role: "Business Development",
      image: "/professional-man-business.jpg",
      linkedin: "#",
      email: "david@hbglobal.com",
      expertise: ["Sales", "Partnerships", "Growth"]
    },
  ]

  return (
    <section id="team" className="relative py-20 md:py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>Meet The Experts</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Our{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                Team
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Meet the experts driving our success and dedicated to your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const isHovered = hoveredMember === index
            
            return (
              <div 
                key={index} 
                className="group relative glass-effect rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Image */}
                  <div className="mb-6 overflow-hidden rounded-2xl relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="relative w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Star Badge */}
                    <div className="absolute top-3 right-3 w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-4">{member.role}</p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex gap-3 justify-center">
                      <a
                        href={member.linkedin}
                        className="group/link p-3 bg-primary/10 rounded-xl hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin className="w-5 h-5 text-primary" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="group/link p-3 bg-accent/10 rounded-xl hover:bg-accent/20 transition-all duration-300 hover:scale-110"
                      >
                        <Mail className="w-5 h-5 text-accent" />
                      </a>
                    </div>
                    
                    {/* Decorative Line */}
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
