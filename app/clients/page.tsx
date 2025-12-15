"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import IndustryInquiryForm from "@/components/industry-inquiry-form"
import { Building2, Star, Users, TrendingUp, Award, Globe, Sparkles, Zap, ArrowRight, Heart, CheckCircle, Target, Rocket } from "lucide-react"

const clientTestimonials = [
  {
    name: "Sarah Johnson",
    position: "HR Director",
    company: "TechCorp Solutions",
    image: "/professional-woman-ceo.jpg",
    rating: 5,
    text: "HB Global has been our trusted recruitment partner for over 3 years. Their ability to find the right talent quickly and efficiently has been instrumental in our company's growth. Highly recommended!",
    industry: "Technology"
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "Global Brands Ltd",
    image: "/professional-man-business.jpg",
    rating: 5,
    text: "The team at HB Global understands our business needs perfectly. They've helped us build a strong leadership team and continue to deliver exceptional candidates for all our positions.",
    industry: "Retail"
  },
  {
    name: "Emma Williams",
    position: "Operations Manager",
    company: "Healthcare Plus",
    image: "/professional-woman-consultant.jpg",
    rating: 5,
    text: "Working with HB Global has transformed our hiring process. Their expertise in healthcare recruitment and understanding of compliance requirements is outstanding.",
    industry: "Healthcare"
  }
]

const industries = [
  {
    name: "Healthcare & Pharma",
    description: "Hospitals, clinics, diagnostic centers, pharmaceutical companies with trained medical support staff",
    icon: "🏥",
    clients: 25
  },
  {
    name: "Manufacturing",
    description: "Automobile, FMCG, textile industries with skilled production and warehouse personnel",
    icon: "🏭",
    clients: 30
  },
  {
    name: "IT & Corporate",
    description: "Software companies, BPOs, banks with professional office and administrative staff",
    icon: "💻",
    clients: 45
  },
  {
    name: "Education",
    description: "Schools, colleges, universities with qualified teaching and non-teaching personnel",
    icon: "🎓",
    clients: 20
  },
  {
    name: "Retail & Hospitality",
    description: "Shopping malls, hotels, restaurants with customer service and operational staff",
    icon: "🛍️",
    clients: 35
  },
  {
    name: "Logistics",
    description: "Warehouses, distribution centers with logistics and supply chain support personnel",
    icon: "🚚",
    clients: 15
  }
]

const stats = [
  { number: "150+", label: "Partner Companies" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "2000+", label: "Successful Placements" },
  { number: "15+", label: "Years Experience" }
]

export default function Clients() {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null)
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const [hoveredStory, setHoveredStory] = useState<number | null>(null)
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false)
  const [selectedIndustry, setSelectedIndustry] = useState("")

  const handleIndustryClick = (industryName: string) => {
    setSelectedIndustry(industryName)
    setIsInquiryFormOpen(true)
  }

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
              <span>Our Clients</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 animate-fade-in-up delay-200">
              Trusted by{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Leading Organizations
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-400">
              We're proud to partner with industry leaders across various sectors, helping them 
              build exceptional teams and achieve their business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const isHovered = hoveredStat === index
              
              return (
                <div 
                  key={index} 
                  className="group relative text-center p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                    <div className="mt-4 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 animate-spin" />
              <span>Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              What Our{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Clients Say
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about their experience working with HB Global Service Provider.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => {
              const isHovered = hoveredTestimonial === index
              
              return (
                <div 
                  key={index} 
                  className="group relative glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                  onMouseEnter={() => setHoveredTestimonial(index)}
                  onMouseLeave={() => setHoveredTestimonial(null)}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6 gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current group-hover:animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    
                    <blockquote className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors text-base">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-14 h-14 object-cover rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-all group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{testimonial.position}</p>
                        <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-xs rounded-full mt-2 font-medium">
                          {testimonial.industry}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4 animate-bounce" />
              <span>Industries</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Industries{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  We Serve
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Specialized workforce solutions across diverse sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const isHovered = hoveredIndustry === index
              const colors = [
                "from-blue-500 to-blue-600",
                "from-green-500 to-green-600",
                "from-purple-500 to-purple-600",
                "from-orange-500 to-orange-600",
                "from-pink-500 to-pink-600",
                "from-cyan-500 to-cyan-600"
              ]
              
              return (
                <div 
                  key={index} 
                  className="group relative p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                  onMouseEnter={() => setHoveredIndustry(index)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        {industry.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{industry.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <p className="text-sm text-primary font-semibold">{industry.clients} Active Clients</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{industry.description}</p>
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Rocket className="w-4 h-4 animate-bounce" />
              <span>Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Client{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Success Stories
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our client partnerships
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Tech Startup Growth", text: "Helped a tech startup scale from 10 to 100 employees in 18 months, placing key leadership roles and technical talent.", color: "from-blue-500 to-blue-600", metric: "900% Growth" },
              { icon: TrendingUp, title: "Healthcare Expansion", text: "Supported a healthcare network's expansion across 5 states, recruiting 200+ medical professionals and support staff.", color: "from-green-500 to-green-600", metric: "200+ Hires" },
              { icon: Award, title: "Executive Transformation", text: "Transformed a manufacturing company's leadership team, placing 8 C-level executives who drove 40% revenue growth.", color: "from-purple-500 to-purple-600", metric: "40% Revenue ↑" }
            ].map((story, index) => {
              const Icon = story.icon
              const isHovered = hoveredStory === index
              
              return (
                <div 
                  key={index} 
                  className="group relative text-center p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                  onMouseEnter={() => setHoveredStory(index)}
                  onMouseLeave={() => setHoveredStory(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${story.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-4">
                      <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {story.metric}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{story.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                      {story.text}
                    </p>
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full mx-auto"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 animate-spin" />
              <span>Global Reach</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Global Reach,{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Local Expertise
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Serving clients across multiple countries with deep local market knowledge
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "15+ Countries", description: "Global presence with local expertise", color: "from-blue-500 to-blue-600" },
              { icon: Building2, title: "150+ Companies", description: "Trusted by leading organizations", color: "from-green-500 to-green-600" },
              { icon: Users, title: "2000+ Placements", description: "Successful talent matches", color: "from-purple-500 to-purple-600" },
              { icon: Award, title: "98% Satisfaction", description: "Client satisfaction rate", color: "from-pink-500 to-pink-600" }
            ].map((item, index) => {
              const Icon = item.icon
              
              return (
                <div key={index} className="group text-center">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item.description}</p>
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
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/20 to-transparent rounded-tr-full"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                <Heart className="w-4 h-4 animate-pulse" />
                <span>Let's Work Together</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
                Ready to Join{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                    Our Success Stories?
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Let's discuss how we can help your organization find the right talent to achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5 group-hover:animate-bounce" />
                    Start Your Success Story
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button className="group relative px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold text-lg hover:bg-primary/5 transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Target className="w-5 h-5" />
                    View Case Studies
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
