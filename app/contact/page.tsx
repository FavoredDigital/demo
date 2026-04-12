"use client";

import { Suspense, useState } from "react";
import { useShopInfo } from "@/hooks/use-shop-info";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, Mail, Send, CheckCircle } from "lucide-react";
import Image from "next/image"


function ContactContent() {
  const { shopName, city, phone } = useShopInfo();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    setIsSubmitted(true);
  };

  return (
    <div className="bg-background relative overflow-hidden bg-background">
      <div className="absolute inset-0 ">
        <Image
          src="/demo/carshop.jpg"
          alt="red car"
          fill
          className="object-cover object-top opacity-10"
          priority
          style={{objectPosition: "left 60%"}}

        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
      </div>
      {/* Hero Section */}
      <section className="border-b border-border bg-card py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Have a question or ready to schedule your service? Reach out to us
              and our friendly team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {shopName}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Stop by, give us a call, or fill out the form. We are here to
                help with all your automotive needs.
              </p>

              <dl className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Phone</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {phone}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Address</dt>
                    <dd className="mt-1 text-muted-foreground">
                      123 Auto Lane
                      <br />
                      {city}, ST 12345
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Hours</dt>
                    <dd className="mt-1 text-muted-foreground">
                      <div className="space-y-1">
                        <div className="flex justify-between gap-8">
                          <span>Monday - Friday</span>
                          <span>8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Saturday</span>
                          <span>9:00 AM - 3:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Email</dt>
                    <dd className="mt-1">
                      <a
                        href="mailto:info@yourshop.com"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        info@yourshop.com
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video overflow-hidden rounded-xl border border-border bg-card">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-primary" />
                    <p className="mt-2 text-sm">
                      123 Auto Lane, {city}, ST 12345
                    </p>
                    <a
                      href={`https://maps.google.com/?q=123+Auto+Lane+${city}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
              <h2 className="text-xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we will get back to you within 24
                hours.
              </p>

              {isSubmitted ? (
                <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for contacting {shopName}. We will get back to you
                    soon.
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="oil-change">Oil Change</option>
                      <option value="brake-repair">Brake Repair</option>
                      <option value="engine-diagnostics">
                        Engine Diagnostics
                      </option>
                      <option value="tire-rotation">Tire Rotation</option>
                      <option value="custom-build">Custom Build</option>
                      <option value="detailing">Detailing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Vehicle Information</Label>
                    <Input
                      id="vehicle"
                      name="vehicle"
                      placeholder="Year, Make, Model (e.g., 2020 Toyota Camry)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your vehicle and what service you need..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="border-t border-border bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Need Immediate Assistance?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            For urgent repairs or quick questions, give us a call. Our team is
            ready to help.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href={`tel:${phone.replace(/[^0-9]/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {phone} Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ContactContent />
    </Suspense>
  );
}
