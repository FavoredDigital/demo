"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useShopInfo } from "@/hooks/use-shop-info"

export function Footer() {
  const shop = useShopInfo()

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <span className="font-display text-3xl font-semibold text-foreground">
              {shop.name}
            </span>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
              {shop.tagline}. Serving discerning automotive enthusiasts since {shop.established}.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navigation
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Services
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Performance Tuning",
                "Engine Rebuilds",
                "Custom Fabrication",
                "Diagnostics",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Visit Us
            </h3>
            <address className="mt-6 not-italic text-sm text-foreground/80 space-y-2">
              <p>{shop.address}</p>
              <p>{shop.city}, {shop.state} {shop.zip}</p>
            </address>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`tel:${shop.phone.replace(/[^0-9]/g, "")}`}
                className="block text-foreground hover:text-primary transition-colors"
              >
                {shop.phone}
              </a>
              <a
                href={`mailto:${shop.email}`}
                className="block text-foreground hover:text-primary transition-colors"
              >
                {shop.email}
              </a>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Schedule an appointment
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {shop.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
