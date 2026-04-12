"use client";

import { Suspense } from "react";
import { useShopInfo } from "@/hooks/use-shop-info";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"

import {
  Droplets,
  Disc,
  Cpu,
  CircleDot,
  Wrench,
  Sparkles,
  Battery,
  Thermometer,
  Gauge,
  Car,
  PaintBucket,
  Settings,
  Phone,
} from "lucide-react";

const services = [
  {
    name: "Oil Change",
    description:
      "Regular oil changes are essential for engine health. We use premium synthetic and conventional oils to keep your engine running smoothly. Our service includes filter replacement and a multi-point inspection.",
    icon: Droplets,
    features: [
      "Full synthetic options",
      "Filter replacement",
      "Fluid top-off",
      "Multi-point inspection",
    ],
  },
  {
    name: "Brake Repair",
    description:
      "Your safety is our priority. From brake pad replacement to rotor resurfacing and complete brake system overhauls, we ensure your stopping power is always at its best.",
    icon: Disc,
    features: [
      "Pad & rotor replacement",
      "Brake fluid flush",
      "Caliper service",
      "ABS diagnostics",
    ],
  },
  {
    name: "Engine Diagnostics",
    description:
      "Using state-of-the-art diagnostic equipment, we pinpoint issues quickly and accurately. From check engine lights to performance problems, we find the root cause.",
    icon: Cpu,
    features: [
      "OBD-II scanning",
      "Live data analysis",
      "Emissions testing",
      "Performance tuning",
    ],
  },
  {
    name: "Tire Rotation",
    description:
      "Extend tire life and improve handling with regular rotations. We also offer tire balancing, alignment checks, and new tire installation from top brands.",
    icon: CircleDot,
    features: [
      "Rotation & balancing",
      "Alignment check",
      "Tread inspection",
      "Pressure adjustment",
    ],
  },
  {
    name: "Custom Builds",
    description:
      "From performance upgrades to full restorations, we bring your automotive vision to life. Our custom shop handles everything from engine swaps to complete frame-off builds.",
    icon: Wrench,
    features: [
      "Performance upgrades",
      "Engine swaps",
      "Suspension mods",
      "Full restorations",
    ],
  },
  {
    name: "Detailing",
    description:
      "Professional detailing services to make your vehicle look showroom fresh. From basic washes to full ceramic coating applications, we treat your car like our own.",
    icon: Sparkles,
    features: [
      "Interior deep clean",
      "Paint correction",
      "Ceramic coating",
      "Engine bay cleaning",
    ],
  },
  {
    name: "Battery Service",
    description:
      "Testing, charging, and replacement of automotive batteries. We stock batteries for most makes and models and offer on-the-spot installation.",
    icon: Battery,
    features: [
      "Battery testing",
      "Terminal cleaning",
      "New battery install",
      "Electrical check",
    ],
  },
  {
    name: "AC & Heating",
    description:
      "Stay comfortable year-round with our climate control services. From refrigerant recharges to heater core repairs, we keep you at the perfect temperature.",
    icon: Thermometer,
    features: [
      "AC recharge",
      "Leak detection",
      "Compressor repair",
      "Heater service",
    ],
  },
  {
    name: "Transmission Service",
    description:
      "Keep your transmission shifting smoothly with regular fluid changes and filter replacements. We handle both automatic and manual transmissions.",
    icon: Gauge,
    features: [
      "Fluid exchange",
      "Filter replacement",
      "Clutch service",
      "Rebuild & repair",
    ],
  },
  {
    name: "Suspension & Steering",
    description:
      "From worn shocks to loose steering, we diagnose and repair all suspension and steering components to restore your ride quality and handling.",
    icon: Car,
    features: [
      "Shock & strut replacement",
      "Ball joint service",
      "Tie rod replacement",
      "Wheel alignment",
    ],
  },
  {
    name: "Body Work",
    description:
      "Minor dent repair, scratch removal, and touch-up painting. For major collision work, we partner with trusted body shops in the area.",
    icon: PaintBucket,
    features: [
      "Dent removal",
      "Scratch repair",
      "Touch-up paint",
      "Rust treatment",
    ],
  },
  {
    name: "General Maintenance",
    description:
      "Comprehensive maintenance services to keep your vehicle reliable. From tune-ups to timing belts, we follow manufacturer recommendations.",
    icon: Settings,
    features: [
      "Tune-ups",
      "Timing belt service",
      "Spark plug replacement",
      "Filter changes",
    ],
  },
];

function ServicesContent() {
  const { shopName, phone } = useShopInfo();

  return (
    <div className="bg-background relative overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="border-b border-border py-16 lg:py-24">
      <div className="absolute inset-0">
        <Image
          src="/demo/toolbox.jpg"
          alt="red car"
          fill
          className="object-cover object-top opacity-3"
          priority
          style={{objectPosition: "center 60%"}}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/80" />
      </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Services
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Complete Auto Care
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-background">
              At {shopName}, we offer a full range of automotive services. From
              routine maintenance to complex repairs and custom builds, our
              expert technicians have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {service.name}
                </h3>
                <p className="mt-2 text-m leading-relaxed text-white">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-white">
            Contact us today to schedule your service or get a free estimate.
            Our team is ready to help keep your vehicle running its best.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href={`tel:${phone.replace(/[^0-9]/g, "")}`}>
                <Phone className="mr-2 h-5 w-5 " />
                Call {phone}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ServicesContent />
    </Suspense>
  );
}
