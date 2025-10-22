import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Briefcase, Users, Clock, GraduationCap, Target, Handshake, CheckCircle, ArrowRight } from "lucide-react"

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
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Our Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Recruitment Solutions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end recruitment services that connect the right talent with the right opportunities. 
              From executive search to contract staffing, we help organizations build winning teams.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-card border border-border rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
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
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized workforce solutions across diverse sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{industry.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Recruitment Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to finding the perfect match
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Requirement Analysis</h3>
              <p className="text-muted-foreground">We understand your business needs, work environment, and specific requirements for staff deployment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Sourcing & Screening</h3>
              <p className="text-muted-foreground">Multi-stage screening including background checks, skills assessment, and detailed interviews</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Training & Deployment</h3>
              <p className="text-muted-foreground">Job-specific training and orientation before deployment with proper documentation and uniforms</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Ongoing Support</h3>
              <p className="text-muted-foreground">Continuous performance monitoring, compliance management, and immediate staffing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Talent Strategy?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive talent solutions can drive your organization's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
