"use client";

import Link from "next/link";
import {
  Droplets,
  Disc,
  Cpu,
  CircleDot,
  Wrench,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    name: "Oil Change",
    description: "Keep your engine running smooth with regular oil changes",
    icon: Droplets,
  },
  {
    name: "Brake Repair",
    description: "Expert brake service for your safety on the road",
    icon: Disc,
  },
  {
    name: "Engine Diagnostics",
    description: "Advanced diagnostics to identify and fix any issues",
    icon: Cpu,
  },
  {
    name: "Tire Rotation",
    description: "Extend tire life and improve vehicle handling",
    icon: CircleDot,
  },
  {
    name: "Custom Builds",
    description: "Transform your vision into reality with custom work",
    icon: Wrench,
  },
  {
    name: "Detailing",
    description: "Professional detailing to make your car shine",
    icon: Sparkles,
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            From routine maintenance to complete custom builds, we have the
            expertise and equipment to handle it all.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.name}
              href="/services"
              className="group relative rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View all services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
