"use client"

import Image from "next/image"
import Link from "next/link"
import { useShopInfo } from "@/hooks/use-shop-info"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export default function HomePage() {
  const shop = useShopInfo()

  const services = [
    {
      title: "Performance Tuning",
      description: "Unlock your vehicle's full potential with precision engine tuning and optimization.",
      image: "/images/engine-detail.jpg",
    },
    {
      title: "Full Restorations",
      description: "Complete ground-up restorations that honor your vehicle's heritage.",
      image: "/images/workshop.jpg",
    },
    {
      title: "Custom Fabrication",
      description: "Bespoke solutions crafted to your exact specifications.",
      image: "/images/hero-car.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Porsche Style */}
      <section className="relative h-screen min-h-[700px] flex items-end pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-car.jpg"
            alt="Luxury vehicle in workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.9] tracking-tight">
              Precision.<br />
              Performance.<br />
              <span className="text-primary">Perfection.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              {shop.tagline}. Where automotive excellence meets uncompromising craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 text-white hover:text-primary transition-colors"
              >
                <span className="text-sm font-medium tracking-widest uppercase">Explore Services</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-white hover:text-primary transition-colors"
              >
                <span className="text-sm font-medium tracking-widest uppercase">Book Appointment</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-primary mb-2">
                {new Date().getFullYear() - shop.established}+
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-primary mb-2">5000+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Vehicles Serviced</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-primary mb-2">100%</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-primary mb-2">ASE</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Certified Technicians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Porsche Style */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-4">Our Expertise</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
                Services
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mt-6 lg:mt-0"
            >
              View All Services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="group relative h-[500px] overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-2xl text-white mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs uppercase tracking-widest">Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px]">
              <Image
                src="/images/workshop.jpg"
                alt="Our workshop"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-4">Since {shop.established}</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                A tradition of automotive excellence
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                For over {new Date().getFullYear() - shop.established} years, {shop.name} has been the destination 
                for discerning automotive enthusiasts who demand nothing less than perfection.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Our team of master technicians combines decades of experience with cutting-edge 
                diagnostic technology to deliver results that exceed expectations. Every vehicle 
                that enters our facility receives the meticulous attention it deserves.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <span className="text-sm font-medium tracking-widest uppercase">Our Story</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <svg
              className="w-16 h-16 text-primary/30 mx-auto mb-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              The attention to detail is remarkable. They treat every vehicle as if it were their own prized possession.
            </blockquote>
            <div>
              <p className="text-foreground font-medium">Michael R.</p>
              <p className="text-sm text-muted-foreground">2022 Porsche 911 GT3</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/garage-exterior.jpg"
            alt="Heritage Auto Works exterior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container relative z-10 mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Ready to begin?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Schedule a consultation and experience the {shop.name} difference.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
