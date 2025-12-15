"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Shield, 
  Users, 
  Target, 
  CheckCircle, 
  Clock, 
  MapPin, 
  DollarSign, 
  Headphones,
  Search,
  GraduationCap,
  UserCheck,
  BarChart3,
  ArrowRight,
  Star
} from "lucide-react"

const whyChooseUs = [
  {
    icon: Shield,
    title: "Verified & Trained Staff",
    description: "Every staff member undergoes rigorous background verification, skills assessment, and job-specific training before deployment",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Clock,
    title: "Quick Replacement",
    description: "Guaranteed quick replacement of staff when required, ensuring zero disruption to your operations",
    color: "from-green-500 to-green-600"
  },
  {
    icon: CheckCircle,
    title: "100% Compliance",
    description: "Complete adherence to labor laws, statutory requirements, and safety regulations with transparent documentation",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: MapPin,
    title: "Pan-India Coverage",
    description: "Dedicated partner-led management across 15+ states with local expertise and national standards",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Cost-effective solutions with no hidden charges, flexible contracts, and transparent billing processes",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for immediate problem resolution and continuous performance monitoring",
    color: "from-red-500 to-red-600"
  }
]

const processSteps = [
  {
    step: "1",
    icon: Search,
    title: "Requirement Analysis",
    description: "We understand your business needs, work environment, and specific requirements for staff deployment",
    color: "from-blue-500 to-blue-600"
  },
  {
    step: "2", 
    icon: UserCheck,
    title: "Sourcing & Screening",
    description: "Multi-stage screening including background checks, skills assessment, and detailed interviews",
    color: "from-green-500 to-green-600"
  },
  {
    step: "3",
    icon: GraduationCap,
    title: "Training & Deployment",
    description: "Job-specific training and orientation before deployment with proper documentation and uniforms",
    color: "from-purple-500 to-purple-600"
  },
  {
    step: "4",
    icon: BarChart3,
    title: "Ongoing Support",
    description: "Continuous performance monitoring, compliance management, and immediate staffing support",
    color: "from-orange-500 to-orange-600"
  }
]

export default function WhyChooseUs() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 animate-spin" />
            <span>Your Trusted Partner</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Why Choose{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                HB Global
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in workforce management with proven expertise, 
            comprehensive solutions, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Why Choose Us Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {whyChooseUs.map((feature, index) => {
            const Icon = feature.icon
            const isHovered = hoveredFeature === index
            
            return (
              <div
                key={index}
                className="group relative p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="relative glass-effect rounded-3xl p-12 overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-gradient-x"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Our Process
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground">
                Simple, transparent, and efficient
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                
                return (
                  <div key={index} className="relative group">
                    {/* Connection Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5">
                        <div className="h-full bg-gradient-to-r from-primary/30 to-transparent transform translate-x-4"></div>
                        <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-1000"></div>
                      </div>
                    )}
                    
                    <div className="relative glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h4>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className="mt-4 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">15+</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">States Covered</div>
          </div>
          <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Compliance Rate</div>
          </div>
          <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Support Available</div>
          </div>
          <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">0</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Hidden Charges</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/about">
            <button className="group px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}