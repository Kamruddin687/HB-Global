"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import ConsultationBooking from "@/components/consultation-booking"
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, Sparkles, Globe, HeadphonesIcon, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["hbglobalserviceprovider.pvt.ltd@gmail.com"],
    description: "Send us an email and we'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91-9356779714"],
    description: "Speak directly with our team during business hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Business Ave, New York, NY 10001", "456 Corporate Blvd, London, UK", "789 Enterprise St, Singapore"],
    description: "Visit our offices in major business centers"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    description: "We're available to help you during these hours"
  }
]

const offices = [
  {
    city: "New York",
    country: "USA",
    address: "123 Business Ave, New York, NY 10001",
    phone: "+91-9356779714",
    email: "hbglobalserviceprovider.pvt.ltd@gmail.com"
  },
  {
    city: "London",
    country: "UK",
    address: "456 Corporate Blvd, London, UK",
    phone: "+91-9356779714",
    email: "hbglobalserviceprovider.pvt.ltd@gmail.com"
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "789 Enterprise St, Singapore",
    phone: "+91-9356779714",
    email: "hbglobalserviceprovider.pvt.ltd@gmail.com"
  }
]

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null)
  const [showConsultation, setShowConsultation] = useState(false)

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-float"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-ping delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Contact Us</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 animate-fade-in-up delay-200">
              Get in{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Touch
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up delay-400">
              Ready to transform your talent strategy? Let's discuss how we can help your 
              organization find the right people to achieve your goals.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-600">
              <div className="group p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Support Available</div>
              </div>
              <div className="group p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">3</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Global Offices</div>
              </div>
              <div className="group p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">&lt;24h</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Response Time</div>
              </div>
              <div className="group p-6 glass-effect rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ContactForm />
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-muted/20 via-background to-muted/20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Contact Information</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Multiple Ways to{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Reach Us
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your preferred way to connect with our team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const isHovered = hoveredCard === index
              
              return (
                <div 
                  key={index} 
                  className="group relative text-center p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{info.title}</h3>
                    <div className="space-y-2 mb-4">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{detail}</p>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground italic">{info.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500 mx-auto"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Globe className="w-4 h-4 animate-spin" />
              <span>Global Presence</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Our Global{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Offices
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at any of our locations worldwide for personalized service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => {
              const isHovered = hoveredOffice === index
              
              return (
                <div 
                  key={index} 
                  className="group relative glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredOffice(index)}
                  onMouseLeave={() => setHoveredOffice(null)}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <MapPin className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{office.city}</h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        <Globe className="w-3 h-3" />
                        {office.country}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 group-hover:bg-muted transition-colors">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 group-hover:bg-muted transition-colors">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{office.phone}</p>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 group-hover:bg-muted transition-colors">
                        <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{office.email}</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect text-primary rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Quick Actions</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Get Started{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Right Away
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take the first step towards transforming your talent strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative text-center p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">Free Consultation</h3>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                  Schedule a free 30-minute consultation to discuss your recruitment needs.
                </p>
                <button 
                  onClick={() => setShowConsultation(true)}
                  className="group/btn relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    Schedule Now
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
            
            <div className="group relative text-center p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">Job Posting</h3>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                  Post your job openings and let us find the perfect candidates for you.
                </p>
                <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    Post a Job
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
            
            <div className="group relative text-center p-8 glass-effect rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <HeadphonesIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">24/7 Support</h3>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                  Need immediate assistance? Contact our support team available round the clock.
                </p>
                <button className="group/btn relative px-8 py-4 border-2 border-gradient-to-r from-orange-500 to-red-500 text-foreground rounded-xl font-bold hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    Call Now
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Consultation Booking Modal */}
      <ConsultationBooking isOpen={showConsultation} onClose={() => setShowConsultation(false)} />
    </main>
  )
}
