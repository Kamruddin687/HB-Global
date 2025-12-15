"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import GetStartedForm from "@/components/get-started-form"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Jobs", href: "/jobs" },
    { label: "Careers", href: "/careers" },
    { label: "Clients", href: "/clients" },
    { label: "Our Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-3 relative">
              {/* Logo Container with Glow Effect */}
              <div className="relative">
                {/* Animated Glow Ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500 animate-spin-slow"></div>
                
                {/* Logo Image */}
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-full p-1 group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src="/hb-logo.png"
                    alt="HB Global Service Provider Logo"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover relative z-10 group-hover:rotate-12 transition-transform duration-500"
                  />
                </div>
                
                {/* Pulsing Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-0 group-hover:opacity-100"></div>
              </div>
              
              {/* Company Name */}
              <div className="hidden lg:block">
                <div className="font-bold text-xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:animate-gradient-x transition-all duration-300">
                  HB Global
                </div>
                <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                  Service Provider
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button 
              onClick={() => setIsFormOpen(true)}
              className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
      
      {/* Get Started Form Modal */}
      <GetStartedForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </nav>
  )
}
