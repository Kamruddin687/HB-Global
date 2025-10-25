"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HealthcareResumeForm from "@/components/healthcare-resume-form"
import ManufacturingResumeForm from "@/components/manufacturing-resume-form"
import ITCorporateResumeForm from "@/components/it-corporate-resume-form"
import EducationResumeForm from "@/components/education-resume-form"
import RetailHospitalityResumeForm from "@/components/retail-hospitality-resume-form"
import LogisticsResumeForm from "@/components/logistics-resume-form"
import GetStartedForm from "@/components/get-started-form"
import { Briefcase, Users, Clock, GraduationCap, Target, Handshake, CheckCircle, ArrowRight, Sparkles, Zap, TrendingUp, Award, Shield, Star, Upload } from "lucide-react"

const services = [
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

const industries = [
  {
    name: "Healthcare & Pharma",
    description: "Hospitals, clinics, diagnostic centers, pharmaceutical companies with trained medical support staff",
    icon: "🏥"
  },
  {
    name: "Manufacturing",
    description: "Automobile, FMCG, textile industries with skilled production and warehouse personnel",
    icon: "🏭"
  },
  {
    name: "IT & Corporate",
    description: "Software companies, BPOs, banks with professional office and administrative staff",
    icon: "💻"
  },
  {
    name: "Education",
    description: "Schools, colleges, universities with qualified teaching and non-teaching personnel",
    icon: "🎓"
  },
  {
    name: "Retail & Hospitality",
    description: "Shopping malls, hotels, restaurants with customer service and operational staff",
    icon: "🛍️"
  },
  {
    name: "Logistics",
    description: "Warehouses, distribution centers with logistics and supply chain support personnel",
    icon: "🚚"
  }
]

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null)
  const [isHealthcareFormOpen, setIsHealthcareFormOpen] = useState(false)
  const [isManufacturingFormOpen, setIsManufacturingFormOpen] = useState(false)
  const [isITCorporateFormOpen, setIsITCorporateFormOpen] = useState(false)
  const [isEducationFormOpen, setIsEducationFormOpen] = useState(false)
  const [isRetailHospitalityFormOpen, setIsRetailHospitalityFormOpen] = useState(false)
  const [isLogisticsFormOpen, setIsLogisticsFormOpen] = useState(false)
  const [isGetStartedFormOpen, setIsGetStartedFormOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-float"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-ping delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/35 rounded-full animate-ping delay-3000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Our Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 animate-fade-in-up delay-200">
              Complete{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Recruitment Solutions
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up delay-400">
              We provide end-to-end recruitment services that connect the right talent with the right opportunities. 
              From executive search to contract staffing, we help organizations build winning teams.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-600">
              <div className="group p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">6+</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Service Categories</div>
              </div>
              <div className="group p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Industries Served</div>
              </div>
              <div className="group p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">98%</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Success Rate</div>
              </div>
              <div className="group p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4 animate-spin" />
              <span>Premium Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Comprehensive{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Service Portfolio
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions designed to meet your unique recruitment needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isHovered = hoveredService === index
              
              return (
                <div
                  key={index}
                  className="group relative p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

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
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500 mb-6"></div>

                    {/* Learn More Button */}
                    <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4 animate-spin" />
              <span>Industry Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Industries We{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Serve
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Specialized workforce solutions across diverse sectors with deep domain expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const isHovered = hoveredIndustry === index
              
              // Define gradient colors for each industry
              const gradientColors: Record<string, { from: string; to: string }> = {
                "Healthcare & Pharma": { from: "from-red-500", to: "to-pink-500" },
                "Manufacturing": { from: "from-orange-500", to: "to-amber-500" },
                "IT & Corporate": { from: "from-blue-500", to: "to-cyan-500" },
                "Education": { from: "from-purple-500", to: "to-violet-500" },
                "Retail & Hospitality": { from: "from-pink-500", to: "to-rose-500" },
                "Logistics": { from: "from-green-500", to: "to-emerald-500" }
              }
              
              const gradient = gradientColors[industry.name] || { from: "from-primary", to: "to-accent" }
              
              const handleApplyClick = () => {
                switch(industry.name) {
                  case "Healthcare & Pharma":
                    setIsHealthcareFormOpen(true)
                    break
                  case "Manufacturing":
                    setIsManufacturingFormOpen(true)
                    break
                  case "IT & Corporate":
                    setIsITCorporateFormOpen(true)
                    break
                  case "Education":
                    setIsEducationFormOpen(true)
                    break
                  case "Retail & Hospitality":
                    setIsRetailHospitalityFormOpen(true)
                    break
                  case "Logistics":
                    setIsLogisticsFormOpen(true)
                    break
                }
              }
              
              return (
                <div 
                  key={index} 
                  className="group relative p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredIndustry(index)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {industry.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors mb-6">
                    {industry.description}
                  </p>
                  
                  {/* Apply Button for All Industries */}
                  <button
                    onClick={handleApplyClick}
                    className={`w-full group/btn relative px-6 py-3 bg-gradient-to-r ${gradient.from} ${gradient.to} text-white rounded-xl font-bold text-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 mb-4`}
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r ${gradient.to} ${gradient.from} opacity-0 group-hover/btn:opacity-100 transition-opacity`}></span>
                    <span className="relative flex items-center justify-center gap-2">
                      <Upload className="w-4 h-4" />
                      Apply Now - Upload Resume
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  {/* Decorative Line */}
                  <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4 animate-bounce" />
              <span>Our Methodology</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Recruitment{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Process
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to finding the perfect match for your organization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Requirement Analysis",
                description: "We understand your business needs, work environment, and specific requirements for staff deployment",
                color: "from-blue-500 to-blue-600",
                icon: Target
              },
              {
                title: "Sourcing & Screening",
                description: "Multi-stage screening including background checks, skills assessment, and detailed interviews",
                color: "from-green-500 to-green-600",
                icon: Users
              },
              {
                title: "Training & Deployment",
                description: "Job-specific training and orientation before deployment with proper documentation and uniforms",
                color: "from-purple-500 to-purple-600",
                icon: GraduationCap
              },
              {
                title: "Ongoing Support",
                description: "Continuous performance monitoring, compliance management, and immediate staffing support",
                color: "from-orange-500 to-orange-600",
                icon: Shield
              }
            ].map((process, index) => {
              const Icon = process.icon
              
              return (
                <div key={index} className="group relative">
                  {/* Connection Line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 z-0">
                      <div className="h-full bg-gradient-to-r from-primary/30 to-transparent transform translate-x-4"></div>
                      <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-1000"></div>
                    </div>
                  )}
                  
                  <div className="relative text-center p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Icon Circle */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {process.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {process.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500 mx-auto"></div>
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
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-gradient-x"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/20 to-transparent rounded-tr-full"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4 animate-bounce" />
                <span>Get Started</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
                Ready to Transform Your{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                    Talent Strategy?
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Let's discuss how our comprehensive talent solutions can drive your organization's success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => setIsGetStartedFormOpen(true)}
                  className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button 
                  onClick={() => setIsGetStartedFormOpen(true)}
                  className="group relative px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold text-lg hover:bg-primary/5 transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Schedule Consultation
                  </span>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">2000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Industry-Specific Resume Form Modals */}
      <HealthcareResumeForm isOpen={isHealthcareFormOpen} onClose={() => setIsHealthcareFormOpen(false)} />
      <ManufacturingResumeForm isOpen={isManufacturingFormOpen} onClose={() => setIsManufacturingFormOpen(false)} />
      <ITCorporateResumeForm isOpen={isITCorporateFormOpen} onClose={() => setIsITCorporateFormOpen(false)} />
      <EducationResumeForm isOpen={isEducationFormOpen} onClose={() => setIsEducationFormOpen(false)} />
      <RetailHospitalityResumeForm isOpen={isRetailHospitalityFormOpen} onClose={() => setIsRetailHospitalityFormOpen(false)} />
      <LogisticsResumeForm isOpen={isLogisticsFormOpen} onClose={() => setIsLogisticsFormOpen(false)} />
      
      {/* Get Started Form Modal */}
      <GetStartedForm isOpen={isGetStartedFormOpen} onClose={() => setIsGetStartedFormOpen(false)} />
    </main>
  )
}
