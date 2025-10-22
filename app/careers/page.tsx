import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MapPin, Briefcase, Clock, Users, Target, Award } from "lucide-react"

const careerOpenings = [
  {
    title: "Senior Recruitment Consultant",
    location: "New York, USA",
    type: "Full-time",
    description: "Lead recruitment initiatives for executive-level positions across various industries.",
    requirements: ["5+ years recruitment experience", "Strong network in executive circles", "Excellent communication skills"],
    benefits: ["Competitive salary", "Health insurance", "Flexible work arrangements"]
  },
  {
    title: "Business Development Manager",
    location: "London, UK",
    type: "Full-time",
    description: "Drive business growth through strategic partnerships and client acquisition.",
    requirements: ["3+ years B2B sales experience", "Recruitment industry knowledge", "Proven track record"],
    benefits: ["Commission structure", "International travel", "Career development"]
  },
  {
    title: "HR Specialist",
    location: "Singapore",
    type: "Full-time",
    description: "Support HR operations and talent management initiatives.",
    requirements: ["HR degree or certification", "2+ years HR experience", "Strong analytical skills"],
    benefits: ["Learning opportunities", "Team collaboration", "Work-life balance"]
  },
  {
    title: "Talent Acquisition Lead",
    location: "Toronto, Canada",
    type: "Full-time",
    description: "Oversee talent acquisition strategies and team management.",
    requirements: ["7+ years talent acquisition", "Leadership experience", "Strategic thinking"],
    benefits: ["Leadership role", "Team management", "Strategic impact"]
  }
]

const benefits = [
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with a team of passionate professionals who share your commitment to excellence."
  },
  {
    icon: Target,
    title: "Career Growth",
    description: "Clear career progression paths with opportunities for advancement and skill development."
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Performance-based bonuses and recognition programs that celebrate your achievements."
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and policies that support your personal and professional life."
  }
]

export default function Careers() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Join Our Team
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Build Your Career with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                HB Global
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a dynamic team of recruitment professionals who are passionate about connecting 
              talent with opportunity. Be part of our mission to transform careers and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the benefits of being part of the HB Global family
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Current Openings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities with HB Global Consultancy
            </p>
          </div>
          
          <div className="space-y-6">
            {careerOpenings.map((job, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Apply Now
                    </button>
                    <button className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Culture & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our team and define our workplace
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and foster an environment where everyone's voice is heard.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, setting high standards for ourselves and our clients.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new ideas and technologies to stay ahead of industry trends and deliver better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
                Send Your Resume
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">
                Contact HR Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
