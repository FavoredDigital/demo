"use client"

import Image from "next/image"
import Link from "next/link"
import { useShopInfo } from "@/hooks/use-shop-info"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  const shop = useShopInfo()

  const values = [
    {
      title: "Precision",
      description: "Every detail matters. We approach each vehicle with meticulous attention and exacting standards.",
    },
    {
      title: "Integrity",
      description: "Honest assessments, transparent pricing, and work we stand behind without exception.",
    },
    {
      title: "Excellence",
      description: "We continuously refine our craft, investing in training and the latest diagnostic technology.",
    },
    {
      title: "Passion",
      description: "We are automotive enthusiasts first. Your vehicle receives the care we would give our own.",
    },
  ]

  const timeline = [
    { year: shop.established, title: "Founded", description: "Started as a small family operation with a vision for excellence" },
    { year: shop.established + 10, title: "Expansion", description: "Added restoration services and expanded our facility" },
    { year: shop.established + 20, title: "Recognition", description: "Achieved ASE Blue Seal certification" },
    { year: shop.established + 30, title: "Innovation", description: "Invested in cutting-edge diagnostic technology" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/workshop.jpg"
            alt="Heritage Auto Works workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">Since {shop.established}</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            Our Story
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            A legacy of automotive excellence built on passion, precision, and an unwavering commitment to craft.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-4">The Beginning</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                Built on a foundation of excellence
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  {shop.name} was founded in {shop.established} with a simple belief: that every 
                  vehicle deserves exceptional care, and every owner deserves complete transparency.
                </p>
                <p>
                  What began as a modest two-bay garage has evolved into {shop.city}&apos;s 
                  premier destination for discerning automotive enthusiasts. Our growth has been 
                  driven not by ambition, but by reputation—earned one satisfied client at a time.
                </p>
                <p>
                  Today, our team of master technicians brings together over a century of combined 
                  experience, from classic restoration to cutting-edge performance engineering. 
                  Yet our commitment remains unchanged: precision craftsmanship, honest service, 
                  and results that exceed expectations.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[600px]">
              <Image
                src="/images/hero-car.jpg"
                alt="Heritage Auto Works"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-primary mb-4">What Drives Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <span className="font-display text-5xl text-primary/20 block mb-4">
                  0{index + 1}
                </span>
                <h3 className="font-display text-xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-xs uppercase tracking-widest text-primary mb-4">Our Journey</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                {new Date().getFullYear() - shop.established} Years of Excellence
              </h2>
            </div>

            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-8 pb-16 last:pb-0 relative"
                >
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[40px] md:left-[60px] top-12 bottom-0 w-px bg-border" />
                  )}
                  <div className="relative">
                    <span className="font-display text-2xl md:text-3xl text-primary">
                      {item.year}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-primary mb-4">The Team</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Master Craftsmen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our technicians are not just mechanics—they are automotive artisans with a 
              deep passion for their craft.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Michael Chen", role: "Founder & Master Technician", specialty: "Classic Restoration" },
              { name: "Sarah Martinez", role: "Lead Performance Engineer", specialty: "Engine Tuning" },
              { name: "James Wilson", role: "Fabrication Specialist", specialty: "Custom Work" },
            ].map((member, index) => (
              <div key={index} className="text-center p-8 border border-border hover:border-primary/30 transition-colors">
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-2xl text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Experience the difference
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join the community of enthusiasts who trust {shop.name} with their most prized vehicles.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
