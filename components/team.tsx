export default function Team() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/professional-woman-ceo.jpg",
    },
    {
      name: "Michael Chen",
      role: "Head of Recruitment",
      image: "/professional-man-recruitment.jpg",
    },
    {
      name: "Emma Williams",
      role: "Senior Consultant",
      image: "/professional-woman-consultant.jpg",
    },
    {
      name: "David Martinez",
      role: "Business Development",
      image: "/professional-man-business.jpg",
    },
  ]

  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Meet the experts driving our success</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
