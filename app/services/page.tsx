"use client"

import Image from "next/image"
import Link from "next/link"
import { useShopInfo } from "@/hooks/use-shop-info"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Check } from "lucide-react"

export default function ServicesPage() {
  const shop = useShopInfo()

  const services = [
    {
      title: "Performance Tuning",
      description: "Unlock your vehicle's full potential with precision engine optimization and ECU tuning.",
      features: [
        "ECU remapping & optimization",
        "Dyno testing & analysis",
        "Air intake upgrades",
        "Exhaust system tuning",
        "Turbo & supercharger work",
        "Fuel system upgrades",
      ],
      image: "/images/engine-detail.jpg",
    },
    {
      title: "Engine & Drivetrain",
      description: "Complete engine and drivetrain services from routine maintenance to full rebuilds.",
      features: [
        "Engine rebuilds & overhauls",
        "Transmission service & repair",
        "Clutch replacement",
        "Differential service",
        "Timing belt/chain service",
        "Oil changes & fluid service",
      ],
      image: "/images/workshop.jpg",
    },
    {
      title: "Custom Fabrication",
      description: "Bespoke solutions crafted to your exact specifications by master fabricators.",
      features: [
        "Custom exhaust systems",
        "Roll cage fabrication",
        "Suspension modifications",
        "One-off components",
        "Prototype development",
        "Welding & metalwork",
      ],
      image: "/images/hero-car.jpg",
    },
  ]

  const additionalServices = [
    { name: "Brake Service", description: "High-performance brake systems and routine service" },
    { name: "Suspension", description: "Coilovers, air ride, and alignment services" },
    { name: "Electrical", description: "Diagnostics, wiring, and system upgrades" },
    { name: "Cooling Systems", description: "Radiator upgrades and cooling solutions" },
    { name: "Diagnostics", description: "Advanced computer diagnostics for all systems" },
    { name: "Pre-Purchase Inspection", description: "Comprehensive inspections before you buy" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/engine-detail.jpg"
            alt="Engine detail work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">Our Expertise</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            Services
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            From precision tuning to complete restorations, we deliver excellence at every level.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative h-[400px] lg:h-[500px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-xs uppercase tracking-widest text-primary mb-4">
                  0{index + 1}
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-foreground/80"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-primary mb-4">
              Full Service
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Additional Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-card p-10 group hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-4">
                How We Work
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
                Our Process
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                Transparency and communication at every step. You will always know 
                exactly what we are doing and why.
              </p>

              <div className="space-y-8">
                {[
                  { step: "01", title: "Consultation", description: "Discuss your goals and assess your vehicle" },
                  { step: "02", title: "Inspection", description: "Comprehensive diagnostic evaluation" },
                  { step: "03", title: "Proposal", description: "Detailed scope of work with transparent pricing" },
                  { step: "04", title: "Execution", description: "Expert work with regular progress updates" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <span className="font-display text-2xl text-primary">{item.step}</span>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px]">
              <Image
                src="/images/workshop.jpg"
                alt="Our workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Contact us for a consultation and let us show you what {shop.name} can do for your vehicle.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
