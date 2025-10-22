import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Users, Award, Globe, Target, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    image: "/professional-woman-ceo.jpg",
    bio: "Sarah leads HB Global with over 15 years of experience in executive recruitment. She has successfully placed 500+ C-level executives across various industries.",
    expertise: ["Executive Search", "Leadership Development", "Strategic Planning"],
    linkedin: "https://linkedin.com/in/sarahjohnson",
    email: "sarah@hbglobal.com"
  },
  {
    name: "Michael Chen",
    position: "Head of Recruitment",
    image: "/professional-man-recruitment.jpg",
    bio: "Michael oversees our recruitment operations with expertise in technical hiring and talent acquisition strategies. He has built teams for 100+ companies.",
    expertise: ["Technical Recruitment", "Talent Strategy", "Team Building"],
    linkedin: "https://linkedin.com/in/michaelchen",
    email: "michael@hbglobal.com"
  },
  {
    name: "Emma Williams",
    position: "Senior Consultant",
    image: "/professional-woman-consultant.jpg",
    bio: "Emma specializes in healthcare and pharmaceutical recruitment with deep industry knowledge and compliance expertise.",
    expertise: ["Healthcare Recruitment", "Compliance", "Industry Relations"],
    linkedin: "https://linkedin.com/in/emmawilliams",
    email: "emma@hbglobal.com"
  },
  {
    name: "David Martinez",
    position: "Business Development",
    image: "/professional-man-business.jpg",
    bio: "David drives our business growth through strategic partnerships and client acquisition across multiple markets.",
    expertise: ["Business Development", "Partnerships", "Market Expansion"],
    linkedin: "https://linkedin.com/in/davidmartinez",
    email: "david@hbglobal.com"
  }
]

const values = [
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and foster an environment where everyone's voice is heard and valued."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, setting high standards for ourselves and our clients."
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We embrace new ideas and technologies to stay ahead of industry trends and deliver better results."
  },
  {
    icon: Target,
    title: "Results",
    description: "We are focused on delivering measurable outcomes that drive success for our clients and candidates."
  }
]

export default function Team() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Experts
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of experienced professionals brings together decades of recruitment expertise, 
              industry knowledge, and a passion for connecting the right people with the right opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Team Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our team and define our workplace culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Team Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The collective achievements of our dedicated team
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-sm text-muted-foreground">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for connecting 
              people with opportunities. Explore career opportunities with HB Global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
                View Open Positions
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors">
                Send Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
