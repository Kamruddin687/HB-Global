"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Users, Award, Globe, Target, Linkedin, Mail, Sparkles, Zap, ArrowRight, Star, Heart } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    image: "/professional-woman-ceo.jpg",
    bio: "Sarah leads HB Global with over 15 years of experience in executive recruitment. She has successfully placed 500+ C-level executives across various industries.",
    expertise: ["Executive Search", "Leadership Development", "Strategic Planning"],
    linkedin: "https://linkedin.com/in/sarahjohnson",
    email: "sarah@hbglobal.com"
  },
  {
    name: "Michael Chen",
    position: "Head of Recruitment",
    image: "/professional-man-recruitment.jpg",
    bio: "Michael oversees our recruitment operations with expertise in technical hiring and talent acquisition strategies. He has built teams for 100+ companies.",
    expertise: ["Technical Recruitment", "Talent Strategy", "Team Building"],
    linkedin: "https://linkedin.com/in/michaelchen",
    email: "michael@hbglobal.com"
  },
  {
    name: "Emma Williams",
    position: "Senior Consultant",
    image: "/professional-woman-consultant.jpg",
    bio: "Emma specializes in healthcare and pharmaceutical recruitment with deep industry knowledge and compliance expertise.",
    expertise: ["Healthcare Recruitment", "Compliance", "Industry Relations"],
    linkedin: "https://linkedin.com/in/emmawilliams",
    email: "emma@hbglobal.com"
  },
  {
    name: "David Martinez",
    position: "Business Development",
    image: "/professional-man-business.jpg",
    bio: "David drives our business growth through strategic partnerships and client acquisition across multiple markets.",
    expertise: ["Business Development", "Partnerships", "Market Expansion"],
    linkedin: "https://linkedin.com/in/davidmartinez",
    email: "david@hbglobal.com"
  }
]

const values = [
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and foster an environment where everyone's voice is heard and valued."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, setting high standards for ourselves and our clients."
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We embrace new ideas and technologies to stay ahead of industry trends and deliver better results."
  },
  {
    icon: Target,
    title: "Results",
    description: "We are focused on delivering measurable outcomes that drive success for our clients and candidates."
  }
]

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Our Team</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 animate-fade-in-up delay-200">
              Meet the{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Experts
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-400">
              Our team of experienced professionals brings together decades of recruitment expertise, 
              industry knowledge, and a passion for connecting the right people with the right opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 animate-spin" />
              <span>Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Meet Our{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Leaders
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="group relative glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative w-32 h-32 object-cover rounded-full mx-auto border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-primary font-semibold mb-4">{member.position}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{member.bio}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-xs">LinkedIn</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-xs">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 animate-pulse" />
              <span>Our Culture</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Team{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Values
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our team and define our workplace culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              const isHovered = hoveredValue === index
              
              return (
                <div 
                  key={index} 
                  className="group text-center p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{value.description}</p>
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500 mx-auto"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4 animate-bounce" />
              <span>Team Impact</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Collective{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Achievements
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The collective achievements of our dedicated team
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Team Members", icon: Users },
              { number: "15+", label: "Years Experience", icon: Award },
              { number: "2000+", label: "Successful Placements", icon: Target },
              { number: "98%", label: "Client Satisfaction", icon: Heart }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="group text-center p-8 glass-effect rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 text-primary/50 mx-auto mb-3 group-hover:text-accent group-hover:scale-110 transition-all" />
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">{stat.number}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative glass-effect rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-gradient-x"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4 animate-bounce" />
                <span>Join Us</span>
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
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                We're always looking for talented individuals who share our passion for connecting 
                people with opportunities. Explore career opportunities with HB Global.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/jobs">
                  <button className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                      View Open Positions
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </Link>
                <button className="group relative px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold text-lg hover:bg-primary/5 transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Send Your Resume
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
