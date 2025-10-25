"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "HR Director",
    company: "TechCorp Solutions",
    image: "/professional-woman-ceo.jpg",
    rating: 5,
    text: "HB Global has been our trusted recruitment partner for over 3 years. Their ability to find the right talent quickly and efficiently has been instrumental in our company's growth. Highly recommended!",
    industry: "Technology"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "Global Brands Ltd",
    image: "/professional-man-business.jpg",
    rating: 5,
    text: "The team at HB Global understands our business needs perfectly. They've helped us build a strong leadership team and continue to deliver exceptional candidates for all our positions.",
    industry: "Retail"
  },
  {
    id: 3,
    name: "Emma Williams",
    position: "Operations Manager",
    company: "Healthcare Plus",
    image: "/professional-woman-consultant.jpg",
    rating: 5,
    text: "Working with HB Global has transformed our hiring process. Their expertise in healthcare recruitment and understanding of compliance requirements is outstanding.",
    industry: "Healthcare"
  },
  {
    id: 4,
    name: "David Martinez",
    position: "CTO",
    company: "AI Innovations",
    image: "/professional-man-recruitment.jpg",
    rating: 5,
    text: "HB Global's technical recruitment expertise is unmatched. They've helped us find top-tier developers and data scientists who have been crucial to our AI product development.",
    industry: "Technology"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    position: "VP of Sales",
    company: "Finance Corp",
    image: "/professional-woman-ceo.jpg",
    rating: 5,
    text: "The recruitment process with HB Global is seamless and professional. They understand the financial services industry and consistently deliver candidates who fit our culture perfectly.",
    industry: "Finance"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 animate-spin" />
            <span>Client Success Stories</span>
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
            about their experience working with HB Global Consultancy.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative glass-effect rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient-x"></div>
            
            {/* Decorative Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-32 h-32 text-primary" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <Quote className="w-16 h-16 text-primary/30 mx-auto mb-6 animate-pulse" />
                
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto font-medium">
                  "{currentTestimonial.text}"
                </blockquote>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-20 h-20 object-cover rounded-full border-4 border-primary/30 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-background flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-foreground">{currentTestimonial.name}</h3>
                    <p className="text-muted-foreground">{currentTestimonial.position}</p>
                    <p className="text-primary font-semibold">{currentTestimonial.company}</p>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm rounded-full mt-2 font-medium">
                      {currentTestimonial.industry}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="p-4 glass-effect text-primary rounded-2xl hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-4 glass-effect text-primary rounded-2xl hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-10 h-3 bg-gradient-to-r from-primary to-accent' 
                    : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-125'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Client Satisfaction</div>
          </div>
          <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">2000+</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Successful Placements</div>
          </div>
          <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">150+</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Happy Clients</div>
          </div>
          <div className="group text-center p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">15+</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
