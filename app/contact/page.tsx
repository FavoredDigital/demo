"use client"

import { useState } from "react"
import Image from "next/image"
import { useShopInfo } from "@/hooks/use-shop-info"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, ArrowRight, Check } from "lucide-react"

export default function ContactPage() {
  const shop = useShopInfo()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/garage-exterior.jpg"
            alt="Heritage Auto Works exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            Contact
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Ready to experience the {shop.name} difference? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-4">Contact Information</p>
              <h2 className="font-display text-4xl text-foreground mb-12">
                Let&apos;s connect
              </h2>

              <div className="space-y-10 mb-16">
                <a href={`tel:${shop.phone.replace(/[^0-9]/g, "")}`} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone</p>
                    <p className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                      {shop.phone}
                    </p>
                  </div>
                </a>

                <a href={`mailto:${shop.email}`} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</p>
                    <p className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                      {shop.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-card border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Address</p>
                    <p className="font-display text-xl text-foreground">
                      {shop.address}<br />
                      {shop.city}, {shop.state} {shop.zip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-8 bg-card border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-lg text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">{shop.hours.Monday}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">{shop.hours.Saturday}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">{shop.hours.Sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="p-8 lg:p-12 bg-card border border-border">
                <p className="text-xs uppercase tracking-widest text-primary mb-4">Send a Message</p>
                <h2 className="font-display text-3xl text-foreground mb-8">
                  Request Service
                </h2>

                {formSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 flex items-center justify-center">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-3">
                      Message Received
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We will respond within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-xs uppercase tracking-widest text-muted-foreground">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          required
                          className="bg-background border-border h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-xs uppercase tracking-widest text-muted-foreground">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          required
                          className="bg-background border-border h-12"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          className="bg-background border-border h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          className="bg-background border-border h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-xs uppercase tracking-widest text-muted-foreground">
                        Service Needed
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-background border-border h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="performance">Performance Tuning</SelectItem>
                          <SelectItem value="engine">Engine & Drivetrain</SelectItem>
                          <SelectItem value="fabrication">Custom Fabrication</SelectItem>
                          <SelectItem value="restoration">Restoration</SelectItem>
                          <SelectItem value="maintenance">General Maintenance</SelectItem>
                          <SelectItem value="diagnostics">Diagnostics</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="vehicleYear" className="text-xs uppercase tracking-widest text-muted-foreground">
                          Vehicle Year
                        </Label>
                        <Input
                          id="vehicleYear"
                          placeholder="2024"
                          className="bg-background border-border h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vehicleMake" className="text-xs uppercase tracking-widest text-muted-foreground">
                          Make & Model
                        </Label>
                        <Input
                          id="vehicleMake"
                          placeholder="Porsche 911"
                          className="bg-background border-border h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your vehicle and what you need..."
                        className="bg-background border-border resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors"
                    >
                      Send Message
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 lg:py-32 bg-card border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Location</p>
            <h2 className="font-display text-4xl text-foreground mb-4">
              Visit Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Conveniently located in {shop.city} with ample parking for our clients.
            </p>
          </div>

          <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-display text-2xl text-foreground mb-2">{shop.name}</p>
              <p className="text-muted-foreground mb-6">
                {shop.address}, {shop.city}, {shop.state} {shop.zip}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${shop.address}, ${shop.city}, ${shop.state} ${shop.zip}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-primary hover:text-primary/80 transition-colors"
              >
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
