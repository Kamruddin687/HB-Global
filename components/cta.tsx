"use client"

import { useState } from "react"
import { ArrowRight, Calendar, MessageCircle } from "lucide-react"
import ContactForm from "./contact-form"
import ConsultationBooking from "./consultation-booking"

interface CTAProps {
  onApplyClick?: () => void
}

export default function CTA({ onApplyClick }: CTAProps) {
  const [showForm, setShowForm] = useState(false)
  const [showConsultation, setShowConsultation] = useState(false)

  const handleConsultationClick = () => {
    console.log("Schedule Consultation clicked!")
    console.log("Current showConsultation state:", showConsultation)
    setShowConsultation(true)
    console.log("Setting showConsultation to true")
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!showForm ? (
          <div className="text-center animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up delay-200">
                Ready to Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient-x">
                  Talent Strategy?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up delay-400">
                Let's discuss how HB Global Service Provider can help your organization achieve its goals. 
                Get in touch with our experts for a personalized consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-600">
                <button 
                  onClick={() => setShowForm(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:from-primary/90 hover:to-accent/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  <MessageCircle className="w-5 h-5 animate-pulse" />
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleConsultationClick}
                  className="group px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5 group-hover:animate-spin" />
                  <span className="group-hover:animate-pulse">Schedule a Consultation</span>
                </button>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-800">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Free Consultation</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">Get expert advice tailored to your needs</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Calendar className="w-8 h-8 text-accent animate-pulse" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">Quick Response</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">We'll get back to you within 24 hours</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Proven Results</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">98% client satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <button 
                onClick={() => setShowForm(false)}
                className="text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                ← Back to overview
              </button>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let's Start the Conversation
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        )}
      </div>
      
      {/* Consultation Booking Modal */}
      <ConsultationBooking isOpen={showConsultation} onClose={() => setShowConsultation(false)} />
    </section>
  )
}