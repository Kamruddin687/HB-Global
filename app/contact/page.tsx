import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@hbglobal.com", "careers@hbglobal.com", "support@hbglobal.com"],
    description: "Send us an email and we'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (234) 567-890", "+1 (234) 567-891", "+1 (234) 567-892"],
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
    phone: "+1 (234) 567-890",
    email: "ny@hbglobal.com"
  },
  {
    city: "London",
    country: "UK",
    address: "456 Corporate Blvd, London, UK",
    phone: "+44 20 7946 0958",
    email: "london@hbglobal.com"
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "789 Enterprise St, Singapore",
    phone: "+65 6123 4567",
    email: "singapore@hbglobal.com"
  }
]

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Contact Us
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Touch
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your talent strategy? Let's discuss how we can help your 
              organization find the right people to achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us and get the support you need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Global Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at any of our locations worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{office.city}</h3>
                  <p className="text-primary font-medium">{office.country}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                    <p className="text-muted-foreground">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <p className="text-muted-foreground">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <p className="text-muted-foreground">{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quick Actions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started with our services right away
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Free Consultation</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free 30-minute consultation to discuss your recruitment needs.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Schedule Now
              </button>
            </div>
            
            <div className="text-center p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Job Posting</h3>
              <p className="text-muted-foreground mb-6">
                Post your job openings and let us find the perfect candidates for you.
              </p>
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Post a Job
              </button>
            </div>
            
            <div className="text-center p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Emergency Support</h3>
              <p className="text-muted-foreground mb-6">
                Need immediate assistance? Call our 24/7 support line for urgent matters.
              </p>
              <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
