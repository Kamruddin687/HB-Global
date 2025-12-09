"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Building2, Users, Target, Award, TrendingUp, Globe, Shield, Lightbulb, Sparkles, Zap, Heart, Star } from "lucide-react"

export default function About() {
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
              <span>About M&H Global</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 animate-fade-in-up delay-200">
              Your Trusted Partner in{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Talent Acquisition
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-400">
              For over 15 years, M&H Global Service Provider has been connecting exceptional talent 
              with leading organizations across the globe. We specialize in executive recruitment, 
              talent management, and strategic workforce solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
                <Building2 className="w-4 h-4" />
                <span>Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in 2009, M&H Global Service Provider began as a small recruitment firm with a 
                  vision to transform how organizations find and retain top talent. What started as 
                  a local consultancy has grown into a global powerhouse, serving clients across 
                  15+ countries.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, deep industry expertise, 
                  and an unwavering commitment to excellence. We've successfully placed over 2000+ 
                  professionals in leadership roles, helping companies build winning teams that drive 
                  sustainable growth.
                </p>
                <p>
                  Today, we stand as one of the most trusted names in executive recruitment, 
                  known for our rigorous screening processes, cultural fit assessment, and 
                  long-term partnership approach.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img
                src="/professional-team-meeting-consultancy.jpg"
                alt="Our team at work"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              <span>Our Purpose</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Mission &{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Vision
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group relative p-10 glass-effect rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To connect exceptional talent with innovative organizations, creating meaningful 
                  partnerships that drive business success and career growth. We are committed to 
                  understanding our clients' unique needs and delivering solutions that exceed expectations.
                </p>
                <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            
            <div className="group relative p-10 glass-effect rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the world's most trusted recruitment partner, recognized for our innovation, 
                  integrity, and impact. We envision a future where every organization has access 
                  to the talent they need to thrive in an ever-evolving business landscape.
                </p>
                <div className="mt-6 w-0 h-1 bg-gradient-to-r from-accent to-primary rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 animate-spin" />
              <span>What Drives Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Our Core{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Values
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", description: "We maintain the highest ethical standards in all our interactions and business practices.", color: "from-blue-500 to-blue-600" },
              { icon: Users, title: "Excellence", description: "We strive for excellence in every placement, ensuring the best match for both parties.", color: "from-green-500 to-green-600" },
              { icon: Globe, title: "Innovation", description: "We embrace new technologies and methodologies to stay ahead of industry trends.", color: "from-purple-500 to-purple-600" },
              { icon: TrendingUp, title: "Partnership", description: "We build long-term relationships based on trust, transparency, and mutual success.", color: "from-orange-500 to-orange-600" }
            ].map((value, index) => {
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
                    <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {value.description}
                    </p>
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500 mx-auto"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4 animate-bounce" />
              <span>Our Impact</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Numbers That{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Speak Volumes
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that speak to our success and commitment
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2000+", label: "Successful Placements", icon: Users },
              { number: "98%", label: "Client Satisfaction", icon: Heart },
              { number: "150+", label: "Partner Companies", icon: Building2 },
              { number: "15+", label: "Years Experience", icon: Award }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="group text-center p-8 glass-effect rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 text-primary/50 mx-auto mb-3 group-hover:text-accent group-hover:scale-110 transition-all" />
                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">{stat.number}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}