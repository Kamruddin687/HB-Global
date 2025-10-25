"use client"

import { useState, useRef } from "react"
import { X, Send, User, Mail, Phone, Briefcase, Upload, CheckCircle, Sparkles, FileText, Linkedin } from "lucide-react"

interface ResumeFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeForm({ isOpen, onClose }: ResumeFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
    linkedIn: "",
    coverLetter: ""
  })
  const [resume, setResume] = useState<File | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Prepare form data for submission
    const submissionData = {
      ...formData,
      resume: resume?.name,
      submittedAt: new Date().toISOString()
    }
    
    // Here you would typically send the data to your backend
    console.log("Resume submitted:", submissionData)
    console.log("Resume file:", resume)
    
    setIsSubmitted(true)
    
    // Reset form after 3 seconds and close
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        currentRole: "",
        experience: "",
        linkedIn: "",
        coverLetter: ""
      })
      setResume(null)
      onClose()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type (PDF, DOC, DOCX)
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (validTypes.includes(file.type)) {
        setResume(file)
      } else {
        alert('Please upload a PDF or DOC file')
        e.target.value = ''
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in-up">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background rounded-3xl shadow-2xl border border-border">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 border-b border-border backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary animate-spin" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Submit Your Resume
                </h2>
              </div>
              <p className="text-muted-foreground">Join our talent pool and we'll match you with the right opportunities</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
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
                      placeholder="john@example.com"
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
              </div>

              {/* Current Role & Experience */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="currentRole" className="block text-sm font-semibold text-foreground mb-2">
                    Current Role <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="currentRole"
                      name="currentRole"
                      required
                      value={formData.currentRole}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Senior Developer"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-foreground mb-2">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              {/* LinkedIn Profile */}
              <div>
                <label htmlFor="linkedIn" className="block text-sm font-semibold text-foreground mb-2">
                  LinkedIn Profile (Optional)
                </label>
                <div className="relative">
                  <Linkedin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="url"
                    id="linkedIn"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Upload Resume <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full p-6 border-2 border-dashed border-border rounded-xl hover:border-primary transition-colors flex flex-col items-center gap-3"
                  >
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    {resume ? (
                      <div className="text-center">
                        <p className="font-semibold text-foreground flex items-center gap-2">
                          <FileText className="w-5 h-5 text-primary" />
                          {resume.name}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {(resume.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <p className="font-semibold text-foreground">Click to upload resume</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          PDF, DOC, or DOCX (Max 5MB)
                        </p>
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-semibold text-foreground mb-2">
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us why you'd be a great fit for HB Global..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Submit Resume
                  </span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-4 border-2 border-border text-foreground rounded-xl font-semibold hover:bg-muted transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-up">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Thank You!
              </h3>
              <p className="text-xl text-muted-foreground mb-2">
                Your resume has been submitted successfully.
              </p>
              <p className="text-muted-foreground">
                Our team will review your application and contact you soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
