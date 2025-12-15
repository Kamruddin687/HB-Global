"use client"

import { useState, useRef } from "react"
import { X, Send, User, Mail, Phone, Briefcase, Upload, CheckCircle, Sparkles, FileText, MapPin, GraduationCap, Award, Heart } from "lucide-react"

interface HealthcareResumeFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function HealthcareResumeForm({ isOpen, onClose }: HealthcareResumeFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentRole: "",
    specialization: "",
    experience: "",
    location: "",
    qualification: "",
    registrationNumber: "",
    preferredPosition: "",
    availability: "",
    expectedSalary: "",
    additionalInfo: ""
  })
  const [resume, setResume] = useState<File | null>(null)
  const [certificates, setCertificates] = useState<File[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const resumeInputRef = useRef<HTMLInputElement>(null)
  const certificatesInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Prepare form data for submission
    const submissionData = {
      ...formData,
      resume: resume?.name,
      certificates: certificates.map(cert => cert.name),
      submittedAt: new Date().toISOString(),
      industry: "Healthcare & Pharma"
    }
    
    // Here you would typically send the data to your backend
    console.log("Healthcare Resume submitted:", submissionData)
    console.log("Resume file:", resume)
    console.log("Certificate files:", certificates)
    
    setIsSubmitted(true)
    
    // Reset form after 3 seconds and close
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        currentRole: "",
        specialization: "",
        experience: "",
        location: "",
        qualification: "",
        registrationNumber: "",
        preferredPosition: "",
        availability: "",
        expectedSalary: "",
        additionalInfo: ""
      })
      setResume(null)
      setCertificates([])
      onClose()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleCertificatesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg']
      const validFiles: File[] = []
      
      Array.from(files).forEach(file => {
        if (validTypes.includes(file.type)) {
          validFiles.push(file)
        }
      })
      
      if (validFiles.length > 0) {
        setCertificates(prev => [...prev, ...validFiles])
      } else {
        alert('Please upload PDF or image files for certificates')
      }
    }
  }

  const removeCertificate = (index: number) => {
    setCertificates(prev => prev.filter((_, i) => i !== index))
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
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-3xl shadow-2xl border border-border">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-red-500/10 p-6 border-b border-border backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  Healthcare & Pharma Application
                </h2>
              </div>
              <p className="text-muted-foreground">Join healthcare professionals making a difference</p>
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
              {/* Personal Information Section */}
              <div className="glass-effect rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </h3>
                
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
                      className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                      placeholder="Dr. John Smith"
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
                        className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                        placeholder="john.smith@email.com"
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
                        className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                        placeholder="+91-9356779714"
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-foreground mb-2">
                    Current Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                      placeholder="New York, USA"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information Section */}
              <div className="glass-effect rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-red-500" />
                  Professional Information
                </h3>

                {/* Current Role & Specialization */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="currentRole" className="block text-sm font-semibold text-foreground mb-2">
                      Current Role <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="currentRole"
                      name="currentRole"
                      required
                      value={formData.currentRole}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                    >
                      <option value="">Select Role</option>
                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="pharmacist">Pharmacist</option>
                      <option value="medical-technician">Medical Technician</option>
                      <option value="lab-technician">Lab Technician</option>
                      <option value="radiologist">Radiologist</option>
                      <option value="physiotherapist">Physiotherapist</option>
                      <option value="paramedic">Paramedic</option>
                      <option value="medical-assistant">Medical Assistant</option>
                      <option value="healthcare-admin">Healthcare Administrator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="specialization" className="block text-sm font-semibold text-foreground mb-2">
                      Specialization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="specialization"
                      name="specialization"
                      required
                      value={formData.specialization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                      placeholder="e.g., Cardiology, Pediatrics, ICU"
                    />
                  </div>
                </div>

                {/* Qualification & Experience */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="qualification" className="block text-sm font-semibold text-foreground mb-2">
                      Highest Qualification <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        required
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                        placeholder="MBBS, MD, BSc Nursing, etc."
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
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
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

                {/* Registration Number */}
                <div>
                  <label htmlFor="registrationNumber" className="block text-sm font-semibold text-foreground mb-2">
                    Medical Council Registration Number (if applicable)
                  </label>
                  <div className="relative">
                    <Award className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="registrationNumber"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                      placeholder="Enter registration number"
                    />
                  </div>
                </div>
              </div>

              {/* Job Preferences Section */}
              <div className="glass-effect rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-500" />
                  Job Preferences
                </h3>

                {/* Preferred Position & Availability */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredPosition" className="block text-sm font-semibold text-foreground mb-2">
                      Preferred Position
                    </label>
                    <select
                      id="preferredPosition"
                      name="preferredPosition"
                      value={formData.preferredPosition}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                    >
                      <option value="">Select position type</option>
                      <option value="hospital">Hospital</option>
                      <option value="clinic">Clinic</option>
                      <option value="diagnostic-center">Diagnostic Center</option>
                      <option value="pharmaceutical">Pharmaceutical Company</option>
                      <option value="research">Research Facility</option>
                      <option value="nursing-home">Nursing Home</option>
                      <option value="home-care">Home Care</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="availability" className="block text-sm font-semibold text-foreground mb-2">
                      Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                    >
                      <option value="">Select availability</option>
                      <option value="immediate">Immediate</option>
                      <option value="2-weeks">Within 2 weeks</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="negotiable">Negotiable</option>
                    </select>
                  </div>
                </div>

                {/* Expected Salary */}
                <div>
                  <label htmlFor="expectedSalary" className="block text-sm font-semibold text-foreground mb-2">
                    Expected Salary Range (Annual)
                  </label>
                  <input
                    type="text"
                    id="expectedSalary"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                    placeholder="e.g., $60,000 - $80,000"
                  />
                </div>
              </div>

              {/* Document Upload Section */}
              <div className="glass-effect rounded-2xl p-6 space-y-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Upload className="w-5 h-5 text-red-500" />
                  Documents Upload
                </h3>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Upload Resume/CV <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      ref={resumeInputRef}
                      onChange={handleResumeChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => resumeInputRef.current?.click()}
                      className="w-full p-6 border-2 border-dashed border-border rounded-xl hover:border-red-500 transition-colors flex flex-col items-center gap-3"
                    >
                      <div className="p-4 bg-red-500/10 rounded-full">
                        <Upload className="w-8 h-8 text-red-500" />
                      </div>
                      {resume ? (
                        <div className="text-center">
                          <p className="font-semibold text-foreground flex items-center gap-2 justify-center">
                            <FileText className="w-5 h-5 text-red-500" />
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

                {/* Certificates Upload */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Upload Certificates & Licenses (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      ref={certificatesInputRef}
                      onChange={handleCertificatesChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                      multiple
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => certificatesInputRef.current?.click()}
                      className="w-full p-6 border-2 border-dashed border-border rounded-xl hover:border-red-500 transition-colors flex flex-col items-center gap-3"
                    >
                      <div className="p-4 bg-pink-500/10 rounded-full">
                        <Award className="w-8 h-8 text-pink-500" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-foreground">Click to upload certificates</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          PDF, JPG, PNG (Multiple files allowed)
                        </p>
                      </div>
                    </button>
                  </div>

                  {/* Display uploaded certificates */}
                  {certificates.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {certificates.map((cert, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-pink-500" />
                            <div>
                              <p className="text-sm font-medium text-foreground">{cert.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(cert.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeCertificate(index)}
                            className="p-1 hover:bg-muted rounded-full transition-colors"
                          >
                            <X className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-foreground mb-2">
                  Additional Information / Cover Letter
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all resize-none"
                  placeholder="Tell us about your experience, achievements, and why you're interested in healthcare positions..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 group relative px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Submit Application
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
                Application Submitted!
              </h3>
              <p className="text-xl text-muted-foreground mb-2">
                Thank you for applying to Healthcare & Pharma positions.
              </p>
              <p className="text-muted-foreground">
                Our healthcare recruitment team will review your application and contact you soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
