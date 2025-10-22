"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Users, Target, Award, TrendingUp } from "lucide-react"

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0)
  
  const stats = [
    { number: "2000+", label: "Successful Placements" },
    { number: "98%", label: "Retention Rate" },
    { number: "150+", label: "Partner Companies" },
    { number: "15+", label: "Years Experience" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-pulse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/35 rounded-full animate-ping delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in-up">
                <Award className="w-4 h-4 animate-spin" />
                Trusted by 500+ Companies
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight animate-fade-in-up delay-200">
                Find Your Perfect{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient-x">
                  Talent Match
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up delay-400">
                HB Global Consultancy is your trusted recruitment partner, connecting exceptional 
                talent with top organizations. We specialize in executive search, talent acquisition, 
                and workforce solutions across all industries.
              </p>
            </div>

            {/* Enhanced Animated Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                    currentStat === index ? 'scale-105 shadow-lg ring-2 ring-primary/20' : 'hover:shadow-md'
                  }`}
                >
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
              <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:from-primary/90 hover:to-accent/90 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform">
                Explore Opportunities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-lg hover:scale-105 transform">
                <span className="group-hover:animate-pulse">Learn More</span>
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Image Section */}
          <div className="relative animate-fade-in-up delay-800">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/professional-team-meeting-consultancy.jpg"
                alt="Professional team meeting"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Enhanced Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white dark:bg-card p-6 rounded-xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-bounce delay-1000">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary animate-pulse" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Expert Recruiters</div>
                  <div className="text-sm text-muted-foreground">Industry Specialists</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-6 rounded-xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-bounce delay-2000">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Target className="w-6 h-6 text-accent animate-pulse" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Quick Placement</div>
                  <div className="text-sm text-muted-foreground">30 Days Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
