"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useShopInfo } from "@/hooks/use-shop-info";
import { Phone, MapPin, Clock, Wrench } from "lucide-react";

function FooterDiv() {
  const { shopName, city, phone } = useShopInfo();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                {shopName}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your trusted auto repair and custom shop in {city}. Quality
              service, honest prices, and expert craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Oil Change",
                "Brake Repair",
                "Engine Diagnostics",
                "Tire Rotation",
                "Custom Builds",
                "Detailing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  123 Auto Lane
                  <br />
                  {city}, ST 12345
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Mon-Fri: 8am - 6pm
                  <br />
                  Sat: 9am - 3pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {shopName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <Suspense fallback={<div className="bg-background" />}>
      <FooterDiv />
    </Suspense>
  );
}
