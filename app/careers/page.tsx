"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ResumeForm from "@/components/resume-form"
import { MapPin, Briefcase, Clock, Users, Target, Award, Sparkles, Zap, ArrowRight, Star, Heart, Send, CheckCircle, TrendingUp } from "lucide-react"

const careerOpenings = [
  {
    title: "Senior Recruitment Consultant",
    location: "New York, USA",
    type: "Full-time",
    description: "Lead recruitment initiatives for executive-level positions across various industries.",
    requirements: ["5+ years recruitment experience", "Strong network in executive circles", "Excellent communication skills"],
    benefits: ["Competitive salary", "Health insurance", "Flexible work arrangements"]
  },
  {
    title: "Business Development Manager",
    location: "London, UK",
    type: "Full-time",
    description: "Drive business growth through strategic partnerships and client acquisition.",
    requirements: ["3+ years B2B sales experience", "Recruitment industry knowledge", "Proven track record"],
    benefits: ["Commission structure", "International travel", "Career development"]
  },
  {
    title: "HR Specialist",
    location: "Singapore",
    type: "Full-time",
    description: "Support HR operations and talent management initiatives.",
    requirements: ["HR degree or certification", "2+ years HR experience", "Strong analytical skills"],
    benefits: ["Learning opportunities", "Team collaboration", "Work-life balance"]
  },
  {
    title: "Talent Acquisition Lead",
    location: "Toronto, Canada",
    type: "Full-time",
    description: "Oversee talent acquisition strategies and team management.",
    requirements: ["7+ years talent acquisition", "Leadership experience", "Strategic thinking"],
    benefits: ["Leadership role", "Team management", "Strategic impact"]
  }
]

const benefits = [
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with a team of passionate professionals who share your commitment to excellence."
  },
  {
    icon: Target,
    title: "Career Growth",
    description: "Clear career progression paths with opportunities for advancement and skill development."
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Performance-based bonuses and recognition programs that celebrate your achievements."
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and policies that support your personal and professional life."
  }
]

export default function Careers() {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null)
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)
  const [isResumeFormOpen, setIsResumeFormOpen] = useState(false)

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
              <span>Join Our Team</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 animate-fade-in-up delay-200">
              Build Your Career with{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  HB Global
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up delay-400">
              Join a dynamic team of recruitment professionals who are passionate about connecting 
              talent with opportunity. Be part of our mission to transform careers and organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-600">
              <button 
                onClick={() => setIsResumeFormOpen(true)}
                className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <Send className="w-5 h-5 group-hover:animate-bounce" />
                  Join Our Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <Link href="/jobs">
                <button className="group relative px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold text-lg hover:bg-primary/5 transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    View Open Positions
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 animate-spin" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Why Work{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  With Us?
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Discover the benefits of being part of the HB Global family
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              const isHovered = hoveredBenefit === index
              
              return (
                <div 
                  key={index} 
                  className="group relative p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{benefit.description}</p>
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Briefcase className="w-4 h-4 animate-bounce" />
              <span>Open Positions</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Current{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Openings
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities with HB Global Service Provider
            </p>
          </div>
          
          <div className="space-y-6">
            {careerOpenings.map((job, index) => {
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
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="font-medium text-foreground">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl">
                            <Clock className="w-4 h-4 text-accent" />
                            <span className="font-medium text-foreground">{job.type}</span>
                          </div>
                          <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
                            <span className="font-semibold text-primary">NEW</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6 text-lg group-hover:text-foreground transition-colors">{job.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-primary" />
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                              <Star className="w-5 h-5 text-accent" />
                              Benefits
                            </h4>
                            <ul className="space-y-2">
                              {job.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <button 
                          onClick={() => setIsResumeFormOpen(true)}
                          className="group/btn relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                          <span className="relative flex items-center justify-center gap-2">
                            <Zap className="w-5 h-5 group-hover/btn:animate-bounce" />
                            Apply Now
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                          </span>
                        </button>
                        <button className="px-8 py-4 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                          Learn More
                        </button>
                      </div>
                    </div>
                    
                    {/* Decorative Line */}
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 animate-pulse" />
              <span>Our Culture</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Culture &{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Values
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our team and define our workplace
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Collaboration", description: "We believe in the power of teamwork and foster an environment where everyone's voice is heard.", color: "from-blue-500 to-blue-600" },
              { icon: Target, title: "Excellence", description: "We strive for excellence in everything we do, setting high standards for ourselves and our clients.", color: "from-green-500 to-green-600" },
              { icon: Award, title: "Innovation", description: "We embrace new ideas and technologies to stay ahead of industry trends and deliver better results.", color: "from-purple-500 to-purple-600" }
            ].map((value, index) => {
              const Icon = value.icon
              
              return (
                <div key={index} className="group text-center p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{value.description}</p>
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative glass-effect rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-gradient-x"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4 animate-bounce" />
                <span>Join Us</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
                Ready to Join{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                    Our Team?
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => setIsResumeFormOpen(true)}
                  className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Send className="w-5 h-5 group-hover:animate-bounce" />
                    Send Your Resume
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button className="group relative px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold text-lg hover:bg-primary/5 transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Contact HR Team
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Resume Form Modal */}
      <ResumeForm isOpen={isResumeFormOpen} onClose={() => setIsResumeFormOpen(false)} />
    </main>
  )
}
