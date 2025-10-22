"use client"

import { useState } from "react"
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
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Your Trusted Partner
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              HB Global
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                className="group relative p-8 bg-card border border-border rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h3>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              
              return (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-4"></div>
                  )}
                  
                  <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Step Number */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-6`}>
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">States Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Compliance Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground">Hidden Charges</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl">
            Learn More About Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}