"use client";

import { Suspense } from "react";
import { useShopInfo } from "@/hooks/use-shop-info";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Award,
  Users,
  Wrench,
  Heart,
  Shield,
  Clock,
  Phone,
} from "lucide-react";

const values = [
  {
    name: "Honesty",
    description:
      "We tell you what your car needs, not what makes us the most money. Transparent pricing and honest recommendations are our foundation.",
    icon: Heart,
  },
  {
    name: "Quality",
    description:
      "We use premium parts and proven techniques. Every job is done right the first time, backed by our satisfaction guarantee.",
    icon: Award,
  },
  {
    name: "Reliability",
    description:
      "When we say it will be ready, it will be ready. We respect your time and keep you informed every step of the way.",
    icon: Clock,
  },
  {
    name: "Expertise",
    description:
      "Our technicians are ASE certified and continuously trained on the latest automotive technologies and repair techniques.",
    icon: Wrench,
  },
];

const milestones = [
  { year: "1999", event: "Shop founded with just two bays and a dream" },
  { year: "2005", event: "Expanded to 6 bays and added custom build division" },
  { year: "2010", event: "Earned ASE Blue Seal of Excellence recognition" },
  { year: "2015", event: "Opened dedicated restoration and detailing facility" },
  { year: "2020", event: "Celebrated serving over 10,000 customers" },
  { year: "Today", event: "Continuing to serve our community with excellence" },
];

function AboutContent() {
  const { shopName, city, phone } = useShopInfo();

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Story
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              For over 25 years, {shopName} has been the trusted auto repair
              destination for families throughout {city}. What started as a
              small two-bay garage has grown into a full-service automotive
              center, but our commitment to honest, quality service has never
              changed.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                More Than Just Repairs
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                We believe in building relationships, not just fixing cars. When
                you bring your vehicle to {shopName}, you become part of our
                family. We take the time to explain what is happening with your
                car, offer honest recommendations, and stand behind every repair
                we make.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Our team of certified technicians brings decades of combined
                experience to every job. From vintage restorations to modern
                computer diagnostics, we have the skills and equipment to handle
                it all.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">12</div>
                    <div className="text-sm text-muted-foreground">
                      Expert Technicians
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      25+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years of Service
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-border" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex gap-6 pl-4">
                    <div className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
                    <div>
                      <div className="text-sm font-semibold text-primary">
                        {milestone.year}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-y border-border bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Stand For
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {value.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Team
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet the Experts
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Our ASE-certified technicians bring passion, expertise, and years
              of experience to every job. They are not just mechanics — they are
              car enthusiasts who take pride in their craft.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Mike Johnson",
                role: "Owner & Master Technician",
                experience: "30+ years experience",
              },
              {
                name: "Sarah Chen",
                role: "Service Manager",
                experience: "15+ years experience",
              },
              {
                name: "David Rodriguez",
                role: "Custom Build Specialist",
                experience: "20+ years experience",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Come See the Difference
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Experience the {shopName} difference for yourself. Stop by for a
            tour, or give us a call to schedule your first service.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href={`tel:${phone.replace(/[^0-9]/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {phone}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <AboutContent />
    </Suspense>
  );
}
