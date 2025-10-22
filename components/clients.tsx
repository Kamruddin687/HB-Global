export default function Clients() {
  const industries = [
    {
      title: "Healthcare & Pharma",
      description:
        "Hospitals, clinics, diagnostic centers, pharmaceutical companies with trained medical support staff",
    },
    {
      title: "Manufacturing",
      description: "Automobile, FMCG, textile industries with skilled production and warehouse personnel",
    },
    {
      title: "IT & Corporate",
      description: "Software companies, BPOs, banks with professional office and administrative staff",
    },
    {
      title: "Education",
      description: "Schools, colleges, universities with qualified teaching and non-teaching personnel",
    },
    {
      title: "Retail & Hospitality",
      description: "Shopping malls, hotels, restaurants with customer service and operational staff",
    },
    {
      title: "Logistics",
      description: "Warehouses, distribution centers with logistics and supply chain support personnel",
    },
  ]

  return (
    <section id="clients" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized workforce solutions across diverse sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">{industry.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
