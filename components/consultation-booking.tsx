"use client"

"use client"

import { useState } from "react"
import { X, Calendar, Clock, User, Mail, Phone, Building2, MessageSquare, CheckCircle, Sparkles, ArrowRight } from "lucide-react"

interface ConsultationBookingProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationBooking({ isOpen, onClose }: ConsultationBookingProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    time: "",
    consultationType: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const consultationTypes = [
    "Executive Search",
    "Talent Acquisition Strategy",
    "RPO Services",
    "Workforce Planning",
    "Other"
  ]

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would typically send the data to your backend
    console.log("Consultation booked:", formData)
    
    setIsSubmitted(true)
    
    // Reset form after 3 seconds and close
    setTimeout(() => {
      setIsSubmitted(false)
      setStep(1)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        date: "",
        time: "",
        consultationType: "",
        message: ""
      })
      onClose()
    }, 3000)
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in-up">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-3xl shadow-2xl border border-border">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 border-b border-border backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-primary animate-pulse" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Schedule a Consultation
                </h2>
              </div>
              <p className="text-muted-foreground">Book a free consultation with our experts</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Steps */}
          {!isSubmitted && (
            <div className="flex items-center justify-center gap-4 mt-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s 
                      ? 'bg-gradient-to-r from-primary to-accent text-white scale-110' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`w-16 h-1 mx-2 rounded-full transition-all ${
                      step > s ? 'bg-gradient-to-r from-primary to-accent' : 'bg-muted'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Form */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Personal Information</h3>
                    <p className="text-muted-foreground">Tell us about yourself</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="+91-9356779714"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Schedule */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Select Date & Time</h3>
                    <p className="text-muted-foreground">Choose your preferred consultation slot</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-semibold text-foreground mb-2">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-semibold text-foreground mb-2">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <select
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                        >
                          <option value="">Select a time slot</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="consultationType" className="block text-sm font-semibold text-foreground mb-2">
                      Consultation Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        id="consultationType"
                        name="consultationType"
                        required
                        value={formData.consultationType}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                      >
                        <option value="">Select consultation type</option>
                        {consultationTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Details */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Additional Information</h3>
                    <p className="text-muted-foreground">Tell us more about your needs</p>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                        placeholder="Tell us about your recruitment needs, challenges, or any specific questions..."
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="p-6 glass-effect rounded-2xl">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Consultation Summary
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-semibold">Name:</span> {formData.name}</p>
                      <p><span className="font-semibold">Email:</span> {formData.email}</p>
                      <p><span className="font-semibold">Phone:</span> {formData.phone}</p>
                      {formData.company && <p><span className="font-semibold">Company:</span> {formData.company}</p>}
                      <p><span className="font-semibold">Date:</span> {formData.date}</p>
                      <p><span className="font-semibold">Time:</span> {formData.time}</p>
                      <p><span className="font-semibold">Type:</span> {formData.consultationType}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4 pt-6 border-t border-border">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                  >
                    Previous
                  </button>
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative flex items-center gap-2">
                      Next
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative flex items-center gap-2">
                      <Calendar className="w-5 h-5 group-hover:animate-pulse" />
                      Confirm Booking
                    </span>
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="text-center py-12 animate-scale-up">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-4">
                Consultation Booked!
              </h3>
              <p className="text-xl text-muted-foreground mb-2">
                We've received your booking request.
              </p>
              <p className="text-lg text-muted-foreground">
                A confirmation email will be sent to <span className="font-semibold text-primary">{formData.email}</span>
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 text-green-600 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                See you on {formData.date} at {formData.time}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
