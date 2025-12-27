"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  User,
  Building2,
  Briefcase,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Executive Recruitment",
    "Talent Management",
    "Strategic Consulting",
    "Career Development",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const URL =
      "https://script.google.com/macros/s/AKfycbzCKXWH1qNo7vmxYc9QUK2TAqN9w1-HTovPMhI6Y8vEuoy1U2uA6DdYT-397tIOcqF48w/exec";

    const payload = {
      ...formData,
      secret: "yourSuperSecretKey123", // must match Apps Script
      honeypot: "", // bot trap
    };

    try {
      // CORS-safe fetch (cannot read response)
      await fetch(URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Show success state
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      }, 3000);
    } catch (err) {
      setIsSubmitting(false);
      alert("Failed to send message. Please try again.");
      console.error("Submission Error:", err);
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative glass-effect rounded-3xl p-12 text-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-green-500/5 animate-gradient-x"></div>

        <div className="relative z-10">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-up shadow-2xl">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Thank You!
          </h3>
          <p className="text-xl text-muted-foreground mb-2">
            We've received your message and will get back to you within 24
            hours.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium mt-4">
            <CheckCircle className="w-4 h-4" />
            Message sent successfully
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative glass-effect rounded-3xl p-8 md:p-12 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-gradient-x"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/20 to-transparent rounded-tr-full"></div>

      <div className="relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 animate-spin" />
            Send us a message
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Get In{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                Touch
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg"></span>
            </span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Ready to transform your talent strategy? Let's discuss how we can
            help your organization achieve its goals.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="+91-9356779714"
                />
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Company
              </label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your company name"
                />
              </div>
            </div>
          </div>

          <div className="group">
            <label
              htmlFor="service"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Service Interested In
            </label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </span>
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Email
                </div>
                <div className="text-sm text-muted-foreground">
                  hbglobalserviceprovider.pvt.ltd@gmail.com
                </div>
              </div>
            </div>

            <div className="group flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Phone
                </div>
                <div className="text-sm text-muted-foreground">
                  +91-9356779714
                </div>
              </div>
            </div>

            <div className="group flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  Location
                </div>
                <div className="text-sm text-muted-foreground">
                  New York, NY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
