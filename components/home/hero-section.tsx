"use client";

import { Suspense } from "react";
import { useShopInfo } from "@/hooks/use-shop-info";
import { Button } from "@/components/ui/button";
import { Phone, ChevronRight } from "lucide-react";
import Image from "next/image"

import Link from "next/link";

function HeroSectionDiv() {
  const { shopName, city, phone } = useShopInfo();

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/demo/redcar.jpg"
          alt="red car"
          fill
          className="object-cover object-top opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            Trusted Auto Experts in {city}
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Expert Auto Repair at{" "}
            <span className="text-primary">{shopName}</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white sm:text-xl">
            Serving {city} with honest, quality auto repair and custom builds.
            From routine maintenance to complete restorations, your vehicle is
            in expert hands.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="text-base">
              <a href={`tel:${phone.replace(/[^0-9]/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {phone}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group text-base"
            >
              <Link href="/services">
                View Our Services
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                5-Star Reviews
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">25+</span> Years
              Experience
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Locally</span>{" "}
              Owned & Operated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <Suspense fallback={<div className="bg-background" />}>
      <HeroSectionDiv />
    </Suspense>
  );
}
