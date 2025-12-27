"use client"

import { useState } from "react"
import { Building2, Factory, Laptop, GraduationCap, ShoppingBag, Truck, Sparkles, ArrowRight, Star, TrendingUp } from "lucide-react"

export default function Clients() {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null)

  const industries = [
    {
      title: "Healthcare & Pharma",
      description:
        "Hospitals, clinics, diagnostic centers, pharmaceutical companies with trained medical support staff",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
      emoji: "🏥",
      stats: "25+ Clients"
    },
    {
      title: "Manufacturing",
      description: "Automobile, FMCG, textile industries with skilled production and warehouse personnel",
      icon: Factory,
      color: "from-green-500 to-green-600",
      emoji: "🏭",
      stats: "30+ Clients"
    },
    {
      title: "IT & Corporate",
      description: "Software companies, BPOs, banks with professional office and administrative staff",
      icon: Laptop,
      color: "from-purple-500 to-purple-600",
      emoji: "💻",
      stats: "45+ Clients"
    },
    {
      title: "Education",
      description: "Schools, colleges, universities with qualified teaching and non-teaching personnel",
      icon: GraduationCap,
      color: "from-orange-500 to-orange-600",
      emoji: "🎓",
      stats: "20+ Clients"
    },
    {
      title: "Retail & Hospitality",
      description: "Shopping malls, hotels, restaurants with customer service and operational staff",
      icon: ShoppingBag,
      color: "from-pink-500 to-pink-600",
      emoji: "🛍️",
      stats: "35+ Clients"
    },
    {
      title: "Logistics",
      description: "Warehouses, distribution centers with logistics and supply chain support personnel",
      icon: Truck,
      color: "from-teal-500 to-teal-600",
      emoji: "🚚",
      stats: "15+ Clients"
    },
  ]

  return (
    <section id="clients" className="relative py-20 md:py-32 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>Our Expertise</span>
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
            const Icon = industry.icon
            const isHovered = hoveredIndustry === index
            
            return (
              <div 
                key={index} 
                className="group relative p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon & Emoji Container */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                        {industry.emoji}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors">
                    {industry.description}
                  </p>
                  
                  {/* Stats Badge */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{industry.stats}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Additional Stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-12 px-8 py-6 glass-effect rounded-3xl">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Industries</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">170+</div>
              <div className="text-sm text-muted-foreground">Active Clients</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
