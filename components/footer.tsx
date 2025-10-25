"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight, Send, Heart, Sparkles, Globe, TrendingUp, Award, Users } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail("")
    }, 3000)
  }

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-foreground via-foreground/98 to-foreground/95 text-background overflow-hidden">
      {/* Multi-layered Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-accent/35 rounded-full animate-ping delay-3000"></div>
      </div>
      
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-accent to-transparent animate-gradient-x"></div>
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="relative border-b border-background/10 py-12 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-gradient-x"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect rounded-full text-sm font-semibold mb-4 animate-fade-in-up">
                  <Sparkles className="w-4 h-4 text-primary animate-spin" />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stay Updated</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold mb-3 animate-fade-in-up delay-200">
                  Subscribe to Our{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                      Newsletter
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-lg"></span>
                  </span>
                </h3>
                <p className="text-background/70 text-lg animate-fade-in-up delay-400">Get the latest updates on job opportunities, industry insights, and career tips</p>
              </div>
              <div className="w-full md:w-auto md:flex-1 md:max-w-md animate-fade-in-up delay-600">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-background/50" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl glass-effect text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="group px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                    >
                      <span className="hidden sm:inline">Subscribe</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                ) : (
                  <div className="glass-effect rounded-2xl p-4 flex items-center gap-3 animate-scale-up">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-background">Successfully Subscribed!</p>
                      <p className="text-sm text-background/70">Thank you for joining us</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">HB Global</h3>
                    </div>
                  </div>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-gradient-x"></div>
                </div>
                <p className="text-background/80 mb-4 leading-relaxed text-sm">
                  Transforming talent into success through strategic consulting and recruitment excellence.
                </p>
                
                {/* Social Links */}
                <div className="space-y-4">
                  <p className="text-sm font-bold text-background/90 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    Connect With Us
                  </p>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, label: "LinkedIn", gradient: "from-blue-500 to-blue-600" },
                      { icon: Twitter, label: "Twitter", gradient: "from-sky-400 to-sky-600" },
                      { icon: Facebook, label: "Facebook", gradient: "from-blue-600 to-blue-700" },
                      { icon: Instagram, label: "Instagram", gradient: "from-pink-500 to-purple-600" },
                      { icon: Youtube, label: "YouTube", gradient: "from-red-500 to-red-600" }
                    ].map((social, index) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={index}
                          href="#"
                          className={`group relative p-3 glass-effect rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden`}
                          aria-label={social.label}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                          <Icon className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="group">
                <h4 className="text-xl font-bold mb-6 text-background">
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: "Home", href: "#home" },
                    { name: "About Us", href: "#about" },
                    { name: "Services", href: "#services" },
                    { name: "Team", href: "#team" },
                    { name: "Careers", href: "#careers" },
                    { name: "Contact", href: "#contact" }
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-background/80 hover:text-background transition-colors text-base block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="group">
                <h4 className="text-xl font-bold mb-6 text-background">
                  Our Services
                </h4>
                <ul className="space-y-4">
                  {[
                    "Executive Search",
                    "Permanent Recruitment",
                    "Contract Staffing",
                    "Talent Development",
                    "RPO Services",
                    "Industry Specialization"
                  ].map((service, index) => (
                    <li key={index}>
                      <a
                        href="#services"
                        className="text-background/80 hover:text-background transition-colors text-base block"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="group">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="relative">
                    Get In Touch
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
                </h4>
                <ul className="space-y-3">
                  <li className="group/item">
                    <div className="relative flex items-start gap-3 p-3 glass-effect rounded-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                      <div className="relative p-2 bg-gradient-to-br from-primary to-accent rounded-lg shadow-lg group-hover/item:rotate-6 transition-transform">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 relative">
                        <p className="text-xs text-background/60 mb-0.5 font-medium">Email Us</p>
                        <a href="mailto:hbglobalserviceprovider.pvt.ltd@gmail.com" className="text-background/90 hover:text-background transition-colors font-semibold text-sm break-all">
                          hbglobalserviceprovider.pvt.ltd@gmail.com
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="group/item">
                    <div className="relative flex items-start gap-3 p-3 glass-effect rounded-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                      <div className="relative p-2 bg-gradient-to-br from-accent to-primary rounded-lg shadow-lg group-hover/item:rotate-6 transition-transform">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 relative">
                        <p className="text-xs text-background/60 mb-0.5 font-medium">Call Us</p>
                        <a href="tel:+919356779714" className="text-background/90 hover:text-background transition-colors font-semibold text-sm">
                          +91-9356779714
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="group/item">
                    <div className="relative flex items-start gap-3 p-3 glass-effect rounded-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                      <div className="relative p-2 bg-gradient-to-br from-primary to-accent rounded-lg shadow-lg group-hover/item:rotate-6 transition-transform">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 relative">
                        <p className="text-xs text-background/60 mb-0.5 font-medium">Visit Us</p>
                        <span className="text-background/90 font-semibold text-sm">123 Business Ave,<br/>New York, NY 10001</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-background/10">
          {/* Gradient Glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-background/70">
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-medium">&copy; 2025 HB Global Consultancy. All rights reserved.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-background/70">
                <a href="#" className="hover:text-background transition-colors px-3 py-1 rounded-lg hover:bg-background/5">Privacy Policy</a>
                <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                <a href="#" className="hover:text-background transition-colors px-3 py-1 rounded-lg hover:bg-background/5">Terms of Service</a>
                <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                <a href="#" className="hover:text-background transition-colors px-3 py-1 rounded-lg hover:bg-background/5">Cookie Policy</a>
              </div>
              
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-background/70">Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">by HB Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
