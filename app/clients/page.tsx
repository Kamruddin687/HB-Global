import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Building2, Star, Users, TrendingUp, Award, Globe } from "lucide-react"

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
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Our Clients
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Leading Organizations
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're proud to partner with industry leaders across various sectors, helping them 
              build exceptional teams and achieve their business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about their experience working with HB Global Consultancy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover rounded-full border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">
                      {testimonial.industry}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 md:py-32 bg-background">
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
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{industry.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{industry.name}</h3>
                    <p className="text-sm text-primary font-medium">{industry.clients} Active Clients</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our client partnerships
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Tech Startup Growth</h3>
              <p className="text-muted-foreground">
                Helped a tech startup scale from 10 to 100 employees in 18 months, 
                placing key leadership roles and technical talent.
              </p>
            </div>
            
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Healthcare Expansion</h3>
              <p className="text-muted-foreground">
                Supported a healthcare network's expansion across 5 states, 
                recruiting 200+ medical professionals and support staff.
              </p>
            </div>
            
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Executive Transformation</h3>
              <p className="text-muted-foreground">
                Transformed a manufacturing company's leadership team, 
                placing 8 C-level executives who drove 40% revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Global Reach, Local Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Serving clients across multiple countries with deep local market knowledge
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">15+ Countries</h3>
              <p className="text-muted-foreground">Global presence with local expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">150+ Companies</h3>
              <p className="text-muted-foreground">Trusted by leading organizations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">2000+ Placements</h3>
              <p className="text-muted-foreground">Successful talent matches</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">98% Satisfaction</h3>
              <p className="text-muted-foreground">Client satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your organization find the right talent to achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
                Start Your Success Story
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
