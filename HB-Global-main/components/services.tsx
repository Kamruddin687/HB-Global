"use client"

import { useState } from "react"
import { Briefcase, Users, BookOpen, Handshake, Award, GraduationCap, ArrowRight, CheckCircle, Clock, Target } from "lucide-react"

const mainServices = [
  {
    icon: Briefcase,
    title: "Executive Search",
    description: "C-level and senior management placements across industries",
    features: ["C-Suite Placements", "Board Advisory", "Executive Search", "Leadership Assessment"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Permanent Recruitment",
    description: "Full-time placements with comprehensive screening",
    features: ["Technical Screening", "Cultural Fit Assessment", "Reference Checks", "Salary Negotiation"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Clock,
    title: "Contract Staffing",
    description: "Flexible workforce solutions for project-based needs",
    features: ["Project Staffing", "Temporary Placements", "Contract Management", "Quick Deployment"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: GraduationCap,
    title: "Talent Development",
    description: "Training and upskilling programs for workforce",
    features: ["Skill Assessment", "Training Programs", "Career Coaching", "Performance Enhancement"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Target,
    title: "Industry Specialization",
    description: "Expertise across multiple sectors and domains",
    features: ["IT & Technology", "Healthcare", "Finance", "Manufacturing", "Retail"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Handshake,
    title: "RPO Services",
    description: "Recruitment Process Outsourcing for large-scale hiring",
    features: ["End-to-End RPO", "Volume Hiring", "Process Optimization", "Technology Integration"],
    color: "from-teal-500 to-teal-600"
  },
]

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            <Award className="w-4 h-4 animate-spin" />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 animate-fade-in-up delay-200">
            Complete{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                Recruitment Solutions
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up delay-400">
            We provide end-to-end recruitment services that connect the right talent with the right opportunities. 
            From executive search to contract staffing, we help organizations build winning teams.
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-600">
            <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">2000+</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Successful Placements</div>
            </div>
            <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Retention Rate</div>
            </div>
            <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">150+</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Partner Companies</div>
            </div>
            <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">30</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Days Average</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredService === index

            return (
              <div
                key={index}
                className={`group relative p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-fade-in-up delay-${(index + 1) * 200}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-8 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative glass-effect rounded-3xl p-12 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 animate-gradient-x"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Talent Strategy?
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive talent solutions can drive your organization's success.
              </p>
              <button className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
