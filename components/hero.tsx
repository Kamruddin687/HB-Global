"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Users, Target, Award, TrendingUp, Sparkles, Zap, CheckCircle2 } from "lucide-react"
import ResumeForm from "@/components/resume-form"

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  
  const stats = [
    { number: "2000+", label: "Successful Placements", icon: CheckCircle2 },
    { number: "98%", label: "Retention Rate", icon: TrendingUp },
    { number: "150+", label: "Partner Companies", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/35 rounded-full animate-ping delay-3000"></div>
        <div className="absolute top-1/3 right-1/2 w-1 h-1 bg-primary/30 rounded-full animate-ping delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span className="relative">
                  Trusted by 500+ Companies
                  <span className="absolute inset-0 animate-shimmer"></span>
                </span>
              </div>

              {/* Headline */}
              <h1 className={`text-5xl md:text-7xl font-extrabold text-foreground leading-tight ${
                isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
              }`}>
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                    HB Global Service Provider
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
                </span>
              </h1>

              {/* Description */}
              <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl ${
                isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'
              }`}>
                HB Global Service Provider is your trusted recruitment partner, connecting exceptional 
                talent with top organizations. We specialize in{" "}
                <span className="text-primary font-semibold">executive search</span>,{" "}
                <span className="text-accent font-semibold">talent acquisition</span>, 
                and workforce solutions across all industries.
              </p>
            </div>

            {/* Enhanced Animated Stats */}
            <div className={`grid grid-cols-2 gap-4 ${
              isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'
            }`}>
              {stats.map((stat, index) => {
                const StatIcon = stat.icon
                return (
                  <div
                    key={index}
                    className={`group relative p-6 glass-effect rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                      currentStat === index ? 'scale-105 shadow-2xl ring-2 ring-primary/50' : 'hover:shadow-xl'
                    }`}
                  >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                          {stat.number}
                        </div>
                        <StatIcon className="w-6 h-6 text-primary/50 group-hover:text-accent group-hover:scale-110 transition-all" />
                      </div>
                      <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {stat.label}
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${
              isVisible ? 'animate-fade-in-up delay-800' : 'opacity-0'
            }`}>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="group relative px-8 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 group-hover:animate-bounce" />
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <Link href="/about">
                <button className="group relative px-8 py-5 border-2 border-primary text-primary rounded-2xl font-bold text-lg hover:bg-primary/5 transition-all duration-300 hover:shadow-xl hover:scale-105 transform overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  <span className="relative">Learn More</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Enhanced Image Section */}
          <div className={`relative ${
            isVisible ? 'animate-scale-up delay-1000' : 'opacity-0'
          }`}>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              {/* Image */}
              <img
                src="/professional-team-meeting-consultancy.jpg"
                alt="Professional team meeting"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-32 h-32 border-4 border-primary/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 border-4 border-accent/30 rounded-full animate-pulse"></div>
            </div>
            
            {/* Enhanced Floating Cards */}
            <div 
              onClick={() => setIsFormOpen(true)}
              className="absolute -top-6 -left-6 glass-effect p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-float cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-primary/70 rounded-xl">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">Expert Recruiters</div>
                  <div className="text-sm text-muted-foreground">Industry Specialists</div>
                </div>
              </div>
            </div>

            <div 
              onClick={() => setIsFormOpen(true)}
              className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-float cursor-pointer" 
              style={{animationDelay: '1s'}}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-accent to-accent/70 rounded-xl">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">Quick Placement</div>
                  <div className="text-sm text-muted-foreground">30 Days Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Resume Form Modal */}
      <ResumeForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}
