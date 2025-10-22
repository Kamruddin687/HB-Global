"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

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
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Client Success Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Clients Say
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with HB Global Consultancy.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-8">
              <Quote className="w-16 h-16 text-primary/20 mx-auto mb-6" />
              
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                "{currentTestimonial.text}"
              </blockquote>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center gap-6 mb-6 md:mb-0">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 object-cover rounded-full border-4 border-primary/20"
                />
                <div>
                  <h3 className="text-xl font-bold text-foreground">{currentTestimonial.name}</h3>
                  <p className="text-muted-foreground">{currentTestimonial.position}</p>
                  <p className="text-primary font-semibold">{currentTestimonial.company}</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mt-2">
                    {currentTestimonial.industry}
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2000+</div>
            <div className="text-sm text-muted-foreground">Successful Placements</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
