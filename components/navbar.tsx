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
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/hb-logo.png"
                alt="HB Global Consultancy Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
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
